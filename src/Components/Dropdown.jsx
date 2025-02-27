import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ setDrop }) {
  
  const handleDropdownClick = (e) => {
    if (e.target.tagName !== "A") {
      setDrop(false);
    }
  };

  return (
    <div
      className="fixed top-16 mx-auto w-screen backdrop-blur-md bg-black/50 rounded-md flex flex-col items-center gap-2 popin py-4 audiowide-regular"
      onClick={handleDropdownClick}
      role="menu"
      aria-label="Navigation Dropdown"
    >
      <Link
        to="/"
        className="hover:text-[#38bdf8] p-4 hover:rounded-lg"
        onClick={() => window.scrollTo(0, 0)}
      >
        Home
      </Link>

      <a href="#skills" className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        Skills
      </a>

      <a href="#projects" className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        Projects
      </a>

      <Link to="/blogs" className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        Blogs
      </Link>

      <Link to="/terminal" className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        Terminal
      </Link>
    </div>
  );
}

export default Dropdown;
