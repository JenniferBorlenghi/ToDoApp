import "./styles.scss";
import { BsFillFlagFill, BsToggleOn, BsToggleOff} from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai";

export default function Task({ task, onStatusChange, onRemoveTask }) {
  const changeTaskStatus = () => {
    onStatusChange(task.id);
  };

  const removeTask = () => {
    onRemoveTask(task.id);
  };

  const statusContent = task.status ? "Completed" : "Open";

  const findPriorityClass = () => {
    switch (task.priority) {
      case "P1":
        return "p1";
      case "P2":
        return "p2";
      case "P3":
        return "p3";
      case "P4":
        return "p4";
      default:
        return "p4";
    }
  };

  const priorityClass = findPriorityClass();

  const changeStatusIcon = task.status ? <BsToggleOn/> : <BsToggleOff />;

  return (
    <div className="task-comp">
      <div className="task-info">
        <h3>{task.description}</h3>
        <p>Id: {task.id}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={statusContent}>{statusContent}</span>
        </p>
        <p className="priority-info" >
          <strong >Priority:</strong>
          <BsFillFlagFill className={priorityClass}/> {task.priority}
        </p>
        {task.details !== "" && (
          <p>
            <strong>Details:</strong> {task.details}
          </p>
        )}
        {task.categories.length > 0 && (
          <p>
            <strong>Categories:</strong>{" "}
            <span>{task.categories.join(' | ')}</span>
          </p>
        )}
      </div>
      <div className="task-actions">
        <button onClick={changeTaskStatus} className="change-button">{changeStatusIcon} Change Status</button>
        <button onClick={removeTask} className="remove-button"><AiFillDelete />Remove Task</button>
      </div>
    </div>
  );
}
