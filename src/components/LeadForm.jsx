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
    <div style={{position:'fixed',right:18,bottom:18,zIndex:2000}}>
      <div style={{width:520,maxWidth:'96vw',boxShadow:'0 12px 40px rgba(2,6,23,.2)',borderRadius:12,overflow:'hidden',background:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:12,padding:14,borderBottom:'1px solid #eef2f7'}}>
          <img src={`${IMG}GCE_Logo_page-0001.jpg`} alt="logo" style={{height:36}}/>
          <div>
            <div style={{fontWeight:700,color:'#14532d'}}>Request a Quote</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Leave your details — we'll reach out soon</div>
          </div>
          <button onClick={()=>setVisible(false)} style={{marginLeft:'auto',background:'none',border:'none',cursor:'pointer',color:'#6b7280',display:'flex'}}><X size={18} strokeWidth={2}/></button>
        </div>
        <form onSubmit={handleSubmit} style={{padding:16,display:'grid',gap:10}}>
          {error && <div style={{padding:10,background:'#fee2e2',border:'1px solid #fca5a5',borderRadius:6,color:'#7f1d1d',fontSize:13}}>{error}</div>}
          {sent && <div style={{padding:10,background:'#dcfce7',border:'1px solid #86efac',borderRadius:6,color:'#166534',fontSize:13,display:'flex',alignItems:'center',gap:7}}><Check size={15} strokeWidth={2.5}/>Sent successfully! We'll contact you soon.</div>}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}} required/>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}} required/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone (optional)" style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}}/>
            <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location (city, state)" style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}}/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <input value={ebBill} onChange={e=>setEbBill(e.target.value)} placeholder="Monthly EB Bill (₹)" style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}}/>
            <select value={customerType} onChange={e=>setCustomerType(e.target.value)} style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <select value={installationType} onChange={e=>setInstallationType(e.target.value)} style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}}>
              <option>New Installation</option>
              <option>Existing Solar</option>
            </select>
            <select value={solution} onChange={e=>setSolution(e.target.value)} style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef'}} required>
              <option value="">Select a solution</option>
              {SOLUTIONS.map(s=> <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message / project details" rows={3} style={{padding:12,borderRadius:8,border:'1px solid #e6e9ef',fontFamily:'inherit',resize:'vertical'}}/>
          <button type="submit" disabled={loading||sent} className="btn-primary" style={{padding:'12px 16px',borderRadius:8,background:sent?'#16a34a':undefined,opacity:loading||sent?0.7:1,cursor:loading||sent?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8}}>
            {loading? <><Loader2 size={16} strokeWidth={2} className="spin"/>Sending...</> : (sent? <><Check size={16} strokeWidth={2.5}/>Sent</> : <><Send size={15} strokeWidth={2}/>Send Request</>)}
          </button>
        </form>
      </div>
    </div>
  )
}
