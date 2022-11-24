import {
    faLock,
    faMinus,
    faPlus,
    faTicket,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Direction from '~/components/Direction';

import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);

const CartPage = () => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <Direction title="Cart" />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className={cx('wrap-product')}>
                            <div className={cx('header-page')}>
                                <h1>Your Cart</h1>
                            </div>
                            <div className={cx('list-item')}>
                                <div className={cx('item')}>
                                    <div className={cx('info')}>
                                        <img src={images.imgProduct15} alt="" />
                                        <div className={cx('product-des')}>
                                            <div className={cx('title')}>
                                                Kem dừa ngon
                                            </div>
                                            <div className={cx('price')}>12$</div>
                                        </div>
                                    </div>
                                    <div className={cx('quality-info')}>
                                        <div className={cx('input-quantity')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-minus')}
                                                icon={faMinus}
                                            />
                                            12
                                            <FontAwesomeIcon
                                                className={cx('icon-plus')}
                                                icon={faPlus}
                                            />
                                        </div>
                                        <div className={cx('price-total')}>122$</div>
                                        <div className={cx('btn-remove')}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('info')}>
                                        <img src={images.imgProduct15} alt="" />
                                        <div className={cx('product-des')}>
                                            <div className={cx('title')}>
                                                Kem dừa ngon
                                            </div>
                                            <div className={cx('price')}>12$</div>
                                        </div>
                                    </div>
                                    <div className={cx('quality-info')}>
                                        <div className={cx('input-quantity')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-minus')}
                                                icon={faMinus}
                                            />
                                            12
                                            <FontAwesomeIcon
                                                className={cx('icon-plus')}
                                                icon={faPlus}
                                            />
                                        </div>
                                        <div className={cx('price-total')}>122$</div>
                                        <div className={cx('btn-remove')}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('info')}>
                                        <img src={images.imgProduct15} alt="" />
                                        <div className={cx('product-des')}>
                                            <div className={cx('title')}>
                                                Kem dừa ngon
                                            </div>
                                            <div className={cx('price')}>12$</div>
                                        </div>
                                    </div>
                                    <div className={cx('quality-info')}>
                                        <div className={cx('input-quantity')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-minus')}
                                                icon={faMinus}
                                            />
                                            12
                                            <FontAwesomeIcon
                                                className={cx('icon-plus')}
                                                icon={faPlus}
                                            />
                                        </div>
                                        <div className={cx('price-total')}>122$</div>
                                        <div className={cx('btn-remove')}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('info')}>
                                        <img src={images.imgProduct15} alt="" />
                                        <div className={cx('product-des')}>
                                            <div className={cx('title')}>
                                                Kem dừa ngon
                                            </div>
                                            <div className={cx('price')}>12$</div>
                                        </div>
                                    </div>
                                    <div className={cx('quality-info')}>
                                        <div className={cx('input-quantity')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-minus')}
                                                icon={faMinus}
                                            />
                                            12
                                            <FontAwesomeIcon
                                                className={cx('icon-plus')}
                                                icon={faPlus}
                                            />
                                        </div>
                                        <div className={cx('price-total')}>122$</div>
                                        <div className={cx('btn-remove')}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('wrap-info-more')}>
                                <div className={cx('btn-see-more')}>
                                    <FontAwesomeIcon
                                        className={cx('icon-ticket')}
                                        icon={faTicket}
                                    />
                                    Import your promotion code
                                </div>
                                <div className={cx('input')}>
                                    <form action="" className={cx('form-input')}>
                                        <input
                                            type="text"
                                            placeholder="Please import your coupon"
                                        />
                                        <Button type="submit" className={cx('btn-enter')}>
                                            Enter
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={cx('header-page')}>
                            <h1>Summarize</h1>
                        </div>
                        <div className={cx('Summarize-detail')}>
                            <p>
                                Initial fee:
                                <span>12$</span>
                            </p>
                            <p>
                                Transport fee:
                                <span>Free</span>
                            </p>
                            <div className={cx('country')}>Viet Nam</div>
                            <div className={cx('total')}>
                                <p>
                                    Total fee:
                                    <span>12$</span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('check-out')}>
                            <Button className={cx('btn-checkout')} borderRadius>
                                Check out
                            </Button>
                            <div className={cx('safe-payment')}>
                                <FontAwesomeIcon icon={faLock} />
                                Safe payment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
