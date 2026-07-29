import{IMG}from'../data/content.js'
import{MapPin,Phone,Mail}from'lucide-react'

export default function Footer({setPage}){
  const go=p=>{setPage(p);window.scrollTo(0,0);try{window.dispatchEvent(new Event('nav-change'))}catch(e){}}

  const colHead={
    fontFamily:"'Space Grotesk',sans-serif",
    fontWeight:600,color:'#fff',fontSize:12,
    letterSpacing:1.5,textTransform:'uppercase',marginBottom:20
  }
  const link={
    color:'rgba(255,255,255,.6)',fontSize:13,lineHeight:1,
    marginBottom:13,cursor:'pointer',display:'block',width:'fit-content'
  }

  return(
    <footer style={{background:'#14532d',color:'#fff',position:'relative'}}>
      {/* Top accent line */}
      <div style={{height:3,background:'linear-gradient(90deg,#16a34a,#4ade80,#16a34a)'}}/>

      {/* ── MAIN GRID ─────────────────────────────────────── */}
      <div style={{padding:'64px 8% 48px'}}>
        <div className="footer-grid" style={{
          display:'grid',
          gridTemplateColumns:'2fr 1fr 1fr 1fr 1.3fr',
          gap:44,
        }}>

          {/* Brand */}
          <div className="foot-col-brand">
            <div style={{marginBottom:20}}>
              <img
                src={`${IMG}GCE___8_-removebg-preview.png`}
                alt="GreenChip Energy"
                style={{height:100,width:'auto',display:'block',marginTop:-19}}
              />
            </div>
            <p style={{color:'rgba(255,255,255,.65)',fontSize:13,lineHeight:1.9,marginBottom:22}}>
              Leading turnkey solar &amp; renewable energy solutions across India.
              Powering a cleaner tomorrow — EPC, Storage, Hybrid &amp; Grid solutions since 2017.
            </p>
            <div style={{display:'flex',gap:9,flexWrap:'wrap'}}>
              {[
                {
                  title:'Instagram',
                  url:'https://www.instagram.com/greenchipenergy?igsh=MXZkbTE5a280OGhxNQ%3D%3D&utm_source=qr',
                  icon:(
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                  )
                },
                {
                  title:'Facebook',
                  url:'https://www.facebook.com/share/18fBecZWgx/?mibextid=wwXIfr',
                  icon:(
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M14.1 9H16V6.4H14.1c-1.2 0-2 .8-2 2V9H10.5v2.6H12V18h2.6v-6.4h1.7L18 9h-1.4V7.4c0-.4.1-.6.6-.6h.8V4.1h-1.2c-2.4 0-3.4 1.4-3.4 3.4V9Z" fill="currentColor" />
                    </svg>
                  )
                }
              ].map(({icon,title,url})=>(
                <a key={title} className="foot-social" href={url} target="_blank" rel="noreferrer" title={title}
                  style={{width:38,height:38,borderRadius:'50%',background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',textDecoration:'none'}}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="foot-col-links">
            <div style={colHead}>Company</div>
            {[['about','About Us'],['values','Our Values'],['approach','Our Approach'],['ethics','Ethics'],['team','Team']].map(([p,l])=>(
              <span key={p} className="foot-link" onClick={()=>go(p)} style={link}>{l}</span>
            ))}
          </div>

          {/* Solutions */}
          <div className="foot-col-links">
            <div style={colHead}>Solutions</div>
            {[['rooftop','Rooftop Solar'],['solutions','Ground Mounted'],['solutions','Solar Park'],['solutions','Floating Solar'],['solutions','Hybrid Systems'],['solutions','Wind Turbine']].map(([p,l],i)=>(
              <span key={i} className="foot-link" onClick={()=>go(p)} style={link}>{l}</span>
            ))}
          </div>

          {/* Services */}
          <div className="foot-col-links">
            <div style={colHead}>Services</div>
            {[['epc','EPC Services'],['financing','Financing Models'],['assetmanagement','Asset Management'],['initiatives','New Initiatives'],['projects','Our Projects'],['calculator','Solar Calculator']].map(([p,l],i)=>(
              <span key={i} className="foot-link" onClick={()=>go(p)} style={link}>{l}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="foot-col-contact">
            <div style={colHead}>Talk To Us</div>
            {[[MapPin,'64, Nandagiri Hills Rear Rd, HUDA Enclave, Jubilee Hills, Hyderabad, Telangana 500033'],[Phone,'84648 84642'],[Phone,'9010434455'],[Mail,'info@greenchipenergy.com']].map(([Ic,val],i)=>(
              <div key={i} style={{display:'flex',gap:9,marginBottom:12,alignItems:'flex-start'}}>
                <Ic size={14} strokeWidth={2} color="#86efac" style={{flexShrink:0,marginTop:2}}/>
                <span style={{color:'rgba(255,255,255,.6)',fontSize:12.5,lineHeight:1.6}}>{val}</span>
              </div>
            ))}
            {/* Gallery thumbnails */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:5,marginTop:18}}>
              {[1,2,3,4,5,6].map(n=>(
                <img key={n} className="foot-thumb" src={`${IMG}gallery-${n}.jpg`} alt=""
                  style={{width:'100%',aspectRatio:'1',objectFit:'cover',borderRadius:8,border:'1px solid rgba(255,255,255,.12)',cursor:'pointer'}}
                />
              ))}
            </div>
          </div>

          {/* ── LEGAL COLUMN — desktop hidden, mobile shown via CSS ── */}
          <div className="footer-legal-col">
            <div style={colHead}>Legal</div>
            {[['terms','Terms & Conditions'],['privacy','Privacy Policy'],['warranty','Warranty Policy']].map(([p,l])=>(
              <span key={p} className="foot-link" onClick={()=>go(p)} style={link}>{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div style={{borderTop:'1px solid rgba(255,255,255,.1)',padding:'16px 8%'}}>
        <div style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          flexWrap:'wrap',
          gap:'10px 20px',
        }}>
          {/* Copyright */}
          <span style={{
            color:'rgba(255,255,255,.45)',
            fontSize:11.5,
            fontFamily:"'Inter',sans-serif",
            flexShrink:0,
          }}>
            © 2017 GreenChip Emerging Projects Private Limited. All Rights Reserved.
          </span>

          {/* Legal links — desktop only */}
          <div className="footer-legal-links" style={{
            display:'flex',
            alignItems:'center',
            flexWrap:'wrap',
            gap:'8px 0',
          }}>
            {[['Terms & Conditions','terms'],['Privacy Policy','privacy'],['Warranty Policy','warranty']].map(([label,key],i,arr)=>(
              <span key={key} style={{display:'flex',alignItems:'center'}}>
                <span
                  className="foot-legal"
                  onClick={()=>go(key)}
                  style={{
                    color:'rgba(255,255,255,.5)',
                    fontSize:12,
                    cursor:'pointer',
                    padding:'4px 0',
                    whiteSpace:'nowrap',
                  }}
                >
                  {label}
                </span>
                {i < arr.length-1 && (
                  <span style={{color:'rgba(255,255,255,.25)',margin:'0 10px',fontSize:10}}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE STYLES ─────────────────────────────── */}
      <style>{`
        /* Footer links: slide right + tint on hover, with a growing bullet */
        .foot-link{position:relative;padding-left:0;transition:color .25s ease,padding-left .25s cubic-bezier(.16,1,.3,1)}
        .foot-link::before{
          content:'';position:absolute;left:0;top:50%;width:0;height:1.5px;
          background:#86efac;transform:translateY(-50%);
          transition:width .25s cubic-bezier(.16,1,.3,1);
        }
        .foot-link:hover{color:#86efac;padding-left:15px}
        .foot-link:hover::before{width:9px}

        .foot-legal{transition:color .25s ease}
        .foot-legal:hover{color:#86efac}

        .foot-social{transition:background .3s ease,transform .3s cubic-bezier(.16,1,.3,1),border-color .3s ease}
        .foot-social:hover{background:#16a34a;border-color:#4ade80;transform:translateY(-3px)}

        .foot-thumb{transition:transform .35s cubic-bezier(.16,1,.3,1),border-color .3s ease,opacity .3s ease;opacity:.75}
        .foot-thumb:hover{transform:scale(1.08);border-color:#4ade80;opacity:1}

        /* Legal column: hidden on desktop (already in bottom bar), shown on mobile */
        .footer-legal-col { display: none; }

        /* Tablet: 2-column grid */
        @media(max-width:1024px){
          .footer-grid{grid-template-columns:1fr 1fr!important;gap:36px!important}
          .footer-legal-col{display:block!important}
          .footer-legal-links{display:none!important}
        }

        /* Mobile: keep two columns so the link lists don't stack into one
           very long strip. Brand and contact still span the full width. */
        @media(max-width:640px){
          footer > div:nth-of-type(2){padding:40px 6% 32px!important}

          .footer-grid{
            grid-template-columns:1fr 1fr!important;
            gap:26px 20px!important;
            align-items:start;
          }

          /* Explicit order so the pairs read Company|Solutions, Services|Legal */
          .foot-col-brand{grid-column:1 / -1;order:1}
          .foot-col-links:nth-of-type(2){order:2}
          .foot-col-links:nth-of-type(3){order:3}
          .foot-col-links:nth-of-type(4){order:4}
          .footer-legal-col{order:5}
          .foot-col-contact{grid-column:1 / -1;order:6}

          /* Tighter link rhythm at small sizes */
          .footer-grid .foot-link{font-size:12.5px!important;margin-bottom:11px!important}
          .footer-grid .foot-link:hover{padding-left:12px}

          /* Smaller brand block */
          .foot-col-brand img{height:78px!important;margin-top:-14px!important}
          .foot-col-brand p{font-size:12.5px!important;margin-bottom:18px!important}

          .footer-legal-links{display:none!important}
        }

        /* Very small screens: single column is genuinely easier to scan */
        @media(max-width:380px){
          .footer-grid{grid-template-columns:1fr!important}
          .foot-col-brand,.foot-col-contact{grid-column:1 / -1}
        }

        /* Bottom bar stacks and centres on mobile */
        @media(max-width:640px){
          footer > div:last-of-type{padding:16px 6%!important}
          footer > div:last-of-type > div{
            flex-direction:column!important;
            align-items:center!important;
            text-align:center!important;
            gap:10px!important;
          }
        }
      `}</style>
    </footer>
  )
}