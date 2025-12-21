import type { Task } from '../types/Task';

interface Props {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem = ({ task, toggleTask, deleteTask }: Props) => {
  return (
    <li className={task.completed ? "completed" : ""}>

      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {task.time} — {task.title}
      </label>

      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
};

export default TaskItem;
