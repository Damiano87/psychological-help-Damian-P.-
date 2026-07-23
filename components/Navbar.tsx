"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Główna", href: "/" },
  { label: "O mnie", href: "/aboutme" },
  { label: "Usługi", href: "/offer" },
  { label: "Cennik", href: "/prices" },
  { label: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Set initial hash
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
    }

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && (activeHash === "" || activeHash === "#");
    }
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href;
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      setActiveHash(href);
    } else {
      setActiveHash("");
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-jost ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-sm border-b border-neutral-100/10 dark:border-neutral-800/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:grid lg:grid-cols-[1fr_2fr_1fr] justify-between items-center h-16 sm:h-20">
          {/* Logo / Brand */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform duration-300">
                {/* SVG Leaf icon representing Calm & Growth */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5zm0 0v-8" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-400">
                Psycho
                <span className="text-teal-600 dark:text-teal-400">Help</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex justify-center items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm uppercase font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? "text-teal-600 dark:text-teal-400 font-semibold"
                      : "text-neutral-800 hover:text-teal-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call To Action */}
          {/* <div className="hidden lg:flex items-center">
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-md shadow-teal-500/10 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95 transition-all duration-200"
            >
              Zarezerwuj wizytę
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  active
                    ? "text-teal-600 bg-teal-50/50 dark:text-teal-400 dark:bg-teal-950/20 font-semibold"
                    : "text-neutral-600 hover:text-teal-600 hover:bg-teal-50/50 dark:text-neutral-300 dark:hover:text-teal-400 dark:hover:bg-teal-950/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* <div className="pt-4 pb-2 px-4">
            <Link
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-md shadow-teal-500/10 transition-all duration-200"
            >
              Zarezerwuj wizytę
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
}
