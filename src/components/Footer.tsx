import styled from "styled-components";
import { GRAY } from "../utils/colors";

const FooterWrapper = styled.footer`
  font-weight: 600;
  color: ${GRAY};
`;

export const Footer: React.FC = () => {
  return <FooterWrapper>© 2021 bacebu4 & vlad99902ipad, Inc</FooterWrapper>;
};
