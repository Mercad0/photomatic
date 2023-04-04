import Link from "next/link";
import { AiFillCamera } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full md:h-20 h-16 z-50 bg-white fixed shadow-lg">
      <div className="flex justify-between items-center h-full w-full md:text-xl text-md font-bold">
        <div className="w-[55%] hidden md:block">
          <Link href="/" className="hover:text-red-500 text-left ml-8">
            Fotomatic
          </Link>
        </div>
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
          <div className="md:hidden w-56">
            <Image
              src="/ic-logo.svg"
              width={40}
              height={40}
              alt="icon"
              priority={true}
            />
          </div>
          <AiOutlineInstagram className="w-10 h-10 mx-2" />
          <div className="md:hidden flex">
            <AiFillCamera className="w-10 h-10 mx-2" />
            <BsPeopleFill className="w-10 h-10" />
          </div>
        </div>
      </div>
    </header>
  );
}
