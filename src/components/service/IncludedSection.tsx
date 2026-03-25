import { ServiceData } from "@/data/services";

const IncludedSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-16 md:px-12 md:py-20">
    <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">WHAT OUR {service.name.toUpperCase()} INCLUDES</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
      {service.includedDetails.map((d) => (
        <div key={d.title} className="p-8 bg-mid">
          <h3 className="font-display text-[20px] tracking-[1px] text-white mb-3">{d.title}</h3>
          <p className="text-sm leading-relaxed text-off">{d.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default IncludedSection;
