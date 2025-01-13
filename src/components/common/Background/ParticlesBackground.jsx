import { motion } from 'framer-motion';

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#0f0514]">
      {/* Ana Gradient Katmanı */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(1200px circle at 0% 0%, rgba(35, 27, 184, 0.4) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 100%, rgba(32, 27, 184, 0.4) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 0% 100%, rgba(27, 150, 184, 0.4) 0%, transparent 70%)',
            'radial-gradient(1200px circle at 100% 0%, rgba(90, 27, 184, 0.571) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      {/* İkinci Gradient Katmanı */}
      <motion.div
        className="absolute inset-0 z-1"
        animate={{
          background: [
            'radial-gradient(1000px circle at 100% 50%, rgba(38, 205, 231, 0.491) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 0% 50%, rgba(61, 38, 231, 0.55) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 100%, rgba(231, 38, 86, 0.452) 0%, transparent 70%)',
            'radial-gradient(1000px circle at 50% 0%, rgba(35, 16, 175, 0.605) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      {/* Üçüncü Gradient Katmanı */}
      <motion.div
        className="absolute inset-0 z-2"
        animate={{
          background: [
            'radial-gradient(1400px circle at 50% 50%, rgba(10, 176, 137, 0.2) 0%, transparent 70%)',
            'radial-gradient(1400px circle at 30% 70%, rgba(0, 55, 255, 0.2) 0%, transparent 70%)',
            'radial-gradient(1400px circle at 70% 30%, rgba(15, 64, 177, 0.2) 0%, transparent 70%)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      {/* Dördüncü Gradient Katmanı (Daha Yumuşak) */}
      <motion.div
        className="absolute inset-0 z-3"
        animate={{
          background: [
            'radial-gradient(1800px circle at 50% 50%, rgba(99, 24, 234, 0.1) 0%, transparent 80%)',
            'radial-gradient(1800px circle at 40% 60%, rgba(99, 24, 234, 0.1) 0%, transparent 80%)',
            'radial-gradient(1800px circle at 60% 40%, rgba(99, 24, 234, 0.1) 0%, transparent 80%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0514]/30 to-[#0f0514]/70" />
    </div>
  );
} 