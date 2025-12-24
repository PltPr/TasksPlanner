import { useState } from 'react';
import type { Task } from './types/Task';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { createTask } from './utils/taskFactory';
import { toggleTaskCompleted, deleteTask, sortByTime } from './utils/taskOperations';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (title: string, time: string) => {
    const task = createTask(title, time);
    setTasks(prev => [...prev, task]);
  };

  const handleToggle = (id: string) => {
    setTasks(prev => toggleTaskCompleted(prev, id));
  };

  const handleDelete = (id: string) => {
    setTasks(prev => deleteTask(prev, id));
  };

  return (
    <div>
      <h1>Planner dnia</h1>

      <TaskForm onAdd={handleAdd} />

      <TaskList
        tasks={sortByTime(tasks)}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
