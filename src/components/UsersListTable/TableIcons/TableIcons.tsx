/* eslint-disable no-restricted-globals */
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IUser } from "../../../types/types";
import { useDeleteUserMutation } from "../../../services/users";

interface ITableIconsProps {
  user: IUser;
}

const TableIcons = ({ user }: ITableIconsProps) => {
  const navigate = useNavigate();
  const [deleteInfoUser, { isLoading, error }] = useDeleteUserMutation();

  const deleteUser = async () => {
    try {
      await deleteInfoUser({ id: user.id });

      if (!isLoading) {
        alert("Пользователь успешно удален");
        navigate("/");
      }

      if (error) {
        alert(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-icons-block">
      <Link to={`/view-user-info/${user.id}`} title="Просмотр">
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

      <Link to={`/update-user/${user.id}`} title="Редактировать">
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
            if (result) {
              deleteUser();
            }
            return;
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
  );
};

export default TableIcons;
