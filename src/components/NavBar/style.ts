import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  background-color: #c3e6d7;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  gap: 26px;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 16px;
  margin: 0;
`;

export const Li = styled.li`
  display: inline-block;
  margin-right: 56px;
  @media (max-width: 1199px) {
    margin-right: 14px;
  }
`;

export const Label = styled.label`
  font-family: Raleway;
  color: #000;
  @media (max-width: 1199px) {
    font-size: 14px;
  }
`;
