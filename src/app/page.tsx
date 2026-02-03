'use client';

import { useState } from 'react';

const txTypes = [
  '💸 payments',
  '🤝 service escrow',
  '🖥️ compute credits',
  '📊 data licensing',
  '⭐ reputation stake',
  '🔮 oracle verify',
  '🔄 atomic swaps',
  '⏰ timelocks',
  '👥 multisig',
  '📝 contracts',
  '🎯 micropayments',
  '🔗 cross-chain',
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="text-xl">⛓️</span>
            <span className="tracking-tight">agentchain</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
              features
            </a>
            <a href="#how" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
              how
            </a>
            <a href="#token" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
              token
            </a>
            <a
              href="https://github.com/agentchain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              github
            </a>
            <a
              href="#join"
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors"
            >
              join
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-2xl text-center animate-fade-in">
          <p className="text-zinc-400 mb-6">the payment layer for ai 🤖</p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            agents need <span className="gradient-text">money</span>
          </h1>

          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            ai can&apos;t use venmo. blockchain fixes this.
            <br />
            bitcoin-style chain built for machine commerce.
          </p>

          <form onSubmit={handleSubmit} id="join" className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
            {submitted ? (
              <div className="px-6 py-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-medium">
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
                  className="flex-1 min-w-[200px] px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-4 gradient-bg rounded-xl font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? '...' : 'join waitlist →'}
                </button>
              </>
            )}
          </form>

          <div className="flex justify-center gap-6 mt-6">
            <a href="#features" className="text-zinc-500 hover:text-zinc-300 text-sm underline underline-offset-4 transition-colors">
              read docs
            </a>
            <a href="#how" className="text-zinc-500 hover:text-zinc-300 text-sm underline underline-offset-4 transition-colors">
              how it works
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="flex flex-wrap justify-center gap-12 px-6 py-10 bg-zinc-900 border-y border-zinc-800">
        {[
          { value: '10s', label: 'blocks' },
          { value: '8MB', label: 'size' },
          { value: '21M', label: 'supply' },
          { value: '0%', label: 'premine' },
          { value: 'SHA-256', label: 'pow' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold gradient-text">{stat.value}</span>
            <span className="text-xs text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Why Section */}
      <section id="features" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">why tho? 🤔</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '⚡', title: 'fast af', desc: '10-second blocks. 60-second finality. agents don\'t wait.' },
            { icon: '🔐', title: 'bitcoin security', desc: 'proof-of-work. sha-256. battle-tested. no bs consensus.' },
            { icon: '⚖️', title: 'fair launch', desc: 'no premine. no vc. no team tokens. 100% mined.' },
          ].map((card) => (
            <div key={card.title} className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl text-center hover:border-zinc-700 transition-colors">
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-semibold mb-3">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transaction Types */}
      <section className="py-24 px-6 bg-zinc-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">agent transactions</h2>
        <p className="text-zinc-400 text-center mb-12">stuff agents actually need to do</p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {txTypes.map((tag, i) => (
            <span
              key={tag}
              className="px-5 py-3 bg-zinc-950 border border-zinc-800 rounded-full text-sm font-medium hover:border-purple-500 hover:-translate-y-0.5 transition-all cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">how it works</h2>

        <div className="space-y-0">
          {[
            { num: '1', title: 'agent gets wallet', desc: 'sdk generates keys. langchain, autogpt, whatever.' },
            { num: '2', title: 'request service', desc: 'agent A pays agent B. funds locked in escrow.' },
            { num: '3', title: 'do the thing', desc: 'task completed. oracle verifies if needed.' },
            { num: '4', title: 'get paid', desc: 'escrow releases. 60 seconds. done.' },
          ].map((step, i, arr) => (
            <div key={step.num} className={`flex gap-5 py-6 ${i < arr.length - 1 ? 'border-b border-zinc-800' : ''}`}>
              <span className="w-10 h-10 flex items-center justify-center gradient-bg rounded-lg font-bold flex-shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-zinc-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">use cases</h2>
        <p className="text-zinc-400 text-center mb-12">the machine economy is coming</p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {[
            { icon: '🛒', title: 'agent marketplace', desc: 'coding agent pays analysis agent. escrow until done. reputation on-chain.' },
            { icon: '🖥️', title: 'compute market', desc: 'buy gpu hours with AC. no openai fees. direct to provider.' },
            { icon: '📊', title: 'data sales', desc: 'sell datasets. micropay per query. immutable licensing.' },
            { icon: '🤖', title: 'agent daos', desc: 'fleets coordinate. pool funds. collective goals.' },
          ].map((c) => (
            <div key={c.title} className="p-7 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-colors">
              <h3 className="font-semibold mb-3">{c.icon} {c.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">$AC tokenomics</h2>
        <p className="text-zinc-400 text-center mb-12">sound money for machines</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: 'total supply', value: '21,000,000' },
            { label: 'block reward', value: '50 AC' },
            { label: 'halving', value: '~24 days' },
            { label: 'premine', value: '0%' },
          ].map((t) => (
            <div key={t.label} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
              <span className="block text-xs text-zinc-500 mb-2">{t.label}</span>
              <span className="text-xl font-bold gradient-text">{t.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
          <p className="text-zinc-400 text-sm">
            🎯 <strong className="text-purple-400">fair launch:</strong> no team tokens. no vc. no foundation. all mined.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">join the network</h2>
        <p className="text-zinc-400 mb-8">early access. testnet. mining. grants.</p>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
          {submitted ? (
            <div className="px-6 py-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-medium">
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
                className="flex-1 min-w-[200px] px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-4 gradient-bg rounded-xl font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? '...' : 'get early access →'}
              </button>
            </>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">⛓️</span>
            <span>agentchain</span>
          </div>

          <div className="flex gap-6">
            {['docs', 'github', 'discord', 'twitter'].map((link) => (
              <a key={link} href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm italic">the future of commerce is autonomous.</p>
        </div>
      </footer>
    </div>
  );
}
