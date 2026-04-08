import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-[#F9F9F9]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] mb-4 block font-inter">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-instrument text-[#000000]">Voices of the Flow</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl text-[#000000]/10 font-instrument block mb-4">“</span>
            <h2 className="text-xl md:text-3xl font-instrument text-[#000000] italic leading-tight mb-12 max-w-3xl mx-auto">
              Aethera doesn’t just render spaces; they capture the ghost in the machine. Their work has a weight and soul that we haven’t found anywhere else.
            </h2>
            
            {/* Person Images Grid */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                {/* Person 1 - B&W */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden grayscale opacity-30">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Main Person - Color/Center */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-xl z-10 border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                    alt="Darrell Steward" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Person 3 - B&W */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden grayscale opacity-30">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-base font-instrument text-[#000000] tracking-wide">Darrell Steward</span>
                <span className="text-[10px] font-inter text-[#6F6F6F] mt-1 uppercase tracking-widest">CEO & Founder, Vance & Co.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
