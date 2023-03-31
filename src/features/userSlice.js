import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addNotifications: (state, { payload }) => {
            console.log(state.newMessage[payload])
            if (state.newMessage[payload]) {
                state.newMessage[payload] = state.newMessage[payload] + 1
            } else {
                state.newMessage[payload] = 1;
            }
        },
        resetNotifications: (state, { payload }) => {
            delete state.newMessage[payload];
        },
    },

    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null);
    },

})

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
