import { useEffect } from 'react';
import DefaultProductPage from '~/components/DefaultProductPage';
import ListProductItems from '~/components/ListProductItems';

function Topping() {
    const ToppingItems = ListProductItems.filter((item) => item.topping === 'true');
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //         /* you can also use 'auto' behaviour
    //          in place of 'smooth' */
    //     });
    // };

    // useEffect(() => {
    //     scrollToTop();
    // }, []);
    return (
        <div>
            <DefaultProductPage product={ToppingItems} productName="Topping" />
        </div>
    );
}

export default Topping;
