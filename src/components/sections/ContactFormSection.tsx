'use client';

import React, { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to mvfrwd. We will get back to you within 24 hours.');
  };

  return (
    <section className="py-12 border-t border-brand-off-white/10">
      <div className="flex flex-col gap-6">
        <span className="text-xs font-mono text-brand-orange tracking-widest">05 // CONTACT</span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-off-white">
          LET&apos;S MOVE FORWARD.
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">YOUR NAME *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">EMAIL *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">PHONE</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">COMPANY</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">REQUIRED CAPABILITY</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-brand-near-black border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange"
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
              <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">PROJECT BUDGET</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-brand-near-black border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange"
              >
                <option>Under ?10,000</option>
                <option>?10,000�?25,000</option>
                <option>?25,000�?50,000</option>
                <option>?50,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-brand-muted mb-2 tracking-wider">PROJECT DETAILS</label>
            <textarea
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full bg-white/5 border border-brand-off-white/10 rounded-xl px-4 py-3.5 text-sm text-brand-off-white focus:outline-none focus:border-brand-orange transition-colors"
              placeholder="Tell us about your objectives and timeline..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-orange hover:bg-brand-orange-alt text-white font-mono font-bold text-xs tracking-widest py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01]"
          >
            START THE CONVERSATION ?
          </button>
        </form>
      </div>
    </section>
  );
};
