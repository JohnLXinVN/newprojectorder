import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const showLists = useSelector((state) => state.showLists.isShow);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content', showLists && 'active-show-list')}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
