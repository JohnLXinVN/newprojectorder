import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts';
import { publicRoutes } from './routes';
import styles from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import images from './assets/images';

const cx = classNames.bind(styles);

function App() {
    const [arrowTop, setArrowTop] = useState(false);

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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setArrowTop(true);
        } else {
            setArrowTop(false);
        }
    });

    return (
        <div className={cx('App')}>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.component;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <div className={cx('social')}>
                <img className={cx('item')} src={images.imgFace} alt="" />
                <img className={cx('item')} src={images.imgZalo} alt="" />
            </div>
            <a className={cx('link-phone')} href="tel:+0832966003">
                <div className={cx('wrap-icon-phone')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                </div>
                <div className={cx('phone-number')}>0832966003</div>
            </a>

            {arrowTop && (
                <div
                    className={cx('item-fixed-right')}
                    onClick={() => {
                        scrollToTop();
                    }}
                >
                    <div className={cx('item')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faArrowUp} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
