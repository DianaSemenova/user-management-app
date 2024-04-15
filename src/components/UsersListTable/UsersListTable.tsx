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
    console.log("item", item);
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
            <TableCell key={item.name} onClick={() => handleSort(item.nameEn)}>
              <div className="container-table-headers">
                {item.name}
                {params.sort &&
                  (params.sort.startsWith("-")
                    ? params.sort.slice(1)
                    : params.sort) === item.nameEn && (
                    <StraightIcon
                      sx={{
                        transform: params.sort.includes("-")
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />
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
