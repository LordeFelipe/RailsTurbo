import React from "react";

export default function Faq({ todos }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Minha TODO List</h1>
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