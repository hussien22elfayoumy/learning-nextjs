'use client';
import React, { useState } from 'react';

interface TodoProps {
  todo: {
    id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
  };
}

export default function Todo({ todo }: TodoProps) {
  // const [todo, setTodo] = useState('');

  return <div>{todo.content}</div>;
}
