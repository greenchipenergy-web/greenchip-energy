import{useState,useEffect,useRef}from'react'
import{useReveal,useCounter}from'../hooks/index.js'
import{IMG,SOLUTIONS,PARTNERS}from'../data/content.js'
import LeadForm from '../components/LeadForm.jsx'
import{Trophy,Wrench,Wallet,Leaf,Sun,ArrowRight,PhoneCall}from'lucide-react'

/* ─── HERO ────────────────────────────────────── */
function Hero({setPage}){
  const[slide,setSlide]=useState(0)
  const[visible,setVisible]=useState(0)
  const contentTimer = useRef(null)
  const videoRefs = useRef([])
  const slides=[
    {video:'/videos/hero-1.mp4',h1:'Industry',h2:'Decarbonisation',tag:'EPC Solutions'},
    {video:'/videos/hero-2.mp4',h1:'Shaping The',h2:'Energy Transition',tag:'Solar Power'},
    {video:'/videos/hero-3.mp4',h1:'Digitalising &',h2:'Decentralising Energy',tag:'Smart Systems'},
  ]
  useEffect(()=>{const t=setInterval(()=>setSlide(s=>(s+1)%3),5500);return()=>clearInterval(t)},[])

  useEffect(()=>{
    clearTimeout(contentTimer.current)
    contentTimer.current = setTimeout(()=>setVisible(slide), 1400)
    return ()=>clearTimeout(contentTimer.current)
  },[slide])

  useEffect(()=>{
    videoRefs.current.forEach((v,i)=>{
      if(!v)return
      if(i===slide){v.currentTime=0;v.play().catch(()=>{})}
      else v.pause()
    })
  },[slide])

  return(
    /* Full-viewport hero, padded top for topbar(34) + navbar(66) = 100px */
      <div className="hero-padding" style={{position:'relative',marginTop:0,height:'calc(100vh - 100px)',minHeight:560,overflow:'hidden',boxSizing:'border-box',padding:'64px 8% 88px'}}>
      {/* Slide videos */}
      {slides.map((s,i)=>(
        <div key={i} style={{position:'absolute',inset:0,opacity:i===slide?1:0,transition:'opacity 1.4s ease',zIndex:0,pointerEvents:i===slide?'auto':'none',willChange:'opacity'}} aria-hidden={i===slide?false:true}>
          <video
            ref={el=>videoRefs.current[i]=el}
            src={s.video}
            muted
            loop
            playsInline
            autoPlay={i===0}
            preload={i===slide?'auto':'none'}
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',display:'block'}}
          />
        </div>
      ))}

      {/* Overlays — strong gradient so text is always legible */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(120deg,rgba(10, 40, 15, 0.56) 0%,rgba(10, 40, 15, 0.49) 55%,rgba(10, 40, 15, 0.35) 100%)',zIndex:1}}/>
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 10% 60%,rgba(34,197,94,.18) 0%,transparent 55%)',zIndex:1}}/>
      {/* Dot pattern */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,.07) 1px,transparent 0)',backgroundSize:'30px 30px',zIndex:1}}/>

      {/* Content — z-index keeps it above all overlays */}
        <div style={{position:'relative',zIndex:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',height:'100%',padding:'0 2% 88px',pointerEvents:'auto',boxSizing:'border-box',textAlign:'left'}}>
        {/* Badge */}
        <div style={{animation:'fadeUp .5s ease both',display:'inline-flex',alignItems:'center',gap:7,padding:'4px 14px',background:'rgba(255,255,255,.14)',border:'1px solid rgba(255,255,255,.28)',borderRadius:100,color:'#fff',fontSize:11,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:'2px',textTransform:'uppercase',fontWeight:600,marginBottom:20,width:'fit-content',backdropFilter:'blur(8px)'}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#4ade80',display:'inline-block',animation:'dotBlink 1.8s infinite'}}/>
          {slides[visible].tag} · Renewable Energy
        </div>

        {/* Headline */}
        <h1 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(2.2rem,6vw,4.4rem)',color:'#fff',lineHeight:1.0,maxWidth:'min(980px,90%)',animation:'fadeUp .65s .08s ease both',textShadow:'0 2px 24px rgba(0,0,0,.25)',whiteSpace:'normal',overflow:'visible',overflowWrap:'break-word'}}>
          {slides[visible].h1}
        </h1>
        <h2 style={{marginTop:6,color:'#86efac',fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.6rem,3.6vw,2.2rem)',lineHeight:1,maxWidth:'min(900px,88%)',whiteSpace:'normal',overflow:'visible',overflowWrap:'break-word'}}>{slides[visible].h2}</h2>

        <p style={{color:'rgba(255,255,255,.82)',fontSize:'clamp(14px,1.4vw,17px)',maxWidth:480,lineHeight:1.85,marginTop:20,marginBottom:38,animation:'fadeUp .65s .16s ease both'}}>
          Turnkey solar &amp; renewable energy solutions for commercial, industrial &amp; public sectors across India. Cut energy bills up to <strong style={{color:'#86efac'}}>70%</strong>.
        </p>

        <div className="hero-buttons" style={{display:'flex',gap:13,flexWrap:'wrap',animation:'fadeUp .65s .22s ease both'}}>
          <button className="btn-white" onClick={()=>setPage('calculator')} style={{padding:'13px 30px',fontSize:14,borderRadius:8,display:'inline-flex',alignItems:'center',gap:8}}>
            <Sun size={16} strokeWidth={2}/>Calculate Savings
          </button>
          <button onClick={()=>setPage('solutions')} style={{padding:'13px 30px',fontSize:14,borderRadius:8,background:'transparent',color:'#fff',border:'1.5px solid rgba(255,255,255,.55)',fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,cursor:'pointer',transition:'all .25s',display:'flex',alignItems:'center',gap:7}}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,.1)'}
            onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            Explore Solutions <ArrowRight size={15} strokeWidth={2.25}/>
          </button>
        </div>

        {/* Slide dots */}
        <div style={{display:'flex',gap:8,marginTop:48,animation:'fadeUp .65s .3s ease both'}}>
          {slides.map((_,i)=>(
            <button key={i} onClick={()=>setSlide(i)} style={{width:i===slide?28:8,height:8,borderRadius:4,background:i===slide?'#4ade80':'rgba(255,255,255,.35)',border:'none',cursor:'pointer',transition:'all .35s',padding:0}}/>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{position:'absolute',bottom:36,left:'8%',zIndex:2,display:'flex',alignItems:'center',gap:10,animation:'fadeIn 1s 1.2s ease both',opacity:0}}>
        <div style={{width:1,height:48,background:'linear-gradient(to bottom,rgba(255,255,255,.6),transparent)'}}/>
        <span style={{color:'rgba(255,255,255,.55)',fontSize:10,letterSpacing:3,fontFamily:"'Space Grotesk',sans-serif",textTransform:'uppercase'}}>Scroll</span>
      </div>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes dotBlink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
    </div>
  )
}

/* ─── STATS BAND ──────────────────────────────── */
function Stats(){
  const[ref,vis]=useReveal()
  const c1=useCounter(500,1700,vis)
  const c2=useCounter(50,1700,vis)
  const c3=useCounter(100,1700,vis)
  const c4=useCounter(16,1700,vis)
  return( 
    <div ref={ref} className="stats-band-mobile" style={{background:'linear-gradient(135deg,#166534,#15803d)',padding:'52px 8%'}}>
      <div className="stats-grid" style={{textAlign:'center'}}>
        {[[c1,'MW+','Projects Delivered'],[c2,'GWh+','Clean Energy'],[c3,'+','Happy Clients'],[c4,'Yrs','Experience']].map(([n,suf,label],i)=>(
          <div key={i} style={{opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(20px)',transition:`all .6s ease ${i*.12}s`}}>
            <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(2rem,4vw,3rem)',color:'#fff',lineHeight:1}}>
              {n}<span style={{fontSize:'58%',color:'#bbf7d0'}}>{suf}</span>
            </div>
            <div style={{color:'rgba(255,255,255,.7)',fontSize:11.5,letterSpacing:1.8,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginTop:7}}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── ABOUT SNIPPET ───────────────────────────── */
function AboutSnippet({setPage}){
  const[ref,vis]=useReveal()
  return(
    <section className="section" ref={ref} style={{background:'#fff'}}>
      <div className="g2" style={{alignItems:'center'}}>
        {/* Image */}
        <div className={`rev-l ${vis?'vis':''}`} style={{position:'relative'}}>
          <div style={{borderRadius:20,overflow:'hidden',position:'relative'}}>
            <img src={`${IMG}about.png`} alt="About" style={{width:'100%',height:480,objectFit:'cover',display:'block'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(20,83,45,.4),transparent 60%)'}}/>
          </div>
          {/* Floating badge */}
          <div style={{position:'absolute',bottom:-20,right:-20,background:'linear-gradient(135deg,#16a34a,#166534)',borderRadius:16,padding:'20px 26px',boxShadow:'0 16px 40px rgba(22,163,74,.35)'}}>
            <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:30,color:'#fff',lineHeight:1}}>2017</div>
            <div style={{color:'rgba(255,255,255,.85)',fontSize:10,fontWeight:600,letterSpacing:1.5,marginTop:3}}>FOUNDED</div>
          </div>
          {/* Accent ring */}
          <div style={{position:'absolute',top:-14,left:-14,right:40,bottom:40,borderRadius:20,border:'2px solid #bbf7d0',zIndex:-1}}/>
        </div>

        {/* Text */}
        <div className={`rev-r ${vis?'vis':''}`}>
          <div className="badge" style={{marginBottom:18}}>
            <span className="dot dot-blink"/>About GreenChip Energy
          </div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3vw,2.7rem)',color:'#14532d',lineHeight:1.15,marginBottom:22}}>
           India's Leading<br/><span className="grad-text">Clean Energy Revolution</span>
          </h2>
          <p style={{color:'#374151',lineHeight:1.95,fontSize:15,marginBottom:16}}>
            GreenChip Energy is a leading turnkey solution provider of photovoltaic systems in rural and urban India. We create and deliver bespoke solar energy solutions to the commercial, industrial and public sectors for new build, refurbishment projects and existing buildings.
          </p>
          <p style={{color:'#6b7280',lineHeight:1.95,fontSize:14,marginBottom:32}}>
            With our leading expertise in system design and installation, we provide integrated Renewable energy — from design &amp; consultation right through to installation and performance monitoring. We are amongst the top service providers of floating solar panels in India.
          </p>
          {/* Feature pills */}
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:32}}>
            {['System Design','EPC Delivery','Performance Monitoring','Asset Management','Financing','O&M'].map(f=>(
              <span key={f} style={{padding:'5px 13px',background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:100,color:'#166534',fontSize:12,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500}}>{f}</span>
            ))}
          </div>
          <div style={{display:'flex',gap:12}}>
            <button className="btn-primary" onClick={()=>setPage('about')} style={{padding:'12px 26px',fontSize:13,display:'inline-flex',alignItems:'center',gap:7}}>Discover Our Story <ArrowRight size={14} strokeWidth={2.25}/></button>
            <button className="btn-outline" onClick={()=>setPage('team')} style={{padding:'12px 26px',fontSize:13}}>Meet the Team</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SOLUTIONS BENTO ─────────────────────────── */
function SolutionsBento({setPage}){
  const[ref,vis]=useReveal()
  const items=SOLUTIONS.slice(0,6)
  return(
    <section className="section" style={{background:'#f8fdf9'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:52,flexWrap:'wrap',gap:16}}>
        <div>
          <div className="badge" style={{marginBottom:14}}><span className="dot"/>Our Solutions</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>
            Renewable Energy<br/><span className="grad-text">Solutions</span>
          </h2>
        </div>
        <button className="btn-outline" onClick={()=>setPage('solutions')} style={{padding:'10px 24px',fontSize:13,display:'inline-flex',alignItems:'center',gap:7}}>View All <ArrowRight size={14} strokeWidth={2.25}/></button>
      </div>

      <div ref={ref} className="solutions-grid" style={{gap:18}}>
        {items.map((s,i)=>(
          <div key={i} className="card" onClick={()=>setPage(s.id==='rooftop'?'rooftop':'solutions')}
            style={{cursor:'pointer',position:'relative',overflow:'hidden',
              gridColumn:i===0?'span 2':'span 1',
              height:i===0?340:220,
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',
              transition:`all .6s ease ${i*.1}s`}}>
            <img src={`${IMG}${s.img}`} alt={s.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s ease'}}
              onMouseEnter={e=>e.target.style.transform='scale(1.07)'}
              onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,40,15,.92) 0%,rgba(10,40,15,.1) 55%,transparent 100%)'}}/>
            <div style={{position:'absolute',top:14,right:14,width:32,height:32,borderRadius:'50%',background:'rgba(255,255,255,.18)',border:'1px solid rgba(255,255,255,.4)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><ArrowRight size={15} strokeWidth={2.25}/></div>
            <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'22px 20px'}}>
              <div style={{color:'#86efac',fontSize:9.5,letterSpacing:2.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:5}}>{s.sub}</div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:i===0?21:16,color:'#fff'}}>{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){div[style*="grid-template-columns: repeat(3,1fr)"]{grid-template-columns:1fr!important} div[style*="grid-column: span 2"]{grid-column:span 1!important}}`}</style>
    </section>
  )
}

/* ─── SERVICES STRIP ──────────────────────────── */
function ServicesStrip({setPage}){
  const[ref,vis]=useReveal()
  const svcs=[
    {icon:(
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="3.2" fill="#16a34a" />
        <circle cx="12" cy="3.8" r="1.05" fill="#22c55e" />
        <circle cx="12" cy="20.2" r="1.05" fill="#84cc16" />
        <circle cx="3.8" cy="12" r="1.05" fill="#065f46" />
        <circle cx="20.2" cy="12" r="1.05" fill="#34d399" />
        <circle cx="6" cy="6" r="0.8" fill="#86efac" />
        <circle cx="18" cy="18" r="0.8" fill="#bbf7d0" />
      </svg>
    ),title:'EPC Services',sub:'Engineering · Procurement · Construction',desc:'Single-point responsibility from feasibility study through commissioning. We manage design, procurement, civil, electrical, and performance monitoring.',page:'epc'},
    {icon:(
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="5.5" width="20" height="13" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.9" />
        <rect x="4" y="9" width="6" height="2" rx="0.5" fill="#f59e0b" />
        <rect x="14" y="13" width="4" height="2" rx="0.5" fill="#06b6d4" />
        <path d="M6 16.2h12" stroke="#0ea5a4" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    ),title:'Financing Models',sub:'CAPEX · OPEX · RESCO · Leasing',desc:'Attractive financing schemes making solar affordable. CAPEX loans, deferred payment, PPA/RESCO — zero upfront options available.',page:'services'},
    {icon:(
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3" y="8" width="3.5" height="9" rx="0.6" fill="#3b82f6" />
        <rect x="10" y="12" width="3.5" height="5" rx="0.6" fill="#10b981" />
        <rect x="17" y="6.5" width="3.5" height="10.5" rx="0.6" fill="#fb923c" />
        <rect x="2" y="19" width="20" height="1" fill="#94a3b8" />
      </svg>
    ),title:'Asset Management',sub:'Performance Monitoring · O&M',desc:'24/7 monitoring, preventive maintenance, and performance optimisation to maximise your solar investment returns over 25+ years.',page:'services'},
  ]
  return(
    <section className="section" style={{background:'#fff'}}>
      <div style={{textAlign:'center',marginBottom:52}}>
        <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Our Services</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>
          End-to-End <span className="grad-text">Service Excellence</span>
        </h2>
      </div>
      <div ref={ref} className="g3">
        {svcs.map((s,i)=>(
          <div key={i} className="card" onClick={()=>setPage(s.page)} style={{padding:'36px 30px',cursor:'pointer',opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',transition:`all .6s ease ${i*.15}s`}}>
            <div style={{width:54,height:54,borderRadius:14,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,marginBottom:22}}>{s.icon}</div>
            <div style={{color:'#16a34a',fontSize:9.5,letterSpacing:2,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:8}}>{s.sub}</div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:20,color:'#14532d',marginBottom:11}}>{s.title}</h3>
            <p style={{color:'#6b7280',fontSize:13.5,lineHeight:1.82}}>{s.desc}</p>
            <div style={{marginTop:18,color:'#16a34a',fontSize:12.5,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,display:'flex',alignItems:'center',gap:5}}>Learn More <ArrowRight size={13} strokeWidth={2.25}/></div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── WHY CHOOSE US ───────────────────────────── */
function WhyUs(){
  const[ref,vis]=useReveal()
  const[hover,setHover]=useState(null)
  const pts=[
    {Icon:Trophy,title:'500+ MW Delivered',desc:'Proven track record across commercial, industrial and utility-scale solar projects.'},
    {Icon:Wrench,title:'End-to-End EPC',desc:'We handle design, procurement, civil, electrical, commissioning and O&M — one partner, full accountability.'},
    {Icon:Wallet,title:'Flexible Financing',desc:'Zero-down OPEX/RESCO options to CAPEX loans — solar fits every budget and business model.'},
    {Icon:Leaf,title:'Top FPV Provider',desc:'Among India\'s leading floating solar panel providers with projects on reservoirs and industrial ponds.'},
  ]
  return(
    <section className="section" style={{background:'#f0fdf4'}}>
      <div className="g2" style={{alignItems:'center',gap:64}}>
        <div>
          <div className="badge" style={{marginBottom:14}}><span className="dot"/>Why GreenChip</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d',marginBottom:14}}>
            Trusted Solar<br/><span className="grad-text">Partner in India</span>
          </h2>
          <p style={{color:'#374151',fontSize:15,lineHeight:1.9,marginBottom:32}}>
            For a variety of businesses — from small companies to huge industrial complexes — our 100+ professionals are continually developing and executing tailored solar solutions with guaranteed results.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            {[['500+ MW','Installed'],['100+','Professionals'],['16 Yrs','Experience'],['50+ GWh','Generated']].map(([n,l])=>(
              <div key={n} style={{background:'#fff',borderRadius:14,padding:'20px 18px',border:'1px solid #bbf7d0',textAlign:'center'}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#16a34a',fontSize:'clamp(1.4rem,2.5vw,1.9rem)'}}>{n}</div>
                <div style={{color:'#6b7280',fontSize:12,letterSpacing:1.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginTop:5}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div ref={ref} style={{display:'flex',flexDirection:'column',gap:16}}>
          {pts.map((p,i)=>{
            const isHover=hover===i
            return(
            <div key={i}
              onMouseEnter={()=>setHover(i)}
              onMouseLeave={()=>setHover(null)}
              style={{
                padding:'22px 24px',
                display:'flex',gap:18,alignItems:'flex-start',
                background:isHover?'#14532d':'#fff',
                borderRadius:16,
                border:`1px solid ${isHover?'#14532d':'#e5e7eb'}`,
                boxShadow:isHover?'0 12px 28px -8px rgba(20,83,45,.35)':'0 1px 3px rgba(0,0,0,.04)',
                transform:isHover?'translateY(-3px)':(vis?'translateY(0)':'translateY(24px)'),
                opacity:vis?1:0,
                transition:`transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease, background .35s ease, border-color .35s ease, opacity .6s ease ${i*.1}s`
              }}>
              <div style={{
                width:52,height:52,borderRadius:14,
                background:isHover?'rgba(255,255,255,.14)':'#ecfdf5',
                border:`1px solid ${isHover?'rgba(255,255,255,.25)':'#bbf7d0'}`,
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                transition:'all .35s ease'
              }}>
                <p.Icon size={24} strokeWidth={1.75} color={isHover?'#4ade80':'#16a34a'} style={{transition:'color .35s ease'}}/>
              </div>
              <div>
                <h4 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:isHover?'#fff':'#14532d',fontSize:16,marginBottom:6,transition:'color .35s ease'}}>{p.title}</h4>
                <p style={{color:isHover?'#d1fae5':'#6b7280',fontSize:13.5,lineHeight:1.75,transition:'color .35s ease'}}>{p.desc}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

/* ─── PARTNERS MARQUEE ────────────────────────── */
function Partners(){
  return(
    <div style={{padding:'64px 0',background:'#fff',overflow:'hidden'}}>
      <div style={{textAlign:'center',marginBottom:40,padding:'0 8%'}}>
        <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Trusted Partners</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.5rem,2.8vw,2.1rem)',color:'#14532d'}}>We Are Trusted by Leading Brands!</h2>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12,overflow:'hidden'}}>
        {/* Top row: left → right (moves left) */}
        <div style={{overflow:'hidden'}}>
          <div className="marquee marquee-left" style={{display:'flex',gap:24,width:'max-content'}}>
            {[...PARTNERS,...PARTNERS].map((p,i)=> (
              <div key={'t'+i} style={{flexShrink:0,background:'#f8fdf9',border:'1px solid #e5e7eb',borderRadius:12,padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'center',minWidth:120}}>
                <img src={`${IMG}partners/${p}`} alt="" style={{height:36,maxWidth:110,objectFit:'contain',filter:'grayscale(40%) opacity(.8)'}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: right → left (moves right) — reversed order for variety */}
        <div style={{overflow:'hidden'}}>
          <div className="marquee marquee-right" style={{display:'flex',gap:24,width:'max-content'}}>
            {[...PARTNERS].reverse().concat([...PARTNERS].reverse()).map((p,i)=> (
              <div key={'b'+i} style={{flexShrink:0,background:'#f8fdf9',border:'1px solid #e5e7eb',borderRadius:12,padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'center',minWidth:120}}>
                <img src={`${IMG}partners/${p}`} alt="" style={{height:36,maxWidth:110,objectFit:'contain',filter:'grayscale(40%) opacity(.8)'}}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marqueeLeft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes marqueeRight{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        .marquee { will-change: transform; }
        .marquee.marquee-left { animation: marqueeLeft 44s linear infinite; }
        .marquee.marquee-right { animation: marqueeRight 52s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none !important; } }
      `}</style>
    </div>
  )
}

/* ─── GALLERY ─────────────────────────────────── */
function Gallery(){
  const[ref,vis]=useReveal()
  return(
    <section className="section" style={{background:'#f8fdf9'}}>
      <div style={{textAlign:'center',marginBottom:44}}>
        <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Project Gallery</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.5rem,2.8vw,2.1rem)',color:'#14532d'}}>Our Solar Projects</h2>
      </div>
      <div ref={ref} className="gallery-grid" style={{gridTemplateRows:'210px 210px',gap:14}}>
        {[1,2,3,4,5,6].map((n,i)=>(
          <div key={n} style={{position:'relative',borderRadius:14,overflow:'hidden',cursor:'pointer',
            gridColumn:i===0||i===5?'span 2':'span 1',
            opacity:vis?1:0,transform:vis?'scale(1)':'scale(.94)',
            transition:`all .55s ease ${i*.08}s`,
            border:'1px solid #e5e7eb'}}>
            <img src={`${IMG}gallery-${n}.jpg`} alt="" style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s ease'}}
              onMouseEnter={e=>e.target.style.transform='scale(1.07)'}
              onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────── */
function CTA({setPage}){
  const[hoverA,setHoverA]=useState(false)
  const[hoverB,setHoverB]=useState(false)
  return(
    <div style={{background:'linear-gradient(135deg,#0f3d22,#166534,#15803d)',padding:'96px 8%',textAlign:'center',position:'relative',overflow:'hidden'}}>
      {/* dot texture */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,.06) 1px,transparent 0)',backgroundSize:'28px 28px'}}/>
      {/* glow blobs */}
      <div style={{position:'absolute',top:'-18%',left:'-8%',width:420,height:420,borderRadius:'50%',background:'radial-gradient(circle,rgba(74,222,128,.35),transparent 70%)',filter:'blur(10px)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:'-25%',right:'-6%',width:480,height:480,borderRadius:'50%',background:'radial-gradient(circle,rgba(134,239,172,.25),transparent 70%)',filter:'blur(10px)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:'50%',left:'50%',width:640,height:640,transform:'translate(-50%,-50%)',borderRadius:'50%',border:'1px solid rgba(255,255,255,.06)',pointerEvents:'none'}}/>

      <div style={{position:'relative',zIndex:1}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:7,padding:'4px 14px',background:'rgba(255,255,255,.15)',border:'1px solid rgba(255,255,255,.3)',borderRadius:100,color:'#fff',fontSize:11,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:'2px',textTransform:'uppercase',fontWeight:600,marginBottom:22,backdropFilter:'blur(8px)'}}>
          <span style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',display:'inline-block',boxShadow:'0 0 8px 2px rgba(74,222,128,.8)'}}/>Get Started Today
        </div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(2rem,4.5vw,3.4rem)',color:'#fff',marginBottom:16,letterSpacing:'-.01em'}}>Ready to Go Solar?</h2>
        <p style={{color:'rgba(255,255,255,.82)',fontSize:16.5,maxWidth:520,margin:'0 auto 40px',lineHeight:1.9}}>
          Calculate your savings and take the first step towards clean, affordable renewable energy.
        </p>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <button
            onClick={()=>setPage('calculator')}
            onMouseEnter={()=>setHoverA(true)}
            onMouseLeave={()=>setHoverA(false)}
            style={{
              display:'inline-flex',alignItems:'center',gap:10,
              padding:'16px 34px',fontSize:15.5,borderRadius:12,
              background:'#fff',color:'#14532d',border:'none',
              fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,cursor:'pointer',
              boxShadow:hoverA?'0 14px 32px -8px rgba(0,0,0,.35)':'0 6px 18px -6px rgba(0,0,0,.25)',
              transform:hoverA?'translateY(-3px)':'translateY(0)',
              transition:'all .3s cubic-bezier(.16,1,.3,1)'
            }}>
            <Sun size={19} strokeWidth={2} color="#16a34a"/>
            Calculate My Savings
            <ArrowRight size={17} strokeWidth={2.25} style={{transform:hoverA?'translateX(4px)':'translateX(0)',transition:'transform .3s ease'}}/>
          </button>
          <button
            onClick={()=>setPage('contact')}
            onMouseEnter={()=>setHoverB(true)}
            onMouseLeave={()=>setHoverB(false)}
            style={{
              display:'inline-flex',alignItems:'center',gap:10,
              padding:'16px 34px',fontSize:15.5,borderRadius:12,
              background:hoverB?'rgba(255,255,255,.12)':'transparent',
              color:'#fff',border:'1.5px solid rgba(255,255,255,.5)',
              fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,cursor:'pointer',
              transform:hoverB?'translateY(-3px)':'translateY(0)',
              transition:'all .3s cubic-bezier(.16,1,.3,1)'
            }}>
            <PhoneCall size={18} strokeWidth={2}/>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home({setPage}){
  const [leadVisible,setLeadVisible] = useState(false)
  return(
    <div style={{background:'#f8fdf9'}}>
      <Hero setPage={setPage}/>
      <Stats/>
      <AboutSnippet setPage={setPage}/>
      <SolutionsBento setPage={setPage}/>
      <ServicesStrip setPage={setPage}/>
      <WhyUs/>
      <Testimonials/>
      <Partners/>
      <Gallery/>
      <CTA setPage={setPage}/>
      <style>{`
        /* Desktop defaults for grids (preserve original layout) */
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
        .solutions-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:210px;gap:14px}

        @media(max-width:900px){
          .hero-padding{padding-bottom:160px!important}
          .hero-buttons{flex-direction:column!important}
          .testimonials-grid{grid-template-columns:1fr!important;padding:0 4% 40px!important}
          .global-quote{display:none!important}
          .global-mobile-cta{display:block;position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #e5e7eb;z-index:1600}

          /* Mobile: stats show 2x2, solutions and gallery stack */
          .stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
          .solutions-grid{display:grid;grid-template-columns:1fr;gap:18px}
          .solutions-grid > div{grid-column:span 1 !important;height:auto !important}
          .gallery-grid{display:grid;grid-template-columns:1fr;grid-auto-rows:210px;gap:14px}
          .gallery-grid > div{grid-column:span 1 !important}
        }
        @media(max-width:520px){
          gap:12px}
          .gallery-grid{grid-auto-rows:180px}
        }
      `}</style>
    </div>
  )
}

/* ─── TESTIMONIALS ─────────────────────────── */
function Testimonials(){
  const [ref,vis]=useReveal()
  const items=[
    {name:'Ramesh K.',role:'Facilities Manager',text:'GreenChip delivered our rooftop PV system on-time and reduced our energy bill by 62% — excellent technical support.'},
    {name:'Anita S.',role:'Director',text:'Professional team, great execution and transparent financing options. Our plant is now a reliable asset.'},
    {name:'Vikram P.',role:'Operations Head',text:'Seamless EPC delivery and top-notch O&M services. Performance has exceeded expectations.'},
  ]
  const[active,setActive]=useState(0)
  const[paused,setPaused]=useState(false)
  useEffect(()=>{
    if(paused)return
    const t=setInterval(()=>setActive(a=>(a+1)%items.length),4500)
    return()=>clearInterval(t)
  },[paused,items.length])

  return(
    <section className="section" ref={ref} style={{background:'#fff'}}>
      <div style={{textAlign:'center',marginBottom:30}}>
        <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Client Testimonials</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.4rem,2.6vw,1.9rem)',color:'#14532d'}}>What Our Clients Say</h2>
      </div>
      <div
        onMouseEnter={()=>setPaused(true)}
        onMouseLeave={()=>setPaused(false)}
        style={{position:'relative',maxWidth:900,margin:'0 auto',padding:'0 8% 48px'}}>
        <div style={{position:'relative',minHeight:340,display:'flex',alignItems:'center'}}>
          {items.map((t,i)=>{
            const isActive=i===active
            return(
              <div key={i} className="card" style={{
                position:'absolute',inset:0,
                padding:'52px 56px',borderRadius:22,
                boxShadow:'0 24px 60px -20px rgba(2,6,23,.14)',
                border:'1px solid #eef2ee',
                display:'flex',flexDirection:'column',justifyContent:'center',
                opacity:vis&&isActive?1:0,
                transform:isActive?'translateX(0) scale(1)':'translateX(24px) scale(.98)',
                transition:'opacity .6s ease, transform .6s ease',
                pointerEvents:isActive?'auto':'none'
              }}>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:64,lineHeight:1,color:'#bbf7d0',marginBottom:8}}>&ldquo;</div>
                <p style={{color:'#374151',lineHeight:1.85,fontSize:'clamp(1.05rem,1.6vw,1.35rem)',marginBottom:32}}>{t.text}</p>
                <div style={{display:'flex',alignItems:'center',gap:16}}>
                  <div style={{width:60,height:60,borderRadius:16,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:22,color:'#16a34a',flexShrink:0}}>{t.name.split(' ')[0][0]}</div>
                  <div>
                    <div style={{fontWeight:700,color:'#14532d',fontSize:17}}>{t.name}</div>
                    <div style={{fontSize:13.5,color:'#6b7280'}}>{t.role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div style={{display:'flex',justifyContent:'center',gap:10,marginTop:24}}>
          {items.map((_,i)=>(
            <button key={i} onClick={()=>setActive(i)} aria-label={`Show testimonial ${i+1}`} style={{
              width:i===active?28:9,height:9,borderRadius:5,border:'none',cursor:'pointer',
              background:i===active?'#16a34a':'#d1d5db',transition:'all .35s ease',padding:0
            }}/>
          ))}
        </div>
      </div>
    </section>
  )
}
