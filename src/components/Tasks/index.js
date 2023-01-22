import { useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      description: "Read the Bible",
      completed: false,
      label: "Personal"
    },
    {
      id: uuidv4(),
      description: "Cook lunch",
      completed: false,
      label: "Housechores"
    },
    {
      id: uuidv4(),
      description: "Study React",
      completed: false,
      label: "Studies"
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

  // function that changes the label of the task
  const handleChangeLabel = (id, newLabel) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.label = newLabel;
      }
    });
    setTasks(updatedTasks);
  }

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
            label={task.label}
            priority={task.priority}
            handleChangeLabel={handleChangeLabel}
            handleStatusChange={handleStatusChange}
            handleRemoveTask={handleRemoveTask}
          />
        );
      })}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </>
  );
}
