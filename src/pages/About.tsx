import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";

const About = () => (
  <>
    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">ABOUT<br /><span className="text-accent">US.</span></h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">A family-owned masonry and hardscape company built on doing things right — since 2008.</p>
    </section>

    <Stripe />

    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">OUR STORY</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-5">New England Pavers &amp; Stone was founded in 2008 in Wakefield, Massachusetts with a simple mission: build outdoor spaces that last. Over 17 years later, we've completed more than 500 projects across Greater Boston, the North Shore, and MetroWest — and we still approach every single one with the same hands-on attention to detail that built our reputation.</p>
          <p className="text-[15px] leading-[1.8] text-mid mb-5">We're not a franchise. We don't broker jobs to subcontractors. The owner is on every jobsite, and our trained crew builds every project from excavation to final walkthrough. That means one point of accountability, consistent quality, and no surprises.</p>
          <p className="text-[15px] leading-[1.8] text-mid">We specialize in paver patios, retaining walls, walkways, driveways, outdoor kitchens, fire features, stone veneer, chimneys, and general masonry — everything your outdoor space needs, handled by one company that knows New England's climate inside and out.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] mt-8">
            {[
              { t: "NO SUBCONTRACTORS", d: "Our crew builds every project. Period." },
              { t: "OWNER ON SITE", d: "Direct accountability on every job." },
              { t: "TRANSPARENT PRICING", d: "Detailed proposals. No hidden costs." },
              { t: "BUILT FOR CLIMATE", d: "Engineered for freeze-thaw cycles." },
            ].map((v) => (
              <div key={v.t} className="p-6 bg-white">
                <h4 className="font-display text-lg tracking-[1px] mb-1.5">{v.t}</h4>
                <p className="text-[13px] leading-relaxed text-off">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "500+", lbl: "Projects" },
              { val: "17", lbl: "Years" },
              { val: "5.0", lbl: "Star Rating" },
              { val: "100%", lbl: "Our Crew" },
            ].map((s) => (
              <div key={s.lbl} className="p-8 bg-mid text-center">
                <div className="font-display text-5xl text-white leading-none">
                  {s.val.includes("+") ? <>{s.val.replace("+", "")}<span className="text-accent">+</span></> :
                   s.val.includes("%") ? <>{s.val.replace("%", "")}<span className="text-accent">%</span></> :
                   s.val}
                </div>
                <div className="text-[11px] tracking-[2px] uppercase text-off mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-8 bg-white">
            <h4 className="font-display text-lg tracking-[1px] mb-3">LICENSED &amp; INSURED</h4>
            <p className="text-[13px] leading-relaxed text-off">Fully licensed in the Commonwealth of Massachusetts with comprehensive general liability and workers' compensation coverage. We carry certificates of insurance on every project.</p>
          </div>
        </div>
      </div>
    </section>

    <AreasSection />
    <CTABanner headline="WORK WITH US" />
  </>
);

export default About;
