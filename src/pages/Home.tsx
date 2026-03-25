import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import { services } from "@/data/services";

const Home = () => {
  const displayedServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12 min-h-screen flex flex-col justify-center">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">MASONRY · HARDSCAPE · STONEWORK</div>
        <h1 className="font-display text-[clamp(56px,9vw,140px)] text-white leading-[0.9] tracking-[1px] mb-5 animate-slide-up delay-1">
          WE BUILD<br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px hsl(var(--concrete))" }}>THINGS THAT</span><br />
          <span className="text-accent">LAST.</span>
        </h1>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">
          Patios. Walls. Walkways. Driveways. Built by hand with precision and care for New England homeowners who demand the best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start mt-7 animate-slide-up delay-3">
          <a href="tel:6176973456" className="font-display text-[28px] text-accent no-underline tracking-[2px] hover:text-accent-hover transition-colors">(617) 697-3456</a>
          <Link to="/contact" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(212,71,42,.3)] transition-all">
            Get Free Estimate →
          </Link>
        </div>
      </section>

      <Stripe />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-mid">
        {[
          { val: "500+", label: "Projects Done" },
          { val: "17", label: "Years in Business" },
          { val: "5.0", label: "Star Average" },
          { val: "0%", label: "Subcontracted" },
        ].map((s, i) => (
          <div key={i} className="py-10 px-8 text-center border-r border-white/[.06] last:border-r-0 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="font-display text-[52px] text-white leading-none">
              {s.val.includes("+") ? <>{s.val.replace("+", "")}<span className="text-accent">+</span></> :
               s.val.includes("%") ? <>{s.val.replace("%", "")}<span className="text-accent">%</span></> :
               s.val}
            </div>
            <div className="text-xs tracking-[2px] uppercase text-off mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">WHAT WE DO</h2>
        <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-12">
          Every project. Our hands. Our reputation on every stone. Based in Wakefield, MA, we serve homeowners across the North Shore, MetroWest, and Greater Boston with expert masonry and hardscape services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-12">
          {displayedServices.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group p-8 bg-white transition-all relative overflow-hidden no-underline hover:bg-charcoal">
              <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display text-[22px] tracking-[1px] text-charcoal group-hover:text-white transition-colors">{s.name.toUpperCase()}</h3>
                <span className="text-2xl text-off -rotate-45 transition-all">→</span>
              </div>
              <p className="text-sm leading-relaxed text-off">{s.intro.slice(0, 120)}...</p>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link to="/services/paver-patios" className="inline-block px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover transition-all">
            View All Services →
          </Link>
        </p>
      </section>

      <AreasSection />
      <CTABanner headline="READY TO BUILD?" />
    </>
  );
};

export default Home;
