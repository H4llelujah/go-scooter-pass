import './App.css';
import { useState, useEffect } from 'react';
import OpenGraph from './components/OpenGraph';
import Promo from './components/Promo';
import Feature from './components/Feature';
import Purchases from './components/Purchases';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const show = () => {
    console.log(windowWidth)
  }

  return (
    <div className="App">
      <OpenGraph></OpenGraph>
      <Promo></Promo>
      <Feature windowWidth = {windowWidth}></Feature>
      <Purchases></Purchases>
      <Footer></Footer>
      {/* <Slider></Slider> */}
      
    </div>
  );
}

export default App;
