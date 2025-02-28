//import {useState} from "react";
import { motion } from "motion/react"
import Links from "./links"
const about = ["Merhaba, Ben"]
const name = ["Barış Yıldız"]
const meslek = ["FrontEnd Developer'ım"]
const  resume = ["Ben lise hayatımdan İtibaren Web arayüzüne merak sardım ve öğrenmeye başladım. Kariyerimi frontend alanında geliştirmeye merak sardım ve işimi mutluluk ile yapıyorum. Yeni teknolojileri takip ederim."]
const uni = ["Bandırma 17 Eylül Üniversitesi - Bilgisayar Programcılığı - 2024/?"]
const containerVariants = {
  hidden: { opacity: 1 }, // Başlangıç durumu
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Çocuklar arasındaki gecikme
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 }, // Yukarıdan başlar
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },

};
export default function Aboutme (){
    return(
      <div className="w-full *:space-y-5 mt-2 select-none px-4 md:px-6 lg:px-8 text-white">
      <motion.div
      className="flex flex-col justify-center items-center 
                     min-h-[300px] w-full
                     space-y-3 md:space-y-4 lg:space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-4xl sm:text-3xl lg:text-5xl font-bold
                   w-full text-center lg:text-let" 
        variants={itemVariants}
      >
        {about}
      </motion.h2>
      
      <motion.h1 
        className="text-3xl sm:text-5xl lg:text-7xl font-bold
                   w-full text-center lg:text-lft" 
        variants={itemVariants}
      >
        {name}
      </motion.h1>
      
      <motion.h3 
        className="text-2xl sm:text-3xl lg:text-4xl
                   w-full text-center lg:text-lft" 
        variants={itemVariants}
      >
        Ben <span className="text-white">{meslek}</span>
      </motion.h3>
      
      <motion.p 
        className="text-base sm:text-lg lg:text-xl leading-relaxed
                   w-full text-center lg:text-lft" 
        variants={itemVariants}
      >
        {resume}
      </motion.p>
      <motion.p className="text-base sm:text-lg lg:text-xl leading-relaxed
                   w-full text-center lg:text-lft" 
        variants={itemVariants}>
        {uni}
      </motion.p>
    </motion.div>
    <div className="flex flex-col sm:flex-row items-center justify-between
                    w-full mt-6 space-y-4 sm:space-y-0">
      <Links/>
    </div>
    </div>
    )
}