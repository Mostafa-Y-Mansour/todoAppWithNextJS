"use client";
import Base from "@/components/Base";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TodoBox from "@/components/TodoBox";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoData[]>([]);

  useEffect(() => {
    // when mounted for the first time we don't need to save the empty todos to the local storage
    if (todos.length === 0) return;
    // when todos change, we save them to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Dependency on todos array

  useEffect(() => {
    // when mounted we check if the todos is already exists in local storage
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <Base>
      <Container>
        <Header />
        <div className="text-xl w-11/12 m-auto text-dark-blue-veryDark dark:text-white *:shadow-3xl *:shadow-light-grayishBlue-Light  *:dark:shadow-dark-blue-veryDark">
          {/* todo text input box */}
          <div className="m-auto w-full mb-5">
            <TodoBox todos={todos} setTodos={setTodos} />
          </div>

          {/* todo list and actions  */}
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </Container>
    </Base>
  );
}
