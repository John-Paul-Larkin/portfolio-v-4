import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import TreeAndRoots from "./TreeAndRoots";

export default function Technologies() {
  return (
    <div className=" bg-no-repeat... bg-treeBG...  h-full w-full ">
      {/* <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 2 }}
        className="pt-[100%]... rounded-[1rem]...  bg-treeBG overflow-hidden... relative h-[50%] w-full"
      >

        <Image
          src="/tree.jpg"
  
          fill={true}
          alt="JP Larkin stading in front of computer"
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </motion.div> */}

      <div className="h-[40rem] w-full bg-slate-500...">
        <TreeAndRoots />
      </div>

     
    </div>
  );
}

//   <div className="bg-red-50">
//     This is a test to see is the language is correct
//   </div>
//   <div className="bg-red-50">this</div>
//   <div className="bg-red-50">this</div>
//   <div className="bg-red-50">this</div>
//   <div className="bg-red-50">this</div>
//   <div className="bg-red-50">this</div>
//   <div className="bg-red-50">this</div>

// <p className="text-white">
//   My main focus had been react, but along the way I have touched on many
//   technologies within the JavaScript ecosystem{" "}
// </p>
