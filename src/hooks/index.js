import{useState,useEffect,useRef}from'react'
export function useReveal(t=.12){
  const ref=useRef(null);const[vis,set]=useState(false)
  useEffect(()=>{
    const el=ref.current;if(!el)return
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);o.disconnect()}},{threshold:t})
    o.observe(el);return()=>o.disconnect()
  },[t])
  return[ref,vis]
}
export function useCounter(target,dur=1800,active=false){
  const[n,set]=useState(0)
  useEffect(()=>{
    if(!active)return;let c=0;const s=target/(dur/16)
    const i=setInterval(()=>{c+=s;if(c>=target){set(target);clearInterval(i)}else set(Math.floor(c))},16)
    return()=>clearInterval(i)
  },[active,target,dur])
  return n
}
export function useScrolled(offset=60){
  const[s,set]=useState(false)
  useEffect(()=>{
    const fn=()=>set(window.scrollY>offset)
    window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn)
  },[offset])
  return s
}
