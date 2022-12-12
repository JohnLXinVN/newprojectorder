import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './feature/cart/CartSlice';
import ShowListMenuSlice from './feature/ShowListMenu/ShowListMenuSlice';

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        showLists: ShowListMenuSlice.reducer,
    },
});

export default store;
