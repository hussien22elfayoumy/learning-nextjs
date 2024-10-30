import TodoList from '@/components/TodoList';
import db from '@/utils/db';

async function getData() {
  const todos = await db.todo.findMany({});
  return todos;
}

export default async function TodosPage() {
  const todos = await getData();

  console.log('hello', todos);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
