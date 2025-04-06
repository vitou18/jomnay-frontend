import React, { useEffect, useState } from "react";
import CHeader from "./CHeader";

const Container = ({ title, children }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <CHeader title={title} />

      <main className="p-[20px] md:p-[40px]">{children}</main>
    </div>
  );
};

export default Container;
