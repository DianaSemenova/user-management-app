import { BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
