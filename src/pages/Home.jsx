import {motion} from "motion/react";

function Home (){
    return(
        <div className="h-screen bg-red-70 w-full fixed top-0 flex items-center justify-center">
            <motion.div 
            className="size-32 bg-white rounded-full shadow-white shadow-2xl opacity-30 bg-green-500"
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
            className="size-32 bg-white rounded-full shadow-white shadow-2xl opacity-30 bg-green-500"
            animate={{
                x: [
                    "0%", "80%", "95%", "80%", "0%", "-80%", "-95%", "-80%", "0%" // Sonsuzluk hareketi için x koordinatları
                  ],
                  y: [
                    "0%", "-85%", "0%", "85%", "0%", "85%", "0%", "-85%", "0%" // Sonsuzluk hareketi için y koordinatları
                  ],
                 }}
            transition={{repeat: Infinity, duration:5, repeatType: "reverse"}}
            >
            </motion.div>
        </div>
    )
}
export default Home;