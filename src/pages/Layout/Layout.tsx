import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="container center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
