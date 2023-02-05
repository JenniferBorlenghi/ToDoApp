export default function Task({ task, onStatusChange, onRemoveTask }) {
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
      <p>Status: {task.status ? "Completed":"Not Completed"}</p>
      <p>Priority: {task.priority}</p>
      {task.details !== "" && <p>Details: {task.details}</p>}
      {task.categories.length > 0 && <p>Categories: {task.categories.map((cat) => (<span key={cat}>{cat} | </span>))} </p>}
      <button onClick={changeTaskStatus}>Change Status</button>
      <button onClick={removeTask}>Remove Task</button>
      <hr />
    </>
  );
}
