type TodoData = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  createdTime: number;
};

type Action = "all" | "active" | "completed";
