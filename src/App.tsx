import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Provider } from "urql";
import { useContext, useEffect } from "react";
import { useRoutes } from "./routes";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { FlexBox } from "./components/FlexBox";
import { SeeAll } from "./components/SeeAll";
import { Book } from "./components/Book";
import { Title } from "./components/Title";
import { Tag, TagContainer } from "./components/Tag";
import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";
import { createUrqlClient } from "./utils/createUrqlClient";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TOKEN_LOCALSTORAGE_KEY } from "./utils/constants";
import { UserContext } from "./userStore/userContext";

const RightMenu = styled.div`
  position: fixed;
  z-index: 100;

  max-width: inherit;

  transform: translateX(-100%);
`;

const LayoutWrapper = styled.main`
  position: relative;

  margin: 0 auto;
  padding: 44px 18px 0;
  max-width: 860px;
  min-height: calc(100vh);
`;

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

const RightMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  max-width: 250px;
  padding: inherit;
`;

const LeftMenuWrapper = styled.div`
  max-width: 500px;
`;

const LeftMenuInner = styled.div`
  min-height: 100%;
`;

const PushForStickyFooter = styled.div`
  height: 100px;
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
          <>
            <Navbar />
            <LayoutWrapper>
              <LeftMenuWrapper>
                <LeftMenuInner>
                  <Routes />
                  <PushForStickyFooter />
                </LeftMenuInner>
                <Footer />
              </LeftMenuWrapper>

              <RightMenuWrapper>
                <RightMenu>
                  <UserInfo />
                  <ProgressBar mt={16} />

                  <FlexBox jc="space-between" mt={44}>
                    <Title title={t("Latest reads")} />
                    <SeeAll href="/" />
                  </FlexBox>

                  <FlexBox mt={32}>
                    <Book />
                    <Book ml={36} />
                  </FlexBox>

                  <FlexBox jc="space-between" mt={44}>
                    <Title title={t("Notes")} />
                    <SeeAll href="/" />
                  </FlexBox>
                  <Card mt={32} variant="widget" />

                  <FlexBox jc="space-between" mt={44}>
                    <Title title={t("Recent tag")} />
                    <SeeAll href="/" />
                  </FlexBox>

                  <TagContainer mt={16}>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                  </TagContainer>
                </RightMenu>
              </RightMenuWrapper>
            </LayoutWrapper>
          </>
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
