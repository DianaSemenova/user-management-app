import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IParamsState, IBodyUserPost } from "../../types/types";

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
    birthdate: new Date().toString(),
    image: null,
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
    setImage(state, action: PayloadAction<File | null>) {
      state.bodyUserPost.image = action.payload;
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
  },
});

export const {
  setParamsUsers,
  setFoodList,
  setSelectedFoods,
  setImage,
  setUsername,
  setEmail,
  setBirthdate,
} = usersSlice.actions;

export default usersSlice.reducer;
