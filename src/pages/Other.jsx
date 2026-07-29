import{useState,useEffect,useMemo}from'react'
import{useReveal}from'../hooks/index.js'
import{IMG,PROJECTS,JOBS,SOLUTIONS,LATEST_GALLERY}from'../data/content.js'
import PageHero from'../components/PageHero.jsx'
import{Check,ArrowRight,ArrowLeft,X,Sun,FlaskConical,Microscope,Truck,Settings,Factory,Rocket,Briefcase,Building2,Landmark,Globe2,Wrench,Handshake,Lightbulb,Zap,IndianRupee,Ruler,Timer,Leaf,TreePine,Home,MapPin,Phone,Mail,Clock,CheckCircle2,Send,Loader2,ZoomIn,Play}from'lucide-react'

/* ══ INITIATIVES ══════════════════════════════ */

const IMG_BASE = IMG

const GALLERY_FOLDER_LABELS = {
  carport:'Solar Carport',
  Enargystorage:'Energy Storage',
  bio_CNG:'Bio-CNG',
  floting:'Floating Solar',
  ground:'Ground Mounted',
  rooftop:'Rooftop Solar',
  transformer:'Substation',
  wind:'Wind Turbine',
}

/* ─── Shared section wrapper ─────────────────── */
const Sec = ({ children, bg = '#fff', pt = 88, pb = 88 }) => (
  <section style={{ background: bg, padding: `${pt}px 8% ${pb}px` }}>
    {children}
  </section>
)

/* ─── Section heading helper ─────────────────── */
const SHead = ({ badge, title, sub, center = false }) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 44 }}>
    {badge && (
      <div className="badge" style={{ marginBottom: 14, justifyContent: center ? 'center' : 'flex-start' }}>
        <span className="dot" />{badge}
      </div>
    )}
    <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.7rem,3.5vw,2.6rem)', color: '#14532d', lineHeight: 1.15, marginBottom: sub ? 14 : 0 }}>
      {title}
    </h2>
    {sub && <p style={{ color: '#6b7280', fontSize: 15, maxWidth: center ? 640 : '100%', margin: center ? '0 auto' : 0, lineHeight: 1.85 }}>{sub}</p>}
  </div>
)

/* ─── Body text helper ───────────────────────── */
const Body = ({ children, style }) => (
  <p style={{ color: '#374151', lineHeight: 1.95, fontSize: 14.5, marginBottom: 18, ...style }}>{children}</p>
)

/* ─── Sub-section heading ────────────────────── */
const H3 = ({ children }) => (
  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 19, color: '#14532d', marginBottom: 12, marginTop: 32 }}>{children}</h3>
)

/* ─── Bullet list ────────────────────────────── */
const BList = ({ items }) => (
  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#374151', fontSize: 14, lineHeight: 1.75 }}>
        <ArrowRight size={15} strokeWidth={2.25} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }}/>
        {item}
      </li>
    ))}
  </ul>
)

/* ─── Numbered list ──────────────────────────── */
const NList = ({ items }) => (
  <ol style={{ paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18, listStyle: 'none' }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#374151', fontSize: 14, lineHeight: 1.75 }}>
        <span style={{ color: '#16a34a', fontWeight: 700, flexShrink: 0, minWidth: 22, fontFamily: "'Space Grotesk',sans-serif" }}>{i + 1}.</span>
        {item}
      </li>
    ))}
  </ol>
)

/* ─── Info card ──────────────────────────────── */
const InfoCard = ({ icon:Icon, title, items, col = '#16a34a', bg = '#f0fdf4', border = '#bbf7d0' }) => (
  <div className="o-card" style={{ background: bg, border: `1px solid ${border}`, borderRadius: 'var(--r-lg)', padding: '30px 26px' }}>
    <div style={{ width:48,height:48,borderRadius:12,background:'#fff',border:`1px solid ${border}`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom: 12 }}><Icon size={22} strokeWidth={1.75} color={col}/></div>
    <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 16, marginBottom: 14 }}>{title}</h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <Check size={15} strokeWidth={2.5} color={col} style={{ flexShrink: 0, marginTop:1 }}/>
          <span style={{ color: '#374151', fontSize: 13.5, lineHeight: 1.7 }}>{it}</span>
        </div>
      ))}
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════
   NEW INITIATIVES LISTING PAGE
   Route: 'initiatives'
══════════════════════════════════════════════════════════════ */
export function Initiatives({ setPage }) {
  const [ref, vis] = useReveal()

  const cards = [
    {
      img: 'greenhyd1.png',
      title: 'Hydrogen Electrolyser',
      tag: 'Green Hydrogen',
      desc: 'Green hydrogen is widely considered to be the future of clean energy production. GreenChip is pioneering electrolyser technology using renewable electricity to produce clean, carbon-free hydrogen fuel.',
      page: 'ni_hydrogen',
      badge: 'Coming Soon',
      badgeIcon: Rocket,
      badgeCol: '#15803d',
    },
    {
      img: 'Latest_Solar_Projects/bio_CNG/bio_CNG3.jpeg',
      title: 'CBG (Bio-CNG) Production Plant',
      tag: 'Bio Energy',
      desc: 'Welcome to GreenChip, your partner in sustainable energy solutions. We specialise in setting up CBG (Bio-CNG) manufacturing plants across India using cutting-edge biomethanation technology.',
      page: 'ni_cbg',
      badge: 'Active Initiative',
      badgeIcon: Leaf,
      badgeCol: '#166534',
    },
  ]

  return (
    <div style={{ background: '#f8fdf9', paddingTop: 34 }}>
      <PageHero
        title="New Initiatives"
        subtitle="Pioneering the next frontier of clean energy technology — hydrogen and bio-energy."
        img={`${IMG_BASE}Initiatives.png`}
        breadcrumb="What We Do → New Initiatives"
      />

      <Sec bg="#fff">
        <SHead badge="Our New Initiatives" title="Pioneering Clean Energy's Next Frontier" center />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className="card"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                opacity: vis ? 1 : 0,
                transform: vis ? 'translateY(0)' : 'translateY(28px)',
                transition: `all .6s ease ${i * .15}s`,
              }}
              onClick={() => setPage(c.page)}
            >
              {/* Image */}
              <div className="media-zoom" style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                <img
                  src={`${IMG_BASE}${c.img}`}
                  alt={c.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,40,15,.6),transparent 55%)' }} />
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '4px 12px', background: 'rgba(255,255,255,.92)', borderRadius: 100, color: c.badgeCol, fontSize: 11, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, display:'inline-flex', alignItems:'center', gap:6 }}>
                  <c.badgeIcon size={12} strokeWidth={2.25}/>{c.badge}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ color: '#16a34a', fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, marginBottom: 8 }}>{c.tag}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: '#14532d', marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.82, marginBottom: 20 }}>{c.desc}</p>
                <button
                  className="btn-primary"
                  onClick={e => { e.stopPropagation(); setPage(c.page) }}
                  style={{ padding: '10px 22px', fontSize: 13, borderRadius: 8, display:'inline-flex', alignItems:'center', gap:7 }}
                >
                  Know More <ArrowRight size={14} strokeWidth={2.25}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   HYDROGEN ELECTROLYSER DETAIL PAGE  (ni-es.html)
   Route: 'ni_hydrogen'
══════════════════════════════════════════════════════════════ */
export function HydrogenPage({ setPage }) {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()

  const keyPoints = [
    'A hydrogen electrolyser splits water molecules (H₂O) into hydrogen (H₂) and oxygen (O₂) gas using electricity through electrolysis.',
    'Hydrogen electrolysers can be powered by various sources, including renewable energy such as wind and solar power.',
    'Electrolysis powered by renewables produces clean and sustainable hydrogen with zero carbon emissions.',
    'Hydrogen electrolysers find applications in energy storage, transportation, and industrial processes.',
    'Hydrogen produced can be used as a fuel source for hydrogen fuel cell vehicles.',
    'Industrial processes like ammonia production can utilise hydrogen as a feedstock.',
  ]

  const processSteps = [
    { icon: Sun, title: 'Renewable Energy as Input', desc: 'Green hydrogen is produced using clean energy from renewable sources like solar and wind, ensuring zero carbon emissions.' },
    { icon: FlaskConical, title: 'Electrolysis — Splitting H₂O', desc: 'Through electrolysis, water is split into hydrogen and oxygen using electricity, generating pure hydrogen without harmful byproducts.' },
    { icon: Microscope, title: 'Separating & Capturing H₂', desc: 'The hydrogen produced is carefully separated and captured, ready for use in various applications from energy storage to industrial processes.' },
    { icon: Truck, title: 'Storage & Distribution', desc: 'Once produced, green hydrogen is safely stored and distributed to industries, ensuring a reliable supply of clean energy.' },
  ]

  const deliveryModels = [
    { icon: Settings, title: 'EPC — Engineering, Procurement & Construction', desc: 'GreenChip delivers end-to-end EPC solutions for green hydrogen projects, from design to commissioning. With a focus on innovation and efficiency, we ensure seamless project execution tailored to your specific energy needs, enabling a smooth transition to clean hydrogen.' },
    { icon: Factory, title: 'BOO — Build Own Operate', desc: "Through our BOO model, GreenChip takes full responsibility for green hydrogen plants, from development to operation. We invest, build, and manage these facilities, allowing businesses to access clean hydrogen without the complexities of ownership, ensuring long-term reliability and sustainability." },
  ]

  return (
    <div style={{ background: '#f8fdf9', paddingTop: 34 }}>
      <PageHero
        title="Hydrogen Electrolyser"
        subtitle="The Green Hydrogen Promise — National Green Hydrogen Mission"
        img={`${IMG_BASE}greenhyd1.png`}
        breadcrumb="New Initiatives → Hydrogen Electrolyser"
      />

      {/* Intro */}
      <Sec bg="#fff">
        <div className="g2" style={{ alignItems: 'center' }}>
          <div className="rev-l" style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-36px)', transition: 'all .8s ease' }} ref={r1}>
            <div className="badge" style={{ marginBottom: 16 }}><span className="dot dot-blink" />National Green Hydrogen Mission</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#14532d', lineHeight: 1.15, marginBottom: 22 }}>
              Green Hydrogen:<br /><span className="grad-text">The Future of Clean Energy</span>
            </h2>
            <Body>
              Green hydrogen is widely considered to be the future of clean energy production, and many companies are now investing in this emerging technology. With the global push towards decarbonization, the demand for green hydrogen is expected to rise significantly in the coming years.
            </Body>
            <Body>
              Electrolysis technology is of great importance for the green transformation of our energy system. It is indispensable for converting electricity into hydrogen, which can be converted into other forms of CO₂-neutral fuels. The processes are also known as Power-to-X.
            </Body>
            <Body>
              The CO₂-neutral fuels can be used for industries and other areas that are difficult to electrify, such as heavy transport. In this way, we can get ships over the sea and planes on the wings with far less climate impact than we do today.
            </Body>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn-primary" onClick={() => setPage('contact')} style={{ padding: '11px 24px', fontSize: 13 }}>Get in Touch</button>
              <button className="btn-outline" onClick={() => setPage('initiatives')} style={{ padding: '11px 24px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}><ArrowLeft size={14} strokeWidth={2.25}/>Back</button>
            </div>
          </div>

          {/* Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={`${IMG_BASE}greenhyd1.png`} alt="Hydrogen Electrolyser" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
            </div>
            <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={`${IMG_BASE}greenhyd1.png`} alt="Green Hydrogen" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </Sec>

      {/* Key Points */}
      <Sec bg="#f0fdf4">
        <SHead badge="How It Works" title="Hydrogen Electrolyser — Key Facts" center />
        <div ref={r2} className="rg-2" style={{ gap: 16 }}>
          {keyPoints.map((pt, i) => (
            <div
              key={i}
              style={{
                background: '#fff', border: '1px solid #bbf7d0', borderRadius: 'var(--r-md)', padding: '22px 24px',
                display: 'flex', alignItems: 'flex-start', gap: 13,
                opacity: v2 ? 1 : 0, transform: v2 ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity .55s ease ${i * .08}s, transform .55s cubic-bezier(.16,1,.3,1) ${i * .08}s, box-shadow .35s ease, border-color .35s ease`,
              }}
              className="o-chip"
            >
              <div style={{ width: 30, height: 30, borderRadius: 8, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}><Check size={14} strokeWidth={2.5} color="#16a34a"/></div>
              <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.78 }}>{pt}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* NGHM */}
      <Sec bg="#fff">
        <div style={{ background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)', border: '1px solid #bbf7d0', borderRadius: 20, padding: '44px 48px', marginBottom: 56 }}>
          <div className="badge" style={{ marginBottom: 14 }}><span className="dot" />Government Initiative</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', color: '#14532d', marginBottom: 16 }}>
            National Green Hydrogen Mission (NGHM)
          </h3>
          <Body>
            On Jan 4, 2022, the Indian Union Government approved a total outlay of <strong style={{ color: '#14532d' }}>INR 19,744 crore</strong> for NGHM, to realize its ambition of making India the Global Hub for production, usage and export of green hydrogen and its derivatives.
          </Body>
          <Body>
            The Government has targeted to produce at least <strong style={{ color: '#14532d' }}>5 MMT (Million Metric Tonnes)</strong> of green hydrogen annually by 2030, which would require 60–100 GW electrolyser capacity and 125 GW renewable energy capacity. This initiative is expected to reduce carbon dioxide emissions by 50 MMT per year.
          </Body>

          <div style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: 14, padding: '24px 28px', marginTop: 24 }}>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 16, marginBottom: 12 }}>
              Strategic Interventions for Green Hydrogen Transition (SIGHT)
            </h4>
            <Body style={{ marginBottom: 10 }}>
              SIGHT is the key mission strategy of NGHM, comprising a comprehensive incentive programme with a total outlay of <strong style={{ color: '#14532d' }}>INR 17,490 crore</strong>:
            </Body>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                ['INR 4,440 Cr', 'Domestic manufacturing of electrolysers'],
                ['INR 13,050 Cr', 'Green hydrogen production incentives'],
                ['5 MMT/year', 'Target annual green hydrogen output by 2030'],
                ['60–100 GW', 'Required electrolyser capacity'],
              ].map(([n, l]) => (
                <div key={n} className="o-chip" style={{ background: '#f0fdf4', borderRadius: 'var(--r-sm)', padding: '15px 17px', border: '1px solid #dcfce7' }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#16a34a', fontSize: 16 }}>{n}</div>
                  <div style={{ color: '#6b7280', fontSize: 12.5, marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process steps */}
        <SHead badge="Production Process" title="How Green Hydrogen is Produced" center />
        <div className="rg-4" style={{ gap: 18, marginBottom: 56 }}>
          {processSteps.map((s, i) => (
            <div key={i} className="card o-step" style={{ padding: '30px 20px', textAlign: 'center' }}>
              <div className="o-step-icon" style={{ display:'flex', justifyContent:'center', marginBottom: 14 }}><s.icon size={32} strokeWidth={1.75} color="#16a34a"/></div>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#16a34a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, margin: '0 auto 14px', fontFamily: "'Space Grotesk',sans-serif" }}>{i + 1}</div>
              <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 14.5, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h4>
              <p style={{ color: '#6b7280', fontSize: 12.5, lineHeight: 1.78 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* What is green hydrogen */}
        <div ref={r3} className="g2" style={{ alignItems: 'center', marginBottom: 56 }}>
          <div style={{ opacity: v3 ? 1 : 0, transform: v3 ? 'translateX(0)' : 'translateX(-30px)', transition: 'all .8s ease' }}>
            <div className="badge" style={{ marginBottom: 14 }}><span className="dot" />Fuel of the Future</div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#14532d', marginBottom: 16 }}>What is Green Hydrogen?</h3>
            <Body>
              Green hydrogen is a powerful and sustainable energy source that is revolutionizing the way we think about fuel and energy production. Unlike traditional hydrogen, which is produced using fossil fuels, green hydrogen is created through a process called electrolysis, where water is split into hydrogen and oxygen using electricity generated from renewable energy sources like wind, solar, or hydropower.
            </Body>
            <Body>
              This results in <strong style={{ color: '#14532d' }}>zero carbon emissions</strong>, making green hydrogen a key player in the global transition to a low-carbon economy.
            </Body>
          </div>
          <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', opacity: v3 ? 1 : 0, transform: v3 ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity .8s ease .2s, transform .8s cubic-bezier(.16,1,.3,1) .2s' }}>
            <img src={`${IMG_BASE}greenhyd1.png`} alt="Green Hydrogen" style={{ width: '100%', height: 400, objectFit: 'cover' }} />
          </div>
        </div>

        {/* Delivery models */}
        <SHead badge="GreenChip Delivery Models" title="State-of-the-Art Green Hydrogen Production" center />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {deliveryModels.map((m, i) => (
            <div key={i} className="card-flat o-card" style={{ padding: '34px 30px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><m.icon size={24} strokeWidth={1.75} color="#16a34a"/></div>
              <div>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 16, marginBottom: 10 }}>{m.title}</h4>
                <p style={{ color: '#6b7280', fontSize: 13.5, lineHeight: 1.82 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <style>{`@media(max-width:900px){
      }`}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   CBG / BIO-CNG DETAIL PAGE  (ni-cng.html)
   Route: 'ni_cbg'
══════════════════════════════════════════════════════════════ */
export function CBGPage({ setPage }) {
  const [r1, v1] = useReveal()
  const [r2, v2] = useReveal()
  const [r3, v3] = useReveal()

  const fiveAreas = [
    { num: '01', title: 'Reception Area (Feeding)', desc: 'Used for loading and unloading of raw materials arrived for preparation of anaerobic digestion. Different biomass has different fermentation processes. Pre-treatments accelerate fermentation and enhance production.' },
    { num: '02', title: 'Digester Area (Fermentation Tank / CSTR)', desc: 'A waterproof airtight container with a means of entry for biomass. The digester contains all the waste to be transformed into energy. Agitators shift the biomass periodically to enable gases and prevent formation of layers.' },
    { num: '03', title: 'Purification Area (PSA)', desc: 'The gas holder is an airproof container aimed to collect various gases during the fermentation process. A gas purification system (PSA) purifies the biogas to CBG via a gas outlet from the digester.' },
    { num: '04', title: 'Filling Area (Compression & Cascading)', desc: 'The final good in the form of gas shifts to the filling area. Here, the compressed biogas is filled into cascades — cylinders into which gaseous fuel is secured and ready to be sent to pumps.' },
    { num: '05', title: 'Bio Fertiliser Organisation Area', desc: 'Waste produced by the plant transforms into slurry (liquid fertilizer) and organic manure (solid fertilizer). GreenChip buys back all final goods produced by the plant, providing additional revenue.' },
  ]

  const investorBenefits = ['Lifetime business for the generation', 'Lifetime return on sales', 'Increasing demand for renewable energy', 'Low risk with consistent earning and business growth']
  const companySupport = ['100% Production Buyback', 'World-class training for seamless operations', 'Collateral-free loan assistance up to Rs. 2 Crore', 'State-of-the-art plant & machinery with robust supply chain']
  const govtSupport = [
    'Income tax holiday for five years',
    'GST benefit on Compressed Biogas Manufacturing Plant',
    'Subsidised rate of interest on the loan',
    'Waiver on land conversion charges',
    'Waste to Energy Program (Ministry of New and Renewable Energy)',
    'National Policy on Biofuels (Ministry of Petroleum and Natural Gas)',
    'Biogas Scheme (Ministry of New and Renewable Energy)',
    'SATAT initiative — set up CBG plants and supply CBG to encourage entrepreneurs',
  ]

  const impacts = [
    'Bio-slurry replaces expensive chemical fertilisers, reducing production costs for small farmers',
    'Improves soil fertility, increases productivity and reduces vulnerability to droughts',
    'Facilitates growing vegetables near homes, improving food nutrition and diet',
    'Reduction of natural gas imports across India',
    'Reduction of GHG emissions and carbon footprint',
    'Reduction in the burning of agriculture residues',
    'Remunerative income to farmers',
    'Employment generation and entrepreneurship opportunities',
    'Effective waste management and circular economy',
  ]

  return (
    <div style={{ background: '#f8fdf9', paddingTop: 34 }}>
      <PageHero
        title="CBG (Bio-CNG) Production Plant"
        subtitle="Your partner in sustainable bio-energy solutions — setting up CBG manufacturing plants across India."
        img={`${IMG_BASE}Latest_Solar_Projects/bio_CNG/bio_CNG.jpeg`}
        breadcrumb="New Initiatives → CBG Production Plant"
      />

      {/* Intro */}
      <Sec bg="#fff">
        <div className="g2" style={{ alignItems: 'center' }} ref={r1}>
          <div style={{ opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(-30px)', transition: 'all .8s ease' }}>
            <div className="badge" style={{ marginBottom: 16 }}><span className="dot dot-blink" />Bio Energy Initiative</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#14532d', lineHeight: 1.15, marginBottom: 22 }}>
              CBG (Bio-CNG)<br /><span className="grad-text">Production Plants</span>
            </h2>
            <Body>
              Welcome to GreenChip, your partner in sustainable energy solutions! We are a leading EPC (Engineering, Procurement, and Construction) company specializing in setting up CBG (Bio-CNG) manufacturing plants across India. With our cutting-edge technology and comprehensive assistance, we are committed to helping entrepreneurs establish their own CBG manufacturing plants, contributing to India's green energy revolution.
            </Body>
            <Body>
              CBG, also known as Bio-CNG, is a promising green fuel produced from organic waste — such as agricultural residues, food waste, and animal manure — through a process called biomethanation. It is a clean, renewable, and carbon-neutral fuel used for transportation, cooking, and electricity generation.
            </Body>
            <Body>
              Our team of experienced professionals at GreenChip provides end-to-end solutions — from project conceptualization and feasibility studies to design, engineering, procurement, construction, and commissioning.
            </Body>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button className="btn-primary" onClick={() => setPage('contact')} style={{ padding: '11px 24px', fontSize: 13 }}>Partner With Us</button>
              <button className="btn-outline" onClick={() => setPage('initiatives')} style={{ padding: '11px 24px', fontSize: 13, display:'inline-flex', alignItems:'center', gap:7 }}><ArrowLeft size={14} strokeWidth={2.25}/>Back</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, opacity: v1 ? 1 : 0, transform: v1 ? 'translateX(0)' : 'translateX(30px)', transition: 'all .8s ease .2s' }}>
            <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={`${IMG_BASE}Latest_Solar_Projects/bio_CNG/bio_CNG2.jpeg`} alt="CBG Plant" style={{ width: '100%', height: 250, objectFit: 'cover' }} />
            </div>
            <div className="media-zoom" style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src={`${IMG_BASE}Latest_Solar_Projects/bio_CNG/bio_CNG5.jpeg`} alt="Bio CNG" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </Sec>

      {/* What is a CBG Plant */}
      <Sec bg="#f0fdf4">
        <SHead badge="Understanding CBG" title="What is a Compressed Biogas Plant?" center />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <Body>
            A Compressed Biogas Plant, also known as a CBG Plant, is a facility that produces clean and renewable energy from organic waste. The process involves converting biodegradable waste — such as food and agricultural waste, animal manure, and sewage — into biogas through anaerobic digestion. The biogas produced is then compressed and purified to remove impurities, resulting in high-quality Compressed Biogas (CBG).
          </Body>
          <Body>
            CBG is a versatile fuel that can be used for cooking, heating, transportation, and power generation. It is a clean and sustainable alternative to fossil fuels and can significantly reduce carbon emissions, air pollution, and dependency on imported fuels.
          </Body>
        </div>

        {/* Circular process images */}
        <div className="rg-3" style={{ gap: 18, marginTop: 36 }}>
          {[['Latest_Solar_Projects/bio_CNG/bio_CNG2.jpeg', 'CBG Plant Setup'], ['Latest_Solar_Projects/bio_CNG/bio_CNG3.jpeg', 'Biogas Process'], ['Latest_Solar_Projects/bio_CNG/bio_CNG4.jpeg', 'Bio Fertilizer']].map(([img, label]) => (
            <div key={label} className="media-zoom o-card" style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #e5e7eb' }}>
              <img src={`${IMG_BASE}${img}`} alt={label} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
              <div style={{ background: '#fff', padding: '12px 16px', borderTop: '1px solid #bbf7d0' }}>
                <div style={{ color: '#15803d', fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, textAlign: 'center' }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Five Areas */}
      <Sec bg="#fff">
        <SHead badge="Plant Architecture" title="Five Areas of a Compressed Biogas Plant" center sub="A biogas plant has five major areas that make the biogas production process possible." />
        <div ref={r2} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {fiveAreas.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'grid', gridTemplateColumns: '64px 1fr', gap: 22, alignItems: 'flex-start', padding: '28px 30px',
                opacity: v2 ? 1 : 0, transform: v2 ? 'translateX(0)' : 'translateX(-24px)',
                transition: `opacity .6s ease ${i * .1}s, transform .6s cubic-bezier(.16,1,.3,1) ${i * .1}s, box-shadow .35s ease, border-color .35s ease`,
              }}
              className="card-flat o-card"
            >
              <div className="o-num" style={{ width: 54, height: 54, borderRadius: 16, background: 'linear-gradient(135deg,#16a34a,#166534)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 16, flexShrink: 0, boxShadow: '0 8px 18px -8px rgba(22,163,74,.6)' }}>{a.num}</div>
              <div>
                <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 17, marginBottom: 8 }}>{a.title}</h4>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.82 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Benefits + Support */}
      <Sec bg="#f8fdf9">
        <SHead badge="Why Partner With GreenChip" title="CBG Manufacturing — Benefits & Support" center />
        <div ref={r3} className="rg-3" style={{ gap: 22 }}>
          <InfoCard
            icon={Briefcase}
            title="Investor Benefits"
            items={investorBenefits}
            bg="#f0fdf4"
            border="#bbf7d0"
          />
          <InfoCard
            icon={Building2}
            title="GreenChip Company Support"
            items={companySupport}
            bg="#dcfce7"
            border="#86efac"
            col="#15803d"
          />
          <InfoCard
            icon={Landmark}
            title="Government Support"
            items={govtSupport}
            bg="#f0fdf4"
            border="#bbf7d0"
          />
        </div>

        {/* Impacts */}
        <div style={{ marginTop: 44, background: '#fff', border: '1px solid #bbf7d0', borderRadius: 20, padding: '36px 40px' }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 20, marginBottom: 20, display:'flex', alignItems:'center', gap:10 }}>
            <Globe2 size={20} strokeWidth={2}/>Environmental & Social Impacts
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {impacts.map((imp, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Check size={15} strokeWidth={2.5} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }}/>
                <span style={{ color: '#374151', fontSize: 13.5, lineHeight: 1.75 }}>{imp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Characteristics */}
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <div style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: 16, padding: '28px 26px' }}>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 16, marginBottom: 14, display:'flex', alignItems:'center', gap:9 }}><Factory size={17} strokeWidth={2}/>Our Plants Are Characterised By:</h4>
            <NList items={['Modular design', 'Operator-oriented implementation', 'Prefabricated and pre-tested construction', 'Fully integrated systems']} />
          </div>
          <div style={{ background: '#fff', border: '1px solid #bbf7d0', borderRadius: 16, padding: '28px 26px' }}>
            <h4 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: '#14532d', fontSize: 16, marginBottom: 14, display:'flex', alignItems:'center', gap:9 }}><Wrench size={17} strokeWidth={2}/>We Take Responsibility For Our Plants:</h4>
            <NList items={['Service and maintenance included', '24/7 hotline for error analysis and troubleshooting']} />
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 44, background: 'linear-gradient(135deg,#14532d,#166534)', borderRadius: 20, padding: '44px 48px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(1.5rem,2.5vw,2rem)', marginBottom: 14 }}>
            We Create a Sustainable, Efficient and Economic Solution
          </h3>
          <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 15, maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.82 }}>
            Join us in our mission to create a greener and more sustainable future for India. Contact us today to explore how we can assist you in setting up a CBG (Bio-CNG) manufacturing plant at your location.
          </p>
          <button className="btn-white" onClick={() => setPage('contact')} style={{ padding: '13px 32px', fontSize: 14, borderRadius: 8, display:'inline-flex', alignItems:'center', gap:8 }}>
            Contact Us Today <ArrowRight size={15} strokeWidth={2.25}/>
          </button>
        </div>
      </Sec>

      <style>{`@media(max-width:900px){
        div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
        div[style*="grid-template-columns: 64px 1fr"]{grid-template-columns:1fr!important}
      }`}</style>
    </div>
  )
}


/* ══ PROJECTS ═════════════════════════════════ */
export function Projects(){
  const[filter,setFilter]=useState('All')
  const[ref,vis]=useReveal()
  const[solutionFilter,setSolutionFilter]=useState('All')
  const[galleryAnim,setGalleryAnim]=useState(true)
  const GALLERY_PAGE_SIZE=15
  const[visibleCount,setVisibleCount]=useState(GALLERY_PAGE_SIZE)

  useEffect(()=>{
    setGalleryAnim(false)
    setVisibleCount(GALLERY_PAGE_SIZE)
    const timer=setTimeout(()=>setGalleryAnim(true),50)
    return()=>clearTimeout(timer)
  },[solutionFilter])
  
  const filtered=filter==='All'?PROJECTS:PROJECTS.filter(p=>p.cat===filter)
  const solutionFolderMap = {
    bess:'Enargystorage',
    floating:'floting',
    solarpark:'ground',
    hybrid:'wind',
    substation:'transformer'
  }

  const buildGallery = () => {
    if(solutionFilter==='All'){
      return Object.entries(LATEST_GALLERY).flatMap(([folder,files])=>files.map(f=>({folder,file:f})))
    }
    const files = LATEST_GALLERY[solutionFilter] || []
    return files.map(f=>({folder:solutionFilter,file:f}))
  }
  const gallery = buildGallery()
  const [previewIndex,setPreviewIndex]=useState(-1)
  const [galleryHover,setGalleryHover]=useState(-1)
  const openPreview = i=>setPreviewIndex(i)
  const closePreview = ()=>setPreviewIndex(-1)
  const prevPreview = ()=>setPreviewIndex(i=> (i-1+gallery.length)%gallery.length)
  const nextPreview = ()=>setPreviewIndex(i=> (i+1)%gallery.length)
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Our Projects" subtitle="Pioneering solar and renewable energy projects across India." img={`${IMG}ourprojects.jpg`} breadcrumb="Projects"/>
      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Portfolio</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d',marginBottom:26}}>
            Latest Solar <span className="grad-text">Projects</span>
          </h2>
          <div style={{marginTop:18,display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap'}}>
            <button onClick={()=>setSolutionFilter('All')} style={{padding:'6px 14px',borderRadius:8,cursor:'pointer',border:`1.5px solid ${solutionFilter==='All'?'#16a34a':'#e5e7eb'}`,background:solutionFilter==='All'?'#f0fdf4':'#fff',color:solutionFilter==='All'?'#16a34a':'#6b7280',fontWeight:600}}>All Solutions</button>
            {SOLUTIONS.map(s=> {
              const folders = Object.keys(LATEST_GALLERY)
              let folder = folders.find(f => f.toLowerCase() === s.id.toLowerCase())
              if(!folder){
                folder = folders.find(f => s.title.toLowerCase().includes(f.toLowerCase()))
              }
              if(!folder){
                if(s.id.toLowerCase().includes('bess') || s.title.toLowerCase().includes('storage')) folder = 'Enargystorage'
                else if(s.id.toLowerCase().includes('float') || s.title.toLowerCase().includes('float')) folder = 'floting'
                else if(s.id.toLowerCase().includes('substat') || s.title.toLowerCase().includes('transformer')) folder = 'transformer'
                else if(s.id.toLowerCase().includes('park')) folder = 'ground'
                else folder = s.id
              }
              const isActive = solutionFilter===folder
              return (
                <button key={s.id} onClick={()=>setSolutionFilter(folder)} style={{padding:'6px 14px',borderRadius:8,cursor:'pointer',border:`1.5px solid ${isActive?'#16a34a':'#e5e7eb'}`,background:isActive?'#f0fdf4':'#fff',color:isActive?'#16a34a':'#6b7280',fontWeight:isActive?700:500}}>{s.title}</button>
              )
            })}
            <button key="bio_CNG" onClick={()=>setSolutionFilter('bio_CNG')} style={{padding:'6px 14px',borderRadius:8,cursor:'pointer',border:`1.5px solid ${solutionFilter==='bio_CNG'?'#16a34a':'#e5e7eb'}`,background:solutionFilter==='bio_CNG'?'#f0fdf4':'#fff',color:solutionFilter==='bio_CNG'?'#16a34a':'#6b7280',fontWeight:solutionFilter==='bio_CNG'?700:500}}>Bio CNG</button>
          </div>
        </div>
        <div ref={ref} className="g3">
          {filtered.map((p,i)=>(
            <div key={`${p.title}-${i}`} className="card" style={{position:'relative',overflow:'hidden',cursor:'pointer',
              opacity:vis?1:0,transform:vis?'scale(1)':'scale(.95)',
              transition:`all .5s ease ${i*.08}s`}}
              onMouseEnter={e=>e.currentTarget.querySelector('.pov').style.opacity='1'}
              onMouseLeave={e=>e.currentTarget.querySelector('.pov').style.opacity='0'}>
              <img src={`${IMG}${p.img}`} alt={p.title} style={{width:'100%',height:260,objectFit:'cover',display:'block',transition:'transform .5s'}}
                onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
              <div className="pov" style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,40,15,.95) 0%,rgba(10,40,15,.3) 55%,transparent 100%)',opacity:0,transition:'opacity .3s',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'24px 20px'}}>
                <div style={{color:'#86efac',fontSize:9.5,letterSpacing:2.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:5,fontWeight:600}}>{p.cat}</div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:17,color:'#fff',marginBottom:4}}>{p.title}</h3>
                <div style={{color:'rgba(255,255,255,.8)',fontSize:12,marginBottom:8,display:'flex',alignItems:'center',gap:5}}><MapPin size={12} strokeWidth={2.25}/>{p.loc}</div>
                <div style={{display:'flex',gap:8}}>
                  <span style={{padding:'3px 11px',background:'rgba(74,222,128,.2)',border:'1px solid rgba(74,222,128,.4)',borderRadius:100,color:'#86efac',fontSize:11,fontFamily:"'Space Grotesk',sans-serif"}}>{p.kw}</span>
                </div>
              </div>
              <div style={{position:'absolute',top:12,left:12}}>
                <span style={{padding:'3px 11px',background:'rgba(255,255,255,.92)',border:'1px solid #e5e7eb',borderRadius:100,color:'#374151',fontSize:10,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500}}>{p.cat}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Solutions gallery - moved outside g3 grid */}
        <div style={{marginTop:52}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:18}}>
            {gallery.length ? gallery.slice(0,visibleCount).map((g,i)=>{
              const src = encodeURI(`${IMG}Latest_Solar_Projects/${g.folder}/${g.file}`)
              const isVideo = g.file.toLowerCase().endsWith('.mp4')
              const isHover = galleryHover===i
              const label = GALLERY_FOLDER_LABELS[g.folder]||g.folder
              return (
                <div key={`${g.folder}-${g.file}-${i}`}
                  onMouseEnter={()=>setGalleryHover(i)}
                  onMouseLeave={()=>setGalleryHover(-1)}
                  onClick={()=>openPreview(i)}
                  style={{
                    position:'relative',overflow:'hidden',borderRadius:18,cursor:'pointer',
                    border:'1px solid #e5e7eb',background:'#0a2818',height:200,
                    boxShadow:isHover?'0 20px 40px -14px rgba(10,40,15,.3)':'0 2px 8px rgba(10,40,15,.06)',
                    transform:`${galleryAnim?'translateY(0)':'translateY(16px)'} ${isHover?'translateY(-4px)':''}`,
                    opacity:galleryAnim?1:0,
                    transition:`opacity .4s cubic-bezier(.34,.1,.68,1) ${(i%GALLERY_PAGE_SIZE)*.05}s, transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease`
                  }}>
                  {isVideo ? (
                    <video src={src} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} muted loop playsInline preload="metadata"/>
                  ) : (
                    <img src={src} alt={g.file} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transform:isHover?'scale(1.08)':'scale(1)',transition:'transform .6s cubic-bezier(.16,1,.3,1)'}}/>
                  )}
                  <div style={{position:'absolute',inset:0,background:isHover?'linear-gradient(to top,rgba(6,30,12,.85) 0%,rgba(6,30,12,.15) 55%,transparent 100%)':'linear-gradient(to top,rgba(6,30,12,.55) 0%,transparent 45%)',transition:'background .35s ease'}}/>

                  <div style={{position:'absolute',top:12,left:12,padding:'4px 11px',background:'rgba(255,255,255,.14)',border:'1px solid rgba(255,255,255,.28)',borderRadius:100,backdropFilter:'blur(8px)',color:'#fff',fontSize:9.5,fontWeight:600,letterSpacing:1.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif"}}>{label}</div>

                  {isVideo ? (
                    <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:48,height:48,borderRadius:'50%',background:'rgba(255,255,255,.2)',border:'1px solid rgba(255,255,255,.4)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <Play size={18} strokeWidth={2} color="#fff" fill="#fff" style={{marginLeft:2}}/>
                    </div>
                  ) : (
                    <div style={{position:'absolute',top:'50%',left:'50%',transform:`translate(-50%,-50%) scale(${isHover?1:.6})`,opacity:isHover?1:0,transition:'all .3s cubic-bezier(.16,1,.3,1)',width:44,height:44,borderRadius:'50%',background:'rgba(255,255,255,.16)',border:'1px solid rgba(255,255,255,.35)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <ZoomIn size={18} strokeWidth={2} color="#fff"/>
                    </div>
                  )}
                </div>
              )
            }) : (
              <div style={{gridColumn:'1 / -1',padding:24,background:'#ecfdf5',border:'1px solid #bbf7d0',borderRadius:16,textAlign:'center',color:'#166534'}}>No gallery images are available for this solution yet.</div>
            )}
          </div>
          {visibleCount<gallery.length&&(
            <div style={{display:'flex',justifyContent:'center',marginTop:32}}>
              <button className="btn-outline" onClick={()=>setVisibleCount(v=>v+GALLERY_PAGE_SIZE)} style={{padding:'12px 32px',fontSize:14,borderRadius:10}}>
                Load More ({gallery.length-visibleCount} more)
              </button>
            </div>
          )}
        </div>
        {/* Preview modal */}
        {previewIndex>-1 && (
          <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1200}} onClick={closePreview}>
            <div style={{maxWidth:'92%',maxHeight:'86%',position:'relative'}} onClick={e=>e.stopPropagation()}>
              <button className="lb-close" onClick={closePreview} aria-label="Close preview" style={{position:'absolute',right:-12,top:-12,background:'#fff',borderRadius:999,padding:8,border:'none',cursor:'pointer',display:'flex',zIndex:2}}><X size={16} strokeWidth={2.25}/></button>
              <button className="lb-prev" onClick={prevPreview} aria-label="Previous" style={{position:'absolute',left:-48,top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,.9)',borderRadius:999,padding:'10px 12px',border:'none',cursor:'pointer',display:'flex',zIndex:2}}><ArrowLeft size={16} strokeWidth={2.25}/></button>
              <button className="lb-next" onClick={nextPreview} aria-label="Next" style={{position:'absolute',right:-48,top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,.9)',borderRadius:999,padding:'10px 12px',border:'none',cursor:'pointer',display:'flex',zIndex:2}}><ArrowRight size={16} strokeWidth={2.25}/></button>
              {(() => {
                const item = gallery[previewIndex]
                const src = encodeURI(`${IMG}Latest_Solar_Projects/${item.folder}/${item.file}`)
                return item.file.toLowerCase().endsWith('.mp4') ? (
                  <video src={src} style={{width:'100%',height:'100%',maxHeight:'80vh',borderRadius:8}} controls autoPlay />
                ) : (
                  <img src={src} style={{width:'100%',height:'auto',maxHeight:'80vh',borderRadius:8,objectFit:'contain'}} />
                )
              })()}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

/* ══ CALCULATOR ═══════════════════════════════ */
const BILL_MIN = 500, BILL_MAX = 100000

export function Calculator(){
  const[type,setType]=useState('home')
  const[bill,setBill]=useState(3000)
  const[done,setDone]=useState(false)
  const[show,setShow]=useState(false)

  // Derived so the figures stay live once the estimate has been run once.
  const result=useMemo(()=>{
    const rpu=type==='home'?6.5:8.5
    const units=bill/rpu
    const kwp=type==='home'?Math.max(1,parseFloat((units/130).toFixed(1))):Math.max(3,parseFloat((units/100).toFixed(1)))
    const annUnits=Math.round(kwp*1420)
    const annSav=Math.round(annUnits*rpu)
    const area=Math.round(kwp*80)
    const unitCost = type==='home' ? 70000 : 40000
    const base=Math.round(kwp*unitCost)
    const subsidy=(type==='home'&&kwp<=12)?78000:0
    const eff=Math.max(0,base-subsidy)
    const payback=eff>0?parseFloat((eff/annSav).toFixed(1)):0
    const co2=Math.round(annUnits*0.82)
    const trees=Math.round(co2/21)
    return{kwp,annUnits,annSav,area,base,subsidy,eff,payback,co2,trees}
  },[bill,type])

  const calc=()=>{setDone(true);setShow(false);setTimeout(()=>setShow(true),80)}

  const pct=Math.min(100,Math.max(0,((bill-BILL_MIN)/(BILL_MAX-BILL_MIN))*100))

  const fmt = v=>{
    if(v>=10000000){ const n=v/10000000; return (Number.isInteger(n)?n:n.toFixed(1))+'CR' }
    if(v>=100000){ const n=v/100000; return (Number.isInteger(n)?n:n.toFixed(1))+'L' }
    if(v>=1000){ const n=v/1000; return (Number.isInteger(n)?n:n.toFixed(1))+'k' }
    return v
  }
  const commercialOptions=[4000,7000,10000,20000,30000,40000,50000,100000,500000,1000000,3000000,5000000,10000000]
  const residentialOptions=[1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,15000,20000,25000]
  const opts = type==='commercial'?commercialOptions:residentialOptions

  const secondary=[
    {ic:Sun,   val:`${result.annUnits.toLocaleString('en-IN')} kWh`, label:'Annual Generation'},
    {ic:Ruler, val:`${result.area} sqft`,                            label:'Roof Area Required'},
    {ic:Timer, val:`${result.payback} Yrs`,                          label:'Payback Period'},
    {ic:Leaf,  val:`${result.co2.toLocaleString('en-IN')} kg`,       label:'CO₂ Saved / Year'},
  ]

  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Solar Calculator" subtitle="AI-powered solar savings estimator for Indian rooftop & ground installations." img={`${IMG}calculate.png`} breadcrumb="Solar Calculator"/>

      <section className="section" style={{background:'#fff',maxWidth:1180,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:44}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Calculate Your Savings</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d',marginBottom:10}}>Explore Your Solar Potential</h2>
          <p style={{color:'#6b7280',fontSize:15}}>Enter your monthly electricity bill to get an instant estimate</p>
        </div>

        <div className="calc-shell">
          {/* ───────────────── INPUT PANEL ───────────────── */}
          <div className="calc-panel" style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'var(--r-xl)',padding:'32px 30px',boxShadow:'var(--shadow-md)',display:'flex',flexDirection:'column'}}>

            {/* Segmented type control */}
            <div className="calc-seg" style={{position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gap:4,background:'#f0fdf4',border:'1px solid #dcfce7',borderRadius:'var(--r-pill)',padding:4,marginBottom:32}}>
              <span aria-hidden style={{position:'absolute',top:4,bottom:4,left:4,width:'calc(50% - 6px)',borderRadius:'var(--r-pill)',background:'linear-gradient(135deg,#16a34a,#166534)',boxShadow:'0 8px 18px -8px rgba(22,163,74,.7)',transform:type==='commercial'?'translateX(calc(100% + 4px))':'translateX(0)',transition:'transform .4s cubic-bezier(.16,1,.3,1)'}}/>
              {[['home',Home,'Residential / Home'],['commercial',Factory,'Commercial / Industrial']].map(([v,Ic,l])=>(
                <button key={v} onClick={()=>{setType(v)}}
                  style={{position:'relative',zIndex:1,padding:'11px 12px',borderRadius:'var(--r-pill)',cursor:'pointer',border:'none',background:'transparent',
                    color:type===v?'#fff':'#15803d',
                    fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:13.5,
                    display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                    transition:'color .3s ease'}}>
                  <Ic size={15} strokeWidth={2}/> {l}
                </button>
              ))}
            </div>

            {/* Bill amount */}
            <label style={{display:'block',color:'#15803d',fontFamily:"'Space Grotesk',sans-serif",fontSize:11,letterSpacing:2.5,textTransform:'uppercase',fontWeight:600,marginBottom:14}}>Monthly Electricity Bill</label>

            <div className="calc-amount" style={{display:'flex',alignItems:'baseline',gap:4,background:'#f8fdf9',border:'1.5px solid #dcfce7',borderRadius:'var(--r-lg)',padding:'18px 22px',marginBottom:20}}>
              <span style={{color:'#16a34a',fontSize:26,fontWeight:800,fontFamily:"'Syne',sans-serif",lineHeight:1}}>₹</span>
              <input type="number" value={bill} onChange={e=>setBill(Number(e.target.value))} aria-label="Monthly electricity bill"
                style={{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',fontSize:'clamp(1.7rem,4vw,2.3rem)',fontWeight:800,fontFamily:"'Syne',sans-serif",color:'#14532d',lineHeight:1.1,padding:0}}/>
              <span style={{color:'#9ca3af',fontSize:12,fontFamily:"'Space Grotesk',sans-serif",whiteSpace:'nowrap'}}>/ month</span>
            </div>

            {/* Slider */}
            <input className="calc-range" type="range" min={BILL_MIN} max={BILL_MAX} step={500} value={Math.min(bill,BILL_MAX)}
              onChange={e=>setBill(Number(e.target.value))}
              style={{'--pct':`${pct}%`}}/>
            <div style={{display:'flex',justifyContent:'space-between',color:'#9ca3af',fontSize:11,marginTop:4,marginBottom:28,fontFamily:"'Space Grotesk',sans-serif"}}>
              <span>₹500</span><span>₹1,00,000</span>
            </div>

            {/* Quick picks */}
            <div style={{color:'#9ca3af',fontFamily:"'Space Grotesk',sans-serif",fontSize:10.5,letterSpacing:2,textTransform:'uppercase',marginBottom:11,fontWeight:600}}>Quick Select</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:7,marginBottom:26}}>
              {opts.map(v=> (
                <button key={v} className="calc-chip" onClick={()=>setBill(v)}
                  style={{padding:'7px 14px',borderRadius:'var(--r-pill)',cursor:'pointer',
                    border:`1.5px solid ${bill===v?'#16a34a':'#e5e7eb'}`,
                    background:bill===v?'#f0fdf4':'#fff',
                    color:bill===v?'#16a34a':'#6b7280',
                    fontFamily:"'Space Grotesk',sans-serif",fontSize:12.5,fontWeight:bill===v?700:400}}>
                  ₹{fmt(v)}
                </button>
              ))}
            </div>

            <button className="btn-primary" onClick={calc} style={{width:'100%',padding:'16px',borderRadius:'var(--r-md)',fontSize:15.5,marginTop:'auto'}}>
              <Zap size={18} strokeWidth={2}/>Calculate My Solar Savings
            </button>
          </div>

          {/* ───────────────── RESULTS PANEL ───────────────── */}
          <div className="calc-panel">
            {!done ? (
              <div className="calc-empty" style={{height:'100%',minHeight:420,background:'#f8fdf9',border:'1.5px dashed #bbf7d0',borderRadius:'var(--r-xl)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'40px 32px'}}>
                <div style={{width:72,height:72,borderRadius:'50%',background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20}}>
                  <Zap size={28} strokeWidth={1.75} color="#16a34a"/>
                </div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#14532d',fontSize:19,marginBottom:10}}>Your Solar Estimate</h3>
                <p style={{color:'#6b7280',fontSize:13.5,lineHeight:1.8,maxWidth:280}}>Enter your monthly electricity bill to get an instant estimate</p>
              </div>
            ) : (
              <div style={{display:'flex',flexDirection:'column',gap:14,height:'100%',opacity:show?1:0,transform:show?'translateY(0)':'translateY(14px)',transition:'opacity .5s ease, transform .5s cubic-bezier(.16,1,.3,1)'}}>

                {/* Headline metrics */}
                <div style={{background:'linear-gradient(135deg,#14532d,#166534 55%,#15803d)',borderRadius:'var(--r-xl)',padding:'30px 30px 28px',position:'relative',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
                  <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,.07) 1px,transparent 0)',backgroundSize:'26px 26px',pointerEvents:'none'}}/>
                  <div style={{position:'absolute',top:'-45%',right:'-15%',width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,rgba(74,222,128,.28),transparent 70%)',pointerEvents:'none'}}/>

                  <div style={{position:'relative',display:'inline-flex',alignItems:'center',gap:7,padding:'5px 13px',background:'rgba(255,255,255,.14)',border:'1px solid rgba(255,255,255,.26)',borderRadius:'var(--r-pill)',color:'#fff',fontSize:10,letterSpacing:2,textTransform:'uppercase',fontWeight:700,fontFamily:"'Space Grotesk',sans-serif",marginBottom:20}}>
                    <span style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 8px 2px rgba(74,222,128,.8)'}}/>Your Solar Estimate
                  </div>

                  <div style={{position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                    <div>
                      <div style={{display:'flex',alignItems:'center',gap:7,color:'#bbf7d0',fontSize:10,letterSpacing:1.4,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:8}}>
                        <Zap size={13} strokeWidth={2}/>Ideal System Size
                      </div>
                      <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#fff',fontSize:'clamp(1.7rem,3.4vw,2.4rem)',lineHeight:1,letterSpacing:'-.02em'}}>{result.kwp} kW</div>
                    </div>
                    <div>
                      <div style={{display:'flex',alignItems:'center',gap:7,color:'#bbf7d0',fontSize:10,letterSpacing:1.4,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:8}}>
                        <IndianRupee size={13} strokeWidth={2}/>Annual Savings
                      </div>
                      <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#4ade80',fontSize:'clamp(1.7rem,3.4vw,2.4rem)',lineHeight:1,letterSpacing:'-.02em'}}>₹{result.annSav.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                </div>

                {/* Secondary metrics */}
                <div className="calc-metrics" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                  {secondary.map((m,i)=>(
                    <div key={i} className="calc-metric" style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'var(--r-md)',padding:'18px 18px'}}>
                      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                        <span style={{width:30,height:30,borderRadius:9,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                          <m.ic size={15} strokeWidth={1.9} color="#16a34a"/>
                        </span>
                        <span style={{color:'#6b7280',fontSize:10,letterSpacing:1.2,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",lineHeight:1.3}}>{m.label}</span>
                      </div>
                      <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#14532d',fontSize:'clamp(1rem,2vw,1.3rem)'}}>{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Cost breakdown */}
                <div className="calc-cost" style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'var(--r-lg)',padding:'24px 26px'}}>
                  <h4 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#14532d',fontSize:15.5,marginBottom:16,display:'flex',alignItems:'center',gap:9}}><Lightbulb size={17} strokeWidth={2}/>Cost Breakdown</h4>
                  {[
                    ['Base Price (Excl. Subsidy & GST)',`₹${result.base.toLocaleString('en-IN')}`,'#374151'],
                    ['PM Surya Ghar Govt. Subsidy',result.subsidy>0?`− ₹${result.subsidy.toLocaleString('en-IN')}`:'N/A (Commercial)','#16a34a'],
                  ].map(([label,val,col],i)=>(
                    <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,padding:'11px 0',borderBottom:'1px solid #f3f4f6'}}>
                      <span style={{color:'#6b7280',fontSize:13}}>{label}</span>
                      <span style={{color:col,fontWeight:600,fontFamily:"'Syne',sans-serif",fontSize:14,whiteSpace:'nowrap'}}>{val}</span>
                    </div>
                  ))}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,padding:'15px 18px',background:'linear-gradient(135deg,#f0fdf4,#dcfce7)',borderRadius:'var(--r-md)',border:'1px solid #bbf7d0',marginTop:14}}>
                    <span style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#14532d',fontSize:14}}>Effective Cost *</span>
                    <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#16a34a',fontSize:20,whiteSpace:'nowrap'}}>₹{result.eff.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Trees */}
                <div style={{display:'flex',alignItems:'center',gap:13,padding:'16px 20px',background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:'var(--r-md)'}}>
                  <TreePine size={26} strokeWidth={1.75} color="#16a34a" style={{flexShrink:0}}/>
                  <span style={{color:'#374151',fontSize:13,lineHeight:1.7}}>Your system saves <strong style={{color:'#16a34a'}}>{result.co2.toLocaleString('en-IN')} kg</strong> CO₂/year — equal to planting <strong style={{color:'#16a34a'}}>{result.trees} trees</strong>!</span>
                </div>

                <p style={{color:'#9ca3af',fontSize:11.5,lineHeight:1.7}}>* Taxes &amp; net-metering charges extra. PM Surya Ghar subsidy for residential ≤10 kW. Estimates vary by location and site conditions.</p>
              </div>
            )}
          </div>
        </div>

        {/* Map for Contact */}
        <div style={{marginTop:32}}>
          <div style={{borderRadius:'var(--r-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',border:'1px solid #e5e7eb'}}>
            <iframe
              title="GreenChip Office Location"
              src="https://www.google.com/maps?q=17.4251103,78.4031862&z=17&output=embed"
              width="100%"
              height="360"
              style={{border:0,display:'block'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        .calc-shell{display:grid;grid-template-columns:1.05fr 1fr;gap:22px;align-items:stretch}
        .calc-shell > .calc-panel{height:100%}

        /* Hide the number input spinners so the big figure stays clean */
        .calc-amount input::-webkit-outer-spin-button,
        .calc-amount input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
        .calc-amount input[type=number]{-moz-appearance:textfield}
        .calc-amount{transition:border-color .25s ease,box-shadow .25s ease}
        .calc-amount:focus-within{border-color:#16a34a;box-shadow:0 0 0 4px rgba(34,197,94,.14)}

        /* Custom range slider — filled track in brand green */
        .calc-range{-webkit-appearance:none;appearance:none;width:100%;background:transparent;height:24px;cursor:pointer;display:block}
        .calc-range:focus{outline:none}
        .calc-range::-webkit-slider-runnable-track{
          height:8px;border-radius:99px;
          background:linear-gradient(90deg,#16a34a 0%,#4ade80 var(--pct),#e5e7eb var(--pct),#e5e7eb 100%);
        }
        .calc-range::-webkit-slider-thumb{
          -webkit-appearance:none;appearance:none;
          width:22px;height:22px;border-radius:50%;margin-top:-7px;
          background:#fff;border:3px solid #16a34a;
          box-shadow:0 4px 10px -2px rgba(22,163,74,.5);
          transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease;
        }
        .calc-range:hover::-webkit-slider-thumb{transform:scale(1.12)}
        .calc-range:active::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 0 0 6px rgba(34,197,94,.18)}
        .calc-range::-moz-range-track{height:8px;border-radius:99px;background:#e5e7eb}
        .calc-range::-moz-range-progress{height:8px;border-radius:99px;background:linear-gradient(90deg,#16a34a,#4ade80)}
        .calc-range::-moz-range-thumb{
          width:18px;height:18px;border-radius:50%;
          background:#fff;border:3px solid #16a34a;
          box-shadow:0 4px 10px -2px rgba(22,163,74,.5);
        }

        @media(max-width:960px){
          .calc-shell{grid-template-columns:1fr;gap:18px}
          .calc-empty{min-height:260px!important}
        }
        @media(max-width:600px){
          .calc-metrics{grid-template-columns:1fr!important}
          .calc-cost{padding:20px!important}
        }
      `}</style>
    </div>
  )
}

/* ══ CAREERS ══════════════════════════════════ */
export function Careers(){
  const[open,setOpen]=useState(null)
  const[ref,vis]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Careers" subtitle="Join us in powering India's clean energy revolution." img={`${IMG}carear.png`} breadcrumb="Careers"/>
      <section className="section" style={{background:'#fff'}}>
        {/* Hero copy */}
        <div className="car-hero" style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:'var(--r-xl)',padding:'50px 46px',marginBottom:60,display:'grid',gridTemplateColumns:'1fr 1fr',gap:52,alignItems:'center'}}>
          <div>
            <div className="badge" style={{marginBottom:16}}><span className="dot dot-blink"/>We're Hiring</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'#14532d',lineHeight:1.15,marginBottom:18}}>
              Saving the Day —<br/><span className="grad-text">Every Day</span>
            </h2>
            <p style={{color:'#374151',lineHeight:1.9,fontSize:15,marginBottom:14}}>Our amazing people work together to deliver the exceptional every day, united in our purpose to unleash limitless energy.</p>
            <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,marginBottom:24}}>Each person is vital. Daily we're servicing solar panels; collaborating to build India's biggest EPC partner. Join a team that matters.</p>
            <div style={{display:'flex',alignItems:'center',gap:16,padding:'20px 24px',background:'#fff',border:'1px solid #bbf7d0',borderRadius:'var(--r-md)',boxShadow:'var(--shadow-sm)'}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#16a34a',fontSize:36,lineHeight:1}}>10</div>
              <div>
                <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#14532d',fontSize:14}}>Positions Open</div>
                <div style={{color:'#6b7280',fontSize:12}}>Apply now and join our team</div>
              </div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            {[[Globe2,'Impact','Work on projects powering thousands of homes'],[Rocket,'Growth','Fast-track your career in renewable energy'],[Handshake,'Culture','Collaborative, purpose-driven team'],[Lightbulb,'Innovation','Solar, storage & hydrogen technology']].map(([Ic,t,d])=>(
              <div key={t} className="o-chip" style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'var(--r-md)',padding:'22px 18px'}}>
                <div style={{marginBottom:8}}><Ic size={22} strokeWidth={1.75} color="#16a34a"/></div>
                <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#16a34a',fontSize:13,marginBottom:4}}>{t}</div>
                <div style={{color:'#6b7280',fontSize:12,lineHeight:1.7}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{textAlign:'center',marginBottom:40}}>
          <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Open Positions</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.2rem)',color:'#14532d'}}>Apply For Positions</h2>
        </div>

        <div ref={ref} style={{display:'flex',flexDirection:'column',gap:13}}>
          {JOBS.map((j,i)=>(
            <div key={i} className="job-row" style={{background:'#fff',border:`1.5px solid ${open===i?'#16a34a':'#e5e7eb'}`,borderRadius:'var(--r-lg)',overflow:'hidden',
              boxShadow:open===i?'var(--shadow-md)':'var(--shadow-sm)',
              transition:'border-color .3s ease, box-shadow .3s ease, transform .3s cubic-bezier(.16,1,.3,1)',
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(18px)'}}>
              <div className="job-head" onClick={()=>setOpen(open===i?null:i)} style={{padding:'24px 30px',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:18}}>
                <div className="job-lead" style={{display:'flex',alignItems:'center',gap:16,minWidth:0}}>
                  <div className="job-icon" style={{width:50,height:50,borderRadius:14,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><j.icon size={22} strokeWidth={1.75} color="#16a34a"/></div>
                  <div style={{minWidth:0}}>
                    <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:16.5,color:'#14532d',marginBottom:4}}>{j.title}</h3>
                    <div style={{display:'flex',gap:9,flexWrap:'wrap',alignItems:'center'}}>
                      <span style={{color:'#16a34a',fontSize:12,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500}}>{j.dept}</span>
                      <span style={{color:'#d1d5db'}}>•</span>
                      <span style={{color:'#6b7280',fontSize:12,whiteSpace:'nowrap'}}>{j.type}</span>
                    </div>
                  </div>
                </div>
                <div className="job-actions" style={{display:'flex',alignItems:'center',gap:11,flexShrink:0}}>
                  <a href="https://forms.gle/XX6yqFdGb1n1CxVJA" target="_blank" rel="noopener noreferrer"
                    onClick={e=>e.stopPropagation()}
                    className="btn-primary" style={{padding:'8px 18px',fontSize:12,textDecoration:'none',borderRadius:8}}>
                    Apply Now
                  </a>
                  <div style={{width:28,height:28,borderRadius:'50%',background:'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center',color:'#374151',fontSize:16,transition:'transform .25s',transform:open===i?'rotate(45deg)':'rotate(0)'}}>+</div>
                </div>
              </div>
              {open===i&&j.resp.length>0&&(
                <div style={{padding:'0 30px 30px',borderTop:'1px solid #f3f4f6'}}>
                  <p style={{color:'#374151',lineHeight:1.85,fontSize:14,margin:'20px 0 24px'}}>{j.desc}</p>
                  <div className="g2" style={{gap:28}}>
                    <div>
                      <h4 style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#16a34a',fontSize:11.5,letterSpacing:1.5,textTransform:'uppercase',marginBottom:13}}>Key Responsibilities</h4>
                      <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                        {j.resp.map((r,ri)=>(
                          <li key={ri} style={{display:'flex',alignItems:'flex-start',gap:9,color:'#6b7280',fontSize:13.5,lineHeight:1.75}}>
                            <ArrowRight size={13} strokeWidth={2.25} color="#16a34a" style={{marginTop:3,flexShrink:0}}/>{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#16a34a',fontSize:11.5,letterSpacing:1.5,textTransform:'uppercase',marginBottom:13}}>Requirements</h4>
                      <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
                        {j.req.map((r,ri)=>(
                          <li key={ri} style={{display:'flex',alignItems:'flex-start',gap:9,color:'#6b7280',fontSize:13.5,lineHeight:1.75}}>
                            <Check size={13} strokeWidth={2.5} color="#16a34a" style={{marginTop:3,flexShrink:0}}/>{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Map */}
        <div style={{marginTop:32}}>
          <div style={{borderRadius:'var(--r-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',border:'1px solid #e5e7eb'}}>
            <iframe
              title="GreenChip Office Location"
              src="https://www.google.com/maps?q=17.4251103,78.4031862&z=17&output=embed"
              width="100%"
              height="360"
              style={{border:0,display:'block'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/* ══ CONTACT ══════════════════════════════════ */
const CONTACT_API = '/api/send-contact.php'

export function   Contact({setPage}){
  const[form,setForm]=useState({name:'',email:'',phone:'',subject:'',message:''})
  const[sent,setSent]=useState(false)
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState('')
  const[ref,vis]=useReveal()

  const handleSubmit = async()=>{
    setError('')
    if(!form.name||!form.email||!form.message) return alert('Please fill in name, email, and message')
    
    setLoading(true)
    try{
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if(!response.ok){
        throw new Error(data.error || 'Failed to send')
      }

      setSent(true)
      setForm({name:'',email:'',phone:'',subject:'',message:''})
      setTimeout(()=>setSent(false),3000)
    }catch(err){
      console.error('Error:', err)
      setError(`Failed to send: ${err.message}`)
    }finally{
      setLoading(false)
    }
  }

  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Contact Us" subtitle="Get in touch with our solar energy experts today." img={`${IMG}contact.png`} breadcrumb="Contact"/>
      <section className="section" style={{background:'#fff'}}>
        {/* Info cards */}
        <div className="g3" style={{marginBottom:60}}>
          {[
            {ic:MapPin,t:'Our Office',lines:['GreenChip Energy','64, Nandagiri Hills Rear Rd, HUDA Enclave, Jubilee Hills, Hyderabad, Telangana 500033'],col:'#16a34a',bg:'#f0fdf4',border:'#bbf7d0'},
            {ic:Phone,t:'Call Us',lines:['84648 84642','9010434455'],col:'#059669',bg:'#ecfdf5',border:'#6ee7b7'},
            {ic:Mail,t:'Email Us',lines:['info@greenchipenergy.com','Mon–Fri: 10AM – 6PM'],col:'#15803d',bg:'#dcfce7',border:'#86efac'},
          ].map((c,i)=>(
            <div key={i} className="o-card" style={{background:c.bg,border:`1px solid ${c.border}`,borderRadius:'var(--r-xl)',padding:'36px 28px',textAlign:'center'}}>
              <div className="am-icon" style={{width:60,height:60,borderRadius:18,background:'#fff',border:`1px solid ${c.border}`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',boxShadow:'var(--shadow-sm)'}}><c.ic size={24} strokeWidth={1.75} color={c.col}/></div>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#14532d',fontSize:18,marginBottom:10}}>{c.t}</div>
              {c.lines.map((l,li)=><div key={li} style={{color:'#374151',fontSize:14,lineHeight:1.9}}>{l}</div>)}
            </div>
          ))}
        </div>

        {/* Form + Info */}
        <div ref={ref} className="g2">
          {/* Form */}
          <div className={`rev-l ${vis?'vis':''}`}>
            <div className="badge" style={{marginBottom:16}}><span className="dot"/>Send a Message</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.7rem,3vw,2.3rem)',color:'#14532d',marginBottom:28}}>
              Feel Free To <span className="grad-text">Contact Us</span>
            </h2>
            {sent?(
              <div style={{textAlign:'center',padding:'52px 0'}}>
                <div style={{display:'flex',justifyContent:'center',marginBottom:16}}><CheckCircle2 size={52} strokeWidth={1.75} color="#16a34a"/></div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#16a34a',fontSize:22,marginBottom:10}}>Message Sent!</h3>
                <p style={{color:'#6b7280',marginBottom:22}}>We'll get back to you within 24 hours.</p>
                <button className="btn-outline" onClick={()=>{setSent(false);setError('')}} style={{padding:'10px 26px',fontSize:13}}>Send Another</button>
              </div>
            ):(
              <div style={{display:'flex',flexDirection:'column',gap:13}}>
                {error && <div style={{padding:10,background:'#fee2e2',border:'1px solid #fca5a5',borderRadius:6,color:'#7f1d1d',fontSize:13}}>{error}</div>}
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:13}}>
                  <input className="input" placeholder="Full Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/>
                  <input className="input" placeholder="Email Address" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:13}}>
                  <input className="input" placeholder="Phone Number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                  <input className="input" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
                </div>
                <textarea className="input" placeholder="Your message..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} style={{resize:'vertical'}} required/>
                <button className="btn-primary" onClick={handleSubmit} disabled={loading} style={{padding:'14px',borderRadius:10,fontSize:15,opacity:loading?0.7:1,cursor:loading?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:9}}>
                  {loading?<><Loader2 size={16} strokeWidth={2} className="spin"/>Sending...</>:<><Send size={15} strokeWidth={2}/>Send Message<ArrowRight size={15} strokeWidth={2.25}/></>}
                </button>
              </div>
            )}
          </div>
          {/* Info */}
          <div className={`rev-r ${vis?'vis':''}`}>
            <div className="badge" style={{marginBottom:16}}><span className="dot"/>Get in Touch</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.7rem,3vw,2.3rem)',color:'#14532d',marginBottom:28}}>
              We're Here To <span className="grad-text">Help You</span>
            </h2>
            <div style={{display:'flex',flexDirection:'column',gap:18,marginBottom:34}}>
              {[[MapPin,'Address','64, Nandagiri Hills Rear Rd, HUDA Enclave, Jubilee Hills, Hyderabad, Telangana 500033'],[Phone,'Phone','84648 84642 / 9010434455'],[Mail,'Email','info@greenchipenergy.com'],[Clock,'Hours','Mon–Fri: 10:00 AM – 6:00 PM']].map(([Ic,label,val])=>(
                <div key={label} style={{display:'flex',alignItems:'flex-start',gap:14}}>
                  <div className="am-icon" style={{width:46,height:46,borderRadius:14,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Ic size={18} strokeWidth={1.75} color="#16a34a"/></div>
                  <div>
                    <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#16a34a',fontSize:10.5,letterSpacing:2,textTransform:'uppercase',marginBottom:3}}>{label}</div>
                    <div style={{color:'#374151',fontSize:14}}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:'var(--r-lg)',padding:'26px 24px'}}>
              <h4 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#14532d',fontSize:15,marginBottom:13}}>Quick Links</h4>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {[
                  ['About Us','about'],
                  ['Solutions','solutions'],
                  ['Services','services'],
                  ['Calculator','calculator'],
                  ['Careers','careers']
                ].map(([label,key])=>{
                  const nav = ()=>{ if(setPage){ setPage(key); window.scrollTo(0,0); try{window.dispatchEvent(new Event('nav-change'))}catch(e){} } }
                  return (
                    <span key={key} className="ql-chip" onClick={nav} style={{padding:'6px 14px',background:'#fff',border:'1px solid #bbf7d0',borderRadius:'var(--r-pill)',color:'#16a34a',fontSize:12,cursor:'pointer',fontFamily:"'Space Grotesk',sans-serif",fontWeight:500}}>{label}</span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Map (Contact) */}
        <div style={{marginTop:32}}>
          <div style={{borderRadius:'var(--r-lg)',overflow:'hidden',boxShadow:'var(--shadow-md)',border:'1px solid #e5e7eb'}}>
            <iframe
              title="GreenChip Office Location"
              src="https://www.google.com/maps?q=17.4251103,78.4031862&z=17&output=embed"
              width="100%"
              height="360"
              style={{border:0,display:'block'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
