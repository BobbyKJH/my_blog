import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./page/MainPage";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </>
);

export default App;
