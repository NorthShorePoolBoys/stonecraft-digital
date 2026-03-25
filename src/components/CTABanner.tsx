import { Link } from "react-router-dom";

interface CTABannerProps {
  headline?: string;
}

const CTABanner = ({ headline = "READY TO BUILD?" }: CTABannerProps) => {
  return (
    <>
      <div className="h-1.5 w-full" style={{ background: "repeating-linear-gradient(135deg, hsl(var(--accent)) 0, hsl(var(--accent)) 12px, transparent 12px, transparent 24px)" }} />
      <section className="px-5 py-16 md:px-12 md:py-20 bg-accent text-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(80px,15vw,200px)] text-black/[.06] tracking-[20px] whitespace-nowrap pointer-events-none">CALL NOW</span>
        <h2 className="font-display text-[clamp(32px,5vw,64px)] text-white tracking-[3px] mb-3 relative">{headline}</h2>
        <p className="text-white/70 text-[15px] mb-7 relative">Free estimates · No pressure · Serving Greater Boston &amp; the North Shore</p>
        <a href="tel:6176973456" className="font-display text-[clamp(36px,6vw,72px)] text-white no-underline block mb-7 tracking-[4px] relative hover:scale-[1.03] transition-transform">(617) 697-3456</a>
        <Link to="/contact" className="inline-block px-9 py-3.5 bg-charcoal text-white no-underline text-[13px] tracking-[2px] uppercase font-semibold relative hover:bg-mid hover:-translate-y-0.5 transition-all">
          Schedule Your Free Estimate
        </Link>
      </section>
    </>
  );
};

export default CTABanner;
