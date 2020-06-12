import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, setHookState } from '../utils/TestUtils';
import AddToDo from '../components/AddTodo';


const setup = () =>{
    return shallow(<AddToDo />);
  }


  describe('testing for AddToDo component', () =>{
    const testState = {
      text: "text"
    };

    let wrapper;
    beforeEach(() =>{
      wrapper = setup();
    });

    test('rendering add to do component', () => {
        
        const component = findByTestAttr(wrapper , 'component-addtodo');
        expect(component.length).toBe(1);
    });
    test('finding button component', () => {
        
        const button = findByTestAttr(wrapper , 'component-addButton');
        expect(button.length).toBe(1);
    });
    test('on button click', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<button onClick={mockCallBack}>Add</button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it("Should call input onChange function when user enter in input", () => {
      wrapper
        .find("input")
        .at(0)
        .simulate("change", { target: { value: "text" } });
        expect(testState.text).toEqual("text");
      });
});