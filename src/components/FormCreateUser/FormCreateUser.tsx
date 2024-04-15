import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import DatePickerValue from "../UI/DatePickerValue/DatePickerValue";
import CheckboxesTags from "../UI/CheckboxesTags/CheckboxesTags";
import { schema } from "../../utils/helpers";
import Avatar from "./Avatar/Avatar";
import { setUsername, setEmail } from "../../store/slices/users";

const FormCreateUser = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      console.log("в разарботке");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-add-user" onSubmit={handleSubmit(onSubmit)}>
      <Avatar />
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
      <Button type="submit" variant="contained" sx={{ padding: "20px 10px" }}>
        Сохранить
      </Button>
    </form>
  );
};

export default FormCreateUser;
