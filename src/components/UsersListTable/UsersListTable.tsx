import { useAppSelector } from "../../store/hooks";
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

const UsersListTable = () => {
  const params = useAppSelector((state) => state.users.params);
  const { data } = useGetUsersQuery(params);

  return (
    <TableWrapper>
      <TableHead>
        <TableRow>
          {tableHeaderNames.map((item) => (
            <TableCell key={item.name}>{item.name}</TableCell>
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
