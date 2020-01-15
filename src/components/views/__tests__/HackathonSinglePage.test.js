import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import HackathonSinglePage from '../HackathonSinglePage';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render HackathonSinglePage page correctly", () => {
  
    it("renders the HackathonSinglePage component correctly", () => {
      const render = () => renderWithRouter(HackathonSinglePage)
      expect(render).toMatchSnapshot();
    });
  });