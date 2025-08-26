// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cloth from "./components/Cloth/Cloth";
import Watches from "./components/Watches/Watches";

function App() {
  return (
    <Router>
      <HeroSection />
      <Routes>
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/watches" element={<Watches />} />
      </Routes>
    </Router>
  );
}

export default App;
