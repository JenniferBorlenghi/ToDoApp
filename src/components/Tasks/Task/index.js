export default function Task({
  id,
  description,
  completed,
  label,
  handleChangeLabel,
  handleStatusChange,
  handleRemoveTask,
}) {
  const changeTaskStatus = () => {
    handleStatusChange(id);
  };

  const removeTask = () => {
    handleRemoveTask(id);
  };
  
  const changeLabel = (event) => {
    const newLabel = event.target.value;
    handleChangeLabel(id, newLabel);
  }

  return (
    <>
      <h3>{description}</h3>
      <p>Id: {id}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
      <p>Label: {label}</p>

      <select onChange={changeLabel}>
        <option value="Personal">Personal</option>
        <option value="Housechores">Housechores</option>
        <option value="Studies">Studies</option>
        <option value="Work">Work</option>
      </select>

      <button onClick={changeTaskStatus}>Change Status</button>
      <button onClick={removeTask}>Remove Task</button>
      <hr />
    </>
  );
}
