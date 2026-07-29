// ═══════════════════════════════════════════════════════════════
//  FILE: src/pages/AssetManagementPage.jsx
//  Route key: 'assetmanagement'
//
//  HOW TO ADD — 5 steps:
//  1. Save this file as  src/pages/AssetManagementPage.jsx
//  2. src/App.jsx  → add import at top:
//       import AssetManagementPage from './pages/AssetManagementPage.jsx'
//  3. src/App.jsx  → PageView map add one line:
//       assetmanagement: <AssetManagementPage setPage={setPage} />,
//  4. src/components/Navbar.jsx → WHAT_DD array add:
//       ['assetmanagement', 'Asset Management'],
//  5. src/pages/Services.jsx → Asset Management "Learn More" button:
//       onClick={() => setPage('assetmanagement')}
// ═══════════════════════════════════════════════════════════════

import { useReveal } from '../hooks/index.js'
import PageHero from '../components/PageHero.jsx'
import { IMG } from '../data/content.js'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

/* ── tiny helpers ─────────────────────────────── */
const Para = ({ c, style }) => (
  <p style={{ color: '#374151', lineHeight: 1.95, fontSize: 14.5, marginBottom: 16, ...style }}>{c}</p>
)

const SectionTitle = ({ badge, title, sub, center = false }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 44 }}>
    {badge && (
      <div className="badge" style={{ marginBottom: 14, justifyContent: center ? 'center' : 'flex-start' }}>
        <span className="dot" />{badge}
      </div>
    )}
    <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.7rem,3.2vw,2.5rem)', color: '#14532d', lineHeight: 1.15, marginBottom: sub ? 14 : 0 }}>
      {title}
    </h2>
    {sub && <p style={{ color: '#6b7280', fontSize: 15, maxWidth: center ? 680 : '100%', margin: center ? '0 auto' : 0, lineHeight: 1.85 }}>{sub}</p>}
  </div>
)

const H3 = ({ children }) => (
  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 19, color: '#14532d', marginBottom: 12, marginTop: 8 }}>
    {children}
  </h3>
)

const BulletList = ({ items }) => (
  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#374151', fontSize: 14, lineHeight: 1.78 }}>
        <span style={{ color: '#16a34a', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>•</span>
        {item}
      </li>
    ))}
  </ul>
)

const NumberedList = ({ items }) => (
  <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 16 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: 'linear-gradient(135deg,#16a34a,#166534)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0, fontFamily: "'Space Grotesk',sans-serif", marginTop: 1 }}>{i + 1}</div>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 15, marginBottom: 4 }}>{item.title}</div>
          {item.desc && <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.8 }}>{item.desc}</p>}
        </div>
      </li>
    ))}
  </ol>
)

/* img with caption */
const FigImg = ({ src, alt, caption, height = 320 }) => (
  <div style={{ marginBottom: 32 }}>
    <div className="media-zoom" style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #e5e7eb' }}>
      <img src={src} alt={alt} style={{ width: '100%', height, objectFit: 'cover', display: 'block' }} />
    </div>
    {caption && (
      <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 12.5, marginTop: 10, fontStyle: 'italic', fontFamily: "'Space Grotesk',sans-serif" }}>
        {caption}
      </p>
    )}
  </div>
)

/* ══════════════════════════════════════════════════════════════
   ASSET MANAGEMENT PAGE
   Scraped from: services-assetman.html
═══════════════════════════════════════════════════════════════ */
export default function AssetManagementPage({ setPage }) {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()
  const [r4, v4] = useReveal()
  const [r5, v5] = useReveal()
  const [r6, v6] = useReveal()

  /* Why GreenChip — 5 one-stop icons scraped from page */
  const whyCards = [
    { img: `${IMG}asset1.png`, title: 'O & M Services Control' },
    { img: `${IMG}bp2.png`,    title: 'Optimized Best Practices Resources In IT / Knowledge Talent' },
    { img: `${IMG}apc3.png`,   title: 'Accountancy / Payment Control' },
    { img: `${IMG}asset4.png`, title: 'Commercial Management' },
    { img: `${IMG}ps5.png`,    title: 'Proprietary Solution' },
  ]

  /* Why Choose GreenChip — 4 detailed points */
  const whyChoose = [
    {
      title: 'Expert Consultation',
      desc: 'Our experienced team of professionals will work closely with you to understand your specific needs and goals. We provide expert consultation on system design, performance optimization, and asset monitoring to maximize the efficiency and productivity of your solar energy management system project.',
    },
    {
      title: 'Performance Monitoring',
      desc: 'We utilize advanced monitoring systems to continuously track and analyse the performance of your solar assets. Our PV asset management services enable real-time monitoring of key performance indicators, allowing us to identify any issues or anomalies and take proactive measures to optimize energy generation.',
    },
    {
      title: 'Maintenance and Repairs',
      desc: 'Regular maintenance is essential for the smooth operation of your solar energy management system. Our skilled technicians and engineers perform routine inspections, preventive maintenance, and timely repairs to ensure that your system operates at its full potential, minimizing downtime and maximizing the return on your investment.',
    },
    {
      title: 'Data Analytics and Reporting',
      desc: 'We employ cutting-edge data analytics tools to gather and analyze performance data from your solar assets. Our comprehensive reports provide valuable insights into energy production, system efficiency, and financial performance, enabling you to make informed decisions and optimize the overall operation of your solar energy management system project.',
    },
  ]

  /* O&M Elements */
  const omElements = [
    'Environment, health and safety',
    'Personnel and training',
    'Technical asset management',
    'Operations',
    'Maintenance',
    'Revamping',
    'Spares',
    'Data monitoring',
  ]

  /* Key benefits from the conclusion */
  const keyBenefits = [
    'Stakeholder management can be strengthened, and prudent operation of assets is emphasised',
    'Optimisation of asset performance and risk management is now structured',
    'Continuous improvement with experience is possible',
    'Best value from an asset can be recognised',
    'Maintenance effectiveness and optimisation is possible',
  ]

  /* Framework sections */
  const frameworks = [
    {
      title: 'Environmental Management',
      img: `${IMG}ast5.gif`,
      caption: 'Ecosystem and Nature Management Feasibility Tracker',
      extraImg: `${IMG}ast1.png`,
      text: [
        'Solar power plants, as a solution for green energy, especially need to ensure that environment management aspects are well structured. Repair, reuse and recycle, typically stated as the 3R process, is a known methodology in waste management systems.',
        'Abundant land is used for solar parks, which offers an excellent opportunity to enhance the natural environment. The natural ecosystem impact of such extensive land use can be minimised and many environmental co-benefits can be achieved by adopting proper ecosystem and nature management procedures.',
        'The ecosystem and nature management framework is a decision support tool for management to implement feasible actions and identify benefits. Each action can be analysed for applicability, feasibility, and overall rating for a clear decision-making process.',
      ],
    },
    {
      title: 'Competence Management',
      img: `${IMG}ast6.gif`,
      caption: 'Competence Management Framework',
      text: [
        'Competence management is the ability to achieve the organisational objectives from the available personnel in an effective way. This framework is an extension of the position qualification review, a process by which an individual\'s skills are periodically validated to make sure they remain competent for the tasks they are undertaking.',
        'The competence management framework ensures that the authorisations in the position qualification review are formulated for the continuous improvement process, and that training inputs arising from the assessment procedures are considered for the training calendar.',
      ],
      bullets: [
        'Continuous improvement: Each authorisation assessment mentioned in the position qualification review process is defined for frequency of reassessment and reauthorisation.',
        'Training calendar: Inputs to the training calendar for employees are organised from this assessment process and this training will be focused to fill the learning gaps.',
      ],
    },
    {
      title: 'Maintenance Management System',
      img: `${IMG}ast7.gif`,
      caption: 'Maintenance Management Framework',
      text: [
        'The maintenance management framework consists of different tools integrated into one system to design the strategy, implement the maintenance and measure the maintenance effectiveness and efficiency, with a continuous improvement loop to modify the maintenance strategy as we learn from experience.',
      ],
    },
  ]

  /* DMG maintenance strategies */
  const dmgStrategies = [
    'Skill level upgrade (SLU)',
    'Design out maintenance (DOM)',
    'Fixed-time maintenance (FTM)',
    'Condition-based maintenance (CBM)',
    'Operate to fail (OTF)',
  ]

  return (
    <div style={{ background: '#f8fdf9', paddingTop: 34 }}>
      <PageHero
        title="Asset Management"
        subtitle="Solar Asset Management: Maximizing The Potential Of Your Solar Plant Project"
        img={`${IMG}assetsmanagement.png`}
        breadcrumb="Services → Asset Management"
      />
      <style>{`
        .am-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);border-color:#bbf7d0}
        .am-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),background .35s ease,border-color .35s ease}
        .am-card:hover .am-icon{transform:translateY(-3px) scale(1.06);background:#dcfce7;border-color:#86efac}
        .am-chip{transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease,border-color .3s ease}
        .am-chip:hover{transform:translateY(-3px);box-shadow:var(--shadow-sm);border-color:#86efac}
      `}</style>

      {/* ── INTRO ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="g2" style={{ alignItems: 'center' }} ref={r1}>
          <div className={`rev-l ${v1 ? 'vis' : ''}`}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span className="dot dot-blink" />Solar Asset Management
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', color: '#14532d', lineHeight: 1.15, marginBottom: 22 }}>
              Maximizing The Potential Of<br />
              <span className="grad-text">Your Solar Plant Project</span>
            </h2>
            <Para c="At GreenChip, we specialize in solar asset management, providing comprehensive solutions to optimize the performance and profitability of your solar plant project. With our expertise and industry-leading practices, we ensure that your solar assets operate at their peak efficiency, delivering maximum returns on your investment." />
            <Para c="Our solar asset management services encompass a wide range of activities, including performance monitoring, maintenance planning, and financial analysis. We utilize advanced monitoring systems and data analytics tools to continuously track the performance of your solar assets, identifying potential issues and optimizing energy generation." />
            <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => setPage('contact')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}>Get Started <ArrowRight size={14} strokeWidth={2.25}/></button>
              <button className="btn-outline" onClick={() => setPage('services')} style={{ padding: '12px 26px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}><ArrowLeft size={14} strokeWidth={2.25}/>All Services</button>
            </div>
          </div>

          {/* Right: stacked images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(36px)', transition: 'all .8s ease .2s' }}>
            <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={`${IMG}1.jpg`} alt="Asset Management" style={{ width: '100%', height: 240, objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
              <div className="media-zoom" style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <img src={`${IMG}img-600x400-3.jpg`} alt="Solar Plant" style={{ width: '100%', height: 135, objectFit: 'cover' }} />
              </div>
              <div className="media-zoom" style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <img src={`${IMG}img-600x400-1.jpg`} alt="Solar Monitoring" style={{ width: '100%', height: 135, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GREENCHIP — 5 ICON CARDS ── */}
      <section className="section" style={{ background: '#f0fdf4', paddingTop: 60, paddingBottom: 60 }}>
        <SectionTitle
          badge="Why GreenChip?"
          title="We Are Your One-Stop Solution for Asset Management"
          sub="We provide you with a hassle-free experience in managing your assets by being a one-stop solution for asset management."
          center
        />
        <div ref={r2} style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
          {whyCards.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#fff', border: '1px solid #bbf7d0', borderRadius: 'var(--r-lg)',
                padding: '30px 16px', textAlign: 'center',
                opacity: v2 ? 1 : 0, transform: v2 ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity .6s ease ${i * .1}s, transform .6s cubic-bezier(.16,1,.3,1) ${i * .1}s, box-shadow .35s ease, border-color .35s ease`,
              }}
              className="am-card"
            >
              <div className="am-icon" style={{ width: 72, height: 72, borderRadius: 18, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', overflow: 'hidden' }}>
                <img src={c.img} alt={c.title} style={{ width: 44, height: 44, objectFit: 'contain' }}
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' }} />
              </div>
              <p style={{ color: '#14532d', fontSize: 12.5, lineHeight: 1.6, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIFFERENT TYPES OF SOLAR ASSETS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="g2" style={{ alignItems: 'center' }} ref={r3}>
          <div className={`rev-l ${v3 ? 'vis' : ''}`}>
            <SectionTitle badge="Asset Types" title="Different Types Of Solar Assets" />
            <Para c="GreenChip Renewables manages a diverse solar energy asset management portfolio, encompassing primarily two categories of projects:" />
            <NumberedList items={[
              {
                title: 'O&M for CAPEX Projects — Residential & Commercial',
                desc: 'Operation and Maintenance (O&M) for CAPEX projects in the Residential and Commercial sectors, in accordance with the Engineering, Procurement, and Construction (EPC) Contract. This entails comprehensive management and upkeep of solar energy systems to ensure optimal performance and prolonged project lifespan.',
              },
              {
                title: 'O&M for OPEX Projects — Commercial & Institutional',
                desc: 'O&M for OPEX projects in the Commercial and Institutional sectors, specifically tailored for investors seeking guaranteed unit generation and maximized project longevity. Our expertise in asset management solar enables us to implement effective strategies to maximize energy output and deliver long-term value for investors.',
              },
            ]} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, opacity: v3 ? 1 : 0, transform: v3 ? 'translateX(0)' : 'translateX(28px)', transition: 'all .8s ease .2s' }}>
            <div className="media-zoom am-card" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img src={`${IMG}img-600x400-6.jpg`} alt="Commercial Solar" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: '14px 18px', background: '#f0fdf4', borderTop: '1px solid #bbf7d0' }}>
                <div style={{ color: '#15803d', fontFamily: "'Space Grotesk',sans-serif", fontSize: 12.5, fontWeight: 600 }}>CAPEX — Commercial Rooftop O&M</div>
              </div>
            </div>
            <div className="media-zoom am-card" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img src={`${IMG}solarpark.jpg`} alt="OPEX Solar Park" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: '14px 18px', background: '#f0fdf4', borderTop: '1px solid #bbf7d0' }}>
                <div style={{ color: '#15803d', fontFamily: "'Space Grotesk',sans-serif", fontSize: 12.5, fontWeight: 600 }}>OPEX — Utility Scale O&M</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE GREENCHIP — 4 POINTS ── */}
      <section className="section" style={{ background: '#f8fdf9', paddingTop: 60, paddingBottom: 60 }}>
        <SectionTitle
          badge="Why Choose GreenChip"
          title="Why Choose GreenChip For Solar Asset Management?"
          sub="At GreenChip, we are dedicated to providing comprehensive solutions for solar asset management, ensuring the optimal performance and longevity of your solar energy management system project."
          center
        />
        <div ref={r4} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {whyChoose.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--r-lg)',
                padding: '30px 26px', display: 'flex', gap: 18, alignItems: 'flex-start',
                opacity: v4 ? 1 : 0, transform: v4 ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity .6s ease ${i * .12}s, transform .6s cubic-bezier(.16,1,.3,1) ${i * .12}s, box-shadow .35s ease, border-color .35s ease`,
              }}
              className="am-card"
            >
              <div className="am-icon" style={{ width: 46, height: 46, borderRadius: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#16a34a', fontSize: 16, flexShrink: 0 }}>{i + 1}</div>
              <div>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 17, marginBottom: 10 }}>{item.title}</h4>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.85 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PV PLANT & STAKEHOLDERS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <SectionTitle
          badge="Technical Framework"
          title="PV Plant and Stakeholders' Expectations"
        />
        <div className="g2" style={{ alignItems: 'flex-start', marginBottom: 48 }} ref={r5}>
          <div className={`rev-l ${v5 ? 'vis' : ''}`}>
            <Para c="A typical layout of a solar power (photovoltaic power) park and the connection of the different components as a system. A grid-connected solar plant system uses solar modules (PV panels) to generate direct current power. The panels are either connected in series or parallel to generate the necessary voltage." />
            <Para c="Power from the solar modules through array junction boxes (AJB) is then fed to an inverter, which converts the DC power to alternating current compatible for grid synchronisation. Power transformers are used to step up the voltage to grid level, and a circuit breaker is used for appropriate switching actions." />
            <Para c="Asset management activities of solar power plants are always of high interest to stakeholders. Many asset management service providers are available in the market, but with a generally low success rate due to limitations in commercially available asset management systems. In contrast, stakeholders expect decision-making enabled systems built on a robust framework methodology." />
          </div>

          {/* Typical layout image */}
          <div className={`rev-r ${v5 ? 'vis' : ''}`}>
            <FigImg
              src={`${IMG}ast2.gif`}
              alt="Typical layout of solar power plant"
              caption="Typical layout of solar power (photovoltaic power) plant"
              height={280}
            />
          </div>
        </div>

        {/* O&M elements */}
        <div style={{ background: '#f8fdf9', border: '1px solid #e5e7eb', borderRadius: 18, padding: '32px 36px', marginBottom: 40 }}>
          <H3>Current State Review — O&M Elements</H3>
          <Para c="Typical operations and maintenance (O&M) organisations mainly focus on the following operation and maintenance elements, with key performance indicators as applicable:" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {omElements.map((el, i) => (
              <div key={i} className="am-chip" style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: 'var(--r-sm)', padding: '13px 15px', display: 'flex', alignItems: 'center', gap: 9 }}>
                <Check size={14} strokeWidth={2.5} color="#16a34a" style={{ flexShrink: 0 }}/>
                <span style={{ color: '#374151', fontSize: 13, fontFamily: "'Space Grotesk',sans-serif" }}>{el}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current model image */}
        <FigImg
          src={`${IMG}ast3.gif`}
          alt="Current O&M model"
          caption="Current O&M model — missing asset management frameworks"
          height={260}
        />

        <Para c="That important aspects of asset management such as risk management, life cycle costing, optimisation plans, continuous improvement and decision making frameworks are not integrated into the current OMM model. Therefore, it is likely that stakeholders' expectations are not met." />

        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: '22px 26px', marginBottom: 32 }}>
          <H3>Improved Integrated O&M and Asset Management Model Proposed</H3>
          <Para c="An effective asset management system should be capable of providing necessary decision making information to stakeholders. This article proposes integrating the frameworks by modifying the OM model." />
        </div>

        <FigImg
          src={`${IMG}ast4.gif`}
          alt="Proposed integrated OM and AM model"
          caption="Proposed integrated OM and AM model"
          height={260}
        />
      </section>

      {/* ── FRAMEWORK SECTIONS ── */}
      <section className="section" style={{ background: '#f8fdf9', paddingTop: 60 }}>
        <SectionTitle
          badge="Asset Management Frameworks"
          title="Four Key Framework Steps"
          sub="The four key framework steps as elements of the AM system in the proposed modified model are explained below."
          center
        />

        {frameworks.map((fw, i) => (
          <div key={i} ref={i === 0 ? r6 : undefined} style={{ marginBottom: 56, opacity: v6 ? 1 : 0, transform: v6 ? 'translateY(0)' : 'translateY(24px)', transition: `all .7s ease ${i * .15}s` }}>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              {/* Header */}
              <div style={{ background: 'linear-gradient(135deg,#14532d,#166534)', padding: '16px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 15 }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem,2vw,1.3rem)', margin: 0 }}>{fw.title}</h3>
                </div>
              </div>

              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: fw.extraImg ? '1fr 1fr' : '1fr 1fr', gap: 36, alignItems: 'flex-start' }}>
                  <div>
                    {fw.text.map((t, j) => <Para key={j} c={t} />)}
                    {fw.bullets && (
                      <BulletList items={fw.bullets} />
                    )}
                  </div>
                  <div>
                    <FigImg src={fw.img} alt={fw.title} caption={fw.caption} height={220} />
                    {fw.extraImg && (
                      <FigImg src={fw.extraImg} alt={fw.title + ' extra'} height={200} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Decision Making Grid section */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--r-xl)', overflow: 'hidden', marginBottom: 40, boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ background: 'linear-gradient(135deg,#14532d,#166534)', padding: '16px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 15 }}>04</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem,2vw,1.3rem)', margin: 0 }}>Decision-Making Grid & Failure Analysis</h3>
            </div>
          </div>
          <div style={{ padding: '28px 32px' }}>
            <H3>Decision-Making Grid (DMG)</H3>
            <Para c="The decision-making grid (DMG) is a tool used to decide the maintenance strategy among similar equipment. A plot of downtime versus failures is used to decide the type of maintenance required for the assets, from the following categories:" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10, marginBottom: 28 }}>
              {dmgStrategies.map((s, i) => (
                <div key={i} className="am-chip" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--r-sm)', padding: '13px 15px', textAlign: 'center' }}>
                  <div style={{ color: '#16a34a', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                    {s.match(/\((\w+)\)/)?.[1] || ''}
                  </div>
                  <div style={{ color: '#374151', fontSize: 12.5, lineHeight: 1.6 }}>{s}</div>
                </div>
              ))}
            </div>

            {/* DMG images row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginBottom: 28 }}>
              <FigImg src={`${IMG}ast8.gif`} alt="DMG" caption="Decision-making grid tool for inverter failure" height={200} />
              <FigImg src={`${IMG}ast9.gif`} alt="Inverter failure data" caption="Inverter failure data — downtime vs frequency" height={200} />
            </div>

            <H3>Failure Mode Effects and Criticality Analysis (FMECA)</H3>
            <Para c="Failure mode effects and criticality analysis (FMECA) is a method aimed at developing quantitative failure analysis linking the potential failure modes and impact of failure with causes of the failure. A typical FMECA example of one inverter is illustrated here, where the failure mode, cause, effect, and maintenance strategy are discussed with a risk priority number (RPN) score compiled from multiplication of occurrence, detection and severity." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              <FigImg src={`${IMG}ast10.gif`} alt="FMECA" caption="FMECA example for inverter analysis" height={200} />
              <FigImg src={`${IMG}ast11.gif`} alt="Occurrence detection severity" caption="Occurrence, detection and severity criteria" height={200} />
            </div>
          </div>
        </div>

        {/* Spare parts management */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--r-xl)', overflow: 'hidden', marginBottom: 40, boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ background: 'linear-gradient(135deg,#166534,#14532d)', padding: '16px 28px' }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem,2vw,1.3rem)', margin: 0 }}>Spare Parts Management</h3>
          </div>
          <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'flex-start' }}>
            <div>
              <Para c="Spare parts management presents the challenge of striking a balance between the impact of a breakdown and loss of revenue versus spares maintenance costs. Mean time between failures (MTBF) and mean time to repair (MTTR) parameters from the computerised maintenance management system (CMMS) are used for all critical systems such as inverters, transformers and high voltage circuit breakers, to formulate a cogent approach." />
              <Para c="A spare parts management framework can be based on three major aspects: the preventive maintenance-based requirement, the contingencies-based requirement, or on corrective maintenance history. Decision-making tools are of vital importance with respect to the contingency and corrective maintenance spare requirements." />
              <Para c="It is evident that the PV modules as currently maintained put the current stock level at risk. Additional stock is demanded because the MTBF rate and existing quantities are not balanced. The purchase of additional PV modules as spares is fully justified." />
            </div>
            <div>
              <FigImg src={`${IMG}ast12.gif`} alt="Spares management" caption="Spares management decision-making grid" height={220} />
            </div>
          </div>
        </div>

        {/* Case study */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 'var(--r-xl)', overflow: 'hidden', marginBottom: 40, boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ background: 'linear-gradient(135deg,#15803d,#166534)', padding: '16px 28px' }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem,2vw,1.3rem)', margin: 0 }}>Case Studies — 200 MW Solar Plant Assessment</h3>
          </div>
          <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'flex-start' }}>
            <div>
              <Para c="Solar Power developed a best practice guideline for solar operation and maintenance activities. The model considers assessment criteria to measure the performance of O&M activities. To assess the performance of the proposed improved integrated OM and AM model, a case study of a 200 MW solar plant was assessed before and after implementation." />
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, padding: '20px 22px', marginBottom: 20 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#16a34a', fontSize: 28, marginBottom: 4 }}>30%</div>
                <div style={{ color: '#374151', fontSize: 14, fontFamily: "'Space Grotesk',sans-serif" }}>Overall increase in assessment score observed after implementation</div>
              </div>
              <Para c="The proposed integration of the AM system, with risk management, optimisation, and continuous improvement aspects, into the existing OM model for solar power plants makes the model more robust. A similar approach should be used for other industries." />
            </div>
            <div>
              <FigImg src={`${IMG}ast13.gif`} alt="Case study results" caption="Before and after implementation — 200 MW plant" height={240} />
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section className="section" style={{ background: '#fff', paddingTop: 60, paddingBottom: 72 }}>
        <SectionTitle badge="Key Benefits" title="What You Gain With GreenChip Asset Management" center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, maxWidth: 860, margin: '0 auto 48px' }}>
          {keyBenefits.map((b, i) => (
            <div key={i} className="am-chip" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--r-md)', padding: '19px 21px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#fff', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Check size={14} strokeWidth={2.5} color="#16a34a"/></div>
              <span style={{ color: '#374151', fontSize: 14, lineHeight: 1.75 }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ background: 'linear-gradient(135deg,#14532d,#166534)', borderRadius: 'var(--r-xl)', padding: '46px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: 8 }}>
              Ready to Maximise Your Solar Asset Performance?
            </h3>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, lineHeight: 1.75 }}>
              Contact our asset management experts today for a free consultation.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-white" onClick={() => setPage('contact')} style={{ padding: '12px 26px', fontSize: 14, borderRadius: 8 }}>
              Get Free Consultation
            </button>
            <button className="btn-white" onClick={() => setPage('epc')} style={{ padding: '12px 26px', fontSize: 14, borderRadius: 8 }}>
              View EPC Services
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns: repeat(5,1fr)"]{grid-template-columns:repeat(2,1fr)!important}
          div[style*="grid-template-columns: repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}
          div[style*="grid-template-columns: repeat(2,1fr)"]{grid-template-columns:1fr!important}
          div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}
