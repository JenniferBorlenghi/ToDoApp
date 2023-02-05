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

  // function that handles the change of status
  const handleStatusChange = (e) => {
    // if empty, change it direct
    if(e.target.value === ""){
      setStatus(e.target.value);
    } else { // if true or false, transform the input type string to boolean
      setStatus(JSON.parse(e.target.value));
    }
  }

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
    if (categories.includes(category)) { // if not in the category, add it
      newCategories = categories.filter((it) => it !== category);
      setCategories(newCategories);
    } else { // if in the category, remove it
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
          <select value={status} onChange={handleStatusChange}>
            <option value="">- Select -</option>
            <option value={false}>Open</option>
            <option value={true}>Completed</option>
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
