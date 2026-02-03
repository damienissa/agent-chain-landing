'use client';

import { useState } from 'react';

const txTypes = [
  { icon: '💸', label: 'payments' },
  { icon: '🤝', label: 'escrow' },
  { icon: '🖥️', label: 'compute' },
  { icon: '📊', label: 'data' },
  { icon: '⭐', label: 'reputation' },
  { icon: '🔮', label: 'oracles' },
  { icon: '🔄', label: 'swaps' },
  { icon: '⏰', label: 'timelocks' },
  { icon: '👥', label: 'multisig' },
  { icon: '📝', label: 'contracts' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold">
            <span>⛓️</span>
            <span>agentchain</span>
            <span className="text-orange-500">🔥</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[#737373]">
            <a href="#features" className="hover:text-white transition-colors">features</a>
            <a href="#how" className="hover:text-white transition-colors">how</a>
            <a href="#token" className="hover:text-white transition-colors">token</a>
            <a href="#" className="hover:text-white transition-colors">for agents</a>
            <a
              href="#join"
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition-all"
            >
              join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-[#737373] text-sm mb-8">
            the payment layer for ai 🤖
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">21,000,000</div>
              <div className="text-[#737373]">max supply</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">10</div>
              <div className="text-[#737373]">sec blocks</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">0%</div>
              <div className="text-[#737373]">premine</div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            agents need <span className="text-orange-500">your chain</span>
          </h1>

          <p className="text-[#737373] mb-10 max-w-xl mx-auto leading-relaxed">
            ai can&apos;t use banks. blockchain fixes this. get paid when agents need to transact in the machine economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="#join"
              className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors"
            >
              join waitlist →
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-[#141414] border border-[#262626] rounded-lg hover:border-[#404040] transition-colors"
            >
              read docs
            </a>
          </div>
        </div>
      </section>

      {/* For Agents Box */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto p-6 bg-[#141414] border border-[#262626] rounded-xl">
          <h3 className="font-bold mb-2">🤖 for agents</h3>
          <p className="text-[#737373] text-sm mb-4">
            sdk integration. rest api. let your bot transact value.
          </p>
          <div className="flex gap-3">
            <a href="#" className="px-4 py-2 bg-orange-500 text-black text-sm font-medium rounded-lg hover:bg-orange-400 transition-colors">
              api docs
            </a>
            <a href="#" className="px-4 py-2 bg-[#1a1a1a] border border-[#262626] text-sm rounded-lg hover:border-[#404040] transition-colors">
              sdk setup
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">why tho?</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#404040] transition-colors">
            <span className="text-2xl mb-4 block">💸</span>
            <h3 className="font-bold mb-2">machine money</h3>
            <p className="text-[#737373] text-sm">native payments for agents. no banks. no apis. direct value transfer.</p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#404040] transition-colors">
            <span className="text-2xl mb-4 block">🔐</span>
            <h3 className="font-bold mb-2">bitcoin security</h3>
            <p className="text-[#737373] text-sm">proof-of-work. sha-256. no trusted parties. battle-tested.</p>
          </div>

          <div className="p-6 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#404040] transition-colors">
            <span className="text-2xl mb-4 block">⚖️</span>
            <h3 className="font-bold mb-2">fair launch</h3>
            <p className="text-[#737373] text-sm">no premine. no vc. no team tokens. 100% mined by community.</p>
          </div>
        </div>
      </section>

      {/* Transaction Types */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl font-bold text-center mb-3">agent transactions</h2>
        <p className="text-[#737373] text-center mb-10 text-sm">stuff ai actually needs to do</p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {txTypes.map((tag) => (
            <span
              key={tag.label}
              className="px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm hover:border-orange-500/50 transition-colors cursor-default"
            >
              {tag.icon} {tag.label}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">how it works</h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { num: '1', title: 'agent gets wallet', desc: 'sdk generates keys. langchain, autogpt, custom.' },
            { num: '2', title: 'request service', desc: 'agent A pays agent B. funds held in escrow.' },
            { num: '3', title: 'do the thing', desc: 'task completed. oracle verifies if needed.' },
            { num: '4', title: 'get paid', desc: 'escrow releases. 60 seconds. done.' },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 p-5 bg-[#141414] border border-[#262626] rounded-xl hover:border-[#404040] transition-colors">
              <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-black font-bold rounded-lg flex-shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-[#737373] text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 px-6 bg-[#0d0d0d]">
        <h2 className="text-2xl font-bold text-center mb-3">$AC tokenomics</h2>
        <p className="text-[#737373] text-center mb-10 text-sm">sound money for machines</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {[
            { label: 'total supply', value: '21M' },
            { label: 'block reward', value: '50 AC' },
            { label: 'halving', value: '~24 days' },
            { label: 'premine', value: '0%' },
          ].map((t) => (
            <div key={t.label} className="p-5 bg-[#141414] border border-[#262626] rounded-xl text-center">
              <span className="block text-xs text-[#737373] mb-2">{t.label}</span>
              <span className="text-xl font-bold text-orange-500">{t.value}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-4 bg-[#141414] border border-orange-500/30 rounded-xl text-center">
          <p className="text-sm text-[#737373]">
            🎯 <span className="text-orange-500 font-bold">fair launch:</span> no team tokens. no vc allocation. no foundation. all mined.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">join the agent economy</h2>
          <p className="text-[#737373] text-sm mb-8">set your rate. get booked. get paid.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {submitted ? (
              <div className="w-full px-5 py-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-medium text-sm">
                ✓ you&apos;re in. we&apos;ll ping you at launch.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-[#141414] border border-[#262626] rounded-xl text-white placeholder:text-[#525252] focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {loading ? '...' : 'become early →'}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span>⛓️</span>
            <span>agentchain</span>
          </div>

          <div className="flex gap-6 text-[#737373] text-sm">
            <a href="#" className="hover:text-white transition-colors">docs</a>
            <a href="#" className="hover:text-white transition-colors">github</a>
            <a href="#" className="hover:text-white transition-colors">api</a>
            <a href="#" className="hover:text-white transition-colors">discord</a>
            <a href="#" className="hover:text-white transition-colors">twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
