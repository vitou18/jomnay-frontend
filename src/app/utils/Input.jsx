import React, { useState } from "react";
import {
  RiLockLine,
  RiLockUnlockLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

const Input = ({
  name,
  icon: Icon,
  type,
  onChange,
  mt,
  value,
  placeholder,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`gap-y-[5px] grid ${mt ? "mt-[10px] lg:mt-[20px]" : ""}`}>
      <label htmlFor={name} className="text-[18px] text-[#3A3A3A] font-medium">
        <span className="capitalize">{name}</span>
      </label>

      <div className="w-full relative">
        <input
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className="w-full pe-[35px] px-[12px] py-[8px] border-[#696969] focus:border-[#3A3A3A] not-placeholder-shown:border-[#3A3A3A] duration-300 transition border-[2px] rounded-lg outline-0 text-[14px] text-[#3A3A3A]"
          type={show ? "text" : type}
          name={name}
          id={name}
          value={value}
        />

        {type === "password" ? (
          <div
            onClick={() => setShow(!show)}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
          >
            {show ? (
              <RiLockUnlockLine className="text-[18px] text-[#3A3A3A]" />
            ) : (
              <RiLockLine className="text-[18px] text-[#696969]" />
            )}
          </div>
        ) : (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <Icon className="text-[18px] text-[#696969]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
