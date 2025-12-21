import { useState } from 'react';
import type { Task } from '../types/Task';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm = ({ setTasks }: Props) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !time.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      time,
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);
    setTitle('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="zadanie..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <button type="submit">dodaj</button>
    </form>
  );
};

export default TaskForm;
