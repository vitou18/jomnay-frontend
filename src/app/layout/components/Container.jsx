import React, { useEffect, useState } from "react";
import CHeader from "./CHeader";

const Container = ({ title, children }) => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <CHeader title={title} />

      <main className="p-[20px] md:p-[30px] flex flex-col gap-y-[30px]">
        {children}
      </main>
    </div>
  );
};

export default Container;
