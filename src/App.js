import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import "./styles.scss";

function App() {
  return (
    <div className="app-main">
      <Header />
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
