// ═══════════════════════════════════════════════════════════════
//  FILE: src/pages/FinancingPage.jsx
//  Route key: 'financing'
//  HOW TO ADD:
//  1. Save as  src/pages/FinancingPage.jsx
//  2. src/App.jsx  → add import:
//       import FinancingPage from './pages/FinancingPage.jsx'
//  3. src/App.jsx  → PageView map add:
//       financing: <FinancingPage setPage={setPage} />,
//  4. src/components/Navbar.jsx → WHAT_DD array add:
//       ['financing', 'Financing Models'],
//  5. src/pages/Services.jsx → Financing "Learn More" button:
//       onClick={() => setPage('financing')}
// ═══════════════════════════════════════════════════════════════

import { useReveal } from '../hooks/index.js'
import PageHero from '../components/PageHero.jsx'
import { IMG } from '../data/content.js'
import { Landmark, ClipboardList, Zap, Sun, IndianRupee, BarChart3, Home, Calendar, Target, Check, X, ArrowRight } from 'lucide-react'

const Para = ({ c, style }) => (
  <p style={{ color: '#374151', lineHeight: 1.95, fontSize: 14.5, marginBottom: 18, ...style }}>{c}</p>
)

export default function FinancingPage({ setPage }) {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()
  const [r4, v4] = useReveal()
  const [r5, v5] = useReveal()

  const models = [
    {
      num: '01', title: 'CAPEX', sub: 'Capital Expenditure Model',
      badge: 'Own It', icon: Landmark,
      col: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', hbg: '#dcfce7',
      img: `${IMG}7.jpg`,
      shortDesc: 'Ideal for clients who want to invest but need a loan from a financial institution. We provide Collateral free 75–80% loan with 9.5% to 10.5% rate of interest and 8–10 years tenure of loan.',
      fullDesc: 'If you choose the CAPEX model, you invest in the setting up and installation cost of the solar plant and are responsible for its operation and maintenance. The energy produced is for your own use and is now completely free of cost! This is a lucrative model for high and long-term savings. You can claim a 40% accelerated depreciation from the plant as you are its owner.',
      highlights: ['75–80% collateral-free loan', '9.5%–10.5% rate of interest', '8–10 years loan tenure', '40% accelerated depreciation', 'Own and operate the plant', 'Energy is free of cost after payback'],
      ideal: 'Businesses & industries looking for long-term savings with maximum ROI',
    },
    {
      num: '02', title: 'Leasing / Deferred Payment', sub: 'Easy Entry Model',
      badge: 'Low Entry', icon: ClipboardList,
      col: '#15803d', bg: '#dcfce7', border: '#86efac', hbg: '#bbf7d0',
      img: `${IMG}1.jpg`,
      shortDesc: 'Clients who do not want to invest upfront. We provide Collateral free 100% finance with just 5–10% deposit with fixed monthly instalment for a duration of 5–7 Years.',
      fullDesc: 'The Leasing / Deferred Payment model is perfect for businesses that want to go solar without a large upfront capital outlay. Pay a small deposit of 5–10%, and we handle the rest — making solar adoption simple and affordable for SMEs and growing companies with predictable monthly payments.',
      highlights: ['100% collateral-free finance', 'Only 5–10% deposit required', '5–7 year fixed tenure', 'Fixed monthly instalments', 'No large upfront investment', 'Ideal for SMEs & growing businesses'],
      ideal: 'SMEs and companies that prefer predictable monthly payments over large upfront costs',
    },
    {
      num: '03', title: 'OPEX / PPA / RESCO', sub: 'Zero Investment Model',
      badge: 'Zero Capex', icon: Zap,
      col: '#14532d', bg: '#f0fdf4', border: '#bbf7d0', hbg: '#dcfce7',
      img: `${IMG}2.jpg`,
      shortDesc: 'Client wants OPEX/PPA/RESCO model. We provide this model with a Private Power Purchasing Agreement (PPPA) at a PPA rate for a duration of 10–15 years.',
      fullDesc: 'If you decide to opt for our OPEX model, you can install a solar power plant at your rooftop by signing a Private Power Purchasing Agreement (PPPA) with us. You enjoy the benefits of solar power without bearing any additional costs. Pay for the units you consume (pay-per-use) without worrying about maintenance and warranty — we take care of it for you.',
      highlights: ['Zero upfront investment required', 'Pay only for units consumed', 'PPA rate for 10–15 year duration', 'We own, operate & maintain plant', 'No maintenance or warranty worries', 'Immediate savings from day one'],
      ideal: 'Any business wanting solar benefits with zero capital investment or operational responsibility',
    },
  ]

  const criteria = [
    'Both rooftop and ground mounted within or outside the premises',
    'Profit making companies',
    'Solar Plant Size from 100 kW to (No upper limit)',
    'Clients across India',
  ]

  return (
    <div style={{ background: '#f8fdf9' }}>
      <PageHero
        title="Financing Models"
        subtitle="CAPEX / LEASING / DEFERRED PAYMENT / OPEX / PPA / RESCO — going solar has never been this easy & affordable."
        img={`${IMG}financingmodel.jpg`}
        breadcrumb="Services → Financing Models"
      />
      <style>{`
        .fin-metric{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .35s ease}
        .fin-metric:hover{transform:translateY(-5px);box-shadow:var(--shadow-md)}
        .fin-explain:hover,.fin-model:hover{box-shadow:var(--shadow-lg)}
        .fin-hl{transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease}
        .fin-hl:hover{transform:translateX(4px);box-shadow:var(--shadow-sm)}
        .fin-proj{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .35s ease}
        .fin-proj:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
        .fin-tr{transition:background .25s ease}
        .fin-tr:hover{background:#f0fdf4!important}
      `}</style>

      {/* INTRO + IMAGE STACK */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="g2" style={{ alignItems: 'center', marginBottom: 56 }}>
          <div ref={r1} className={`rev-l ${v1 ? 'vis' : ''}`}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span className="dot dot-blink" />CAPEX / LEASING / OPEX / RESCO
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.7rem)', color: '#14532d', lineHeight: 1.15, marginBottom: 22 }}>
              Going Solar Has Never Been<br />
              <span className="grad-text">This Easy & Affordable</span>
            </h2>
            <Para c="Attractive Financing Schemes for Our Rooftop Customers. Take the right step into the world of Solar Power Solutions with our hassle-free and easy financing schemes for both Residential Customers as well as SMEs and C&Is. Solar Power means guaranteed savings on your electricity bills and more money to power your business needs." />
            <Para c="Depending on whether you are an individual or a business, GreenChip connects you with its partner organisations for providing unsecured loans starting from ₹1 Lakh up to ₹100 Lakhs. Financing is typically available for up to 80% of the project cost. Solar loans (including top-up on existing home loans) are also available subject to T&C." />
            <Para c="Loan approval process may take between 10–14 days depending upon the KYC process and the solution chosen." />
            <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => setPage('contact')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}>Apply Now <ArrowRight size={14} strokeWidth={2.25}/></button>
              <button className="btn-outline" onClick={() => setPage('calculator')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}><Sun size={14} strokeWidth={2}/>Calculate Savings</button>
            </div>
          </div>

          {/* Right — image stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(36px)', transition: 'all .8s ease .2s' }}>
                  <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 10px 32px rgba(22,163,74,.12)' }}>
                    <img src={`${IMG}16.jpg`} alt="Solar Financing" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ borderRadius: 13, overflow: 'hidden', boxShadow: '0 4px 14px rgba(22,163,74,.09)' }}>
                <img src={`${IMG}1.jpg`} alt="Solar" style={{ width: '100%', height: 135, objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 13, overflow: 'hidden', boxShadow: '0 4px 14px rgba(22,163,74,.09)' }}>
                <img src={`${IMG}7.jpg`} alt="Solar" style={{ width: '100%', height: 135, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Loan metric cards */}
        <div ref={r2} className="rg-4" style={{ gap: 18 }}>
          {[
            { icon: IndianRupee, n: '₹1L – ₹100L',  sub: 'Unsecured loan range' },
            { icon: BarChart3, n: 'Up to 80%',      sub: 'Of total project cost' },
            { icon: Home, n: 'Solar Loans',    sub: 'Top-up on existing Solar Loans (T&C)' },
            { icon: Calendar, n: '10–14 Days',     sub: 'Loan approval timeline' },
          ].map((h, i) => (
            <div key={i} className="fin-metric" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--r-lg)', padding: '26px 18px', textAlign: 'center', opacity: v2 ? 1 : 0, transform: v2 ? 'translateY(0)' : 'translateY(20px)', transition: `opacity .55s ease ${i * .1}s, transform .55s cubic-bezier(.16,1,.3,1) ${i * .1}s, box-shadow .35s ease` }}>
              <div style={{ display:'flex', justifyContent:'center', marginBottom: 11 }}><h.icon size={28} strokeWidth={1.75} color="#16a34a"/></div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#16a34a', fontSize: 'clamp(.9rem,1.6vw,1.2rem)', marginBottom: 5 }}>{h.n}</div>
              <div style={{ color: '#6b7280', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif" }}>{h.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPEX vs OPEX EXPLAINER with images */}
      <section className="section" style={{ background: '#f8fdf9', paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="badge" style={{ marginBottom: 14, justifyContent: 'center' }}><span className="dot" />Understanding Your Options</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', color: '#14532d' }}>
            CAPEX vs OPEX — Which Is Right For You?
          </h2>
        </div>
        <div ref={r3} className="g2" style={{ alignItems: 'stretch' }}>
          {/* CAPEX card with image */}
          <div className="fin-explain" style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: 'var(--r-xl)', overflow: 'hidden', opacity: v3 ? 1 : 0, transform: v3 ? 'translateX(0)' : 'translateX(-28px)', transition: 'opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1), box-shadow .4s ease' }}>
            <div className="media-zoom" style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
              <img src={`${IMG}Commerial rooftop.jpg`} alt="CAPEX Solar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 16px', background: 'linear-gradient(to top,rgba(10,40,15,.85),transparent)' }}>
                <span style={{ color: '#fff', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, letterSpacing: .5 }}>Rooftop Solar — CAPEX Model</span>
              </div>
            </div>
            <div style={{ padding: '26px 26px 30px', borderLeft: '4px solid #16a34a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 15 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Landmark size={20} strokeWidth={1.75} color="#16a34a"/></div>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#14532d', fontSize: 17 }}>CAPEX Model</div>
                  <div style={{ color: '#16a34a', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>You Own the Plant</div>
                </div>
              </div>
              <Para c="If you choose the CAPEX model, you invest in the setting up and installation cost of the solar plant and are responsible for its operation and maintenance. The energy produced is for your own use and is now completely free of cost!" />
              <Para c="This is a lucrative model for high and long-term savings. You can claim a 40% accelerated depreciation from the plant as you are its owner." style={{ marginBottom: 14 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {['Own the asset', '40% depreciation', 'Long-term ROI', 'Free energy'].map(t => (
                  <span key={t} style={{ padding: '4px 11px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 100, color: '#15803d', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* OPEX card with image */}
          <div className="fin-explain" style={{ background: '#fff', border: '1px solid #86efac', borderRadius: 'var(--r-xl)', overflow: 'hidden', opacity: v3 ? 1 : 0, transform: v3 ? 'translateX(0)' : 'translateX(28px)', transition: 'opacity .7s ease .15s, transform .7s cubic-bezier(.16,1,.3,1) .15s, box-shadow .4s ease' }}>
            <div className="media-zoom" style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
              <img src={`${IMG}solarpark.jpg`} alt="OPEX Solar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 16px', background: 'linear-gradient(to top,rgba(10,40,15,.85),transparent)' }}>
                <span style={{ color: '#fff', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, letterSpacing: .5 }}>Solar Park — OPEX / PPA Model</span>
              </div>
            </div>
            <div style={{ padding: '26px 26px 30px', borderLeft: '4px solid #15803d' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 15 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: '#dcfce7', border: '1px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={20} strokeWidth={1.75} color="#15803d"/></div>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#14532d', fontSize: 17 }}>OPEX / PPA / RESCO</div>
                  <div style={{ color: '#15803d', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>Zero Investment</div>
                </div>
              </div>
              <Para c="If you decide to opt for our OPEX model, you can install a solar power plant at your rooftop by signing a Private Power Purchasing Agreement (PPPA) with us." />
              <Para c="Enjoy the benefits of solar power without bearing any additional costs. Pay for the units you consume (pay-per-use) without worrying about maintenance and warranty — we take care of it for you." style={{ marginBottom: 14 }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {['Zero investment', 'Pay per unit', 'We maintain', 'Instant savings'].map(t => (
                  <span key={t} style={{ padding: '4px 11px', background: '#dcfce7', border: '1px solid #86efac', borderRadius: 100, color: '#15803d', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE MODELS DETAILED with side images */}
      <section className="section" style={{ background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="badge" style={{ marginBottom: 14, justifyContent: 'center' }}><span className="dot" />Our Financing Models</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.7rem,3vw,2.4rem)', color: '#14532d' }}>
            Three Models, One Goal —<br /><span className="grad-text">Making Solar Accessible</span>
          </h2>
        </div>
        <div ref={r4} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {models.map((m, i) => (
            <div key={i} className="fin-model" style={{ background: m.bg, border: `1px solid ${m.border}`, borderRadius: 'var(--r-xl)', overflow: 'hidden', opacity: v4 ? 1 : 0, transform: v4 ? 'translateY(0)' : 'translateY(24px)', transition: `opacity .65s ease ${i * .15}s, transform .65s cubic-bezier(.16,1,.3,1) ${i * .15}s, box-shadow .4s ease` }}>
              {/* Colored header bar */}
              <div style={{ background: `linear-gradient(135deg,${m.col},${i === 0 ? '#15803d' : i === 1 ? '#166534' : '#14532d'})`, padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><m.icon size={21} strokeWidth={1.75} color="#fff"/></div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,.7)', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>Model {m.num}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(.9rem,1.7vw,1.25rem)' }}>{m.title}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,.2)', border: '1px solid rgba(255,255,255,.4)', borderRadius: 100, color: '#fff', fontSize: 10.5, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>{m.badge}</span>
                  <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 100, color: 'rgba(255,255,255,.8)', fontSize: 10.5, fontFamily: "'Space Grotesk',sans-serif" }}>{m.sub}</span>
                </div>
              </div>

              {/* Body: image left, content right */}
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
                {/* Image */}
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img src={m.img} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 260 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent 50%,rgba(240,253,244,.9))' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '26px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
                  <div>
                    <div style={{ background: m.hbg, border: `1px solid ${m.border}`, borderRadius: 11, padding: '13px 15px', marginBottom: 15 }}>
                      <p style={{ color: '#14532d', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 13, lineHeight: 1.7 }}>{m.shortDesc}</p>
                    </div>
                    <Para c={m.fullDesc} style={{ fontSize: 13.5, marginBottom: 13 }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '10px 13px', background: '#fff', border: `1px solid ${m.border}`, borderRadius: 9 }}>
                      <Target size={16} strokeWidth={2} color={"#14532d"}/>
                      <div>
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, color: m.col, fontSize: 9.5, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>Ideal For</div>
                        <div style={{ color: '#374151', fontSize: 12.5 }}>{m.ideal}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, color: m.col, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Key Highlights</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {m.highlights.map((h, j) => (
                        <div key={j} className="fin-hl" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 13px', background: '#fff', border: `1px solid ${m.border}`, borderRadius: 10 }}>
                          <div style={{ width: 22, height: 22, borderRadius: 6, background: m.bg, border: `1px solid ${m.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Check size={12} strokeWidth={2.5} color={m.col}/></div>
                          <span style={{ color: '#374151', fontSize: 12.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRITERIA + PROJECT GALLERY */}
      <section className="section" style={{ background: '#f8fdf9', paddingTop: 64, paddingBottom: 64 }}>
        <div ref={r5} className="g2" style={{ alignItems: 'center' }}>
          <div style={{ opacity: v5 ? 1 : 0, transform: v5 ? 'translateX(0)' : 'translateX(-28px)', transition: 'all .8s ease' }}>
            <div className="badge" style={{ marginBottom: 16 }}><span className="dot" />Projects We Look For</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.3rem)', color: '#14532d', lineHeight: 1.2, marginBottom: 20 }}>
              Who Can Apply for<br /><span className="grad-text">Solar Financing?</span>
            </h2>
            <Para c="We work with a wide range of clients across India. Here are the types of projects and companies we look for when offering our financing solutions:" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
              {criteria.map((c, i) => (
                <div key={i} className="fin-hl" style={{ display: 'flex', alignItems: 'flex-start', gap: 13, padding: '14px 17px', background: '#fff', border: '1px solid #bbf7d0', borderRadius: 'var(--r-md)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Check size={14} strokeWidth={2.5} color="#16a34a"/></div>
                  <span style={{ color: '#374151', fontSize: 14, lineHeight: 1.65 }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => setPage('contact')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}>Apply Now <ArrowRight size={14} strokeWidth={2.25}/></button>
              <button className="btn-outline" onClick={() => setPage('calculator')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}><Sun size={14} strokeWidth={2}/>Calculate ROI</button>
            </div>
          </div>

          {/* 4 project images grid */}
          <div className="rg-2" style={{ gap: 13, opacity: v5 ? 1 : 0, transform: v5 ? 'translateX(0)' : 'translateX(28px)', transition: 'all .8s ease .2s' }}>
            {[
              ['groundmount.jpg', 'Ground Mounted'],
              ['Commerial rooftop.jpg', 'Rooftop Solar'],
              ['solarpark.jpg', 'Solar Park'],
              ['solar-battery.jpg', 'BESS Storage'],
            ].map(([img, label]) => (
              <div key={label} className="media-zoom fin-proj" style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
                <img src={`${IMG}${img}`} alt={label} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '9px 13px', background: 'linear-gradient(to top,rgba(10,40,15,.85),transparent)' }}>
                  <div style={{ color: '#fff', fontSize: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: '#fff', paddingTop: 64, paddingBottom: 72 }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div className="badge" style={{ marginBottom: 14, justifyContent: 'center' }}><span className="dot" />Quick Comparison</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.3rem)', color: '#14532d' }}>Compare All Financing Models</h2>
        </div>
        <div style={{ overflowX: 'auto', borderRadius: 'var(--r-lg)', border: '1px solid #e5e7eb', boxShadow: 'var(--shadow-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
            <thead>
              <tr style={{ background: 'linear-gradient(135deg,#14532d,#166534)' }}>
                {['Feature', 'CAPEX', 'Leasing / Deferred', 'OPEX / PPA / RESCO'].map((h, i) => (
                  <th key={i} style={{ padding: '15px 17px', textAlign: i === 0 ? 'left' : 'center', color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 13, borderRight: i < 3 ? '1px solid rgba(255,255,255,.15)' : 'none' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Upfront Investment', 'Partial (20–25%)', 'Only 5–10% deposit', '₹0 — Zero'],
                ['Finance Available', '75–80% loan', '100% finance', 'N/A — We invest'],
                ['Interest Rate', '9.5%–10.5%', 'Fixed instalment', 'Pay per unit'],
                ['Tenure', '8–10 years', '5–7 years', '10–15 years PPA'],
                ['Plant Ownership', 'You own it', 'You own it after tenure', 'GreenChip owns it'],
                ['Maintenance', 'Your responsibility', 'Your responsibility', 'We handle everything'],
                ['40% Depreciation', 'Yes', 'Yes', 'No'],
                ['Collateral Required', 'No', 'No', 'Not applicable'],
                ['Best For', 'Capex-ready businesses', 'SMEs, growing companies', 'Any business size'],
              ].map((row, ri) => (
                <tr key={ri} className="fin-tr" style={{ background: ri % 2 === 0 ? '#f8fdf9' : '#fff', borderBottom: '1px solid #e5e7eb' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '13px 17px', color: ci === 0 ? '#14532d' : '#374151', fontFamily: ci === 0 ? "'Space Grotesk',sans-serif" : "'Inter',sans-serif", fontWeight: ci === 0 ? 600 : 400, fontSize: 13.5, textAlign: ci === 0 ? 'left' : 'center', borderRight: ci < 3 ? '1px solid #e5e7eb' : 'none' }}>
                      {cell === 'Yes' && ci>0 ? <span style={{ color: '#16a34a', fontWeight: 700, display:'inline-flex', alignItems:'center', gap:5 }}><Check size={14} strokeWidth={2.5}/>Yes</span> : cell === 'No' && ci===3 ? <span style={{ color: '#ef4444', display:'inline-flex', alignItems:'center', gap:5 }}><X size={14} strokeWidth={2.5}/>No</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 44, background: 'linear-gradient(135deg,#14532d,#166534)', borderRadius: 'var(--r-xl)', padding: '40px 44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 22 }}>
          <div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', marginBottom: 7 }}>Not Sure Which Model is Right For You?</h3>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, lineHeight: 1.75 }}>Talk to our solar financing experts — we'll help you pick the best option.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-white" onClick={() => setPage('contact')} style={{ padding: '11px 24px', fontSize: 14, borderRadius: 8 }}>Talk to an Expert</button>
            <button className="btn-white" onClick={() => setPage('calculator')} style={{ padding: '11px 24px', fontSize: 14, borderRadius: 8, display:'inline-flex', alignItems:'center', gap:7 }}><Sun size={15} strokeWidth={2}/>Calculate ROI</button>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){
        div[style*="grid-template-columns: 300px 1fr"]{grid-template-columns:1fr!important}
      }`}</style>
    </div>
  )
}
