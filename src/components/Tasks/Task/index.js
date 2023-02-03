export default function Task({
  id,
  task,
  onStatusChange,
  onRemoveTask,
}) {
  const changeTaskStatus = () => {
    onStatusChange(task.id);
  };

  const removeTask = () => {
    onRemoveTask(task.id);
  };

  return (
    <>
      <h3>{task.description}</h3>
      <p>Id: {task.id}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={changeTaskStatus}>Change Status</button>
      <button onClick={removeTask}>Remove Task</button>
      <hr />
    </>
  );
}
