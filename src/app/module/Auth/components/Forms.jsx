import React from "react";
import Input from "../../../utils/Input";
import Button from "../../../utils/Button";

const Forms = ({ type }) => {
  if (type === "register") {
    return (
      <form action="">
        <Input name="name" type="text" onChange={""} />

        <Input name="email" type="email" onChange={""} mt />

        <Input name="password" type="password" onChange={""} mt />

        <Button text="Register" type="submit" />
      </form>
    );
  }

  return (
    <form action="">
      <Input name="email" type="email" onChange={""} />

      <Input name="password" type="password" mt onChange={""} />

      <Button type="submit" text="Login" />
    </form>
  );
};

export default Forms;
