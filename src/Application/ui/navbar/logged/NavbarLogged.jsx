/** Libraries */
import { useState } from "react";
import { useNavigate } from "react-router";

import { Divider } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";

/** Material UI - Icons */
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

/** Components */
import { CartItem } from "../../../ui";
import { NotificationsItem } from "../../../ui";
import { SearchBar } from "../../../ui";
import { DialogLogout } from '../../../ui';
import { MovilMenu } from "../../../ui";

/** Material UI - Custom components */
const Navbar = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "10vh",
  backgroundColor: "#fff",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1000,
}));

const FirstIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  marginLeft: "1.5vw",
  width: "25vw",
  "& .MuiSvgIcon-root": {
    color: "#707B7C",
    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SecondIconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
    justifyContent: "center",
  },
}));

const CartItemContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "30%",
  color: "#707B7C",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    width: "85%",
    display: "none",
  },
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "1.5%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const MenuContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "15%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavbarLogged = () => {
  const navigate = useNavigate();

  const [dialogLogoutOpen, setDialogLogoutOpen] = useState(false);

  return (
    <>
      <DialogLogout
        dialogLogoutOpen={dialogLogoutOpen}
        setDialogLogoutOpen={setDialogLogoutOpen}
        handleCloseMenu={() => {}}
      />
      <Navbar>
        <MenuContainer>
          <MovilMenu />
        </MenuContainer>

        <FirstIconsContainer>
          <Tooltip title="Ir al inicio" arrow>
            <HomeIcon
              sx={{ fontSize: "25px", mr: "1vw" }}
              onClick={() => navigate("/")}
            />
          </Tooltip>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: "2.5vh",
              color: "#000",
            }}
          />

          <Tooltip title="Cerrar sesión" arrow>
            <LogoutIcon
              sx={{ fontSize: "22.5px", ml: "1vw" }}
              onClick={() => setDialogLogoutOpen(true)}
            />
          </Tooltip>
        </FirstIconsContainer>

        <SecondIconsContainer>
          <CartItemContainer>
            <CartItem />

            <NotificationsItem />
          </CartItemContainer>

          <SearchContainer>
            <SearchBar />
          </SearchContainer>
        </SecondIconsContainer>
      </Navbar>
    </>
  );
};
