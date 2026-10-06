"use client";
import {useId,useState} from "react";
import {Area,AreaChart,CartesianGrid,ResponsiveContainer,Tooltip as ChartTooltip,XAxis,YAxis,PieChart,Pie,Cell} from "recharts";

const points=[
  {time:"5 Mei · 08:00",qris:14,va:2,card:2},
  {time:"5 Mei · 12:00",qris:16,va:7,card:3},
  {time:"5 Mei · 16:00",qris:12,va:8,card:2},
  {time:"6 Mei · 08:00",qris:20,va:10,card:5},
  {time:"6 Mei · 12:00",qris:18,va:7,card:3},
  {time:"6 Mei · 16:00",qris:24,va:9,card:9},
  {time:"6 Mei · 20:00",qris:16,va:7,card:6},
];
const channels=[{key:"qris",name:"QRIS",value:120,color:"#4b42ff"},{key:"va",name:"Virtual Account",value:50,color:"#a865ff"},{key:"card",name:"Card Payment",value:30,color:"#f0521d"}];
const money=(v:number)=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(v*1000000);

export function TransactionChart(){
  const id=useId().replace(/:/g,"");
  const [day,setDay]=useState("all"),[visible,setVisible]=useState<string[]>(channels.map(c=>c.key));
  const data=points.filter(p=>day==="all"||p.time.startsWith(day));
  const total=data.reduce((sum,p)=>sum+visible.reduce((n,key)=>n+p[key as "qris"|"va"|"card"],0),0);
  return <section className="dash-card mams-trend-card" aria-labelledby="mams-trend-heading">
    <div className="mams-chart-heading"><div><span className="mams-eyebrow">PAYMENT ANALYTICS</span><h2 id="mams-trend-heading">Tren Transaksi</h2></div><label className="mams-chart-period"><span className="sr-only">Tanggal grafik transaksi</span><select value={day} onChange={e=>setDay(e.target.value)}><option value="all">5–6 Mei 2026</option><option value="5 Mei">5 Mei 2026</option><option value="6 Mei">6 Mei 2026</option></select></label></div>
    <div className="mams-chart-total"><strong>{money(total)}</strong><span>Volume channel yang ditampilkan</span></div>
    <div className="mams-area-plot" role="img" aria-label={`Grafik volume transaksi contoh. ${data.map(p=>`${p.time}: ${money(visible.reduce((sum,key)=>sum+p[key as "qris"|"va"|"card"],0))}`).join('; ')}`}>
      <ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{top:12,right:10,bottom:0,left:0}}>
        <defs>{channels.map(c=><linearGradient key={c.key} id={`${id}-${c.key}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c.color} stopOpacity={.24}/><stop offset="100%" stopColor={c.color} stopOpacity={.01}/></linearGradient>)}</defs>
        <CartesianGrid vertical={false} stroke="#eceef1" strokeDasharray="3 5"/>
        <XAxis dataKey="time" tick={{fontSize:12,fill:"#777e92"}} tickLine={false} axisLine={false} minTickGap={28} tickFormatter={v=>String(v).replace(" · "," ")}/>
        <YAxis width={42} tick={{fontSize:12,fill:"#777e92"}} tickLine={false} axisLine={false} tickFormatter={v=>`${v} jt`}/>
        <ChartTooltip formatter={(value,name)=>[money(Number(value)),String(name)]} contentStyle={{border:"1px solid #dddfe2",borderRadius:12,fontFamily:"Open Sans",fontSize:13,boxShadow:"0 0 8px -2px #0000001a"}}/>
        {channels.filter(c=>visible.includes(c.key)).map(c=><Area key={c.key} dataKey={c.key} name={c.name} type="monotone" stroke={c.color} strokeWidth={2.5} fill={`url(#${id}-${c.key})`} activeDot={{r:5,stroke:"#fff",strokeWidth:3}} isAnimationActive={false}/>)}
      </AreaChart></ResponsiveContainer>
    </div>
    <div className="mams-chart-legend">{channels.map(c=><button key={c.key} aria-pressed={visible.includes(c.key)} onClick={()=>setVisible(v=>v.includes(c.key)?v.length>1?v.filter(k=>k!==c.key):v:[...v,c.key])}><i style={{background:c.color}}/>{c.name}</button>)}</div>
    <p className="mams-chart-footnote">Data grafik contoh · Klik channel untuk membandingkan volume.</p>
  </section>;
}

export function ChannelChart(){const [active,setActive]=useState<string|null>(null);const selected=channels.find(c=>c.key===active);return <section className="dash-card mams-channel-card" aria-labelledby="mams-channel-heading"><div className="mams-chart-heading"><div><span className="mams-eyebrow">CHANNEL MIX</span><h2 id="mams-channel-heading">Distribusi Channel</h2></div></div><div className="mams-donut-plot" role="img" aria-label="Distribusi contoh: QRIS 60 persen, Virtual Account 25 persen, Card Payment 15 persen"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={channels} dataKey="value" nameKey="name" innerRadius="72%" outerRadius="93%" paddingAngle={4} cornerRadius={5} isAnimationActive={false} onMouseEnter={(_,i)=>setActive(channels[i].key)} onMouseLeave={()=>setActive(null)}>{channels.map(c=><Cell key={c.key} fill={c.color} stroke="none" opacity={!active||active===c.key?1:.35}/>)}</Pie></PieChart></ResponsiveContainer><div className="mams-donut-center"><strong>{selected?`${selected.value/2}%`:"Rp 200 jt"}</strong><span>{selected?.name??"Total volume"}</span></div></div><div className="mams-channel-breakdown">{channels.map(c=><button key={c.key} onMouseEnter={()=>setActive(c.key)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(c.key)} onBlur={()=>setActive(null)} onClick={()=>setActive(c.key)}><i style={{background:c.color}}/><span>{c.name}<small>{money(c.value)}</small></span><strong>{c.value/2}%</strong></button>)}</div><p className="mams-chart-footnote">Data contoh · Snapshot 5–6 Mei 2026</p></section>}
