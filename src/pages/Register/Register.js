import classNames from 'classnames/bind';
import { Col, Container, Row } from 'reactstrap';
import images from '~/assets/images';
import Button from '~/components/Button';
import Direction from '~/components/Direction';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <Direction title="Register" />
            <Container>
                <div className={cx('header-page')}>
                    <h1>Register</h1>
                </div>
                <div className={cx('content-page')}>
                    <p>If you don't have an account, please register here</p>
                    <form action="" className={cx('wrap-form')}>
                        <Row>
                            <Col lg="6">
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Surname <span>*</span>
                                    </div>
                                    <input type="text" />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Name <span>*</span>
                                    </div>
                                    <input type="text" />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Email <span>*</span>
                                    </div>
                                    <input type="email" />
                                </div>
                            </Col>
                            <Col lg="6">
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Phone number <span>*</span>
                                    </div>
                                    <input type="tel" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Password <span>*</span>
                                    </div>
                                    <input type="password" />
                                </div>
                            </Col>
                        </Row>
                        <Button primary borderRadius className={cx('btn')}>
                            Register
                        </Button>
                    </form>
                </div>
                <div className={cx('another-choice')}>
                    <p>Or login by </p>
                    <div className={cx('list-item')}>
                        <div className={cx('icon')}>
                            <img src={images.imgFbBtn} alt="" />
                        </div>
                        <div className={cx('icon')}>
                            <img src={images.imgGgBtn} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Register;
