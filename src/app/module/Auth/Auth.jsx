import React, { useState } from "react";
import Logo from "../../../_template/assets/img/big_logo.png";
import Register from "./components/Register";
import Login from "./components/Login";

const Auth = () => {
  const [swap, setSwap] = useState(false);

  return (
    <div className="w-full flex min-h-screen font-popins">
      <div className="hidden bg-[#F8F8F8] md:flex items-center justify-center flex-1">
        <img src={Logo} className="w-[240px] lg:w-[280px]" alt="Jomnay Logo" />
      </div>

      <div
        className={`flex-1 flex items-center justify-center mx-5 ${
          swap ? "-order-2" : ""
        }`}
      >
        <div className="w-full transition duration-300 sm:w-[368px] py-[40px] px-[20px] rounded-[8px]">
          <h3 className="text-center underline decoration-[#EFBB5E] decoration-2 underline-offset-[4px] mb-[30px] lg:mb-[40px] font-semibold text-[32px] text-[#E5B35A]">
            {swap ? "Register" : "Login"}
          </h3>

          {swap ? <Register swap={swap} setSwap={setSwap} /> : <Login />}

          <p className="text-center mt-[20px] lg-[mt-30px] text-[#696969]">
            {swap ? "Already have an account? " : "Don't have an account? "}
            <span
              onClick={() => setSwap(!swap)}
              className="text-[#EFBB5E] text-[14px] font-medium cursor-pointer underline decoration-[#EFBB5E]"
            >
              {swap ? "Signin" : "Signup"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
