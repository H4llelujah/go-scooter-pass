import './App.css';
import { useState, useEffect } from 'react';
import Promo from './components/Promo';
import Feature from './components/Feature';
import Purchases from './components/Purchases';
import Footer from './components/Footer';
import Logo from './components/Logo';




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

  return (
    <div className="App">
      <Logo></Logo>
      <Promo></Promo>
      <Feature windowWidth = {windowWidth}></Feature>
      <Purchases></Purchases>
      <Footer></Footer>   
    </div>
  );
}

export default App;
