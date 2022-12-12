import CartPage from '~/components/Cart/CartPage';
import FoodDetail from '~/components/FoodDetail';
import config from '~/config';
import { OnlyContentLayout } from '~/layouts';
import CheckoutPage from '~/pages/CheckoutPage';
import CoconutCream from '~/pages/CoconutCream';
import Contact from '~/pages/Contact';
import DeliveryGuide from '~/pages/DeliveryGuide';
import Drinks from '~/pages/Drinks';
import Home from '~/pages/Home';
import IceCreamCup from '~/pages/IceCreamCup';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import Outstanding from '~/pages/Outstanding';
import PaymentGuide from '~/pages/PaymentGuide';
import PromoteProduct from '~/pages/PromoteProduct';
import Register from '~/pages/Register';
import ShoppingGuide from '~/pages/ShoppingGuide';
import System from '~/pages/System';
import TermsOfService from '~/pages/TermsOfService';
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
    { path: config.routes.checkout, component: CheckoutPage, layout: OnlyContentLayout },
    { path: config.routes.shoppingGuide, component: ShoppingGuide },
    { path: config.routes.paymentGuide, component: PaymentGuide },
    { path: config.routes.deliveryGuide, component: DeliveryGuide },
    { path: config.routes.termsOfService, component: TermsOfService },
    { path: '/foods/:idLink', component: FoodDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
