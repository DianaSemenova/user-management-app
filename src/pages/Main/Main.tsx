import { useNavigate } from "react-router-dom";
import ActiveLastBreadcrumb from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { Button } from "@mui/material";
import UsersListTable from "../../components/UsersListTable/UsersListTable";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="container center">
      <ActiveLastBreadcrumb />
      <Button
        variant="contained"
        sx={{
          width: "250px",
          padding: "10px 5px",
          boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => navigate("/create-user")}
      >
        Добавить пользователя
      </Button>
      <UsersListTable />
    </main>
  );
};

export default Main;
