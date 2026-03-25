import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";

const galleryItems = [
  { type: "Paver Patio", location: "Melrose, MA", bg: "from-[#2a2218] to-[#1a150e]" },
  { type: "Retaining Wall", location: "Stoneham, MA", bg: "from-[#1a2520] to-[#0e1a15]" },
  { type: "Walkway", location: "Reading, MA", bg: "from-[#2a1a18] to-[#1a0e0e]" },
  { type: "Outdoor Kitchen", location: "Saugus, MA", bg: "from-[#1a1a2a] to-[#0e0e1a]" },
  { type: "Fire Pit", location: "Lynnfield, MA", bg: "from-[#2a2a1a] to-[#1a1a0e]" },
  { type: "Driveway", location: "Woburn, MA", bg: "from-[#201a2a] to-[#150e1a]" },
  { type: "Pool Patio", location: "Winchester, MA", bg: "from-[#2a2218] to-[#1a150e]" },
  { type: "Stone Steps", location: "Burlington, MA", bg: "from-[#1a2520] to-[#0e1a15]" },
  { type: "Stone Veneer", location: "Medford, MA", bg: "from-[#2a1a18] to-[#1a0e0e]" },
  { type: "Brick Patio", location: "Malden, MA", bg: "from-[#1a1a2a] to-[#0e0e1a]" },
  { type: "French Drain", location: "Melrose, MA", bg: "from-[#2a2a1a] to-[#1a1a0e]" },
  { type: "Chimney", location: "Stoneham, MA", bg: "from-[#201a2a] to-[#150e1a]" },
];

const Gallery = () => (
  <>
    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">OUR WORK</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">PROJECT<br /><span className="text-accent">GALLERY.</span></h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">A selection of recent masonry and hardscape projects across Greater Boston and the North Shore.</p>
    </section>

    <Stripe />

    <div className="pt-16 px-5 pb-20 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
        {galleryItems.map((item, i) => (
          <div key={i} className="aspect-[4/3] relative overflow-hidden cursor-pointer group">
            <div className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${item.bg} transition-transform duration-400 group-hover:scale-105`}>
              <span className="font-display text-lg text-white">{item.type}</span>
              <span className="text-[13px] tracking-[1px] uppercase text-off">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <CTABanner headline="LIKE WHAT YOU SEE?" />
  </>
);

export default Gallery;
