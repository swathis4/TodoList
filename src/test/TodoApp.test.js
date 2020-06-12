import React, {useReducer} from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, setHookState } from '../utils/TestUtils';
import TodoApp from '../components/TodoApp';
import AddTodo from '../components/AddTodo';

const setup = () =>{
    return shallow(<TodoApp />);
  }



  describe('testing for TodoApp component', () =>{
    
    let wrapper;
    beforeEach(() =>{
      wrapper = setup();
    });

    test('rendering todo app header', () => {
        const component = findByTestAttr(wrapper , 'component-header');
        expect(component.length).toBe(1);
    });
    test('rendering update', () => {
        const component = findByTestAttr(wrapper , 'component-update');
        expect(component.length).toBe(1);
    });
    test('renders div display', () => {
      const display = findByTestAttr(wrapper, 'component-display');
      expect(display.length).toBe(1);
    });

    test('contains the correct number of components', () => {
      const wrapper1 = mount(<TodoApp />);
      expect(wrapper1.find(AddTodo).length).toBe(1);
    });

});