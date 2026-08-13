import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | mvfrwd.',
  description: 'Explore mvfrwd. capabilities in web development, SEO, digital marketing, branding and creative, and AI and automation.',
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <span className="text-xs font-mono text-brand-orange tracking-widest">CAPABILITIES</span>
      <h1 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-tight mt-2 mb-6">
        WHAT WE DO BEST.
      </h1>
      <p className="text-brand-muted text-base md:text-lg max-w-3xl leading-relaxed mb-12">
        From engineered web platforms to precision growth systems, our capabilities are built to move your business forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/40 hover:border-brand-orange/50 transition-colors duration-300">
          <span className="text-xs font-mono text-brand-orange">01</span>
          <h3 className="text-xl font-bold text-brand-off-white mt-2 mb-3">WEB DEVELOPMENT</h3>
          <p className="text-brand-muted text-sm leading-relaxed">Websites and digital experiences built to perform, convert, and represent your brand.</p>
        </div>
        <div className="border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/40 hover:border-brand-orange/50 transition-colors duration-300">
          <span className="text-xs font-mono text-brand-orange">02</span>
          <h3 className="text-xl font-bold text-brand-off-white mt-2 mb-3">SEO</h3>
          <p className="text-brand-muted text-sm leading-relaxed">Make your brand easier to discover when your customers are searching.</p>
        </div>
        <div className="border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/40 hover:border-brand-orange/50 transition-colors duration-300">
          <span className="text-xs font-mono text-brand-orange">03</span>
          <h3 className="text-xl font-bold text-brand-off-white mt-2 mb-3">DIGITAL MARKETING</h3>
          <p className="text-brand-muted text-sm leading-relaxed">Turn attention into engagement, leads, and meaningful growth.</p>
        </div>
        <div className="border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/40 hover:border-brand-orange/50 transition-colors duration-300">
          <span className="text-xs font-mono text-brand-orange">04</span>
          <h3 className="text-xl font-bold text-brand-off-white mt-2 mb-3">BRANDING and CREATIVE</h3>
          <p className="text-brand-muted text-sm leading-relaxed">Create an identity people recognize, remember, and connect with.</p>
        </div>
        <div className="border border-brand-off-white/10 rounded-2xl p-8 bg-brand-near-black/40 hover:border-brand-orange/50 transition-colors duration-300">
          <span className="text-xs font-mono text-brand-orange">05</span>
          <h3 className="text-xl font-bold text-brand-off-white mt-2 mb-3">AI and AUTOMATION</h3>
          <p className="text-brand-muted text-sm leading-relaxed">Use technology to reduce repetitive work and build smarter business systems.</p>
        </div>
      </div>
    </main>
  );
}
