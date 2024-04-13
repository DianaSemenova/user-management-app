import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParamsState } from "../../types/types";

export interface IInitialState {
  params: IParamsState;
}

const initialState: IInitialState = {
  params: {
    page: 1,
    "per-page": 100,
    // fields: null,
    expand: "",
    sort: "",
    "UserSearch[id]": "",
    "UserSearch[username]": "",
    "UserSearch[email]": "",
    "UserSearch[birthdateStart]": "",
    "UserSearch[birthdateEnd]": "",
  },
};

export const usersSlice = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    setParamsUsers(state, action: PayloadAction<IParamsState>) {
      state.params = action.payload;
    },
  },
});

export const { setParamsUsers } = usersSlice.actions;

export default usersSlice.reducer;
