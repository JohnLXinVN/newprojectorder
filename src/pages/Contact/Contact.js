import {
    faFacebook,
    faGoogle,
    faInstagram,
    faPinterest,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import images from '~/assets/images';
import Direction from '~/components/Direction';
import config from '~/config';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
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
            <Direction title="Contact" />
            <Container>
                <div className={cx('header-page')}>
                    <h1>Contact</h1>
                </div>
                <div className={cx('content-page')}>
                    <Row>
                        <Col lg="9" md="9">
                            <div className={cx('box-map')}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.473021696869!2d105.84830581424502!3d21.013751093667885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab98d8a3ce0b%3A0x1f0e4d74b56853e3!2zQ29jb28gLSBLZW0gROG7q2EgQ8O0biDEkOG6o28gKCBjxqEgc-G7nyAxICk!5e0!3m2!1sen!2s!4v1620706641668!5m2!1sen!2s"
                                    width="100%"
                                    height="450"
                                    className={cx('map')}
                                    loading="lazy"
                                    title="map"
                                />
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className={cx('wrap-info')}>
                                <Link className={cx('logo')} to={config.routes.home}>
                                    <img src={images.logo} alt="" />
                                </Link>
                                <div className={cx('hotline')}>
                                    <p>Hotline: 0832966003</p>
                                </div>
                                <div className={cx('info')}>
                                    <h2 className={cx('header-info')}>
                                        Cocoo - Kem dừa Côn Đảo
                                    </h2>
                                    <div className={cx('location', 'info-item')}>
                                        <FontAwesomeIcon
                                            className={cx('icon-info')}
                                            icon={faLocationPin}
                                        />
                                        <p>
                                            25 Mã Mây, Hoàn Kiếm, Hà Nội, Hà Nội, Vietnam
                                        </p>
                                    </div>
                                    <div className={cx('phone-number', 'info-item')}>
                                        <FontAwesomeIcon
                                            className={cx('icon-info')}
                                            icon={faPhone}
                                        />
                                        <a href="tel:+0832966003">0832966003</a>
                                    </div>
                                    <div className={cx('email', 'info-item')}>
                                        <FontAwesomeIcon
                                            className={cx('icon-info')}
                                            icon={faEnvelope}
                                        />
                                        <a href="mailto:anhhm03.work@gmail.com">
                                            anhhm03.work@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('follow-us')}>
                                    <h1>Follow us</h1>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="9" lg="12">
                            <form className={cx('form-select')} action="">
                                <div className={cx('form-group')}>
                                    <label htmlFor="">
                                        Name
                                        <span className={cx('required')}>*</span>
                                    </label>
                                    <input type="text" className={cx('input')} />
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">
                                        Email
                                        <span className={cx('required')}>*</span>
                                    </label>
                                    <input type="email" className={cx('input')} />
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">
                                        Description
                                        <span className={cx('required')}>*</span>
                                    </label>

                                    <textarea
                                        required
                                        rows={4}
                                        className={cx('input', 'input-des')}
                                    />
                                </div>

                                <div className={cx('block-submit')}>
                                    <button className={cx('btn')}>Submit</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
