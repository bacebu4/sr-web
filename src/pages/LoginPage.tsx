import { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as AuthGreetingsPic } from "../assets/authGreetings.svg";
import { BaseButton } from "../components/BaseButton";
import { BaseInput } from "../components/BaseInput";
import { withLayoutStyles } from "../components/LayoutStyles";
import { useLoginMutation } from "../generated/graphql";
import { UserContext } from "../userStore/userContext";
import { TOKEN_LOCALSTORAGE_KEY } from "../utils/constants";

const RegisterPageHeader = withLayoutStyles(styled.div`
  font-family: "Abhaya Libre";
  font-weight: 800;
  font-size: 2.875rem;
  line-height: 53px;
  text-align: center;
`);

export const LoginPage: React.FC = () => {
  const { setToken } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginResult, login] = useLoginMutation();

  return (
    <>
      <AuthGreetingsPic />
      <RegisterPageHeader mt={42}>Remember what you read</RegisterPageHeader>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const result = await login({ email, password });
            if (result.data?.login) {
              localStorage.setItem(
                TOKEN_LOCALSTORAGE_KEY,
                JSON.stringify({ [TOKEN_LOCALSTORAGE_KEY]: result.data?.login })
              );
              setToken(result.data?.login);
            } else {
              throw new Error("You got it wrong!");
            }
          } catch (error) {
            console.error(error.message);
          }
        }}
      >
        <BaseInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Login or email"
          mt={60}
        />
        <BaseInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          mt={16}
        />
        <BaseButton type="submit" mt={16}>
          Login
        </BaseButton>
      </form>
    </>
  );
};
