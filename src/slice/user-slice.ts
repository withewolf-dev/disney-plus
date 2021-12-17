import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
  name: string | null;
  email: string | null;
  photo: string | null;
}
const initialState: UserState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.photo = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
