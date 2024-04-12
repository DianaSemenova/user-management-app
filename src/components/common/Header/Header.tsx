import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav center">
        <Link to="/" className="header__link">
          My Application
        </Link>
        <div className="header-nav-block">
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
