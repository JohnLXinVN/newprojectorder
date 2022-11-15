import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct({ img, title, price }) {
    return (
        <>
            <Link className={cx('wrap-item')}>
                <div className={cx('img')}>
                    <img src={img} alt="" />

                    <button className={cx('btn-buy')}>Buy</button>
                </div>
                <div className={cx('description')}>
                    <h3 className={cx('title')}>{title}</h3>
                    <div className={cx('price')}>{price}$</div>
                </div>
            </Link>
        </>
    );
}

export default ItemProduct;
