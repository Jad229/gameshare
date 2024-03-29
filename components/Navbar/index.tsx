import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

import { PiBooksDuotone } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-12">
      {/* brand */}
      <div>
        <Link href={"/"} className="text-2xl tracking-widest font-bold">
          Game
          <span className="text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
            Share
          </span>
        </Link>
      </div>

      {/* search bar */}
      <div className="flex items-center gap-5">
        <FaSearch size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Games"
          className="rounded-full p-3 bg-zinc-800 shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        />
      </div>

      {/* navigation */}
      <ul className="flex justify-between gap-5 items-center">
        <li>
          <Link href={"/profile"} className="flex gap-1 items-center">
            <CgProfile size={25} /> Profile
          </Link>
        </li>
        <li>
          <Link href={"/library"} className="flex gap-1 items-center">
            <PiBooksDuotone size={25} /> My Library
          </Link>
        </li>
      </ul>
    </nav>
  );
}
