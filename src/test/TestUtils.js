import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`);
 }

 export const setHookState = (newState) => jest.fn().mockImplementation(() => [
    newState,
    () => {},
  ]);

  export const checkProps = (component, expectedProps) => {
     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
     return propsErr;
  }