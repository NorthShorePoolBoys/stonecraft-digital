import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const galleryCategories = [
  {
    title: "PAVER PATIOS",
    items: [
      { type: "Belgard Paver Patio", location: "Wakefield, MA", desc: "800 sq ft Belgard Urbana paver patio with built-in fire pit and curved seating wall.", bg: "from-[#2a2218] to-[#1a150e]" },
      { type: "Multi-Level Patio", location: "Melrose, MA", desc: "Two-tier paver patio with stone steps connecting upper dining area to lower fire pit lounge.", bg: "from-[#1a2520] to-[#0e1a15]" },
      { type: "Unilock Patio", location: "Winchester, MA", desc: "650 sq ft Unilock Beacon Hill Flagstone patio with herringbone border pattern.", bg: "from-[#2a1a18] to-[#1a0e0e]" },
      { type: "Entertainer's Patio", location: "Lexington, MA", desc: "1,200 sq ft paver patio with outdoor kitchen island, bar counter, and pergola.", bg: "from-[#1a1a2a] to-[#0e0e1a]" },
      { type: "Pool Patio", location: "Lynnfield, MA", desc: "Non-slip Techo-Bloc pool surround with bullnose coping and trench drain system.", bg: "from-[#2a2a1a] to-[#1a1a0e]" },
    ],
  },
  {
    title: "RETAINING WALLS",
    items: [
      { type: "Tiered Retaining Wall", location: "Stoneham, MA", desc: "Two-tier Versa-Lok segmental wall with geogrid reinforcement and terraced planting beds.", bg: "from-[#1a2520] to-[#0e1a15]" },
      { type: "Natural Stone Wall", location: "Reading, MA", desc: "New England fieldstone dry-stack retaining wall with integrated bluestone steps.", bg: "from-[#2a2218] to-[#1a150e]" },
      { type: "Boulder Wall", location: "Burlington, MA", desc: "Large natural boulder retaining wall managing 6-foot grade change in sloped backyard.", bg: "from-[#201a2a] to-[#150e1a]" },
      { type: "Belgard Wall System", location: "Arlington, MA", desc: "Belgard Celtik wall with adhesive-set caps creating level patio terrace on hillside lot.", bg: "from-[#2a1a18] to-[#1a0e0e]" },
    ],
  },
  {
    title: "WALKWAYS & STEPS",
    items: [
      { type: "Bluestone Walkway", location: "Winchester, MA", desc: "Full-slab thermal bluestone front walkway with granite steps and landscape lighting.", bg: "from-[#2a2218] to-[#1a150e]" },
      { type: "Paver Walkway", location: "Medford, MA", desc: "Techo-Bloc Blu 60mm walkway in running bond pattern with LED path lights.", bg: "from-[#1a1a2a] to-[#0e0e1a]" },
      { type: "Granite Steps", location: "Wakefield, MA", desc: "Solid thermal-finished granite treads on block foundation with iron handrail.", bg: "from-[#2a2a1a] to-[#1a1a0e]" },
      { type: "Garden Path", location: "Melrose, MA", desc: "Irregular flagstone garden path with creeping thyme joints through perennial border.", bg: "from-[#1a2520] to-[#0e1a15]" },
    ],
  },
  {
    title: "DRIVEWAYS",
    items: [
      { type: "Paver Driveway", location: "Saugus, MA", desc: "80mm interlocking paver driveway with soldier course border and Belgium block apron.", bg: "from-[#2a1a18] to-[#1a0e0e]" },
      { type: "Permeable Driveway", location: "Woburn, MA", desc: "Permeable paver driveway with infiltration base for stormwater management compliance.", bg: "from-[#201a2a] to-[#150e1a]" },
    ],
  },
  {
    title: "OUTDOOR LIVING",
    items: [
      { type: "Outdoor Kitchen", location: "Winchester, MA", desc: "Built-in grill island with granite countertops, stone veneer, refrigerator, and gas line.", bg: "from-[#2a2218] to-[#1a150e]" },
      { type: "Gas Fire Pit", location: "Wakefield, MA", desc: "Custom gas fire pit with fire glass, electronic ignition, and curved seating wall.", bg: "from-[#2a2a1a] to-[#1a1a0e]" },
      { type: "Outdoor Fireplace", location: "Lexington, MA", desc: "Freestanding stone fireplace with raised hearth and bluestone mantel on paver patio.", bg: "from-[#1a2520] to-[#0e1a15]" },
    ],
  },
  {
    title: "MASONRY & REPAIR",
    items: [
      { type: "Chimney Rebuild", location: "Stoneham, MA", desc: "Full chimney rebuild from roofline with matching brick, new crown, and step flashing.", bg: "from-[#2a1a18] to-[#1a0e0e]" },
      { type: "Stone Veneer", location: "Medford, MA", desc: "Natural thin-cut fieldstone veneer applied to exposed concrete foundation.", bg: "from-[#1a1a2a] to-[#0e0e1a]" },
      { type: "Brick Repointing", location: "Malden, MA", desc: "Full repointing of 1920s brick foundation with color-matched Type N mortar.", bg: "from-[#201a2a] to-[#150e1a]" },
    ],
  },
];

const Gallery = () => (
  <>
    <SEOHead
      title="Project Gallery | New England Pavers & Stone — Wakefield, MA"
      description="Browse masonry and hardscape projects by New England Pavers & Stone across Greater Boston. Patios, walls, walkways, outdoor living. Call (617) 697-3456."
      breadcrumbs={[
        { name: "Home", url: BASE_URL },
        { name: "Gallery", url: `${BASE_URL}/gallery` },
      ]}
      canonical={`${BASE_URL}/gallery`}
    />

    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">OUR WORK</div>
      <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">OUR WORK —<br /><span className="text-accent">MASONRY &amp; HARDSCAPE</span><br />PROJECTS ACROSS<br />GREATER BOSTON</h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Below is a selection of recent projects across Greater Boston and the North Shore. Each project was designed, built, and completed by our in-house crew — no subcontractors, no shortcuts. If you see a project similar to what you have in mind, call us at (617) 697-3456 for a free consultation.</p>
    </section>

    <Stripe />

    <div className="pt-16 px-5 pb-20 md:px-12">
      {galleryCategories.map((cat) => (
        <div key={cat.title} className="mb-12">
          <h2 className="font-display text-[clamp(24px,3vw,36px)] text-white tracking-[2px] mb-6 border-b-[3px] border-accent pb-3">{cat.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
            {cat.items.map((item, i) => (
              <div key={i} className="aspect-[4/3] relative overflow-hidden cursor-pointer group" data-photo-needed="true">
                <div className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${item.bg} transition-transform duration-400 group-hover:scale-105 p-6 text-center`}>
                  <span className="font-display text-lg text-white">{item.type}</span>
                  <span className="text-[13px] tracking-[1px] uppercase text-off">{item.location}</span>
                  <span className="text-[11px] leading-relaxed text-off/70 mt-1 max-w-[250px]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <CTABanner headline="LIKE WHAT YOU SEE?" />
  </>
);

export default Gallery;
