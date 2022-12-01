import { faGrinStars } from '@fortawesome/free-regular-svg-icons';
import {
    faCaretDown,
    faCaretUp,
    faStar,
    faXmark,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Col, Container, Row } from 'reactstrap';
import Button from '../Button';
import Direction from '../Direction';
import ListProductItems from '../ListProductItems';
import TextField from '../TextField';

import styles from './FoodDetail.module.scss';
import { useDispatch } from 'react-redux';
import { CartActions } from '../Redux/feature/cart/CartSlice';

const cx = classNames.bind(styles);

const FoodDetail = () => {
    const { idLink } = useParams();
    const dispatch = useDispatch();

    const item = ListProductItems.find((item) => item.idLink === idLink);
    const [tab, setTab] = useState('des');
    const [modal, setModal] = useState(false);

    const handleDefault = (e) => {
        e.stopPropagation();
    };

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
            <Direction title={item.title} />
            <Container>
                <div className={cx('wrap-info')}>
                    <Row>
                        <Col lg="7">
                            <div className={cx('img')}>
                                <img src={item.img} alt="" />
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className={cx('info')}>
                                <h1 className={cx('title')}>{item.title}</h1>
                                <div className={cx('price')}>{item.price}$</div>
                                <div className={cx('stars')}>
                                    <FontAwesomeIcon
                                        className={cx('icon-star', 'active')}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={cx('icon-star', 'active')}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={cx('icon-star')}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={cx('icon-star')}
                                        icon={faStar}
                                    />
                                    <FontAwesomeIcon
                                        className={cx('icon-star')}
                                        icon={faStar}
                                    />
                                </div>
                                <div className={cx('form-product')}>
                                    <div className={cx('wrap-add-cart')}>
                                        <Button
                                            primary
                                            borderRadius
                                            className={cx('btn-buy')}
                                            onClick={() =>
                                                dispatch(CartActions.addItem(item))
                                            }
                                        >
                                            Buy
                                        </Button>
                                    </div>
                                    <div className={cx('des')}>
                                        <label>Description: </label>
                                        <div className={cx('text-des')}>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={cx('selection')}>
                    <div className={cx('wrap-link')}>
                        <div
                            className={cx('tab-link', tab === 'des' && 'active')}
                            onClick={() => setTab('des')}
                        >
                            Description
                        </div>
                        <div
                            className={cx('tab-link', tab === 'custom' && 'active')}
                            onClick={() => setTab('custom')}
                        >
                            Custom tab
                        </div>
                        <div
                            className={cx('tab-link', tab === 'evaluate' && 'active')}
                            onClick={() => setTab('evaluate')}
                        >
                            Evaluate
                        </div>
                    </div>
                    {tab === 'des' && (
                        <div className={cx('tab-content-des')}>{item.description}</div>
                    )}
                    {tab === 'custom' && (
                        <div className={cx('tab-content-custom')}>
                            <div className="">
                                Các nội dung Hướng dẫn mua hàng viết ở đây
                            </div>
                        </div>
                    )}
                    {tab === 'evaluate' && (
                        <div className={cx('tab-content-evaluate')}>
                            <p>
                                Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành
                                người đầu tiên đánh giá cho sản phẩm này
                            </p>
                            <div
                                className={cx('btn-send-evaluate')}
                                onClick={() => setModal(!modal)}
                            >
                                Send your evaluate
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            {modal && (
                <div className={cx('modal')} onClick={() => setModal(!modal)}>
                    <div className={cx('inner')} onClick={handleDefault}>
                        <div className={cx('text-info')}>
                            <h3>Evaluate product</h3>
                            <h1>{item.title}</h1>
                        </div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                content: '',
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .min(
                                        6,
                                        'Your name must be at least 6 characters long',
                                    )
                                    .max(20, 'Must be 20 or less')

                                    .required('Name is required'),
                                email: Yup.string()
                                    .email('Email is invalid')
                                    .required('Email is required'),
                                content: Yup.string().required('Content is required'),
                            })}
                        >
                            {(formik) => (
                                <div>
                                    <Form>
                                        <TextField
                                            label="Name"
                                            placeholder="Import your first name and last name"
                                            name="name"
                                            type="text"
                                            className={cx('input')}
                                        />
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="Import your email"
                                            className={cx('input')}
                                        />

                                        <TextField
                                            label="Content"
                                            name="content"
                                            type="text"
                                            placeholder="Import your content"
                                            textArea={true}
                                        />
                                        <Button
                                            primary
                                            type="submit"
                                            borderRadius
                                            className={cx('btn-send')}
                                        >
                                            Send Evaluate
                                        </Button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                        <div className={cx('close-btn')} onClick={() => setModal(!modal)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetail;
