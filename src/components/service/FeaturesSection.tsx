import { ServiceData } from "@/data/services";

const FeaturesSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
    <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">WHAT SETS OUR {service.name.toUpperCase()} APART</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-12">
      {service.features.map((f) => (
        <div key={f.title} className="group p-8 bg-white transition-all relative overflow-hidden hover:bg-charcoal">
          <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
          <h3 className="font-display text-[22px] tracking-[1px] mb-2 text-charcoal group-hover:text-white transition-colors">{f.title}</h3>
          <p className="text-sm leading-relaxed text-off">{f.description}</p>
        </div>
      ))}
    </div>
    <div className="max-w-[640px] text-[15px] leading-relaxed text-mid p-6 border-l-4 border-accent bg-accent/[.04]">
      {service.processNote}
    </div>
  </section>
);

export default FeaturesSection;
