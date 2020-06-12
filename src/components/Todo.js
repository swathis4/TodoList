import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState("");
  // console.log("todo text is",todo.text);
  
  return (
    
    <div className="Todo" data-test="component-todo">
      {mode === "list"
        ? <>
          <span className="TodoText" data-test="component-span">{todo.text}</span>
          <button className="RemoveTodo" data-test="component-removebtn" onClick={remove}>Remove</button>
          <button className="EditTodo" data-test="component-editbtn" onClick={() => setMode("edit")}>Edit</button>
          </>
        : <>
          <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
          <button className="EditTodoSave" data-test="component-edittosavebtn" onClick={() => {edit(text); setMode("list");}}>Save</button>
          <button className="EditTodoCancel" data-test="component-edittocancelbtn" onClick={() => setMode("list")}>Cancel</button>
        </>}
    </div>
  );

  
}

export default Todo;