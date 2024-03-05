import Link from "next/link";
import React from "react";
import Image from "next/image";
import questionsApp from "@/public/questionsApp.webp";
import GithubIcon from "@/icons/github.svg";
import OpenIcon from "@/icons/openIcon.svg";

export default function CodingQuestionsSection() {
  return (
    <section
      className="mt-[1rem] grid grid-cols-[repeat(8,1fr)] gap-[1rem] 
    rounded-[2rem] bg-overall-bg p-[1rem] s80:mt-[2rem] s80:gap-[2rem]"
    >
      <div className="h-[30rem]... paragraph-text col-span-full rounded-[1rem] bg-yellow-300 s100:col-span-4">
        <h3 className="m-[1em] text-[1.3em] font-semibold">Coding questions</h3>
        <p className="mx-[1em] mb-[1em]">
          I built this app to test my coding knowledge. I expanded my
          understanding of React, implementing the React context API for state
          management and the intersection observer API for infinite scrolling.
        </p>

        <p className="mx-[1em] mb-[1em]">
          I opted for Firestore for the backend due to its user-friendly nature
          and efficient real-time synchronization.
        </p>

        <div className="flex justify-center">
          <div className="flex w-[4em] justify-between ">
            <Link
              href="https://jsqapp.netlify.app/"
              target="_blank"
              aria-label="link to live version of coding questions app"
            >
              <div className="btn-hover">
                <OpenIcon className="w-[.8em]" />
              </div>
            </Link>

            <Link
              href="https://github.com/John-Paul-Larkin/QuestionApp"
              target="_blank"
              aria-label="link to github of cosding quesitons project"
            >
              <div className="btn-hover">
                <GithubIcon className="w-[.8em] " />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-full flex h-full w-full overflow-hidden rounded-[1rem] bg-slate-700 s100:col-span-4">
        <Link
          href="https://jsqapp.netlify.app/"
          target="_blank"
          aria-label="link to live version of coding questions app"
          className="h-full w-full"
        >
          <Image
            src={questionsApp}
            alt="jp Mazon home page"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
