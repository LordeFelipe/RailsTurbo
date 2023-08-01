import { Link } from "@inertiajs/react";
import React from "react";

export default function Todo({ todos }) {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Minha TODO List</h1>
        <Link href={`/todos/new`} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Novo TODO
        </Link>
      </div>
      {todos.map((todo, key) => {
        return (
          <li key={key} className="py-2 border-b border-gray-300">
            {todo.name}
          </li>
        );
      })}
    </div>
  );
}