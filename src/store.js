import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux"; 
import { persistReducer } from 'redux-persist'

const reducer = combineReducers({
    user : userSlice,
    [appApi.reducerPath] : appApi.reducer,
});

const persistConfig = {
    key : 'root',
    storage,
    blacklist : [appApi.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware : [thunk, appApi.middleware],
    devTools: true
})

export default store