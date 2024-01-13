import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import wrangler from "@/public/wrangler.png";

export default function PhotoSection() {
  return (
    <>
      <motion.section
        initial={{ x: "-10px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="s45:block s45:border-2 s60:col-span-5 s60:row-span-1 s80:col-span-3 s100:col-span-6  s120:h-[30rem] relative order-3 hidden h-full w-full overflow-hidden rounded-[1rem]"
      >
        <Image
          src={wrangler}
          alt="JP Larkin standing in front of computer"
          style={{ objectFit: "cover", objectPosition: "0px 0px" }}
          priority={true}
        />
      </motion.section>
    </>
  );
}
