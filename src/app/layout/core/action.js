import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./slice";

const useLayout = () => {
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const onToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return {
    ...layout,
    onToggleSidebar,
  };
};

export default useLayout;
