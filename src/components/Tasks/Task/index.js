import "./styles.scss";
import { BsFillFlagFill, BsToggleOn, BsToggleOff } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { statusChange, removeTask } from "../../../redux/taskSlice";
import { Link } from "react-router-dom";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    event.preventDefault();
    dispatch(statusChange(task.id));
  };

  const handleRemoveTask = (event) => {
    event.preventDefault();
    dispatch(removeTask(task.id));
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

  const changeStatusIcon = task.status ? <BsToggleOn /> : <BsToggleOff />;

  return (
    <Link to={"/" + task.id} className="task-comp">
      <div className="task-info">
        <h3>{task.description}</h3>
        <p>Id: {task.id}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={statusContent}>{statusContent}</span>
        </p>
        <p className="priority-info">
          <strong>Priority:</strong>
          <BsFillFlagFill className={priorityClass} /> {task.priority}
        </p>
        {task.details !== "" && (
          <p>
            <strong>Details:</strong> {task.details}
          </p>
        )}
        {task.categories.length > 0 && (
          <p>
            <strong>Categories:</strong>{" "}
            <span>{task.categories.join(" | ")}</span>
          </p>
        )}
      </div>
      <div className="task-actions">
        <button onClick={handleStatusChange} className="change-button">
          {changeStatusIcon} Change Status
        </button>
        <button onClick={handleRemoveTask} className="remove-button">
          <AiFillDelete />
          Remove Task
        </button>
      </div>
    </Link>
  );
}
