import {motion} from "framer-motion"

import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
const Card = ({title ,description ,onDelete ,refrence}) => {

  const[ShowNote,setShowNote]=useState(false)


  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.01}} className= {
      ShowNote ? "h-[99.9%] w-screen fixed top-0 left-0  z-10 bg-zinc-900 rounded-3xl  text-white text-xl rounded-3xl overflow-hidden ":
      "relative sm:h-[40%] h-[38%] w-[40%] sm:w-[200px] bg-zinc-900/50 rounded-3xl  text-white overflow-hidden shrink-0 relative z-0"}>
      <div className={ShowNote ? "w-full h-16 flex items-center justify-between px-5 border-b-2" :" w-full h-11 flex items-center justify-between px-5 border-b-2 border-gray-600	"}>
        <h1 className={ShowNote?"text-lg sm:text-base":" text-sm  sm:text-base"}>{title}</h1>
        <FaRegFileAlt  onClick={()=>setShowNote(!ShowNote)}/>
      </div>

      <p className={ShowNote?"text-base m-5 leading-tight text-gray-300":"m-2 sm:m-5 leading-tight text-sm "}>{description}</p>

      <div className="foot w-full h-10 bg-red-500/80 absolute bottom-0 left-0 flex items-center justify-center">
        <p onClick={()=>onDelete(title)} className="text-2xl"><RxCrossCircled/></p>
      </div>
    </motion.div>
  );
};

export default Card;
