import Task from "./Task";
import "./styles.scss";

import { MdCleaningServices } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";

export default function Tasks({
  tasks,
  onStatusChange,
  onRemoveTask,
  onClearTasks,
}) {
  return (
    <div className="tasks-comp">
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
          <button className="clear-button" onClick={onClearTasks}>
            <MdCleaningServices />
            Clear Tasks
          </button>
        </>
      )}
      {tasks.length === 0 && (
        <div className="no-tasks">
          <h4>No tasks yet!</h4>
          <TbClipboardList />
        </div>
      )}
    </div>
  );
}
