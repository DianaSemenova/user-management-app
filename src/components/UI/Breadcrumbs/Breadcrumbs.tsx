import * as React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

interface IActiveLastBreadcrumbProps {
  id?: string | undefined;
}

const ActiveLastBreadcrumb = ({ id = "" }: IActiveLastBreadcrumbProps) => {
  const location = useLocation().pathname === `/view-user-info/${id}`;

  return (
    <div
      role="presentation"
      className="container-breadcrumbs"
      onClick={(event) => {
        if (!location) {
          handleClick(event);
        }
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ color: "#6c757d", fontSize: "14px" }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          style={{
            color: "#007bff",
            fontSize: "14px",
          }}
        >
          Главная
        </Link>
        <Link
          underline={location ? "hover" : "none"}
          color="inherit"
          href="/"
          style={{
            color: location ? "#007bff" : "#6c757d",
            cursor: location ? "pointer" : "text",
          }}
        >
          Пользователи
        </Link>
        {location && (
          <Link
            underline="none"
            href="/"
            style={{
              cursor: "text",
              color: "#6c757d",
            }}
          >
            {id}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default ActiveLastBreadcrumb;
