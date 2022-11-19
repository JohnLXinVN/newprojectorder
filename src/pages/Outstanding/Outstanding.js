import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ProductItems from '~/components/ListProductItems';

function Outstanding() {
    const OutstandingItems = ProductItems.filter((item) => item.outStanding === 'true');
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
        <div>
            <DefaultProductPage product={OutstandingItems} productName="Outstanding" />
        </div>
    );
}

export default Outstanding;
