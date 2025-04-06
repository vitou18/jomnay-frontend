import Menu from "./Menu";
import Logo from "./Logo";
import Logout from "./Logout";

const Sidebar = ({ sidebarItems, logo, onLogout }) => {
  const onClick = () => onLogout();

  return (
    <nav className="fixed shadow-[0_0_16px_0_rgba(0,0,0,0.2)] md:h-screen bottom-[20px] px-[20px] py-[15px] md:py-[40px] md:px-0 right-0 rounded-[40px] left-0 mx-auto md:mx-0 md:rounded-none bg-[#3A3A3A] w-max gap-x-[20px] md:top-0 flex justify-center md:justify-start md:left-0 md:flex-col md:gap-y-[60px] md:w-[260px] md:bg-[#3A3A3A] md:py-[30px] md:ps-[30px] transition-transform duration-300 z-50">
      <Logo logo={logo} />

      <Menu sidebarItems={sidebarItems} />

      <Logout onClick={onClick} />
    </nav>
  );
};

export default Sidebar;
