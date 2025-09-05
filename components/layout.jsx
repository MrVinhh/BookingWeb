"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
