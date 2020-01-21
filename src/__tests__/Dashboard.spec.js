import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/views/Dashboard';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

describe('Dashboard', () => {
  it('renders', () => {
    // const component = renderer.create(<Dashboard />);
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});