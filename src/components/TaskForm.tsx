import { useState } from 'react';

interface Props {
  onAdd: (title: string, time: string) => void;
}

const TaskForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !time) return;

    onAdd(title, time);
    setTitle('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />

      <input
        type="text"
        placeholder="Zadanie..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <button type="submit">Dodaj</button>
    </form>
  );
};

export default TaskForm;
