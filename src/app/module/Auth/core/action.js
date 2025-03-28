import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqLogin } from "./request";
import { setAccessToken, setLogin, setProfile } from "./slice";

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
        console.log(e);
      });
  };

  const onChangeLogin = (e) =>
    dispatch(setLogin({ name: e.target.name, value: e.target.value }));

  return {
    ...auth,
    onLogin,
    onChangeLogin,
  };
};

export default useAuth;
