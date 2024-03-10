import {configureStore} from "@reduxjs/toolkit";
import productsSlice from './slice';

const store = configureStore({
    reducer: {
        product: productsSlice,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;