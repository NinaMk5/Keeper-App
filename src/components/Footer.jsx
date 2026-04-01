import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-6 mt-10 text-center font-mcLaren tracking-widest border-t-2 border-gray-700">
      <p className="text-sm md:text-base uppercase opacity-80">
        © {year} | Keeper 
      </p>
    </footer>
  );
}

export default Footer;
