import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from './features/numbers/numbersSlice';


const store = configureStore({
    reducer: {
        numbers: numbersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;