import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqLogin, reqRegister } from "./request";
import {
  setAccessToken,
  setLogin,
  setLogout,
  setProfile,
  setRegister,
} from "./slice";
import toast from "react-hot-toast";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async (payload) => {
    return reqLogin(payload)
      .then((res) => {
        // console.log(res.data);
        dispatch(setProfile(res.data.user));
        dispatch(setAccessToken(res.data.token));
        navigate("/");
      })
      .catch((e) => {
        // console.log(e);
        toast.error("Invalid credentials");
      });
  };

  const onChangeLogin = (e) =>
    dispatch(setLogin({ name: e.target.name, value: e.target.value }));

  const onLogout = () => {
    dispatch(setLogout());
    navigate("/auth");
  };

  const onChangeRegister = (e) =>
    dispatch(setRegister({ name: e.target.name, value: e.target.value }));

  const onRegister = async (e) => {
    const data = { ...auth.register };

    // Delete confirmPassword
    if ("confirmPassword" in data) {
      delete data.confirmPassword;
    }

    return reqRegister(data)
      .then((res) => {
        // console.log(res);
        toast.success("Registration successful");
      })
      .catch((e) => {
        // console.log(e);
        toast.error("Registration failed");
      });
  };

  return {
    ...auth,
    navigate,
    onLogin,
    onChangeLogin,
    onLogout,
    onChangeRegister,
    onRegister,
  };
};

export default useAuth;
