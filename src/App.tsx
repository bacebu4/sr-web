import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const RightMenu = styled.div`
  position: fixed;
  max-width: inherit;
  transform: translateX(-100%);
  z-index: 100;
`;

const LayoutWrapper = styled.main`
  margin: 0 auto;
  max-width: 860px;
  display: flex;
  justify-content: space-between;
  padding: 44px 18px 0;
  min-height: 100vh;
`;

const RightMenuWrapper = styled.div`
  max-width: 240px;
`;

const LeftMenuWrapper = styled.div`
  max-width: 500px;
`;

const LeftMenuInner = styled.div`
  min-height: 100%;
  margin-bottom: -100px;
`;

const PushForStickyFooter = styled.div`
  height: 100px;
`;

const App: React.FC = () => {
  const isAuth = true;
  const routes = useRoutes(isAuth);

  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <LayoutWrapper>
        <LeftMenuWrapper>
          <LeftMenuInner>
            {routes}
            <PushForStickyFooter />
          </LeftMenuInner>
          <Footer />
        </LeftMenuWrapper>
        {isAuth && (
          <RightMenuWrapper>
            <RightMenu>Its me</RightMenu>
          </RightMenuWrapper>
        )}
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
