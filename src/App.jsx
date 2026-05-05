import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import SelfCare from "./pages/SelfCare";
import About from "./pages/About";
import ActivityDetail from "./pages/ActivityDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;