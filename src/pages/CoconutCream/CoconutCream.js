import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ListProductItems from '~/components/ListProductItems';

function CoconutCream() {
    const CoconutCreamItems = ListProductItems.filter(
        (item) => item.coconutCream === 'true',
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
        <div>
            <DefaultProductPage product={CoconutCreamItems} productName="Coconut Cream" />
        </div>
    );
}

export default CoconutCream;
