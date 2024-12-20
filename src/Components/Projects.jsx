import React from "react";
import Marquee from "react-fast-marquee";
import skills from "../assets/skills";
import { SquareArrowOutUpRight, Github } from 'lucide-react'


const firstRow = skills.slice(0, skills.length);

const ReviewCard = ({ img, title, description, link, github }) => {
  return (
    <figure className="relative h-72 w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] m-4 hover:scale-110 hover:duration-300 hover:border hover:border-[#31519f]">
      <div className="w-full h-full flex flex-col items-center justify-around gap-2">
        <div className="w-full h-[40%] flex flex-col items-center justify-between">
          <img src={img} alt={title} className="h-16 rounded-xl" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <span className="text-[12px] text-slate-100 text-center overflow-scroll h-[30%]">{description}</span>
        <div className="flex items-center gap-4">
          <span className="flex hover:bg-[#111111] p-1 hover:rounded-md" onClick={() => window.open(github, '_blank')}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1 hover:text-[#31519f]"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </span>
          <span className="flex hover:bg-[#111111] p-2 hover:rounded-md">
            <SquareArrowOutUpRight size={20} className="hover:text-[#31519f]" onClick={() => window.open(link, '_blank')} />
          </span>

        </div>
      </div>
    </figure>
  );
};

export default function Projects() {
  return (
    <>
      <div id="projects" className="h-24"></div>

      <div className="relative lg:w-[75vw] w-[90vw] mx-auto border-0 overflow-hidden rounded-2xl">

        <p className="lg:text-4xl text-3xl text-white text-center font-medium audiowide-regular">My Projects</p>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl text-white">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="border border-[#27272A] w-[80%]"></div>
      </div>
    </>
  );
}