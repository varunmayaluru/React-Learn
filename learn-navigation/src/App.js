// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Contact from './Contact';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to = "/" className = "nav-item">Homepage</Link>
        <Link to = "/contact" className = "nav-item">Contact</Link>
        <Link to = "/about" className = "nav-item">About Little Lemon</Link>
      </nav>
      <Routes>
          <Route path = "/" element = {<HomePage />}></Route>
          <Route path = "/contact" element = {<Contact />}></Route>
          <Route path = "/about" element = {<AboutLittleLemon/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
