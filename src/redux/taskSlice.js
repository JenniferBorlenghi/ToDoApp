import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialTasks = [
  {
    id: uuidv4(),
    description: "Read the Bible",
    status: false,
    priority: "P1",
    details: "Start from Job 4.",
    categories: [],
  },
  {
    id: uuidv4(),
    description: "Cook lunch",
    status: true,
    priority: "P3",
    details: "",
    categories: [],
  },
  {
    id: uuidv4(),
    description: "Study React",
    status: false,
    priority: "P2",
    details: "Do lab 5!",
    categories: ["Study"],
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      const { description, status, priority, details, categories } =
        action.payload;
      state.tasks.push({
        id: uuidv4(),
        description,
        status,
        priority,
        details,
        categories,
      });
      console.log("handleNewTask");
    },
    statusChange: (state, action) => {
      const id = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.status = !task.status;
        }
      });
    },
    removeTask: (state, action) => {
      if (window.confirm("Are you sure?")) {
        const id = action.payload;
        state.tasks = state.tasks.filter((task) => task.id !== id);
      }
    },
    clearTasks: (state) => {
      if (window.confirm("Are you sure?")) {
        state.tasks = [];
      }
    },
  },
});

export const { addTask, statusChange, removeTask, clearTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
