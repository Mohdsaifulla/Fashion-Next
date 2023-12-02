import Container from "./Container";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start mx-3">

        <Logo />
        {/* search bar */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <IoSearchOutline className="text-gray-500 group-focus-within:text-darkText duration-300" />
          <input
            type="text"
            placeholder="Search the Products..."
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* login */}
        <div className="headerDiv m-2">
          <FaRegUser className="text-xl" />
          <p className="text-sm font-semibold p-1">Login</p>
        </div>
        {/* cart */}
        <div className="bg-black hover:bg-white rounded-full text-slate-100 hover:text-black flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative  cursor-pointer group">
          <BsCart4 className="text-xl" />
          <p className="text-sm font-semibold p-1 ">$200</p>
          <span className="bg-white text-red-700 rounded-full text-xs font-bold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black border-1">10</span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
