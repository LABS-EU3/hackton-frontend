import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import HackathonSingle from '../HackathonSingle';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render <HackathonSingle/> template correctly", () => {
  
    it("renders the User onboarding templatet correctly", () => {
      const template = () => renderWithRouter(HackathonSingle)
      expect(template).toMatchSnapshot();
    });
  });