import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoBackground } from './components/VideoBackground';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Capabilities } from './components/Capabilities';
import { Journal } from './components/Journal';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-white">
        {/* Navigation Layer */}
        <Navbar />

        {/* Content Layers */}
        <div className="relative z-10">
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Capabilities />
          <Journal />
          <Testimonials />
          <Contact />
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;
