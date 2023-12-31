import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoSection() {
  return (
    <>
      <motion.div
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="h-[10rem]...  relative overflow-hidden   rounded-[1rem] sm:row-span-1"
      >
        <Image
          src="/wrangler.png"
          // height={4864}
          // width={3648}
          fill={true}
          alt="JP Larkin stading in front of computer"
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </motion.div>
    </>
  );
}
