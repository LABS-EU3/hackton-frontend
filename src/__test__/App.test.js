import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const renderWithRouter = Component => render(
  <Router history={history}>
    <Route component={Component} />
  </Router>
)

describe("It should render Application components correctly", () => {
  
    it("renders App component correctly", () => {
      const render = () => renderWithRouter(App)
      // const { getByText } = render(render);
      // const formTitle = getByText(/Create an account/i);
      expect(render).toMatchSnapshot();
      // expect(formTitle).toBeInTheDocument();
    });
  });
