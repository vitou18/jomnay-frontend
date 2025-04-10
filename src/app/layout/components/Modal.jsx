import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Button from "../../utils/Button";

const Modal = ({ show, setShow, title, desc, onDelete }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => setShow((prev) => !prev)}
      className={`${
        show ? "scale-100" : "scale-0"
      } absolute top-0 left-0 flex w-full h-full items-center justify-center bg-[#000]/10 shadow-[0_0_8px_0_rgba(0,0,0,0.05)] backdrop-blur-sm z-50`}
    >
      <div
        onClick={handleModalClick}
        className={`${
          show ? "scale-100" : "scale-50"
        } transition-all duration-300 rounded-lg bg-[#fff] w-full mx-[40px] sm:mx-0 sm:w-[480px] md:w-[550px] relative p-[20px] shadow-[0_6px_6px_0_rgba(0,0,0,0.07)]`}
      >
        <div
          onClick={() => setShow((prev) => !prev)}
          className="absolute text-[18px] cursor-pointer top-4 right-4"
        >
          <RiCloseLargeFill />
        </div>

        <h3 className="text-[20px] font-medium text-[#3A3A3A]">{title}</h3>
        <p className="text-[#696969] text-[14px] sm:text-[16px] pb-[20px] border-b-2 border-[#000]/5">
          {desc}
        </p>

        <div className="flex mt-[20px] gap-x-[10px] justify-end items-center">
          <Button
            text="Cancel"
            style="gray"
            onClick={() => setShow((pre) => !pre)}
          />
          <Button text="Yes" style="delete" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
