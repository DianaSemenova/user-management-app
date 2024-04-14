import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Main from "../pages/Main/Main";
import UserInfo from "../pages/UserInfo/UserInfo";
import CreateUser from "../pages/CreateUser/CreateUser";
import NotFound from "../pages/NotFound/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/view-user-info/:id" element={<UserInfo />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
