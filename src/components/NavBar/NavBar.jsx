import React from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";

function NavBar() {
  const navigate = useNavigate();

  function redirectTo(path) {
    navigate(path);
  }

  return (
    <Styled.NavBar>
      <Styled.Ul>
        <Styled.Li onClick={() => redirectTo("/register-product")}>
          <CreateNewFolderRoundedIcon sx={{ color: "#000" }} /> <br />
          <Styled.Label>Registrar Prod.</Styled.Label>
        </Styled.Li>
        <Styled.Li onClick={() => redirectTo("/dashboard")}>
          <HomeRoundedIcon sx={{ color: "#000" }} /> <br />
          <Styled.Label>Dashboard</Styled.Label>
        </Styled.Li>
        <Styled.Li onClick={() => redirectTo("/register-sell")}>
          <QrCodeScannerRoundedIcon sx={{ color: "#000" }} /> <br />
          <Styled.Label>Nueva Venta</Styled.Label>
        </Styled.Li>
      </Styled.Ul>
    </Styled.NavBar>
  );
}

export default NavBar;
