import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import config from '~/config';
import Direction from '../Direction';
import ItemProduct from '../ItemProduct';

import styles from './DefaultProductPage.module.scss';

const cx = classNames.bind(styles);

function DefaultProductPage({ product, productName }) {
    return (
        <div className={cx('wrapper')}>
            <Direction title={productName} />
            <Container>
                <div className={cx('content-page')}>
                    <Row>
                        <Col xl="2">
                            <div className={cx('menu')}>
                                <h3 className={cx('title-header')}>Category</h3>
                                <div className={cx('wrap-guide')}>
                                    <h3>Guide</h3>
                                    <div className={cx('lists')}>
                                        <Link
                                            className={cx('item')}
                                            to={config.routes.shoppingGuide}
                                        >
                                            Shopping guide
                                        </Link>
                                        <Link
                                            className={cx('item')}
                                            to={config.routes.paymentGuide}
                                        >
                                            Payment Guide
                                        </Link>
                                        <Link
                                            className={cx('item')}
                                            to={config.routes.deliveryGuide}
                                        >
                                            Delivery guide
                                        </Link>
                                        <Link
                                            className={cx('item')}
                                            to={config.routes.termsOfService}
                                        >
                                            Terms of Service
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl="10">
                            <div className={cx('main-container')}>
                                <div className={cx('header')}>
                                    <h3 className={cx('title-header')}>{productName}</h3>

                                    <div className={cx('list-items')}>
                                        <Row>
                                            {product.map((item) => (
                                                <Col
                                                    xl="3"
                                                    lg="4"
                                                    md="4"
                                                    sm="6"
                                                    xs="6"
                                                    key={item.id}
                                                    className="mb-4"
                                                >
                                                    <ItemProduct item={item} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default DefaultProductPage;
