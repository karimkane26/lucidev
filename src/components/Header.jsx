/* eslint-disable no-unused-vars */
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-900/5 dark:border-zinc-50/5 transition-colors duration-300">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              alt="Abdoul Karim"
              width={40}
              height={40}
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <div className="flex items-center gap-2 md:justify-self-end">
          <button
            onClick={toggleTheme}
            className="menu-btn"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-symbols-rounded">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <a
            href="#contact"
            className="btn btn-secondary max-md:hidden"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};
