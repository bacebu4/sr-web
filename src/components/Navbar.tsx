import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarInner>
          <Link to="/">
            <Logo />
          </Link>
          <BaseInput
            variant="search"
            placeholder={t("Notes & Books")}
            maxWidth="230px"
          />
        </NavbarInner>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
