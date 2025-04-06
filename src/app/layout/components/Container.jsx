import React, { useEffect, useState } from "react";

const Container = ({ title, children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <header
        className={`bg-[#FFF] z-50 p-[20px] md:p-[40px] sticky top-0 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_0_16px_-4px_rgba(0,0,0,0.07)]" : ""
        }`}
      >
        <h2>{title}</h2>
      </header>

      <div className="p-[20px] md:p-[40px]">{children}</div>
    </div>
  );
};

export default Container;
