import React from 'react'
import { Link } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";

function Terminal() {
  return (
    <>
      <div className="relative h-24 flex justify-center items-center cursor-default">
        <Link to="/" className="absolute my-auto left-7"><ChevronsLeft size={32} color="white" /></Link>
        <div className="text-white text-4xl font-semibold">Terminal</div>
      </div>

      <div className="text-white text-4xl mt-52">Terminal here !!!</div>
    </>
  )
}

export default Terminal
