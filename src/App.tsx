import { useState, useEffect } from 'react';
import type { Task } from './types/Task';


import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { sortByTime } from './utils/taskHelpers';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    //wczytamy;
  }, []);

  useEffect(() => {
    //zapiszemy;
  }, [tasks]);

  return (
    <div className="app-container">
      <h1>Planer dnia</h1>

      <TaskForm setTasks={setTasks} />

      <TaskList tasks={sortByTime(tasks)} setTasks={setTasks} />
    </div>
  );
};

export default App;
