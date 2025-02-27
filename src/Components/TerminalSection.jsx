import React from "react";
import { Link } from "react-router-dom";
import FunTerminal from "./FunTerminal";

function Terminal() {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/50 h-screen w-screen flex flex-col justify-center items-center">
        <div className="relative mt-0 flex justify-around">
          {/* ✅ Fixed Empty <Link> */}
          <Link
            to="/"
            className="absolute z-10 top-[3.5px] left-[3px] h-8 w-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
            aria-label="Back to Home"
          >
            ⬅
          </Link>
          <FunTerminal />
        </div>
      </div>
    </>
  );
}

export default Terminal;
