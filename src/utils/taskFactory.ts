import type { Task } from '../types/Task';

export const createTask = (title: string, time: string): Task => ({
  id: crypto.randomUUID(),
  title,
  time,
  completed: false,
});
