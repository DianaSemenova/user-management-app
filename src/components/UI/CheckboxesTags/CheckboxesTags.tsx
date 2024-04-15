import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "../../../store/hooks";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { setSelectedFoods } from "../../../store/slices/users";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CheckboxesTags = () => {
  const dispatch = useAppDispatch();
  const foodList = useAppSelector((state) => state.users.foodList);
  const selectedFoods = useAppSelector(
    (state) => state.users.bodyUserPost.selectedFoods
  );

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    values: string[]
  ) => {
    if (foodList) {
      const selectedKeys = values?.map((value) =>
        parseInt(
          Object.keys(foodList).find((key) => foodList[key] === value) || "",
          10
        )
      );

      dispatch(setSelectedFoods(selectedKeys));
    }
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={Object.values(foodList)}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      value={selectedFoods.map((key) => foodList[key])}
      onChange={(event, option) => handleChange(event, option)}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Любимая еда" placeholder="Favorites" />
      )}
    />
  );
};

export default CheckboxesTags;
