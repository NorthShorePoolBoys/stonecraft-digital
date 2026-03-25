import { Link } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-2 py-0 md:px-6 md:py-0 bg-charcoal/[.97] backdrop-blur-[10px] border-b-2 border-accent">
      <Link to="/">
        <img src={logo} alt="New England Pavers & Stone" <img src={logo} alt="New England Pavers & Stone" className="h-16 md:h-20 w-auto" /> />
      </Link>
      <div className="flex items-stretch gap-0">
        <div className="relative group flex items-center">
          <span className="text-off text-xs tracking-[1.5px] uppercase font-medium px-2 md:px-4 flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            Services <span className="text-[10px]">▾</span>
          </span>
          <div className="absolute top-full left-0 min-w-[240px] bg-charcoal border border-mid border-t-2 border-t-accent py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 z-[200] max-h-[70vh] overflow-y-auto">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="block px-5 py-2.5 text-off no-underline text-xs tracking-[1px] uppercase transition-all hover:bg-mid hover:text-white hover:pl-6">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/about" className="hidden md:flex items-center text-off no-underline text-xs tracking-[1.5px] uppercase font-medium px-4 hover:text-white transition-colors">About Us</Link>
        <Link to="/gallery" className="hidden md:flex items-center text-off no-underline text-xs tracking-[1.5px] uppercase font-medium px-4 hover:text-white transition-colors">Gallery</Link>
        <Link to="/service-areas" className="hidden md:flex items-center text-off no-underline text-xs tracking-[1.5px] uppercase font-medium px-4 hover:text-white transition-colors">Service Areas</Link>
        <Link to="/contact" className="hidden md:flex items-center text-off no-underline text-xs tracking-[1.5px] uppercase font-medium px-4 hover:text-white transition-colors">Contact</Link>
        <a href="tel:6176973456" className="ml-3 px-4 py-2.5 md:px-[22px] bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(212,71,42,.3)] whitespace-nowrap flex items-center">
          Call (617) 697-3456
        </a>
      </div>
    </nav>
  );
};

export default Header;
