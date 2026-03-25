import { ServiceData } from "@/data/services";

const ProcessSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-16 md:px-12 md:py-20">
    <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">HOW WE HANDLE {service.name.toUpperCase()} PROJECTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
      {service.processSteps.map((p, i) => (
        <div key={p.title} className="p-8 bg-mid">
          <div className="font-display text-[48px] text-accent leading-none mb-3">{String(i + 1).padStart(2, "0")}</div>
          <h3 className="font-display text-lg tracking-[1px] text-white mb-2">{p.title.toUpperCase()}</h3>
          <p className="text-sm leading-relaxed text-off">{p.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessSection;
