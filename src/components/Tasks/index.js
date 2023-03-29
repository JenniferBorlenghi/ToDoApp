import Task from "./Task";
import "./styles.scss";
import { MdCleaningServices } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { clearTasks } from "../../redux/taskSlice";
import * as database from "./../../database";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleClearTasks = async () => {
    const ids = tasks.map((task) => task.id);

    const resultFromRemovingAllTasks = await database.removeAll(ids);
    if (resultFromRemovingAllTasks) {
      dispatch(clearTasks());
    } else {
      alert("Failed to remove all tasks");
    }
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
