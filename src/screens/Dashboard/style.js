import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
color: #000;
min-height: 100svh;
background-color: #f4f4f2;
@media (max-width:1199px){
justify-content: center;
flex-direction: column;
}
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media (max-width: 1199px) {
  width: 100%;
  padding: var(--spacing-32-px, 32px) 16px 0px 16px;
  flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 24px;
gap: 24px;
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.50);
background: rgba(255, 255, 255, 0.50);
width: 30%;
/* Blur/Test-Card-glass */
box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.05);
`;