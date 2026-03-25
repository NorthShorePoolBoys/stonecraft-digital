import { useParams, Navigate } from "react-router-dom";
import { Fragment } from "react";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import AreasSection from "@/components/AreasSection";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import HeroSection from "@/components/service/HeroSection";
import IntroSection from "@/components/service/IntroSection";
import FeaturesSection from "@/components/service/FeaturesSection";
import IncludedSection from "@/components/service/IncludedSection";
import BenefitsSection from "@/components/service/BenefitsSection";
import ProcessSection from "@/components/service/ProcessSection";
import WhyUsSection from "@/components/service/WhyUsSection";
import FAQSection from "@/components/service/FAQSection";
import RelatedSection from "@/components/service/RelatedSection";
import ServiceAreaTextSection from "@/components/service/ServiceAreaTextSection";
import BeforeAfterSection from "@/components/service/BeforeAfterSection";
import MaterialsSection from "@/components/service/MaterialsSection";
import TestimonialSection from "@/components/service/TestimonialSection";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const DEFAULT_SECTIONS = ["hero", "intro", "features", "included", "benefits", "process", "whyUs", "faq", "related", "serviceArea"];

// Sections that get a Stripe divider BEFORE them
const STRIPE_BEFORE = new Set(["included", "benefits", "faq", "related", "materials", "beforeAfter"]);

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const sectionOrder = service.sections || DEFAULT_SECTIONS;

  const sectionMap: Record<string, React.ReactNode> = {
    hero: <HeroSection service={service} />,
    intro: <IntroSection service={service} />,
    features: <FeaturesSection service={service} />,
    included: <IncludedSection service={service} />,
    benefits: <BenefitsSection service={service} />,
    process: <ProcessSection service={service} />,
    whyUs: <WhyUsSection service={service} />,
    faq: <FAQSection service={service} />,
    related: <RelatedSection service={service} />,
    serviceArea: <ServiceAreaTextSection service={service} />,
    beforeAfter: <BeforeAfterSection service={service} />,
    materials: <MaterialsSection service={service} />,
    testimonial: <TestimonialSection service={service} />,
  };

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

      {sectionOrder.map((key, i) => {
        const section = sectionMap[key];
        if (!section) return null;
        const showStripe = STRIPE_BEFORE.has(key) && i > 0;
        return (
          <Fragment key={key}>
            {showStripe && <Stripe />}
            {section}
          </Fragment>
        );
      })}

      <AreasSection />
      <CTABanner headline={service.ctaHeadline} />
    </>
  );
};

export default ServicePage;
