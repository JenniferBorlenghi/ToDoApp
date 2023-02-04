import { useState } from "react";

export default function Form({ onNewTask }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [priority, setPriority] = useState("");
  const [details, setDetails] = useState("");
  const [categories, setCategories] = useState([]);

  // validating submission and adding the new task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrorMessages = [];

    // checking if the description has more than 5 characters
    if (description.length < 5) {
      newErrorMessages.push(
        "The description must have more than 5 characters."
      );
    }

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
      onNewTask(description, status, priority, details, categories);

      // cleaning inputs:
      setDescription("");
      setStatus("");
      setPriority("");
      setDetails("");
      setCategories([]);

      setErrorMessages("");
    }
  };

  const priorityOptions = [
    { id: "P1", content: "Priority 1" },
    { id: "P2", content: "Priority 2" },
    { id: "P3", content: "Priority 3" },
    { id: "P4", content: "Priority 4" },
  ];

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

  const handleCheckCategory = (e) => {
    const category = e.target.name;

    let newCategories = [...categories];

    if (categories.includes(category)) {
      newCategories = categories.filter((it) => it !== category);
      setCategories(newCategories);
    } else {
      newCategories = [...categories, category];
      setCategories(newCategories);
    }
  };
  
  const CategoriesInputsComponent = categoriesOptions.map((item) => (
    <label key={item.id}>
      <input
        type="checkbox"
        name={item.content}
        checked={categories.includes(item.content)}
        // checked returns true (option selected) or false (option not selected) -> initially it is false
        onChange={handleCheckCategory}
      />
      {item.content}
    </label>
  ))

  

  return (
    <>
      {errorMessages.length !== 0 && (
        <div>
          Invalid data:
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <h2>Add a New Task:</h2>
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
        <br />
        <br />
        {/* Status Input - Select*/}
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="" key="0">
              - Select -
            </option>
            <option value="Not Completed" key="1">
              Open
            </option>
            <option value="Completed" key="2">
              Completed
            </option>
          </select>
        </label>
        <br />
        <br />
        {/* Priority Input - Radio */}
        <div>
          Priority:
          {PriorityInputsComponent}
        </div>
        <br />
        <br />
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
        <br />
        <br />
        {/* Category Input - Checkbox */}
        <div>
          Categories:{CategoriesInputsComponent}
        </div>
        <br />
        <button>Add</button>
      </form>
    </>
  );
}
