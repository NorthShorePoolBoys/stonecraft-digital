import { ServiceData } from "@/data/services";

const IntroSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
    <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">PROFESSIONAL {service.name.toUpperCase()} FOR GREATER BOSTON HOMEOWNERS</h2>
    <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-12">{service.intro}</p>
  </section>
);

export default IntroSection;
