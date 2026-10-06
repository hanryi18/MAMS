"use client";
import {useState,type CSSProperties} from "react";
const paths=["M180 80 C245 80 230 230 295 230","M180 230 L295 230","M180 380 C245 380 230 230 295 230","M365 92 L365 174","M365 348 L365 286","M445 230 L485 230"];
export function LoginAnimation(){
 const [paused,setPaused]=useState(false);
 return <aside className={`purple-panel mams-login-visual ${paused?"is-paused":""}`} aria-label="Alur pembayaran merchant melalui MAMS">
  <div className="login-ambient" aria-hidden="true"><div className="login-ambient-grid"/>{Array.from({length:12},(_,i)=><i key={i} style={{"--i":i,left:`${8+(i*19)%86}%`,top:`${12+(i*29)%75}%`} as CSSProperties}/>)}</div>
  <div className="login-visual-copy"><span className="login-visual-eyebrow">MERCHANT ACQUIRING MANAGEMENT SYSTEM</span><h2>Merchant terhubung.<br/>Pembayaran terkelola.</h2><p>Satu tempat untuk mengelola merchant, perangkat, dan pembayaran.</p></div>
  <div className="login-flow-stage" aria-hidden="true"><div className="login-flow-canvas">
   <div className="login-flow-orbit orbit-outer"/><div className="login-flow-orbit orbit-inner"/>
   <svg className="login-flow-lines" viewBox="0 0 600 460" fill="none"><defs><linearGradient id="login-transaction-glow" x1="180" y1="0" x2="485" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#ffffff" stopOpacity=".15"/><stop offset=".55" stopColor="#c3baff"/><stop offset="1" stopColor="#a9ffcf"/></linearGradient></defs><g stroke="white" strokeOpacity=".18" strokeWidth="1.5">{paths.map(p=><path key={p} d={p}/>)}</g><g stroke="url(#login-transaction-glow)" strokeWidth="1.5" strokeDasharray="5 18" className="login-flow-current">{paths.map(p=><path key={p} d={p}/>)}</g>{paths.flatMap((p,i)=>[0,1].map(copy=><circle key={`${i}-${copy}`} r={copy?2.5:4} fill={i>2?"#baffd3":"#ffffff"} className="login-flow-packet" style={{offsetPath:`path("${p}")`,animationDelay:`${i*.55-copy*3.2-2}s`}}/>))}</svg>
   {[{title:"EDC",subtitle:"Transaksi merchant",icon:"imgCreditCardPlus",position:"top"},{title:"QRIS",subtitle:"Pembayaran digital",icon:"imgCoinsSwap02",position:"middle"},{title:"Merchant",subtitle:"Bisnis terhubung",icon:"imgBank",position:"bottom"}].map(n=><div className={`login-flow-source source-${n.position}`} key={n.title}><span><img src={`/assets/dashboard/${n.icon}.svg`} width={24} height={24} alt=""/></span><div><strong>{n.title}</strong><small>{n.subtitle}</small></div><i className="login-node-status"/></div>)}
   <div className="login-flow-satellite satellite-top"><span><img src="/assets/dashboard/imgShield02.svg" width={24} height={24} alt=""/></span><div><strong>Merchant aktif</strong><small>Siap bertransaksi</small></div></div>
   <div className="login-flow-satellite satellite-bottom"><span><img src="/assets/dashboard/imgLaptop02.svg" width={24} height={24} alt=""/></span><div><strong>Device terhubung</strong><small>Operasional terpantau</small></div></div>
   <div className="login-flow-hub"><div className="login-hub-sheen"/><img src="/assets/logo.png" width={101} height={36} alt=""/><span>Terhubung dalam satu sistem</span><div className="login-flow-hub-status"><i/>Mengelola pembayaran</div><div className="login-hub-equalizer">{Array.from({length:7},(_,i)=><i key={i} style={{animationDelay:`${i*.16}s`}}/>)}</div></div>
   <div className="login-flow-success"><span><img src="/assets/registration/step-check.svg" width={20} height={20} alt=""/></span><strong>Berhasil</strong><small>Transaksi diproses</small><div className="login-success-burst">{Array.from({length:8},(_,i)=><i key={i} style={{"--angle":`${i*45}deg`} as CSSProperties}/>)}</div></div>
  </div></div>
  <div className="login-activity-window" aria-hidden="true"><div className="login-activity-track">{["Transaksi QRIS berhasil","Merchant siap bertransaksi","Perangkat terhubung","Transaksi QRIS berhasil"].map((text,i)=><div key={i}><i/><span>{text}</span><small>MAMS</small></div>)}</div></div>
  <div className="login-visual-bottom"><span>Dirancang untuk setiap langkah merchant.</span><button type="button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?"Putar animasi":"Jeda animasi"}</button></div>
 </aside>
}
