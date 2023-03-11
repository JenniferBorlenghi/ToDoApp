import PageContainer from "./../../components/PageContainer";
import { Link } from "react-router-dom";
import notFoundImage from "./../../includes/image-page-not-found.png";
import "./styles.scss";

export default function NotFoundPage() {
  return (
    <PageContainer title="Page Not Found" className="not-found-page">
      <img src={notFoundImage} alt="not-found"></img>
      <div className="text-page-not-found">
        <div className="status-code-404">404</div>
        <p>
          This page does not exist. Access your tasks <Link to="/">here.</Link>
        </p>
      </div>
    </PageContainer>
  );
}
