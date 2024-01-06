import React from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import CreateNewFolderRoundedIcon from "@mui/icons-material/CreateNewFolderRounded";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.ItemContainer>
        <Styled.ColumnContainer>
          <Styled.Subtitle>Total transaccionado</Styled.Subtitle>
          <Styled.Title>$100.000</Styled.Title>
        </Styled.ColumnContainer>
        <Styled.RowContainer>
          <Styled.Button onClick={() => navigate("/register-product")}>
            <CreateNewFolderRoundedIcon />
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/register-sell")}>
            <QrCodeScannerRoundedIcon />
          </Styled.Button>
        </Styled.RowContainer>
      </Styled.ItemContainer>
      <NavBar />
    </Styled.Container>
  );
}
