import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (description, status) => {
    console.log('status', status, typeof status)
    const newTasks = [...tasks];
    newTasks.push({
      id: uuidv4(),
      description,
      status
    });
    setTasks(newTasks);
  };

  // function that change the status between completed and not completed (toggle between them)
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
    });
    setTasks(updatedTasks);
  };

  // function that remove a specific task
  const handleRemoveTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // function that delete all tasks
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
