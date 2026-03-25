import { useState } from "react";
import { Link } from "react-router-dom";
import Stripe from "@/components/Stripe";
import CTABanner from "@/components/CTABanner";
import { services } from "@/data/services";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", service: "", city: "", details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="pt-[120px] pb-16 px-5 md:pt-[160px] md:pb-20 md:px-12">
        <div className="font-display text-sm tracking-[6px] text-accent mb-4 animate-slide-up">GET IN TOUCH</div>
        <h1 className="font-display text-[clamp(48px,8vw,110px)] text-white leading-[.9] tracking-[1px] mb-5 animate-slide-up delay-1">CONTACT<br /><span className="text-accent">US.</span></h1>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-off font-light animate-slide-up delay-2">Ready for a free estimate? Have a question about your project? Reach out — we respond fast.</p>
      </section>

      <Stripe />

      <div className="pt-16 px-5 pb-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-[32px] text-white tracking-[2px] mb-5">LET'S TALK ABOUT <span className="text-accent">YOUR PROJECT.</span></h3>
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
          </div>
          <div className="bg-light p-8 md:p-10 text-charcoal">
            <h3 className="font-display text-[28px] tracking-[2px] mb-6">REQUEST A FREE ESTIMATE</h3>
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
          </div>
        </div>
      </div>

      <CTABanner headline="PREFER TO CALL?" />
    </>
  );
};

export default Contact;
