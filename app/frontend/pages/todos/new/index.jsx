import React from "react";
import { useForm } from '@inertiajs/react';

export default function NewTodo() {
  const { data, setData, post } = useForm(
    { name: '' }
  );

  const submitTodoData = (e) => {
    e.preventDefault();
    post('/todos', {
      onSuccess: () => { alert('Todo criada com sucesso') },
      onError: (e) => { alert(e) }
    });
  };

  return (
    <div>
      <h1>Criar TODO</h1>
      <form onSubmit={submitTodoData}>
        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}