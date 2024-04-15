import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import DatePickerValue from "../UI/DatePickerValue/DatePickerValue";
import CheckboxesTags from "../UI/CheckboxesTags/CheckboxesTags";
import { schema } from "../../utils/helpers";
import Avatar from "./Avatar/Avatar";
import { setUsername, setEmail } from "../../store/slices/users";
import { useCreateUserMutation } from "../../services/users";

const FormCreateUser = () => {
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
  console.log("errors", errors);

  const onSubmit = async () => {
    try {
      await createUser({
        username,
        email,
        selectedFoods,
        birthdate,
        image,
      });

      if (!isLoading && data?.id) {
        console.log("data", data);
        const id = data?.id;

        alert("Пользователь успешно создан");
        navigate(`/view-user-info/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-add-user" onSubmit={handleSubmit(onSubmit)}>
      <Avatar image={image} setImage={setImage} />
      <TextField
        id="username"
        label="Имя пользователя"
        fullWidth
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
        autoComplete="off"
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />

      <TextField
        id="email"
        label="Адрес электронной почты"
        fullWidth
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <DatePickerValue />

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
