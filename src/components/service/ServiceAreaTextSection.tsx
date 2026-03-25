import { ServiceData } from "@/data/services";

const ServiceAreaTextSection = ({ service }: { service: ServiceData }) => (
  <section className="px-5 py-10 md:px-12 md:py-16">
    <h2 className="font-display text-[24px] text-white tracking-[2px] mb-4">{service.name.toUpperCase()} IN WAKEFIELD, MA &amp; SURROUNDING COMMUNITIES</h2>
    <p className="text-sm leading-relaxed text-off max-w-[720px]">{service.serviceAreaText}</p>
  </section>
);

export default ServiceAreaTextSection;
