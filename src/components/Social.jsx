"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Social() {
  return (
    <div className="flex gap-4 bg-white p-8 rounded-full bg-opacity-40 text-white ">
      <Link
        href="https://github.com/OmarMandour7"
        target="_blank"
        aria-label="Github Link"
      >
        <FaGithub className="text-5xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://wa.me/201033420146"
        target="_blank"
        aria-label="Medium Link"
      >
        <FaWhatsapp className="text-5xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/omar-mandour-440352287/"
        target="_blank"
        aria-label="Linkedin Link"
      >
        <FaLinkedin className="text-5xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://linktr.ee/Omar_Mandour"
        target="_blank"
        aria-label="Linktr Link"
      >
        <SiLinktree className="text-5xl hover:scale-[1.35]" />
      </Link>
    </div>
  );
}

export default Social;
