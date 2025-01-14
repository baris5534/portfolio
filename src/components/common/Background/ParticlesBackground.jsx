import { memo } from 'react';
import { motion } from 'framer-motion';

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#0f0514]">
      {/* Ana Gradient Katmanı - Daha düşük opaklık ve daha uzun süre */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{
          background: [
            'radial-gradient(1200px circle at 0% 0%, rgba(35, 27, 184, 0.15) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 100%, rgba(32, 27, 184, 0.15) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 0% 100%, rgba(27, 150, 184, 0.15) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 0%, rgba(90, 27, 184, 0.15) 0%, transparent 70%)',
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
            'radial-gradient(1000px circle at 100% 50%, rgba(38, 205, 231, 0.1) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 0% 50%, rgba(61, 38, 231, 0.1) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 100%, rgba(231, 38, 86, 0.1) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 0%, rgba(35, 16, 175, 0.1) 0%, transparent 70%)',
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
            'radial-gradient(1400px circle at 50% 50%, rgba(10, 176, 137, 0.05) 0%, transparent 70%)',
            'radial-gradient(1400px circle at 30% 70%, rgba(0, 55, 255, 0.05) 0%, transparent 70%)',
            'radial-gradient(1400px circle at 70% 30%, rgba(15, 64, 177, 0.05) 0%, transparent 70%)',
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0514]/30 to-[#0f0514]/70" />
    </div>
  );
}

// Gereksiz yeniden render'ları önlemek için memo kullanıyoruz
export default memo(ParticlesBackground); 