import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Provider } from "urql";
import { useContext, useEffect } from "react";
import { useRoutes } from "./routes";
import { createUrqlClient } from "./utils/createUrqlClient";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TOKEN_LOCALSTORAGE_KEY } from "./utils/constants";
import { UserContext } from "./userStore/userContext";
import { MainContainer } from "./containers/MainContainer";

const AuthLayoutWrapper = styled.main`
  position: relative;

  margin: 0 auto;
  padding: 44px 18px 0;
  max-width: 350px;
  min-height: calc(100vh);
`;

const AuthLayoutInner = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;

  padding: inherit;

  transform: translateY(-50%);
`;

const App: React.FC = () => {
  const { t } = useTranslation();

  const { token, setToken } = useContext(UserContext);
  const localStorageToken = useLocalStorage("GET", TOKEN_LOCALSTORAGE_KEY);

  useEffect(() => {
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [localStorageToken, setToken]);

  const client = createUrqlClient(token);

  const { Routes } = useRoutes(Boolean(token));

  return (
    <Provider value={client}>
      <BrowserRouter>
        {token && (
          <MainContainer>
            <Routes />
          </MainContainer>
        )}
        {!token && (
          <AuthLayoutWrapper>
            <AuthLayoutInner>
              <Routes />
            </AuthLayoutInner>
          </AuthLayoutWrapper>
        )}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
