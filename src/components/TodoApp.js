import React, { useReducer } from "react";
import { initialState, reducer } from "./TodoReducer";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Header from './Header';

const tempArr = [{
  fName: 'Swathi',
  lName: 'Shivaram',
  email: 'blahblah@blah.com',
  age: 24,
  status: true
}]

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <Header header="Your To-Do List" desc="your details" tempArr={tempArr} />

    <div className="Displaydiv" data-test="component-display">
      <AddTodo
        add={text => dispatch({ type: "add", text: text })}
      />
      <h2 data-test="component-header">Listed items</h2>
      <div data-test="component-update">
        {state.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            remove={() => dispatch({ type: "remove", id: todo.id })}
            edit={text => dispatch({ type: "edit", id: todo.id, text: text })}
          />
        ))}
      </div>
    </div>

  </>);
}
export default TodoApp;