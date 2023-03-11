import Header from "./components/Header";
import TaskListPage from "./pages/TaskListPage";
import TaskItemPage from "./pages/TaskItemPage";
import FormPage from "./pages/FormPage";
import HelpPage from "./pages/HelpPage";
import HelpIntroductionPage from "./pages/HelpPage/Introduction";
import HelpAddTasksPage from "./pages/HelpPage/AddTasks";
import HelpRemoveTasksPage from "./pages/HelpPage/RemoveTasks";
import HelpChangeStatusPage from "./pages/HelpPage/ChangeStatus";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/:id" element={<TaskItemPage />} />

        <Route path="/add" element={<FormPage />} />

        <Route path="/help" element={<HelpPage />}>
          <Route path="" element={<HelpIntroductionPage />} />
          <Route path="add" element={<HelpAddTasksPage />} />
          <Route path="remove" element={<HelpRemoveTasksPage />} />
          <Route path="change-status" element={<HelpChangeStatusPage />} />
        </Route>

        {/* TODO - EACH POST, EDIT POST */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
