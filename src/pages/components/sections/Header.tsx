import Link from "next/link";
import { AiOutlineInstagram, AiFillCamera } from "react-icons/Ai";
import { BsPeopleFill } from "react-icons/bs";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full md:h-20 h-16 z-50 bg-white fixed shadow-lg">
      <ul className="flex justify-between items-center h-full w-full md:text-xl text-md font-bold">
        <li className="w-[55%] hidden md:block">
          <Link href="/" className="hover:text-red-500 text-left ml-8">
            Fotomatic
          </Link>
        </li>
        <div className="space-x-2 flex justify-between items-center">
          <Link href="/" className="hidden md:block hover:text-red-500">
            Product detail
          </Link>
          <Link href="/" className="hidden md:block px-8 hover:text-red-500">
            About Us
          </Link>
          <Link href="/" className="hidden md:block hover:text-red-500">
            Follow us
          </Link>
          <li className="md:hidden w-56">
            <Image
              src="/ic-logo.svg"
              width={40}
              height={40}
              alt="icon"
              priority={true}
            />
          </li>
          <AiOutlineInstagram className="w-10 h-10 mx-2" />
          <li className="md:hidden flex">
            <AiFillCamera className="w-10 h-10 mx-2" />
            <BsPeopleFill className="w-10 h-10" />
          </li>
        </div>
      </ul>
    </header>
  );
}
