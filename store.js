import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import loginReducer from "./slices/loginSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        login: loginReducer
    }
})
