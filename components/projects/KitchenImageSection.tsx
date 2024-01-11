import React from 'react'
import Image from "next/image";
import annoyedCustomer from "@/public/annoyedCustomer.jpg";

export default function KitchenImageSection() {
  return (
    <div className="relative col-span-full  overflow-hidden rounded-[1rem] bg-navy-300 s6:col-span-4">
    <div className=" flex h-full flex-col items-center justify-start overflow-hidden">
      <Image
        src={annoyedCustomer}
        priority={false}
        alt="Waiter standing over annoyed cutomer"
        // style={{ objectFit: "cover", }}

        className=" s5:w-[90%] "
      />
      <div className="bg-yellow-800... p-[1rem] text-white">
        <p>
          In a busy restaurant kitchen, speed and efficiency are the key
          to success.
        </p>
        <p className="mt-4">
          These apps facilitate communication and clarity.
        </p>
      </div>
    </div>
    <p
      className="bg-bgCream absolute 
    right-[.5rem] 
    top-[.5rem] 
    rounded-[1rem]
        
    border-2 
    border-navy-600 

    p-[.5rem] text-[1rem] 
    font-semibold
    leading-5 text-navy-600 

    s2:right-[1rem] s2:top-[1rem] 
    s2:p-[.7rem] s2:text-[1.2rem]

    s3:right-[2rem] s3:top-[2rem] 
    s3:p-[1.5rem] s3:text-[1.3rem] 

    s4:right-[3rem] s4:top-[3rem] 
    s4:p-[1.7rem] s4:text-[1.7rem] 
    s4:leading-7
    
    


    s5:right-[2rem] s5:top-[3.5rem] 
    s5:p-[2rem] s5:text-[2rem] 
    
    s6:right-[4rem] s6:top-[4rem] 
    s6:p-[2rem] s6:text-[2rem] 
    
       
    "
    >
      What&apos;s taking
      <br /> so long?
    </p>
  </div>







  )
}
