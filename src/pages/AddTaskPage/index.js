import PageContainer from "../../components/PageContainer";
import Form from "../../components/Form";

export const emptyTask = {
  description: "",
  status: "",
  priority: "",
  details: "",
  categories: [],
};

export default function AddTaskPage() {
  return (
    <PageContainer title="New Task">
      <Form task={emptyTask} />
    </PageContainer>
  );
}
