import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    statusChange: (state, action) => {
      const id = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.status = !task.status;
        }
      });
    },
    getLastStatus: (state, action) => {
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
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  addTask,
  statusChange,
  getLastStatus,
  removeTask,
  clearTasks,
  editTask,
  setTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
