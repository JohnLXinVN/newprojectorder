import classNames from 'classnames/bind';
import { Children } from 'react';

import styles from './OnlyContentLayout.module.scss';

const cx = classNames.bind(styles);

const OnlyContentLayout = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default OnlyContentLayout;
