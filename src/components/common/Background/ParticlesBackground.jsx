import { memo } from 'react';
import { motion } from 'framer-motion';

function ParticlesBackground() {
  return (
    <div className="fixed z-10 w-full h-full overflow-hidden bg-[#201c57]">
      {/* Ana Gradient Katmanı - Daha düşük opaklık ve daha uzun süre 
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{
          background: [
            'radial-gradient(1200px circle at 0% 0%, #1f2937 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 100%, #111827 0%, transparent 70%)',
            'radial-gradient(1200px circle at 0% 100%, #374151 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 0%, #1c1f26 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      />

      {/* İkinci Gradient Katmanı - Daha az yoğun efektler */}
      <motion.div
        className="absolute inset-0 z-1"
        initial={false}
        animate={{
          background: [
            'radial-gradient(1000px circle at 100% 50%, #0d3b66 0%, transparent 70%)',
            'radial-gradient(1000px circle at 0% 50%, #112240 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 100%, #243b53 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 0%, #1b2a41 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      />

      {/* Üçüncü Gradient Katmanı - En hafif efekt */}
      <motion.div
        className="absolute inset-0 z-2"
        initial={false}
        animate={{
          background: [
            'radial-gradient(1400px circle at 50% 50%, #0a2a4d 0%, transparent 70%)',
            'radial-gradient(1400px circle at 30% 70%, #0e3d5a 0%, transparent 70%)',
            'radial-gradient(1400px circle at 70% 30%, #133e53 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
      />

      {/* Overlay Gradient - Statik katman */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#201c6d]/40 to-[#2C1250]/80"
       />
    </div>
  );
}

// Gereksiz yeniden render'ları önlemek için memo kullanıyoruz
export default memo(ParticlesBackground);
