import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ListProductItems from '~/components/ListProductItems';

function IceCreamCup() {
    const IceCreamCupItems = ListProductItems.filter(
        (item) => item.iceCreamCup === 'true',
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
            <DefaultProductPage product={IceCreamCupItems} productName="Ice Cream Cup" />
        </div>
    );
}

export default IceCreamCup;
