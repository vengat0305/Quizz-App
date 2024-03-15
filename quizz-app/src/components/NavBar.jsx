import React from "react";

const NavBar = () => {
  return (
    <header className="h-16 shadow-sm flex items-center">
      <nav className="flex justify-between items-center w-9/12 mx-auto font-display font-bold tracking-wider  text-[#7b5200]">
        <a
          className="px-5 py-1 border border-[#010101] rounded-sm shadow-md  hover:bg-[#543d02] hover:text-[#ffffff] transition-all duration-300 ease-in "
          href="/"
        >
          'Quiz App'
        </a>

        {/* Nav items */}
        <div className="flex items-center space-x-5">
          <ul className="sm:flex items-center space-x-5 hidden">
            <li>
              <a href="/">How its work</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
          <button className="font-medium px-5 py-1 border border-[#010101] rounded-sm shadow-md  hover:bg-[#543d02] hover:text-[#ffffff] transition-all duration-300 ease-in ">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
