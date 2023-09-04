import './App.css';
import { useState, useEffect } from 'react';
import Promo from './components/Promo';
import Feature from './components/Feature';
import Purchases from './components/Purchases';
import Footer from './components/Footer';
import Logo from './components/Logo';
import OpenGraph from './img/OpenGraph.png'
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';




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
    <HelmetProvider>
    <div className="App">
        {/* <Helmet>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="YandexGo"/>
          <meta property="og:url" content="https://h4llelujah.github.io/go-scooter-pass/"/>
          <meta property="og:image" content={OpenGraph}/>
          <meta property="og:site_name" content="YandexGo"/>
          <meta property="og:locale" content="ru_RU"/>
      </Helmet> */}
      <Logo></Logo>
      <Promo></Promo>
      <Feature windowWidth = {windowWidth}></Feature>
      <Purchases></Purchases>
      <Footer></Footer>   
    </div>
    </HelmetProvider>
  );
}

export default App;
