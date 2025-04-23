"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-lightest flex justify-between items-center px-4 sm:px-8 md:px-16 py-5 text-darkest text-[18px] relative">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-[120px] md:w-[150px] h-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 lg:gap-10 items-center">
        <li>
          <Link href="/#szolgaltatasok">Szolgáltatások</Link>
        </li>
        <li>
          <Link href="/#sminktetovalas">Sminktetoválás</Link>
        </li>
        <li>
          <Link href="/arlista">Árlista</Link>
        </li>
        <li className="bg-dark hover:bg-darkest transition duration-150 text-lightest px-5 py-2 rounded-[15px]">
          <Link href="/idopontfoglalo">Időpontfoglalás</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-darkest mb-1.5 transition-transform duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-darkest mb-1.5 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-darkest transition-transform duration-300 ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[69px] right-0 w-full bg-lightest z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4">
          <li>
            <Link href="/#szolgaltatasok" onClick={closeMenu}>
              Szolgáltatások
            </Link>
          </li>
          <li>
            <Link href="/#sminktetovalas" onClick={closeMenu}>
              Sminktetoválás
            </Link>
          </li>
          <li>
            <Link href="/arlista" onClick={closeMenu}>
              Árlista
            </Link>
          </li>
          <li className="bg-dark hover:bg-darkest transition duration-150 text-lightest px-5 py-2 rounded-[15px] inline-block">
            <Link href="/idopontfoglalo" onClick={closeMenu}>
              Időpontfoglalás
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
