"use client";
import Base from "@/components/Base";
import Container from "@/components/Container";
import Header from "@/components/Header";
import TodoBox from "@/components/TodoBox";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoData[]>([]);

  return (
    <Base>
      <Container>
        <Header />
        <div className="text-xl w-11/12 text-dark-blue-veryDark dark:text-white">
          {/* todo text input box */}
          <div className="m-auto w-full mb-5">
            <TodoBox todos={todos} setTodos={setTodos} />
          </div>
          <div className="m-auto w-full rounded-md bg-white dark:bg-dark-blue-veryDark-desaturated">
            {/* todo list  */}
            <TodoList todos={todos} setTodos={setTodos} />
            {/* todo list count and actions */}
            <div className="flex justify-between items-center p-4  mx-2 text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
              <span className="text-xs">5 items left</span>
              <span className="flex gap-4 font-bold ml-10">
                <button className="text-primary-brightBlue hover:text-dark-blue-veryDark hover:dark:text-white">
                  All
                </button>
                <button className="hover:text-dark-blue-veryDark hover:dark:text-white">
                  Active
                </button>
                <button className="hover:text-dark-blue-veryDark hover:dark:text-white">
                  Completed
                </button>
              </span>
              <span className="text-xs hover:text-dark-blue-veryDark hover:dark:text-white cursor-pointer">
                Clear Completed
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Base>
  );
}
