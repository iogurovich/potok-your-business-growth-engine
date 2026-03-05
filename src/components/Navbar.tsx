import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Инвесторам", href: "#" },
  { label: "Заемщикам", href: "#" },
  { label: "Партнерам", href: "#" },
  { label: "Блог", href: "#" },
  { label: "Контакты", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-hero border-b border-hero-foreground/10 backdrop-blur-sm">
      <div className="container-main flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-2xl font-bold text-hero-foreground tracking-tight">
          Поток
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-hero-foreground/80 hover:text-hero-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#" className="ml-2 text-sm font-medium text-hero-foreground border border-hero-foreground/30 rounded-lg px-4 py-2 hover:bg-hero-foreground/10 transition-colors">
            Войти в ЛК
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-hero border-t border-hero-foreground/10 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="block py-2 text-sm text-hero-foreground/80 hover:text-hero-foreground">
              {l.label}
            </a>
          ))}
          <a href="#" className="block mt-2 text-sm font-medium text-hero-foreground border border-hero-foreground/30 rounded-lg px-4 py-2 text-center">
            Войти в ЛК
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
