import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container h-[70px] flex items-center justify-between md:grid md:grid-cols-[auto,1fr,auto] md:gap-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/images/logo.svg" alt="Abdoul Karim" width={36} height={36} />
          <span className="hidden sm:block text-sm font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
            lucidev
          </span>
        </a>

        {/* Nav */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:justify-self-end">
          <button
            onClick={toggleTheme}
            className="menu-btn"
            aria-label={isDark ? "Mode clair" : "Mode sombre"}
          >
            <span className="material-symbols-rounded">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <a href="#contact" className="btn btn-primary max-md:hidden">
            Me contacter
          </a>
        </div>

      </div>
    </header>
  );
};
