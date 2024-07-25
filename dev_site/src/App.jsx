import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dev_site" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
