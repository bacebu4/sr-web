import styled from "styled-components";
import { WHITE, OPACITY90 } from "../utils/colors";
import { Logo } from "./Logo";
import { BaseInput } from "./BaseInput";

const NavbarWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;

  background-color: ${WHITE}${OPACITY90};
  backdrop-filter: blur(2px);
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
          <BaseInput
            variant="search"
            placeholder="Notes & Books"
            maxWidth="230px"
          />
        </NavbarInner>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
