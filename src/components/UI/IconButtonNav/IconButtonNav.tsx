import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IIconButtonNavProps {
  isMobile: boolean;
  onClick: () => void;
}

const IconButtonNav = ({ isMobile, onClick }: IIconButtonNavProps) => {
  return (
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
      onClick={onClick}
    >
      <MenuIcon sx={{ fontSize: 30 }} />
    </IconButton>
  );
};

export default IconButtonNav;
