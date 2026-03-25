import { useState } from "react";
import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const contactFaqs = [
  { question: "Is the estimate really free?", answer: "Yes. We provide free on-site estimates for every project. There is no cost, no obligation, and no pressure. We visit your property, discuss your project, take measurements, and deliver a detailed written proposal within 5-7 business days." },
  { question: "How soon can you start my project?", answer: "Our schedule varies by season. During peak season (May through October), we typically book 4-8 weeks out. Smaller projects and repairs can often be scheduled sooner. Contact us early for spring and summer projects — our calendar fills quickly." },
  { question: "Do you offer financing?", answer: "We do not offer in-house financing, but we work with homeowners to structure phased project plans when budget requires it. We can also recommend third-party financing options. Our proposals are detailed enough to support financing applications." },
  { question: "What if I am not sure what I need?", answer: "That is exactly what the free consultation is for. Many homeowners know they want to improve their outdoor space but are not sure where to start. We will visit your property, listen to how you want to use the space, and suggest options that fit your goals and budget." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", service: "", city: "", details: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEOHead
        title="Contact Us | New England Pavers & Stone — Wakefield, MA"
        description="Contact New England Pavers & Stone for free masonry and hardscape estimates in Wakefield, MA and Greater Boston. Call (617) 697-3456 or fill out our form."
        breadcrumbs={[
          { name: "Home", url: BASE_URL },
          { name: "Contact", url: `${BASE_URL}/contact` },
        ]}
        faqItems={contactFaqs}
        canonical={`${BASE_URL}/contact`}
      />

      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">GET IN TOUCH</div>
        <h1 className="font-display text-[clamp(36px,7vw,90px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">CONTACT<br />NEW ENGLAND<br />PAVERS &amp; <span className="text-accent">STONE.</span></h1>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Free estimates for homeowners in Wakefield, MA and across Greater Boston. Call, text, or fill out the form below — we respond fast.</p>
      </section>

      <Stripe />

      <div className="pt-16 px-5 pb-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-[32px] text-white tracking-[2px] mb-5">LET'S TALK ABOUT <span className="text-accent">YOUR PROJECT.</span></h2>
            <p className="text-[15px] leading-relaxed text-off mb-7">The fastest way to get started is to call or text us directly. We typically respond within a few hours and can schedule your free on-site consultation within days.</p>
            {[
              { icon: "📞", title: <a href="tel:6176973456" className="text-white no-underline">(617) 697-3456</a>, sub: "Call or text anytime" },
              { icon: "📍", title: "Wakefield, MA", sub: "Serving Greater Boston & the North Shore" },
              { icon: "🕐", title: "Mon – Sat: 7AM – 6PM", sub: "Emergency calls welcome" },
              { icon: "⚡", title: "Free On-Site Estimates", sub: "Usually scheduled within 3-5 business days" },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-3.5 py-4 border-b border-mid">
                <div className="w-10 h-10 bg-mid flex items-center justify-center text-accent text-base shrink-0">{d.icon}</div>
                <div className="text-sm text-off leading-relaxed">
                  <strong className="block text-white text-[15px]">{d.title}</strong>{d.sub}
                </div>
              </div>
            ))}

            {/* What Happens When You Call */}
            <div className="mt-10">
              <h2 className="font-display text-[24px] text-white tracking-[2px] mb-4">WHAT HAPPENS WHEN YOU CALL</h2>
              <div className="text-[15px] leading-relaxed text-off space-y-3">
                <p>You will have a brief phone conversation about your project — what you are looking for, approximate scope, and timeline. No pressure, no sales pitch.</p>
                <p>We schedule a free on-site visit at your convenience, usually within 3-5 business days. The owner visits your property personally, takes measurements, discusses your vision, and reviews material options.</p>
                <p>Within 5-7 business days of the site visit, you receive a detailed written proposal with material specifications, a scaled layout, and all-inclusive pricing. No surprises, no vague allowances, no change orders.</p>
                <p>You decide on your timeline. No "sign today" tactics, no expiring discounts, no pressure. We earn your business by being the best option — not by rushing you into a decision.</p>
              </div>
            </div>
          </div>
          <div className="bg-light p-8 md:p-10 text-charcoal">
            <h2 className="font-display text-[28px] tracking-[2px] mb-6">REQUEST A FREE ESTIMATE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">First Name *</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">Last Name *</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Smith" required className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">Phone *</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" required className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">Service Interested In</label>
                <select name="service" value={formData.service} onChange={handleChange} className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors">
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">City / Town</label>
                <input name="city" value={formData.city} onChange={handleChange} placeholder="Wakefield, MA" className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] tracking-[1.5px] uppercase font-semibold text-mid">Project Details</label>
                <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Tell us about your project — what you're looking for, approximate size, timeline, etc." className="p-3 border-2 border-gray-300 bg-white font-body text-sm text-charcoal outline-none focus:border-accent transition-colors resize-y min-h-[100px]" />
              </div>
            </div>
            <button type="button" className="w-full py-3.5 px-9 bg-accent text-white border-none font-display text-lg tracking-[2px] cursor-pointer hover:bg-accent-hover transition-all mt-2">
              SUBMIT REQUEST
            </button>
            <p className="text-[11px] text-mid mt-3 text-center">We serve homeowners within approximately 30 miles of Wakefield, MA including Melrose, Reading, Stoneham, Winchester, Woburn, Burlington, Lexington, Arlington, Medford, Saugus, Lynnfield, Peabody, and more. Not sure if you are in our area? Call us — if we can get there, we will.</p>
          </div>
        </div>
      </div>

      {/* Contact FAQ */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
        <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="max-w-[800px]">
          {contactFaqs.map((faq, i) => (
            <div key={i} className="border-b border-mid">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left py-5 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer"
              >
                <span className="text-charcoal text-[15px] font-medium leading-snug">{faq.question}</span>
                <span className="text-accent text-xl shrink-0 font-display">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="pb-5 text-sm leading-relaxed text-mid pr-8">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTABanner headline="PREFER TO CALL?" />
    </>
  );
};

export default Contact;
