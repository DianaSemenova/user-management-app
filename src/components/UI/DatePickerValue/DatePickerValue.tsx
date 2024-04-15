import { useAppDispatch } from "../../../store/hooks";
// import { useAppSelector } from "../../../store/hooks";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { setBirthdate } from "../../../store/slices/users";
import { IUser } from "../../../types/types";

interface IDatePickerValueProps {
  userInfo: IUser | undefined;
}

const DatePickerValue = ({ userInfo }: IDatePickerValueProps) => {
  const dispatch = useAppDispatch();
  // const dateBirthdate = useAppSelector(
  //   (state) => state.users.bodyUserPost.birthdate
  // );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Дата рождения"
          value={dayjs(userInfo?.birthdate)}
          onChange={(newValue) =>
            dispatch(setBirthdate(dayjs(newValue).format("DD.MM.YYYY")))
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePickerValue;
