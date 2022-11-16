import config from '~/config';
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Login from '~/pages/Login';
import PromoteProduct from '~/pages/PromoteProduct';
import Register from '~/pages/Register';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register },
    { path: config.routes.login, component: Login },
    { path: config.routes.introduce, component: Introduce },
    { path: config.routes.promoteproductm, component: PromoteProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
