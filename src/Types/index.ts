type TodoData = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  createdTime: number;
};

type Action = "all" | "active" | "completed";
