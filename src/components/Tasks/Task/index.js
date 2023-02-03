export default function Task({
  id,
  description,
  completed,
  onStatusChange,
  onRemoveTask,
}) {
  const changeTaskStatus = () => {
    onStatusChange(id);
  };

  const removeTask = () => {
    onRemoveTask(id);
  };

  return (
    <>
      <h3>{description}</h3>
      <p>Id: {id}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
      <button onClick={changeTaskStatus}>Change Status</button>
      <button onClick={removeTask}>Remove Task</button>
      <hr />
    </>
  );
}
