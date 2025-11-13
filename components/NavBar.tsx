"use client";
import Link from "next/link";
import React, { useState } from "react";
import WeatherWidget from "./WeatherWidget";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  {
    /*const [isOpen, setIsOpen] = useState(false)*/
  }

  return (
    <nav className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-blue-700 font-bold p-4 flex justify-between items-center shadow-lg backdrop-blur-md">
      <div className="font-semibold text-blue-600">
        <Link href="/">SonoCode IT</Link>
      </div>

      {/* Weather */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden text-blue-700 md:block">
        <WeatherWidget />
      </div>

      {/* Hamburger button */}
      {/*<div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>*/}

      {/* Desktop links */}
      <ul className="space-x-6">
        {/*<Link href="/" className="hover:text-sky-800">Home</Link>
        <Link href="/about" className="hover:text-sky-200">About</Link>
        <Link href="/projects" className="hover:text-sky-200">Apps</Link>*/}
        <Link href="/contact" className="hover:text-sky-800">
          Get In Touch
        </Link>
      </ul>

      {/* Mobile menu (dropdown) */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 bg-black rounded-lg shadow-lg flex flex-col space-y-4 p-6 md:hidden"
          >
            <Link href="/" className="hover:text-sky-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>Apps</Link>
            <Link href="/contact" className="hover:text-sky-800" onClick={() => setIsOpen(false)}>Get In Touch</Link>
          </motion.ul>
        )}
      </AnimatePresence>*/}
    </nav>
  );
}
