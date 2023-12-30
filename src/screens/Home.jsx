import { CardMedia, useMediaQuery } from "@mui/material";
import * as Styled from "../style.js";
import ButtonAppBar from "../components/AppBar.jsx";
import { Link } from "react-router-dom";

function Home() {
  const isMobileScreen = useMediaQuery("(max-width:1199px)");
  return (
    <>
      {isMobileScreen && <ButtonAppBar />}
      <Styled.Container>
        <Styled.BetweenContainer>
          <div>
            <Styled.Title>Welcome to our platform</Styled.Title>
            <Styled.Subtitle>
              We provide the best solution for register your sells. Join us
              today and boost your growth.
            </Styled.Subtitle>
            <br />
            <br />
            {!isMobileScreen && (
              <Link to={`/auth`}>
                <Styled.Button>Get Started</Styled.Button>
              </Link>
            )}
          </div>
          <CardMedia
            image="public/logo.svg"
            alt="img"
            sx={{ width: 400, height: 400 }}
          />
        </Styled.BetweenContainer>
      </Styled.Container>
    </>
  );
}

export default Home;
