import React, {useState} from "react";

const AddTodo = ({add}) => {
  const [text, setText] = useState("");
  
  return (
    <div className="AddTodo" data-test="component-addtodo">
      <input 
       placeholder="Enter the item"
       value={text} 
       onChange={e => setText(e.target.value)} 
       className="AddTodoInput" />
      <button data-test="component-addButton" className="AddTodoButton" onClick={() => {add(text); setText("")}}>Add</button>
    </div>
  );
}

export default AddTodo;