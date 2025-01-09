//import {useState} from "react";
import { motion } from "motion/react"
import Links from "./links"
const about = ["Merhaba, Ben"]
const name = ["Barış Yıldız"]
const meslek = ["FrontEnd Developer'ım"]
const  resume = ["Ben lise hayatımdan İtibaren Web arayüzüne merak sardım ve öğrenmeye başladım. kariyerimi frontend alanında geliştirmeye merak sardım ve İşimi mutluluk İle yapıyorum. yeni teknolojileri takip ederim."]

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
      <div>
      <motion.div
      className="flex flex-col  justify-center items-center  xl:h-[300px] max-lg:h-[300px] *:w-full text-center xl:text-left space-y-1 capitalize *:text-stye"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-6xl max-xl:text-4xl" variants={itemVariants}>
        {about}
      </motion.h2>
      <motion.h1 className="text-8xl max-lg:text-5xl" variants={itemVariants}>
        {name}
      </motion.h1>
      <motion.h3 className="text-4xl " variants={itemVariants}>
        Ben <span className="text-white">{meslek}</span>
      </motion.h3>
      <motion.span className="leading-normal" variants={itemVariants}>
        {resume}
      </motion.span>
    </motion.div>
    <div className="flex flex-row w-full xl:text-right max-lg:space-y-5 items-center max-xl:flex-col justify-between py-3">
      <Links/>
    </div>
    </div>
             
    )
}


