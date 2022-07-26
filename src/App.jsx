import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import IntroPage from "./page/IntroPage";
import MainPage from "./page/MainPage";
import PlanPage from "./page/PlanPage";
import ProjectPage from "./page/ProjectPage";
import DetailPage from "./page/DetailPage";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/:id" element={<DetailPage />} />
      <Route path="/plan" element={<PlanPage />} />
    </Routes>
  </>
);

export default App;
