import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct({ item }) {
    const showModalCart = (item) => {};

    return (
        <>
            <Link className={cx('wrap-item')}>
                <div className={cx('img')}>
                    <img src={item.img} alt="" />

                    <button className={cx('btn-buy')} onClick={showModalCart(item)}>
                        Buy
                    </button>
                </div>
                <div className={cx('description')}>
                    <h3 className={cx('title')}>{item.title}</h3>
                    <div className={cx('price')}>{item.price}$</div>
                </div>
            </Link>
        </>
    );
}

export default ItemProduct;
