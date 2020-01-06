import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../components/views/SignupPage';
import renderer from 'react-test-renderer';

describe('Sign up', () => {
  it('renders', () => {
    // const component = renderer.create(<Signup />);
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});

// afterEach(rtl.cleanup);

// let wrapper;

// const props = {
//     currentUser: {
//         email: 'example@mail.com',
//         password: 'example'
//     },
//     user: {
//       is_key: false
//     }
//   };

// beforeEach(() => {
//     wrapper = rtl.render(<Signup />)
//     console.log(wrapper)
// })

// describe('signup component', () => {

//     test('provide text', () => {
//         expect(wrapper.queryByText(/create/i)).toBeInTheDocument()
//     })
// })
