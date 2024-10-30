'use server';

import { revalidatePath } from 'next/cache';
import db from './db';

export async function newTodo(formDate: FormData) {
  const todo = await db.todo.create({
    data: {
      content: formDate.get('content') as string,
    },
  });
  revalidatePath('/todos');
}
