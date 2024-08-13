
// src/App.js
import React, { useState } from 'react';
import './Todo.css'

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done,setDone] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };
  const removeTask = (index) => {
    const taskToMove = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setDone([...done, taskToMove]);
};

const clearDoneTasks = () =>{
    setDone([]);
}

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="ADD A NEW TASK"
      />
      <button onClick={handleAddTask}>ADD TASK</button>
      <div className="box">
        <h3>TO COMPLETE</h3>
        <ol type="i">
                {tasks.map((task, index) => (
                    <li key={index}>{task}
                    <button id='btn' onClick={() => removeTask(index)}>DONE</button>
                    </li>
                ))}
        </ol>
        </div>
      <div className="box">
      <h3>COMPLETED</h3>
            <ol type="i">
                {done.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
      </div> 
    </div>
  );
}

export default Todo;
