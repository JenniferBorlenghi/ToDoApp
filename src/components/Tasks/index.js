import Task from "./Task";

export default function Tasks({
  tasks,
  onStatusChange,
  onRemoveTask,
  onClearTasks,
}) {
  
  const handleClearTasks = () => {
    onClearTasks();
  };

  const handleStatusChange = (id) => {
    onStatusChange(id);
  };

  const handleRemoveTask = (id) => {
    onRemoveTask(id);
  };

  return (
    <>
      {tasks.length > 0 && (
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
      )}
      {tasks.length === 0 &&
      <h4>No tasks yet!</h4>
      }
    </>
  );
}
