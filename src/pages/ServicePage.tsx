import { useParams, Navigate, Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { useState } from "react";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <Navigate to="/" replace />;

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        breadcrumbs={[
          { name: "Home", url: BASE_URL },
          { name: "Services", url: `${BASE_URL}/services` },
          { name: service.name, url: `${BASE_URL}/services/${service.slug}` },
        ]}
        faqItems={service.faqItems}
        serviceSchema={{ name: service.name, description: service.metaDescription }}
        canonical={`${BASE_URL}/services/${service.slug}`}
      />

      {/* Hero */}
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

      {/* Intro & Features */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">PROFESSIONAL {service.name.toUpperCase()} FOR GREATER BOSTON HOMEOWNERS</h2>
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

      {/* What's Included */}
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

      <Stripe />

      {/* Benefits */}
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

      {/* Process */}
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

      <Stripe />

      {/* Why Choose Us */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-6 border-b-[3px] border-charcoal pb-4">WHY CHOOSE NEW ENGLAND PAVERS &amp; STONE FOR YOUR {service.name.toUpperCase()}</h2>
        <p className="max-w-[720px] text-base leading-[1.8] text-mid">{service.whyChooseUs}</p>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 md:px-12 md:py-20">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">FREQUENTLY ASKED QUESTIONS ABOUT {service.name.toUpperCase()}</h2>
        <div className="max-w-[800px]">
          {service.faqItems.map((faq, i) => (
            <div key={i} className="border-b border-mid">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left py-5 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
              >
                <span className="text-white text-[15px] font-medium leading-snug">{faq.question}</span>
                <span className="text-accent text-xl shrink-0 font-display">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="pb-5 text-sm leading-relaxed text-off pr-8">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Stripe />

      {/* Related Services */}
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

      {/* Service Area Text */}
      <section className="px-5 py-10 md:px-12 md:py-16">
        <h2 className="font-display text-[24px] text-white tracking-[2px] mb-4">{service.name.toUpperCase()} IN WAKEFIELD, MA &amp; SURROUNDING COMMUNITIES</h2>
        <p className="text-sm leading-relaxed text-off max-w-[720px]">{service.serviceAreaText}</p>
      </section>

      <AreasSection />
      <CTABanner headline={service.ctaHeadline} />
    </>
  );
};

export default ServicePage;
