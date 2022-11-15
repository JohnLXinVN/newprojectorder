import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGoogle,
    faInstagram,
    faPinterest,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCaretRight,
    faLocation,
    faLocationPin,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('selection-brand')}>
                <div className="container">
                    <div className={cx('wrap-brand')}>
                        <div className={cx('img-brand')}>
                            <img src={images.imgBrand3} alt="" />
                        </div>

                        <div className={cx('img-brand')}>
                            <img src={images.imgBrand4} alt="" />
                        </div>
                        <div className={cx('img-brand')}>
                            <img src={images.imgBrand5} alt="" />
                        </div>
                        <div className={cx('img-brand')}>
                            <img src={images.imgBrand6} alt="" />
                        </div>
                        <div className={cx('img-brand')}>
                            <img src={images.imgBrand7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-top')}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className={cx('wrap-contact')}>
                                <h5>Send email</h5>
                                <form action="" className={cx('form-email')}>
                                    <input
                                        className={cx('input')}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Input your email"
                                    />
                                    <button>Send now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-4">
                            <ul className={cx('social-items')}>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faPinterest} />
                                </li>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </li>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li className={cx('icon')}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('site-bottom')}>
                <div className="container">
                    <div className={cx('inner')}>
                        <div className="row">
                            <div className="col-4">
                                <div className={cx('information')}>
                                    <h4 className={cx('header')}>Information</h4>
                                    <div className={cx('list-items')}>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Introduce
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Menu
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Franchise
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            System
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            News
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Contact
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('blog')}>
                                    <h4 className={cx('header')}>Blog</h4>
                                    <div className={cx('list-blog')}>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Điểm danh những món nhất định phải thử khi đến
                                            Hà Nội
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Tổng hợp món với trân châu đường đen hot trend
                                            làm dân tình đổ lùi lụi
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            Tổng hợp những món ăn từ matcha làm cho giới
                                            trẻ đổ “đứ đừ đừ”
                                        </div>
                                        <div className={cx('item')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faCaretRight}
                                            />
                                            4 món ăn làm từ tinh than tre lạ mắt mà vô
                                            cùng bổ dưỡng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className={cx('contact')}>
                                    <h4 className={cx('header')}>Contact</h4>
                                    <p>
                                        <b>Cocoo - Kem dừa Côn Đảo</b>
                                    </p>
                                    <div className={cx('list-menu')}>
                                        <div className={cx('item-menu')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faLocationPin}
                                            />
                                            <p>
                                                25 Mã Mây, Hoàn Kiếm, Hà Nội, Hà Nội,
                                                Vietnam
                                            </p>
                                        </div>
                                        <div className={cx('item-menu')}>
                                            <FontAwesomeIcon
                                                className={cx('icon')}
                                                icon={faPhone}
                                            />
                                            <p>
                                                <a
                                                    className={cx('phone-number')}
                                                    href="tel:+012345678"
                                                >
                                                    012345678
                                                </a>{' '}
                                                -{' '}
                                                <a
                                                    className={cx('phone-number')}
                                                    href="tel:+0832966003"
                                                >
                                                    0832966003
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className={cx('text')}>
                                Copyright belongs to <b> Hoang Minh Anh</b> | Provided by
                                Hoang Minh Anh
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('pay')}>
                                <img src={images.imgPayment} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
