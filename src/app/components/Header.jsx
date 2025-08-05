"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false); // mobile sub-menu toggle
  const pathname = usePathname();

  // close mobile menu on resize >= md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setIsCapabilitiesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Our Capabilities",
      // parent does not navigate
      dropdown: [
        { name: "Innovation", href: "/innovation" },
        { name: "Manufacturing", href: "/manufacturing" },
        { name: "Products", href: "/products" },
        { name: "Network", href: "/network" },
      ],
    },
    { name: "Life @ Bennet", href: "/life-at-bennet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isCapabilitiesActive = () => {
    return pathname.startsWith("/capabilities");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/bennet.png"
            alt="Bennet Pharmaceuticals Ltd."
            width={160}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navigation.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                {/* parent label as button, no navigation */}
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className={`font-medium transition-colors duration-200 flex items-center ${
                    isCapabilitiesActive()
                      ? "text-[#AECA1D]"
                      : "text-slate-700 hover:text-[#AECA1D]"
                  }`}
                >
                  {item.name}
                  <svg
                    className="ml-1 h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
                {/* Dropdown on hover */}
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-slate-700 hover:bg-gray-100 text-sm"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#AECA1D]"
                      : "text-slate-700 hover:text-[#AECA1D]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => {
            setIsMenuOpen((o) => !o);
            if (isMenuOpen) {
              setIsCapabilitiesOpen(false);
            }
          }}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 md:hidden z-20">
            <ul className="flex flex-col space-y-1 p-4">
              {navigation.map((item) =>
                item.dropdown ? (
                  <li key={item.name} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setIsCapabilitiesOpen((open) => !open)}
                      className={`flex items-center justify-between font-medium py-2 text-slate-700 hover:text-[#AECA1D]`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                          isCapabilitiesOpen ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" />
                      </svg>
                    </button>
                    {isCapabilitiesOpen && (
                      <div className="pl-4 flex flex-col">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-slate-600 hover:text-[#AECA1D] py-1 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-medium text-slate-700 hover:text-[#AECA1D] py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
