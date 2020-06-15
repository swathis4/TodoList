import React, {useState} from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, setHookState } from '../utils/TestUtils';
import Todo from '../components/Todo';

const reactMock = require('react');

// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, 'useState')
// useStateSpy.mockImplementation((init) => [init, setState]);

const setup = () =>{
  return shallow(<Todo />);
}


// const remove = jest.fn();
// const edit = jest.fn();

// const props = {
// todo : {
//   id: 1,
//   text : "text"
// },
// remove,
// edit
// }


describe.skip('testing for Todo component', () =>{

let wrapper;

// let todos = jest.fn();
 let todos = {
  id: 1,
  text : "text"
}
reactMock.useState = setHookState({
  todo: todos,
  mode: "edit"
});

beforeEach(() =>{
  wrapper = setup();
 
});

  
  afterEach(() => {
    jest.clearAllMocks();
  });


  // test("Should render Todo with data", () => {
  //   const wrapper = mount(<Todo {...props} />);
  //   expect(wrapper).not.toBeNull();
  // });

    test('rendering todo without error', () => {
        const component = findByTestAttr(wrapper , 'component-todo');
        expect(component.length).toBe(1);
    });

    test("should render button", () => {
        const button = wrapper.find("button");
        expect(button).toHaveLength(2);
      });

      
//     test('on button click', () => {
//       const mockCallBack = jest.fn();
//       const button = shallow((<button onClick={mockCallBack}>Remove</button>));
//       button.find('button').simulate('click');
//       expect(mockCallBack.mock.calls.length).toEqual(1);
//   });

//   test('on button click', () => {
//     const mockCallBack = jest.fn();
//     const button = shallow((<button onClick={mockCallBack}>Edit</button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
// });

// test('on button click', () => {
//   const mockCallBack = jest.fn();
//   const button = shallow((<button onClick={mockCallBack}>Save</button>));
//   button.find('button').simulate('click');
//   expect(mockCallBack.mock.calls.length).toEqual(1);
// });

// test('on button click', () => {
//   const mockCallBack = jest.fn();
//   const button = shallow((<button onClick={mockCallBack}>Cancel</button>));
//   button.find('button').simulate('click');
//   expect(mockCallBack.mock.calls.length).toEqual(1);
// });


// test("Should call input onChange function when user enter in input", () => {
      //   wrapper
      //     .find("input")
      //     .at(0)
      //     .simulate("change", { target: { value: "text" } });
      //     expect(testState.text).toEqual("text");
      //   });


    // test('rendering edit to save button', () => {
    //     const component = findByTestAttr(wrapper , 'component-edittosavebtn');
    //     expect(component.length).toBe(1);
    // });

    // test('rendering edit to cancel button', () => {
    //     const component = findByTestAttr(wrapper , 'component-edittocancelbtn');
    //     expect(component.length).toBe(1);
    // });
});