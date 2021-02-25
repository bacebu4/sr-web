import { useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BaseInput } from "./components/BaseInput";
import { Card } from "./components/Card";
import { Comment } from "./components/Comment";
import { Heatmap } from "./components/Heatmap";
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

              <Card mt={32} />
              <Comment mt={16} />
              <BaseInput variant="send" mt={16} />
              <Title
                variant="large"
                title="Reviewing goals"
                subtitle="Don’t forget what you read. Review your notes daily!"
              />

              <Heatmap />
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
