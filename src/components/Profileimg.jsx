import profile from "../../public/profilepp.jpg";
import { motion } from "motion/react";

function Profileimg() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-full my-3 border-[2.5px] select-none pointer-events-none border-white shadow-white shadow-2xl"
    >
      <div className="border-2 border-black rounded-full size-[500px] max-sm:size-[250px] lg:size-[350px] xl:size-[500px] max-lg:size-[500px]
       max-[360px]:size-[250px] lg:aspect-radio aspect-square">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default Profileimg;
