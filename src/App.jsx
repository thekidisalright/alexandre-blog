import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Open from "./pages/Open";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/alexandre-blog/" element={<Home />} />
        <Route path="/alexandre-blog/:id" element={<Open />} />
      </Routes>
    </Router>
  );
}

export default App;
