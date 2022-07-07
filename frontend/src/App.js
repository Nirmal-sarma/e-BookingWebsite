import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Component/Header';

import Train from './Component/pages/Train/Train';
import Flight from './Component/pages/Flight/Flight';
import Bus from './Component/pages/Bus/Bus';
import Hotel from './Component/pages/Hotel/Hotel';
import Home from './Component/pages/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
