import { Link } from "react-router-dom";
import { ServiceData } from "@/data/services";

interface HeroSectionProps {
  service: ServiceData;
}

const HeroSection = ({ service }: HeroSectionProps) => {
  const style = service.heroStyle || "standard";

  if (style === "split-image") {
    return (
      <section className="pt-[120px] pb-0 md:pt-[140px] grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="px-5 md:px-12 flex flex-col justify-center pb-12 md:pb-0">
          <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE · WAKEFIELD, MA</div>
          <h1 className="font-display text-[clamp(42px,7vw,96px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1 whitespace-pre-line">{service.heroTitle}</h1>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">{service.heroSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start mt-7 animate-slide-up delay-3">
            <a href="tel:6176973456" className="font-display text-[28px] text-accent no-underline tracking-[2px] hover:text-accent-hover transition-colors">(617) 697-3456</a>
            <Link to="/contact" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover hover:-translate-y-px transition-all">
              Get Free Estimate →
            </Link>
          </div>
        </div>
        <div className="relative min-h-[350px] md:min-h-0 bg-mid overflow-hidden">
          {service.heroImage ? (
            <img src={service.heroImage} alt={`${service.name} project by New England Pavers & Stone`} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-off text-sm tracking-[2px] uppercase font-display">
              [{service.name} Hero Photo]
            </div>
          )}
        </div>
      </section>
    );
  }

  if (style === "stats-bar") {
    return (
      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE · WAKEFIELD, MA</div>
        <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1 whitespace-pre-line">{service.heroTitle}</h1>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">{service.heroSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-start mt-7 animate-slide-up delay-3">
          <a href="tel:6176973456" className="font-display text-[28px] text-accent no-underline tracking-[2px] hover:text-accent-hover transition-colors">(617) 697-3456</a>
          <Link to="/contact" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover hover:-translate-y-px transition-all">
            Get Free Estimate →
          </Link>
        </div>
        {service.heroStats && service.heroStats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] mt-12 animate-slide-up delay-4">
            {service.heroStats.map((stat) => (
              <div key={stat.label} className="bg-mid p-6 text-center">
                <div className="font-display text-[clamp(32px,5vw,48px)] text-accent leading-none mb-1">{stat.value}</div>
                <div className="text-off text-xs tracking-[2px] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  // Default / standard hero
  return (
    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE · WAKEFIELD, MA</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1 whitespace-pre-line">{service.heroTitle}</h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">{service.heroSub}</p>
      <div className="flex flex-col sm:flex-row gap-4 items-start mt-7 animate-slide-up delay-3">
        <a href="tel:6176973456" className="font-display text-[28px] text-accent no-underline tracking-[2px] hover:text-accent-hover transition-colors">(617) 697-3456</a>
        <Link to="/contact" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover hover:-translate-y-px transition-all">
          Get Free Estimate →
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
