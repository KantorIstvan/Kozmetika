"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// Animation configuration
const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function Footer() {
  return (
    <footer className="bg-dark px-4 sm:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16">
      <motion.div className="max-w-7xl mx-auto" {...sectionAnimation}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Kapcsolat
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="space-y-2 text-sm sm:text-base">
              <p>4621 Fényeslitke, Kossuth u. 136.</p>
              <p>asd@asd.com</p>
              <p>+36 30 123 4567</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Navigáció
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <nav className="flex flex-col gap-2 text-sm sm:text-base">
              <Link
                href="/#szolgaltatasok"
                className="hover:text-lightest transition-colors"
              >
                Szolgáltatások
              </Link>
              <Link
                href="/#sminktetovalas"
                className="hover:text-lightest transition-colors"
              >
                Sminktetoválás
              </Link>
              <Link
                href="/arlista"
                className="hover:text-lightest transition-colors"
              >
                Árlista
              </Link>
              <Link
                href="/idopontfoglalo"
                className="hover:text-lightest transition-colors"
              >
                Időpontfoglalás
              </Link>
            </nav>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Nyitvatartás
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="space-y-2 text-sm sm:text-base">
              <p>Hétfő - Péntek: 9:00 - 18:00</p>
              <p>Szombat: 10:00 - 14:00</p>
              <p>Vasárnap: Zárva</p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Közösségi média
            </h3>
            <hr className="border-t-2 w-1/3 border-lightest" />
            <div className="flex gap-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 hover:bg-lightest rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 hover:bg-lightest rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 md:mt-12 border-t border-lightest/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs sm:text-sm text-lightest/80">
              © 2024 Bodnár Krisztina - Minden jog fenntartva
            </p>
            <div className="flex gap-4 text-xs sm:text-sm">
              <Link
                href="/adatvedelem"
                className="hover:text-lightest transition-colors"
              >
                Adatvédelmi nyilatkozat
              </Link>
              <Link
                href="/impresszum"
                className="hover:text-lightest transition-colors"
              >
                Impresszum
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
