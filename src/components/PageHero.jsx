export default function PageHero({title,subtitle,img,breadcrumb}){
  return(
    <div style={{position:'relative',minHeight:440,overflow:'hidden',marginTop:66,display:'flex',alignItems:'center'}}>
      {/* BG image with a slow ken-burns drift */}
      <img className="ph-img" src={img} alt={title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>

      {/* Dark gradient overlay — strong enough so text is always readable */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(105deg,rgba(8,34,14,.93) 0%,rgba(10,40,15,.78) 45%,rgba(10,40,15,.5) 100%)'}}/>
      {/* Green glow accent */}
      <div style={{position:'absolute',top:'-30%',right:'-10%',width:520,height:520,borderRadius:'50%',background:'radial-gradient(circle,rgba(74,222,128,.22),transparent 68%)',pointerEvents:'none'}}/>
      {/* Subtle dot pattern */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,.08) 1px,transparent 0)',backgroundSize:'28px 28px'}}/>
      {/* Soft fade into the page below */}
      <div style={{position:'absolute',left:0,right:0,bottom:0,height:90,background:'linear-gradient(to top,rgba(248,253,249,.9),transparent)',pointerEvents:'none'}}/>

      {/* Content */}
      <div style={{position:'relative',zIndex:2,width:'100%',padding:'72px 8%'}}>
        {/* Breadcrumb pill */}
        <div className="ph-rise" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 16px',background:'rgba(255,255,255,.14)',border:'1px solid rgba(255,255,255,.28)',borderRadius:100,color:'#fff',fontSize:11,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:'2px',textTransform:'uppercase',fontWeight:600,marginBottom:20,width:'fit-content',backdropFilter:'blur(8px)'}}>
          <span style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',display:'inline-block',boxShadow:'0 0 8px 2px rgba(74,222,128,.7)',animation:'dotBlink 2s infinite'}}/>
          {breadcrumb||'GreenChip Energy'}
        </div>

        {/* Heading */}
        <h1 className="ph-rise ph-d1" style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(2rem,5.5vw,3.8rem)',color:'#fff',lineHeight:1.06,letterSpacing:'-.015em',marginBottom:subtitle?16:0,maxWidth:760,textShadow:'0 2px 22px rgba(0,0,0,.35)'}}>
          {title}
        </h1>

        {subtitle&&(
          <p className="ph-rise ph-d2" style={{color:'rgba(255,255,255,.88)',fontSize:16.5,maxWidth:560,lineHeight:1.8}}>
            {subtitle}
          </p>
        )}

        {/* Green accent line */}
        <div className="ph-line" style={{width:64,height:3,background:'linear-gradient(90deg,#4ade80,rgba(74,222,128,0))',borderRadius:2,marginTop:24}}/>
      </div>

      <style>{`
        @keyframes dotBlink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes phRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes phLine{from{width:0;opacity:0}to{width:64px;opacity:1}}
        @keyframes phZoom{from{transform:scale(1.12)}to{transform:scale(1)}}
        .ph-img{animation:phZoom 1.6s cubic-bezier(.16,1,.3,1) both}
        .ph-rise{animation:phRise .7s cubic-bezier(.16,1,.3,1) both}
        .ph-d1{animation-delay:.1s}
        .ph-d2{animation-delay:.2s}
        .ph-line{animation:phLine .8s cubic-bezier(.16,1,.3,1) .34s both}
        @media(max-width:900px){
          .ph-img{animation:none}
        }
      `}</style>
    </div>
  )
}
