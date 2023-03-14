import { useState } from "react";
import "./styles.scss";
import { MdAddTask } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";

import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../redux/taskSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // the value task is used when this form edit an existing task, it will change the values of the form
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task.id === params.id)
  );

  const [description, setDescription] = useState(
    task !== undefined ? task.description : ""
  );
  const [status, setStatus] = useState(task !== undefined ? task.status : "");
  const [errorMessages, setErrorMessages] = useState([]);
  const [priority, setPriority] = useState(
    task !== undefined ? task.priority : ""
  );
  const [details, setDetails] = useState(
    task !== undefined ? task.details : ""
  );
  const [categories, setCategories] = useState(
    task !== undefined ? task.categories : []
  );

  // validating submission and adding the new task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrorMessages = [];

    // checking if the required fields (description, status, and priority) are not empty
    if (description === "") {
      newErrorMessages.push("The description is required.");
    }
    if (status === "") {
      newErrorMessages.push("The status is required.");
    }
    if (priority === "") {
      newErrorMessages.push("The priority is required.");
    }

    setErrorMessages(newErrorMessages);

    if (newErrorMessages.length === 0) {
      if (task === undefined) {
        dispatch(
          addTask({ description, status, priority, details, categories })
        );
        console.log("add priority", priority);
      } else {
        dispatch(
          editTask({ task, description, status, priority, details, categories })
        );
        console.log("edit priority", priority);
      }
      navigate("/");
    }
  };

  // function that handles the change of status
  const handleStatusChange = (e) => {
    // if empty, change it direct
    if (e.target.value === "") {
      setStatus(e.target.value);
    } else {
      // if true or false, transform the input type string to boolean
      setStatus(JSON.parse(e.target.value));
    }
  };

  const priorityOptions = [
    { id: "P1", content: "Priority 1" },
    { id: "P2", content: "Priority 2" },
    { id: "P3", content: "Priority 3" },
    { id: "P4", content: "Priority 4" },
  ];

  // priority input component (logic to be rendered)
  const PriorityInputsComponent = priorityOptions.map((item) => (
    <label key={item.id}>
      <input
        type="radio"
        value={item.id}
        checked={priority === item.id}
        onChange={(e) => setPriority(e.target.value)}
      />
      {item.id}
    </label>
  ));

  const categoriesOptions = [
    { id: "per", content: "Personal" },
    { id: "hou", content: "House Chores" },
    { id: "stu", content: "Study" },
    { id: "wk", content: "Work" },
    { id: "fam", content: "Family" },
    { id: "appt", content: "Appointments" },
  ];

  // function that change categories states adding items in the array according to the user selection
  const handleCheckCategory = (e) => {
    const category = e.target.name;

    let newCategories = [...categories];

    // toggle of categories
    if (categories.includes(category)) {
      // if not in the category, add it
      newCategories = categories.filter((it) => it !== category);
      setCategories(newCategories);
    } else {
      // if in the category, remove it
      newCategories = [...categories, category];
      setCategories(newCategories);
    }
  };

  // categories input component (logic to be rendered)
  const CategoriesInputsComponent = categoriesOptions.map((item) => (
    <label key={item.id}>
      <input
        type="checkbox"
        name={item.content}
        checked={categories.includes(item.content)}
        // checked returns true (option selected) or false (option not selected)
        // initially it is false
        onChange={handleCheckCategory}
      />
      {item.content}
    </label>
  ));

  return (
    <div className="form-comp">
      {/* <div className="form-modal"> */}
      {/* error message space after the header if it exists */}
      {errorMessages.length !== 0 && (
        <div className="invalid-data">
          <p>Invalid data:</p>
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* form inputs */}
      <form onSubmit={handleSubmit}>
        {/* Description Input - Text*/}
        <label>
          Description:
          <input
            type="text"
            maxLength={150}
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {/* Status Input - Select*/}
        <div className="status-field">
          <label>
            Status:
            <select value={status} onChange={handleStatusChange}>
              <option value="">- Select -</option>
              <option value={false}>Open</option>
              <option value={true}>Completed</option>
            </select>
          </label>
        </div>

        {/* Priority Input - Radio */}
        <div className="priority-field">
          Priority:
          {PriorityInputsComponent}
        </div>

        {/* Details Input - Textarea - not required */}
        <label>
          Details:
          <textarea
            maxLength={500}
            placeholder="Leave the details of the task"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>

        {/* Category Input - Checkbox */}
        <div className="categories-field">
          Categories:{CategoriesInputsComponent}
        </div>

        {/* submission button to add a task */}
        <button className="add-submit-button">
          {!task && (
            <>
              <MdAddTask />
              Add
            </>
          )}
          {task && (
            <>
              <VscSaveAs />
              Save Changes
            </>
          )}
        </button>
      </form>
      {/* </div> */}
    </div>
  );
}
