import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShow: false,
};

const ShowListMenuSlice = createSlice({
    name: 'showLists',
    initialState,
    reducers: {
        setShow(state) {
            state.isShow = !state.isShow;
        },
    },
});

export const showListsActions = ShowListMenuSlice.actions;

export default ShowListMenuSlice;
