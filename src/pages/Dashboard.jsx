import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  useEffect(() => {

  const token = localStorage.getItem('token');

  if (!token) {

    alert('Please login first');

    window.location.href = '/login';

  }

}, []);

  const fetchTasks = async () => {

  try {

    const res = await api.get('/tasks');

    setTasks(res.data);

  } catch (err) {

    alert('Unauthorized. Please login again.');

    localStorage.removeItem('token');

    window.location.href = '/login';

  }

};

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {

    try {

      await api.post('/tasks', {
        title,
        description
      });

      setTitle('');
      setDescription('');

      fetchTasks();

    } catch (err) {

      console.log(err);

    }

  };

  const deleteTask = async (id) => {

    try {

      await api.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (err) {

      console.log(err);

    }

  };

  const toggleComplete = async (task) => {

    try {

      await api.put(`/tasks/${task._id}`, {
        completed: !task.completed
      });

      fetchTasks();

    } catch (err) {

      console.log(err);

    }

  };
  const logout = () => {

    localStorage.removeItem('token');

    window.location.href = '/login';

  };

  return (

    <div style={{ padding: 20 }}>

      <h2>Dashboard</h2>

      {/* NEW → Logout button */}
      <button onClick={logout}>
        Logout
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={createTask}>
        Create Task
      </button>

      <hr />

      {
        tasks.map(task => (

          <div key={task._id}>

            <h4>{task.title}</h4>

            <p>{task.description}</p>

            {/* NEW → show status */}
            <p>
              Status:
              {
                task.completed
                  ? ' Completed'
                  : ' Pending'
              }
            </p>

            {/* NEW → update button */}
            <button onClick={() => toggleComplete(task)}>
              {
                task.completed
                  ? 'Mark Pending'
                  : 'Mark Complete'
              }
            </button>

            <br /><br />

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>

            <hr />

          </div>

        ))
      }

    </div>

  );

}