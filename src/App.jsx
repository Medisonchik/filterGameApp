import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './HomePage';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <Router>
      <Navbar />
      <HomePage />
      <Footer />
    </Router>
  )
}

export default App;
