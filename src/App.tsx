import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import { useRoutes } from "./routes";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ProgressBar } from "./components/ProgressBar";
import { FlexBox } from "./components/FlexBox";
import { GRAY } from "./utils/colors";
import userPic from "./assets/userPic.png";
import { SeeAll } from "./components/SeeAll";
import { Book } from "./components/Book";
import { Title } from "./components/Title";
import { Tag, TagContainer } from "./components/Tag";
import { Card } from "./components/Card";

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

const App: React.FC = () => {
  const isAuth = true;
  const { Routes } = useRoutes(isAuth);

  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <LayoutWrapper>
        <LeftMenuWrapper>
          <LeftMenuInner>
            <Routes />
            <PushForStickyFooter />
          </LeftMenuInner>
          <Footer />
        </LeftMenuWrapper>
        {isAuth && (
          <RightMenuWrapper>
            <RightMenu>
              <Link to="/settings">
                <UserInfoWrapper>
                  <img width="44px" src={userPic} alt="User avatar" />
                  <FlexBox direction="column" ml={24} jc="space-around">
                    <UserInfoUsername>Vasilii Krasikov</UserInfoUsername>
                    <UserInfoEmail>vasua14735@icloud.com</UserInfoEmail>
                  </FlexBox>
                </UserInfoWrapper>
              </Link>
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
        )}
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
