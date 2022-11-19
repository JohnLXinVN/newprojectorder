import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './Direction.module.scss';

const cx = classNames.bind(styles);

function Direction({ title }) {
    return (
        <div className="direction">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={cx('wrap')}>
                            <Link className={cx('link-home')} to={config.routes.home}>
                                Home
                            </Link>{' '}
                            | <span>{title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Direction;
