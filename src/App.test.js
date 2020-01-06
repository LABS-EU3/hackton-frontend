import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Router><App /></Router>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Router><App /></Router>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
