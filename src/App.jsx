import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import UserProfilePage from "./components/views/UserProfilePage";
import CreateTeam from "./components/templates/CreateTeam";
import AddParticipantTeam from "./components/templates/AddParticipantTeams";
import ResetPassword from './components/views/resetPassword/ResetPassword';
import ResetPasswordConfirmation from './components/views/resetPassword/ResetPasswordConfirmation';
import NewPassword from './components/views/resetPassword/NewPassword';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/not-found" component={PageNotFound} />
        <Route path="/register" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/forgotpassword" component={ResetPassword} />
        <Route exact path="/resetPasswordConfirmation" component={ResetPasswordConfirmation} />
        <Route exact path="/resetpassword" component={NewPassword} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/" component={Dashboard} />
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
          path="/dashboard/profile"
          component={UserProfilePage}
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
          path="/dashboard/event/:eventId/participant-teams/:teamId"
          component={AddParticipantTeam}
        />
        <PrivateRoute
          exact
          path="/dashboard/event/:id/participant-teams"
          component={CreateTeam}
        />
        <Redirect to="/not-found" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
