"use client";
import Container from "./Container";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
import { Image } from "next/dist/client/image-component";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const { data: session } = useSession();
  // console.log(session);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50 px-4">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start mx-3 relative">
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
        {!session && (
          <div className="headerDiv m-2" onClick={() => signIn()}>
            <FaRegUser className="text-xl" />
            <p className="text-sm font-semibold p-1">Login</p>
          </div>
        )}
        {session?.user?.image ? (
          <div className="flex flex-row">
            <Image
              src={session?.user?.image as string}
              alt="user-image"
              height={60}
              width={60}
              className="rounded-full"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>
        ) : (
          session && (
            <div className="rounded-full font-semibold headerDiv">
              <p className="">Hi.{session?.user?.name}</p>
            </div>
          )
        )}

        {session && (
          <div className="headerDiv m-2" onClick={() => signOut()}>
            <p>Logout</p>
            <IoMdLogOut />
          </div>
        )}

        {isHovering && (
          <div className="absolute top-20 right-56  border shadow-lg bg-gray-200 duration-300 rounded-lg p-2 flex flex-col justify-center items-center gap-2 font-bold">
            <Image
              src={session?.user?.image as string}
              alt="user-image"
              height={60}
              width={60}
              className="rounded-full"
            />
            <p>Hello Dear. {session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
        )}
        {/* cart */}
        <Link href={"/cart"}>

        <div className="bg-black hover:bg-white rounded-full text-slate-100 hover:text-black flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative  cursor-pointer group">

          <BsCart4 className="text-xl" />
          <p className="text-sm font-semibold p-1 ">$200</p>
          <span className="bg-white text-red-700 rounded-full text-xs font-bold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black border-1">
            10
          </span>

        </div>
        </Link>

      </Container>
    </div>
  );
};

export default Header;
