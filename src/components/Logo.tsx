import styled from "styled-components";
import srLogo from "../assets/srLogo.png";
import { FlexBox } from "./FlexBox";
import { withLayoutStyles } from "./LayoutStyles";

const SiteHeader = styled.h1`
  font-family: "Abhaya Libre", serif;
  font-size: 2rem;
  font-weight: 800;
  margin-left: 12px;
`;

type LogoProps = {
  className?: string;
};

const LogoToTransform: React.FC<LogoProps> = ({ className }) => {
  return (
    <FlexBox ai="center" className={className}>
      <img src={srLogo} alt="logo" />
      <SiteHeader>Book stash</SiteHeader>
    </FlexBox>
  );
};

export const Logo = withLayoutStyles(LogoToTransform);
