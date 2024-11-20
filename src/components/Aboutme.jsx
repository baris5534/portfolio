//import {useState} from "react";
import { motion } from "motion/react"
import Links from "./links"
const about = ["Merhaba, Ben"]
const name = ["Barış Yıldız"]
const meslek = ["FrontEnd Developer'ım"]
const  resume = ["Ben lise hayatımdan itibaren Web arayüzüne merak sardım ve öğrenmeye başladım. kariyerimi frontend alanında geliştirmeye merak sardım ve işimi mutluluk ile yapıyorum. yeni teknolojileri takip ederim ."]

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
      <>
      <motion.div
      className="flex flex-col space-y-1 capitalize *:text-style"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-6xl" variants={itemVariants}>
        {about}
      </motion.h2>
      <motion.h1 className="text-8xl text-left" variants={itemVariants}>
        {name}
      </motion.h1>
      <motion.h3 className="text-4xl text-left" variants={itemVariants}>
        Ben <span className="text-white">{meslek}</span>
      </motion.h3>
      <motion.span className="leading-normal" variants={itemVariants}>
        {resume}
      </motion.span>
    </motion.div>
    <Links/>
    </>
             
    )
}


