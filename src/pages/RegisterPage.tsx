import styled from "styled-components";
import { ReactComponent as AuthGreetingsPic } from "../assets/authGreetings.svg";
import { BaseButton } from "../components/BaseButton";
import { BaseInput } from "../components/BaseInput";
import { withLayoutStyles } from "../components/LayoutStyles";

const RegisterPageHeader = withLayoutStyles(styled.div`
  font-family: "Abhaya Libre";
  font-weight: 800;
  font-size: 2.875rem;
  line-height: 53px;
  text-align: center;
`);

export const RegisterPage: React.FC = () => {
  return (
    <div>
      <AuthGreetingsPic />
      <RegisterPageHeader mt={42}>Remember what you read</RegisterPageHeader>
      <BaseInput placeholder="Login or email" mt={60} />
      <BaseInput placeholder="Password" mt={16} />
      <BaseButton mt={16}>Register</BaseButton>
    </div>
  );
};
