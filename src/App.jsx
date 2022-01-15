import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Background from "./Pages/Background";
import LandingPage from "./Pages/LandingPage";
import CreatePost from "./Pages/CreatePost";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup/:role" element={<SignUp />} />
          <Route exact path="/login/:role" element={<Login />} />
          <Route exact path="/background" element={<Background />} />
          <Route exact path="/dashboard/:role" element={<Home />} />
          <Route exact path="/createJob" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
