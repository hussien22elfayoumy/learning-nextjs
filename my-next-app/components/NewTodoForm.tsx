import { newTodo } from '@/utils/actions';

export default function NewTodoForm() {
  return (
    <form action={newTodo}>
      <input
        className=' border-2 border-slate-800'
        type='text'
        name='content'
      />
      <button type='submit'>Create Todo</button>
    </form>
  );
}
