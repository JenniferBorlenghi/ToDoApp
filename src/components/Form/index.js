import { useState } from "react";

export default function Form({ onNewTask }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

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

    setErrorMessages(newErrorMessages);

    if (newErrorMessages.length === 0) {
      onNewTask(description, status);

      // cleaning inputs:
      setDescription("");
      setStatus("");

      setErrorMessages("");
    }
  };

  const handleStatusChange = (e) => {
    if(e.target.value === ""){
      setStatus(e.target.value);
    } else {
      setStatus(JSON.parse(e.target.value));
    }
  }

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
        <button>Add</button>
      </form>
    </>
  );
}
