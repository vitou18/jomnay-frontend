import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqLogin } from "./request";
import { setAccessToken, setLogin, setLogout, setProfile } from "./slice";
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

  return {
    ...auth,
    onLogin,
    onChangeLogin,
    onLogout,
  };
};

export default useAuth;
