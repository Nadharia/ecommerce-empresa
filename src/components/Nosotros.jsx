const Nosotros = () => {
  return (
    <section
      id="Nosotros"
      className="mt-[100vh] w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center relative px-6 text-center z-40 left-0"
    >
      {/* Degradado negro arriba que se desvanece */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-50" />

      <h2 className="text-5xl font-medium text-blue-400 mb-6 drop-shadow-lg animate-fadeInDown">
        Sobre nosotros
      </h2>
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed tracking-wide drop-shadow-md animate-fadeInUp">
        Somos un equipo apasionado dedicado a ofrecer las mejores soluciones para nuestros clientes.  
        Nuestra misión es brindar productos de alta calidad que impulsen el éxito y la innovación.  
        Trabajamos con compromiso, creatividad y profesionalismo para superar las expectativas.
      </p>
    </section>
  );
};

export default Nosotros;
