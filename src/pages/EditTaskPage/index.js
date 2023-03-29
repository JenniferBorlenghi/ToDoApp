import PageContainer from "./../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import NotFoundPage from "./../NotFoundPage";
import Form from "../../components/Form";
import "./styles.scss";
import { IoCaretBackCircleSharp, IoPlayBackCircle } from "react-icons/io5";
import * as database from "./../../database";
import ProcessingDB from "../../components/ProcessingDB";
import { useEffect, useState } from "react";

export default function EditTaskPage() {
  const params = useParams();
  const [task, setTask] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const task = await database.loadById(params.id);
      task.id = params.id;
      setTask(task);
      console.log("here", task);
      setIsLoading(false);
    })();
  }, []);

  if (loading) {
    return <ProcessingDB message="Loading..." />;
  }

  if (!task) {
    return <NotFoundPage />;
  }

  return (
    <PageContainer title="Edit" className="edit-page">
      <Form task={task} />
      <div className="back-buttons">
        <Link to={"/" + params.id} className="back-task">
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
