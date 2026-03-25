import { ServiceData } from "@/data/services";

const BenefitsSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
    <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">BENEFITS OF {service.name.toUpperCase()} FOR YOUR GREATER BOSTON PROPERTY</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
      {service.benefits.map((b) => (
        <div key={b.title} className="p-8 bg-white">
          <h3 className="font-display text-lg tracking-[1px] mb-2">{b.title.toUpperCase()}</h3>
          <p className="text-sm leading-relaxed text-off">{b.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
