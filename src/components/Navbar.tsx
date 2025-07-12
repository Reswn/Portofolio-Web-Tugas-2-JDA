"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/contact", label: "Kontak" },
    { href: "/projects/1", label: "Proyek" },
    { href: "/soon", label: "Product Soon" },
  ];

  const isActive = (href: string) =>
    pathname === href ||
    (href.includes("/projects") && pathname?.startsWith("/projects"));

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">Reni Kartika Suwandi Portfolio</h1>

        <div className="navbar-links-desktop">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`navbar-link ${isActive(href) ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="navbar-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle-btn"
            aria-label="Toggle navigation"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-wrapper ${isOpen ? "open" : ""}`}>
        <div className="navbar-mobile-menu">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`navbar-link ${isActive(href) ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
