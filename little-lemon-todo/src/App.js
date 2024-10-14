import React, { useState } from 'react';
import Todo from './Todo';

const App = () => {
  // Initial state for todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Stock Take', createdAt: new Date() },
    { id: 2, text: 'Process Payroll', createdAt: new Date() },
  ]);

  // Function to reverse the order of todos
  const reverseOrder = () => {
    // Make a copy of the array and reverse the copy
    const reversedTodos = [...todos].reverse();
    setTodos(reversedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={reverseOrder}>Reverse Order</button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            // Pass unique key using the 'id' prop
            <Todo key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
