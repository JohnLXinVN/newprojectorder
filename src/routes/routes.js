import CartPage from '~/components/Cart/CartPage';
import config from '~/config';
import CheckoutPage from '~/pages/CheckoutPage';
import CoconutCream from '~/pages/CoconutCream';
import Contact from '~/pages/Contact';
import Drinks from '~/pages/Drinks';
import Home from '~/pages/Home';
import IceCreamCup from '~/pages/IceCreamCup';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import Outstanding from '~/pages/Outstanding';
import PromoteProduct from '~/pages/PromoteProduct';
import Register from '~/pages/Register';
import System from '~/pages/System';
import Topping from '~/pages/Topping';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register },
    { path: config.routes.login, component: Login },
    { path: config.routes.introduce, component: Introduce },
    { path: config.routes.promoteproduct, component: PromoteProduct },
    { path: config.routes.outstanding, component: Outstanding },
    { path: config.routes.coconutCream, component: CoconutCream },
    { path: config.routes.drinks, component: Drinks },
    { path: config.routes.iceCreamCup, component: IceCreamCup },
    { path: config.routes.topping, component: Topping },
    { path: config.routes.system, component: System },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.cart, component: CartPage },
    { path: config.routes.checkout, component: CheckoutPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
