/* eslint-disable no-restricted-globals */
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITableIconsProps {
  id: number;
}

const TableIcons = ({ id }: ITableIconsProps) => {
  return (
    <div className="container-icons-block">
      <Link to={`/view-user-info/${id}`} title="Просмотр">
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
  );
};

export default TableIcons;
