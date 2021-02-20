import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";

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
  padding: 44px 18px;
  min-height: 100vh;
`;

const RightMenuWrapper = styled.div`
  max-width: 240px;
`;

const LeftMenuWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;

const App: React.FC = () => {
  const isAuth = true;
  const routes = useRoutes(isAuth);

  return (
    <BrowserRouter>
      {isAuth && <div>navbar</div>}
      <LayoutWrapper>
        <LeftMenuWrapper>{routes}</LeftMenuWrapper>
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
