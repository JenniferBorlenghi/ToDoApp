import "./styles.scss";
import { BsUiChecks } from "react-icons/bs";
import MainMenu from "../MainMenu";

export default function Header() {
  return (
    <>
      <header className="main">
        <div className="header-title">
          <BsUiChecks />
          <div className="logo-title">Todo App</div>
        </div>
        <p>by Jennifer Borlenghi de Brito</p>
      </header>
      <MainMenu />
    </>
  );
}
