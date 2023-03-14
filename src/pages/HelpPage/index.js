import PageContainer from "../../components/PageContainer";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";

export default function HelpPage() {
  return (
    <PageContainer title="Help" className="help-page">
      <article>
        <Outlet />
      </article>

      {/* Menu */}
      <aside>
        <NavLink to="/help" end>
          Help
        </NavLink>
        <NavLink to="/help/add">Adding Tasks</NavLink>
        <NavLink to="/help/edit">Editing Tasks</NavLink>
        <NavLink to="/help/remove">Removing Tasks</NavLink>
        <NavLink to="/help/change-status">Changing Status</NavLink>
      </aside>
    </PageContainer>
  );
}
