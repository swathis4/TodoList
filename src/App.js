import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App" data-test="component-app">
      <TodoApp />
    </div>
  );
}

export default App;
