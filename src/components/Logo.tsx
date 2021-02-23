import styled from "styled-components";
import srLogo from "../assets/srLogo.png";
import { FlexBox } from "./FlexBox";

const SiteHeader = styled.h1`
  font-family: "Abhaya Libre", serif;
  font-size: 2rem;
  font-weight: 800;
  margin-left: 12px;
`;

export const Logo: React.FC = () => {
  return (
    <FlexBox ai="center">
      <img src={srLogo} alt="logo" />
      <SiteHeader>Book stash</SiteHeader>
    </FlexBox>
  );
};
