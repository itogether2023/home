import { configureStore } from "@reduxjs/toolkit";
import login from "store/loginSlice";

export default configureStore({
    reducer: {
        login: login.reducer,
    },
});
