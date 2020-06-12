import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './utils/TestUtils';
import App from './App';

const setup = () =>{
  return shallow(<App />);
}

describe('rendering app component', () => {
  test('renders App component', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
})
});
