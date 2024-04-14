/* eslint-disable no-restricted-globals */
import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import { IUser } from "../../../types/types";
import { useGetFoodListQuery } from "../../../services/users";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IUsersListTableItemProps {
  user: IUser;
  index: number;
}

const UsersListTableItem = ({ user, index }: IUsersListTableItemProps) => {
  const { data: foodList } = useGetFoodListQuery(undefined);

  const getFoodName = (foodID: number) => {
    if (foodList && foodList[foodID]) {
      return foodList[foodID];
    } else {
      return "Некорректный ID еды";
    }
  };

  return (
    <TableRow
      sx={{
        background: index % 2 !== 0 ? "inherit" : "#e9ecef",
      }}
    >
      <TableCell>{index + 1}</TableCell>
      <TableCell>{user?.id}</TableCell>
      <TableCell>
        <div className="container-img-block">
          <img
            className="container-img-block__img"
            src={
              user.photo_id
                ? `https://tasks.tizh.ru/file/get?id=${user.photo_id}`
                : "user-placeholder.png"
            }
            alt="avatar-user"
          />
        </div>
      </TableCell>
      <TableCell>{user?.username}</TableCell>
      <TableCell>{user?.email}</TableCell>
      <TableCell>{user?.birthdate}</TableCell>
      <TableCell>
        {user?.favorite_food_ids?.map((foodID) => {
          return <div key={foodID}>{getFoodName(foodID)}</div>;
        })}
      </TableCell>
      <TableCell>
        <div className="container-icons-block">
          <Link to="/" title="Просмотр">
            <VisibilityIcon
              color="primary"
              sx={{
                fontSize: "25px",
                "&:hover": {
                  fill: "#064b8e",
                },
              }}
              aria-label="Просмотр"
            />
          </Link>

          <Link to="/" title="Редактировать">
            <EditIcon
              color="primary"
              sx={{
                fontSize: "25px",
                "&:hover": {
                  fill: "#064b8e",
                },
              }}
            />
          </Link>

          <Link to="/" title="Удалить">
            <button
              className="container-icons-block__button"
              onClick={() => {
                const result = confirm(
                  "Вы уверены, что хотите удалить этот элемент?"
                );
                alert(result);
              }}
            >
              <DeleteIcon
                color="primary"
                sx={{
                  fontSize: "25px",
                  "&:hover": {
                    fill: "#064b8e",
                  },
                }}
              />
            </button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UsersListTableItem;
