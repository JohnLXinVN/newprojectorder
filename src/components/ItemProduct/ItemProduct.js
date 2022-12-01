import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartActions } from '../Redux/feature/cart/CartSlice';

import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct({ item }) {
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(CartActions.addItem(item));

        toast.success('You have successfully added the product to your cart', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
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
        <>
            <Link className={cx('wrap-item')} to={`/foods/${item.idLink}`}>
                <div className={cx('img')}>
                    <img src={item.img} alt="" />

                    <button className={cx('btn-buy')} onClick={handleAdd}>
                        Add to cart
                    </button>
                </div>
                <div className={cx('description')}>
                    <h3 className={cx('title')}>{item.title}</h3>
                    <div className={cx('price')}>{item.price}$</div>
                </div>
            </Link>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default ItemProduct;
