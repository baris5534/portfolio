import { motion } from "framer-motion";

export default function SkillCard({ skill, getLevelStyle }) {
  return (
    <motion.div 
      key={skill.id}
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 
                 border border-gray-800 rounded-2xl overflow-hidden
                 shadow-xl backdrop-blur-sm
                 hover:border-gray-700 transition-all duration-300"
      style={{
        minWidth: "200px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Card content */}
    </motion.div>
  );
} 