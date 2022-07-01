import "./App.css";
import LandingPage from "./Component/LandingPage";
import VideoPage from './Component/VideoPage';
import { Route, Routes } from "react-router-dom";

export const config = {
  endpoint:`https://3cb99b0b-8174-419d-8f53-09cebaf3aec1.mock.pstmn.io/v1`
};
function App() {
  return (
    <div style={{ backgroundColor: "#181818", minHeight: "100vh" }}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/Video/:id" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
