import { Link } from "react-router-dom";
import { ServiceData, services } from "@/data/services";

const RelatedSection = ({ service }: { service: ServiceData }) => {
  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">RELATED SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
        {relatedServices.map((rs) => (
          <Link key={rs.slug} to={`/services/${rs.slug}`} className="group p-8 bg-white transition-all relative overflow-hidden no-underline hover:bg-charcoal">
            <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
            <h3 className="font-display text-lg tracking-[1px] text-charcoal group-hover:text-white transition-colors mb-2">{rs.name.toUpperCase()}</h3>
            <p className="text-xs leading-relaxed text-off">{rs.shortDescription.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedSection;
