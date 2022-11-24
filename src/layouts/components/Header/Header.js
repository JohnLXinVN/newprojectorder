import {
    faCartShopping,
    faChevronDown,
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
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import images from '~/assets/images';
import MiniCart from '~/components/Cart/MiniCart';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const totalAmountAll = useSelector((state) => state.cart.totalAmountAll);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-bar')}>
                <Container>
                    <Row>
                        <Col lg="6">
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
                        </Col>
                        <Col lg="6">
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
                                <Link
                                    className={cx('login', 'item')}
                                    to={config.routes.login}
                                >
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
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('bottom-bar')}>
                <Container>
                    <div className={cx('inner-header')}>
                        <Link
                            className={cx('menu-item', 'item')}
                            to={config.routes.introduce}
                        >
                            Introduce
                        </Link>
                        <div className={cx('item', 'menu-item', 'wrap-menu-children')}>
                            <Link
                                to={config.routes.promoteproduct}
                                className={cx('link-menu')}
                            >
                                Menu
                                <FontAwesomeIcon
                                    className={cx('icon-arrow')}
                                    icon={faChevronDown}
                                />
                            </Link>
                            <PopperWrapper className={cx('wrap-popper')}>
                                <div className={cx('list-item')}>
                                    <Link
                                        className={cx('item-child')}
                                        to={config.routes.outstanding}
                                    >
                                        Outstanding
                                    </Link>
                                    <Link
                                        className={cx('item-child')}
                                        to={config.routes.coconutCream}
                                    >
                                        Coconut Cream
                                    </Link>
                                    <Link
                                        className={cx('item-child')}
                                        to={config.routes.drinks}
                                    >
                                        Drinks
                                    </Link>
                                    <Link
                                        className={cx('item-child')}
                                        to={config.routes.iceCreamCup}
                                    >
                                        Ice cream cup
                                    </Link>
                                    <Link
                                        className={cx('item-child')}
                                        to={config.routes.topping}
                                    >
                                        Topping
                                    </Link>
                                </div>
                            </PopperWrapper>
                        </div>

                        <Link className={cx('menu-item', 'logo')} to={config.routes.home}>
                            <img src={images.logo} alt="logo" />
                        </Link>
                        <Link
                            className={cx('menu-item', 'item')}
                            to={config.routes.system}
                        >
                            System
                        </Link>

                        <Link
                            className={cx('menu-item', 'item')}
                            to={config.routes.contact}
                        >
                            Contact
                        </Link>

                        <div className={cx('wrap-cart')}>
                            <Tippy
                                interactive
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <MiniCart />
                                    </div>
                                )}
                            >
                                <Link
                                    className={cx('cart', 'item')}
                                    to={config.routes.cart}
                                >
                                    <FontAwesomeIcon
                                        className={cx('icon-cart')}
                                        icon={faCartShopping}
                                    />
                                    <div className={cx('amount')}>{totalAmountAll}</div>
                                </Link>
                            </Tippy>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Header;
