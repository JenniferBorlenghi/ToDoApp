import PageContainer from "./../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "./../NotFoundPage";
import Form from "../../components/Form";
import "./styles.scss";
import { IoCaretBackCircleSharp, IoPlayBackCircle } from "react-icons/io5";

export default function EditTaskPage() {
  const params = useParams();
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task.id === params.id)
  );

  if (!task) {
    return <NotFoundPage />;
  }

  return (
    <PageContainer title="Edit" className="edit-page">
      <Form />
      <div className="back-buttons">
        <Link to={"/" + task.id} className="back-task">
          <IoCaretBackCircleSharp />
          Back to this task
        </Link>
        <Link to="/" className="back-all-tasks">
          <IoPlayBackCircle />
          Back all tasks
        </Link>
      </div>
    </PageContainer>
  );
}
