import {motion} from "framer-motion"
import { split } from "postcss/lib/list";
import { FaRegFileAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
const Card = ({title ,description ,onDelete ,refrence}) => {


  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}}className="card relative sm:h-[40%] h-[32%] w-[200px] bg-zinc-900/50 rounded-3xl  text-white overflow-hidden shrink-0">
      <div className=" w-full h-11 flex items-center justify-between px-5 border-b-2 border-gray-600	">
        <h1 className=" text-sm  sm:text-base">{title}</h1>
        <FaRegFileAlt onClick={()=>console.log("Hello") }/>
      </div>

      <p className="m-5 leading-tight text-sm ">{description}</p>

      <div className="foot w-full h-10 bg-red-500/80 absolute bottom-0 left-0 flex items-center justify-center">
        <p onClick={()=>onDelete(title)} className="text-2xl"><RxCrossCircled/></p>
      </div>
    </motion.div>
  );
};

export default Card;