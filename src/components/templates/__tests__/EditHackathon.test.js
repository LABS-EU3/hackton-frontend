import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import EditHackathon from '../EditHackathon';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render <EditHackathon/> template correctly", () => {
  
    it("renders the User EditHackathon templatet correctly", () => {
      const template = () => renderWithRouter(EditHackathon)
      expect(template).toMatchSnapshot();
    });
  });