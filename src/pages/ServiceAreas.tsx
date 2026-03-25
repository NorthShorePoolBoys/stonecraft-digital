import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const townBlocks = [
  { town: "Wakefield", text: "Our home base. We have completed more projects in Wakefield than any other town. From the lakeside properties around Lake Quannapowitt to the established neighborhoods near the town center, we know Wakefield's soil conditions, zoning requirements, and the style homeowners here prefer. Popular services include paver patios, front walkway replacements, and retaining walls.", links: ["/services/paver-patios", "/services/walkways"] },
  { town: "Melrose", text: "Just south of Wakefield, Melrose homeowners frequently hire us for front walkway upgrades, chimney repair on the city's many older homes, and backyard patio installations. The dense neighborhood layouts require careful equipment access planning — something we handle on every project.", links: ["/services/chimney", "/services/walkways"] },
  { town: "Stoneham", text: "Stoneham properties often feature significant grade changes that require retaining wall construction to create usable outdoor space. We have built dozens of tiered wall systems and patio terraces across Stoneham, turning sloped yards into functional entertainment areas.", links: ["/services/retaining-walls", "/services/paver-patios"] },
  { town: "Reading", text: "Reading homeowners value curb appeal, and a front walkway replacement is the most requested service in this town. We also install paver patios, fire pits, and outdoor living spaces for families looking to maximize their backyard. Reading's well-maintained neighborhoods set a high bar — our work meets it.", links: ["/services/walkways", "/services/fire-pits"] },
  { town: "Saugus", text: "From the neighborhoods along Route 1 to the residential streets near Breakheart Reservation, we serve Saugus homeowners with paver patios, driveway installations, and landscape drainage solutions. Saugus properties frequently need French drain systems to manage water flow.", links: ["/services/driveways", "/services/french-drain"] },
  { town: "Lynnfield", text: "Lynnfield is one of our most active markets for outdoor living projects. Pool patios, outdoor kitchens, and fire features are popular among Lynnfield homeowners with larger properties looking to create premium entertainment spaces.", links: ["/services/pool-patios", "/services/outdoor-living"] },
  { town: "Woburn", text: "Located just minutes from our Wakefield base via Route 93, Woburn is a convenient service area for both large hardscape projects and smaller masonry repairs. Paver driveways and retaining walls are among our most requested services in Woburn.", links: ["/services/driveways", "/services/retaining-walls"] },
  { town: "Winchester", text: "Winchester's established homes and manicured properties demand premium hardscape work. We install bluestone walkways, granite steps, and Belgard paver patios for homeowners in the Wedgemere, Symmes Corner, and Winchester Center neighborhoods.", links: ["/services/walkways", "/services/steps-stairs"] },
  { town: "Burlington", text: "Burlington homeowners often come to us for driveway replacements — upgrading from cracked asphalt to interlocking pavers — and for backyard patio and retaining wall projects. Burlington's clay-heavy soils make proper base preparation and drainage especially critical.", links: ["/services/driveways", "/services/paver-patios"] },
  { town: "Medford", text: "Medford's mix of historic homes and newer construction gives us a wide range of projects — from brick repointing on century-old foundations to new paver patios and walkways on recently built properties. Our chimney repair services are in high demand across Medford.", links: ["/services/brick", "/services/chimney"] },
  { town: "Malden", text: "We serve Malden homeowners with brick masonry repair, stone veneer installation, and hardscape projects on the city's compact residential lots. Careful site planning and efficient equipment access are essential in Malden's dense neighborhoods.", links: ["/services/stone-veneer", "/services/brick"] },
  { town: "Arlington", text: "Arlington's hilly terrain creates natural demand for retaining wall construction and terraced patio installations. We have built retaining walls throughout Arlington's neighborhoods, creating level outdoor spaces on properties that slope significantly.", links: ["/services/retaining-walls", "/services/landscape"] },
  { town: "Lexington", text: "Lexington homeowners invest in premium outdoor living spaces — outdoor kitchens, fire features, and large-format paver patios. The town's larger lot sizes allow for expansive hardscape projects, and homeowners here appreciate quality materials and craftsmanship.", links: ["/services/outdoor-living", "/services/paver-patios"] },
  { town: "Belmont", text: "Belmont's steep hills and established neighborhoods keep us busy with retaining wall projects, drainage solutions, and front entry walkway replacements. Proper grading and water management are essential for Belmont properties.", links: ["/services/retaining-walls", "/services/french-drain"] },
  { town: "Cambridge", text: "Cambridge projects often involve historic brick repair, foundation stone veneer, and compact backyard patio installations. Working in Cambridge requires careful attention to parking, access, and neighborhood considerations — all part of our standard planning process.", links: ["/services/brick", "/services/paver-patios"] },
  { town: "Somerville", text: "Somerville's urban density presents unique hardscape challenges that we handle routinely — tight access, small footprint patios, brick repair on row houses, and creative use of limited outdoor space. Our experience in dense neighborhoods makes us a good fit for Somerville projects.", links: ["/services/repair", "/services/paver-patios"] },
  { town: "Peabody", text: "We serve Peabody homeowners with paver patios, walkways, and retaining walls. Peabody's North Shore location means properties experience the full force of coastal New England weather — our climate-engineered construction methods are especially important here.", links: ["/services/paver-patios", "/services/retaining-walls"] },
  { town: "Danvers", text: "Danvers properties range from historic village homes to newer subdivisions, and we handle hardscape projects across the full spectrum. Paver patios, walkway installations, and outdoor living spaces are our most requested services in Danvers.", links: ["/services/walkways", "/services/outdoor-living"] },
  { town: "North Reading", text: "North Reading's rural-suburban character means larger lots and bigger project scopes. We regularly build multi-element hardscape projects in North Reading — patios with fire pits, retaining walls with terraced gardens, and driveway upgrades.", links: ["/services/fire-pits", "/services/driveways"] },
  { town: "Wilmington", text: "Located along Route 93, Wilmington is well within our service area. We provide paver patio installation, fence installation, and sod and lawn restoration for Wilmington homeowners. The town's newer construction often needs landscape and hardscape finishing.", links: ["/services/fence", "/services/sod-grass"] },
];

const fullTownList = {
  "North Shore": ["Wakefield", "Melrose", "Stoneham", "Saugus", "Lynnfield", "Peabody", "Danvers", "Beverly", "Salem", "Marblehead", "Swampscott", "Lynn", "Nahant"],
  "Greater Boston": ["Medford", "Malden", "Everett", "Revere", "Somerville", "Cambridge", "Arlington", "Brookline", "Boston", "Winthrop"],
  "MetroWest": ["Lexington", "Waltham", "Belmont", "Newton", "Watertown", "Needham", "Wellesley", "Natick", "Framingham", "Weston", "Wayland", "Sudbury"],
  "North / Northwest": ["Woburn", "Winchester", "Burlington", "Wilmington", "North Reading", "Reading", "Billerica", "Tewksbury", "Andover", "North Andover", "Chelmsford", "Bedford", "Lincoln", "Concord", "Acton", "Lowell"],
};

const ServiceAreas = () => (
  <>
    <SEOHead
      title="Service Areas | New England Pavers & Stone — Wakefield, MA"
      description="New England Pavers & Stone serves 50+ towns across Greater Boston from our Wakefield, MA base. Free on-site estimates. Call (617) 697-3456."
      breadcrumbs={[
        { name: "Home", url: BASE_URL },
        { name: "Service Areas", url: `${BASE_URL}/service-areas` },
      ]}
      canonical={`${BASE_URL}/service-areas`}
    />

    <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
      <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">AREAS WE SERVE</div>
      <h1 className="font-display text-[clamp(36px,7vw,90px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">MASONRY &amp;<br />HARDSCAPE SERVICES<br />ACROSS <span className="text-accent">GREATER BOSTON</span></h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Based in Wakefield, MA — proudly serving homeowners across the North Shore, Greater Boston, MetroWest, and the Merrimack Valley.</p>
    </section>

    <Stripe />

    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-6 border-b-[3px] border-charcoal pb-4">BASED IN WAKEFIELD, MA — SERVING COMMUNITIES WITHIN 30 MILES</h2>
      <div className="max-w-[720px] text-base leading-[1.8] text-mid mb-12">
        <p className="mb-4">New England Pavers &amp; Stone is centrally located in Wakefield, Massachusetts with direct access to Routes 93, 95, 128, and Route 1. This puts us within a 30-minute drive of most communities across the North Shore, Greater Boston, MetroWest, and the southern Merrimack Valley.</p>
        <p className="mb-4">We provide the same quality of work regardless of distance. Our crew drives to your property for a free on-site consultation, and our pricing does not include travel surcharges within our service radius. Every homeowner gets the same attention, the same materials, and the same construction standards.</p>
        <p>The types of projects we build vary by area. Pool patios and outdoor kitchens are popular in Lynnfield and Winchester. Retaining walls are in high demand across the hilly neighborhoods of Arlington, Belmont, and Stoneham. Front walkway replacements and chimney repairs are common in the older homes of Melrose, Medford, and Cambridge. Whatever your community, whatever your project, our experience across 500+ installations means we have likely built something similar nearby.</p>
      </div>
    </section>

    {/* Town-by-Town Content */}
    <section className="px-5 py-16 md:px-12 md:py-20">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">TOWN-BY-TOWN SERVICE COVERAGE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
        {townBlocks.map((tb) => (
          <div key={tb.town} className="p-8 bg-mid">
            <h3 className="font-display text-[22px] tracking-[1px] text-white mb-3">MASONRY &amp; HARDSCAPE IN {tb.town.toUpperCase()}, MA</h3>
            <p className="text-sm leading-relaxed text-off mb-3">{tb.text}</p>
            <div className="flex gap-3 flex-wrap">
              {tb.links.map((link) => {
                const serviceName = link.replace("/services/", "").replace(/-/g, " ");
                return (
                  <Link key={link} to={link} className="text-xs text-accent no-underline tracking-[1px] uppercase hover:text-accent-hover transition-colors">
                    {serviceName} →
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Stripe />

    {/* Full Town List */}
    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">COMPLETE SERVICE AREA</h2>
      {Object.entries(fullTownList).map(([region, towns]) => (
        <div key={region} className="mb-8">
          <h3 className="font-display text-lg tracking-[1px] mb-3">{region.toUpperCase()}</h3>
          <div className="flex flex-wrap gap-2">
            {towns.map((t) => (
              <span key={t} className="px-3 py-1.5 bg-white text-mid text-xs tracking-[1px] uppercase">{t}</span>
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm text-mid mt-6">Not sure if you are in our service area? Call <a href="tel:6176973456" className="text-accent no-underline font-semibold">(617) 697-3456</a> — if we can get there, we will.</p>
    </section>

    <CTABanner headline="IN OUR SERVICE AREA?" />
  </>
);

export default ServiceAreas;
