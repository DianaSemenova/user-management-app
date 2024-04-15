import { useAppSelector } from "../../store/hooks";
import { TableBody, TableCell, TableRow } from "@mui/material";
import TableWrapper from "../UI/TableWrapper/TableWrapper";
import { IUser } from "../../types/types";
import { getFoodName } from "../../utils/helpers";
import Link from "@mui/material/Link";

interface IUserInfoTableProps {
  user: IUser | undefined;
}

const UserInfoTable = ({ user }: IUserInfoTableProps) => {
  const foodList = useAppSelector((state) => state.users.foodList);

  return (
    <TableWrapper size={"16px"}>
      <TableBody>
        <TableRow
          sx={{
            background: "#e9ecef",
          }}
        >
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            ID
          </TableCell>
          <TableCell>{user?.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            Имя
          </TableCell>
          <TableCell>{user?.username}</TableCell>
        </TableRow>
        <TableRow
          sx={{
            background: "#e9ecef",
          }}
        >
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            Email
          </TableCell>
          <TableCell>
            <Link
              underline="hover"
              color="inherit"
              href={`mailto:${user?.email}`}
              style={{
                color: "#007bff",
                fontSize: "14px",
              }}
            >
              {user?.email}
            </Link>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            Дата рождения
          </TableCell>
          <TableCell>{user?.birthdate}</TableCell>
        </TableRow>
        <TableRow
          sx={{
            background: "#e9ecef",
          }}
        >
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            Любимая еда
          </TableCell>
          <TableCell>
            <ul className="container__food-list">
              {user?.favorite_food_ids?.map((foodID) => {
                return <li key={foodID}>{getFoodName(foodID, foodList)}</li>;
              })}
            </ul>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: 600,
            }}
          >
            Фото
          </TableCell>
          <TableCell
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="container-img-block">
              <img
                className="container-img-block__img"
                src={
                  user?.photo_id
                    ? `https://tasks.tizh.ru/file/get?id=${user?.photo_id}`
                    : "../user-placeholder.png"
                }
                alt="avatar-user"
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableWrapper>
  );
};

export default UserInfoTable;
