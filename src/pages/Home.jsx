import { useState, useRef } from 'react'
import { Wind, Thermometer, Wrench, Clock, Star, Phone, Mail, MapPin, ChevronRight, Shield, Award, Zap, CheckCircle, X } from 'lucide-react'
import { saveLead } from '../utils/storage'
import { sendConfirmationEmail, sendOwnerNotification } from '../utils/email'

const SERVICES = [
  { icon: <Wind size={28} />, title: 'AC Repair', desc: 'Same-day diagnostics and repair for all AC brands. Our certified techs get your system running fast.' },
  { icon: <Thermometer size={28} />, title: 'AC Installation', desc: 'New system? We size, install, and commission your unit — backed by a 5-year labor warranty.' },
  { icon: <Wrench size={28} />, title: 'Heating Systems', desc: 'Furnace, heat pump, or mini-split — full repair and installation for all heating systems.' },
  { icon: <Clock size={28} />, title: '24/7 Emergency', desc: 'Las Vegas heat doesn\'t wait. Neither do we. Emergency response within 2 hours, guaranteed.' },
]

const STATS = [
  { value: '4,800+', label: 'Happy Customers' },
  { value: '15 Yrs', label: 'In Business' },
  { value: '< 2 Hr', label: 'Emergency Response' },
  { value: '4.9★', label: 'Google Rating' },
]

const TESTIMONIALS = [
  { name: 'James K.', location: 'Summerlin', stars: 5, text: 'AC went out on a 115° day. Desert Cool had a tech here in under 90 minutes. Absolute lifesavers.' },
  { name: 'Maria R.', location: 'Henderson', stars: 5, text: 'Got 3 quotes and Desert Cool was the most transparent. No hidden fees, clean install, and they cleaned up perfectly.' },
  { name: 'Tom B.', location: 'North Las Vegas', stars: 5, text: 'Been using them for annual maintenance for 6 years. Always on time, always professional, always honest.' },
]

const FORM_SERVICES = ['AC Repair', 'AC Installation', 'Heating Repair', 'Heating Installation', 'HVAC Maintenance', 'Emergency Service', 'Other']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
              <Wind size={18} className="text-white" />
            </div>
            <span className="font-display font-800 text-xl text-brand-dark tracking-tight">
              Desert<span className="text-brand-orange">Cool</span> HVAC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Reviews', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
                {item}
              </a>
            ))}
            <a href="#book" className="btn-primary text-sm py-2 px-4">Book Service</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-5 h-0.5 bg-gray-700 mb-1.5" />
            <div className="w-5 h-0.5 bg-gray-700" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {['Services', 'About', 'Reviews', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 px-2 py-1">{item}</a>
            ))}
            <a href="#book" onClick={() => setMenuOpen(false)} className="btn-primary text-sm text-center mt-2">Book Service</a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold">24/7 Emergency Service Available</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Las Vegas's<br />
            <span className="text-brand-orange">HVAC Experts</span><br />
            You Can Trust.
          </h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
            When the desert heat hits 115°, your AC isn't optional. Desert Cool HVAC delivers
            fast, honest service across the entire Las Vegas valley — same-day repairs guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#book" className="btn-primary text-base">
              Book Service <ChevronRight size={18} />
            </a>
            <a href="tel:7025550192" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark text-base">
              <Phone size={18} /> (702) 555-0192
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-brand-orange">{s.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-4">Full-Service HVAC Solutions</h2>
          <p className="text-gray-500 max-w-xl mx-auto">From emergency repairs to new system installations, our licensed technicians handle it all — backed by solid warranties.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(s => (
            <div key={s.title} className="card group hover:border-brand-orange/30">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Why Desert Cool</p>
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">
              Built for Las Vegas.<br />Built to Last.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Founded in 2009 right here in the valley, we've spent 15 years mastering one of the harshest
              climates on earth. We know the specific demands Las Vegas summers put on your equipment —
              and we build every job around making sure your system doesn't fail when you need it most.
            </p>
            <div className="space-y-4">
              {[
                ['Licensed & Insured', 'NV State HVAC License #C-21 78401'],
                ['Transparent Pricing', 'Flat-rate quotes before any work starts'],
                ['All Brands Serviced', 'Carrier, Trane, Lennox, Rheem, and more'],
                ['Satisfaction Guarantee', '100% money-back on any job we can\'t fix right'],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">{title}</div>
                    <div className="text-gray-500 text-sm">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Shield size={24} />, title: 'Licensed & Insured', sub: 'Full NV certification' },
              { icon: <Award size={24} />, title: 'BBB A+ Rated', sub: '15 years of trust' },
              { icon: <Zap size={24} />, title: 'Same-Day Service', sub: 'Call by noon, done today' },
              { icon: <Star size={24} />, title: '4.9★ Google', sub: '700+ reviews' },
            ].map(item => (
              <div key={item.title} className="bg-brand-dark rounded-2xl p-6 text-white">
                <div className="text-brand-orange mb-3">{item.icon}</div>
                <div className="font-display font-bold text-base mb-1">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Customer Reviews</p>
          <h2 className="font-display text-4xl font-bold text-brand-dark">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card">
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.location}, NV</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', preferredDate: '', preferredTime: '', notes: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const formRef = useRef(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const lead = saveLead(form)
      await Promise.all([sendConfirmationEmail(lead), sendOwnerNotification(lead)])
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', preferredDate: '', preferredTime: '', notes: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="book" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="section-label mb-3">Get Started</p>
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-5">Book Your HVAC Service</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">Fill out the form and we'll confirm your appointment within 30 minutes. Emergency? Call us directly.</p>
            <div className="space-y-5">
              {[
                [<Phone size={18} />, '(702) 555-0192'],
                [<Mail size={18} />, 'service@desertcoolhvac.com'],
                [<MapPin size={18} />, 'Serving All of Las Vegas Valley'],
                [<Clock size={18} />, 'Mon–Fri 7am–7pm · Sat 8am–5pm · 24/7 Emergency'],
              ].map(([icon, text], i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-brand-orange mt-0.5">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-green-800 mb-2">Request Received!</h3>
                <p className="text-green-700 text-sm">We'll call or email you within 30 minutes to confirm your appointment.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 btn-primary">Book Another Service</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input name="phone" required value={form.phone} onChange={handleChange} className="input-field" placeholder="(702) 555-0000" type="tel" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                  <input name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="john@email.com" type="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Service Needed *</label>
                  <select name="service" required value={form.service} onChange={handleChange} className="input-field">
                    <option value="">Select a service...</option>
                    {FORM_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Date *</label>
                    <input name="preferredDate" required type="date" value={form.preferredDate} onChange={handleChange} className="input-field"
                      min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Time *</label>
                    <select name="preferredTime" required value={form.preferredTime} onChange={handleChange} className="input-field">
                      <option value="">Select time...</option>
                      {['7:00 AM – 9:00 AM', '9:00 AM – 11:00 AM', '11:00 AM – 1:00 PM', '1:00 PM – 3:00 PM', '3:00 PM – 5:00 PM', '5:00 PM – 7:00 PM'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Notes / Issue Description</label>
                  <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} className="input-field resize-none" placeholder="Describe the issue or any relevant details..." />
                </div>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm mb-4 flex items-center gap-2">
                    <X size={16} /> Something went wrong. Please try again or call us directly.
                  </div>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-4">
                  {status === 'loading' ? 'Submitting...' : 'Request Appointment →'}
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">We'll confirm within 30 minutes. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <Wind size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">DesertCool HVAC</span>
            </div>
            <p className="text-sm leading-relaxed">Serving Las Vegas since 2009. Licensed, insured, and committed to keeping your home comfortable year-round.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {FORM_SERVICES.slice(0, 5).map(s => <li key={s} className="hover:text-brand-orange transition-colors cursor-pointer">{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} className="text-brand-orange" /> (702) 555-0192</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-brand-orange" /> service@desertcoolhvac.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-brand-orange" /> Las Vegas, NV</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2025 Desert Cool HVAC. All rights reserved.</span>
          <a href="/admin" className="text-gray-600 hover:text-gray-400 transition-colors">Admin</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}
