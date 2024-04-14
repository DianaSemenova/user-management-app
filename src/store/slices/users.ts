import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParamsState } from "../../types/types";

export interface IInitialState {
  foodList: { [key: string]: string };
  params: IParamsState;
}

const initialState: IInitialState = {
  foodList: {},
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
    setFoodList(state, action) {
      state.foodList = action.payload;
    },
    setParamsUsers(state, action: PayloadAction<IParamsState>) {
      state.params = action.payload;
    },
  },
});

export const { setParamsUsers, setFoodList } = usersSlice.actions;

export default usersSlice.reducer;
