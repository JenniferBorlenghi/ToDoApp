import PageContainer from "./../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "./../NotFoundPage";
import "./styles.scss";
import { BsFillFlagFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { IoCaretBackCircleSharp } from "react-icons/io5";

export default function TaskItemPage() {
  const params = useParams();
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task.id === params.id)
  );

  if (!task) {
    return <NotFoundPage />;
  }

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

  return (
    <PageContainer title={task.description} className="task-item-page">
      <p className="task-info">
        <strong>Status:</strong>{" "}
        <span className={statusContent}>{statusContent}</span>
      </p>
      <p className="priority-info">
        <strong>Priority: </strong>
        <BsFillFlagFill className={priorityClass} /> {task.priority}
      </p>

      {task.details !== "" && (
        <p>
          <strong>Details: </strong>
          {task.details}
        </p>
      )}

      {task.categories.length > 0 && (
        <p>
          <strong>Categories:</strong>{" "}
          <span>{task.categories.join(" | ")}</span>
        </p>
      )}

      <div className="back-and-edit-buttons">
        <Link to="/" className="back-button">
          <IoCaretBackCircleSharp />
          Back
        </Link>
        <Link to={"/edit/" + task.id} className="edit-button">
          <AiFillEdit /> Edit
        </Link>
      </div>
    </PageContainer>
  );
}
