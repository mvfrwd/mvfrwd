export const BrandStatementSection = () => {
  return (
    <section className="py-12 border-t border-brand-off-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono text-brand-orange tracking-widest">01 // BRAND</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white leading-tight">
            WE DON&apos;T JUST BUILD. WE MOVE FORWARD.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
            mvfrwd. is built on a simple belief: brands deserve more than templates, generic strategies, or empty promises. We engineer digital systems that are fast, functional, and built to scale.
          </p>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
            From the first line of code to the final growth report, we operate with clarity, precision, and an obsession for real outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
