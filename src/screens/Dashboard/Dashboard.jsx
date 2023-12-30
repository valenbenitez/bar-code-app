import React from "react";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ItemContainer>
          <button onClick={() => navigate("/register-product")}>
            Registrar prod
          </button>
        </Styled.ItemContainer>
        <Styled.ItemContainer>
          <button onClick={() => navigate("/register-sell")}>
            Registrar venta
          </button>
        </Styled.ItemContainer>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Dashboard;
