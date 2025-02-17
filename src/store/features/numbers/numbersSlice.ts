import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumbersState {
    firstNumber: number | null;
    secondNumber: number | null
}

const initialState: NumbersState = {
    firstNumber: null,
    secondNumber: null  
}

const numbersSice = createSlice({
    name: "numbers",
    initialState,
    reducers: {
        setFirstNumber: (state, action: PayloadAction<number>) =>{
            state.firstNumber = action.payload
        },
        setSecondNummber: (state, action: PayloadAction<number>) => {
            state.secondNumber = action.payload
        },
        resetAll: (state) => {
            state.firstNumber = null,
            state.secondNumber = null
        }
    }
})

export const { setFirstNumber, setSecondNummber, resetAll } = numbersSice.actions;

export default numbersSice.reducer;