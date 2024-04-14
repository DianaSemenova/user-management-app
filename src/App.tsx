import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import "./styles/app.scss";
import { AppRoutes } from "./routes/routes";
import { useGetFoodListQuery } from "./services/users";
import { setFoodList } from "./store/slices/users";

function App() {
  const { data: foodList } = useGetFoodListQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (foodList) {
      dispatch(setFoodList(foodList));
    }
  }, [foodList, dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
