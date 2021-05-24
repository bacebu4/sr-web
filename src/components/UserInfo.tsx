import { Link } from "react-router-dom";
import styled from "styled-components";
import { GRAY } from "../utils/colors";
import userPic from "../assets/userPic.png";
import { FlexBox } from "./FlexBox";
import { useInfoQuery } from "../generated/graphql";

const UserInfoWrapper = styled.div`
  display: flex;

  cursor: pointer;
`;

const UserInfoUsername = styled.h2`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;
`;

const UserInfoEmail = styled.h3`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 400;

  color: ${GRAY};
`;

export const UserInfo: React.FC = () => {
  const [result] = useInfoQuery();
  const { data } = result;

  return (
    <Link to="/settings">
      <UserInfoWrapper>
        <img width="44px" src={userPic} alt="User avatar" />
        <FlexBox direction="column" ml={24} jc="space-around">
          <UserInfoUsername>{data?.info?.email.split("@")[0]}</UserInfoUsername>
          <UserInfoEmail>{data?.info?.email}</UserInfoEmail>
        </FlexBox>
      </UserInfoWrapper>
    </Link>
  );
};
