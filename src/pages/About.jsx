import{useReveal}from'../hooks/index.js'
import{IMG,VALUES,ETHICS,APPROACH}from'../data/content.js'
import PageHero from'../components/PageHero.jsx'
import{Settings,ShoppingCart,HardHat,BarChart3}from'lucide-react'

/* shared section wrapper */
const S=({children,bg='#fff',...rest})=><section className="section" style={{background:bg,...rest?.style}}>{children}</section>

/* ══ ABOUT ════════════════════════════════════ */
export function About({setPage}){
  const[r1,v1]=useReveal()
  const[r2,v2]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="About GreenChip Energy" subtitle="Leading turnkey renewable energy solutions across India since 2017." img={`${IMG}about12.png`} breadcrumb="About Us"/>

      <section className="section" style={{background:'#fff'}}>
        <div ref={r1} className="g2" style={{alignItems:'center'}}>
          <div className={`rev-l ${v1?'vis':''}`} style={{position:'relative'}}>
            <div className="media-zoom" style={{borderRadius:'var(--r-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
              <img src={`${IMG}about.png`} alt="About" style={{width:'100%',height:480,objectFit:'cover'}}/>
            </div>
            <div className="float-badge" style={{position:'absolute',bottom:-18,left:-18,background:'linear-gradient(135deg,#16a34a,#166534)',borderRadius:'var(--r-lg)',padding:'20px 24px',boxShadow:'0 18px 40px -12px rgba(22,163,74,.5)',border:'1px solid rgba(255,255,255,.16)'}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#fff',fontSize:28,lineHeight:1}}>100+</div>
              <div style={{color:'rgba(255,255,255,.85)',fontSize:11,fontWeight:600,marginTop:3}}>PROFESSIONALS</div>
            </div>
          </div>
          <div className={`rev-r ${v1?'vis':''}`}>
            <div className="badge" style={{marginBottom:16}}><span className="dot dot-blink"/>Who We Are</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#14532d',lineHeight:1.15,marginBottom:22}}>
              Pioneers of Solar &amp;<br/><span className="grad-text">Renewable Energy</span>
            </h2>
            <p style={{color:'#374151',lineHeight:1.95,fontSize:15,marginBottom:16}}>
              GreenChip Energy is a leading turnkey solution provider of photovoltaic systems in rural and urban India. We create and deliver bespoke solar energy solutions to the commercial, industrial and public sectors for new build, refurbishment projects and existing buildings.
            </p>
            <p style={{color:'#6b7280',lineHeight:1.95,fontSize:14,marginBottom:16}}>
              With our leading expertise in system design and installation, we provide integrated Renewable energy — from design &amp; consultation right through to installation and performance monitoring.
            </p>
            <p style={{color:'#6b7280',lineHeight:1.95,fontSize:14,marginBottom:32}}>
              GreenChip Energy is known for offering premium, affordable, and customised renewable energy solutions within specified time frames. We are amongst the top service providers of floating solar panels in India. We are continuously working on hydrogen electrolysers.
            </p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <button className="btn-primary" onClick={()=>setPage('values')} style={{padding:'11px 24px',fontSize:13}}>Our Values</button>
              <button className="btn-outline" onClick={()=>setPage('team')} style={{padding:'11px 24px',fontSize:13}}>Meet the Team</button>
              <button className="btn-outline" onClick={()=>setPage('approach')} style={{padding:'11px 24px',fontSize:13}}>Our Approach</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{background:'#f0fdf4',padding:'48px 8%',borderTop:'1px solid #bbf7d0',borderBottom:'1px solid #bbf7d0'}}>
        <div className="g4">
          {[['50+ MW','Installed Capacity'],['50+ GWh','Energy Generated'],['400+','Happy Clients'],['16 Yrs','Industry Experience']].map(([n,l])=>(
            <div key={n} className="o-chip" style={{textAlign:'center',padding:'20px 12px',background:'#fff',border:'1px solid #bbf7d0',borderRadius:'var(--r-md)'}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#16a34a',fontSize:'clamp(1.6rem,3vw,2.2rem)'}}>{n}</div>
              <div style={{color:'#6b7280',fontSize:12,letterSpacing:1.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginTop:6}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <section className="section" style={{background:'#fff'}}>
        <div ref={r2} className={`reveal ${v2?'vis':''}`} style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:20,padding:'44px 48px'}}>
          <div className="badge" style={{marginBottom:14}}><span className="dot"/>Our Leadership</div>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#14532d',fontSize:'clamp(1.4rem,2.5vw,1.9rem)',marginBottom:16}}>
            Experienced People, <span className="grad-text">Exceptional Results</span>
          </h3>
          <p style={{color:'#374151',lineHeight:1.9,fontSize:15,maxWidth:780}}>
            GreenChip Energy is known for offering premium, affordable, and customised renewable energy solutions within the specified time frames. We are amongst the top service providers of floating solar panels in India. We are continuously striving to develop cutting-edge products and are currently working on hydrogen electrolysers that will soon be made available for our clients.
          </p>
        </div>
      </section>
    </div>
  )
}

/* ══ VALUES ═══════════════════════════════════ */
export function Values(){
  const[ref,vis]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Our Values" subtitle="The principles that guide everything we do at GreenChip Energy." img={`${IMG}ourvalue.jpg`} breadcrumb="About Us → Values"/>
      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:56}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Core Values</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>What We Stand For</h2>
        </div>
        <div ref={ref} className="g3">
          {VALUES.map((v,i)=>(
            <div key={i} className="card val-card" style={{padding:'38px 30px',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',
              transition:`opacity .6s ease ${i*.09}s, transform .6s cubic-bezier(.16,1,.3,1) ${i*.09}s, box-shadow .35s ease, border-color .35s ease`}}>
              <div className="val-blob" style={{position:'absolute',top:-30,right:-30,width:140,height:140,borderRadius:'50%',background:'#f0fdf4',zIndex:0}}/>
              <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',flex:1}}>
                <div className="val-icon" style={{width:58,height:58,borderRadius:16,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20}}><v.icon size={26} strokeWidth={1.75} color="#16a34a"/></div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:21,color:'#14532d',marginBottom:12}}>{v.title}</h3>
                <p style={{color:'#6b7280',fontSize:13.5,lineHeight:1.82}}>{v.desc}</p>
              </div>
              <span className="val-accent" style={{position:'absolute',bottom:0,left:0,height:3,width:'100%',background:'linear-gradient(90deg,#16a34a,#4ade80)',transformOrigin:'left'}}/>
            </div>
          ))}
        </div>
        <style>{`
          .val-blob{transition:transform .55s cubic-bezier(.16,1,.3,1),background .35s ease}
          .val-card:hover .val-blob{transform:scale(1.35);background:#dcfce7}
          .val-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),background .35s ease,border-color .35s ease}
          .val-card:hover .val-icon{transform:translateY(-3px) scale(1.06);background:#dcfce7;border-color:#86efac}
          .val-accent{transform:scaleX(0);transition:transform .45s cubic-bezier(.16,1,.3,1)}
          .val-card:hover .val-accent{transform:scaleX(1)}
        `}</style>
        {/* Banner */}
        <div style={{marginTop:64,borderRadius:20,overflow:'hidden',height:360,position:'relative'}}>
          <img src={`${IMG}Buildinggreen.jpg`} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,rgba(10,40,15,.9),transparent 55%)',display:'flex',alignItems:'center',padding:'0 8%'}}>
            <div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#fff',fontSize:'clamp(1.6rem,3vw,2.3rem)',marginBottom:12}}>Building a Greener Tomorrow</h3>
              <p style={{color:'rgba(255,255,255,.82)',fontSize:15,maxWidth:440,lineHeight:1.82}}>Our values aren't just words — they're the foundation of every project, every relationship, and every innovation we bring to renewable energy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ══ APPROACH ═════════════════════════════════ */
export function Approach(){
  const[ref,vis]=useReveal()
  const[refEpc,visEpc]=useReveal()

  const epcSteps=[
    {icon:Settings,title:'Engineering',items:['Feasibility Study','System Design','& Simulation']},
    {icon:ShoppingCart,title:'Procurement',items:['Sourcing High Quality','Components','Timely Delivery']},
    {icon:HardHat,title:'Construction',items:['Professional Installation','Testing & Commissioning','Safety & Compliance']},
    {icon:BarChart3,title:'Commissioning &\nHandover',items:['Performance Testing','Handover & Support']},
  ]

  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Our Approach" subtitle="A proven four-stage methodology for delivering exceptional renewable energy projects." img={`${IMG}Approach.jpg`} breadcrumb="About Us → Approach"/>
      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>How We Work</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d',marginBottom:14}}>
            Our Strategic <span className="grad-text">Approach</span>
          </h2>
          <p style={{color:'#6b7280',fontSize:15,maxWidth:600,margin:'0 auto',lineHeight:1.85}}>
            For a variety of businesses — from small companies to huge industrial complexes — our 100+ professionals are continually developing and executing tailored solar solutions.
          </p>
        </div>
        <div ref={ref} style={{display:'flex',flexDirection:'column',gap:40}}>
          {APPROACH.map((s,i)=>(
            <div key={i} className="apr-step" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:52,alignItems:'center',
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(24px)',
              transition:`opacity .7s ease ${i*.15}s, transform .7s cubic-bezier(.16,1,.3,1) ${i*.15}s`}}>
              {i%2===0?(
                <>
                  <div style={{textAlign:'right',paddingRight:40,borderRight:'2px solid #bbf7d0'}}>
                    <div className="apr-icon" style={{display:'inline-flex',width:56,height:56,borderRadius:16,background:'linear-gradient(135deg,#16a34a,#166534)',alignItems:'center',justifyContent:'center',marginBottom:14,boxShadow:'0 10px 24px -8px rgba(22,163,74,.6)'}}><s.icon size={24} strokeWidth={1.75} color="#fff"/></div>
                    <div style={{color:'#16a34a',fontSize:9.5,letterSpacing:2.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:7,fontWeight:600}}>Step {s.num}</div>
                    <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.3rem,2.2vw,1.9rem)',color:'#14532d',marginBottom:12}}>{s.title}</h3>
                    <p style={{color:'#6b7280',lineHeight:1.85,fontSize:14}}>{s.desc}</p>
                  </div>
                  <div><div className="apr-num" style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(64px,9vw,112px)',color:'#f0fdf4',lineHeight:1}}>{s.num}</div></div>
                </>
              ):(
                <>
                  <div><div className="apr-num" style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(64px,9vw,112px)',color:'#f0fdf4',lineHeight:1,textAlign:'right'}}>{s.num}</div></div>
                  <div style={{paddingLeft:40,borderLeft:'2px solid #bbf7d0'}}>
                    <div className="apr-icon" style={{display:'inline-flex',width:56,height:56,borderRadius:16,background:'linear-gradient(135deg,#16a34a,#166534)',alignItems:'center',justifyContent:'center',marginBottom:14,boxShadow:'0 10px 24px -8px rgba(22,163,74,.6)'}}><s.icon size={24} strokeWidth={1.75} color="#fff"/></div>
                    <div style={{color:'#16a34a',fontSize:9.5,letterSpacing:2.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:7,fontWeight:600}}>Step {s.num}</div>
                    <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.3rem,2.2vw,1.9rem)',color:'#14532d',marginBottom:12}}>{s.title}</h3>
                    <p style={{color:'#6b7280',lineHeight:1.85,fontSize:14}}>{s.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── EPC END-TO-END SOLAR SOLUTIONS ── */}
      <section className="section" ref={refEpc} style={{background:'#f8fdf9',paddingBottom:80}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>EPC Process</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d',marginBottom:8}}>
            End to End <span className="grad-text">Solar Solutions</span>
          </h2>
          <p style={{color:'#16a34a',fontSize:14,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,letterSpacing:1,marginBottom:10}}>
            Engineering. Procurement. Construction.
          </p>
          <p style={{color:'#6b7280',fontSize:15,maxWidth:640,margin:'0 auto',lineHeight:1.85}}>
            Our structured EPC process ensures seamless project execution — from initial feasibility study through to commissioning, handover, and long-term performance support.
          </p>
        </div>

        {/* EPC Image Card */}
        <div style={{
          maxWidth:900,margin:'0 auto 56px',borderRadius:20,overflow:'hidden',
          boxShadow:'0 16px 48px rgba(20,83,45,.12)',border:'1px solid #e5e7eb',
          position:'relative',
          opacity:visEpc?1:0,transform:visEpc?'translateY(0)':'translateY(28px)',
          transition:'all .7s ease'
        }}>
          <img src={`${IMG}epc1.png`} alt="EPC End to End Solar Solutions — Engineering, Procurement, Construction, Commissioning & Handover" style={{width:'100%',height:'auto',display:'block'}}/>
          <div style={{position:'absolute',bottom:0,left:0,right:0,height:4,background:'linear-gradient(90deg,#16a34a,#4ade80,#16a34a)'}}/>
        </div>

        {/* 4-Step Timeline */}
        <div className="epc-timeline" style={{
          display:'grid',gridTemplateColumns:'1fr auto 1fr auto 1fr auto 1fr',
          alignItems:'flex-start',maxWidth:960,margin:'0 auto',gap:0
        }}>
          {epcSteps.map((step,i)=>(
            <>
              {/* Step card */}
              <div key={`step-${i}`} style={{
                display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',
                opacity:visEpc?1:0,transform:visEpc?'translateY(0)':'translateY(24px)',
                transition:`all .6s ease ${.2+i*.15}s`
              }}>
                {/* Icon circle */}
                <div style={{
                  width:72,height:72,borderRadius:'50%',
                  background:'linear-gradient(135deg,#f0fdf4,#dcfce7)',
                  border:'2px solid #bbf7d0',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:30,marginBottom:14,
                  boxShadow:'0 6px 20px rgba(22,163,74,.12)',
                  transition:'all .3s'
                }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.1)';e.currentTarget.style.boxShadow='0 10px 32px rgba(22,163,74,.22)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 6px 20px rgba(22,163,74,.12)'}}
                >
                  <step.icon size={30} strokeWidth={1.75} color="#16a34a"/>
                </div>
                {/* Title */}
                <h4 style={{
                  fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:15,color:'#14532d',
                  marginBottom:10,lineHeight:1.3,whiteSpace:'pre-line',minHeight:40,
                  display:'flex',alignItems:'center',justifyContent:'center'
                }}>
                  {step.title}
                </h4>
                {/* Items */}
                <div style={{display:'flex',flexDirection:'column',gap:4}}>
                  {step.items.map((item,j)=>(
                    <span key={j} style={{
                      color:'#6b7280',fontSize:12.5,lineHeight:1.6,
                      fontFamily:"'Space Grotesk',sans-serif"
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {/* Arrow connector (not after last step) */}
              {i<3&&(
                <div key={`arrow-${i}`} className="epc-arrow" style={{
                  display:'flex',alignItems:'center',justifyContent:'center',
                  paddingTop:28,
                  opacity:visEpc?1:0,
                  transition:`opacity .5s ease ${.4+i*.15}s`
                }}>
                  <svg width="36" height="20" viewBox="0 0 36 20" fill="none" style={{display:'block'}}>
                    <path d="M0 10h28" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 3"/>
                    <path d="M24 4l8 6-8 6" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      <style>{`
        .apr-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),box-shadow .35s ease}
        .apr-step:hover .apr-icon{transform:translateY(-4px) scale(1.06);box-shadow:0 16px 30px -10px rgba(22,163,74,.75)}
        .apr-num{transition:color .45s ease,transform .45s cubic-bezier(.16,1,.3,1)}
        .apr-step:hover .apr-num{color:#dcfce7;transform:scale(1.04)}
        @media(max-width:900px){
          div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
          div[style*="text-align: right"]{text-align:left!important;padding-right:0!important;border-right:none!important}
          div[style*="padding-left: 40px"]{padding-left:0!important;border-left:none!important}
          .epc-timeline{grid-template-columns:1fr!important;gap:28px!important;max-width:280px!important}
          .epc-arrow{transform:rotate(90deg);padding-top:0!important}
        }
      `}</style>
    </div>
  )
}

/* ══ ETHICS ═══════════════════════════════════ */
export function Ethics(){
  const[ref,vis]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Ethics & Principles" subtitle="Our commitment to ethical business and responsible energy development." img={`${IMG}ethics.jpg`} breadcrumb="About Us → Ethics"/>
      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:52}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Our Commitments</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>How We Operate</h2>
        </div>
        <style>{`
          .eth-bar{transform:scaleY(0);transition:transform .45s cubic-bezier(.16,1,.3,1)}
          .eth-row:hover .eth-bar{transform:scaleY(1)}
          .eth-row:hover{box-shadow:var(--shadow-lg);border-color:#bbf7d0;transform:translateX(0) translateY(-3px)}
          .eth-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),background .35s ease,border-color .35s ease}
          .eth-row:hover .eth-icon{transform:scale(1.07);background:#dcfce7;border-color:#86efac}
          .float-badge{transition:transform .45s cubic-bezier(.16,1,.3,1)}
          .float-badge:hover{transform:translateY(-5px) scale(1.03)}
        `}</style>
        <div ref={ref} style={{display:'flex',flexDirection:'column',gap:18}}>
          {ETHICS.map((item,i)=>(
            <div key={i} className="card-flat eth-row" style={{display:'grid',gridTemplateColumns:'68px 1fr',gap:24,alignItems:'flex-start',padding:'30px 34px',position:'relative',overflow:'hidden',
              opacity:vis?1:0,transform:vis?'translateX(0)':'translateX(-24px)',
              transition:`opacity .6s ease ${i*.09}s, transform .6s cubic-bezier(.16,1,.3,1) ${i*.09}s, box-shadow .35s ease, border-color .35s ease`}}>
              <span className="eth-bar" style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:'linear-gradient(180deg,#16a34a,#4ade80)',transformOrigin:'top'}}/>
              <div className="eth-icon" style={{width:54,height:54,borderRadius:15,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><item.icon size={24} strokeWidth={1.75} color="#16a34a"/></div>
              <div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:20,color:'#14532d',marginBottom:9}}>{item.title}</h3>
                <p style={{color:'#6b7280',fontSize:14,lineHeight:1.88}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ══ TEAM ═════════════════════════════════════ */
export function Team(){
  const[ref,vis]=useReveal()
  const members = [
    { name: 'Sachin kumar Koyalkar', role: 'Founder and Director', desc: 'Provides overall strategic direction and leads business growth and partnerships.' },
    { name: 'Vijay srikakulam', role: 'Director', desc: 'Oversees project delivery and stakeholder relationships across operations.' },
    { name: 'Kiran kumar T', role: 'Finance Head', desc: 'Responsible for financial planning, reporting and cashflow management.' },
    { name: 'Ramakrishna Polineni', role: 'Operations Head', desc: 'Leads site operations, construction delivery and field teams.' },
    { name: 'Mahesh K', role: 'Design Head', desc: 'Heads system design and engineering for PV and storage projects.' },
    { name: 'Satish K', role: 'Business Development', desc: 'Drives sales, partnerships and new market development.' },
    { name: 'Sai Prasad A', role: 'Compliance & Legal', desc: 'Manages legal, compliance and regulatory affairs.' },
    { name: 'Sai Surya A', role: 'Supply Chain', desc: 'Ensures timely procurement and supply chain optimisation.' },
    { name: 'Vamshik Rao', role: 'Chief Marketing Officer', desc: 'Leads branding, communications and demand-generation activities.' },
    { name: 'Shiva Venkat A', role: 'Strategy Consultant', desc: 'Advises on strategic initiatives and long-term planning.' },
    { name: 'Vijay kumar Reddy', role: 'Policy Consultant', desc: 'Provides policy guidance and regulatory engagement support.' },
    { name: 'Ravi Kumar', role: 'People Management', desc: 'Heads HR, talent acquisition and employee development.' },
  ]

  return (
    <div style={{ background: '#f8fdf9', paddingTop: 34 }}>
      <PageHero title="Our Team" subtitle="Experienced professionals driving India's renewable energy transformation." img={`${IMG}team-1.jpg`} breadcrumb="About Us → Team" />

      <section className="section" style={{ background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="badge" style={{ marginBottom: 14, justifyContent: 'center' }}><span className="dot" />Leadership</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', color: '#14532d', marginBottom: 10 }}>
            Experienced <span className="grad-text">Team Members</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 760, margin: '0 auto', lineHeight: 1.82 }}>
            Meet the leadership team that designs, delivers and supports GreenChip projects across India.
          </p>
        </div>

        <div ref={ref} className="team-grid">
          {members.map((m, i) => {
            const initials = m.name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase()
            return (
              <div key={i} className="card team-card" style={{ padding: '30px 26px 28px', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(26px)', transition: `opacity .55s ease ${i * .05}s, transform .55s cubic-bezier(.16,1,.3,1) ${i * .05}s, box-shadow .35s ease, border-color .35s ease` }}>
                {/* watermark initials */}
                <span aria-hidden style={{position:'absolute',top:-14,right:6,fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:86,lineHeight:1,color:'#f0fdf4',pointerEvents:'none',userSelect:'none'}}>{initials}</span>

                <div className="team-avatar" style={{ width:60, height:60, borderRadius:18, background:'linear-gradient(135deg,#16a34a,#166534)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:20, letterSpacing:.5, marginBottom:18, boxShadow:'0 8px 20px -8px rgba(22,163,74,.6)', position:'relative', zIndex:1 }}>
                  {initials}
                </div>

                <div style={{ position:'relative', zIndex:1 }}>
                  <div style={{ color:'#16a34a', fontSize:10, textTransform:'uppercase', letterSpacing:2, fontWeight:700, fontFamily:"'Space Grotesk',sans-serif", marginBottom:7 }}>{m.role}</div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:18.5, color:'#14532d', lineHeight:1.25, marginBottom:11 }}>{m.name}</h3>
                  <p style={{ color:'#6b7280', fontSize:13.5, lineHeight:1.82 }}>{m.desc}</p>
                </div>

                {/* bottom accent */}
                <span className="team-accent" style={{ position:'absolute', left:0, bottom:0, height:3, width:'100%', background:'linear-gradient(90deg,#16a34a,#4ade80)', transformOrigin:'left' }}/>
              </div>
            )
          })}
        </div>

        <style>{`
          .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
          .team-accent{transform:scaleX(0);transition:transform .45s cubic-bezier(.16,1,.3,1)}
          .team-card:hover .team-accent{transform:scaleX(1)}
          .team-avatar{transition:transform .45s cubic-bezier(.16,1,.3,1)}
          .team-card:hover .team-avatar{transform:translateY(-3px) scale(1.06)}
          @media(max-width:1100px){.team-grid{grid-template-columns:repeat(2,1fr)}}
          @media(max-width:640px){.team-grid{grid-template-columns:1fr}}
        `}</style>
      </section>
    </div>
  )
}
