import { useState } from "react";

export default function Form({onNewTask}) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  // updating description as the user changes it
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // updating status as the user changes it
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

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

    // checking if the fields are not empty
    if (description === "") {
      newErrorMessages.push("The description is required.");
    }
    if (status === "") {
      newErrorMessages.push("The status is required.");
    }

    setErrorMessages(newErrorMessages);

    if (newErrorMessages.length === 0) {
      onNewTask(description, status);
      
      // cleaning inputs:
      setDescription("");
      setStatus("");
    }
  };

  // array of categories - less in database and content for the user
  const categories = [
    {id: 0, content: "Personal"},
    {id: 1, content: "College"},
    {id: 2, content: "University"},
    {id: 3, content: "School"},
    {id: 4, content: "Studies"},
    {id: 5, content: "Work"},
    {id: 6, content: "House Chores"},
    {id: 7, content: "Appointments"},
  ]

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
        <label>
          Description:
          <input
            type="text"
            maxLength={150}
            placeholder="Enter a description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>

        <label>
          Status:
          <select value={status} onChange={handleStatusChange}>
            <option value="">- Select -</option>
            <option value={false}>Open</option>
            <option value={true}>Completed</option>
          </select>
        </label>

        <button>Add</button>
      </form>
    </>
  );
}
