import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Packages from './Packages';
import Dashboard from './Dashboard';
import Tour from './Tour';
import ViewAllPackages from './ViewAllPackages';
import Login from './Login';
import Form from './Form';
import './App.css';
import './style.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Pages with routes and labels
  const pages = [
    { path: '/', label: '1' },
    { path: '/tour', label: '2' },
    { path: '/blog', label: '3' },
    { path: '/about', label: '4' },
    { path: '/packages', label: '5' },
    { path: '/viewallpackages', label: '6' },
    { path: '/dashboard', label: '7' },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/viewallpackages" element={<ViewAllPackages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      {/* Numbered Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => navigate(page.path)}
            style={{
              backgroundColor: location.pathname === page.path ? "tomato" : "#f0f0f0",
              color: location.pathname === page.path ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "40px",
              height: "30px",
              cursor: "pointer"
            }}
          >
            {page.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
