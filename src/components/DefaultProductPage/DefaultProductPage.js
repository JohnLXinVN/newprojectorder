import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Direction from '../Direction';
import ItemProduct from '../ItemProduct';

import styles from './DefaultProductPage.module.scss';

const cx = classNames.bind(styles);

function DefaultProductPage({ product, productName }) {
    return (
        <div className={cx('wrapper')}>
            <Direction title={productName} />
            <div className="container">
                <div className={cx('content-page')}>
                    <div className="row">
                        <div className="col-2">
                            <div className={cx('menu')}>
                                <h3 className={cx('title-header')}>Category</h3>
                                <div className={cx('wrap-guide')}>
                                    <h3>Guide</h3>
                                    <div className={cx('lists')}>
                                        <Link className={cx('item')}>Shopping guide</Link>
                                        <Link className={cx('item')}>Payment Guide</Link>
                                        <Link className={cx('item')}>Delivery guide</Link>
                                        <Link className={cx('item')}>
                                            Terms of Service
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className={cx('main-container')}>
                                <div className={cx('header')}>
                                    <h3 className={cx('title-header')}>{productName}</h3>

                                    <div className={cx('list-items')}>
                                        <div className="row">
                                            {product.map((item) => (
                                                <div className="col-3" key={item.id}>
                                                    <ItemProduct item={item} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultProductPage;
