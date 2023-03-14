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
      // add the task to the beginning of the array
      state.tasks.unshift({
        id: uuidv4(),
        description,
        status,
        priority,
        details,
        categories,
      });
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
    editTask: (state, action) => {
      const currentTask = action.payload;

      const id = currentTask.task.id;
      const description = currentTask.description;
      const status = currentTask.status;
      const priority = currentTask.priority;
      const details = currentTask.details;
      const categories = currentTask.categories;

      state.tasks.forEach((item) => {
        if (item.id === id) {
          item.description = description;
          item.status = status;
          item.priority = priority;
          item.details = details;
          item.categories = categories;
        }
      });
    },
  },
});

export const { addTask, statusChange, removeTask, clearTasks, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
