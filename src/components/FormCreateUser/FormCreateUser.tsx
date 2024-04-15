import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import DatePickerValue from "../UI/DatePickerValue/DatePickerValue";
import CheckboxesTags from "../UI/CheckboxesTags/CheckboxesTags";
import { schema, clearingFormData } from "../../utils/helpers";
import Avatar from "./Avatar/Avatar";
import { setUsername, setEmail } from "../../store/slices/users";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../services/users";
import { IUser } from "../../types/types";

interface IFormCreateUserProps {
  isEdit: boolean;
  userInfo: IUser | undefined;
}

const FormCreateUser = ({ isEdit, userInfo }: IFormCreateUserProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { username, email, selectedFoods, birthdate } = useAppSelector(
    (state) => state.users.bodyUserPost
  );
  const [image, setImage] = useState<File | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [createUser, { isLoading, data }] = useCreateUserMutation();
  const [updateUser, { isLoading: isLoadingUser, data: dataUser }] =
    useUpdateUserMutation();

  const onSubmit = async () => {
    try {
      const fettchUser = isEdit ? updateUser : createUser;
      await fettchUser({
        username,
        email,
        selectedFoods,
        birthdate,
        image,
      });

      if (!isLoading && data?.id && !isEdit) {
        const id = data?.id;

        clearingFormData(dispatch);

        alert("Пользователь успешно создан");
        navigate(`/view-user-info/${id}`);
      }

      if (!isLoadingUser && dataUser?.id && isEdit) {
   
        const id = dataUser?.id;

        clearingFormData(dispatch);

        alert("Пользователь успешно создан");
        navigate(`/view-user-info/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-add-user" onSubmit={handleSubmit(onSubmit)}>
      <Avatar image={image} setImage={setImage} userInfo={userInfo} />
      <TextField
        id="username"
        label="Имя пользователя"
        fullWidth
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
        autoComplete="off"
        value={username}
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />

      <TextField
        id="email"
        label="Адрес электронной почты"
        fullWidth
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <DatePickerValue userInfo={userInfo} />

      <CheckboxesTags />
      <Button
        type="submit"
        variant="contained"
        sx={{ padding: "20px 10px", fontSize: "14px" }}
      >
        Сохранить
      </Button>
    </form>
  );
};

export default FormCreateUser;
