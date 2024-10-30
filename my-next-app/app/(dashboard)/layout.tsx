import NewTodoForm from '@/components/NewTodoForm';
import React, { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Dashboard</h1>
      <NewTodoForm />
      <div>{children}</div>
    </>
  );
}
