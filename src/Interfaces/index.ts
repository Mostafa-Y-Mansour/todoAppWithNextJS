interface ITodosState {
  todos: TodoData[];
  setTodos: React.Dispatch<React.SetStateAction<TodoData[]>>;
}
