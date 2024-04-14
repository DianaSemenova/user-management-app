import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import IconButtonNav from "../../UI/IconButtonNav/IconButtonNav";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isActiveNavBtn, setIsActiveBtn] = useState(false);

  const handleClickNavBtn = () => {
    if (isMobile) {
      setIsActiveBtn(!isActiveNavBtn);
    }
  };

  return (
    <header className="header">
      <nav className="header-nav center">
        <Link to="/" className="header__link">
          My Application
        </Link>
        <IconButtonNav isMobile={isMobile} onClick={handleClickNavBtn} />
        <div
          className={
            isActiveNavBtn ? "header-nav-block-mob" : "header-nav-block"
          }
          onClick={handleClickNavBtn}
        >
          <Link to="/" className="header-nav__link">
            Home
          </Link>

          <a
            className="header-nav__link"
            href="https://tasks.tizh.ru/swagger"
            target="_blank"
            rel="noreferrer"
          >
            Swagger
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
