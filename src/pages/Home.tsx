import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const townsByRegion = {
  "North Shore": ["Melrose", "Stoneham", "Saugus", "Lynnfield", "Peabody", "Danvers", "Beverly", "Salem", "Marblehead", "Swampscott", "Lynn"],
  "Greater Boston": ["Medford", "Malden", "Everett", "Somerville", "Cambridge", "Arlington", "Brookline", "Boston"],
  "MetroWest": ["Lexington", "Waltham", "Belmont", "Newton", "Needham", "Wellesley", "Natick", "Framingham"],
  "North / Northwest": ["Woburn", "Winchester", "Burlington", "Wilmington", "Billerica", "Tewksbury", "Andover", "Reading", "North Reading"],
};

const processSteps = [
  { step: "01", title: "FREE CONSULTATION", description: "We visit your property, take measurements, discuss your vision, review material options, and assess drainage and soil conditions. You get honest advice and a clear understanding of what is possible within your budget." },
  { step: "02", title: "CUSTOM DESIGN & PROPOSAL", description: "We create a scaled design layout, finalize material selections, and deliver a detailed written proposal with all-inclusive pricing. No hidden fees, no vague allowances, no change orders." },
  { step: "03", title: "EXPERT CONSTRUCTION", description: "Our crew builds your project from excavation to finish. The owner is on site daily. We provide progress updates, keep your property clean, and respect your schedule and neighbors." },
  { step: "04", title: "FINAL WALKTHROUGH", description: "We walk the completed project with you, point out design details, provide care instructions and warranty documentation, and make sure you are completely satisfied before we consider the job done." },
];

const differentiators = [
  { title: "OWNER ON EVERY JOBSITE", description: "The owner of New England Pavers & Stone is present on your property every day of construction. Not a project manager. Not a foreman hired last month. The person whose name is on the company and whose reputation depends on your satisfaction. That level of direct accountability is rare in this industry — and it is the reason we maintain a 5.0 Google rating after 500+ projects." },
  { title: "ZERO SUBCONTRACTORS", description: "Our trained, in-house crew handles every phase of your project. We do not hire subcontractors, day laborers, or temp workers. When you hire New England Pavers & Stone, you get the same experienced team from first shovel to final walkthrough. That consistency shows in the quality of the finished work." },
  { title: "CLIMATE-ENGINEERED CONSTRUCTION", description: "Massachusetts experiences 100+ freeze-thaw cycles per year. That constant expansion and contraction destroys hardscapes built on inadequate bases. We install a minimum 12-inch compacted gravel base with geotextile fabric separation on every project — the engineering standard that prevents frost heave, settling, and the premature failure common with shortcut construction." },
  { title: "TRANSPARENT, ALL-INCLUSIVE PRICING", description: "Our proposals include every cost — materials, labor, excavation, disposal, equipment, and cleanup. No line items labeled 'TBD.' No change orders for work we should have anticipated. No surprise invoices at the end. The price we quote is the price you pay." },
  { title: "PREMIUM MATERIALS WITH WARRANTIES", description: "We install pavers and wall systems from Belgard, Unilock, Techo-Bloc, and Cambridge — manufacturers who back their products with lifetime structural warranties. Combined with our workmanship guarantee, your investment is protected from both material defects and installation issues." },
];

const Home = () => {
  return (
    <>
      <SEOHead
        title="New England Pavers & Stone | Masonry & Hardscape Contractor Wakefield, MA"
        description="Licensed masonry and hardscape contractor in Wakefield, MA serving Greater Boston since 2008. Patios, walls, walkways, driveways. Free estimates. Call (617) 697-3456."
        breadcrumbs={[{ name: "Home", url: BASE_URL }]}
        canonical={BASE_URL}
      />

      {/* Hero */}
      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12 min-h-screen flex flex-col justify-center">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">MASONRY · HARDSCAPE · STONEWORK</div>
        <h1 className="font-display text-[clamp(40px,9vw,140px)] text-white leading-[0.9] tracking-[1px] mb-5 animate-slide-up delay-1">
          MASONRY &amp;<br />HARDSCAPE<br />
          <span className="text-accent">CONTRACTOR</span><br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px hsl(var(--concrete))", fontSize: "clamp(20px,4vw,60px)" }}>IN WAKEFIELD, MA</span>
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

      {/* Intro */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-6 border-b-[3px] border-charcoal pb-4">YOUR LOCAL MASONRY &amp; HARDSCAPE EXPERTS</h2>
        <div className="max-w-[760px] text-base leading-[1.8] text-mid mb-12">
          <p className="mb-4">New England Pavers &amp; Stone is a licensed masonry and hardscape contractor based in Wakefield, MA, serving homeowners across Greater Boston, the North Shore, and MetroWest since 2008. We specialize in paver patios, retaining walls, walkways, driveways, outdoor kitchens, fire features, stone veneer, and chimney repair — everything your outdoor space needs, handled by one company.</p>
          <p>Homeowners choose us over larger outfits because the owner is on every jobsite, we never subcontract any phase of work, and our bases are engineered for New England's demanding freeze-thaw climate. Over 500 completed projects and a 5.0 Google rating are the result of doing things right on every job, not cutting corners to win on price.</p>
        </div>

        {/* Services Grid */}
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">WHAT WE DO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px] mb-12">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group p-8 bg-white transition-all relative overflow-hidden no-underline hover:bg-charcoal">
              <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display text-[22px] tracking-[1px] text-charcoal group-hover:text-white transition-colors">{s.name.toUpperCase()}</h3>
                <span className="text-2xl text-off -rotate-45 transition-all">→</span>
              </div>
              <p className="text-sm leading-relaxed text-off">{s.shortDescription.slice(0, 140)}...</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 py-16 md:px-12 md:py-20">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">WHY HOMEOWNERS ACROSS GREATER BOSTON TRUST NEW ENGLAND PAVERS &amp; STONE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
          {differentiators.map((d) => (
            <div key={d.title} className="p-8 bg-mid">
              <h3 className="font-display text-[22px] tracking-[1px] text-white mb-3">{d.title}</h3>
              <p className="text-sm leading-relaxed text-off">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Stripe />

      {/* Process */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">HOW YOUR PROJECT WORKS — FROM FIRST CALL TO FINAL WALKTHROUGH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {processSteps.map((p) => (
            <div key={p.step} className="p-8 bg-white">
              <div className="font-display text-[48px] text-accent leading-none mb-3">{p.step}</div>
              <h3 className="font-display text-lg tracking-[1px] mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed text-off">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-16 md:px-12 md:py-20">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">WHAT OUR CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-mid">
              <div className="text-accent text-lg mb-3">{"★".repeat(t.rating)}</div>
              <p className="text-sm leading-relaxed text-off mb-4">"{t.text}"</p>
              <div className="text-white font-display text-base tracking-[1px]">{t.name}</div>
              <div className="text-xs text-off tracking-[1px] uppercase">{t.service} · {t.town}</div>
            </div>
          ))}
        </div>
      </section>

      <Stripe />

      {/* Service Areas */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-6 border-b-[3px] border-charcoal pb-4">SERVING WAKEFIELD, MA &amp; COMMUNITIES ACROSS GREATER BOSTON</h2>
        <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-10">
          Based in Wakefield with easy access to Routes 93, 95, 128, and Route 1, our crew serves homeowners within approximately 30 miles. Whether you are in the waterfront communities of the North Shore, the established neighborhoods of Arlington and Lexington, or the suburban towns along Route 93, we drive to you for a free on-site consultation.
        </p>
        {Object.entries(townsByRegion).map(([region, towns]) => (
          <div key={region} className="mb-6">
            <h3 className="font-display text-lg tracking-[1px] mb-3">{region.toUpperCase()}</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {towns.map((t) => (
                <Link key={t} to="/service-areas" className="px-3 py-1 bg-white text-mid no-underline text-xs tracking-[1px] uppercase hover:bg-charcoal hover:text-white transition-all">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTABanner headline="READY TO BUILD?" />
    </>
  );
};

export default Home;
