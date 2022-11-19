import classNames from 'classnames/bind';
import { useEffect } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Direction from '~/components/Direction';
import config from '~/config';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
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
            <Direction title="Login" />
            <div className="container">
                <div className={cx('header-page')}>
                    <h1>Login</h1>
                </div>
                <div className={cx('content-page')}>
                    <div className="row">
                        <div className="col-6">
                            <p>If you have an account, please login here</p>
                            <form action="" className={cx('form-action')}>
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Email <span>*</span>
                                    </div>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Email"
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <div className={cx('title-item')}>
                                        Password <span>*</span>
                                    </div>
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Password"
                                    />
                                </div>
                                <Button
                                    className={cx('btn')}
                                    primary
                                    type="submit"
                                    borderRadius
                                >
                                    Login
                                </Button>
                                <Button outline to={config.routes.register}>
                                    Register
                                </Button>
                            </form>
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
                        </div>
                        <div className="col-6">
                            <p>
                                You forget your password? Import your email to recover
                                your password by email
                            </p>
                            <form action="" className={cx('form-action')}>
                                <div className={cx('title-item')}>
                                    Email <span>*</span>
                                </div>
                                <input type="email" name="" id="" placeholder="Email" />
                                <Button
                                    className={cx('btn')}
                                    primary
                                    type="submit"
                                    borderRadius
                                >
                                    Recover password
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
