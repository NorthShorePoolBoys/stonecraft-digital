import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";

const towns = [
  "Wakefield","Melrose","Stoneham","Reading","Saugus","Lynnfield","Woburn","Winchester",
  "Burlington","Lexington","Arlington","Medford","Malden","Everett","Revere","Peabody",
  "Danvers","Beverly","Marblehead","Swampscott","Salem","Nahant","Lynn","Winthrop",
  "Boston","Somerville","Cambridge","Brookline","Newton","Waltham","Belmont","Watertown",
  "Needham","Wellesley","Natick","Framingham","Andover","North Andover","Tewksbury",
  "Billerica","Chelmsford","Lowell","Concord","Acton","Sudbury","Wayland","Weston",
  "Lincoln","Bedford","Wilmington","North Reading","Middleton",
];

const ServiceAreas = () => (
  <>
    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">AREAS WE SERVE</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">SERVICE<br /><span className="text-accent">AREAS.</span></h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Based in Wakefield, MA — proudly serving homeowners across the North Shore, Greater Boston, MetroWest, and the Merrimack Valley.</p>
    </section>

    <Stripe />

    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">WHERE WE WORK</h2>
      <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-12">New England Pavers &amp; Stone provides masonry and hardscape services to residential properties within approximately 30 miles of our Wakefield, MA base. Whether you're in Melrose, Winchester, Lexington, or the North Shore communities of Marblehead, Beverly, and Salem — our crew drives to you for a free on-site consultation.</p>
    </section>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] px-5 pb-20 md:px-12">
      {towns.map((t) => (
        <div key={t} className="p-6 bg-mid transition-all cursor-pointer hover:bg-accent group">
          <h4 className="font-display text-lg tracking-[1px] text-white">{t.toUpperCase()}</h4>
          <p className="text-xs text-off mt-1 group-hover:text-white/70">Masonry &amp; Hardscape</p>
        </div>
      ))}
    </div>

    <CTABanner headline="IN OUR SERVICE AREA?" />
  </>
);

export default ServiceAreas;
