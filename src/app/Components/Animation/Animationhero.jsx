import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Design constants (canvas is always 600×500 internally) ─── */
const BASE_W = 600, BASE_H = 500, CX = 300, CY = 250;

const SATELLITES = [
  { id: "seo",      label: "SEO",          icon: "🔍", angle: 270, dist: 148 },
  { id: "social",   label: "Social\nMedia", icon: "📲", angle: 330, dist: 148 },
  { id: "ppc",      label: "PPC\nAds",      icon: "💰", angle: 30,  dist: 148 },
  { id: "content",  label: "Content\nMktg", icon: "✍️", angle: 90,  dist: 148 },
  { id: "analytics",label: "Analytics",    icon: "📊", angle: 150, dist: 148 },
  { id: "webdev",   label: "Web Dev",      icon: "💻", angle: 210, dist: 148 },
];

const KPI_CARDS = [
  { id:"leads",   title:"Monthly Leads",  val:"2,847",  sub:"▲ 23.4% vs last month", pos:{top:18,left:16},         width:130, spark:true },
  { id:"traffic", title:"Traffic Growth", val:"+41.2%", sub:null,                    pos:{top:18,right:12},        width:142, bars:true  },
  { id:"roas",    title:"ROAS",           val:"4.8×",   sub:"▲ Live",                pos:{top:10,left:"50%"},      width:108, chip:true  },
  { id:"conv",    title:"Conv. Rate",     val:null,     sub:null,                    pos:{bottom:22,left:12},      width:126, donut:true },
  { id:"rev",     title:"Revenue",        val:"94.2K", sub:"▲ 31.7% YoY",          pos:{bottom:22,right:12},     width:140, area:true  },
  { id:"users",   title:"Active Users",   val:"12,490", sub:null,                   pos:{bottom:16,left:"50%"},   width:126, pulse:true },
  { id:"ctr",     title:"CTR",            val:"3.92%",  sub:"Benchmark 2.1%",       pos:{top:"50%",right:10},     width:98,  progress:78},
  { id:"impr",    title:"Impressions",    val:"1.4M",   sub:null,                   pos:{top:"50%",left:10},      width:102, miniBars:true},
];

const BAR_HEIGHTS  = [35, 44, 34, 50, 42, 58];
const MINI_HEIGHTS = [50, 70, 55, 90, 100];

function toRad(d) { return d * Math.PI / 180; }
function satPos(angle, dist) {
  return { x: CX + dist * Math.cos(toRad(angle)), y: CY + dist * Math.sin(toRad(angle)) };
}

/* ─── Sub-components ─────────────────────────────────────────── */
function SparkLine() {
  return (
    <svg viewBox="0 0 100 30" width="100" height="30" style={{display:"block",marginTop:6,overflow:"visible"}}>
      <polyline points="0,25 15,20 30,14 45,17 60,10 75,6 90,2 100,4"
        fill="none" stroke="#3CBA99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon  points="0,25 15,20 30,14 45,17 60,10 75,6 90,2 100,4 100,30 0,30"
        fill="rgba(60,186,153,.1)" stroke="none"/>
    </svg>
  );
}

function AreaLine() {
  return (
    <svg viewBox="0 0 110 36" width="110" height="36" style={{display:"block",marginTop:6,overflow:"visible"}}>
      <defs>
        <linearGradient id="mda-lg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#3CBA99" stopOpacity=".25"/>
          <stop offset="100%" stopColor="#3CBA99" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0,30 C18,25 35,20 50,14 C65,8 80,5 95,2 L110,1"
        fill="none" stroke="#3CBA99" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M0,30 C18,25 35,20 50,14 C65,8 80,5 95,2 L110,1 L110,36 L0,36 Z"
        fill="url(#mda-lg)"/>
      <circle cx="110" cy="1" r="3" fill="#3CBA99">
        <animate attributeName="r"       values="2;4;2"     dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".7;1;.7"   dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function Donut() {
  return (
    <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>
      <svg viewBox="0 0 44 44" width="44" height="44">
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(60,186,153,.15)" strokeWidth="5"/>
        <circle cx="22" cy="22" r="18" fill="none" stroke="#3CBA99" strokeWidth="5"
          strokeDasharray="72 41" strokeDashoffset="-20" strokeLinecap="round"/>
        <text x="22" y="26" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700" fontFamily="sans-serif">64%</text>
      </svg>
      <div>
        <div style={{fontSize:10,color:"rgba(255,255,255,.55)"}}>Target</div>
        <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>80%</div>
        <div style={{fontSize:8,color:"#3CBA99"}}>▲ 8pt</div>
      </div>
    </div>
  );
}

function BarChart() {
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:3,height:60,marginTop:8}}>
      {BAR_HEIGHTS.map((h,i) => (
        <div key={i} style={{flex:1,borderRadius:"2px 2px 0 0",background:"rgba(60,186,153,.3)",height:"100%",display:"flex",alignItems:"flex-end"}}>
          <div style={{width:"100%",background:"#3CBA99",borderRadius:"2px 2px 0 0",height:(h/58*100)+"%",opacity:0.6+i*0.08}}/>
        </div>
      ))}
    </div>
  );
}

function MiniBars() {
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:2,height:22,marginTop:6}}>
      {MINI_HEIGHTS.map((h,i) => (
        <div key={i} style={{flex:1,height:h+"%",background:"#3CBA99",borderRadius:"2px 2px 0 0",opacity:0.5+i*0.1}}/>
      ))}
    </div>
  );
}

function GlassCard({ card, floatName, floatDur, floatDelay }) {
  /* Build position style from the pos object */
  const posStyle = {};
  const p = card.pos;
  if (p.top    !== undefined) posStyle.top    = p.top;
  if (p.bottom !== undefined) posStyle.bottom = p.bottom;
  if (p.left   !== undefined) posStyle.left   = p.left;
  if (p.right  !== undefined) posStyle.right  = p.right;
  if (p.left === "50%")  { posStyle.left = "50%"; posStyle.transform = "translateX(-50%)"; }
  if (p.top  === "50%")  { posStyle.top  = "50%"; posStyle.transform = "translateY(-50%)"; }

  const base = {
    position:"absolute",
    borderRadius:12,
    background:"rgba(17,59,92,.78)",
    border:"1px solid rgba(60,186,153,.22)",
    backdropFilter:"blur(16px)",
    WebkitBackdropFilter:"blur(16px)",
    boxShadow:"0 8px 32px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.06)",
    padding:"10px 12px",
    width:card.width,
    animation:`${floatName} ${floatDur}s ease-in-out infinite ${floatDelay}s`,
    ...posStyle,
  };

  const label = (txt, extra={}) => (
    <div style={{fontSize:7.5,color:"rgba(255,255,255,.45)",textTransform:"uppercase",letterSpacing:"1.2px",marginBottom:3,...extra}}>{txt}</div>
  );
  const bigVal = (txt, sz=18) => (
    <div style={{fontSize:sz,fontWeight:700,color:"#fff",lineHeight:1}}>{txt}</div>
  );
  const sub = (txt) => (
    <div style={{fontSize:8,color:"#3CBA99",marginTop:3,fontWeight:500}}>{txt}</div>
  );

  return (
    <div style={base}>
      {card.chip && <>
        {label(card.title)}
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {bigVal(card.val,19)}
          <span style={{fontSize:10,color:"#3CBA99",fontWeight:600}}>{card.sub}</span>
        </div>
      </>}

      {card.pulse && (
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:8,height:8,borderRadius:"50%",background:"#3CBA99",
            boxShadow:"0 0 8px #3CBA99",flexShrink:0,
            animation:"kpiPulse 1.5s ease-in-out infinite"}}/>
          <div>
            {label("Active Users",{marginBottom:1})}
            {bigVal(card.val,15)}
          </div>
        </div>
      )}

      {card.donut && <>{label(card.title)}<Donut/></>}

      {!card.chip && !card.pulse && !card.donut && <>
        {label(card.title)}
        {card.val && bigVal(card.val, card.id==="leads"?20:18)}
        {card.sub && sub(card.sub)}
        {card.spark    && <SparkLine/>}
        {card.area     && <AreaLine/>}
        {card.bars     && <>
          <BarChart/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:2}}>
            <span style={{fontSize:7,color:"rgba(255,255,255,.3)"}}>Jan</span>
            <span style={{fontSize:7,color:"rgba(255,255,255,.3)"}}>Jun</span>
          </div>
        </>}
        {card.progress && <>
          <div style={{marginTop:6,height:4,borderRadius:2,background:"rgba(255,255,255,.1)",overflow:"hidden"}}>
            <div style={{width:card.progress+"%",height:"100%",borderRadius:2,background:"linear-gradient(90deg,#3CBA99,rgba(60,186,153,.55))"}}/>
          </div>
          {sub(card.sub)}
        </>}
        {card.miniBars && <MiniBars/>}
      </>}
    </div>
  );
}

/* SVG layer – always rendered at 600×500 internal coords */
function ConnLines() {
  const dots = SATELLITES.map((s,i) => {
    const p = satPos(s.angle, s.dist);
    return { x1:CX, y1:CY, x2:p.x, y2:p.y, delay:i*0.5, id:s.id };
  });
  return (
    <svg viewBox={`0 0 ${BASE_W} ${BASE_H}`} xmlns="http://www.w3.org/2000/svg"
      style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}>
      {dots.map(d => (
        <line key={d.id} x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2}
          stroke="#3CBA99" strokeWidth="1" strokeDasharray="5,5"
          style={{animation:`connPulse 3s linear infinite ${d.delay}s`}}/>
      ))}
      {dots.map(d => (
        <circle key={d.id+"-dot"} r="3" fill="#3CBA99" opacity=".85">
          <animateMotion dur="3s" repeatCount="indefinite" begin={d.delay+"s"}
            path={`M${d.x1},${d.y1} L${d.x2},${d.y2}`}/>
        </circle>
      ))}
      {/* Ambient particles */}
      {[[80,190,2,2.8,0],[510,200,1.5,3.2,.4],[540,310,2,2.5,.8],
        [55,375,1.5,3.5,1.2],[490,430,2,4,1.6],[120,440,1.5,2.2,.6],
        [360,60,1.5,3,.9],[230,460,2,2.8,1.4]
      ].map(([cx,cy,r,dur,beg],i) => (
        <circle key={"p"+i} cx={cx} cy={cy} r={r} fill="#3CBA99">
          <animate attributeName="opacity" values=".2;.75;.2" dur={dur+"s"} repeatCount="indefinite" begin={beg+"s"}/>
          <animate attributeName="cy" values={`${cy};${cy-8};${cy}`} dur={dur+"s"} repeatCount="indefinite" begin={beg+"s"}/>
        </circle>
      ))}
    </svg>
  );
}

function Hub() {
  return (
    <div style={{position:"absolute",left:CX,top:CY,transform:"translate(-50%,-50%)",width:0,height:0}}>
      {[190,150,120].map((sz,i) => (
        <div key={i} style={{
          position:"absolute",borderRadius:"50%",
          width:sz,height:sz,left:-sz/2,top:-sz/2,
          border:`${i===2?"1px dashed":"1px solid"} rgba(60,186,153,${i===0?.1:i===1?.18:.22})`,
          animation:i<2?`pulseRing${i===0?"2":""} ${i===0?4:3}s ease-in-out infinite`:"spinOrbit 20s linear infinite",
        }}/>
      ))}
      <div style={{
        position:"absolute",width:80,height:80,left:-40,top:-40,borderRadius:"50%",
        background:"linear-gradient(135deg,#113B5C,#0a2236)",
        border:"2px solid rgba(60,186,153,.55)",
        boxShadow:"0 0 28px rgba(60,186,153,.2), inset 0 1px 0 rgba(255,255,255,.08)",
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      }}>
        <span style={{fontSize:22,lineHeight:1}}>⚡</span>
        <span style={{fontSize:8,color:"rgba(255,255,255,.65)",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:3}}>Growth</span>
      </div>
    </div>
  );
}

function Satellite({ sat, floatDelay, floatDur }) {
  const p = satPos(sat.angle, sat.dist);
  const lines = sat.label.split("\n");
  return (
    <div style={{
      position:"absolute",left:p.x-34,top:p.y-27,width:68,height:54,
      borderRadius:10,background:"rgba(17,59,92,.84)",
      border:"1px solid rgba(60,186,153,.26)",
      backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",
      boxShadow:"0 4px 16px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.06)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,
      animation:`floatSat ${floatDur}s ease-in-out infinite ${floatDelay}s`,
    }}>
      <span style={{fontSize:14,lineHeight:1}}>{sat.icon}</span>
      <span style={{fontSize:7.5,color:"rgba(255,255,255,.75)",letterSpacing:".8px",
        textTransform:"uppercase",textAlign:"center",lineHeight:1.3}}>
        {lines.map((l,i) => <span key={i} style={{display:"block"}}>{l}</span>)}
      </span>
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────── */
export default function Animationhero() {
  const wrapRef  = useRef(null);
  const [scale, setScale] = useState(1);
  const [tick,  setTick]  = useState(0);

  /* Responsive scale: fit BASE_W×BASE_H into the wrapper */
  const updateScale = useCallback(() => {
    if (!wrapRef.current) return;
    const { width } = wrapRef.current.getBoundingClientRect();
    setScale(Math.min(1, width / BASE_W));   // never upscale; only downscale
  }, []);

  useEffect(() => {
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [updateScale]);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 3200);
    return () => clearInterval(id);
  }, []);

  const leadsVal = (2847 + Math.round(Math.sin(tick * 0.7) * 80)).toLocaleString();

  const FLOAT_CFGS = [
    {name:"floatA",dur:6},{name:"floatB",dur:5},{name:"floatC",dur:7},
    {name:"floatA",dur:6.5},{name:"floatB",dur:5.5},{name:"floatC",dur:8},
    {name:"floatA",dur:7},{name:"floatB",dur:6},
  ];

  return (
    <>
      <style>{`
        @keyframes floatA    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)}  }
        @keyframes floatB    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)}  }
        @keyframes floatC    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)} }
        @keyframes floatSat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)}  }
        @keyframes pulseRing { 0%,100%{opacity:.2;transform:scale(1)}  50%{opacity:.08;transform:scale(1.12)} }
        @keyframes pulseRing2{ 0%,100%{opacity:.12;transform:scale(1)} 50%{opacity:.05;transform:scale(1.18)} }
        @keyframes spinOrbit { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes connPulse { 0%,100%{opacity:.28;stroke-dashoffset:0} 50%{opacity:.7;stroke-dashoffset:-80} }
        @keyframes kpiPulse  { 0%,100%{opacity:.85;box-shadow:0 0 6px #3CBA99}  50%{opacity:1;box-shadow:0 0 12px #3CBA99} }
        @keyframes glowPulse { 0%,100%{opacity:.2} 50%{opacity:.4} }
        @keyframes sceneFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>

      {/*
        Outer wrapper: full width, height collapses to scaled canvas height.
        pointer-events none on the clip shell so scroll works on mobile.
      */}
      <div
        ref={wrapRef}
        style={{
          width:"100%",
          height: BASE_H * scale,
          position:"relative",
          overflow:"hidden",
          background:"transparent",
        }}
      >
        {/*
          Inner canvas: always BASE_W × BASE_H in layout units,
          then scaled down via transform-origin top-left.
        */}
        <div style={{
          width: BASE_W,
          height: BASE_H,
          transformOrigin:"top left",
          transform:`scale(${scale})`,
          position:"absolute",
          top:0, left:0,
          fontFamily:"'Segoe UI', system-ui, sans-serif",
        }}>

          {/* Glow blobs */}
          {[
            {w:320,h:320,l:140,t:90, delay:0,   dur:4},
            {w:200,h:200,l:10, t:20, delay:1.5, dur:5},
            {w:180,h:180,l:390,t:290,delay:0.8, dur:6},
          ].map((g,i) => (
            <div key={i} style={{
              position:"absolute",borderRadius:"50%",pointerEvents:"none",
              width:g.w,height:g.h,left:g.l,top:g.t,
              background:"radial-gradient(circle,rgba(60,186,153,.1),transparent 70%)",
              animation:`glowPulse ${g.dur}s ease-in-out infinite ${g.delay}s`,
            }}/>
          ))}

          {/* Scene wrapper – gentle vertical float */}
          <div style={{
            width:BASE_W,height:BASE_H,position:"relative",
            animation:"sceneFloat 7s ease-in-out infinite",
          }}>
            <ConnLines/>
            <Hub/>

            {SATELLITES.map((sat,i) => (
              <Satellite key={sat.id} sat={sat} floatDelay={i*0.4} floatDur={5+(i%3)}/>
            ))}

            {KPI_CARDS.map((card,i) => (
              <GlassCard
                key={card.id}
                card={card.id==="leads" ? {...card, val:leadsVal} : card}
                floatName={FLOAT_CFGS[i].name}
                floatDur={FLOAT_CFGS[i].dur}
                floatDelay={i*0.35}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
