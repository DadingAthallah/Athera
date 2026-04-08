import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Aura Figure",
    category: "Digital Sculpture",
    size: "md:col-span-2 md:row-span-2",
    img: "/assets/Floral Fusion Figure.png"
  },
  {
    title: "Silent Knight",
    category: "Character Art",
    size: "md:col-span-1 md:row-span-1",
    img: "/assets/Meditative Knight in Field.png"
  },
  {
    title: "Retro Horizon",
    category: "Product Render",
    size: "md:col-span-1 md:row-span-2",
    img: "/assets/Retro Console in Meadow.png"
  },
  {
    title: "Nature Console",
    category: "Still Life",
    size: "md:col-span-1 md:row-span-1",
    img: "/assets/Retro Console in Nature.png"
  },
  {
    title: "Echoes of Play",
    category: "Atmospheric",
    size: "md:col-span-1 md:row-span-1",
    img: "/assets/Retro Console on Hill.png"
  },
  {
    title: "Vintage Signal",
    category: "Concept Art",
    size: "md:col-span-2 md:row-span-1",
    img: "/assets/Vintage TV on Hill.png"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] mb-4 block font-inter">Recent Works</span>
          <h2 className="text-4xl md:text-5xl font-instrument text-[#000000]">Selected Renders</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl bg-gray-100 ${project.size}`}
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] text-white/70 font-inter uppercase tracking-widest block mb-1">{project.category}</span>
                <h3 className="text-lg text-white font-instrument">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
