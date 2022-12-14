import {
    faLock,
    faMinus,
    faPlus,
    faTicket,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Button from '~/components/Button';
import Direction from '~/components/Direction';
import { CartActions } from '~/components/Redux/feature/cart/CartSlice';
import config from '~/config';

import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);

const CartPage = () => {
    const [seeMore, setSeeMore] = useState(false);
    const stateCart = useSelector((state) => state.cart.cartItems);
    const totalAmountAll = useSelector((state) => state.cart.totalAmountAll);
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll);
    const dispatch = useDispatch();
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
            <Direction title="Cart" />
            <Container>
                <Row>
                    <Col lg="8">
                        <div className={cx('wrap-product')}>
                            <div className={cx('header-page')}>
                                <h1>Your Cart</h1>
                            </div>

                            <div className={cx('list-item')}>
                                {totalAmountAll < 1 ? (
                                    <h2>Your cart is clear</h2>
                                ) : (
                                    stateCart.map((item) => (
                                        <div className={cx('item')} key={item.id}>
                                            <div className={cx('info')}>
                                                <img src={item.img} alt="" />
                                                <div className={cx('product-des')}>
                                                    <div className={cx('title')}>
                                                        {item.title}
                                                    </div>
                                                    <div className={cx('price')}>
                                                        {item.price}$
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('quality-info')}>
                                                <div className={cx('input-quantity')}>
                                                    <FontAwesomeIcon
                                                        className={cx('icon-minus')}
                                                        icon={faMinus}
                                                        onClick={() =>
                                                            dispatch(
                                                                CartActions.decrease(
                                                                    item,
                                                                ),
                                                            )
                                                        }
                                                    />
                                                    {item.quantity}
                                                    <FontAwesomeIcon
                                                        className={cx('icon-plus')}
                                                        icon={faPlus}
                                                        onClick={() =>
                                                            dispatch(
                                                                CartActions.addItem(item),
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className={cx('price-total')}>
                                                    {item.totalPrice}$
                                                </div>
                                                <div
                                                    className={cx('btn-remove')}
                                                    onClick={() =>
                                                        dispatch(CartActions.remove(item))
                                                    }
                                                >
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className={cx('wrap-info-more')}>
                                <div
                                    className={cx('btn-see-more')}
                                    onClick={() => setSeeMore(!seeMore)}
                                >
                                    <FontAwesomeIcon
                                        className={cx('icon-ticket')}
                                        icon={faTicket}
                                    />
                                    Import your promotion code
                                </div>
                                {seeMore && (
                                    <div className={cx('input')}>
                                        <form action="" className={cx('form-input')}>
                                            <input
                                                type="text"
                                                placeholder="Please import your coupon"
                                            />
                                            <Button
                                                type="submit"
                                                className={cx('btn-enter')}
                                            >
                                                Enter
                                            </Button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className={cx('header-page')}>
                            <h1>Summarize</h1>
                        </div>
                        <div className={cx('Summarize-detail')}>
                            <p>
                                Initial fee:
                                <span>{totalPriceAll}$</span>
                            </p>
                            <p>
                                Transport fee:
                                <span>Free</span>
                            </p>
                            <div className={cx('country')}>Viet Nam</div>
                            <div className={cx('total')}>
                                <p>
                                    Total fee:
                                    <span>{totalPriceAll}$</span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('check-out')}>
                            {totalAmountAll === 0 ? (
                                <Button
                                    className={cx('btn-checkout')}
                                    borderRadius
                                    to={config.routes.checkout}
                                    disable
                                >
                                    Check out
                                </Button>
                            ) : (
                                <Button
                                    className={cx('btn-checkout')}
                                    borderRadius
                                    to={config.routes.checkout}
                                >
                                    Check out
                                </Button>
                            )}

                            <div className={cx('safe-payment')}>
                                <FontAwesomeIcon icon={faLock} />
                                Safe payment
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CartPage;
