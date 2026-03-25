import { ServiceData } from "@/data/services";

const BeforeAfterSection = ({ service }: { service: ServiceData }) => {
  if (!service.beforeAfterImages || service.beforeAfterImages.length === 0) return null;

  return (
    <section className="px-5 py-16 md:px-12 md:py-20">
      <h2 className="font-display text-[clamp(28px,4vw,48px)] text-white tracking-[2px] mb-10 border-b-[3px] border-accent pb-4">BEFORE &amp; AFTER</h2>
      <div className="grid grid-cols-1 gap-10">
        {service.beforeAfterImages.map((pair, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
              <div className="relative bg-mid min-h-[280px] overflow-hidden">
                {pair.before ? (
                  <img src={pair.before} alt={`Before: ${pair.caption}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-off text-xs tracking-[2px] uppercase font-display">[Before Photo]</div>
                )}
                <div className="absolute top-4 left-4 bg-charcoal/80 px-3 py-1 text-xs text-white tracking-[2px] uppercase font-display">Before</div>
              </div>
              <div className="relative bg-mid min-h-[280px] overflow-hidden">
                {pair.after ? (
                  <img src={pair.after} alt={`After: ${pair.caption}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-off text-xs tracking-[2px] uppercase font-display">[After Photo]</div>
                )}
                <div className="absolute top-4 left-4 bg-accent/90 px-3 py-1 text-xs text-white tracking-[2px] uppercase font-display">After</div>
              </div>
            </div>
            <p className="text-off text-sm mt-3 tracking-[1px]">{pair.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
