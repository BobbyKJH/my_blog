import { Link } from "react-router-dom";
import { MainPageStyle } from "../style/mainPage/MainPageStyle";

const MainPage = () => {
  return (
    <MainPageStyle>
      <Link to="/intro">
        <div className="nav-box">
          <span>자기소개</span>
        </div>
      </Link>

      <Link to="/project">
        <div className="nav-box">
          <span>프로젝트</span>
        </div>
      </Link>

      <Link to="/plan">
        <div className="nav-box">
          <span>계획</span>
        </div>
      </Link>
    </MainPageStyle>
  );
};
export default MainPage;
