import Task from "./Task";
import "./styles.scss";

import { MdCleaningServices } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";

import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../../redux/taskSlice";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleClearTasks = () => {
    dispatch(clearTasks());
  };

  return (
    <div className="tasks-comp">
      {tasks.length > 0 && (
        <>
          {tasks.map((task, index) => {
            return <Task key={index} task={task} />;
          })}

          <button className="clear-button" onClick={handleClearTasks}>
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
