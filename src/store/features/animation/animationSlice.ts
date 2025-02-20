import { createSlice } from "@reduxjs/toolkit";

interface AnimationState {
    timeColored: boolean,
    scoreColored: boolean
}

const initialState: AnimationState = {
    timeColored: false,
    scoreColored: false
}

const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducers: {
        setTimeColor: (state) => {
            state.timeColored = !state.timeColored
        },
        setScoreColor: (state) => {
            state.scoreColored = !state.scoreColored
        }
    }
})
export const { setTimeColor, setScoreColor } = animationSlice.actions;

export default animationSlice.reducer;