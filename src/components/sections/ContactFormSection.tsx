import React, { useState } from 'react';
import Image from 'next/image';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: 'Under ₹10,000',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Web Development',
        budget: 'Under ₹10,000',
        details: ''
      });
    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Something went wrong. Please try again or email us directly.');
      }
    }
  };

  return (
    <main className="pt-32 pb-20 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Editorial Left Column */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
            05 // CONTACT
          </span>
          <h1 className="font-display text-4xl md:text-7xl font-extrabold text-brand-off-white leading-[0.95]">
            LET’S MOVE <br />
            <span className="text-brand-orange">FORWARD.</span>
          </h1>
          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
            Have an idea? Need a website? Want more people to find your business? Tell us what’s next.
          </p>
        </div>

        {/* Secondary Logo Visual Highlight */}
        <div className="mt-12 p-8 border border-brand-off-white/10 rounded-2xl bg-brand-near-black/80 flex flex-col gap-4">
          <Image
            src="/assets/logo-secondary.png"
            alt="mvfrwd secondary logo"
            width={140}
            height={50}
            className="h-8 w-auto object-contain self-start"
          />
          <p className="text-xs font-mono text-brand-muted">
            DIRECT INQUIRIES: <br />
            <a href="mailto:mvfrwdco@gmail.com" className="text-brand-off-white hover:text-brand-orange font-bold transition-colors">
              mvfrwdco@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Structured Contact Form Container */}
      <div className="lg:col-span-7 border border-brand-off-white/10 p-8 md:p-10 rounded-3xl bg-brand-near-black/60 backdrop-blur-md relative">
        {status === 'success' ? (
          <div className="flex flex-col items-start justify-center gap-6 py-12">
            <span className="text-xs font-mono text-brand-orange border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 rounded-full font-bold">
              MESSAGE SENT
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-off-white">
              THANKS FOR REACHING OUT.
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed max-w-md">
              We have received your project details and will review them immediately. Expect a response from our team within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 border border-brand-off-white/20 hover:border-brand-off-white text-brand-off-white px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-widest transition-colors duration-200"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                disabled={status === 'submitting'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  disabled={status === 'submitting'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                  PHONE
                </label>
                <input
                  type="tel"
                  disabled={status === 'submitting'}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                  REQUIRED CAPABILITY
                </label>
                <select
                  disabled={status === 'submitting'}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-brand-near-black border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange disabled:opacity-50"
                >
                  <option>Web Development</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Branding & Creative</option>
                  <option>AI & Automation</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                  PROJECT BUDGET
                </label>
                <select
                  disabled={status === 'submitting'}
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-brand-near-black border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange disabled:opacity-50"
                >
                  <option>Under ₹10,000</option>
                  <option>₹10,000–₹25,000</option>
                  <option>₹25,000–₹50,000</option>
                  <option>₹50,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider uppercase">
                PROJECT DETAILS *
              </label>
              <textarea
                rows={4}
                required
                disabled={status === 'submitting'}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50"
                placeholder="Tell us about your objectives and timeline..."
              />
            </div>

            {status === 'error' && (
              <div className="p-4 border border-red-500/30 bg-red-500/10 rounded-xl text-red-400 text-xs font-mono">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-orange hover:bg-brand-orange-alt text-white font-mono font-bold text-xs tracking-widest py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{status === 'submitting' ? 'SENDING INQUIRY...' : 'START THE CONVERSATION →'}</span>
            </button>
          </form>
        )}
      </div>
    </main>
  );
};