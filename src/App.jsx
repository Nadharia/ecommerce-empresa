import { useEffect} from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'

import Lenis from '@studio-freight/lenis';
import Nosotros from './components/Nosotros'
import Flecha from './components/flecha.jsx';
import Fondo from './components/Proyectos.jsx'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
  lerp: 0.08,    
  smooth: true,
  wheelMultiplier: 0.5,
});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  

 return (
    <div className="relative min-h-[200vh]">
      <Nav/>
      <Main />
      <Fondo/>
      <Nosotros/>
      <Flecha/>
    </div>
  );

}

export default App
