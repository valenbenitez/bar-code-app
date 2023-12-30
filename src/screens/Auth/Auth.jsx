import { CardMedia, useMediaQuery } from "@mui/material";
import * as Styled from "./style.js";
import GoogleIconComponent from "../../assets/GoogleIcon.jsx";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext.jsx";

function Auth() {
  const isMobileScreen = useMediaQuery("(max-width:1199px)");
  const { signInWithGoogle } = useAuth();
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>Bienvenido de nuevo</Styled.Title>
        <Styled.GoogleButton onClick={signInWithGoogle}>
          {" "}
          <GoogleIconComponent /> Continuar con Google
        </Styled.GoogleButton>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Auth;
