import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './feature/cart/CartSlice';

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    },
});

export default store;
