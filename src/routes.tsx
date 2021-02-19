/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Switch, Route, Redirect } from "react-router-dom";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <div>home</div>
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
