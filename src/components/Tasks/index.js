import { useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      description: "Read the Bible",
      completed: false,
    },
    {
      id: uuidv4(),
      description: "Cook lunch",
      completed: false,
    },
    {
      id: uuidv4(),
      description: "Study React",
      completed: false,
    },
  ]);

  // function that delete all tasks
  const handleClearTasks = () => {
    setTasks([]);
  };

  // function that change the status between completed and not completed (toggle between them)
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });
    setTasks(updatedTasks);
  };

  // function that remove a specific task
  const handleRemoveTask = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        updatedTasks.splice(updatedTasks.indexOf(task), 1);
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>These are the tasks:</h1>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            id={task.id}
            description={task.description}
            completed={task.completed}
            handleStatusChange={handleStatusChange}
            handleRemoveTask={handleRemoveTask}
          />
        );
      })}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </>
  );
}
