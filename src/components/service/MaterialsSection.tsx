import { ServiceData } from "@/data/services";

const MaterialsSection = ({ service }: { service: ServiceData }) => {
  if (!service.materialComparison || service.materialComparison.length === 0) return null;

  return (
    <section className="px-5 py-16 md:px-12 md:py-20 bg-light text-charcoal">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] tracking-[2px] mb-10 border-b-[3px] border-charcoal pb-4">MATERIAL COMPARISON</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
        {service.materialComparison.map((mat) => (
          <div key={mat.name} className="bg-white p-8">
            <h3 className="font-display text-[22px] tracking-[1px] mb-4 text-charcoal">{mat.name.toUpperCase()}</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <div>
                <span className="font-display text-xs tracking-[2px] text-accent uppercase">Pros</span>
                <p className="text-mid mt-1">{mat.pros}</p>
              </div>
              <div>
                <span className="font-display text-xs tracking-[2px] text-charcoal uppercase">Cons</span>
                <p className="text-mid mt-1">{mat.cons}</p>
              </div>
              <div className="pt-2 border-t border-concrete">
                <span className="font-display text-xs tracking-[2px] text-accent uppercase">Best For</span>
                <p className="text-mid mt-1">{mat.best_for}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialsSection;
