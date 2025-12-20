"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {mounted && <Image src="/logo.svg" alt="Alphainno" width={22} height={22} priority />}
          <span className="font-semibold text-lg tracking-tight text-gray-900">Alphainno</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-black ${
                pathname === l.href ? "text-black" : "text-gray-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          {/* TODO: Add mobile menu */}
        </div>
      </div>
    </header>
  );
}
