import toast from "react-hot-toast";
import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import useAuth from "../core/action";
import Logo from "../../../../_template/assets/img/big_logo.png";

const Login = () => {
  const { onLogin, onChangeLogin, login, navigate } = useAuth();

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
    <div className="w-full flex min-h-screen font-popins">
      <div className="hidden transition duration-300 md:flex items-center justify-center flex-1 bg-[#F8F8F8]">
        <img src={Logo} className="w-[120px] lg:w-[180px]" alt="Jomnay Logo" />
      </div>

      <div className="transition duration-300 bg-[#FFFFFF] flex-1/3 flex items-center justify-center px-5">
        <div className="w-full sm:w-max py-[40px] px-[20px] rounded-[8px]">
          <h3 className="text-center underline decoration-[#3A3A3A] decoration-2 underline-offset-[4px] mb-[30px] lg:mb-[40px] font-semibold text-[32px] text-[#3A3A3A]">
            Login to your account.
          </h3>
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
          <p className="text-center mt-[20px] lg-[mt-30px] text-[#696969]">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#EFBB5E] text-[14px] font-medium cursor-pointer underline decoration-[#EFBB5E]"
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
