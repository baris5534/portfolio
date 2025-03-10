import profile from "../assets/memoji2.png";
import { motion } from "motion/react";

function Profileimg() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-full my-5 select-none pointer-events-none   from-[#693B93] to-[#320F85] shadow-[#693B93] shadow-2xl"
    >
      <div className=" rounded-full size-[500px] max-sm:size-[250px] bg-radiel-to-tr/hsl  from-[#693B93] to-[#320F85] shadow-[#693B93] lg:size-[350px] xl:size-[300px] max-lg:size-[300px]
       max-[360px]:size-[250px] lg:aspect-radio aspect-square">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-full bg-radiel-to-tr/hsl  from-[#693B93] to-[#320F85] shadow-[#693B93] object-cover drop-shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

export default Profileimg;
