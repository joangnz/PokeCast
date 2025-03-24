// Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Episodes from "./components/Episodes";
import Watcher from "./components/Watcher";

// CSS
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/watcher/:id" element={<Watcher />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
