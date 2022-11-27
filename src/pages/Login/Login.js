import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Form, Formik, useFormik } from 'formik';
import { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import * as Yup from 'yup';

import images from '~/assets/images';
import Button from '~/components/Button';
import Direction from '~/components/Direction';
import TextField from '~/components/TextField';
import config from '~/config';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
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
            <Direction title="Login" />
            <Container>
                <div className={cx('header-page')}>
                    <h1>Login</h1>
                </div>
                <div className={cx('content-page')}>
                    <Row>
                        <Col lg="6">
                            <p>If you have an account, please login here</p>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string()
                                        .email('Email is invalid')
                                        .required('Email is required'),
                                    password: Yup.string()
                                        .min(
                                            6,
                                            'Your password must be at least 6 characters long',
                                        )
                                        .required('Password is required'),
                                })}
                            >
                                {(formik) => (
                                    <div>
                                        <Form className={cx('form-action')}>
                                            <TextField
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Import your email address"
                                            />
                                            <TextField
                                                label="Password"
                                                name="password"
                                                type="password"
                                                placeholder="Import your password"
                                            />
                                            <Button
                                                className={cx('btn')}
                                                value="Submit form"
                                                primary
                                                type="submit"
                                                borderRadius
                                            >
                                                Login
                                            </Button>
                                            <Button outline to={config.routes.register}>
                                                Register
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
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
                        </Col>
                        <Col lg="6">
                            <p>
                                You forget your password? Import your email to recover
                                your password by email
                            </p>

                            <Formik
                                initialValues={{
                                    email: '',
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string()
                                        .email('Email is invalid')
                                        .required('Email is required'),
                                })}
                            >
                                {(formik) => (
                                    <div>
                                        <Form className={cx('form-action')}>
                                            <TextField
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Import your email address"
                                            />

                                            <Button
                                                className={cx('btn')}
                                                primary
                                                type="submit"
                                                borderRadius
                                            >
                                                Recover password
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Login;
