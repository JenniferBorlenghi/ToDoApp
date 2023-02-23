import "./styles.scss";

import { BsUiChecks } from "react-icons/bs";

export default function Header() {
  return (
    <header className="main">
      <div className="header-title">
        <BsUiChecks />
        <h1>Todo App</h1>
      </div>
      <p>by Jennifer Borlenghi de Brito</p>
    </header>
  );
}
