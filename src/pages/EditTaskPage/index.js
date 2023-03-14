import PageContainer from "./../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "./../NotFoundPage";
import Form from "../../components/Form";
// import "./styles.scss";

export default function EditTaskPage() {
  const params = useParams();
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task.id === params.id)
  );

  if (!task) {
    return <NotFoundPage />;
  }

  return (
    <PageContainer title="Edit">
      <Form />
      <Link to={"/" + task.id}>Back to this task</Link>
      <Link to="/">Back all task</Link>
    </PageContainer>
  );
}
