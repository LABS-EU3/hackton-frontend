import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './components/index';
import SingupPage from './components/views/SignupPage';
import LoginPage from './components/views/LoginPage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/register" component={SingupPage} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
