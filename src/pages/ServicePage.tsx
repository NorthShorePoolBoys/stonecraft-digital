import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import { services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <>
      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">NEW ENGLAND PAVERS &amp; STONE · WAKEFIELD, MA</div>
        <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1 whitespace-pre-line">{service.heroTitle}</h1>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">{service.heroSub}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-start mt-7 animate-slide-up delay-3">
          <a href="tel:6176973456" className="font-display text-[28px] text-accent no-underline tracking-[2px] hover:text-accent-hover transition-colors">(617) 697-3456</a>
          <Link to="/contact" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover hover:-translate-y-px transition-all">
            Get Free Estimate →
          </Link>
        </div>
      </section>

      <Stripe />

      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">{service.sectionTitle}</h2>
        <p className="max-w-[720px] text-base leading-[1.8] text-mid mb-12">{service.intro}</p>
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

      <AreasSection />
      <CTABanner headline={service.ctaHeadline} />
    </>
  );
};

export default ServicePage;
