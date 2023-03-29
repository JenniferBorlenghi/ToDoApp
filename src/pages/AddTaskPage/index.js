import PageContainer from "../../components/PageContainer";
import Form from "../../components/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import "./../EditTaskPage/styles.scss";

export const emptyTask = {
  description: "",
  status: "",
  priority: "",
  details: "",
  categories: [],
};

export default function AddTaskPage() {
  const [addError, setAddError] = useState(false);

  const handleAddError = (newError) => {
    setAddError(newError);
  };

  return (
    <PageContainer title="New Task">
      <Form task={emptyTask} onAddError={handleAddError} />
      {addError && (
        <div className="edit-add-page">
          <div className="back-buttons">
            <Link to="/" className="back-all-tasks">
              <IoCaretBackCircleSharp />
              Back to Tasks
            </Link>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
