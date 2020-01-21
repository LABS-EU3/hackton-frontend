import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyles } from "./components/index";
import SignupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";
import Dashboard from "./components/views/Dashboard";
import HackathonFormPage from "./components/views/HackathonFormPage";
import HackathonSinglePage from "./components/views/HackathonSinglePage";
import PrivateRoute from "./components/organisms/PrivateRoute";
import EditHackathon from "./components/templates/EditHackathon";
import UserProfileFormPage from "./components/views/userProfileFormPage";
import PageNotFound from "./components/views/PageNotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/not-found" component={PageNotFound} />
        <Route exact path="/register" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/new"
          component={HackathonFormPage}
        />
        <PrivateRoute
          exact
          path="/dashboard/event/:id"
          component={HackathonSinglePage}
        />
        <PrivateRoute
          exact
          path="/dashboard/event/:id/edit"
          component={EditHackathon}
        />
         <PrivateRoute
          exact
          path="/dashboard/profile/edit"
          component={UserProfileFormPage}
        />
        <Redirect to="/register" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
