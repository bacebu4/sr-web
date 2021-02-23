import { useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Card } from "./components/Card";
import { Comment } from "./components/Comment";
import { Title } from "./components/Title";

type UseRoutesType = {
  Routes: () => JSX.Element;
};

export const useRoutes = (isAuth: boolean): UseRoutesType => {
  const Routes = useCallback(() => {
    if (isAuth) {
      return (
        <Switch>
          <Route path="/" exact>
            <>
              <Title
                variant="large"
                title="Highlight of the day"
                subtitle="Click on the button below to see the rest of your highlights"
              />
              <Card />
              <Comment />
            </>
          </Route>
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/auth">
          <div>auth</div>
        </Route>

        <Redirect to="/auth" />
      </Switch>
    );
  }, [isAuth]);

  return {
    Routes,
  };
};
