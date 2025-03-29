import React, { useState } from "react";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLockLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

const Input = ({ name, type, onChange, mt, value }) => {
  const [show, setShow] = useState(false);

  if (type === "password") {
    return (
      <div className={`grid gap-y-[5px] ${mt ? "mt-[10px] lg:mt-[20px]" : ""}`}>
        <label
          htmlFor={name}
          className="text-[18px] text-[#3A3A3A] font-medium"
        >
          <span className="capitalize">{name}</span>
        </label>

        <div className="w-full relative">
          <input
            placeholder=""
            onChange={(e) => onChange(e)}
            className="w-full ps-[40px] px-[12px] py-[8px] border-[#696969] focus:border-[#3A3A3A] not-placeholder-shown:border-[#3A3A3A] duration-300 transition border-[2px] rounded-lg outline-0 text-[14px] text-[#3A3A3A]"
            type={show ? "text" : "password"}
            name={name}
            id={name}
            value={value}
          />

          <div className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2">
            <RiLockLine className="text-[18px] text-[#696969]" />
          </div>

          <div
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <RiEyeOffLine className="text-[18px] text-[#3A3A3A]" />
            ) : (
              <RiEyeLine className="text-[18px] text-[#696969]" />
            )}
          </div>
        </div>
      </div>
    );
  }

  if (name === "fullName") {
    return (
      <div className={`gap-y-[5px] grid ${mt ? "mt-[10px] lg:mt-[20px]" : ""}`}>
        <label
          htmlFor={name}
          className="text-[18px] text-[#3A3A3A] font-medium"
        >
          <span className="capitalize">{name}</span>
        </label>

        <div className="w-full relative">
          <input
            onChange={(e) => onChange(e)}
            placeholder=""
            className="w-full ps-[40px] px-[12px] py-[8px] border-[#696969] focus:border-[#3A3A3A] not-placeholder-shown:border-[#3A3A3A] duration-300 transition border-[2px] rounded-lg outline-0 text-[14px] text-[#3A3A3A]"
            type={type}
            name={name}
            id={name}
            value={value}
          />

          <div className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2">
            <RiUserLine className="text-[18px] text-[#696969]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`gap-y-[5px] grid ${mt ? "mt-[10px] lg:mt-[20px]" : ""}`}>
      <label htmlFor={name} className="text-[18px] text-[#3A3A3A] font-medium">
        <span className="capitalize">{name}</span>
      </label>

      <div className="w-full relative">
        <input
          onChange={(e) => onChange(e)}
          placeholder=""
          className="w-full ps-[40px] px-[12px] py-[8px] border-[#696969] focus:border-[#3A3A3A] not-placeholder-shown:border-[#3A3A3A] duration-300 transition border-[2px] rounded-lg outline-0 text-[14px] text-[#3A3A3A]"
          type={type}
          name={name}
          id={name}
          value={value}
        />

        <div className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2">
          <RiMailLine className="text-[18px] text-[#696969]" />
        </div>
      </div>
    </div>
  );
};

export default Input;
