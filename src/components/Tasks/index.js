import Task from "./Task";

export default function Tasks({
  tasks,
  onStatusChange,
  onRemoveTask,
  onClearTasks,
}) {

  return (
    <>
      {tasks.length > 0 && (
        <>
          <h2>These are the tasks:</h2>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                onStatusChange={onStatusChange}
                onRemoveTask={onRemoveTask}
              />
            );
          })}
          <button onClick={onClearTasks}>Clear Tasks</button>
        </>
      )}
      {tasks.length === 0 &&
      <h4>No tasks yet!</h4>
      }
    </>
  );
}
