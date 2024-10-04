"use client";
import { useState } from "react";
import { navItems } from "@/data";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isSubOpen, setIsSubOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setIsOpen(name);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
    setIsSubOpen(null);
  };

  const handleSubMouseEnter = (name: string) => {
    setIsSubOpen(name);
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenMobileSubMenu(openMobileSubMenu === name ? null : name);
    setOpenMobileSubSubMenu(null); // Close sub-submenu when toggling a top-level submenu
  };

  const toggleMobileSubSubMenu = (name: string) => {
    setOpenMobileSubSubMenu(openMobileSubSubMenu === name ? null : name);
  };


  return (
    <nav className="bg-white shadow relative z-50 h-[70px]">
      <div className="container mx-auto flex justify-end items-center h-full gap-10">

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center h-full">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group h-full"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.link} className="px-8 py-4 text-jaris-blue subtitle font-medium hover:bg-gray-200 rounded h-full flex items-center justify-center">
                {item.name}
              </Link>
              {item.sublinks && isOpen === item.name && (
                <ul className="absolute left-0 top-full bg-white shadow-lg z-50 group-hover:block min-w-[200px]">
                  {item.sublinks.map((sub) => (
                    <li
                      key={sub.name}
                      className="relative group"
                      onMouseEnter={() => handleSubMouseEnter(sub.name)}
                    >
                      <Link href={sub.link} className="block px-4 py-3 text-jaris-blue subtitle hover:bg-gray-200">
                        {sub.name}
                      </Link>
                      {sub.sublinks && isSubOpen === sub.name && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg z-50 group-hover:block min-w-[200px]">
                          {sub.sublinks.map((subSub) => (
                            <li key={subSub.name}>
                              <Link
                                href={subSub.link}
                                className="block px-4 py-2 hover:bg-gray-200"
                              >
                                {subSub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-xl"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => toggleMobileSubMenu(item.name)}
                className="w-full text-left px-4 py-2 active:bg-gray-200"
              >
                {item.name}
              </button>
              {item.sublinks && openMobileSubMenu === item.name && (
                <ul className="pl-4">
                  {item.sublinks.map((sub) => (
                    <li key={sub.name}>
                      <button
                        onClick={() => toggleMobileSubSubMenu(sub.name)}
                        className="w-full text-left px-4 py-2 active:bg-gray-200"
                      >
                        {sub.name}
                      </button>
                      {sub.sublinks && openMobileSubSubMenu === sub.name && (
                        <ul className="pl-4">
                          {sub.sublinks.map((subSub) => (
                            <li key={subSub.name}>
                              <a
                                href={subSub.link}
                                className="block px-4 py-2 active:bg-gray-200"
                              >
                                {subSub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
	);
};

export default Header;
