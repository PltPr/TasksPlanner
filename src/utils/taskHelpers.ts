import type { Task } from '../types/Task';

export const sortByTime = (tasks: Task[]): Task[] =>
  [...tasks].sort((a, b) => a.time.localeCompare(b.time));
