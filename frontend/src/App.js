import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from './Component/slider/Slider';
import Header from './Component/Header';
import Cards from './Component/Cards';

import Train from './Component/pages/Train';
import Flight from './Component/pages/Flight';
import Bus from './Component/pages/Bus';
import Hotel from './Component/pages/Hotel';
import Home from './Component/pages/Home';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Flight" element={<Flight />} />
          <Route exact path="/Train" element={<Train />} />
          <Route exact path="/Bus" element={<Bus />} />
          <Route exact path="/Hotel" element={<Hotel />} />
        </Routes>
        <Cards />
        <Slider />
      </Router>
    </>
  );
}

export default App;
