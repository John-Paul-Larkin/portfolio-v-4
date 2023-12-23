import HeroBannerName from "@/components/HeroBannerName";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-yellow-400">
      <div className="max-w-container-width mx-auto min-h-screen... bg-white grid grid-rows-3 grid-cols-4 p-[2rem] gap-[2rem]">
        <HeroBannerName />
        <div className="row-span-1 bg-cream rounded-[2rem] pt-[100%] relative">
          <div className="absolute top-0 left-0"> React Developer</div>
        </div>
        {/* <div className="row-span-1 bg-cream rounded-[2rem] pt-[100%] relative">
          <div className="absolute top-0"> </div>
        </div> */}

        <div className="row-span-1 bg-cream rounded-[2rem] pt-[100%] relative"></div>
        <div className="row-span-2 col-span-2 bg-red-600 rounded-[2rem] pt-[100%]... relative overflow-hidden">
          <Image
            src="/wrangler.png"
            // height={4864}
            // width={3648}
            fill={true}
            alt="JP Larkin stading in front of computer"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div></div>
      </div>
    </main>
  );
}
