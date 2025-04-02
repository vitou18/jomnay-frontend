import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";
import useAuth from "../core/action";
import toast from "react-hot-toast";

const Register = ({ swap, setSwap }) => {
  const { onChangeRegister, register, onRegister } = useAuth();

  let { fullName, email, password, confirmPassword } = register;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    onRegister();
    setSwap(!swap);
  };

  // console.log(register);

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Enter your full name"
        name="fullName"
        onChange={(e) => onChangeRegister(e)}
        type="text"
        value={fullName}
      />

      <Input
        placeholder="Enter your email"
        name="email"
        type="email"
        mt
        value={email}
        onChange={(e) => onChangeRegister(e)}
      />

      <Input
        placeholder="Enter your password"
        name="password"
        type="password"
        mt
        value={password}
        onChange={(e) => onChangeRegister(e)}
      />

      <Button text="Register" type="submit" />
    </form>
  );
};

export default Register;
