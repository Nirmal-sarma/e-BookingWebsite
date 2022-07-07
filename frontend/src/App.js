import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Component/Header';

import Train from './Component/pages/Train/Train';
import Flight from './Component/pages/Flight/Flight';
import Bus from './Component/pages/Bus/Bus';
import Hotel from './Component/pages/Hotel/Hotel';
import Home from './Component/pages/Home/Home';

<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
>>>>>>> f6bdd8b8139d16f939c1a1fce5585f52f3a5c865

function App() {
  return (
    <>
<<<<<<< HEAD
     <Router>
      <Header />
      <div id="Body">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Flight" element={<Flight/>}/>
      <Route exact path="/Train" element={<Train/>}/>
      <Route exact path="/Bus" element={<Bus/>}/>
      <Route exact path="/Hotel" element={<Hotel/>}/>
      
        </Routes>
        </div>
      </Router> 
=======
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
>>>>>>> f6bdd8b8139d16f939c1a1fce5585f52f3a5c865
    </>
  );
}

export default App;
