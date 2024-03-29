import { createSlice } from "@reduxjs/toolkit";
import { COUNT_LIVE_CHAT } from "./Constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(COUNT_LIVE_CHAT,1);
            state.messages.unshift(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;