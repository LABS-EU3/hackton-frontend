import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../Footer';


describe("It should render <Footer/> template correctly", () => {
  
    it("renders the Footer templatet correctly", () => {
      const template = render(<Footer/>)
      expect(template).toMatchSnapshot();
    });
  });