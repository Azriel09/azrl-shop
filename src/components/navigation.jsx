import { Outlet, Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "./scss/navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Box className="logo-container">
          <Link to="/">
            <CrwnLogo />
          </Link>
        </Box>
        <Box className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </Box>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
