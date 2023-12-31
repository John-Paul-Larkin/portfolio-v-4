import React from "react";
import TreeAndRoots from "./TreeAndRoots";
import { motion } from "framer-motion";

export default function Technologies() {
  return (

<>




<div className="h-fit... row-span-1 sm:col-span-2 sm:row-span-2 overflow-hidden rounded-[1rem] bg-red-900...">
        <motion.div
          initial={{ x: "0%", opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="h-full w-full bg-yellow-800..."
        >
          
    <div className="bg-green  sm:h-[40rem] w-fit h-fit">
      {/* <div className="h-[40rem] w-full..."> */}
        <TreeAndRoots />
      {/* </div> */}
    </div>



        </motion.div>
      </div>












</>


  );
}
