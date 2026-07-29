export default function PageHero({title,subtitle,img,breadcrumb}){
  return(
    <div style={{position:'relative',height:420,overflow:'hidden',marginTop:66}}>
      {/* BG image */}
      <img src={img} alt={title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
      {/* Dark gradient overlay — strong enough so text is always readable */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,40,15,.88) 0%,rgba(10,40,15,.70) 50%,rgba(10,40,15,.55) 100%)'}}/>
      {/* Subtle dot pattern */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px,rgba(255,255,255,.08) 1px,transparent 0)',backgroundSize:'28px 28px'}}/>

      {/* Content — sits above overlays via z-index */}
      <div style={{position:'absolute',inset:0,zIndex:2,display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 8%'}}>
        {/* Breadcrumb pill */}
        <div style={{display:'inline-flex',alignItems:'center',gap:7,padding:'4px 14px',background:'rgba(255,255,255,.15)',border:'1px solid rgba(255,255,255,.28)',borderRadius:100,color:'#fff',fontSize:11,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:'2px',textTransform:'uppercase',fontWeight:600,marginBottom:18,width:'fit-content',backdropFilter:'blur(8px)'}}>
          <span style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',display:'inline-block',animation:'dotBlink 2s infinite'}}/>
          {breadcrumb||'GreenChip Energy'}
        </div>

        {/* Heading */}
        <h1 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'clamp(2rem,5.5vw,3.8rem)',color:'#fff',lineHeight:1.08,marginBottom:subtitle?14:0,maxWidth:700,textShadow:'0 2px 16px rgba(0,0,0,.3)'}}>
          {title}
        </h1>

        {subtitle&&(
          <p style={{color:'rgba(255,255,255,.85)',fontSize:16,maxWidth:540,lineHeight:1.75,marginTop:4}}>
            {subtitle}
          </p>
        )}

        {/* Green accent line */}
        <div style={{width:52,height:3,background:'linear-gradient(90deg,#4ade80,rgba(74,222,128,0))',borderRadius:2,marginTop:20}}/>
      </div>

      <style>{`@keyframes dotBlink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  )
}
