import toast from "react-hot-toast";
import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import useAuth from "../core/action";

const Login = () => {
  const { onLogin, onChangeLogin, login } = useAuth();

  let { email, password } = login;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    onLogin(login);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        value={email}
        type="email"
        onChange={(e) => onChangeLogin(e)}
      />

      <Input
        name="password"
        type="password"
        mt
        value={password}
        onChange={(e) => onChangeLogin(e)}
      />

      <Button type="submit" text="Login" />
    </form>
  );
};

export default Login;
