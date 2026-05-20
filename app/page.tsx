"use client";
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Phone, MessageSquare, Star, Inbox, Workflow, Smartphone,
  TrendingUp, Zap, Clock, Target, Layers, Activity, CheckCircle2,
  ArrowRight, ArrowUpRight, PhoneMissed, MailWarning, Hourglass, XCircle,
  EyeOff, Brain, Home, Wrench, Droplets, Trees, Sun, Sparkles, Truck,
  HardHat, ChevronRight, Play, Pause, Signal, BatteryFull, Wifi, Bell,
  Database, GitBranch, Send, CalendarCheck, FileText, ThumbsUp, Quote,
} from "lucide-react";

/* ============================================================
   DESIGN SYSTEM — tokens + global styles
   Now with broader background palette for section rhythm
   ============================================================ */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Inter:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');

    :root {
      /* dark backgrounds — varied for rhythm */
      --bg-primary:   #07090F;
      --bg-secondary: #0B1020;
      --bg-warm-dark: #0F1426;   /* slightly warmer navy with amber undertone */
      --bg-slate:     #131A2C;   /* warmer slate-navy for transition sections */
      --surface:      #111827;
      --elevated:     #1A2333;

      /* light contrast section */
      --bg-light:        #E8ECF3;   /* soft slate, not pure white */
      --bg-light-2:      #F1F4F9;
      --surface-light:   #FFFFFF;
      --border-light:    #CBD5E1;
      --text-on-light-1: #0F172A;
      --text-on-light-2: #334155;
      --text-on-light-3: #64748B;

      --border:       #1f2937;
      --border-strong:#2a3447;
      --hairline:     rgba(203,213,225,0.08);

      --blue:         #2563EB;
      --blue-hover:   #3B82F6;
      --blue-soft:    #60A5FA;
      --blue-glow:    rgba(37,99,235,0.18);
      --blue-glow-2:  rgba(96,165,250,0.45);

      --gold:         #D6A84F;
      --gold-bright:  #F5C542;
      --gold-soft:    #E9C46A;
      --gold-glow:    rgba(214,168,79,0.18);
      --gold-warm:    rgba(245,197,66,0.10);

      --text-1:       #F8FAFC;
      --text-2:       #CBD5E1;
      --text-3:       #94A3B8;
      --text-4:       #64748B;

      --success:      #10B981;
      --warning:      #F59E0B;
      --error:        #EF4444;
      --info:         #06B6D4;
    }

    html, body { background: var(--bg-primary); }

    .font-display { font-family: 'Geist', sans-serif; letter-spacing: -0.02em; }
    .font-body    { font-family: 'Inter', sans-serif; }
    .font-metric  { font-family: 'Barlow Condensed', sans-serif; font-feature-settings: "tnum"; }
    .font-mono    { font-family: 'Geist Mono', monospace; }

    .dot-grid {
      background-image: radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .dot-grid-light {
      background-image: radial-gradient(circle, rgba(15,23,42,0.07) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .navy-wash {
      background:
        radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.08), transparent 60%),
        linear-gradient(180deg, var(--bg-primary), var(--bg-secondary) 40%, var(--bg-primary));
    }
    .warm-wash {
      background:
        radial-gradient(ellipse 60% 50% at 20% 30%, rgba(245,197,66,0.06), transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 70%, rgba(37,99,235,0.06), transparent 60%),
        linear-gradient(180deg, var(--bg-warm-dark), var(--bg-slate) 50%, var(--bg-warm-dark));
    }
    .slate-wash {
      background: linear-gradient(180deg, var(--bg-secondary), var(--bg-slate));
    }

    .glow-blue {
      box-shadow:
        0 0 0 1px rgba(37,99,235,0.3),
        0 0 40px -10px var(--blue-glow-2),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .glow-gold {
      box-shadow:
        0 0 0 1px rgba(214,168,79,0.35),
        0 0 50px -10px rgba(245,197,66,0.4),
        inset 0 1px 0 rgba(255,255,255,0.05);
    }
    .glow-card {
      box-shadow:
        0 0 0 1px var(--border),
        0 20px 60px -30px rgba(37,99,235,0.25),
        inset 0 1px 0 rgba(255,255,255,0.025);
    }
    .glow-card-light {
      box-shadow:
        0 0 0 1px var(--border-light),
        0 20px 50px -25px rgba(15,23,42,0.18);
    }

    .hairline-h { background: linear-gradient(90deg, transparent, var(--border-strong), transparent); }

    .dash-flow { stroke-dasharray: 4 6; animation: dashmove 1.6s linear infinite; }
    @keyframes dashmove { to { stroke-dashoffset: -40; } }

    .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
    @keyframes pulseDot {
      0%,100% { opacity:.45; transform: scale(0.85);}
      50%     { opacity:1;  transform: scale(1.15);}
    }

    ::selection { background: var(--blue); color: #fff; }

    .no-scrollbar::-webkit-scrollbar { display:none; }
    .no-scrollbar { scrollbar-width:none; }

    .grain::before {
      content:""; position:absolute; inset:0; pointer-events:none; opacity:.04; mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    }

    /* photo treatments */
    .photo-treatment {
      filter: brightness(0.85) contrast(1.05) saturate(0.95);
    }
    .photo-overlay-dark {
      background: linear-gradient(135deg, rgba(7,9,15,0.55) 0%, rgba(15,20,38,0.4) 50%, rgba(7,9,15,0.85) 100%);
    }
    .photo-overlay-warm {
      background:
        radial-gradient(ellipse at 20% 80%, rgba(245,197,66,0.15), transparent 50%),
        linear-gradient(135deg, rgba(7,9,15,0.7) 0%, rgba(15,20,38,0.5) 60%, rgba(7,9,15,0.9) 100%);
    }
  `}</style>
);

/* ============================================================
   PRIMITIVES
   ============================================================ */
const Tag = ({ children, tone = "blue" }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur">
    <span className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: tone === "gold" ? "var(--gold-bright)" : "var(--blue-soft)" }} />
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
      {children}
    </span>
  </div>
);

const TagLight = ({ children, tone = "blue" }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-white">
    <span className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: tone === "gold" ? "var(--gold)" : "var(--blue)" }} />
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-on-light-3)]">
      {children}
    </span>
  </div>
);

const DemoNote = ({ className = "" }) => (
  <div className={`flex items-center gap-2 mt-3 ${className}`}>
    <div className="w-1 h-1 rounded-full bg-[var(--text-4)]" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-4)]">
      Demo interface shown for illustration · final setup is customized to each business
    </span>
  </div>
);

const useCounter = (target, inView, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
};

/* ============================================================
   PHOTO PLACEHOLDERS
   IMPORTANT: swap these src URLs with your own photos before launch
   Currently using free Unsplash photos as scaffolding.
   ============================================================ */
const PHOTO_OPERATOR_PHONE = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80";
// Suggested replacement: contractor/owner on phone outside a truck or on a jobsite

const PHOTO_JOBSITE = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80";
// Suggested replacement: wide jobsite shot — roof, crew, or service truck in driveway

const PHOTO_TABLET_OPERATOR = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80";
// Suggested replacement: operator/owner using tablet or phone reviewing schedule

const PHOTO_TRUCK_CREW = "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80";
// Suggested replacement: service truck or small crew arriving at a home

/* ============================================================
   NAV
   ============================================================ */
const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
      <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg-primary)]/75 backdrop-blur-xl px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-md bg-[var(--blue)] flex items-center justify-center">
            <div className="absolute inset-0 rounded-md ring-1 ring-white/15" />
            <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
          </div>
          <div className="leading-none">
            <div className="font-display font-semibold text-[14px] text-white tracking-tight">Revenue Systems</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)] mt-0.5">
              For local service businesses
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-body text-[13px] text-[var(--text-2)]">
          <a href="#system" className="hover:text-white transition">System</a>
          <a href="#automations" className="hover:text-white transition">Automations</a>
          <a href="#pipeline" className="hover:text-white transition">Live view</a>
          <a href="#industries" className="hover:text-white transition">Industries</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#pricing"
             className="hidden sm:inline-flex font-body font-medium text-[13px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 hover:border-[var(--blue-soft)] px-3.5 py-2 rounded-lg transition">
            See Founder Offer
          </a>
          <a href="#cta"
             className="inline-flex items-center gap-1.5 font-body font-medium text-[13px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-3.5 py-2 rounded-lg transition">
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

/* ============================================================
   HERO
   ============================================================ */
const HERO_EVENTS = [
  { icon: Phone, color: "var(--blue-soft)", label: "Inbound call captured", meta: "Roofing inquiry · routed", time: "now" },
  { icon: MessageSquare, color: "var(--blue-soft)", label: "Auto-reply sent", meta: "Response in seconds", time: "5s" },
  { icon: PhoneMissed, color: "var(--warning)", label: "Missed call recovered", meta: "SMS text-back triggered", time: "22s" },
  { icon: CalendarCheck, color: "var(--success)", label: "Estimate booked", meta: "Scheduled in pipeline", time: "1m" },
  { icon: Star, color: "var(--gold-bright)", label: "Review request sent", meta: "Post-job automation", time: "3m" },
  { icon: FileText, color: "var(--info)", label: "Follow-up sent", meta: "Sequence active", time: "5m" },
];

const Sparkline = () => {
  const points = [22, 28, 24, 36, 32, 44, 38, 52, 48, 58, 54, 68, 62, 74];
  const max = Math.max(...points);
  const w = 200, h = 44;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg width={w} height={h} className="overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--blue-soft)" stopOpacity="0.3"/>
          <stop offset="1" stopColor="var(--blue-soft)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="var(--blue-soft)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx={w} cy={h - (points[points.length - 1] / max) * h} r="3" fill="var(--blue-soft)" />
      <circle cx={w} cy={h - (points[points.length - 1] / max) * h} r="6" fill="var(--blue-soft)" opacity="0.3" className="pulse-dot" />
    </svg>
  );
};

const Hero = () => {
  const [feed, setFeed] = useState([0, 1, 2]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setFeed((prev) => {
        const next = (prev[0] + 1) % HERO_EVENTS.length;
        return [next, prev[0], prev[1]];
      });
    }, 2400);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden navy-wash grain">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px hairline-h" />

      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold-glow), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
        <div>
          <Tag>v1.0 · Operational infrastructure</Tag>

          <h1 className="font-display font-medium text-[clamp(40px,6.5vw,82px)] leading-[1.02] mt-6 text-white tracking-tight">
            Operational revenue
            <br />
            infrastructure for
            <br />
            <span className="relative inline-block">
              local operators
              <svg className="absolute -bottom-3 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <path d="M0 3 Q 75 0, 150 3 T 300 3" stroke="var(--blue)" strokeWidth="2" fill="none" />
              </svg>
            </span>
            .
          </h1>

          <p className="font-body text-[17px] leading-[1.6] text-[var(--text-2)] mt-7 max-w-xl">
            We install automated systems that help local service businesses capture
            inbound leads, respond faster, recover missed calls, automate follow-up,
            and manage opportunities in one pipeline.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <a href="#cta"
               className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#pricing"
               className="inline-flex items-center gap-2 font-body font-medium text-[14px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur px-5 py-3.5 rounded-lg hover:border-[var(--blue-soft)] transition">
              See What's Included
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 text-[var(--text-3)] font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              7-day install
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              No long contracts
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              Built for operators
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] glow-card overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--elevated)]/60">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-3)]">
                  command · pipeline
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--gold-soft)]">demo</span>
                </span>
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="text-[var(--text-3)] hover:text-white transition"
                  aria-label={paused ? "Resume demo" : "Pause demo"}
                >
                  {paused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,1fr,1fr,auto] border-b border-[var(--border)]">
              {[
                { l: "Inbound today",  v: "47", d: "live" },
                { l: "Avg response",   v: "11", u: "s", d: "automated" },
                { l: "Booked / wk",    v: "23", d: "tracked" },
              ].map((m, i) => (
                <div key={i} className="p-4 border-r border-[var(--border)]">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-4)]">{m.l}</div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-metric font-semibold text-[28px] text-white leading-none">{m.v}</span>
                    {m.u && <span className="font-metric text-[16px] text-[var(--text-3)]">{m.u}</span>}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-3)] mt-1">{m.d}</div>
                </div>
              ))}
              <div className="p-4 flex items-center justify-center">
                <Sparkline />
              </div>
            </div>

            <div className="p-3 space-y-2 h-[228px] overflow-hidden">
              <div className="flex items-center justify-between mb-1 px-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
                  Activity stream
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] pulse-dot" />
                  <span className="font-mono text-[10px] text-[var(--text-3)]">streaming</span>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {feed.map((idx, pos) => {
                  const ev = HERO_EVENTS[idx];
                  const Icon = ev.icon;
                  return (
                    <motion.div
                      key={`${idx}-${pos}`}
                      layout
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1 - pos * 0.28, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3 p-2.5 rounded-lg border border-[var(--border)] bg-[var(--elevated)]/70"
                    >
                      <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: `color-mix(in srgb, ${ev.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${ev.color} 30%, transparent)` }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: ev.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-body font-medium text-[12.5px] text-white truncate">{ev.label}</div>
                        <div className="font-mono text-[10px] text-[var(--text-4)] uppercase tracking-wider truncate">
                          {ev.meta}
                        </div>
                      </div>
                      <div className="font-mono text-[10px] text-[var(--text-4)]">{ev.time}</div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="border-t border-[var(--border)] p-4 bg-[var(--bg-secondary)]/40">
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
                  Pipeline view
                </div>
                <div className="font-mono text-[10px] text-[var(--text-3)]">
                  5 stages tracked
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { l: "New",   v: 8,  c: "var(--blue-soft)" },
                  { l: "Qual",  v: 14, c: "var(--info)" },
                  { l: "Est",   v: 6,  c: "var(--blue)" },
                  { l: "Sched", v: 11, c: "var(--warning)" },
                  { l: "Won",   v: 8,  c: "var(--success)" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="h-1 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.v * 7}%` }}
                        transition={{ duration: 1.1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                        className="h-full"
                        style={{ background: s.c }}
                      />
                    </div>
                    <div className="font-mono text-[9px] text-[var(--text-4)] uppercase mt-1.5">{s.l}</div>
                    <div className="font-metric text-[18px] font-semibold text-white leading-none mt-0.5">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <DemoNote />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="absolute -left-4 lg:-left-12 top-[42%] hidden md:block"
          >
            <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]/95 backdrop-blur-xl p-3 w-[220px] glow-card">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-md bg-[var(--blue)]/15 border border-[var(--blue)]/30 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-[var(--blue-soft)]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                  Auto-response
                </span>
              </div>
              <div className="font-body text-[12px] text-white leading-snug">
                "Hey — thanks for reaching out about your roof. We can come by
                Thursday at 2pm or Friday at 10am. Which works?"
              </div>
              <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-[var(--border)]">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)]">sent automatically</span>
                <CheckCircle2 className="w-3 h-3 text-[var(--success)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   PROOF BAR
   ============================================================ */
const ProofBar = () => {
  const points = [
    { icon: Workflow, t: "7-day install", d: "From kickoff to go-live" },
    { icon: PhoneMissed, t: "Missed call recovery", d: "Built into the system" },
    { icon: Layers, t: "CRM + pipeline included", d: "No extra subscription" },
    { icon: HardHat, t: "Built for operators", d: "Contractors & local services" },
  ];
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--bg-secondary)]/30 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-3)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-soft)] pulse-dot" />
            Built for owner-operated local service businesses
          </div>
          <div className="flex items-center gap-x-8 gap-y-4 flex-wrap justify-center">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md border border-[var(--border-strong)] bg-[var(--surface)]/60 flex items-center justify-center">
                  <p.icon className="w-3.5 h-3.5 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <div className="leading-tight">
                  <div className="font-body font-medium text-[12.5px] text-white">{p.t}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-4)] mt-0.5">{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   NEW SECTION — BUILT FOR REAL OPERATORS  (photo + warm copy)
   ============================================================ */
const BuiltForRealOperators = () => (
  <section className="relative py-24 warm-wash overflow-hidden">
    {/* warm gold ambient glow */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
         style={{ background: "radial-gradient(circle, var(--gold-bright), transparent 60%)" }} />

    <div className="mx-auto max-w-7xl px-6 relative">
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center">
        {/* Copy side */}
        <div>
          <Tag tone="gold">Built for real operators</Tag>
          <h2 className="font-display font-medium text-[clamp(32px,4.2vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            For the owners answering the phone <span style={{ color: "var(--gold-soft)" }}>from the truck</span>.
          </h2>
          <p className="font-body text-[17px] text-[var(--text-2)] mt-7 leading-[1.65] max-w-xl">
            You're running estimates in the morning, leading a crew in the afternoon,
            and answering "can someone come look at my roof?" between every other thing.
            Your phone never stops. Three calls come in while you're on a ladder.
            One of them doesn't get a callback until tomorrow — and by then they've
            already hired your competitor.
          </p>
          <p className="font-body text-[17px] text-[var(--text-2)] mt-4 leading-[1.65] max-w-xl">
            This system isn't built for tech companies. It's built for the owner
            who's been on his own back-end since day one — and finally needs the
            response, follow-up, and tracking off his plate.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-9 max-w-xl">
            {[
              { icon: PhoneMissed, t: "The calls you miss",  d: "Get answered automatically — even on the job." },
              { icon: Clock,       t: "The follow-up gap",    d: "Closed by a sequence that doesn't forget." },
              { icon: FileText,    t: "The estimates",        d: "Sent, tracked, and reminded — without you chasing." },
              { icon: Smartphone,  t: "The whole operation",  d: "Visible on your phone from anywhere." },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur">
                <div className="w-9 h-9 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-[var(--gold-soft)]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-display font-medium text-[14px] text-white tracking-tight">{b.t}</div>
                  <div className="font-body text-[12.5px] text-[var(--text-3)] mt-0.5 leading-snug">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo side */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-strong)] glow-card">
            <img
              src={PHOTO_OPERATOR_PHONE}
              alt="Local service business owner on phone"
              className="absolute inset-0 w-full h-full object-cover photo-treatment"
            />
            <div className="absolute inset-0 photo-overlay-warm" />

            {/* floating quote card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)]/85 backdrop-blur-xl p-5">
              <Quote className="w-5 h-5 text-[var(--gold-soft)] mb-2" />
              <div className="font-display text-[16px] text-white leading-[1.4]">
                "I was missing calls every single day and had no idea what was in the
                pipeline. That's the part that was actually costing me money."
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)] mt-3">
                — every local operator we've talked to
              </div>
            </div>

            {/* corner accent */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[var(--bg-primary)]/80 backdrop-blur border border-[var(--border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                On the ground
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — TRUST / PAIN
   ============================================================ */
const PAINS = [
  { icon: PhoneMissed, t: "Missed calls",    d: "Inbound calls go unanswered during job hours and on weekends." },
  { icon: Hourglass,   t: "Slow response",   d: "Leads wait hours for a reply. By then they've called the next business." },
  { icon: MailWarning, t: "Lost estimates",  d: "Quotes get sent, then silence. No follow-up. No tracking." },
  { icon: XCircle,     t: "Weak follow-up",  d: "One text, one call, then forgotten. Most deals die in the gap." },
  { icon: EyeOff,      t: "No visibility",   d: "You can't see what's in motion, what's stalled, what's lost." },
  { icon: Brain,       t: "Owner overwhelm", d: "Running ops, sales, and follow-up alone — nothing gets full attention." },
];

const TrustPain = () => (
  <section className="relative py-24 slate-wash">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-[1fr,1.6fr] gap-12 mb-14">
        <div>
          <Tag>The diagnosis</Tag>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            Revenue leaks every hour you're not watching.
          </h2>
        </div>
        <div className="self-end">
          <p className="font-body text-[16px] text-[var(--text-2)] leading-relaxed max-w-xl">
            Many local businesses lose opportunities through missed calls, delayed
            responses, and inconsistent follow-up. The problem usually isn't demand —
            it's the gap between when an opportunity arrives and when anything
            happens with it.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PAINS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg border border-[var(--border-strong)] bg-[var(--elevated)] flex items-center justify-center group-hover:border-[var(--blue-soft)] transition">
                <p.icon className="w-4 h-4 text-[var(--text-2)] group-hover:text-[var(--blue-soft)] transition" />
              </div>
              <div className="flex-1">
                <div className="font-display font-medium text-[17px] text-white tracking-tight">{p.t}</div>
                <p className="font-body text-[13.5px] text-[var(--text-3)] mt-1.5 leading-relaxed">{p.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reframe — gold moment */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 p-10 lg:p-14 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-secondary)] relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-15"
          style={{ background: "radial-gradient(circle, var(--gold-bright), transparent 60%)" }} />
        <div className="relative">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--gold-bright)] mb-4">
            The reframe
          </div>
          <p className="font-display font-medium text-[clamp(26px,3.5vw,46px)] leading-[1.15] text-white max-w-4xl tracking-tight">
            Most local businesses don't have a <span className="text-[var(--text-4)]">lead</span> problem.
            They have a <span style={{ color: "var(--gold-bright)" }}>systems</span> problem.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ============================================================
   SECTION — WHAT THE SYSTEM DOES
   ============================================================ */
const FEATURES = [
  { icon: Zap,           t: "Instant Lead Response",    d: "Every form, call, and DM gets a personal reply automatically — 24/7." },
  { icon: PhoneMissed,   t: "Missed Call Text-Back",    d: "Unanswered calls trigger an immediate SMS so the lead doesn't go cold." },
  { icon: Send,          t: "Automated Follow-Up",      d: "Multi-channel sequences across SMS, email, and voicemail until they respond." },
  { icon: Layers,        t: "CRM Pipeline",             d: "Every opportunity organized by stage, value, source, and last activity." },
  { icon: Star,          t: "Review Automation",        d: "Post-job review requests sent automatically after each completed job." },
  { icon: Activity,      t: "Lead Tracking",            d: "See every source, every touchpoint, every conversion in one view." },
  { icon: CalendarCheck, t: "Booking Automation",       d: "Self-service scheduling that respects your crew calendar and route." },
  { icon: Smartphone,    t: "Mobile Visibility",        d: "Full operational control from the truck, the site, or the couch." },
];

const FeatureCard = ({ f, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.04 }}
    className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] transition overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 0%, var(--blue-glow), transparent 60%)" }} />
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
      style={{ boxShadow: "inset 0 0 0 1px rgba(96,165,250,0.3)" }} />

    <div className="relative">
      <div className="w-11 h-11 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center group-hover:border-[var(--blue-soft)] transition">
        <f.icon className="w-5 h-5 text-[var(--blue-soft)]" strokeWidth={1.8} />
      </div>
      <div className="font-display font-medium text-[17px] text-white tracking-tight mt-4">{f.t}</div>
      <p className="font-body text-[13.5px] text-[var(--text-3)] mt-1.5 leading-relaxed">{f.d}</p>

      <div className="mt-5 h-10 rounded-md border border-[var(--border)] bg-[var(--bg-secondary)]/50 p-1.5 flex items-end gap-[2px] overflow-hidden">
        {[...Array(24)].map((_, j) => (
          <div
            key={j}
            className="flex-1 rounded-[1px]"
            style={{
              height: `${15 + ((i * 7 + j * 11) % 70)}%`,
              background: j === 23 ? "var(--blue-soft)" : `rgba(96,165,250,${0.08 + (j / 30)})`,
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const WhatItDoes = () => (
  <section id="system" className="relative py-24 border-t border-[var(--border)]">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <Tag>The system</Tag>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            Eight layers working in sync.
          </h2>
        </div>
        <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
          Each layer handles one job. Together they form the operational membrane
          between your business and every inbound opportunity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {FEATURES.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — HOW IT WORKS
   ============================================================ */
const HowItWorks = () => {
  const steps = [
    { n: "01", t: "Leads come in",         d: "Calls, forms, DMs, GBP messages, referrals — routed into one inbox.", icon: Inbox },
    { n: "02", t: "Automation responds",   d: "SMS in seconds. Pipeline entry. Follow-up sequence. Booking link.", icon: Workflow },
    { n: "03", t: "More jobs get booked",  d: "Faster responses, consistent follow-up, and a tracked pipeline — turning more opportunities into booked appointments with less manual work.", icon: TrendingUp },
  ];

  return (
    <section className="relative py-24 border-t border-[var(--border)] navy-wash">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="inline-block"><Tag>How it works</Tag></div>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            Three stages. One outcome.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px">
            <svg className="w-full h-px overflow-visible">
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="var(--border-strong)" strokeWidth="1" />
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="var(--blue-soft)" strokeWidth="1"
                    className="dash-flow" opacity="0.8" />
            </svg>
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex justify-center">
                <div className="relative w-24 h-24 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] flex items-center justify-center z-10 glow-card">
                  <s.icon className="w-8 h-8 text-[var(--blue-soft)]" strokeWidth={1.6} />
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--blue)] font-mono text-[10px] text-[var(--blue-soft)]">
                    {s.n}
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 px-4">
                <div className="font-display font-medium text-[20px] text-white tracking-tight">{s.t}</div>
                <p className="font-body text-[14px] text-[var(--text-3)] mt-2 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   PHOTO STRIP — A DAY IN THE LIFE (wide photo, overlay copy)
   ============================================================ */
const DayInLife = () => (
  <section className="relative">
    <div className="relative h-[440px] md:h-[520px] overflow-hidden">
      <img
        src={PHOTO_JOBSITE}
        alt="Local service business jobsite"
        className="absolute inset-0 w-full h-full object-cover photo-treatment"
      />
      <div className="absolute inset-0 photo-overlay-dark" />

      {/* warm light beam from upper right */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
           style={{ background: "radial-gradient(circle, var(--gold-warm), transparent 60%)" }} />

      <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-14">
        <div className="max-w-3xl">
          <Tag tone="gold">A day in the life</Tag>
          <h2 className="font-display font-medium text-[clamp(34px,5vw,64px)] leading-[1.02] mt-5 text-white tracking-tight">
            Your phone rings 40 times.<br />
            <span style={{ color: "var(--gold-soft)" }}>You answer twelve</span>.
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-[var(--text-2)] mt-6 max-w-2xl leading-[1.6]">
            That's not a complaint — that's what it looks like to run a real business.
            You can't be on the ladder and on the phone at the same time.
            That's exactly the gap this system was built to close.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — WHAT HAPPENS AFTER YOU BOOK
   ============================================================ */
const AfterBooking = () => {
  const steps = [
    { n: "01", t: "15-minute demo",                d: "We walk through the system and how it would configure for your business.",            icon: Phone,        time: "Day 0" },
    { n: "02", t: "Intake & process review",       d: "We map your current intake, follow-up, and pipeline — find the gaps to fill.",       icon: FileText,     time: "Day 1–2" },
    { n: "03", t: "7-day system install",          d: "We build the CRM, automations, integrations, and review the live setup with you.",  icon: Workflow,     time: "Day 3–7" },
    { n: "04", t: "Go-live & 30-day support",      d: "System turns on. You get 30 days of install support, tuning, and adjustments.",      icon: CheckCircle2, time: "Day 7+" },
  ];

  return (
    <section className="relative py-24 border-t border-[var(--border)] slate-wash">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Tag>After you book</Tag>
            <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
              What happens next.
            </h2>
          </div>
          <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
            A defined onboarding process. No mystery, no drawn-out timeline —
            seven days from kickoff to a live system.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 mb-6 max-w-3xl mx-auto">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-[var(--blue)] bg-[var(--bg-primary)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--blue-soft)] pulse-dot" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                  Step {i + 1}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--blue)] via-[var(--border-strong)] to-[var(--border-strong)]" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mt-1">
                  {s.time}
                </span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)] mb-2">
                Step {s.n}
              </div>
              <div className="font-display font-medium text-[17px] text-white tracking-tight">{s.t}</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#cta"
             className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   SECTION — CORE AUTOMATIONS WORKFLOW
   ============================================================ */
const CoreAutomations = () => {
  const nodes = [
    { x: 60,  y: 130, label: "Lead Source",     sub: "Call · form · DM",        icon: Inbox },
    { x: 230, y: 70,  label: "Instant SMS",     sub: "Automated reply",          icon: MessageSquare },
    { x: 230, y: 200, label: "CRM Entry",       sub: "Stage · value · source",   icon: Database },
    { x: 420, y: 130, label: "Follow-Up",       sub: "Multi-day sequence",       icon: GitBranch },
    { x: 610, y: 70,  label: "Estimate Sent",   sub: "Tracked · open · click",   icon: FileText },
    { x: 610, y: 200, label: "Booking",         sub: "Self-scheduled",           icon: CalendarCheck },
    { x: 800, y: 130, label: "Review Request",  sub: "Auto · post-job",          icon: ThumbsUp },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];

  return (
    <section id="automations" className="relative py-24 border-t border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--blue-glow), transparent)" }} />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block"><Tag>Core automations</Tag></div>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            The infrastructure under the hood.
          </h2>
          <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            Every inbound flows through a defined, observable workflow.
            Nothing gets missed because nothing depends on a person remembering.
          </p>
        </div>

        <div className="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur p-6 overflow-x-auto no-scrollbar">
          <div className="min-w-[920px] relative h-[300px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 920 300">
              <defs>
                <linearGradient id="edgeGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--blue)" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="var(--blue-soft)" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodes[a], B = nodes[b];
                const midX = (A.x + B.x) / 2;
                const d = `M ${A.x + 50} ${A.y} C ${midX} ${A.y}, ${midX} ${B.y}, ${B.x - 50} ${B.y}`;
                return (
                  <g key={i}>
                    <path d={d} stroke="var(--border-strong)" strokeWidth="1.5" fill="none"/>
                    <path d={d} stroke="url(#edgeGrad)" strokeWidth="1.5" fill="none"
                          className="dash-flow" opacity="0.9"/>
                    <circle r="3" fill="var(--blue-soft)">
                      <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" path={d}/>
                    </circle>
                  </g>
                );
              })}
            </svg>

            {nodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="absolute"
                  style={{ left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative w-[120px] rounded-lg border border-[var(--border-strong)] bg-[var(--elevated)] px-3 py-2.5 hover:border-[var(--blue-soft)] transition glow-card">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 bg-[var(--blue)]/15 border border-[var(--blue)]/30">
                        <Icon className="w-3.5 h-3.5 text-[var(--blue-soft)]" strokeWidth={1.8}/>
                      </div>
                      <div className="min-w-0">
                        <div className="font-body font-semibold text-[11px] text-white truncate">{n.label}</div>
                        <div className="font-mono text-[8.5px] uppercase tracking-wider text-[var(--text-4)] truncate">{n.sub}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {[
            { l: "Defined",    d: "Every path is mapped. Nothing is improvised." },
            { l: "Observable", d: "Every step logged, timestamped, attributable." },
            { l: "Adjustable", d: "Any node can be paused, replayed, or rerouted." },
          ].map((x, i) => (
            <div key={i} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">{x.l}</div>
              <div className="font-body text-[13px] text-[var(--text-3)] mt-1.5">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   SECTION — LIVE PIPELINE / DASHBOARD
   ============================================================ */
const SAMPLE_LEADS = [
  { name: "Maria G.",    src: "Google",   value: 8400,  city: "El Monte" },
  { name: "Trent W.",    src: "Facebook", value: 14200, city: "La Puente" },
  { name: "Jin H.",      src: "Referral", value: 6200,  city: "Arcadia" },
  { name: "Patricia O.", src: "GBP",      value: 22500, city: "Temple City" },
  { name: "Devon S.",    src: "Google",   value: 9800,  city: "Pasadena" },
  { name: "Karim A.",    src: "Direct",   value: 18400, city: "Covina" },
  { name: "Lila B.",     src: "Facebook", value: 5600,  city: "Whittier" },
  { name: "Marco R.",    src: "Referral", value: 31000, city: "Glendora" },
];

const STAGES = [
  { id: "new",   label: "New Lead",      color: "var(--blue-soft)" },
  { id: "qual",  label: "Qualified",     color: "var(--info)" },
  { id: "est",   label: "Estimate Sent", color: "var(--blue)" },
  { id: "sched", label: "Scheduled",     color: "var(--warning)" },
  { id: "won",   label: "Won",           color: "var(--success)" },
];

const LivePipeline = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, []);

  const distribution = STAGES.map((_, sIdx) =>
    SAMPLE_LEADS.filter((_, lIdx) => ((lIdx + tick) % STAGES.length) === sIdx)
  );

  return (
    <section id="pipeline" className="relative py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <Tag>Operational view</Tag>
            <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
              One command center.
            </h2>
          </div>
          <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
            Every inbound, every estimate, every scheduled job — visible at a glance.
            Built so an owner can run the entire operation from a phone.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden glow-card">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--elevated)]/60">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                command / pipeline
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold-soft)]">demo mode</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--border)]">
            {[
              { l: "Pipeline value",  v: "$116k",  sub: "8 active leads" },
              { l: "Response time",   v: "~12s",   sub: "automated" },
              { l: "Stages tracked",  v: "5",      sub: "configurable" },
              { l: "Touchpoints",     v: "5+",     sub: "per sequence" },
            ].map((m, i) => (
              <div key={i} className={`p-5 ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-[var(--border)]`}>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)]">{m.l}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric font-semibold text-[34px] text-white leading-none">{m.v}</span>
                </div>
                <div className="font-mono text-[10px] text-[var(--text-3)] mt-1">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-4 overflow-x-auto no-scrollbar bg-[var(--bg-secondary)]/30">
            <div className="grid grid-cols-5 gap-3 min-w-[820px]">
              {STAGES.map((stage, sIdx) => (
                <div key={stage.id}>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: stage.color }} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-2)]">
                        {stage.label}
                      </span>
                    </div>
                    <span className="font-metric font-semibold text-[14px] text-[var(--text-3)]">{distribution[sIdx].length}</span>
                  </div>
                  <div className="space-y-2 min-h-[180px]">
                    <AnimatePresence>
                      {distribution[sIdx].map((lead) => (
                        <motion.div
                          key={`${stage.id}-${lead.name}`}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className="p-3 rounded-lg border border-[var(--border)] bg-[var(--elevated)] hover:border-[var(--blue-soft)] transition cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-body font-semibold text-[12px] text-white">{lead.name}</span>
                            <span className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">
                              ${(lead.value / 1000).toFixed(1)}k
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)]">{lead.city}</span>
                            <span className="font-mono text-[9px] text-[var(--text-3)]">{lead.src}</span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] px-5 py-3 flex flex-wrap items-center justify-between gap-3 bg-[var(--elevated)]/60">
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3 text-[var(--success)]" />
                Webhook · OK
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-[var(--blue-soft)]" />
                Auto-cycling
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[var(--text-2)]" />
                Configurable stages
              </div>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
              illustrative data
            </div>
          </div>
        </div>

        <DemoNote />
      </div>
    </section>
  );
};

/* ============================================================
   SECTION — INDUSTRIES
   ============================================================ */
const INDUSTRIES = [
  { icon: Home,      t: "Roofing",      d: "Insurance · retail · repair" },
  { icon: Wrench,    t: "HVAC",         d: "Service · install · maintenance" },
  { icon: Droplets,  t: "Plumbing",     d: "Residential · emergency" },
  { icon: Trees,     t: "Landscaping",  d: "Design · maintenance · install" },
  { icon: Sun,       t: "Solar",        d: "Residential · commercial" },
  { icon: Sparkles,  t: "Med Spas",     d: "Injectables · laser · aesthetics" },
  { icon: Truck,     t: "Junk Removal", d: "Residential · commercial" },
  { icon: HardHat,   t: "Contractors",  d: "GC · remodel · specialty" },
];

const Industries = () => (
  <section id="industries" className="relative py-24 border-t border-[var(--border)] slate-wash">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <Tag>Built for</Tag>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            Operators who actually do the work.
          </h2>
        </div>
        <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
          The same operational core, configured for the rhythm of each trade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] hover:border-[var(--blue-soft)] transition overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
            <div className="relative">
              <ind.icon className="w-7 h-7 text-[var(--blue-soft)]" strokeWidth={1.5} />
              <div className="font-display font-medium text-[18px] text-white tracking-tight mt-5">{ind.t}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-4)] mt-1.5">{ind.d}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 text-center">
        <p className="font-body text-[15px] text-[var(--text-2)] max-w-3xl mx-auto leading-relaxed">
          If your business depends on inbound calls, estimates, appointments, or
          follow-up, this system can be configured around your workflow.
        </p>
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — WHY BUSINESSES LOSE REVENUE
   ============================================================ */
const WhyLoseRevenue = () => {
  const principles = [
    { p: "First in wins",        d: "The business that responds first usually wins the job. Speed is the most under-priced edge in local service." },
    { p: "Speed compounds",      d: "The faster you respond, the better your chance of booking — and that advantage compounds across every inbound." },
    { p: "Calls slip",           d: "Inbound calls regularly go unanswered during active job hours. Every miss is a quiet revenue leak." },
    { p: "Follow-up is the job", d: "Most service jobs require multiple touches to close. One reach-out isn't a follow-up system." },
  ];

  return (
    <section className="relative py-24 border-t border-[var(--border)] warm-wash">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Tag tone="gold">The bleed</Tag>
            <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
              You're not losing deals on price. You're losing them on silence.
            </h2>
            <p className="font-body text-[16px] text-[var(--text-2)] mt-8 leading-relaxed">
              The owner-operator running ops, sales, and field work simultaneously
              cannot be the response system. Calls get missed. Texts go unanswered.
              Estimates sit unopened in a thread that's already buried.
            </p>
            <p className="font-body text-[16px] text-[var(--text-2)] mt-4 leading-relaxed">
              The work isn't hard. It's constant. And constant doesn't belong to a
              person — it belongs to a system.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {principles.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-secondary)] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ background: "radial-gradient(80% 80% at 0% 0%, var(--gold-glow), transparent 60%)" }} />
                <div className="relative">
                  <div className="font-metric font-bold text-[26px] leading-[1.05] tracking-tight" style={{ color: "var(--gold-bright)" }}>
                    {s.p}
                  </div>
                  <div className="font-body text-[13px] text-[var(--text-3)] mt-3 leading-relaxed">{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   SECTION — SYSTEM SPECS
   ============================================================ */
const Spec = ({ value, suffix, label, sub, animate = true, target }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const v = useCounter(animate ? (target ?? 0) : 0, inView);
  const display = animate ? Math.round(v).toLocaleString() : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-7 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:border-[var(--border-strong)] transition relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 60%)" }} />
      <div className="relative">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">
          {label}
        </div>
        <div className="font-metric font-semibold text-[64px] text-white leading-none mt-2 tracking-tight">
          {display}
          {suffix && <span className="text-[var(--text-3)] text-[40px]">{suffix}</span>}
        </div>
        <div className="font-body text-[13.5px] text-[var(--text-3)] mt-3 leading-relaxed">{sub}</div>
      </div>
    </motion.div>
  );
};

const SystemSpecs = () => (
  <section className="relative py-24 border-t border-[var(--border)]">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-14">
        <div className="inline-block"><Tag>Built in</Tag></div>
        <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
          How the system runs.
        </h2>
        <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
          The system is designed to reduce missed opportunities, improve follow-up
          consistency, and create pipeline visibility. These are the operational
          specs that ship with every install.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Spec animate target={12}  suffix="s"   label="Automated response"   sub="Inbound replies sent in seconds, around the clock." />
        <Spec animate={false} value="24/7"        label="Always-on coverage"    sub="The system answers when you can't — nights, weekends, on the job." />
        <Spec animate target={5}   suffix="+"   label="Follow-up touches"     sub="Multi-channel sequence: SMS, email, voicemail drops." />
        <Spec animate target={8}   suffix=""    label="Pipeline stages"       sub="Every opportunity tracked from new lead to won job." />
        <Spec animate target={1}   suffix=""    label="Unified inbox"         sub="Calls, forms, DMs, and GBP routed into one operational view." />
        <Spec animate target={30}  suffix="-day" label="Install support"      sub="Tuning, adjustments, and operational help after go-live." />
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — MOBILE APP
   ============================================================ */
const MobileApp = () => {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % 3), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 border-t border-[var(--border)] overflow-hidden navy-wash">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow-2), transparent 60%)" }} />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center relative">
        <div>
          <Tag>Mobile</Tag>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            Run the operation from the truck.
          </h2>
          <p className="font-body text-[16px] text-[var(--text-2)] mt-6 leading-relaxed max-w-lg">
            The whole system in your pocket. Approve replies. Move leads. Send estimates.
            See exactly what's happening — without opening a laptop.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: Bell,          t: "Push notifications",  d: "Every new lead, every reply, every booking — in real time." },
              { icon: MessageSquare, t: "Reply from anywhere", d: "Two-way SMS without using your personal number." },
              { icon: Target,        t: "One-tap actions",     d: "Move stage, send estimate, mark won — with a thumb." },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]/60">
                <div className="w-9 h-9 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-display font-medium text-[15px] text-white tracking-tight">{b.t}</div>
                  <div className="font-body text-[13px] text-[var(--text-3)] mt-0.5">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="relative w-[300px] h-[610px] rounded-[44px] bg-[#06070d] border-[10px] border-[#13182a] shadow-[0_30px_80px_-20px_rgba(37,99,235,0.4)]">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-10" />
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-[var(--bg-primary)]">
                <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-white font-mono">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <BatteryFull className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="px-5 pt-4 pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-[16px] text-white tracking-tight">Command</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-4)] mt-0.5">
                        morning, operator
                      </div>
                    </div>
                    <div className="relative w-9 h-9 rounded-md bg-[var(--blue)] flex items-center justify-center">
                      <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
                    </div>
                  </div>
                </div>

                <div className="px-5 relative h-[480px]">
                  <AnimatePresence mode="wait">
                    {screen === 0 && (
                      <motion.div key="p0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                            <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">inbound</div>
                            <div className="font-metric font-semibold text-[22px] text-white">47</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                            <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">booked</div>
                            <div className="font-metric font-semibold text-[22px] text-[var(--blue-soft)]">23</div>
                          </div>
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">Pipeline</div>
                        <div className="space-y-1.5">
                          {SAMPLE_LEADS.slice(0, 5).map((l, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                              <div>
                                <div className="font-body font-semibold text-[11px] text-white">{l.name}</div>
                                <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">{l.city} · {l.src}</div>
                              </div>
                              <div className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">${(l.value/1000).toFixed(1)}k</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {screen === 1 && (
                      <motion.div key="p1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="p-3 rounded-lg border border-[var(--blue-soft)] bg-[var(--surface)] mb-3 glow-blue">
                          <div className="flex items-center justify-between">
                            <div className="font-display font-semibold text-[14px] text-white">Patricia O.</div>
                            <span className="font-metric text-[14px] font-semibold text-[var(--blue-soft)]">$22.5k</span>
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)] mt-0.5">
                            Temple City · GBP
                          </div>
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">Thread</div>
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-body text-[var(--text-2)]">
                            Need a roof inspection. Saw a leak this morning.
                          </div>
                          <div className="ml-6 p-2.5 rounded-lg bg-[var(--blue)]/15 border border-[var(--blue)]/40 text-[11px] font-body text-white">
                            Hi Patricia — sorry to hear. We can be out today at 2pm or tomorrow 9am. Which works?
                            <div className="font-mono text-[8px] text-[var(--blue-soft)] mt-1">automated reply</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-body text-[var(--text-2)]">
                            Today 2pm works. Address is...
                          </div>
                        </div>
                        <button className="w-full mt-3 py-2.5 rounded-lg bg-[var(--blue)] text-white font-body font-medium text-[12px]">
                          Confirm booking
                        </button>
                      </motion.div>
                    )}
                    {screen === 2 && (
                      <motion.div key="p2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">This week</div>
                        <div className="space-y-1.5">
                          {[
                            { d: "Mon", a: "9 jobs",  v: "$42k" },
                            { d: "Tue", a: "7 jobs",  v: "$31k" },
                            { d: "Wed", a: "11 jobs", v: "$58k" },
                            { d: "Thu", a: "8 jobs",  v: "$38k" },
                            { d: "Fri", a: "5 jobs",  v: "$22k" },
                          ].map((d, i) => (
                            <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                              <div className="w-8 h-8 rounded-md bg-[var(--elevated)] flex flex-col items-center justify-center">
                                <span className="font-display font-semibold text-[10px] text-white">{d.d}</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-body font-medium text-[11px] text-white">{d.a}</div>
                                <div className="font-mono text-[9px] text-[var(--text-4)] uppercase tracking-wider">scheduled</div>
                              </div>
                              <div className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">{d.v}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-3 left-5 right-5 flex justify-around p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  {[Inbox, Layers, CalendarCheck, Smartphone].map((Icon, i) => (
                    <div key={i} className={`p-2 rounded-lg ${i === screen ? "bg-[var(--blue)]/20" : ""}`}>
                      <Icon className={`w-4 h-4 ${i === screen ? "text-[var(--blue-soft)]" : "text-[var(--text-4)]"}`} strokeWidth={1.8} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 rounded-[60px] -z-10 opacity-50"
              style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
          </div>
          <DemoNote className="justify-center" />
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   LIGHT SECTION — WHO THIS IS FOR  (soft slate, NOT white)
   ============================================================ */
const WhoThisIsFor = () => (
  <section className="relative py-24 overflow-hidden" style={{ background: "var(--bg-light)" }}>
    <div className="absolute inset-0 dot-grid-light opacity-60" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
         style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 items-center">
        {/* Photo side */}
        <div className="relative">
          <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-[var(--border-light)] glow-card-light">
            <img
              src={PHOTO_TABLET_OPERATOR}
              alt="Local service business owner reviewing pipeline on phone"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* soft inner light for warmth */}
            <div className="absolute inset-0"
                 style={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.15))" }} />

            {/* small floating stat card */}
            <div className="absolute bottom-5 right-5 p-3 rounded-lg bg-white shadow-lg border border-[var(--border-light)] w-[180px]">
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-on-light-3)]">
                Owner view
              </div>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-metric font-bold text-[28px] text-[var(--text-on-light-1)] leading-none">23</span>
                <span className="font-body text-[11px] text-[var(--text-on-light-2)]">jobs booked this week</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-[var(--border-light)] overflow-hidden">
                <div className="h-full w-3/4 rounded-full" style={{ background: "var(--blue)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div>
          <TagLight tone="blue">Who this is really for</TagLight>
          <h2 className="font-display font-medium text-[clamp(32px,4.2vw,52px)] leading-[1.05] mt-5 tracking-tight"
              style={{ color: "var(--text-on-light-1)" }}>
            Not for big enterprise teams.<br />
            <span style={{ color: "var(--blue)" }}>For the owner running it all</span>.
          </h2>
          <p className="font-body text-[17px] mt-7 leading-[1.65] max-w-xl"
             style={{ color: "var(--text-on-light-2)" }}>
            If you're a roofer who answers your own phone, a plumber who texts your
            own estimates, a landscaper whose crew calendar lives in your head — this
            is the system that takes the operational layer off you.
          </p>

          <ul className="mt-7 space-y-3 max-w-xl">
            {[
              "You're the owner, the dispatcher, and the salesperson",
              "Inbound is coming in faster than you can respond",
              "Follow-up depends on you remembering",
              "You can see the leaks but don't have time to fix them",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                     style={{ background: "var(--blue)" }}>
                  <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-body text-[15px] leading-relaxed"
                      style={{ color: "var(--text-on-light-1)" }}>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#cta"
               className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_8px_30px_-5px_rgba(37,99,235,0.5)]">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#pricing"
               className="inline-flex items-center gap-2 font-body font-medium text-[14px] px-5 py-3.5 rounded-lg transition border"
               style={{ color: "var(--text-on-light-1)", borderColor: "var(--border-light)", background: "var(--surface-light)" }}>
              See What's Included
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   SECTION — PRICING
   ============================================================ */
const Pricing = () => {
  const items = [
    "CRM pipeline setup",
    "Missed call text-back",
    "Instant lead response",
    "Follow-up automation",
    "Review request automation",
    "Basic lead source tracking",
    "Mobile app setup",
    "30-day install support",
  ];

  return (
    <section id="pricing" className="relative py-24 border-t border-[var(--border)] warm-wash">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="inline-block"><Tag tone="gold">Founder offer</Tag></div>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,52px)] leading-[1.05] mt-5 text-white tracking-tight">
            One install. Everything running.
          </h2>
          <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            This is an install service — a one-time setup that configures the full
            operational system inside your business. Not custom software, not a SaaS subscription.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-4 max-w-5xl mx-auto">
          <div className="relative p-8 lg:p-10 rounded-2xl border-2 bg-gradient-to-br from-[var(--surface)] via-[var(--bg-secondary)] to-[var(--bg-primary)] overflow-hidden glow-gold"
               style={{ borderColor: "var(--gold)" }}>
            <div className="absolute -top-20 -right-20 w-72 h-72 opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--gold-bright), transparent 60%)" }} />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md border font-mono text-[9px] uppercase tracking-[0.22em]"
                      style={{
                        background: "rgba(214,168,79,0.12)",
                        borderColor: "var(--gold)",
                        color: "var(--gold-bright)"
                      }}>
                  Founding install
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)]">
                  Limited · first 5 businesses
                </span>
              </div>
              <div className="font-display font-semibold text-[26px] text-white tracking-tight mt-2">
                Starter Revenue System
              </div>
              <p className="font-body text-[14px] text-[var(--text-3)] mt-2 max-w-md">
                The full operational stack installed and live in your business within 7 days.
              </p>

              <div className="flex items-baseline gap-3 mt-6">
                <span className="font-metric font-bold text-[88px] text-white leading-none tracking-tight">$800</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                  one-time install
                </span>
              </div>
              <div className="font-body text-[13px] text-[var(--text-3)] mt-2 space-y-1">
                <div>Founding install pricing available for the first 5 businesses.</div>
                <div>Optional monthly support available after launch.</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-8">
                {items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--gold-bright)" }} />
                    <span className="font-body text-[13px] text-[var(--text-1)]">{it}</span>
                  </div>
                ))}
              </div>

              <a href="#cta"
                 className="group mt-8 inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">After install</div>
              <div className="font-display font-medium text-[18px] text-white tracking-tight mt-2">Support & operations</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">
                Optional monthly support for ongoing tuning, new automation builds, and
                operational help. Quoted per business after install.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">Not sure yet?</div>
              <div className="font-display font-medium text-[18px] text-white tracking-tight mt-2">See what's included</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">
                A 15-minute demo walks you through the system and how it would
                configure around your specific business.
              </p>
              <a href="#cta"
                 className="mt-4 inline-flex items-center gap-1.5 font-body text-[13px] text-[var(--blue-soft)] hover:text-[var(--blue-hover)] transition">
                Book a Demo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   SECTION — FINAL CTA
   ============================================================ */
const FinalCTA = () => (
  <section id="cta" className="relative py-32 border-t border-[var(--border)] overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-40" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 50%, var(--blue-glow-2), transparent 60%)" }} />
      <div className="absolute inset-x-0 top-0 h-px hairline-h" />
      <div className="absolute inset-x-0 bottom-0 h-px hairline-h" />
    </div>

    <div className="relative mx-auto max-w-5xl px-6 text-center">
      <div className="inline-block"><Tag>The close</Tag></div>
      <h2 className="font-display font-medium text-[clamp(40px,6.5vw,88px)] leading-[1.02] text-white mt-8 tracking-tight">
        Your business needs <span style={{ color: "var(--blue-soft)" }}>systems</span> —
        <br />not more chaos.
      </h2>
      <p className="font-body text-[17px] text-[var(--text-2)] mt-8 max-w-2xl mx-auto leading-relaxed">
        Stop being the response system. Stop being the follow-up system.
        Stop being the part of the business that breaks when you take a day off.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
        <a href="#pricing"
           className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-6 py-4 rounded-lg transition-all hover:shadow-[0_0_40px_-5px_var(--blue-glow-2)]">
          Book a Demo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </a>
        <a href="#pricing"
           className="inline-flex items-center gap-2 font-body font-medium text-[14px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur px-5 py-3.5 rounded-lg hover:border-[var(--blue-soft)] transition">
          See What's Included
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-[var(--text-3)] font-mono text-[10px] uppercase tracking-[0.22em]">
        <div>7-day install</div>
        <div className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
        <div>No long contracts</div>
        <div className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
        <div>Operator-owned</div>
      </div>
    </div>
  </section>
);

/* ============================================================
   FOOTER
   ============================================================ */
const Footer = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-md bg-[var(--blue)] flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
            </div>
            <div>
              <div className="font-display font-semibold text-[14px] text-white tracking-tight">Revenue Systems</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)] mt-0.5">
                For local service businesses
              </div>
            </div>
          </div>
          <p className="font-body text-[13px] text-[var(--text-3)] mt-4 max-w-sm leading-relaxed">
            Operational revenue infrastructure for local service businesses.
            Built by operators, for operators.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">System</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#system"      className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">The System</a></li>
            <li><a href="#automations" className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Automations</a></li>
            <li><a href="#pipeline"    className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Live View</a></li>
            <li><a href="#industries"  className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Industries</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">Offer</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#pricing" className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Founder Offer</a></li>
            <li><a href="#cta"     className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Book a Demo</a></li>
            <li><a href="#cta"     className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">Legal</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#" className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="font-body text-[13px] text-[var(--text-3)] hover:text-white transition">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
          © {new Date().getFullYear()} Revenue Systems · All rights reserved
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
          Built for owner-operators
        </div>
      </div>
    </div>
  </footer>
);

/* ============================================================
   ROOT
   ============================================================ */
export default function RevenueSystemsHome() {
  return (
    <div className="font-body text-white bg-[var(--bg-primary)] min-h-screen">
      <FontStyle />
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <BuiltForRealOperators />
        <TrustPain />
        <WhatItDoes />
        <HowItWorks />
        <DayInLife />
        <AfterBooking />
        <CoreAutomations />
        <LivePipeline />
        <Industries />
        <WhyLoseRevenue />
        <SystemSpecs />
        <MobileApp />
        <WhoThisIsFor />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
