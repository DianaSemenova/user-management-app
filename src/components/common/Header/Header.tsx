import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            color: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "4px 12px",
            display: isMobile ? "flex" : "none",
          }}
          onClick={handleClickNavBtn}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
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
