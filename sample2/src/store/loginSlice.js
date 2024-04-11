import { createSlice } from "@reduxjs/toolkit";

let login = createSlice({
    name: "login",
    initialState: {
        userId: "admin",
        userPw: "1234",
        loginState: false,
        loginModalState: false,
    },
    reducers: {
        toggleModal(state) {
            state.loginModalState = !state.loginModalState;
        },
        loginCheck(state, action) {
            if (
                state.userId === action.payload.id &&
                state.userPw === action.payload.pw
            ) {
                state.loginState = true;
                state.loginModalState = false;
            } else {
                alert("아이디 비번 틀렸음요");
            }
        },
    },
});

export let { toggleModal, loginCheck } = login.actions;

export default login;
