import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useAuth from "../core/action";
import toast from "react-hot-toast";
import Logo from "../../../../_template/assets/img/big_logo.png";
import { RiMailLine, RiUserLine } from "react-icons/ri";

const Register = () => {
  const { onChangeRegister, register, onRegister, navigate, loading } =
    useAuth();
  let { fullName, email, password } = register;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    onRegister();
  };

  return (
    <div className="w-full flex min-h-screen font-popins">
      <div className="hidden transition duration-300 md:flex items-center justify-center flex-1 bg-[#FFFFFF]">
        <img src={Logo} className="w-[120px] lg:w-[180px]" alt="Jomnay Logo" />
      </div>

      <div className="transition duration-300 bg-[#F8F8F8] flex-1/3 flex items-center justify-center px-5">
        <div className="w-full sm:w-max py-[40px] px-[20px] rounded-[8px]">
          <h3 className="text-center underline decoration-[#3A3A3A] decoration-2 underline-offset-[4px] mb-[30px] lg:mb-[40px] font-semibold text-[32px] text-[#3A3A3A]">
            Create Account Now
          </h3>

          <form onSubmit={onSubmit}>
            <Input
              placeholder="Enter your full name"
              name="fullName"
              onChange={onChangeRegister}
              type="text"
              icon={RiUserLine}
              value={fullName}
            />

            <Input
              placeholder="Enter your email"
              name="email"
              type="email"
              mt
              icon={RiMailLine}
              value={email}
              onChange={onChangeRegister}
            />

            <Input
              placeholder="Enter your password"
              name="password"
              type="password"
              mt
              value={password}
              onChange={onChangeRegister}
            />

            <Button
              text={loading ? "Registering..." : "Register"}
              type="submit"
              disabled={loading}
            />
          </form>

          <p className="text-center mt-[20px] lg-[mt-30px] text-[#696969]">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#EFBB5E] text-[14px] font-medium cursor-pointer underline decoration-[#EFBB5E]"
            >
              Signin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
