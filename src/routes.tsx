import { useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AllBooksPage } from "./pages/AllBooksPage";
import { BookPage } from "./pages/BookPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SettingsPage } from "./pages/SettingsPage";

type UseRoutesType = {
  Routes: () => JSX.Element;
};

export const useRoutes = (isAuth: boolean): UseRoutesType => {
  const Routes = useCallback(() => {
    if (isAuth) {
      return (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/books" exact component={AllBooksPage} />
          <Route path="/books/:id" exact component={BookPage} />
          <Route path="/settings" exact component={SettingsPage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Redirect to="/register" />
      </Switch>
    );
  }, [isAuth]);

  return {
    Routes,
  };
};
