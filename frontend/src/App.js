import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
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
