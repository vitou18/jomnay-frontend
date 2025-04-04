import React from "react";

const Container = ({ title, children }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <header className="bg-[#FFF] p-[20px] md:p-[40px] sticky top-0">
        <h2>{title}</h2>
      </header>

      <div className="p-[20px] md:p-[40px]">{children}</div>
    </div>
  );
};

export default Container;
