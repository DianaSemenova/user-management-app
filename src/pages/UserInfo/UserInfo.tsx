/* eslint-disable no-restricted-globals */
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ActiveLastBreadcrumb from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { Button } from "@mui/material";
import UserInfoTable from "../../components/UserInfoTable/UserInfoTable";
import { useGetUserQuery } from "../../services/users";
import { useDeleteUserMutation } from "../../services/users";

const UserInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetUserQuery(id);
  const [deleteInfoUser, { isLoading, error }] = useDeleteUserMutation();

  const deleteUser = async () => {
    try {
      await deleteInfoUser({ id });

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
    <>
      <ActiveLastBreadcrumb id={id} />
      <div className="container-box">
        <Button
          variant="contained"
          sx={{
            padding: "10px 50px",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => navigate("/create-user")}
        >
          Изменить
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: "10px 50px",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.1)",
            background: "#dc3545",
            "&:hover": {
              background: "#dc3545;",
            },
          }}
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
          Удалить
        </Button>
      </div>
      <UserInfoTable user={data} />
    </>
  );
};

export default UserInfo;
