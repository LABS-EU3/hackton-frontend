import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './components/index';
import { SignUp, Header, Footer } from './components/organisms';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <SignUp />
      <Footer />
    </Router>
  );
}

export default App;
