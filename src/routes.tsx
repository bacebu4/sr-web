import { useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AllBooksPage } from "./pages/AllBooksPage";
import { AllNotesPage } from "./pages/AllNotesPage";
import { BookPage } from "./pages/BookPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ROUTES } from "./utils/constants";

type UseRoutesType = {
  Routes: () => JSX.Element;
};

export const useRoutes = (isAuth: boolean): UseRoutesType => {
  const Routes = useCallback(() => {
    if (isAuth) {
      return (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path={ROUTES.books} exact component={AllBooksPage} />
          <Route path={ROUTES.books + ROUTES.id} exact component={BookPage} />
          <Route path={ROUTES.notes} exact component={AllNotesPage} />
          <Route
            path={ROUTES.notes + ROUTES.id}
            exact
            component={AllNotesPage}
          />
          <Route path={ROUTES.settings} exact component={SettingsPage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path={ROUTES.register} exact component={RegisterPage} />
        <Route path={ROUTES.login} exact component={LoginPage} />
        <Redirect to={ROUTES.register} />
      </Switch>
    );
  }, [isAuth]);

  return {
    Routes,
  };
};
