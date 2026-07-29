import{useReveal}from'../hooks/index.js'
import{IMG,SOLUTIONS}from'../data/content.js'
import PageHero from'../components/PageHero.jsx'
import{Check}from'lucide-react'

/* ── All 9 Solutions listing ──────────────────── */
export function Solutions({setPage}){
  const[ref,vis]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title="Our Solutions" subtitle="Comprehensive renewable energy solutions for every scale and application across India." img={`${IMG}Commerial rooftop.jpg`} breadcrumb="What We Do → Solutions"/>

      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:56}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>Renewable Energy</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>
            Leaders in Renewable<br/><span className="grad-text">Energy Solutions in India</span>
          </h2>
        </div>

        <div ref={ref} className="g3">
          {SOLUTIONS.map((s,i)=>(
            <div key={i} className="card" onClick={()=>setPage(s.id==='rooftop'?'rooftop':'sol_'+s.id)}
              style={{cursor:'pointer',overflow:'hidden',display:'flex',flexDirection:'column',height:'100%',
                opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(28px)',
                transition:`all .6s ease ${i*.07}s`}}>
              <div className="media-zoom" style={{position:'relative',height:210,overflow:'hidden',flexShrink:0}}>
                <img src={`${IMG}${s.img}`} alt={s.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,40,15,.7),transparent 55%)'}}/>
                <div style={{position:'absolute',top:12,left:12,width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,.9)',display:'flex',alignItems:'center',justifyContent:'center'}}><s.icon size={18} strokeWidth={2} color="#16a34a"/></div>
              </div>
              <div style={{padding:'24px 24px 28px',display:'flex',flexDirection:'column',flex:1}}>
                <div style={{color:'#16a34a',fontSize:9.5,letterSpacing:2.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:7,fontWeight:600}}>{s.sub}</div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:19,color:'#14532d',marginBottom:10}}>{s.title}</h3>
                <p style={{color:'#6b7280',fontSize:13,lineHeight:1.82,marginBottom:14,flex:1}}>{s.intro}</p>
                {/* Stats row */}
                {s.stats&&(
                  <div style={{display:'flex',gap:10,marginBottom:14,flexWrap:'wrap'}}>
                    {s.stats.map(([n,l])=>(
                      <div key={n} style={{flex:1,minWidth:70,background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:10,padding:'8px 10px',textAlign:'center'}}>
                        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:'#16a34a',fontSize:13,lineHeight:1}}>{n}</div>
                        <div style={{color:'#6b7280',fontSize:10,marginTop:3,fontFamily:"'Space Grotesk',sans-serif"}}>{l}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{color:'#16a34a',fontSize:12.5,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,display:'flex',alignItems:'center',gap:5}}>
                  Know More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/* ── Solution Detail Page (generic) ─────────────── */
export function SolutionDetail({id,setPage}){
  const sol=SOLUTIONS.find(s=>s.id===id)||SOLUTIONS[0]
  const[r1,v1]=useReveal()
  const[r2,v2]=useReveal()
  return(
    <div style={{background:'#f8fdf9',paddingTop:34}}>
      <PageHero title={sol.title} subtitle={sol.tagline} img={`${IMG}${sol.img}`} breadcrumb={`Solutions → ${sol.title}`}/>
      <style>{`
        .sol-stat{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s ease}
        .sol-stat:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
        .ben-card:hover{box-shadow:var(--shadow-md);border-color:#bbf7d0;transform:translateY(-3px)}
        .ben-check{transition:transform .4s cubic-bezier(.16,1,.3,1),background .3s ease}
        .ben-card:hover .ben-check{transform:scale(1.1);background:#dcfce7}
      `}</style>

      {/* Main content */}
      <section className="section" style={{background:'#fff'}}>
        <div ref={r1} className="g2" style={{alignItems:'center',marginBottom:64}}>
          <div className={`rev-l ${v1?'vis':''}`}>
            <div className="badge" style={{marginBottom:16}}><span className="dot"/>{sol.sub}</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3vw,2.5rem)',color:'#14532d',lineHeight:1.15,marginBottom:22}}>
              {sol.title} <span className="grad-text">Solutions</span>
            </h2>
            <p style={{color:'#374151',lineHeight:1.95,fontSize:15,marginBottom:16}}>{sol.intro}</p>
            <p style={{color:'#6b7280',lineHeight:1.95,fontSize:14,marginBottom:16}}>{sol.body}</p>
            {sol.body2&&<p style={{color:'#6b7280',lineHeight:1.95,fontSize:14,marginBottom:32}}>{sol.body2}</p>}
            {sol.sections&&sol.sections.map((sec,i)=> (
              <div key={i} style={{marginBottom:20}}>
                <h4 style={{color:'#16a34a',fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:15,marginBottom:8}}>{sec.title}</h4>
                <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,marginBottom:12}}>{sec.text}</p>
              </div>
            ))}
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <button className="btn-primary" onClick={()=>setPage('calculator')} style={{padding:'12px 26px',fontSize:13}}>Calculate Savings</button>
              <button className="btn-outline" onClick={()=>setPage('contact')} style={{padding:'12px 26px',fontSize:13}}>Get a Quote</button>
            </div>
          </div>
          <div className={`rev-r media-zoom ${v1?'vis':''}`} style={{borderRadius:'var(--r-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
            <img src={`${IMG}${sol.img}`} alt={sol.title} style={{width:'100%',height:460,objectFit:'cover'}}/>
          </div>
        </div>

        {/* Stats */}
        {sol.stats&&(
          <div className="rg-3" style={{gap:20,marginBottom:56}}>
            {sol.stats.map(([n,l])=>(
              <div key={n} className="sol-stat" style={{background:'linear-gradient(135deg,#f0fdf4,#dcfce7)',border:'1px solid #bbf7d0',borderRadius:'var(--r-lg)',padding:'30px 20px',textAlign:'center'}}>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:'#16a34a',fontSize:'clamp(1.5rem,2.5vw,2rem)',marginBottom:8}}>{n}</div>
                <div style={{color:'#15803d',fontSize:12,letterSpacing:1.5,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        {sol.benefits&&(
          <div ref={r2}>
            <div style={{textAlign:'center',marginBottom:40}}>
              <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Key Benefits</div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.4rem,2.5vw,2rem)',color:'#14532d'}}>Why Choose {sol.title}?</h3>
            </div>
            <div className="rg-3" style={{gap:18}}>
              {sol.benefits.map((b,i)=>(
                <div key={i} className="card-flat ben-card" style={{padding:'24px 22px',display:'flex',alignItems:'flex-start',gap:14,
                  opacity:v2?1:0,transform:v2?'translateY(0)':'translateY(22px)',
                  transition:`opacity .55s ease ${i*.08}s, transform .55s cubic-bezier(.16,1,.3,1) ${i*.08}s, box-shadow .35s ease, border-color .35s ease`}}>
                  <div className="ben-check" style={{width:34,height:34,borderRadius:10,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Check size={16} strokeWidth={2.5} color="#16a34a"/></div>
                  <p style={{color:'#374151',fontSize:14,lineHeight:1.75,marginTop:5}}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </section>

        {/* Gallery (renders if `sol.gallery` exists) */}
        {sol.gallery && (
          <section className="section" style={{background:'#fff'}}>
            <div style={{textAlign:'center',marginBottom:24}}>
              <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Gallery</div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.3rem,2.5vw,1.6rem)',color:'#14532d'}}>Project Gallery</h3>
            </div>
            <div className="g3">
              {sol.gallery.map((g,i)=>(
                <div key={i} className="card media-zoom" style={{overflow:'hidden'}}>
                  <img src={`${IMG}${g}`} alt={`gallery-${i}`} style={{width:'100%',height:200,objectFit:'cover'}}/>
                </div>
              ))}
            </div>
          </section>
        )}

       

      {/* Other solutions */}
      <section className="section" style={{background:'#f8fdf9',paddingTop:56}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:36,flexWrap:'wrap',gap:16}}>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.3rem,2.5vw,1.8rem)',color:'#14532d'}}>More Solutions</h3>
          <button className="btn-outline" onClick={()=>setPage('solutions')} style={{padding:'9px 22px',fontSize:13}}>View All →</button>
        </div>
        <div className="g3">
          {SOLUTIONS.filter(s=>s.id!==id).slice(0,3).map((s,i)=>(
            <div key={i} className="card" onClick={()=>setPage('sol_'+s.id)} style={{cursor:'pointer',overflow:'hidden'}}>
              <div className="media-zoom"><img src={`${IMG}${s.img}`} alt={s.title} style={{width:'100%',height:180,objectFit:'cover'}}/></div>
              <div style={{padding:'18px 18px 22px'}}>
                <div style={{color:'#16a34a',fontSize:9.5,letterSpacing:2,textTransform:'uppercase',fontFamily:"'Space Grotesk',sans-serif",marginBottom:6,fontWeight:600}}>{s.sub}</div>
                <h4 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:16,color:'#14532d'}}>{s.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
