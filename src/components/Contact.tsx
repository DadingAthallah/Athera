import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section className="bg-[#000000] text-white pt-40 pb-20 px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-instrument mb-12 leading-[0.9]">
              Let’s build <br/>the eternal.
            </h2>
            <p className="text-xl font-inter text-white/60 max-w-md leading-relaxed">
              We are currently accepting new commissions for 2026. Reach out to discuss your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <a 
              href="mailto:studio@aethera.com"
              className="group relative flex items-center justify-center w-64 h-64 rounded-full border border-white/20 hover:border-white/100 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full origin-center" />
              <span className="relative z-10 text-xl font-instrument group-hover:text-black group-hover:italic transition-all duration-500">
                Start a Project
              </span>
            </a>
          </motion.div>
        </div>

        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="text-2xl font-instrument tracking-tight">
            Aethera<sup className="text-xs">®</sup>
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-4 font-inter">Inquiries</span>
              <a href="#" className="text-sm font-inter hover:text-white/60 transition-colors">studio@aethera.com</a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-4 font-inter">Follow</span>
              <div className="flex gap-6">
                <a href="#" className="text-sm font-inter hover:text-white/60 transition-colors">Instagram</a>
                <a href="#" className="text-sm font-inter hover:text-white/60 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-4 font-inter">Presence</span>
              <p className="text-sm font-inter">London / Tokyo</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/20 font-inter">
          <p>© 2026 Aethera Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};
