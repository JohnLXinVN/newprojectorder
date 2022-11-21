import classNames from 'classnames/bind';

import styles from './MiniCart.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MiniCart = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Cart</div>
            <div className={cx('wrap-item')}>
                <div className={cx('item-cart')}>
                    <img src={images.imgProduct2} alt="" />
                    <div className={cx('info')}>
                        <h4 className={cx('title')}>Kem Dừa Ngon</h4>
                        <div className={cx('price')}>12$</div>
                        <div className={cx('amount-wrap')}>
                            <div className={cx('prev-item', 'icon')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className={cx('amount')}>122</div>
                            <div className={cx('cre-item', 'icon')}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn-remove')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('amount-price')}>
                    <p>Total amount: </p>
                    <div className={cx('price-checkout')}>1.2$</div>
                </div>
                <div className={cx('btn-footer')}>
                    <Button primary borderRadius>
                        To cart
                    </Button>
                    <Button className={cx('btn-checkout')} borderRadius>
                        Check out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MiniCart;
