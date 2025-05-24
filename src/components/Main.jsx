// Main.jsx
const Main = () => {
  return (
    <div className="fixed w-full h-screen top-0 right-0 overflow-hidden z-20">
      <img
        src="/img/photo_init.jpg"
        alt="Oficina"
        className="w-full h-full object-cover object-[70%_30%] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      <h1 className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium 
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl px-4 text-center max-w-full drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
        solu<span className="text-blue-400">it</span>
      </h1>
      <h2 className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-lg 
                     text-lg sm:text-xl md:text-2xl font-medium text-white tracking-wide drop-shadow-lg select-none 
                     max-w-md text-center">
        Solución con <span><span className="text-blue-400 font-bold">IT</span>egración</span>
      </h2>
      <img
        src="/img/flecha-abajo.png"
        alt="Flecha hacia abajo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce w-10 filter invert cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      />
    </div>
  );
};

export default Main;
