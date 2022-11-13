import {
    faClockFour,
    faLocationPin,
    faPhone,
    faSearch,
    faUnlockKeyhole,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-bar')}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className={cx('top-bar-left')}>
                                <div className={cx('location', 'item')}>
                                    <div className="df">
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faLocationPin} />
                                        </div>
                                        <p>Mỹ Đình 1, Nam Từ Liêm, Hà Nội</p>
                                    </div>
                                </div>
                                <a className={cx('phone', 'item')} href="tel:0832966003">
                                    <div className="df">
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <p> 0832966003</p>
                                    </div>
                                </a>
                                <div className={cx('help', 'item')}>
                                    <div className="df">
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faClockFour} />
                                        </div>
                                        <p>24/7 support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={cx('top-bar-right')}>
                                <Link
                                    className={cx('register', 'item')}
                                    to={config.routes.register}
                                >
                                    <div className="df">
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faUnlockKeyhole} />
                                        </div>
                                        <p>Register</p>
                                    </div>
                                </Link>
                                <Link className={cx('login', 'item')} to={config.routes.login}>
                                    <div className="df">
                                        <div className={cx('icon')}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <p>Login</p>
                                    </div>
                                </Link>

                                <Tippy
                                    interactive
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className={cx('block-input-search')}>
                                                <input
                                                    type="text"
                                                    placeholder="Search product..."
                                                />
                                                <div
                                                    className={cx(
                                                        'icon-search',
                                                        'icon-search-input',
                                                    )}
                                                >
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <div className={cx('btn-search')}>
                                        <div className={cx('icon-search')}>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </div>
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
