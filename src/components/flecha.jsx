 const Flecha=()=>{return(<img
        src="/img/flecha-abajo.png"
        alt="Flecha hacia abajo"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 animate-bounce w-10 filter invert cursor-pointer z-50"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      />);};

      export default Flecha;