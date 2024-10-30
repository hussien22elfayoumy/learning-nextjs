import React from 'react';
import Todo from '@/components/Todo';

interface TodosProps {
  todos: {
    id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
  }[];
}

export default function TodoList({ todos }: TodosProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
