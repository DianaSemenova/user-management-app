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
              <TableRow
                key={user.id}
                sx={{
                  background: index % 2 !== 0 ? "inherit" : "#dee2e6",
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <img
                    src={
                      user.photo_id
                        ? "user.photo_id"
                        : "public/user-placeholder.png"
                    }
                    alt="./user-placeholder.png"
                  />
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.birthdate}</TableCell>
                <TableCell>{user.favorite_food_ids[0]}</TableCell>
                <TableCell>иконки</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default UsersListTable;
