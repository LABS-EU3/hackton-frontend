import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import Dashboard from '../Dashboard';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render dashboard page correctly", () => {
  
    it("renders the Dashboard component correctly", () => {
      const render = () => renderWithRouter(Dashboard)
      expect(render).toMatchSnapshot();
    });
  });