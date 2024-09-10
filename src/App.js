import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import "./App.css";
import RepairmanPage from "./components/repairman";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repairman-page" element={<RepairmanPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
