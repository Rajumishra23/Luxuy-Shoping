// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cloth from './pages/Cloth';
import Watches from './pages/Watches';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloth" element={<Cloth />} />
        <Route path="/watches" element={<Watches />} />
      </Routes>
    </Router>
  );
}

export default App;