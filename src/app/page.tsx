'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold">
            <span>⛓️</span>
            <span>agentchain</span>
            <span className="text-orange-500">🔥</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">features</a>
            <a href="#how" className="hover:text-foreground transition-colors">how</a>
            <a href="#token" className="hover:text-foreground transition-colors">token</a>
            <a href="#" className="hover:text-foreground transition-colors">for agents</a>
            <Button variant="outline" size="sm" asChild>
              <a href="#join">join waitlist</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2">
            the payment layer for ai 🤖
          </Badge>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">21,000,000</div>
              <div className="text-muted-foreground">max supply</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">10</div>
              <div className="text-muted-foreground">sec blocks</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 font-bold text-lg">0%</div>
              <div className="text-muted-foreground">premine</div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            agents need <span className="text-orange-500">your chain</span>
          </h1>

          <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            ai can&apos;t use banks. blockchain fixes this. get paid when agents need to transact in the machine economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-400 text-black" asChild>
              <a href="#join">join waitlist →</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#features">read docs</a>
            </Button>
          </div>
        </div>
      </section>

      {/* For Agents Box */}
      <section className="px-6 pb-20">
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-bold mb-2">🤖 for agents</h3>
            <p className="text-muted-foreground text-sm mb-4">
              sdk integration. rest api. let your bot transact value.
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-400 text-black">
                api docs
              </Button>
              <Button variant="secondary" size="sm">
                sdk setup
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why Section */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">why tho?</h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: '💸', title: 'machine money', desc: 'native payments for agents. no banks. no apis. direct value transfer.' },
            { icon: '🔐', title: 'bitcoin security', desc: 'proof-of-work. sha-256. no trusted parties. battle-tested.' },
            { icon: '⚖️', title: 'fair launch', desc: 'no premine. no vc. no team tokens. 100% mined by community.' },
          ].map((card) => (
            <Card key={card.title} className="hover:border-muted-foreground/50 transition-colors">
              <CardContent className="p-6 text-center">
                <span className="text-2xl mb-4 block">{card.icon}</span>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Transaction Types */}
      <section className="py-20 px-6 bg-card/50">
        <h2 className="text-2xl font-bold text-center mb-3">agent transactions</h2>
        <p className="text-muted-foreground text-center mb-10 text-sm">stuff ai actually needs to do</p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {txTypes.map((tag) => (
            <Badge
              key={tag.label}
              variant="secondary"
              className="px-4 py-2 text-sm cursor-default hover:border-orange-500/50 transition-colors"
            >
              {tag.icon} {tag.label}
            </Badge>
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
            <Card key={step.num} className="hover:border-muted-foreground/50 transition-colors">
              <CardContent className="flex gap-4 p-5">
                <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-black font-bold rounded-lg flex-shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 px-6 bg-card/50">
        <h2 className="text-2xl font-bold text-center mb-3">$AC tokenomics</h2>
        <p className="text-muted-foreground text-center mb-10 text-sm">sound money for machines</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {[
            { label: 'total supply', value: '21M' },
            { label: 'block reward', value: '50 AC' },
            { label: 'halving', value: '~24 days' },
            { label: 'premine', value: '0%' },
          ].map((t) => (
            <Card key={t.label}>
              <CardContent className="p-5 text-center">
                <span className="block text-xs text-muted-foreground mb-2">{t.label}</span>
                <span className="text-xl font-bold text-orange-500">{t.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto border-orange-500/30">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🎯 <span className="text-orange-500 font-bold">fair launch:</span> no team tokens. no vc allocation. no foundation. all mined.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">join the agent economy</h2>
          <p className="text-muted-foreground text-sm mb-8">set your rate. get booked. get paid.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {submitted ? (
              <Card className="w-full border-green-500/30 bg-green-500/10">
                <CardContent className="p-4 text-green-400 font-medium text-sm">
                  ✓ you&apos;re in. we&apos;ll ping you at launch.
                </CardContent>
              </Card>
            ) : (
              <>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-400 text-black whitespace-nowrap"
                >
                  {loading ? '...' : 'become early →'}
                </Button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span>⛓️</span>
            <span>agentchain</span>
          </div>

          <div className="flex gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-foreground transition-colors">docs</a>
            <a href="#" className="hover:text-foreground transition-colors">github</a>
            <a href="#" className="hover:text-foreground transition-colors">api</a>
            <a href="#" className="hover:text-foreground transition-colors">discord</a>
            <a href="#" className="hover:text-foreground transition-colors">twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
