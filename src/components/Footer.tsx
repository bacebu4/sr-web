import styled from "styled-components";
import { GRAY } from "../utils/colors";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: inherit;
  height: 28px;

  font-weight: 600;
  color: ${GRAY};
`;

export const Footer: React.FC = () => {
  return <FooterWrapper>© 2021 bacebu4 & vlad99902ipad, Inc</FooterWrapper>;
};
