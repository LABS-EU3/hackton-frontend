import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./components/index";
import SingupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/register" component={SingupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/register" />
      </Switch>
    </>
  );
}

export default App;
