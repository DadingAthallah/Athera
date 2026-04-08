import { motion } from 'framer-motion';
import { RadialShader } from './ui/radial-shader';

export const Capabilities: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-black text-white" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full bg-white/5 rounded-2xl overflow-hidden"
            >
              {/* Abstract 3D shape representation */}
              <div className="absolute inset-0">
                <RadialShader />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-widest text-white/50 mb-4 block font-inter">Innovation</span>
              <h2 className="text-4xl md:text-6xl font-instrument mb-12">The Machine <br/>of Magic.</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-instrument mb-3 italic">Ray-traced Physics</h3>
                  <p className="text-sm font-inter text-white/60 leading-relaxed">
                    We utilize advanced path-tracing algorithms to simulate the physical behavior of light, ensuring every reflection and shadow is mathematically accurate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-instrument mb-3 italic">Bespoke PBR Textures</h3>
                  <p className="text-sm font-inter text-white/60 leading-relaxed">
                    Our library of Physically Based Rendering materials is custom-scanned to capture the subtle imperfections that make digital objects feel tangible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-instrument mb-3 italic">Real-time Visualization</h3>
                  <p className="text-sm font-inter text-white/60 leading-relaxed">
                    High-performance Unreal Engine integration for interactive walkthroughs and instantaneous art-direction changes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
