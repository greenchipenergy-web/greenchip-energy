import{useState,useEffect}from'react'
import'./index.css'
import Navbar from'./components/Navbar.jsx'
import Footer from'./components/Footer.jsx'
import Home from'./pages/Home.jsx'
import LeadForm from'./components/LeadForm.jsx'
import{About,Values,Approach,Ethics,Team}from'./pages/About.jsx'
import{Solutions,SolutionDetail}from'./pages/Solutions.jsx'
import{Services,EPC}from'./pages/Services.jsx'
import FinancingPage from'./pages/FinancingPage.jsx'
import AssetManagementPage from'./pages/AssetManagementPage.jsx'
import { Initiatives, HydrogenPage, CBGPage, Projects, Calculator, Careers, Contact } from './pages/Other.jsx'
import{SOLUTIONS}from'./data/content.js'
import{Send,Sun}from'lucide-react'

/* ── Floating solar button ──────────────────── */
function FloatBtn(){
  const[show,setShow]=useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{const t=setTimeout(()=>setShow(true),1200);return()=>clearTimeout(t)},[])
  useEffect(()=>{
    const m = () => setIsMobile(window.innerWidth <= 900)
    m()
    window.addEventListener('resize', m)
    return ()=>window.removeEventListener('resize', m)
  },[])
  const waNumber = '918464884642' // international format: country code + number (replace if needed)
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello GreenChip, I have a query about your services")}`
  return (
    <div style={{position:'fixed',bottom:isMobile?86:65,right:isMobile?14:50,zIndex:9000,opacity:show?1:0,transition:'opacity .45s',display:'flex',flexDirection:isMobile?'column':'row',alignItems:'center',gap:isMobile?8:0}}>
      <a href={waUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        style={{width:56,height:56,borderRadius:'50%',border:'none',background:'linear-gradient(135deg,#25D366,#128C7E)',color:'#fff',fontSize:26,cursor:'pointer',boxShadow:'0 6px 22px rgba(18,140,126,.28)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.52 3.48A11.73 11.73 0 0012.04.5C6.06.5 1.17 5.4 1.17 11.38c0 2 0.53 3.92 1.54 5.63L.5 23.5l6.69-2.07a11.78 11.78 0 005.85 1.5c6 0 10.9-4.9 10.9-10.88 0-2.92-1.14-5.62-3.46-7.58z" fill="#fff" opacity="0.06"/>
          <path d="M17.59 14.26c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.2 5.07 4.49 2.98 1.28 3.22 1.07 3.81 1.01.59-.06 1.92-.78 2.19-1.53.27-.75.27-1.39.19-1.53-.08-.14-.27-.2-.57-.34z" fill="#fff"/>
        </svg>
      </a>
      {isMobile ? (
        <div style={{background:'#14532d',borderRadius:999,padding:'8px 12px',color:'#fff',fontSize:13,fontFamily:"'Space Grotesk',sans-serif",letterSpacing:.6,whiteSpace:'nowrap',boxShadow:'0 4px 12px rgba(20,83,45,.3)',transform:'translateY(2px)',textAlign:'center'}}>Chat on WhatsApp</div>
      ) : null}
    </div>
  )
}

/* ── Page router ─────────────────────────────── */
function PageView({page,setPage}){
  // Check if it's a solution detail page (sol_rooftop, sol_ground, etc.)
  if(page.startsWith('sol_')){
    const id=page.replace('sol_','')
    return <SolutionDetail id={id} setPage={setPage}/>
  }

  const map={
    home:        <Home        setPage={setPage}/>,
    financing:   <FinancingPage setPage={setPage}/>,
    assetmanagement: <AssetManagementPage setPage={setPage} />,
    about:       <About       setPage={setPage}/>,
    values:      <Values/>,
    approach:    <Approach/>,
    ethics:      <Ethics/>,
    team:        <Team/>,
    solutions:   <Solutions   setPage={setPage}/>,
    rooftop:     <SolutionDetail id="rooftop" setPage={setPage}/>,
    services:    <Services    setPage={setPage}/>,
    epc:         <EPC/>,
    projects:    <Projects/>,
    calculator:  <Calculator/>,
    careers:     <Careers/>,
    contact:     <Contact setPage={setPage}/>,
    initiatives:  <Initiatives    setPage={setPage} />,
    ni_hydrogen:  <HydrogenPage  setPage={setPage} />,   
    ni_cbg:       <CBGPage       setPage={setPage} />,   
  }
  return map[page]||<Home setPage={setPage}/>
}

export default function App(){
  const[page,setPage]=useState('home')
  const [leadVisible,setLeadVisible] = useState(false)
  useEffect(()=>{window.scrollTo(0,0)},[page])

  return(
    <>
      <Navbar page={page} setPage={setPage}/>
      <main style={{paddingTop:0}}>
        <PageView page={page} setPage={setPage}/>
      </main>
      <Footer setPage={setPage}/>
      <FloatBtn />
      {/* Global Get Quote floating button (desktop) */}
      <div className="global-quote" style={{position:'fixed',right:18,bottom:18,zIndex:1500}}>
        <button onClick={()=>setLeadVisible(true)} style={{display:'inline-flex',alignItems:'center',gap:8,background:'linear-gradient(135deg,#16a34a,#14532d)',color:'#fff',border:'none',padding:'12px 16px',borderRadius:12,boxShadow:'0 8px 30px rgba(16,56,20,.22)',cursor:'pointer',fontWeight:700}}><Send size={15} strokeWidth={2}/>Get a Quote</button>
      </div>
      {/* Global mobile CTA (shows on small screens) */}
      <div className="global-mobile-cta">
        <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center',padding:'10px 14px',maxWidth:900,margin:'0 auto'}}>
          <button onClick={()=>setPage('calculator')} style={{flex:1,display:'inline-flex',alignItems:'center',justifyContent:'center',gap:7,padding:12,borderRadius:10,border:'1px solid #e5e7eb',background:'#fff',fontWeight:700}}><Sun size={15} strokeWidth={2}/>Calculate</button>
          <button onClick={()=>setLeadVisible(true)} style={{flex:1,display:'inline-flex',alignItems:'center',justifyContent:'center',gap:7,padding:12,borderRadius:10,border:'none',background:'linear-gradient(135deg,#16a34a,#14532d)',color:'#fff',fontWeight:700}}><Send size={15} strokeWidth={2}/>Get Quote</button>
        </div>
      </div>
      <LeadForm visible={leadVisible} setVisible={setLeadVisible} />
    </>
  )
}
