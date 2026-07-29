import {useState} from 'react'
import {IMG, SOLUTIONS} from '../data/content.js'
import {X, Check, Loader2, Send} from 'lucide-react'

// PHP Backend endpoint (works on Hostinger/shared hosting)
const API_URL = '/api/send-lead.php'

export default function LeadForm({visible,setVisible}){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [location,setLocation]=useState('')
  const [ebBill,setEbBill]=useState('')
  const [customerType,setCustomerType]=useState('Residential')
  const [installationType,setInstallationType]=useState('New Installation')
  const [solution,setSolution]=useState(SOLUTIONS?.[0]?.id||'')
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)
  const [sent,setSent]=useState(false)
  const [error,setError]=useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    
    // Validation
    if(!name||!email) return alert('Please enter name and email')
    if(!solution) return alert('Please select a solution')
    
    setLoading(true)
    try{
      const solutionTitle = SOLUTIONS.find(s=>s.id===solution)?.title || solution
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name,
          email,
          phone: phone || '',
          location: location || '',
          eb_bill: ebBill || '',
          customer_type: customerType,
          installation_type: installationType,
          solution: solutionTitle,
          message: message || '',
        })
      })

      const data = await response.json()
      
      if(!response.ok){
        throw new Error(data.error || 'Failed to send')
      }

      setSent(true)
      setName('')
      setEmail('')
      setPhone('')
      setLocation('')
      setEbBill('')
      setMessage('')
      
      setTimeout(()=>{
        setVisible(false)
        setSent(false)
      },2000)
    }catch(err){
      console.error('Error:', err)
      setError(`Failed to send: ${err.message}`)
    }finally{
      setLoading(false)
    }
  }

  if(!visible) return null

  return(
    <div className="lf-pop" style={{position:'fixed',right:18,bottom:18,zIndex:2000}}>
      <div style={{width:520,maxWidth:'96vw',boxShadow:'0 28px 60px -18px rgba(2,6,23,.4)',borderRadius:'var(--r-xl)',overflow:'hidden',background:'#fff',border:'1px solid #e5e7eb'}}>
        <div style={{display:'flex',alignItems:'center',gap:12,padding:'16px 18px',borderBottom:'1px solid #eef2f7',background:'linear-gradient(135deg,#f0fdf4,#fff)'}}>
          <img src={`${IMG}GCE_Logo_page-0001.jpg`} alt="logo" style={{height:36}}/>
          <div>
            <div style={{fontWeight:700,color:'#14532d'}}>Request a Quote</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Leave your details — we'll reach out soon</div>
          </div>
          <button className="lf-close" onClick={()=>setVisible(false)} aria-label="Close" style={{marginLeft:'auto',background:'#fff',border:'1px solid #e5e7eb',borderRadius:'50%',width:32,height:32,cursor:'pointer',color:'#6b7280',display:'flex',alignItems:'center',justifyContent:'center'}}><X size={16} strokeWidth={2}/></button>
        </div>
        <form onSubmit={handleSubmit} style={{padding:16,display:'grid',gap:10}}>
          {error && <div style={{padding:10,background:'#fee2e2',border:'1px solid #fca5a5',borderRadius:6,color:'#7f1d1d',fontSize:13}}>{error}</div>}
          {sent && <div style={{padding:10,background:'#dcfce7',border:'1px solid #86efac',borderRadius:6,color:'#166534',fontSize:13,display:'flex',alignItems:'center',gap:7}}><Check size={15} strokeWidth={2.5}/>Sent successfully! We'll contact you soon.</div>}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="input" style={{padding:12}} required/>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="input" style={{padding:12}} required/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (optional)" className="input" style={{padding:12}}/>
            <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location (city, state)" className="input" style={{padding:12}}/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={ebBill} onChange={e=>setEbBill(e.target.value)} placeholder="Monthly EB Bill (₹)" className="input" style={{padding:12}}/>
            <select value={customerType} onChange={e=>setCustomerType(e.target.value)} className="input" style={{padding:12}}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <select value={installationType} onChange={e=>setInstallationType(e.target.value)} className="input" style={{padding:12}}>
              <option>New Installation</option>
              <option>Existing Solar</option>
            </select>
            <select value={solution} onChange={e=>setSolution(e.target.value)} className="input" style={{padding:12}} required>
              <option value="">Select a solution</option>
              {SOLUTIONS.map(s=> <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message / project details" rows={3} className="input" style={{padding:12,fontFamily:'inherit',resize:'vertical'}}/>
          <button type="submit" disabled={loading||sent} className="btn-primary" style={{padding:'12px 16px',borderRadius:8,background:sent?'#16a34a':undefined,opacity:loading||sent?0.7:1,cursor:loading||sent?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8}}>
            {loading? <><Loader2 size={16} strokeWidth={2} className="spin"/>Sending...</> : (sent? <><Check size={16} strokeWidth={2.5}/>Sent</> : <><Send size={15} strokeWidth={2}/>Send Request</>)}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes lfIn{from{opacity:0;transform:translateY(18px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        .lf-pop{animation:lfIn .35s cubic-bezier(.16,1,.3,1) both}
        .lf-close{transition:background .25s ease,color .25s ease,transform .25s cubic-bezier(.16,1,.3,1)}
        .lf-close:hover{background:#f0fdf4;color:#16a34a;transform:rotate(90deg)}
      `}</style>
    </div>
  )
}
