import { useAppSelector } from "../../store/hooks";
import { useGetUsersQuery } from "../../services/users";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { tableHeaderNames } from "../../utils/data";
import UsersListTableItem from "./UsersListTableItem/UsersListTableItem";

const UsersListTable = () => {
  const params = useAppSelector((state) => state.users.params);
  const { data } = useGetUsersQuery(params);

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "1px solid rgb(189 189 189)",
            fontSize: "14px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table>
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
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default UsersListTable;
