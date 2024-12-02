import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import DataVisualization from "./components/DataVisualization";
import About from "./components/About";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link to="/data">Data Visualization</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/data" element={<DataVisualization />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;