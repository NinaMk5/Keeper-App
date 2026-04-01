import React from "react";

function Header() {
  return (
    <header className="relative bg-black text-white py-8 px-6 border-b-2 border-gray-700 overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-mcLaren font-extrabold tracking-widest transform -rotate-1">
        Keeper App
      </h1>

      <div className="absolute top-2 left-2 w-24 h-24 bg-gray-800 rounded-full opacity-30 transform rotate-12"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-gray-700 rounded-full opacity-20 transform -rotate-6"></div>
    </header>
  );
}

export default Header;
