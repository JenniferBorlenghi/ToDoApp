import Header from "./components/Header";
import TaskListPage from "./pages/TaskListPage";
import TaskItemPage from "./pages/TaskItemPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import HelpPage from "./pages/HelpPage";
import HelpIntroductionPage from "./pages/HelpPage/Introduction";
import HelpAddTasksPage from "./pages/HelpPage/AddTasks";
import HelpEditTasksPage from "./pages/HelpPage/EditTasks";
import HelpRemoveTasksPage from "./pages/HelpPage/RemoveTasks";
import HelpChangeStatusPage from "./pages/HelpPage/ChangeStatus";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import * as database from "./database";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "./redux/taskSlice";
import ProcessingDB from "./components/ProcessingDB";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const tasks = await database.load();
      dispatch(setTasks(tasks));
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />

      {!isLoading ? (
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/:id" element={<TaskItemPage />} />

          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />

          <Route path="/help" element={<HelpPage />}>
            <Route path="" element={<HelpIntroductionPage />} />
            <Route path="add" element={<HelpAddTasksPage />} />
            <Route path="edit" element={<HelpEditTasksPage />} />
            <Route path="remove" element={<HelpRemoveTasksPage />} />
            <Route path="change-status" element={<HelpChangeStatusPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <ProcessingDB message="Loading..." />
      )}
    </>
  );
}

export default App;
