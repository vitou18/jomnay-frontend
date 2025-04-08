import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqLogin, reqRegister } from "./request";
import {
  resetRegister,
  setAccessToken,
  setLogin,
  setLogout,
  setProfile,
  setRegister,
} from "./slice";
import toast from "react-hot-toast";
import { useState } from "react";
import Swal from "sweetalert2";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onLogin = async (payload) => {
    setLoading(true);
    return reqLogin(payload)
      .then((res) => {
        dispatch(setProfile(res.data.user));
        dispatch(setAccessToken(res.data.token));
        navigate("/");
      })
      .catch((e) => {
        toast.error("Invalid credentials");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChangeLogin = (e) =>
    dispatch(setLogin({ name: e.target.name, value: e.target.value }));

  const onLogout = () => {
    Swal.fire({
      title: "Confirm Logout",
      text: "Are you sure you want to log out? You will need to log in again.",
      icon: "warning",
      background: "#fff",
      color: "#3a3a3a",
      showCancelButton: true,
      confirmButtonColor: "#DC2626",
      confirmButtonText: "Logout",
      cancelButtonColor: "gray",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-lg", 
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setProfile({}));
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        dispatch(setLogout());
        navigate("/login");
      }
    });
  };

  const onChangeRegister = (e) =>
    dispatch(setRegister({ name: e.target.name, value: e.target.value }));

  const onRegister = async () => {
    setLoading(true);
    return reqRegister(auth.register)
      .then(() => {
        toast.success("Registration successful");
        dispatch(resetRegister());
      })
      .catch(() => {
        toast.error("Registration failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    ...auth,
    navigate,
    loading,
    onLogin,
    onChangeLogin,
    onLogout,
    onChangeRegister,
    onRegister,
  };
};

export default useAuth;
