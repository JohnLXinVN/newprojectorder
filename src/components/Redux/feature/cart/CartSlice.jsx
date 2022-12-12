const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    cartItems: [],
    totalAmountAll: 0,
    totalPriceAll: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const exitingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalAmountAll++;

            if (!exitingItem) {
                state.cartItems.push({
                    ...newItem,
                    totalPrice: newItem.price,
                    quantity: 1,
                });
            } else {
                exitingItem.quantity++;
                exitingItem.totalPrice =
                    Math.round((exitingItem.totalPrice + newItem.price) * 100) / 100;
            }

            state.totalPriceAll = state.cartItems.reduce(
                (total, item) =>
                    Math.round((total + item.price * item.quantity) * 100) / 100,
                0,
            );
        },

        decrease(state, { payload }) {
            const existingItem = state.cartItems.find((item) => item.id === payload.id);
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== payload.id,
                );
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    Math.round((existingItem.totalPrice - existingItem.price) * 100) /
                    100;
            }
            state.totalPriceAll = state.cartItems.reduce(
                (total, item) =>
                    Math.round((total + item.price * item.quantity) * 100) / 100,
                0,
            );
            state.totalAmountAll--;
        },
        remove(state, { payload }) {
            const idItem = payload.id;
            state.cartItems = state.cartItems.filter((item) => item.id !== idItem);
            state.totalAmountAll =
                Math.round((state.totalAmountAll - payload.quantity) * 100) / 100;
            state.totalPriceAll =
                Math.round((state.totalPriceAll - payload.totalPrice) * 100) / 100;
        },
    },
});

export const CartActions = CartSlice.actions;

export default CartSlice;
