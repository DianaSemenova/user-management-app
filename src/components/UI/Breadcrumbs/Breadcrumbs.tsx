import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const ActiveLastBreadcrumb = () => {
  return (
    <div
      role="presentation"
      className="container-breadcrumbs"
      onClick={handleClick}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ color: "#6c757d", fontSize: "14px" }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          style={{ color: "#007bff", fontSize: "14px" }}
        >
          Главная
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{ color: "#6c757d", fontSize: "14px" }}
        >
          Пользователи
        </Link>
        {/* <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          ID
        </Link> */}
      </Breadcrumbs>
    </div>
  );
};

export default ActiveLastBreadcrumb;
