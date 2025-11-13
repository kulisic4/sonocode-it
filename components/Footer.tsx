"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo / name*/}
        <div className="text-lg font-bold">
          © {new Date().getFullYear()} SonoCode IT
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/kulisic4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/company/sonocode-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:danilokulisic4@gmail.com"
            className="hover:text-sky-200"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
