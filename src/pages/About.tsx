import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const values = [
  { title: "CRAFTSMANSHIP OVER SPEED", description: "We do not rush projects to squeeze in more work. Every course of block is checked for level. Every joint is consistent. Every base is compacted to specification. Cutting corners saves hours and costs years of performance. We choose performance." },
  { title: "HONESTY IN EVERY ESTIMATE", description: "Our proposals include every cost — no vague allowances, no 'TBD' line items, no surprise change orders. If something could affect price, we identify it before you sign. The price we quote is the price you pay." },
  { title: "CLIMATE-SMART CONSTRUCTION", description: "New England is not the Carolinas. Our freeze-thaw cycles destroy hardscapes built to national minimums. We build to New England standards — deeper bases, proper drainage, materials rated for our conditions." },
  { title: "ONE CREW, START TO FINISH", description: "The crew that starts your project finishes your project. No rotating subcontractor teams. No new faces every morning. Our guys know each other's work, communicate constantly, and take collective pride in the finished product." },
  { title: "STANDING BEHIND OUR WORK", description: "We provide a multi-year workmanship guarantee on every project. If something we built is not performing as it should, we come back and make it right. Our manufacturer partnerships add lifetime material warranties on top of our labor guarantee." },
];

const About = () => (
  <>
    <SEOHead
      title="About Us | New England Pavers & Stone — Wakefield, MA"
      description="New England Pavers & Stone: family-owned masonry contractor in Wakefield, MA since 2008. 500+ projects, 5.0 rating, zero subcontractors. Call (617) 697-3456."
      breadcrumbs={[
        { name: "Home", url: BASE_URL },
        { name: "About Us", url: `${BASE_URL}/about` },
      ]}
      canonical={`${BASE_URL}/about`}
    />

    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">ABOUT<br /><span className="text-accent">US.</span></h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Wakefield, MA's trusted masonry and hardscape contractor — built on doing things right since 2008.</p>
    </section>

    <Stripe />

    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">BUILT ON DOING THINGS RIGHT — SINCE 2008</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-5">New England Pavers &amp; Stone was founded in 2008 in Wakefield, Massachusetts with a truck, a set of tools, and a commitment to building outdoor spaces that last. There was no investor money, no franchise agreement, no marketing agency. Growth came the old-fashioned way — one homeowner telling another that the work was done right.</p>
          <p className="text-[15px] leading-[1.8] text-mid mb-5">Over 17 years and 500+ projects later, the approach has not changed. The owner is still on every jobsite. The crew is still in-house — no subcontractors, no temp labor. Every project still gets the same 12-inch compacted base, the same premium materials, the same attention to drainage and grading that built the company's reputation in the first place.</p>
          <p className="text-[15px] leading-[1.8] text-mid mb-5">We serve homeowners across Greater Boston, the North Shore, and MetroWest with the full range of masonry and hardscape services — paver patios, retaining walls, walkways, driveways, outdoor kitchens, fire features, stone veneer, chimney repair, and more. Having one company handle everything means consistent quality, coordinated timelines, and a single point of accountability.</p>
          <p className="text-[15px] leading-[1.8] text-mid">The business was built on referrals and it still runs on referrals. A 5.0 Google rating across 87 reviews is not an accident — it is the result of treating every project like our reputation depends on it. Because it does.</p>
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
            <p className="text-[13px] leading-relaxed text-off">Fully licensed in the Commonwealth of Massachusetts with comprehensive general liability and workers' compensation coverage. We carry certificates of insurance on every project and provide them to homeowners upon request.</p>
          </div>
        </div>
      </div>
    </section>

    {/* What Sets Us Apart */}
    <section className="px-5 py-16 md:px-12 md:py-20">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">WHAT SETS US APART</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
        {values.map((v) => (
          <div key={v.title} className="p-8 bg-mid">
            <h3 className="font-display text-[20px] tracking-[1px] text-white mb-3">{v.title}</h3>
            <p className="text-sm leading-relaxed text-off">{v.description}</p>
          </div>
        ))}
      </div>
    </section>

    <Stripe />

    {/* Meet the Crew */}
    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-6 border-b-[3px] border-charcoal pb-4">MEET THE CREW</h2>
      <div className="max-w-[720px] text-base leading-[1.8] text-mid mb-8">
        <p className="mb-4">Our team is led by an owner-operator with 17+ years of hands-on masonry and hardscape experience. He is on your jobsite every day — not managing from a truck, not checking in between other projects. On site, working alongside the crew, making decisions in real time.</p>
        <p className="mb-4">The core crew consists of trained masons and skilled laborers who have worked together for years. There are no rotating subcontractor teams, no day laborers, and no crews assembled from a parking lot. When you hire New England Pavers &amp; Stone, you get the same experienced team from first shovel to final walkthrough.</p>
        <p>Our team participates in ongoing training on new materials, installation techniques, and manufacturer specifications. We follow ICPI (Interlocking Concrete Pavement Institute) and NCMA (National Concrete Masonry Association) best practices on every project.</p>
      </div>
    </section>

    {/* Credentials */}
    <section className="px-5 py-16 md:px-12 md:py-20">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">LICENSED, INSURED &amp; MANUFACTURER-CERTIFIED</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px]">
        {[
          { title: "MA LICENSED CONTRACTOR", desc: "Fully licensed in the Commonwealth of Massachusetts for residential construction." },
          { title: "GENERAL LIABILITY INSURANCE", desc: "Comprehensive general liability coverage on every project. Certificates available upon request." },
          { title: "WORKERS' COMPENSATION", desc: "Full workers' compensation coverage for every crew member on your jobsite." },
          { title: "BELGARD AUTHORIZED", desc: "Authorized Belgard contractor with access to extended manufacturer warranties." },
          { title: "UNILOCK AUTHORIZED", desc: "Authorized Unilock installer trained in their complete product line and warranty program." },
          { title: "ICPI TRAINED", desc: "Installation practices follow Interlocking Concrete Pavement Institute standards for base preparation, paver installation, and joint stabilization." },
        ].map((c) => (
          <div key={c.title} className="p-6 bg-mid">
            <h3 className="font-display text-base tracking-[1px] text-white mb-2">{c.title}</h3>
            <p className="text-xs leading-relaxed text-off">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <AreasSection />
    <CTABanner headline="WORK WITH US" />
  </>
);

export default About;
