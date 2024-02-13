// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Destinations from "./pages/Destinations";
import Login from "./pages/system/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </div>
  );
}

export default App;
