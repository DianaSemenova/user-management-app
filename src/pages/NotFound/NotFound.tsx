import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Страница, которую вы ищете, не существует...</p>
      <button type="button" onClick={() => navigate("/")}>
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFound;
