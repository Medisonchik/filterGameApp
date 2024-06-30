import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import SearchPage from './route/search/SearchPage';
import Details from './route/details/Details';


function App() {


  return (
    <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/search/:category" element={<SearchPage />} />
          <Route path='/details' element={<Details />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App;
