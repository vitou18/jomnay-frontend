import { Link } from "react-router-dom";
import Menu from "./Menu";

const Sidebar = ({ sidebarItems, logo, onLogout }) => {
  const onClick = () => onLogout();

  return (
    <>
      <div className="fixed shadow-[0_0_16px_0_rgba(0,0,0,0.2)] md:h-full md:max-h-screen bottom-[30px] px-[20px] py-[15px] md:p-0 right-0 rounded-[40px] left-0 mx-auto md:mx-0 md:rounded-none bg-[#3A3A3A] z-50  w-max md:top-0 md:left-0 md:flex-col md:gap-y-[60px] md:w-[260px] md:bg-[#3A3A3A] md:py-[30px] md:ps-[30px] transition-transform duration-300 z-50">
        <Link to="/" className="hidden md:block md:mb-[80px]">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </Link>

        <Menu onClick={onClick} sidebarItems={sidebarItems} />
      </div>
    </>
  );
};

export default Sidebar;
