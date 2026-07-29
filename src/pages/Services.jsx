import{useReveal}from'../hooks/index.js'
import{IMG}from'../data/content.js'
import PageHero from'../components/PageHero.jsx'
import{Settings,CreditCard,BarChart3,Phone,CheckCircle2,DollarSign,ShieldCheck,Star,Check,ArrowRight}from'lucide-react'

/* ══ SERVICES ═════════════════════════════════ */
export function Services({setPage}){
  const[r1,v1]=useReveal()
  const[r2,v2]=useReveal()
  const[r3,v3]=useReveal()

  const models=[
    {num:'01',title:'CAPEX',badge:'Own It',col:'#16a34a',bg:'#f0fdf4',border:'#bbf7d0',desc:'Ideal for clients who want to invest and own their solar asset. We arrange collateral-free 75–80% loan at 9.5–10.5% interest rate, 8–10 year tenure. Claim 40% accelerated depreciation benefit.',items:['75–80% collateral-free loan','9.5–10.5% interest rate','8–10 year loan tenure','40% accelerated depreciation']},
    {num:'02',title:'Leasing / Deferred',badge:'Easy Entry',col:'#15803d',bg:'#dcfce7',border:'#86efac',desc:'100% collateral-free finance with just 5–10% deposit. Fixed monthly instalments for 5–7 years. No large upfront investment required. Suitable for SMEs and growing businesses.',items:['100% collateral-free finance','Only 5–10% deposit required','5–7 year tenure','Fixed monthly instalments']},
    {num:'03',title:'OPEX / PPA / RESCO',badge:'Zero Capex',col:'#14532d',bg:'#bbf7d0',border:'#4ade80',desc:'Install solar at your rooftop with zero upfront investment via Private Power Purchase Agreement. Pay only for units consumed. PPA rate locked for 10–15 years. We own, operate, and maintain.',items:['Zero upfront investment','Pay per unit consumed only','10–15 year PPA rate lock','We own, operate & maintain']},
  ]

  return(
    <div style={{background:'#f8fdf9'}}>
      <PageHero title="Our Services" subtitle="End-to-end solar services from engineering to ongoing asset management." img={`${IMG}services.jpg`} breadcrumb="What We Do → Services"/>
      <style>{`
        .epc-circle{transition:transform .45s cubic-bezier(.16,1,.3,1),box-shadow .35s ease,border-color .35s ease}
        .epc-circle:hover{transform:translateY(-6px) scale(1.05);box-shadow:0 18px 34px -12px rgba(20,83,45,.3);border-color:#16a34a}
        .svc-feat{transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease,border-color .3s ease}
        .svc-feat:hover{transform:translateX(4px);border-color:#bbf7d0;box-shadow:var(--shadow-sm)}
        .fin-card{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s ease}
        .fin-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
        .eth-bar{transform:scaleY(0);transition:transform .45s cubic-bezier(.16,1,.3,1)}
        .eth-row:hover .eth-bar{transform:scaleY(1)}
        .eth-row:hover{box-shadow:var(--shadow-lg);border-color:#bbf7d0}
        .eth-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),background .35s ease,border-color .35s ease}
        .eth-row:hover .eth-icon{transform:scale(1.07);background:#dcfce7;border-color:#86efac}
      `}</style>

      {/* EPC Process at top (moved here) */}
      <div style={{background:'#fff',borderRadius:12,padding:'36px 28px',margin:'18px 28px',marginBottom:8,position:'relative'}}>
        <div style={{position:'absolute',top:-60,right:-60,width:240,height:240,borderRadius:'50%',background:'radial-gradient(circle,#f0fdf4,transparent)',pointerEvents:'none'}}/>
        <div style={{textAlign:'center',marginBottom:8}}>
          <div className="badge" style={{marginBottom:6}}><span className="dot"/>EPC Process</div>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1rem,2.2vw,1.25rem)',color:'#14532d',letterSpacing:1}}>Engineering. Procurement. Construction. Commissioning & Handover</div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:18,flexWrap:'nowrap',overflowX:'auto',padding:'12px 6px'}}>
          {[
            {k:'ENGINEERING',img:'ENGINEERING.png',lines:['Feasibility Study','System Design & Simulation']},
            {k:'PROCUREMENT',img:'PROCUREMENT.png',lines:['Sourcing High Quality','Components, Timely Delivery']},
            {k:'CONSTRUCTION',img:'CONSTRUCTION.png',lines:['Professional Installation','Testing & Safety Compliance']},
            {k:'COMMISSIONING & HANDOVER',img:'COMMISSIONING.png',lines:['Performance Testing','Handover & Support']},
          ].map((st,i,arr)=> {
            const item = (
              <div key={st.k} style={{flex:'0 0 220px',minWidth:200,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'12px 10px'}}>
                <div className="epc-circle" style={{width:100,height:100,borderRadius:50,background:'#fff',border:'2px solid #14532d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,color:'#14532d',boxShadow:'0 12px 30px rgba(20,83,45,.06)'}}>
                    <img src={`${IMG}${st.img}`} alt={st.k} style={{width:64,height:64,objectFit:'contain'}}/>
                  </div>
                  <div style={{height:10}}/>
                <div style={{fontSize:14,fontWeight:800,color:'#14532d',letterSpacing:1.2}}>{st.k}</div>
                <div style={{marginTop:8,fontSize:13,color:'#6b7280',lineHeight:1.45}}>
                  {st.lines.map((t,ii)=> <div key={ii}>{t}</div>)}
                </div>
              </div>
            )
            const arrow = i < arr.length - 1 && (
              <div key={'arrow'+i} aria-hidden style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'0 6px',marginTop:36}}>
                <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 14H40" stroke="#14532d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 6L40 14L32 22" stroke="#14532d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )
            return [item, arrow]
          })}
        </div>
      </div>

      <section className="section" style={{background:'#fff'}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <div className="badge" style={{marginBottom:14,justifyContent:'center'}}><span className="dot"/>What We Offer</div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3.5vw,2.7rem)',color:'#14532d'}}>
            Leaders in Renewable<br/><span className="grad-text">Energy Services in India</span>
          </h2>
        </div>

        

        {/* ── EPC ── */}
        <div ref={r1} className={`reveal ${v1?'vis':''}`} style={{marginBottom:52,background:'#f8fdf9',border:'1px solid #e5e7eb',borderRadius:'var(--r-xl)',padding:'48px 44px',boxShadow:'var(--shadow-sm)',position:'relative',overflow:'hidden'}}>
          <div className="g2" style={{alignItems:'flex-start',position:'relative'}}>
            <div>
              <div style={{display:'flex',width:56,height:56,borderRadius:16,background:'linear-gradient(135deg,#16a34a,#166534)',alignItems:'center',justifyContent:'center',marginBottom:16,boxShadow:'0 10px 24px -8px rgba(22,163,74,.6)'}}><Settings size={26} strokeWidth={1.75} color="#fff"/></div>
              <div className="badge" style={{marginBottom:12}}><span className="dot"/>Service 01</div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.5rem,2.5vw,2.1rem)',color:'#14532d',marginBottom:14,lineHeight:1.2}}>Engineering, Procurement &amp; Construction (EPC)</h3>
              <p style={{color:'#374151',lineHeight:1.9,fontSize:14.5,marginBottom:16,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>The EPC contracting model offers several benefits for project owners. With a single point of contact for the entire project, we streamline communication, reduce delays, and improve overall project efficiency.</p>
              <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,marginBottom:22,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>Our EPC model covers feasibility study, detailed engineering design, statutory approvals, equipment procurement, civil works, electrical installation, grid connection, testing, commissioning, and hand-over with performance guarantees.</p>
              <button className="btn-primary" onClick={()=>setPage('epc')} style={{padding:'11px 24px',fontSize:13,display:'inline-flex',alignItems:'center',gap:7,marginBottom:26}}>Learn More <ArrowRight size={14} strokeWidth={2.25}/></button>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {i:Phone,t:'Single Point of Contact',d:'Streamlines communication and decision-making to reduce delays and improve project efficiency.'},
                {i:CheckCircle2,t:'Full Accountability',d:'Responsible for design, procurement, and construction — meeting deadlines and budget.'},
                {i:DollarSign,t:'Cost Savings',d:'Strong supplier relationships for bulk discounts on panels, inverters, and BOS components.'},
                {i:ShieldCheck,t:'Reduced Risk',d:'Project risks transferred to the EPC contractor — managing design errors and delays.'},
                {i:Star,t:'Quality Assurance',d:'Compliance with IEC, BIS, and MNRE standards for high-quality outcomes.'},
              ].map((p,i)=>(
                <div key={i} className="svc-feat" style={{display:'flex',gap:13,alignItems:'flex-start',padding:'15px 17px',background:'#fff',borderRadius:'var(--r-md)',border:'1px solid #e5e7eb'}}>
                  <div style={{width:36,height:36,borderRadius:10,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><p.i size={16} strokeWidth={1.75} color="#16a34a"/></div>
                  <div>
                    <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#14532d',fontSize:13,marginBottom:2}}>{p.t}</div>
                    <div style={{color:'#6b7280',fontSize:12.5,lineHeight:1.7}}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FINANCING ── */}
        <div ref={r2} className={`reveal ${v2?'vis':''}`} style={{marginBottom:52,background:'#f8fdf9',border:'1px solid #e5e7eb',borderRadius:'var(--r-xl)',padding:'48px 44px',boxShadow:'var(--shadow-sm)'}}>
          <div style={{display:'flex',width:56,height:56,borderRadius:16,background:'linear-gradient(135deg,#16a34a,#166534)',alignItems:'center',justifyContent:'center',marginBottom:16,boxShadow:'0 10px 24px -8px rgba(22,163,74,.6)'}}><CreditCard size={26} strokeWidth={1.75} color="#fff"/></div>
          <div className="badge" style={{marginBottom:12}}><span className="dot"/>Service 02</div>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.5rem,2.5vw,2.1rem)',color:'#14532d',marginBottom:8,lineHeight:1.2}}>Financing Models</h3>
          <p style={{color:'#16a34a',fontSize:13.5,marginBottom:10,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500}}>CAPEX · LEASING · DEFERRED PAYMENT · OPEX / PPA / RESCO</p>
          <p style={{color:'#374151',lineHeight:1.9,fontSize:14.5,marginBottom:10,maxWidth:800,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>Attractive Financing Schemes for Our Rooftop Customers. Going Solar has never been this Easy &amp; Affordable. Take the right step into the world of Solar Power Solutions with our hassle-free financing.</p>
          <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,marginBottom:36,maxWidth:800,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>Depending on your situation, we connect you with partner organisations for unsecured loans from ₹1 Lakh up to ₹100 Lakhs, financing up to 80% of project cost with flexible repayment schedules.</p>
        <button className="btn-primary" onClick={()=>setPage('financing')} style={{padding:'11px 24px',fontSize:13,display:'inline-flex',alignItems:'center',gap:7,marginBottom:26}}>Learn More <ArrowRight size={14} strokeWidth={2.25}/></button>
          <div className="rg-3" style={{gap:20,marginBottom:28}}>
            {models.map((m,i)=>(
              <div key={i} className="fin-card" style={{background:m.bg,border:`1px solid ${m.border}`,borderRadius:'var(--r-lg)',padding:'28px 22px',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:12,right:12,padding:'3px 10px',background:'rgba(255,255,255,.7)',border:`1px solid ${m.border}`,borderRadius:100,color:m.col,fontSize:10,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,letterSpacing:.8}}>{m.badge}</div>
                <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:48,color:`${m.col}18`,lineHeight:1,marginBottom:5}}>{m.num}</div>
                <h4 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:15.5,color:'#14532d',marginBottom:10}}>Model {m.num}: {m.title}</h4>
                <p style={{color:'#374151',fontSize:12.5,lineHeight:1.82,marginBottom:16,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>{m.desc}</p>
                <div style={{display:'flex',flexDirection:'column',gap:6}}>
                  {m.items.map((it,j)=>(
                    <div key={j} style={{display:'flex',alignItems:'center',gap:7}}>
                      <Check size={14} strokeWidth={2.5} color={m.col}/>
                      <span style={{color:'#374151',fontSize:12.5}}>{it}</span>
                    </div>
                  ))}
                </div>
                <div style={{position:'absolute',bottom:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${m.col},transparent)`}}/>
              </div>
            ))}
          </div>
          {/* Criteria */}
          <div style={{padding:'18px 22px',background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:12}}>
            <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,color:'#15803d',fontSize:12.5,marginBottom:10}}>Projects We Look For:</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:9}}>
              {['Both rooftop and ground mounted','Profit making companies','Solar plant size: 100 kW and above','Clients across India'].map(r=>(
                <span key={r} style={{padding:'4px 13px',background:'#fff',border:'1px solid #bbf7d0',borderRadius:100,color:'#15803d',fontSize:12}}>{r}</span>
              ))}
            </div>
          </div>
        </div>
 
        {/* ── ASSET MANAGEMENT ── */}
        <div ref={r3} className={`reveal ${v3?'vis':''}`} style={{background:'#f8fdf9',border:'1px solid #e5e7eb',borderRadius:'var(--r-xl)',padding:'48px 44px',boxShadow:'var(--shadow-sm)'}}>
          <div className="g2" style={{alignItems:'center'}}>
            <div className="media-zoom" style={{borderRadius:'var(--r-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
              <img src={`${IMG}1.jpg`} alt="Asset Management" style={{width:'100%',height:340,objectFit:'cover'}}/>
            </div>
            <div>
              <div style={{display:'flex',width:56,height:56,borderRadius:16,background:'linear-gradient(135deg,#16a34a,#166534)',alignItems:'center',justifyContent:'center',marginBottom:16,boxShadow:'0 10px 24px -8px rgba(22,163,74,.6)'}}><BarChart3 size={26} strokeWidth={1.75} color="#fff"/></div>
              <div className="badge" style={{marginBottom:12}}><span className="dot"/>Service 03</div>
              <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.5rem,2.5vw,2.1rem)',color:'#14532d',marginBottom:14,lineHeight:1.2}}>Asset Management</h3>
              <p style={{color:'#374151',lineHeight:1.9,fontSize:14.5,marginBottom:14,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>At GreenChip, we specialise in solar asset management, providing comprehensive solutions that maximise performance and returns on your solar investments throughout the system's 25+ year lifetime.</p>
              <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,marginBottom:24,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>Our expert team monitors and manages your solar assets 24/7, ensuring optimal performance, timely preventive maintenance, fault diagnostics, inverter optimisation, and maximum energy generation to protect your ROI.</p>
              <button className="btn-primary" onClick={()=>setPage('assetmanagement')} style={{padding:'11px 24px',fontSize:13,display:'inline-flex',alignItems:'center',gap:7,marginBottom:26}}>Learn More <ArrowRight size={14} strokeWidth={2.25}/></button>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                {['24/7 Remote Monitoring','Preventive Maintenance','Performance Analytics','Inverter Optimisation','Fault Diagnostics','Financial Reporting'].map(f=>(
                  <div key={f} style={{display:'flex',alignItems:'center',gap:8,color:'#374151',fontSize:13}}>
                    <Check size={14} strokeWidth={2.5} color="#16a34a"/>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ══ EPC DETAIL ═══════════════════════════════ */
export function EPC(){
  const[r1,v1]=useReveal()
  const[r2,v2]=useReveal()
  const pts=[
    {i:Phone,t:'Single Point of Contact',d:'With EPC, there is a single point of contact for the entire project, which helps to streamline communication and decision-making. This can help to reduce delays and improve overall project efficiency.'},
    {i:CheckCircle2,t:'Accountability',d:'The EPC contractor is responsible for the entire project, from design and engineering to procurement and construction. They are accountable for meeting project deadlines, staying within budget, and ensuring the project meets all specifications.'},
    {i:DollarSign,t:'Cost Savings',d:'EPC contractors often have strong relationships with suppliers and can negotiate bulk discounts on materials and equipment. This can help to lower project costs and maximise value for the project owner.'},
    {i:ShieldCheck,t:'Reduced Risk',d:'With an EPC contract, the project owner transfers the risk of the project to the EPC contractor. The contractor is responsible for managing any risks associated with the project, such as design errors or construction delays.'},
    {i:Star,t:'Quality Assurance',d:'EPC contractors ensure project compliance with standards and regulations, ensuring high-quality outcomes that meet requirements. This model minimises risks, enhances efficiency, and maximises value for project owners and stakeholders.'},
  ]
  return(
    <div style={{background:'#f8fdf9'}}>
      <PageHero title="EPC Services" subtitle="Engineering, Procurement & Construction — complete project delivery from design to commissioning." img={`${IMG}EPCdetails.jpg`} breadcrumb="Services → EPC"/>
      <style>{`
        .epc-circle{transition:transform .45s cubic-bezier(.16,1,.3,1),box-shadow .35s ease,border-color .35s ease}
        .epc-circle:hover{transform:translateY(-6px) scale(1.05);box-shadow:0 18px 34px -12px rgba(20,83,45,.3);border-color:#16a34a}
        .svc-feat{transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease,border-color .3s ease}
        .svc-feat:hover{transform:translateX(4px);border-color:#bbf7d0;box-shadow:var(--shadow-sm)}
        .fin-card{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s ease}
        .fin-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
        .eth-bar{transform:scaleY(0);transition:transform .45s cubic-bezier(.16,1,.3,1)}
        .eth-row:hover .eth-bar{transform:scaleY(1)}
        .eth-row:hover{box-shadow:var(--shadow-lg);border-color:#bbf7d0}
        .eth-icon{transition:transform .45s cubic-bezier(.16,1,.3,1),background .35s ease,border-color .35s ease}
        .eth-row:hover .eth-icon{transform:scale(1.07);background:#dcfce7;border-color:#86efac}
      `}</style>
      {/* EPC Process on EPC page */}
      <div style={{background:'#fff',borderRadius:12,padding:'28px 22px',margin:'18px 28px',marginBottom:8,position:'relative'}}>
        <div style={{position:'absolute',top:-60,right:-60,width:240,height:240,borderRadius:'50%',background:'radial-gradient(circle,#f0fdf4,transparent)',pointerEvents:'none'}}/>
        <div style={{textAlign:'center',marginBottom:8}}>
          <div className="badge" style={{marginBottom:6}}><span className="dot"/>EPC Process</div>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(.95rem,2vw,1.1rem)',color:'#14532d',letterSpacing:1}}>Engineering. Procurement. Construction. Commissioning & Handover</div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:18,flexWrap:'nowrap',overflowX:'auto',padding:'12px 6px'}}>
          {[
            {k:'ENGINEERING',img:'ENGINEERING.png',lines:['Feasibility Study','System Design & Simulation']},
            {k:'PROCUREMENT',img:'PROCUREMENT.png',lines:['Sourcing High Quality','Components, Timely Delivery']},
            {k:'CONSTRUCTION',img:'CONSTRUCTION.png',lines:['Professional Installation','Testing & Safety Compliance']},
            {k:'COMMISSIONING & HANDOVER',img:'COMMISSIONING.png',lines:['Performance Testing','Handover & Support']},
          ].map((st,i,arr)=> {
            const item = (
              <div key={st.k} style={{flex:'0 0 220px',minWidth:200,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'12px 10px'}}>
                <div className="epc-circle" style={{width:100,height:100,borderRadius:50,background:'#fff',border:'2px solid #14532d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,color:'#14532d',boxShadow:'0 10px 28px rgba(20,83,45,.06)'}}>
                    <img src={`${IMG}${st.img}`} alt={st.k} style={{width:64,height:64,objectFit:'contain'}}/>
                  </div>
                  <div style={{height:10}}/>
                <div style={{fontSize:13,fontWeight:800,color:'#14532d',letterSpacing:1}}>{st.k}</div>
                <div style={{marginTop:6,fontSize:13,color:'#6b7280',lineHeight:1.45}}>
                  {st.lines.map((t,ii)=> <div key={ii}>{t}</div>)}
                </div>
              </div>
            )
            const arrow = i < arr.length - 1 && (
              <div key={'arrow-epc-'+i} aria-hidden style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'0 6px',marginTop:36}}>
                <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 14H40" stroke="#14532d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 6L40 14L32 22" stroke="#14532d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )
            return [item, arrow]
          })}
        </div>
      </div>
      <section className="section" style={{background:'#fff'}}>
        <div ref={r1} className="g2" style={{alignItems:'center',marginBottom:64}}>
          <div className={`rev-l ${v1?'vis':''}`}>
            <div className="badge" style={{marginBottom:16}}><span className="dot"/>EPC Model</div>
            <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(1.8rem,3vw,2.6rem)',color:'#14532d',lineHeight:1.15,marginBottom:22}}>
              Complete Project<br/><span className="grad-text">Delivery Excellence</span>
            </h2>
            <p style={{color:'#374151',lineHeight:1.9,fontSize:15,marginBottom:14,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>The EPC (Engineering, Procurement, and Construction) contracting model offers several benefits — streamlined communication, single accountability, cost savings through bulk procurement, risk transfer, and quality assurance throughout the entire project lifecycle.</p>
            <p style={{color:'#6b7280',lineHeight:1.9,fontSize:14,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>GreenChip is a specialist EPC contractor for solar PV, wind, hybrid, and energy storage projects. We take full responsibility for project delivery, allowing you to focus on your core business while we handle every aspect of your renewable energy project.</p>
          </div>
          <div className={`rev-r media-zoom ${v1?'vis':''}`} style={{borderRadius:'var(--r-xl)',overflow:'hidden',boxShadow:'var(--shadow-lg)'}}>
            <img src={`${IMG}17.jpg`} alt="EPC" style={{width:'100%',height:360,objectFit:'cover'}}/>
          </div>
        </div>
        <div style={{textAlign:'center',marginBottom:40}}>
          <div className="badge" style={{marginBottom:12,justifyContent:'center'}}><span className="dot"/>Key Advantages</div>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'clamp(1.4rem,2.5vw,1.9rem)',color:'#14532d'}}>Why Choose EPC?</h3>
        </div>
        <div ref={r2} style={{display:'flex',flexDirection:'column',gap:16}}>
          {pts.map((p,i)=>(
            <div key={i} className="card-flat eth-row" style={{display:'grid',gridTemplateColumns:'60px 1fr',gap:22,alignItems:'flex-start',padding:'28px 32px',position:'relative',overflow:'hidden',
              opacity:v2?1:0,transform:v2?'translateX(0)':'translateX(-24px)',
              transition:`opacity .6s ease ${i*.09}s, transform .6s cubic-bezier(.16,1,.3,1) ${i*.09}s, box-shadow .35s ease, border-color .35s ease`}}>
              <span className="eth-bar" style={{position:'absolute',left:0,top:0,bottom:0,width:3,background:'linear-gradient(180deg,#16a34a,#4ade80)',transformOrigin:'top'}}/>
              <div className="eth-icon" style={{width:50,height:50,borderRadius:14,background:'#f0fdf4',border:'1px solid #bbf7d0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><p.i size={22} strokeWidth={1.75} color="#16a34a"/></div>
              <div>
                <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:19,color:'#14532d',marginBottom:8}}>{p.t}</h3>
                <p style={{color:'#6b7280',fontSize:14,lineHeight:1.85,fontFamily:"'Roboto',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif"}}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
