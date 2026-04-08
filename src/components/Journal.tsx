import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    date: "March 24, 2026",
    title: "The Future of Digital Materiality",
    desc: "How real-time rendering is changing the way we perceive texture and depth.",
    img: "/assets/Journal 1.png"
  },
  {
    date: "Feb 12, 2026",
    title: "Light as a Language",
    desc: "Exploring atmospheric physics to tell cinematic stories through light.",
    img: "/assets/Journal 2.png"
  },
  {
    date: "Jan 05, 2026",
    title: "Beyond the Render",
    desc: "Seamless integration of AI into the high-end 3D visualization workflow.",
    img: "/assets/Journal 3.png"
  }
];

export const Journal: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-white" id="journal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#6F6F6F] mb-4 block font-inter">Insights</span>
            <h2 className="text-4xl md:text-5xl font-instrument text-[#000000]">Our Journal</h2>
          </motion.div>
          <motion.a 
            href="#" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest font-inter text-[#000000] transition-colors"
          >
            <span className="border-b border-black/20 pb-1 group-hover:border-black transition-all">Read all entries</span>
            <div className="w-8 h-[1px] bg-black/20 group-hover:w-12 group-hover:bg-black transition-all" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative mb-10 overflow-hidden aspect-[4/5] bg-gray-50 rounded-2xl">
                <img 
                  src={article.img} 
                  alt={article.title}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              
              <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#6F6F6F] font-inter">
                  {article.date}
                </div>
                <h3 className="text-2xl font-instrument text-[#000000] leading-snug group-hover:italic group-hover:pl-2 transition-all duration-500">
                  {article.title}
                </h3>
                <p className="text-sm font-inter text-[#6F6F6F] leading-relaxed line-clamp-2 group-hover:text-black transition-colors duration-500">
                  {article.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
