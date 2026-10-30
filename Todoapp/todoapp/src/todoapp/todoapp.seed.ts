import type { Todo } from './todoapp.model.js';

export const seedTodos: Todo[] = [
  {
    id: '1',
    title: 'Buy groceries',
    completed: false,
    createAt: new Date('2026-10-01T09:00:00Z'),
  },
  {
    id: '2',
    title: 'Walk the dog',
    completed: true,
    createAt: new Date('2026-10-02T10:30:00Z'),
  },
  {
    id: '3',
    title: 'Write report',
    completed: false,
    createAt: new Date('2026-10-03T14:15:00Z'),
  },
  {
    id: '4',
    title: 'Call the dentist',
    completed: true,
    createAt: new Date('2026-10-04T08:45:00Z'),
  },
  {
    id: '5',
    title: 'Read a book',
    completed: false,
    createAt: new Date('2026-10-05T20:00:00Z'),
  },
];
