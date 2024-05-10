import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../../models/AuthSlice";

interface LoginProps {
  username: string;
  token: string;
}

const initialState: AuthSlice = {
  isLoggedIn: !!sessionStorage.getItem("token"),
  modalOpen: false,
  username: sessionStorage.getItem("username") ?? "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, modalOpen: action.payload };
    },
    doLogin: (state, action: PayloadAction<LoginProps>) => {
      sessionStorage.setItem('token', action.payload.token)
      sessionStorage.setItem('username', action.payload.username)
      return {
        ...state,
        username: action.payload.username,
        modalOpen: false,
        isLoggedIn: true,
      };
  
    },
    doLogout: (state) => {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
      return { ...state, username: "", isLoggedIn: false };
    },
  },
});

export const { updateModal, doLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
