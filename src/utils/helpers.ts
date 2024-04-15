import { Dispatch } from "react";
import * as yup from "yup";
import {
  setSelectedFoods,
  setUsername,
  setEmail,
  setBirthdate,
  setSort,
} from "../store/slices/users";
import dayjs from "dayjs";
import { AnyAction } from "redux";

export const getFoodName = (
  foodID: number,
  foodList: { [key: string]: string }
) => {
  if (foodList && foodList[foodID]) {
    return foodList[foodID];
  } else {
    return "Некорректный ID еды";
  }
};

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("Имя пользователя обязательно для заполнения"),
  email: yup
    .string()
    .email("Некорректный адрес электронной почты")
    .required("Адрес электронной почты обязателен для заполнения"),
  // birthdate: yup,
  // .date()
  // .required("Дата рождения обязательна для заполнения")
  // .max(new Date(), "Дата рождения не может быть в будущем"),
});

export const clearingFormData = (dispatch: Dispatch<AnyAction>) => {
  dispatch(setSelectedFoods([]));
  dispatch(setUsername(""));
  dispatch(setEmail(""));
  dispatch(setBirthdate(dayjs(new Date()).format("DD.MM.YYYY")));
  dispatch(setSort(""));
};
