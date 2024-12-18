import React from "react";
import profilePicture from "../assets/images/profilePic.jpg";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Heros() {
  return (
    <>
      <div
        id="home"
        className="w-screen h-[750px] bg-[#09090b] flex items-center justify-center gap-12 text-[#5e5e73] flex-col audiowide-regular"
      >
        <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center overflow-hidden border-2 hover:animate-spinOnce">
          <img
            src={profilePicture}
            alt="Profilepic"
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col text-center gap-2">
          <p className="text-[#38bdf8] text-2xl">HEY👋, I AM SHUBHAM RAJ</p>
          <p>
            I design and code beautifully simple things, and I love what I do.
          </p>
          <p>
            I'm a front-end developer specializing in building exceptional digital experiences.
          </p>
          <p>
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
        </div>

        <div className="w-full flex justify-center gap-10 items-center">
          <div className="flex items-center gap-2">
            <Mail color="white" size={24} />
            <p>shubhamraj1068@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Github color="white" size={24} />
            <p>shubhamraj1068</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heros;
