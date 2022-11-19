import classNames from 'classnames/bind';
import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ProductItems from '~/components/ListProductItems';

import styles from './PromoteProduct.module.scss';

const cx = classNames.bind(styles);

function PromoteProduct() {
    const PromoteProductItems = ProductItems.filter(
        (item) => item.promoteProduct === 'true',
    );
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
            <DefaultProductPage
                product={PromoteProductItems}
                productName="Promote Product"
            />
        </div>
    );
}

export default PromoteProduct;
