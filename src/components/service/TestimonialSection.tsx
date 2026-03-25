import { ServiceData } from "@/data/services";

const TestimonialSection = ({ service }: { service: ServiceData }) => {
  if (!service.testimonialQuote) return null;

  return (
    <section className="px-5 py-16 md:px-12 md:py-20">
      <div className="max-w-[800px] relative">
        <div className="font-display text-[120px] text-accent/20 leading-none absolute -top-8 -left-4 select-none">"</div>
        <blockquote className="relative pl-8 border-l-4 border-accent">
          <p className="text-white text-[clamp(18px,2.5vw,24px)] leading-relaxed font-light italic mb-6">
            {service.testimonialQuote.text}
          </p>
          <footer className="text-off text-sm tracking-[1px]">
            <span className="text-accent font-display">—</span> {service.testimonialQuote.author}, {service.testimonialQuote.location}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;
