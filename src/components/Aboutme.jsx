//import {useState} from "react";
//import { motion } from "motion/react"
import Links from "./links"
const about = ["Merhaba, Ben"]
const name = ["Barış Yıldız"]
const meslek = ["FrontEnd Developer'ım"]
const  resume = ["Ben lise hayatımdan itibaren Web arayüzüne merak sardım ve öğrenmeye başladım. kariyerimi frontend alanında geliştirmeye merak sardım ve işimi mutluluk ile yapıyorum. yeni teknolojileri takip ederim ."]

function Aboutme (){
  //const [isHover, setHover] = useState(false);
  
    return(
        <div>
             {/* isim - bilgi */}
             <div className="flex flex-col space-y-1 capitalize *:text-style">
                <h2 className="text-6xl ">{about}</h2>
                <h1 className="text-8xl text-left ">{name}</h1>
                <h3 className="text-4xl text-left ">Ben <span className="text-white">{meslek}</span> </h3>
                <span className="leading-normal">{resume}</span>
                
              </div>
            {/* Linkler */}
            <Links/>
            </div>
             
    )
}
export default Aboutme;

