import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoSection() {
  return (
    <>
      <motion.section
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="hidden s2:block s2:border-2 s6:col-span-6 relative order-3  h-full w-full s3:col-span-5  overflow-hidden rounded-[1rem] s3:row-span-1 s5:col-span-3"
      >
        <Image
          src="/wrangler.png"
          // height={4864}
          // width={3648}
          fill={true}
          alt="JP Larkin stading in front of computer"
          style={{ objectFit: "cover", objectPosition: "0px -100px" }}
          priority={true}
        />
      </motion.section>
    </>
  );
}
