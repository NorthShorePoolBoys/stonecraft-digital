import { useState } from "react";
import { ServiceData } from "@/data/services";

const FAQSection = ({ service }: { service: ServiceData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
  );
};

export default FAQSection;
