import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiLogoutBoxLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

const Sidebar = ({ sidebarItems, logo, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full flex flex-col gap-y-[60px] w-[260px] bg-[#3A3A3A] py-[30px] ps-[30px] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <Link to="/" className="block mb-8">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </Link>

        <div className="flex flex-col justify-between h-full">
          <ul className="space-y-4">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 border-r-3 transition ${
                      isActive
                        ? "border-r-[#EFBB5E] text-[#EFBB5E]"
                        : "border-transparent text-[#FFFFFF]"
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={onLogout}
            className="cursor-pointer flex items-center gap-3 text-white px-4 py-3 w-full transition border-r-2 border-transparent hover:border-[#ffffff]"
          >
            <RiLogoutBoxLine className="text-xl" />
            Logout
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 lg:hidden text-[#ffffff] p-2 cursor-pointer"
          >
            <RiCloseLine className="text-3xl" />
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 left-5 lg:hidden text-[#3A3A3A] p-2 rounded-lg z-30 cursor-pointer"
      >
        <RiMenuLine className="text-3xl" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
