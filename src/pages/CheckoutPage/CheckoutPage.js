import * as Yup from 'yup';

import { faChevronLeft, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Form, Formik } from 'formik';
import { Col, Container, Row } from 'reactstrap';
import TextFieldCheckout from '~/components/TextFieldCheckout';

import styles from './CheckoutPage.module.scss';
import { useSelector } from 'react-redux';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const CheckoutPage = () => {
    const totalAmountAll = useSelector((state) => state.cart.totalAmountAll);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll);

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(totalPriceAll + 2);
    });

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
            <div className={cx('inner')}>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className={cx('content-left')}>
                                <h1 className={cx('header-title')}>
                                    Cocoo - Kem dừa Côn Đảo
                                </h1>
                                <Row>
                                    <Col lg="6">
                                        <div className={cx('info-customer')}>
                                            <div className={cx('heading')}>
                                                <p>Delivery information</p>
                                                <Link
                                                    className={cx('login')}
                                                    to={config.routes.login}
                                                >
                                                    <FontAwesomeIcon
                                                        className={cx('icon')}
                                                        icon={faUser}
                                                    />
                                                    Login
                                                </Link>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    email: '',
                                                    fullName: '',
                                                    phoneNumber: '',
                                                    province: '',
                                                    district: '',
                                                    note: '',
                                                }}
                                                validationSchema={Yup.object({
                                                    email: Yup.string()
                                                        .email('Email is invalid')
                                                        .required('Email is required'),
                                                    fullName: Yup.string()
                                                        .min(
                                                            6,
                                                            'Your name must be at least 6 characters long',
                                                        )
                                                        .max(20, 'Must be 20 or less')

                                                        .required('Name is required'),
                                                    phoneNumber: Yup.string().required(
                                                        'Your phone number is required',
                                                    ),
                                                    province: Yup.string().required(
                                                        'Your province is required',
                                                    ),
                                                    district: Yup.string().required(
                                                        'Your district number is required',
                                                    ),
                                                    note: Yup.string(),
                                                })}
                                            >
                                                {(formik) => (
                                                    <div>
                                                        <Form>
                                                            <TextFieldCheckout
                                                                label="Email"
                                                                name="email"
                                                                type="email"
                                                                placeholder="Email"
                                                            />
                                                            <TextFieldCheckout
                                                                label="Full Name"
                                                                name="fullName"
                                                                type="text"
                                                                placeholder="Full Name"
                                                            />
                                                            <TextFieldCheckout
                                                                label="Phone Number"
                                                                name="phoneNumber"
                                                                type="text"
                                                                placeholder="Phone Number"
                                                            />
                                                            <TextFieldCheckout
                                                                label="Province"
                                                                name="province"
                                                                type="text"
                                                                placeholder="Your Province"
                                                            />
                                                            <TextFieldCheckout
                                                                label="District"
                                                                name="district"
                                                                type="text"
                                                                placeholder="Your District"
                                                            />
                                                            <TextFieldCheckout
                                                                label="Note"
                                                                name="note"
                                                                textArea
                                                                placeholder="Your District"
                                                            />
                                                        </Form>
                                                    </div>
                                                )}
                                            </Formik>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className={cx('wrap-transport')}>
                                            <div className={cx('heading')}>Transport</div>
                                            <div className={cx('block-fee')}>
                                                <p>Delivery</p>
                                                <div className={cx('transport-fee')}>
                                                    2$
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('wrap-pay')}>
                                            <h2>Pay</h2>
                                            <div className={cx('block-pay')}>
                                                <p>Payment on delivery(COD)</p>
                                                <FontAwesomeIcon
                                                    className={cx('icon')}
                                                    icon={faMoneyBill}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className={cx('content-right')}>
                                <div className={cx('sidebar-header')}>
                                    Order ({totalAmountAll} products)
                                </div>
                                <div className={cx('inner-content')}>
                                    <div className={cx('list-products')}>
                                        {cartItems.map((item) => (
                                            <div className={cx('item')} key={item.id}>
                                                <div className={cx('img')}>
                                                    <img src={item.img} alt="" />
                                                    <div className={cx('quantity')}>
                                                        {item.quantity}
                                                    </div>
                                                </div>
                                                <div className={cx('info')}>
                                                    <div className={cx('title')}>
                                                        {item.title}
                                                    </div>
                                                    <div className={cx('total-price')}>
                                                        {item.price}$
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={cx('code-sale')}>
                                        <form className={cx('group-form')}>
                                            <input
                                                type="text"
                                                placeholder="Import your code"
                                                className={cx('input')}
                                            />
                                            <button
                                                className={cx('btn-apply')}
                                                type="submit"
                                            >
                                                Apply
                                            </button>
                                        </form>
                                    </div>
                                    <div className={cx('pay')}>
                                        <div className={cx('provisional', 'item')}>
                                            <p>Provisional</p>
                                            <span>{totalPriceAll}$</span>
                                        </div>
                                        <div className={cx('transport-fee-pay', 'item')}>
                                            <p>Transport-fee</p>
                                            <span>2$</span>
                                        </div>
                                        <div className={cx('total', 'item')}>
                                            <p>Total</p>
                                            <span>{total}$</span>
                                        </div>
                                    </div>
                                    <div className={cx('footer-content')}>
                                        <Link
                                            className={cx('back')}
                                            to={config.routes.cart}
                                        >
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faChevronLeft}
                                            />
                                            Back to cart
                                        </Link>
                                        <div className={cx('btn-pay')}>Order</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CheckoutPage;
