import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import LoginPage from '../LoginPage';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render dashboard page correctly", () => {
    // let wrapper;
  
    // beforeEach(() => {
    //   wrapper = shallow(renderWithRouter(LoginPage));
    // });
  
    it("renders the LoginPage component correctly", () => {
    const render = () => renderWithRouter(LoginPage)
      expect(render).toMatchSnapshot();
    });
  });