import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ScrollToBottom from './components/ScrollToBottom'; // Import the new component

const App = () => (
  <Router>
    <Router basename="/Tomatoe"></Router>
    <Header />
    <ScrollToBottom /> {/* Add this component */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

export default App;
