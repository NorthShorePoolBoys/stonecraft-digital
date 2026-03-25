import { Link } from "react-router-dom";

const areas = ["Melrose", "Stoneham", "Reading", "Saugus", "Lynnfield", "Woburn", "Winchester", "Burlington", "Medford", "Malden"];

const AreasSection = () => (
  <section className="px-5 py-10 md:px-12 md:py-16">
    <h3 className="font-display text-[28px] text-white tracking-[2px] mb-5">
      SERVING <span className="text-accent">WAKEFIELD</span> &amp; SURROUNDING AREAS
    </h3>
    <div className="flex flex-wrap gap-2">
      {areas.map((a) => (
        <Link key={a} to="/service-areas" className="px-3.5 py-1.5 border border-mid text-off no-underline text-xs tracking-[1px] uppercase transition-all hover:border-accent hover:text-white hover:bg-accent/10">
          {a}
        </Link>
      ))}
    </div>
  </section>
);

export default AreasSection;
