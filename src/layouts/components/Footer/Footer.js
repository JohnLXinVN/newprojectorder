import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('wrapper')}></div>;
}

export default Footer;
