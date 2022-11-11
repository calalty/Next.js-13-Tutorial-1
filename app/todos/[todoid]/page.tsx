import React from "react";
import { ToDo } from "../../../typings";
import { notFound } from "next/navigation";
type PageProps = {
  params: {
    todoid: string;
  };
};

const fetchTodo = async (todoid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoid}`,
    { next: { revalidate: 600 } }
  );
  const todo: ToDo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoid } }: PageProps) {
  const todo = await fetchTodo(todoid);

  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 text-black border-2 m-2 shadow-lg">
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed : {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-3 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: ToDo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoid: todo.id.toString(),
  }));
}
