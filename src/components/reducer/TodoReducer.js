export const initialState = {
    counter: 3,
    todos: [{
      id: 1,
      text: "Scrum meeting",
    }, {
      id: 2,
      text: "Sprint planning",
    },
    {
      id: 3,
      text: "Retrospective meeting",
    }]
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        {
          const newCounter = state.counter + 1;
          const newTodo = {
            id: newCounter,
            text: action.text,
          };
          return {
            counter: newCounter,
            todos: [...state.todos, newTodo]
          };
        }
      case "edit":
        {
          const id = state.todos.findIndex(t => t.id === action.id);
          const todo = Object.assign({}, state.todos[id]);
          todo.text = action.text;
          const todos = Object.assign([], state.todos);
          todos.splice(id, 1, todo);
          return {
            counter: state.counter,
            todos: todos
          };
        }
      case "remove":
        {
          const id = state.todos.findIndex(t => t.id === action.id);
          const todos = Object.assign([], state.todos);
          todos.splice(id, 1);
          return {
            counter: state.counter,
            todos: todos
          };
        } 
  
      default:
        return state;
    }
  };