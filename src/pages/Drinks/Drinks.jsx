import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ListProductItems from '~/components/ListProductItems';

function Drinks() {
    const DrinksItems = ListProductItems.filter((item) => item.drinks === 'true');
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
            <DefaultProductPage product={DrinksItems} productName="Drinks" />
        </div>
    );
}

export default Drinks;
