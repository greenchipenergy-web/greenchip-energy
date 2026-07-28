import{useState,useRef,useEffect}from'react'
import{useScrolled}from'../hooks/index.js'
import{IMG}from'../data/content.js'
import{Globe2,Clock,Mail,Sun}from'lucide-react'

const ABOUT_DD=[['about','About GreenChip'],['values','Our Values'],['approach','Our Approach'],['ethics','Ethics & Principles'],['team','Team Members']]
const WHAT_DD=[['solutions','All Solutions'],['rooftop','Rooftop Solar'],['sol_ground','Ground Mounted'],['services','Services'],['epc','EPC Detail'], ['financing',  'Financing Models'], ['assetmanagement', 'Asset Management'],['initiatives','New Initiatives']]

export default function Navbar({page,setPage}){
  const sc=useScrolled(50)
  const[mob,setMob]=useState(false)
  const[ad,setAd]=useState(false)
  const[wd,setWd]=useState(false)
  const adTimer = useRef(null)
  const wdTimer = useRef(null)
  const go=p=>{setPage(p);setMob(false);setAd(false);setWd(false);window.scrollTo(0,0);clearTimeout(adTimer.current);clearTimeout(wdTimer.current)}

  // Close mobile menu when external navigation occurs (e.g., footer links)
  useEffect(()=>{
    const h=()=>setMob(false)
    window.addEventListener('nav-change',h)
    return()=>window.removeEventListener('nav-change',h)
  },[])

  const lk=(p)=>({
    background:'none',border:'none',
    color:page===p?'#16a34a':'#374151',
    fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,fontSize:13.5,
    cursor:'pointer',padding:'3px 0',transition:'color .2s',letterSpacing:'.2px',
  })
  const dd={
    position:'absolute',top:'calc(100% + 10px)',left:0,
    background:'#fff',border:'1px solid #e5e7eb',
    borderRadius:12,padding:'8px 0',minWidth:200,
    boxShadow:'0 12px 40px rgba(0,0,0,.1)',zIndex:300,
  }
  
  const di={
    padding:'10px 20px',color:'#374151',cursor:'pointer',
    fontFamily:"'Inter',sans-serif",fontSize:13,transition:'all .15s',
    display:'flex',alignItems:'center',gap:8,
  }

  return(
    <>
    {/* Top accent bar (fixed to prevent header misalignment) */}
    <div style={{height:34,background:'linear-gradient(90deg,#14532d,#166534,#14532d)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 8%',fontSize:11,color:'rgba(255,255,255,.85)',fontFamily:"'Space Grotesk',sans-serif",letterSpacing:'.5px',position:'fixed',top:0,left:0,right:0,zIndex:1002}}>
      <div style={{display:'flex',gap:24}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><Globe2 size={12} strokeWidth={2}/>India — South Asia</span>
        <span className="hide-mob" style={{display:'inline-flex',alignItems:'center',gap:6}}><Clock size={12} strokeWidth={2}/>Mon–Fri: 10:00 AM – 6:00 PM</span>
      </div>
      <span style={{display:'inline-flex',alignItems:'center',gap:6}}><Mail size={12} strokeWidth={2}/>info@greenchipenergy.com</span>
    </div>

    {/* Main nav */}
    <nav style={{
      position:'fixed',top:34,left:0,right:0,zIndex:1000,
      background:sc?'rgba(255,255,255,.97)':'rgba(255,255,255,.95)',
      backdropFilter:'blur(20px)',
      borderBottom:`1px solid ${sc?'#e5e7eb':'rgba(229,231,235,.6)'}`,
      boxShadow:sc?'0 2px 16px rgba(0,0,0,.06)':'none',
      transition:'all .35s',padding:'0 8%',
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:66}}>

        {/* Logo */}
        <div onClick={()=>go('home')} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:140,height:56,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:'transparent'}}>
            <img src={`${IMG}logo1.png`} alt="GreenChip Logo" style={{maxHeight:56,height:'auto',width:'auto',display:'block'}}/>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hide-mob" style={{display:'flex',alignItems:'center',gap:26}}>
          <button style={lk('home')} onClick={()=>go('home')}
            onMouseEnter={e=>e.target.style.color='#16a34a'}
            onMouseLeave={e=>e.target.style.color=page==='home'?'#16a34a':'#374151'}>Home</button>

          {/* About dropdown */}
          <div style={{position:'relative'}} onMouseEnter={()=>{clearTimeout(adTimer.current);setAd(true)}} onMouseLeave={()=>{adTimer.current = setTimeout(()=>setAd(false),120)}}>
            <button style={{...lk('about'),display:'flex',alignItems:'center',gap:4}} onClick={()=>go('about')}
              onMouseEnter={e=>e.currentTarget.style.color='#16a34a'}
              onMouseLeave={e=>e.currentTarget.style.color=page==='about'?'#16a34a':'#374151'}>
              About Us <span style={{fontSize:8,marginTop:1}}>▾</span>
            </button>
            {ad&&<div style={dd}>
              {ABOUT_DD.map(([p,l])=>(
                <div key={p} onClick={()=>go(p)} style={di}
                  onMouseEnter={e=>{e.currentTarget.style.color='#16a34a';e.currentTarget.style.background='#f0fdf4'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#374151';e.currentTarget.style.background='transparent'}}>
                  <span style={{width:4,height:4,borderRadius:'50%',background:'#16a34a',flexShrink:0}}/>
                  {l}
                </div>
              ))}
            </div>}
          </div>

          {/* What We Do dropdown */}
          <div style={{position:'relative'}} onMouseEnter={()=>{clearTimeout(wdTimer.current);setWd(true)}} onMouseLeave={()=>{wdTimer.current = setTimeout(()=>setWd(false),120)}}>
            <button style={{...lk('solutions'),display:'flex',alignItems:'center',gap:4}}>
              What We Do <span style={{fontSize:8,marginTop:1}}>▾</span>
            </button>
            {wd&&<div style={dd}>
              {WHAT_DD.map(([p,l])=>(
                <div key={p} onClick={()=>go(p)} style={di}
                  onMouseEnter={e=>{e.currentTarget.style.color='#16a34a';e.currentTarget.style.background='#f0fdf4'}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#374151';e.currentTarget.style.background='transparent'}}>
                  <span style={{width:4,height:4,borderRadius:'50%',background:'#16a34a',flexShrink:0}}/>
                  {l}
                </div>
              ))}
            </div>}
          </div>

          {[['projects','Projects'],['careers','Careers'],['contact','Contact']].map(([p,l])=>(
            <button key={p} style={lk(p)} onClick={()=>go(p)}
              onMouseEnter={e=>e.target.style.color='#16a34a'}
              onMouseLeave={e=>e.target.style.color=page===p?'#16a34a':'#374151'}>{l}</button>
          ))}

          <button className="btn-primary" onClick={()=>go('calculator')} style={{padding:'9px 20px',fontSize:13,borderRadius:8,display:'inline-flex',alignItems:'center',gap:7}}>
            <Sun size={15} strokeWidth={2}/>Calculator
          </button>
        </div>

        {/* Hamburger (solar-themed energy icon, border removed and larger) */}
        <button onClick={()=>setMob(!mob)} className="show-mob" aria-label={mob? 'Close menu' : 'Open menu'} style={{display:'none',background:'transparent',border:'none',borderRadius:8,width:52,height:52,color:'#16a34a',fontSize:18,alignItems:'center',justifyContent:'center',padding:6}}>
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
           
            <g fill="#16a34a">
              <rect x="3" y="3" width="3.8" height="3.8" rx="0.8" />
              <rect x="9" y="3" width="3.8" height="3.8" rx="0.8" />
              <rect x="15" y="3" width="3.8" height="3.8" rx="0.8" />

              <rect x="3" y="9" width="3.8" height="3.8" rx="0.8" />
              <rect x="9" y="9" width="3.8" height="3.8" rx="0.8" />
              <rect x="15" y="9" width="3.8" height="3.8" rx="0.8" />

              <rect x="3" y="15" width="3.8" height="3.8" rx="0.8" />
              <rect x="9" y="15" width="3.8" height="3.8" rx="0.8" />
              <rect x="15" y="15" width="3.8" height="3.8" rx="0.8" />
            </g>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mob&&(
        <div style={{position:'absolute',top:'100%',left:0,right:0,background:'#fff',borderTop:'1px solid #e5e7eb',padding:'10px 0 20px',zIndex:1100,boxShadow:'0 8px 30px rgba(0,0,0,.06)'}}>
          {/* Mobile header logo removed as requested */}
          {[['home','Home'],...ABOUT_DD,...WHAT_DD,['projects','Projects'],['careers','Careers'],['calculator','Solar Calculator'],['terms','Terms & Conditions'],['privacy','Privacy Policy'],['warranty','Warranty Policy'],['contact','Contact']].map(([p,l])=>(
            <div key={p} onClick={()=>go(p)} style={{padding:'12px 20px',color:page===p?'#16a34a':'#374151',cursor:'pointer',fontFamily:"'Inter',sans-serif",fontSize:14,borderBottom:'1px solid #f3f4f6',display:'flex',alignItems:'center',gap:8}}>
              {page===p&&<span style={{width:3,height:3,borderRadius:'50%',background:'#16a34a'}}/>}
              {p==='calculator'&&<Sun size={14} strokeWidth={2}/>}
              {l}
            </div>
          ))}
        </div>
      )}
    </nav>

    <style>{`.show-mob{display:none}@media(max-width:900px){.hide-mob{display:none!important}.show-mob{display:flex!important}}`}</style>
    </>
  )
}
