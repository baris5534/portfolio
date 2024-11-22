import profile from "../assets/profilepp.jpg";
import {motion} from "motion/react"
function Profileimg ()  {
  return (
    <motion.div
    initial={{opacity: 0, scale:0}}  
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 0.5}}
    
    className="rounded-full my-3 border-4 select-none pointer-events-none border-white shadow-white shadow-2xl">
    <div className="border-2 border-black rounded-full ">
      <img
      src={profile}
      alt="profile"
      className="size-[500px] max-sm:size-[280px] max-[360px]:size-[250px] border-4  rounded-full object-cover"
    /></div></motion.div>
  )
}
export default Profileimg;