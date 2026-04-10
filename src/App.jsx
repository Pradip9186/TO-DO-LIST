import React, { useState } from 'react';
import AddToDo from './components/AddDOTo';
import AddItem from './components/Additem';
import AppName from './components/AppName';


const App = () => {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (name, date) => {
    if (!name || !date) return;

    const newTodo = {
      id: Date.now(),
      name,
      date,
      approved: false,
    };

    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
  };

  // Approve Todo
  const toggleApprove = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, approved: !item.approved } : item
    );
    setTodos(updated);
  };

  return (
    <div className="container mx-auto p-4">
      <AppName />
      <AddToDo addTodo={addTodo} />
      <AddItem
        todos={todos}
        deleteTodo={deleteTodo}
        toggleApprove={toggleApprove}
      />
    </div>
  );
};

export default App;