import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
