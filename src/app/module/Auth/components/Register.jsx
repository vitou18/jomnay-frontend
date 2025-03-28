import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";

const Register = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={""}>
      <Input name="name" type="text" />

      <Input name="email" type="email" mt />

      <Input name="password" type="password" mt />

      <Button text="Register" type="submit" />
    </form>
  );
};

export default Register;
