import { useAppSelector } from "../../../store/hooks";
import { TableCell, TableRow } from "@mui/material";
import { IUser } from "../../../types/types";
import { getFoodName } from "../../../utils/helpers";
import Link from "@mui/material/Link";
import TableIcons from "../TableIcons/TableIcons";

interface IUsersListTableItemProps {
  user: IUser;
  index: number;
}

const UsersListTableItem = ({ user, index }: IUsersListTableItemProps) => {
  const foodList = useAppSelector((state) => state.users.foodList);

  return (
    <TableRow
      sx={{
        background: index % 2 !== 0 ? "inherit" : "rgba(0, 0, 0, 0.05);",
      }}
    >
      <TableCell>{index + 1}</TableCell>
      <TableCell>{user?.id}</TableCell>
      <TableCell>
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
      <TableCell>{user?.username}</TableCell>
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
      <TableCell>{user?.birthdate}</TableCell>
      <TableCell>
        <ul className="container__food-list">
          {user?.favorite_food_ids?.map((foodID) => {
            return <li key={foodID}>{getFoodName(foodID, foodList)}</li>;
          })}
        </ul>
      </TableCell>
      <TableCell>
        <TableIcons user={user} />
      </TableCell>
    </TableRow>
  );
};

export default UsersListTableItem;
