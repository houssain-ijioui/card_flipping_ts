import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumbersState {
    firstNumberIndex: number | null;
    secondNumberIndex: number | null
}

const initialState: NumbersState = {
    firstNumberIndex: null,
    secondNumberIndex: null  
}

const numbersSice = createSlice({
    name: "numbers",
    initialState,
    reducers: {
        updateValues: (state, action: PayloadAction<number>) => {
            if (state.firstNumberIndex === null && state.secondNumberIndex === null) {
                state.firstNumberIndex = action.payload;
            } else if (typeof state.firstNumberIndex === "number" && state.secondNumberIndex === null ) {
                state.secondNumberIndex = action.payload;
            } else {
                state.firstNumberIndex = action.payload,
                state.secondNumberIndex = null
            }
        }
    }
})

export const { updateValues } = numbersSice.actions;

export default numbersSice.reducer;