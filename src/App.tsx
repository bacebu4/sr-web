import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
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
  const isAuth = false;
  const { Routes } = useRoutes(isAuth);

  return (
    <BrowserRouter>
      {isAuth && (
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
                  <Title title="Latest reads" />
                  <SeeAll href="/" />
                </FlexBox>

                <FlexBox mt={32}>
                  <Book />
                  <Book ml={36} />
                </FlexBox>

                <FlexBox jc="space-between" mt={44}>
                  <Title title="Notes" />
                  <SeeAll href="/" />
                </FlexBox>
                <Card mt={32} variant="widget" />

                <FlexBox jc="space-between" mt={44}>
                  <Title title="Recent tags" />
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
      {!isAuth && (
        <AuthLayoutWrapper>
          <AuthLayoutInner>
            <Routes />
          </AuthLayoutInner>
        </AuthLayoutWrapper>
      )}
    </BrowserRouter>
  );
};

export default App;
