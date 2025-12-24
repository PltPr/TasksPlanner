import type { Task } from '../types/Task';

export const sortByTime = (tasks: Task[]): Task[] =>
  [...tasks].sort((a, b) => a.time.localeCompare(b.time));

export function toggleTaskCompleted(tasks: Task[], id: string): Task[] {
  return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
}

export function deleteTask(tasks: Task[], id: string): Task[] {
  return tasks.filter(task => task.id !== id);
}
