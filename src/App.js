import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import "./App.css";
import RepairmanPage from "./components/repairman";
import Header from "./components/header";
import AboutUs from "./components/onas";
import RegistrationForm from "./components/register";
import SupportForm from "./components/help";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repairman-page" element={<RepairmanPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/support" element={<SupportForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
