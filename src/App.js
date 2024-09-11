import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import RepairmanPage from "./components/repairman";
import AboutUs from "./components/onas";
import RegistrationForm from "./components/register";
import SupportForm from "./components/help";
import Layout from "./Layout.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repairman-page" element={<RepairmanPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/support" element={<SupportForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
