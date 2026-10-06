"use client";
import {useEffect,useRef,useState} from "react";

export function LoginVideo(){
  const video=useRef<HTMLVideoElement>(null);
  const [enabled,setEnabled]=useState(false),[loaded,setLoaded]=useState(false),[paused,setPaused]=useState(false),[visible,setVisible]=useState(true);
  useEffect(()=>{
    const preference=window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 640px)");
    const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
    let timer:ReturnType<typeof setTimeout>;
    const update=()=>{clearTimeout(timer);if(preference.matches||connection?.saveData){setEnabled(false);setLoaded(false)}else timer=setTimeout(()=>setEnabled(true),300)};
    update();preference.addEventListener("change",update);
    return()=>{clearTimeout(timer);preference.removeEventListener("change",update)};
  },[]);
  useEffect(()=>{const node=video.current?.closest("#mams-login-hero");if(!node)return;const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:0});observer.observe(node);return()=>observer.disconnect()},[enabled]);
  useEffect(()=>{if(!enabled)return;const node=video.current;if(!node)return;const sync=()=>{if(document.hidden||paused||!visible)node.pause();else node.play().catch(()=>{})};sync();document.addEventListener("visibilitychange",sync);return()=>document.removeEventListener("visibilitychange",sync)},[enabled,paused,visible]);
  return <><div className="mams-login-background" aria-hidden="true"><img src="/assets/login/poster.jpg" alt="" className="mams-login-poster"/>{enabled&&<video ref={video} className={loaded?"is-ready":""} autoPlay muted loop playsInline preload="none" poster="/assets/login/poster.jpg" onPlaying={()=>setLoaded(true)} onError={()=>{setEnabled(false);setLoaded(false)}}><source src="/assets/login/background.mp4" type="video/mp4"/></video>}<div className="mams-login-shade"/></div>{enabled&&loaded&&<button type="button" className="mams-video-control" onClick={()=>setPaused(p=>!p)} aria-pressed={paused}>{paused?"Putar video":"Jeda video"}</button>}</>;
}
