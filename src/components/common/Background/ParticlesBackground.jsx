import { memo } from 'react';
import { motion } from 'framer-motion';

function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#102938]">
      {/* Ana Gradient Katmanı - Daha düşük opaklık ve daha uzun süre */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{
          background: [
            'radial-gradient(1200px circle at 0% 0%, #231bb880 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 100%, #201bb877 0%, transparent 70%)',
            'radial-gradient(1200px circle at 0% 100%, #1b96b826 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 0%, #420c948d 0%, transparent 70%)',
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
            'radial-gradient(1000px circle at 100% 50%, #00b4db 0%, transparent 70%)',
            'radial-gradient(1000px circle at 0% 50%, #6a11cb 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 100%, #43c6ac 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 0%, #0b545d 0%, transparent 70%)',
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
            'radial-gradient(1400px circle at 50% 50%, #2b2e1d 0%, transparent 70%)',
            'radial-gradient(1400px circle at 30% 70%, #012116 0%, transparent 70%)',
            'radial-gradient(1400px circle at 70% 30%, #0d4bdbb4 0%, transparent 70%)',
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