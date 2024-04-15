import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParamsState, IBodyUserPost } from "../../types/types";
import dayjs from "dayjs";

export interface IInitialState {
  foodList: { [key: string]: string };
  params: IParamsState;
  bodyUserPost: IBodyUserPost;
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

  bodyUserPost: {
    username: "",
    email: "",
    selectedFoods: [],
    birthdate: dayjs(new Date()).format("DD.MM.YYYY"),
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

    setSelectedFoods(state, action: PayloadAction<number[]>) {
      state.bodyUserPost.selectedFoods = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.bodyUserPost.username = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.bodyUserPost.email = action.payload;
    },
    setBirthdate(state, action: PayloadAction<string>) {
      state.bodyUserPost.birthdate = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.params.sort = action.payload;
    },
  },
});

export const {
  setParamsUsers,
  setFoodList,
  setSelectedFoods,
  setUsername,
  setEmail,
  setBirthdate,
  setSort,
} = usersSlice.actions;

export default usersSlice.reducer;
