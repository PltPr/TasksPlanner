import type { Task } from '../types/Task';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}
        className={task.completed ? 'completed' : ''}
        >
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            {task.time} — {task.title}
          </label>

          <button onClick={() => onDelete(task.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
