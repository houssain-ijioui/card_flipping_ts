import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from './features/numbers/numbersSlice';
import animationReducer from "./features/animation/animationSlice";


const store = configureStore({
    reducer: {
        numbers: numbersReducer,
        animation: animationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;