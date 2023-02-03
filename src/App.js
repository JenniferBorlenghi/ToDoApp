import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      description: "Read the Bible",
      status: false,
    },
  ]);

  const handleNewTask = (description, status) => {
    const newTasks = [...tasks];
    newTasks.push({
      id: uuidv4(),
      description,
      status,
    });
    setTasks(newTasks);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <Header />
      <Tasks
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onRemoveTask={handleRemoveTask}
        onClearTasks={handleClearTasks}
      />
      <Form onNewTask={handleNewTask} />
    </div>
  );
}

export default App;
