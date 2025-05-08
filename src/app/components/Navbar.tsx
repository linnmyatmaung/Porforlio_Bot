import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import github from "@/app/assets/github.png";
import { fredoka } from "@/app/ui/fonts";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full bg-white/10 shadow-lg rounded-xl px-3 py-2 z-50 backdrop-blur-md border border-white/20">
      <nav className="flex justify-between items-center gap-4 px-3">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className={`${fredoka.className} font-semibold text-white text-lg`}
          >
            Porforlio Bot
          </span>
        </div>
        <button className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <Link
            href="https://github.com/linnmyatmaung/Porforlio_Bot.git"
            target="_blank"
          >
            <Image src={github} alt="Logo" width={30} height={30} />
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
