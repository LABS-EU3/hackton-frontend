import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import SignupPage from '../SignupPage';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render signup page correctly", () => {
  
    it("renders the SignUp component correctly", () => {
      const render = () => renderWithRouter(SignupPage)
      // const { getByText } = render(render);
      // const formTitle = getByText(/Create an account/i);
      expect(render).toMatchSnapshot();
      // expect(formTitle).toBeInTheDocument();
    });
  });