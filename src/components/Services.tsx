import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Architectural Viz",
    description: "Photorealistic 3D renderings that breathe life into blueprints and urban designs.",
    icon: "01",
    img: "/assets/image (24).png"
  },
  {
    title: "Product CGI",
    description: "High-fidelity studio-grade renders for digital-first brands and luxury products.",
    icon: "02",
    img: "/assets/Retro Console in Nature.png"
  },
  {
    title: "Real-time VR/AR",
    description: "Immersive virtual experiences and interactive 3D assets for modern interfaces.",
    icon: "03",
    img: "/assets/Meditative Knight in Field.png"
  },
  {
    title: "CGI Animation",
    description: "Cinematic motion design and dynamic visual storytelling for digital media.",
    icon: "04",
    img: "/assets/image (25).png"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-white relative" id="services">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#000000] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#000000] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] mb-4 block font-inter">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-instrument text-[#000000]">Our Craft</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="relative mb-8 overflow-hidden rounded-lg aspect-[4/5] bg-gray-50 border border-black/5">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 text-2xl font-instrument italic text-[#000000]/20 group-hover:text-[#000000]/60 transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-instrument text-[#000000] mb-4">{service.title}</h3>
              <p className="text-sm font-inter text-[#6F6F6F] leading-relaxed group-hover:text-[#000000] transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
