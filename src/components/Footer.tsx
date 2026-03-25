import { Link } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const Footer = () => {
  const firstHalf = services.slice(0, 9);
  const secondHalf = services.slice(9);

  return (
    <footer className="px-5 py-8 md:px-12 md:py-12 border-t-2 border-mid">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 md:gap-10 mb-10">
        <div>
          <div className="mb-3">
            <img src={logo} alt="New England Pavers & Stone" className="w-[200px] h-auto mb-2" />
            <span className="block font-body text-[10px] tracking-[3px] text-off font-normal uppercase">Masonry · Hardscape · Stonework</span>
          </div>
          <div className="text-[13px] text-off leading-relaxed mt-3">
            Licensed and insured masonry and hardscape contractor serving Wakefield, the North Shore, MetroWest, and Greater Boston since 2008. We never subcontract — our crew builds every project.
          </div>
        </div>
        <div>
          <h4 className="font-display text-base text-white tracking-[2px] mb-3.5">SERVICES</h4>
          {firstHalf.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">{s.name}</Link>
          ))}
        </div>
        <div>
          <h4 className="font-display text-base text-white tracking-[2px] mb-3.5">MORE SERVICES</h4>
          {secondHalf.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">{s.name}</Link>
          ))}
        </div>
        <div>
          <h4 className="font-display text-base text-white tracking-[2px] mb-3.5">COMPANY</h4>
          <Link to="/about" className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">About Us</Link>
          <Link to="/gallery" className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">Gallery</Link>
          <Link to="/service-areas" className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">Service Areas</Link>
          <Link to="/contact" className="block text-off no-underline text-[13px] py-0.5 hover:text-accent transition-colors">Contact</Link>
          <a href="tel:6176973456" className="block text-accent no-underline text-[13px] py-0.5 font-semibold mt-3">(617) 697-3456</a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-[11px] text-off/50 border-t border-mid pt-6 gap-2">
        <span>© 2026 New England Pavers &amp; Stone · Wakefield, MA</span>
        <span><a href="tel:6176973456" className="text-accent no-underline">(617) 697-3456</a> · Serving Greater Boston &amp; the North Shore</span>
      </div>
    </footer>
  );
};

export default Footer;
