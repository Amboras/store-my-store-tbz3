'use client'

import Link from 'next/link'
import { Zap, Shield, Truck, RefreshCw } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Cards', href: '/products' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
    { label: 'Collections', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="bg-[#0d1b2e] border-t border-yellow-500/20">
      {/* Trust bar */}
      <div className="border-b border-white/10">
        <div className="container-custom py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Truck className="h-5 w-5 text-yellow-400 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Fast Shipping</p>
                <p className="text-xs">Cards dispatched within 24h</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">100% Authentic</p>
                <p className="text-xs">All cards verified genuine</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <RefreshCw className="h-5 w-5 text-yellow-400 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Easy Returns</p>
                <p className="text-xs">30-day hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                <Zap className="h-4 w-4 text-[#0d1b2e] fill-current" />
              </div>
              <span className="font-heading text-2xl tracking-wider text-white">
                POKE<span className="text-yellow-400">DECK</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Your trusted source for authentic Pokemon cards. Premium singles, booster packs, and rare holographics at unbeatable prices.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-yellow-400">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-yellow-400">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-yellow-400">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} PokeDeck. All rights reserved. Not affiliated with Nintendo or The Pokemon Company.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-white/30">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
