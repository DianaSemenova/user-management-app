import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { useGetUsersQuery } from "../../services/users";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import TableWrapper from "../UI/TableWrapper/TableWrapper";
import { tableHeaderNames } from "../../utils/data";
import UsersListTableItem from "./UsersListTableItem/UsersListTableItem";
import StraightIcon from "@mui/icons-material/Straight";
import { setSort } from "../../store/slices/users";

const UsersListTable = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.users.params);
  const { data } = useGetUsersQuery(params);

  const handleSort = (item: any) => {
    dispatch(setSort(item));

    if (item === params.sort) {
      dispatch(setSort(`-${item}`));
    } else {
      dispatch(setSort(item));
    }
  };

  return (
    <TableWrapper>
      <TableHead>
        <TableRow>
          {tableHeaderNames.map((item) => (
            <TableCell key={item.name} onClick={() => handleSort(item)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                {item.name}
                {params.sort && params.sort === item.name && (
                  <StraightIcon sx={{ rotate: "-180" }} />
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {tableHeaderNames.map((item, index) => (
            <TableCell key={index}>
              {item.nameEn !== "" && item.nameEn !== "photo_id" && (
                <TextField placeholder="" variant="outlined" size="small" />
              )}
            </TableCell>
          ))}
        </TableRow>
        {data?.map((user, index) => (
          <UsersListTableItem key={user.id} user={user} index={index} />
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default UsersListTable;
