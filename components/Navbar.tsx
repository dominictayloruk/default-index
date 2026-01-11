import { Menu, Terminal, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { APP_NAME, NAV_ITEMS } from "../constants";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-tech-black/80 border-tech-border py-4 backdrop-blur-md"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2">
            <div className="bg-tech-green/10 border-tech-green/20 group-hover:border-tech-green rounded border p-2 transition-colors">
              <Terminal className="text-tech-green h-5 w-5" />
            </div>
            <span className="font-mono text-lg font-bold tracking-wider text-white">
              {APP_NAME}{" "}
              <span className="text-tech-green animate-pulse">_</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-tech-green font-mono text-sm font-medium text-gray-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button type="button" className="bg-tech-green text-tech-black hover:bg-tech-greenDim rounded px-5 py-2 text-sm font-bold transition-colors">
              DASHBOARD
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="text-gray-300 hover:text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-tech-black border-tech-border absolute top-full right-0 left-0 flex flex-col gap-4 border-b p-6 md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-tech-green block font-mono text-base font-medium text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button type="button" className="bg-tech-green text-tech-black mt-2 w-full rounded py-3 font-bold">
              ACCESS CONSOLE
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
