import Task from "./Task";

export default function Tasks({
  tasks,
  onStatusChange,
  onRemoveTask,
  onClearTasks,
}) {
  // function that delete all tasks
  const handleClearTasks = () => {
    onClearTasks();
  };

  // function that change the status between completed and not completed (toggle between them)
  const handleStatusChange = (id) => {
    onStatusChange(id);
  };

  // function that remove a specific task
  const handleRemoveTask = (id) => {
    onRemoveTask(id);
  };

  return (
    <>
      <h2>These are the tasks:</h2>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            id={task.id}
            description={task.description}
            completed={task.completed}
            onStatusChange={handleStatusChange}
            onRemoveTask={handleRemoveTask}
          />
        );
      })}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </>
  );
}
