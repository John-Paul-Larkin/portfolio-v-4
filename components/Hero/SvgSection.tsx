import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function SvgSection() {
  return (


    <div className=" h-[10rem]... relative overflow-hidden rounded-[1rem] sm:col-span-2">
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className=" pt-[100%]... bg-navy relative h-full w-full"
        >
          <Image
            src="/undraw_programming_2svr.svg"
            // height={4864}
            // width={3648}
            fill={true}
            alt="man sitting in front of multiple monitors"
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </motion.div>
      </div>


    )
}
