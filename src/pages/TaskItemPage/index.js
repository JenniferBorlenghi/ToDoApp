import PageContainer from "./../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "./../NotFoundPage";
import "./styles.scss";
import { BsFillFlagFill } from "react-icons/bs";

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
    <PageContainer title={task.description}>
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

      <Link to="/">Back</Link>
    </PageContainer>
  );
}
