import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Page/About';
import Contact from './Page/Contact';
import Home from './Page/Home';

import WP from './Page/Contents/WP';
import AHP from './Page/Contents/AHP';
import TOPSIS from './Page/Contents/TOPSIS';

function App() {
  return (
    <>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/About" element={ <About />} />
            <Route path="/Contact" element={ <Contact />} />
            <Route path="/WP" element={ <WP />} />
            <Route path="/AHP" element={ <AHP />} />
            <Route path="/TOPSIS" element={ <TOPSIS />} />
          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;