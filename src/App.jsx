import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyles } from "./components/index";
import SignupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";
import Dashboard from "./components/views/Dashboard";
import HackathonFormPage from "./components/views/HackathonFormPage";
import HackathonSinglePage from "./components/views/HackathonSinglePage";
import HackathonProjectsPage from "./components/views/HackathonProjectsPage";
import HackathonProjectPage from "./components/views/HackathonProjectPage";
import PrivateRoute from "./components/organisms/PrivateRoute";
import EditHackathon from "./components/templates/EditHackathon";
import AddTeammates from "./components/templates/AddTeammates";
import ParticipantSubmissionPage from "./components/views/ParticipantSubmissionPage";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./components/views/PageNotFound";
import UserProfileFormPage from "./components/views/UserProfileFormPage";
import CreateTeam from "./components/templates/CreateTeam";
import AddParticipantTeam from "./components/templates/AddParticipantTeams";
import ResetPassword from './components/views/resetPassword/ResetPassword';
import ResetPasswordConfirmation from './components/views/resetPassword/ResetPasswordConfirmation';
import NewPassword from './components/views/resetPassword/NewPassword';

function App() {
  const location = useLocation();
  return (
    <>
        <GlobalStyles />
        <Switch>
          <Route exact path="/not-found" component={PageNotFound} />
          <Route exact path="/register" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/forgotpassword" component={ResetPassword} />
          <Route exact path="/resetPasswordConfirmation" component={ResetPasswordConfirmation} />
          <Route exact path="/resetpassword" component={NewPassword} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/new"
            component={HackathonFormPage}
          />
          <PrivateRoute
            exact
            path="/dashboard/event/:id/participant_submission"
            component={ParticipantSubmissionPage}
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
            path="/dashboard/event/:id/team"
            component={AddTeammates}
          />
          <PrivateRoute
            exact
            path="/dashboard/profile/edit"
            component={UserProfileFormPage}
          />
          <PrivateRoute
            path="/dashboard/event/:id/projects"
            component={HackathonProjectsPage}
          />
          <PrivateRoute
            exact
            path="/dashboard/event/:id/project/:projectId"
            component={HackathonProjectPage}
          />
          <PrivateRoute
            exact
            path="/dashboard/event/participant-teams/:id/add-members"
            component={AddParticipantTeam}
          />
          <PrivateRoute
            exact
            path="/dashboard/event/:id/participant-teams"
            component={CreateTeam}
          />

        <Redirect to={{ pathname: "/register", state: { from: location.pathname } }} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
