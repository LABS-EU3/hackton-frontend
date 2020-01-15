import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import EventOnboarding from '../EventOnboarding';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render <EventOnboarding/> template correctly", () => {
  
    it("renders the User EventOnboarding templatet correctly", () => {
      const template = () => renderWithRouter(EventOnboarding)
      expect(template).toMatchSnapshot();
    });
  });