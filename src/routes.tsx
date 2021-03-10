import { useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AllBooksPage } from "./pages/AllBooksPage";
import { BookPage } from "./pages/BookPage";
import { HomePage } from "./pages/HomePage";

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
