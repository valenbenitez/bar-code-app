import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
align-self: stretch;
border-radius: 24px;
padding: var(--Spacing-32px, 32px) 24px;
border: 1px solid var(--beetransfer-border-50, rgba(255, 255, 255, 0.50));
background: #c3e6d7;
`;