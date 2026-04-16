'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Zap, Star, Package, TrendingUp, ShieldCheck, Truck, Clock, Award } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=1200&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1542778151-a1af0dde8d68?w=1200&q=80'

const categories = [
  {
    title: 'Rare Holographics',
    description: 'Shiny, holographic singles from vintage and modern sets',
    href: '/products',
    color: 'from-purple-900/80 to-indigo-900/80',
    icon: Star,
  },
  {
    title: 'Booster Packs',
    description: 'Sealed packs from the latest Pokemon TCG expansions',
    href: '/products',
    color: 'from-yellow-900/80 to-orange-900/80',
    icon: Package,
  },
  {
    title: 'Value Bundles',
    description: 'Curated lots for collectors and players — save big',
    href: '/products',
    color: 'from-blue-900/80 to-cyan-900/80',
    icon: TrendingUp,
  },
]

const trustPoints = [
  { icon: ShieldCheck, title: '100% Authentic', desc: 'Every card hand-verified before shipping' },
  { icon: Truck, title: 'Fast Dispatch', desc: 'Orders ship within 24 hours' },
  { icon: Clock, title: '30-Day Returns', desc: 'No questions asked return policy' },
  { icon: Award, title: 'Top Rated Seller', desc: '4,800+ five-star transactions' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setSubscribed(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#0d1b2e] overflow-hidden min-h-[88vh] flex items-center">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-[120px]" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[80px]" />
        </div>

        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-24 relative z-10">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5">
              <Zap className="h-3.5 w-3.5 text-yellow-400 fill-current" />
              <span className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-semibold">New Cards Just Dropped</span>
            </div>

            <h1 className="font-heading text-[5rem] sm:text-[6.5rem] leading-none text-white tracking-wide">
              COLLECT <span className="text-yellow-400">RARE</span> POKEMON CARDS
            </h1>

            <p className="text-lg text-white/60 max-w-md leading-relaxed">
              Authentic singles, booster packs, and holographic gems — sourced at wholesale prices and delivered fast.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#0d1b2e] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-yellow-300 transition-colors animate-pulse-gold"
                prefetch={true}
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-4 border-t border-white/10">
              <div>
                <p className="font-heading text-3xl text-yellow-400 tracking-wide">4,800+</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">Happy Collectors</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-yellow-400 tracking-wide">1,200+</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">Cards in Stock</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-yellow-400 tracking-wide">24h</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">Dispatch Time</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden holo-card">
              <Image
                src={HERO_IMAGE}
                alt="Pokemon cards collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/40 to-transparent" />
            </div>
            {/* Floating card badge */}
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-[#0d1b2e] px-4 py-3 rounded-xl shadow-xl">
              <p className="text-xs uppercase tracking-widest font-semibold">Top Seller</p>
              <p className="font-heading text-lg tracking-wide leading-none mt-0.5">CHARIZARD EX</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 bg-[#0f2035]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-3">Browse by Type</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-wide">
              FIND YOUR <span className="text-yellow-400">CARDS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(({ title, description, href, color, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
                <div className="absolute inset-0 bg-[#0d1b2e]/30 group-hover:bg-[#0d1b2e]/10 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-yellow-400/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-yellow-400/30">
                    <Icon className="h-5 w-5 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide">{title}</h3>
                  <p className="text-sm text-white/60 mt-1">{description}</p>
                  <div className="flex items-center gap-1 mt-3 text-yellow-400 text-xs font-semibold uppercase tracking-widest">
                    <span>Shop Now</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      {isLoading ? (
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── BRAND STORY ── */}
      <section className="py-20 bg-[#0d1b2e]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative holo-card">
              <Image
                src={LIFESTYLE_IMAGE}
                alt="Pokemon card collection lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/60 to-transparent" />
            </div>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-semibold">Our Mission</p>
              <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-wide leading-none">
                CARDS FOR <span className="text-yellow-400">EVERY</span> TRAINER
              </h2>
              <p className="text-white/60 leading-relaxed">
                We started PokeDeck to make premium Pokemon cards accessible. We buy in bulk and pass the savings straight to you — whether you&apos;re chasing that elusive Charizard, building a competitive deck, or starting your collection from scratch.
              </p>
              <p className="text-white/60 leading-relaxed">
                Every card is checked, sleeved, and shipped with care. We treat your collection like our own.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-yellow-400 text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all"
                prefetch={true}
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-16 bg-[#0f2035] border-y border-yellow-500/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-yellow-400" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-white mb-1">{title}</p>
                <p className="text-xs text-white/40">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-[#0d1b2e]">
        <div className="container-custom max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="h-3.5 w-3.5 text-yellow-400 fill-current" />
            <span className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-semibold">Trainer Alerts</span>
          </div>
          <h2 className="font-heading text-5xl text-white tracking-wide">GET FIRST ACCESS</h2>
          <p className="mt-3 text-white/50 text-sm">
            New drops, restock alerts, and exclusive discounts — direct to your inbox.
          </p>
          {subscribed ? (
            <div className="mt-8 p-4 border border-yellow-400/30 rounded-lg bg-yellow-400/5">
              <p className="text-yellow-400 font-semibold text-sm">You&apos;re on the list. Welcome, Trainer!</p>
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="trainer@email.com"
                className="flex-1 bg-white/5 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-yellow-400/50 focus:outline-none rounded-lg transition-colors"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-[#0d1b2e] px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-yellow-300 transition-colors whitespace-nowrap rounded-lg"
              >
                Join Now
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
