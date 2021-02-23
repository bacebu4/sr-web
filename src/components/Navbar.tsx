import styled from "styled-components";
import { WHITE } from "../utils/colors";
import { Logo } from "./Logo";

const NavbarWrapper = styled.header`
  background-color: ${WHITE};
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  margin: 0 auto;
  padding: 0 18px;
  max-width: 860px;
`;

const NavbarInner = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarInner>
          <Logo />
          <h1>Search input here...</h1>
        </NavbarInner>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
