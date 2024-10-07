// App.js
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import SkillsPage from './components/SkillsPage/SkillsPage';
import Navbar from './components/Header/Header'; // Import your Navbar component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Render the Navbar here, only once */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/skillspage" element={<SkillsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
