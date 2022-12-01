import classNames from 'classnames/bind';
import { Formik, Form, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'reactstrap';
import images from '~/assets/images';
import Button from '~/components/Button';
import Direction from '~/components/Direction';
import TextField from '~/components/TextField';

import styles from './Register.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Direction title="Register" />
            <Container>
                <div className={cx('header-page')}>
                    <h1>Register</h1>
                </div>
                <div className={cx('content-page')}>
                    <p>If you don't have an account, please register here</p>
                    <Formik
                        initialValues={{
                            surname: '',
                            name: '',
                            email: '',
                            phoneNumber: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={Yup.object({
                            surname: Yup.string()
                                .min(6, 'Your surname must be at least 6 characters long')
                                .max(20, 'Must be 20 or less')
                                .required('Surname is required'),
                            name: Yup.string()
                                .min(6, 'Your name must be at least 6 characters long')
                                .max(20, 'Must be 20 or less')

                                .required('Name is required'),
                            email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required'),
                            phoneNumber: Yup.string().required(
                                'Your phone number is required',
                            ),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Password must match')
                                .required('Confirm Password is required'),
                        })}
                    >
                        {(formik) => (
                            <div>
                                <Form className={cx('form-action')}>
                                    <Row>
                                        <Col lg="6">
                                            <TextField
                                                label="Surname"
                                                name="surname"
                                                type="text"
                                                placeholder="Import your surname"
                                            />
                                        </Col>
                                        <Col lg="6">
                                            <TextField
                                                label="Name"
                                                name="name"
                                                type="text"
                                                placeholder="Import your Name"
                                            />
                                        </Col>
                                        <Col lg="6">
                                            <TextField
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Import your Email"
                                            />
                                        </Col>
                                        <Col lg="6">
                                            <TextField
                                                label="Phone number"
                                                name="phoneNumber"
                                                type="tel"
                                                placeholder="Import your Phone number"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <TextField
                                                label="Password"
                                                name="password"
                                                type="password"
                                                placeholder="Import your Password"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <TextField
                                                label="Confirm Password"
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="Import your Password"
                                            />
                                        </Col>
                                    </Row>
                                    <Button
                                        primary
                                        borderRadius
                                        className={cx('btn')}
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className={cx('another-choice')}>
                    <p>Or login by </p>
                    <div className={cx('list-item')}>
                        <div className={cx('icon')}>
                            <img src={images.imgFbBtn} alt="" />
                        </div>
                        <div className={cx('icon')}>
                            <img src={images.imgGgBtn} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Register;
