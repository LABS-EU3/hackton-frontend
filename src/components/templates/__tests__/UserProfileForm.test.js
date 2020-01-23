import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import UserProfileForm from '../UserProfileForm';
const history = createMemoryHistory()

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render <UserProfileForm/> template correctly", () => {
  
    it("renders the User Profile Form template correctly", () => {
      const template = () => renderWithRouter(UserProfileForm)
      expect(template).toMatchSnapshot();
    });
  });