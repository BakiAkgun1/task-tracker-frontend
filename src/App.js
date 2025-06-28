
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/tasks/'; // FastAPI URL

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, {
      ...formData,
      completed: false,
    });
    setFormData({ title: '', description: '' });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            <strong>{task.title}</strong> - {task.description} [{task.completed ? 'Done' : 'Pending'}]
            <button onClick={() => handleDelete(task.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
