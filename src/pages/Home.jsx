import {motion} from "motion/react";

function Home (){
    return(
        <div className="h-screen bg-red-70 w-full fixed flex items-center justify-center">
           <div className="">
           <motion.div 
            className="size-32 bg-white rounded-full shadow-white shadow-2xl opacity-30 "
            animate={{
                x: [
                    "0%", "50%", "75%", "50%", "0%", "-50%", "-75%", "-50%", "0%" // Sonsuzluk hareketi için x koordinatları
                  ],
                  y: [
                    "0%", "-50%", "0%", "50%", "0%", "50%", "0%", "-50%", "0%" // Sonsuzluk hareketi için y koordinatları
                  ],
                 }}
            transition={{repeat: Infinity, duration:3, repeatType: "reverse"}}
            >
            </motion.div>
            <motion.div 
            className="size-32 bg-white rounded-full shadow-white shadow-2xl opacity-30"
            animate={{
                x: [
                    "0%", "80%", "125%", "80%", "0%", "-80%", "-95%", "-80%", "0%" // Sonsuzluk hareketi için x koordinatları
                  ],
                  y: [
                    "0%", "-85%", "0%", "85%", "0%", "85%", "0%", "-85%", "0%" // Sonsuzluk hareketi için y koordinatları
                  ],
                 }}
            transition={{repeat: Infinity, duration:5, repeatType: "reverse"}}
            >
            </motion.div>
            <motion.div 
            className="size-32 bg-white rounded-full shadow-white shadow-2xl opacity-30"
            animate={{
                x: [
                    "10%", "60%", "205%", "150%", "0%", "-80%", "-175%", "-80%", "0%" // Sonsuzluk hareketi için x koordinatları
                  ],
                  y: [
                    "10%", "-85%", "140%", "85%", "0%", "85%", "0%", "-85%", "0%" // Sonsuzluk hareketi için y koordinatları
                  ],
                 }}
            transition={{repeat: Infinity, duration:5, repeatType: "reverse"}}
            >
            </motion.div>
           </div>
        </div>
    )
}
export default Home;