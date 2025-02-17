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
        updateValues: (state, action: PayloadAction<number>) => {
            if (state.firstNumber === null && state.secondNumber === null) {
                state.firstNumber = action.payload;
            } else if (typeof state.firstNumber === "number" && state.secondNumber === null ) {
                state.secondNumber = action.payload;
            } else {
                state.firstNumber = action.payload,
                state.secondNumber = null
            }
        }
    }
})

export const { updateValues } = numbersSice.actions;

export default numbersSice.reducer;