import classNames from 'classnames/bind';

import styles from './MiniCart.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faMinus,
    faPlus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '~/components/Redux/feature/cart/CartSlice';

const cx = classNames.bind(styles);

const MiniCart = () => {
    const stateCart = useSelector((state) => state.cart.cartItems);

    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll);
    const totalAmountAll = useSelector((state) => state.cart.totalAmountAll);

    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>Cart</h1>
            <div className={cx('wrap-item')}>
                {totalAmountAll < 1 ? (
                    <h2>Your cart is clear</h2>
                ) : (
                    stateCart.map((item) => (
                        <div className={cx('item-cart')} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={cx('info')}>
                                <h4 className={cx('title')}>{item.title}</h4>
                                <div className={cx('price')}>{item.price}$</div>
                                <div className={cx('amount-wrap')}>
                                    <div
                                        className={cx('prev-item', 'icon')}
                                        onClick={() =>
                                            dispatch(CartActions.decrease(item))
                                        }
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </div>
                                    <div className={cx('amount')}>{item.quantity}</div>
                                    <div
                                        className={cx('cre-item', 'icon')}
                                        onClick={() =>
                                            dispatch(CartActions.addItem(item))
                                        }
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={cx('btn-remove')}
                                onClick={() => dispatch(CartActions.remove(item))}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className={cx('footer')}>
                <div className={cx('amount-price')}>
                    <p>Total amount: </p>

                    <div className={cx('price-checkout')}>{totalPriceAll}$</div>
                </div>
                <div className={cx('btn-footer')}>
                    <Button primary borderRadius to={config.routes.cart}>
                        To cart
                    </Button>
                    <Button
                        className={cx('btn-checkout')}
                        borderRadius
                        to={config.routes.checkout}
                    >
                        Check out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;
