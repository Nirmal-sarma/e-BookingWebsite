import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from './Component/slider/Slider';
import Header from './Component/Header';
import Cards from './Component/Cards';

function App() {
  return (
    <>
      <Header />
      <Cards/>
       <Slider />
    </>
  );
}

export default App;
