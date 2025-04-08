import React, { useEffect, useState } from "react";
import Button from "../../utils/Button";

const Container = ({ title, children, navigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <header
        className={`bg-[#FFF] flex items-center justify-between z-40 p-[20px] md:p-[30px] sticky top-0 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_0_16px_-4px_rgba(0,0,0,0.07)]" : ""
        }`}
      >
        <h2 className="text-[18px] text-[#3A3A3A] font-medium md:text-[24px]">
          {title}
        </h2>

        {navigate && (
          <Button
            style="second"
            text="Back"
            onClick={() => navigate("/income")}
          />
        )}
      </header>

      <main className="p-[20px] md:p-[30px] flex flex-col gap-y-[30px]">
        {children}
      </main>
    </div>
  );
};

export default Container;
