import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import UserProfileFormPage from '../userProfileFormPage';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render UserProfileFormPage page correctly", () => {
  
    it("renders the UserProfileFormPage component correctly", () => {
      const render = () => renderWithRouter(UserProfileFormPage)
      expect(render).toMatchSnapshot();
    });
  });