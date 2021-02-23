/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Switch, Route, Redirect } from "react-router-dom";
import { Card } from "./components/Card";
import { Comment } from "./components/Comment";
import { Title } from "./components/Title";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <>
            <Card />
            <Comment />
            <Title
              type="large"
              title="Highlight of the day"
              subtitle="Click on the button below to see the rest of yout highlights"
            />
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
};
