import React, { useState } from 'react';

const Todo = ({ todo }) => {
  const [inputValue, setInputValue] = useState(todo.text);

  // Handle changes in the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <tr>
      <td>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </td>
      <td>{todo.createdAt.toLocaleDateString()}</td>
    </tr>
  );
};

export default Todo;
