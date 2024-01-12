import React from "react";
import Image from "next/image";
import annoyedCustomer from "@/public/annoyedCustomer.jpg";

export default function KitchenImageSection() {
  return (
    <div className="s60:order-5 s100:order-2  s100:col-span-4 s100:row-span-3 relative col-span-full overflow-hidden rounded-[1rem] bg-navy-300 ">
      <div className=" 
      bg-red-500... h-full flex overflow-hidden items-center
      ">
        {/* flex h-full flex-col items-center justify-start overflow-hidden */}
        <Image
          src={annoyedCustomer}
          priority={false}
          alt="Waiter standing over annoyed customer"
          // style={{ objectFit: "cover", }}

          className=" s80:w-[90%] s100:w-[100%] s100:h-[75%] s140:h-[100%] s140:w-[90%] object-cover"
        />

      </div>
      <p
        className="

        absolute 
        right-[.5rem] top-[.5rem] 
        rounded-[1rem]
        border-2 border-navy-600 
        bg-bgCream p-[.3rem] 
        
        text-[1rem] font-semibold 
        leading-5 text-navy-600
        drop-shadow-lg
        
        s40:right-[1rem] s40:top-[1rem] 
        s40:p-[.7rem] 
        s40:text-[1.2rem] 

    s50:right-[1.4rem] s50:top-[1.4rem] 
    s50:p-[.7rem] 
    s50:text-[1.2rem] 

    s60:right-[2rem]    
    s60:top-[2rem] 
    s60:p-[1.5rem] 
    s60:text-[1.3rem] 
    
    s70:right-[3rem]
    s70:top-[2rem]
    s70:p-[1.7rem] s70:text-[1.7rem] 
    s70:leading-7 
    


    
  
    
    


 
    "
      >
        What&apos;s taking
        <br /> so long?
      </p>
    </div>
  );
}
