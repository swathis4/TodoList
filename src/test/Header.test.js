import React from 'react';
import {shallow} from 'enzyme';
import { findByTestAttr, checkProps } from '../utils/TestUtils';
import Header from '../components/Header';


const setup = () =>{
  return shallow(<Header />);
}
describe('Header testing', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper=setup();
    });

    test('renders header display', () => {
        const header = findByTestAttr(wrapper, 'component-header');
        expect(header.length).toBe(1);
      });
    
    test('renders header desc', () => {
        const header = findByTestAttr(wrapper, 'component-desc');
        expect(header.length).toBe(1);
      });

      describe('checking proptypes', () => {
          it('it should not throw a warning',()=>{
              const expectedProps = {
                  header: 'Test Header',
                  desc: 'Test desc',
                  tempArr: [{
                      fName: 'test fname',
                      lName: 'test lname',
                      email: 'test email',
                      age: 24,
                      status: false
                  }]
              };
              const propsErr = checkProps(Header, expectedProps);
              expect(propsErr).toBeUndefined();
          })
      })
});
