import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 min-h-screen overflow-hidden pt-32 md:pt-40">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src="/assets/Hero.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] w-full text-center whitespace-nowrap font-normal font-instrument leading-tight tracking-[-3px] text-white animate-fade-rise">
          Beyond <span className="text-gray-300 font-light">silence,</span> we build <span className="text-gray-300 font-light">the</span> eternal.
        </h1>
        
        <p className="text-base sm:text-lg max-w-2xl mt-8 mx-auto leading-relaxed text-gray-300 font-inter animate-fade-rise-delay text-center">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls.<br className="hidden md:block" />
          Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        <button className="mt-12 rounded-full px-12 py-4 text-sm md:text-base font-inter font-medium bg-white text-black hover:bg-gray-100 transition-all duration-300 animate-fade-rise-delay-2">
          Begin Journey
        </button>
      </div>
    </div>
  );
};
