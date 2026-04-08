import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Discovery",
    desc: "Understanding the architectural intent and the soul of the space.",
    detail: "We begin with a deep dive into the vision, materials, and atmospheric requirements."
  },
  {
    title: "Layout & Light",
    desc: "Crafting the composition and the fundamental play of light.",
    detail: "Mastering the physics-based lighting to define the mood and spatial volume."
  },
  {
    title: "Materiality",
    desc: "Defining the textures and surfaces that tell a story.",
    detail: "High-resolution PBR textures to ensure every grain of wood and pore of stone is perfect."
  },
  {
    title: "Refinement",
    desc: "Polishing until the digital and physical realms are indistinguishable.",
    detail: "Final color grading and artistic touches for a truly cinematic output."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-[#F9F9F9]" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky top-40"
            >
              <span className="text-xs uppercase tracking-widest text-[#6F6F6F] mb-4 block font-inter">The Workflow</span>
              <h2 className="text-4xl md:text-6xl font-instrument text-[#000000] leading-[1.1]">The Science <br/>of Sight.</h2>
              <p className="mt-8 text-base font-inter text-[#6F6F6F] leading-relaxed max-w-sm">
                Our approach blends technical precision with artistic intuition to create renderings that feel lived-in and real.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3 space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l border-[#000000]/5"
              >
                <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-[#000000]" />
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-instrument text-[#000000]">{step.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg font-inter text-[#000000] mb-2">{step.desc}</p>
                    <p className="text-sm font-inter text-[#6F6F6F]">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
