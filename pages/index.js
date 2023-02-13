import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleTaskInput = event => {
    setTask(event.target.value);
  };

  const addTask = event => {
    event.preventDefault();
    setTodos([...todos, { task, completed: false }]);
    setTask('');
  };

  const toggleTaskCompletion = index => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTask = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  
  
    return (
      <div className="todo-list">
        <div id="todo-list-heading">
<h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>My Todo List</h1>
</div>
        <form onSubmit={addTask}>
          <input type="text" value={task} onChange={handleTaskInput} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li key={i} style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ textAlign: "left", width: "80%" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTaskCompletion(i)}
                />
                {todo.task}
              </div>
              <button onClick={() => deleteTask(i)} style={{ width: "20%" }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default TodoList;
