import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../components/views/SignupPage';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Signup />)
})

// describe('signup component', () => {
//     test('provide button to toggle to closed and locked states', () => {
//         expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument()
//         expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument()
//     })
// })

