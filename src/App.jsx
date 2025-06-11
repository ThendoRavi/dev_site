import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WorkPage from "./components/WorkPage";
function App() {
  return (
    <Routes>
      <Route path="/work" element={<WorkPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
