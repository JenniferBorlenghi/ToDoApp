import { useState } from "react";

export default function Form({ onNewTask }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [priority, setPriority] = useState("");

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
    if (priority === "") {
      newErrorMessages.push("The priority is required.");
    }

    setErrorMessages(newErrorMessages);

    if (newErrorMessages.length === 0) {
      onNewTask(description, status, priority);

      // cleaning inputs:
      setDescription("");
      setStatus("");
      setPriority("");
    }
  };

  const priorityOptions = [
    { id: "1", content: "P1" },
    { id: "2", content: "P2" },
    { id: "3", content: "P3" },
    { id: "4", content: "P4" },
  ];

  const PriorityInputsComponent = priorityOptions.map((item) => (
    <label key={item.id}>
      <input
        type="radio"
        value={item.content}
        checked={priority === item.content}
        onChange={(e) => setPriority(e.target.value)}
      />
      {item.content}
    </label>
  ));

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

        <button>Add</button>
      </form>
    </>
  );
}
