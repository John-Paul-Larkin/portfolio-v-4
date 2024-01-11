import React from "react";
import Image from "next/image";
import annoyedCustomer from "@/public/annoyedCustomer.jpg";

export default function KitchenImageSection() {
  return (
    <div className="s60:order-5 s100:order-2  s100:col-span-5 s100:row-span-3 relative col-span-full overflow-hidden rounded-[1rem] bg-navy-300 ">
      <div className=" flex h-full flex-col items-center justify-start overflow-hidden">
        <Image
          src={annoyedCustomer}
          priority={false}
          alt="Waiter standing over annoyed cutomer"
          // style={{ objectFit: "cover", }}

          className=" s80:w-[90%] "
        />
        <div className="bg-yellow-800... s45:text-[1.3rem] s60:text-[1.6rem] s80:text-[1.8rem] p-[1rem] text-white">
          <p>
            In a busy restaurant kitchen, speed and efficiency are the key to
            success.
          </p>
          <p className="mt-4">
            These apps facilitate communication and clarity.
          </p>
        </div>
      </div>
      <p
        className="s45:right-[1rem] s45:top-[1rem] 
    s45:p-[.7rem] 
    s45:text-[1.2rem] 
    s60:right-[2rem]
        
    s60:top-[2rem] 
    s60:p-[1.5rem] 

    s60:text-[1.3rem] s70:right-[3rem] 
    s70:top-[3rem]
    s70:p-[1.7rem] s70:text-[1.7rem] 

    s70:leading-7 s80:right-[2rem] 
    s80:top-[3.5rem] s80:p-[2rem]

    s80:text-[2rem] s100:right-[4rem] 
    s100:top-[4rem] s100:p-[2rem] 

    s100:text-[2rem] absolute 
    right-[.5rem] top-[.5rem] 
    rounded-[1rem]
    
    


    border-2 border-navy-600 
    bg-bgCream p-[.5rem] 
    
    text-[1rem] font-semibold 
    leading-5 text-navy-600 
    
       drop-shadow-lg
    "
      >
        What&apos;s taking
        <br /> so long?
      </p>
    </div>
  );
}
