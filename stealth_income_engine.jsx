import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "PHASE 01",
    title: "Intent Velocity Sprint",
    target: "$330",
    timeline: "Days 1–5",
    color: "#00FF94",
    tagline: "Tap live buyer intent. No audience needed.",
    description:
      "You don't need followers. You need to find people mid-search — already in buying mode. Intent velocity means showing up exactly when demand is peaking.",
    steps: [
      {
        title: "Pick 1 Micro-Skill You Can Deliver in <2 Hours",
        detail:
          "Examples: write a cold email sequence, fix someone's LinkedIn headline, audit a Fiverr gig, translate a document, build a Notion template, create a 1-page business plan outline. Must be something you can do tonight.",
      },
      {
        title: "Find Live Intent (Where People Are Already Asking)",
        detail:
          "Reddit: search your skill + 'help' or 'anyone' in r/entrepreneur, r/smallbusiness, r/forhire. Facebook Groups: join 3 niche groups, search 'need help with [skill]'. Twitter/X: search '[skill] anyone recommend'. Fiverr/Upwork: look at what's being requested in buyer requests.",
      },
      {
        title: "The $11–$33 Micro Offer",
        detail:
          "Price between $11–$33. Low enough to impulse-buy, high enough to signal value. DM or comment: 'I do exactly this. I can turn this around in 24hrs for $[X]. Want a quick sample?' Never pitch — just offer to solve.",
      },
      {
        title: "Stack 10–30 Micro Sales to Hit $330",
        detail:
          "10 sales @ $33 = $330. 15 sales @ $22 = $330. 30 sales @ $11 = $330. Spend 3–4 hours/day finding intent threads. Reply to 50 posts per day minimum. Conversion rate of 5–10% gets you there in 5 days.",
      },
      {
        title: "Collect Social Proof Immediately",
        detail:
          "After each delivery, screenshot the thank-you message or ask for a 1-line review. This is your only asset right now. Every testimonial is leverage for the next phase.",
      },
    ],
    tools: ["Reddit", "Facebook Groups", "Twitter/X", "Gumroad (payments)", "PayPal / bKash"],
    kpi: "50 intent touches/day → 5% conversion → $330 in 5 days",
  },
  {
    id: 2,
    label: "PHASE 02",
    title: "Micro Offer Stacking",
    target: "$330 → $1,200",
    timeline: "Days 6–14",
    color: "#FF6B35",
    tagline: "Turn 1 buyer into 3 revenue streams.",
    description:
      "Every customer who paid you once is a proof-of-concept. Now you stack offers on top of each other — each one a logical next step for the buyer.",
    steps: [
      {
        title: "Build the Offer Stack (3 Tiers)",
        detail:
          "Tier 1 (Entry) — $11–$33: The thing that got them in. Quick win, fast delivery. Tier 2 (Core) — $97–$147: The full version, systemized. Example: Cold email sequence (Tier 1: 3 emails, $22) → Full 10-email drip campaign ($97). Tier 3 (Premium) — $297–$497: Done-for-you or recurring. Example: Monthly LinkedIn content ($297/mo).",
      },
      {
        title: "Upsell After Every Delivery",
        detail:
          "After delivering Tier 1, send: 'Glad you loved it. Most people who get this also need [Tier 2 thing]. I can do that for $97. Want me to?' This alone 3x's revenue per customer. Target: 20% of Tier 1 buyers take Tier 2.",
      },
      {
        title: "Create a Simple Gumroad / Stan.store Page",
        detail:
          "List all 3 tiers. Write 3 bullet benefits each. Add your screenshots as social proof. No fancy copy — just clear outcomes. Share the link in every DM after your first delivery.",
      },
      {
        title: "Productize One Offer",
        detail:
          "Take your most popular Tier 1 delivery. Turn it into a template or repeatable system. Now you can deliver in 20 mins instead of 2 hours. This frees time to scale outreach.",
      },
      {
        title: "Referral Seeding",
        detail:
          "Tell every buyer: 'If you know anyone who needs this, I give you 20% for every referral who pays.' No platform needed — just a verbal deal. 1 in 5 buyers will refer at least 1 person.",
      },
    ],
    tools: ["Gumroad", "Stan.store", "Notion (templates)", "Loom (delivery videos)", "Google Docs"],
    kpi: "Phase 1 buyers × 3 avg. LTV = $1,200 by Day 14",
  },
  {
    id: 3,
    label: "PHASE 03",
    title: "Silent Distribution Engine",
    target: "$1,200 → $9,300",
    timeline: "Days 15–45",
    color: "#A78BFA",
    tagline: "Faceless. Automated. Compounding.",
    description:
      "You stop trading time for money. The engine finds buyers while you sleep. No face, no brand, no followers required — just systems pointing at your offer stack.",
    steps: [
      {
        title: "Build the Faceless Content Layer",
        detail:
          "Create 1 Pinterest board around your niche (e.g. 'Cold Email Templates', 'Notion Productivity'). Post 5 pins/day using Canva — each pin links to your Gumroad. Pinterest has 500M users and pins rank on Google. Zero followers needed — it's a search engine.",
      },
      {
        title: "Deploy Reddit SEO (Silent Ranking)",
        detail:
          "Find the top 10 questions in your niche on Reddit. Write detailed, helpful answers (not pitches). In your bio or a subtle comment link, drop your Gumroad. Reddit threads rank on Google page 1 within days. This is free organic traffic that lasts months.",
      },
      {
        title: "Quora Authority Drop",
        detail:
          "Answer 2–3 Quora questions per day in your niche. These rank on Google extremely fast. No face, no brand — just value + a link in your profile. Quora answers have generated 6-figure income for faceless operators.",
      },
      {
        title: "Email List (Even at 0 Subscribers)",
        detail:
          "Set up a free ConvertKit account. Add a free lead magnet (a 1-page checklist or template from your Tier 1 offer). Every Gumroad buyer gets added. Send 1 email/week with value + a soft pitch. 100 subscribers at 3% conversion = 3 sales/week = $90–$300/week passively.",
      },
      {
        title: "The $9.3k Lock-In: Recurring Stack",
        detail:
          "By Day 30, convert 5–10 buyers to monthly retainers at $297–$497/mo. 10 retainers @ $497 = $4,970/mo recurring. Add Tier 1 + Tier 2 active sales ($500–$1,000/mo). Passive digital product sales via silent distribution ($500–$800/mo). Total: $6,000–$9,300/mo by Day 45.",
      },
    ],
    tools: [
      "Pinterest (faceless)",
      "Reddit (SEO answers)",
      "Quora",
      "ConvertKit (free)",
      "Gumroad (storefront)",
      "Canva (pin graphics)",
    ],
    kpi: "10 retainers + passive traffic = $9,300/mo locked by Day 45",
  },
];

const metrics = [
  { label: "Day 5 Target", value: "$330", sub: "Micro sales sprint" },
  { label: "Day 14 Target", value: "$1.2K", sub: "Offer stacking" },
  { label: "Day 30 Target", value: "$4.9K", sub: "Retainer lock-in" },
  { label: "Day 45 Target", value: "$9.3K", sub: "Full engine running" },
];

const rules = [
  "Never pitch. Find intent, offer to solve.",
  "Every buyer is a retainer candidate. Always propose monthly.",
  "One skill, productized fast, beats 10 skills done slowly.",
  "Silent distribution beats posting daily on social. SEO > virality.",
  "Proof compounds. Screenshot every win. Use every testimonial.",
  "Don't build an audience. Build a pipeline.",
  "Revenue first. Brand later (or never).",
];

export default function StealthEngine() {
  const [activePhase, setActivePhase] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState({});

  const phase = phases[activePhase];

  const toggleStep = (phaseId, stepIdx) => {
    const key = `${phaseId}-${stepIdx}`;
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080B0F",
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      color: "#E8E8E0",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .phase-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
        .phase-btn:hover { transform: translateY(-2px); }
        .step-card { transition: all 0.2s ease; }
        .step-card:hover { transform: translateX(4px); }
        .rule-item { transition: all 0.15s ease; }
        .rule-item:hover { background: rgba(255,255,255,0.04); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        .live-dot { animation: pulse 1.5s infinite; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1A1F26",
        padding: "20px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(8,11,15,0.97)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
      }}>
        <div>
          <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.2em", marginBottom: 4 }}>
            STEALTH INCOME ENGINE — EXECUTION PROTOCOL
          </div>
          <div style={{ fontSize: 18, fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}>
            $0 → $9,300 <span style={{ color: "#00FF94" }}>//</span> 45-Day Playbook
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="live-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF94" }} />
          <span style={{ fontSize: 11, color: "#00FF94", letterSpacing: "0.15em" }}>EXECUTION READY</span>
        </div>
      </div>

      {/* Metric Bar */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderBottom: "1px solid #1A1F26",
      }}>
        {metrics.map((m, i) => (
          <div key={i} style={{
            padding: "20px 28px",
            borderRight: i < 3 ? "1px solid #1A1F26" : "none",
          }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", marginBottom: 6 }}>{m.label}</div>
            <div style={{
              fontSize: 26,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: phases[i]?.color || "#E8E8E0",
              letterSpacing: "-0.02em",
            }}>{m.value}</div>
            <div style={{ fontSize: 11, color: "#555", marginTop: 4 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Phase Tabs */}
      <div style={{
        display: "flex",
        gap: 0,
        borderBottom: "1px solid #1A1F26",
        overflowX: "auto",
      }}>
        {phases.map((p, i) => (
          <button
            key={i}
            className="phase-btn"
            onClick={() => setActivePhase(i)}
            style={{
              padding: "16px 32px",
              background: activePhase === i ? p.color : "transparent",
              color: activePhase === i ? "#080B0F" : "#555",
              fontSize: 11,
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
              letterSpacing: "0.15em",
              borderRight: "1px solid #1A1F26",
              borderBottom: activePhase === i ? `2px solid ${p.color}` : "2px solid transparent",
              whiteSpace: "nowrap",
            }}
          >
            {p.label} — {p.timeline}
          </button>
        ))}
      </div>

      {/* Phase Content */}
      <div style={{ padding: "40px 32px", maxWidth: 1100, margin: "0 auto" }}>

        {/* Phase Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 40,
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <div style={{
              fontSize: 11,
              color: phase.color,
              letterSpacing: "0.2em",
              marginBottom: 8,
              fontWeight: 600,
            }}>{phase.label} // {phase.timeline}</div>
            <h2 style={{
              fontSize: 32,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 10,
            }}>{phase.title}</h2>
            <div style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>"{phase.tagline}"</div>
          </div>
          <div style={{
            background: `${phase.color}15`,
            border: `1px solid ${phase.color}40`,
            borderRadius: 4,
            padding: "12px 24px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 10, color: phase.color, letterSpacing: "0.15em", marginBottom: 4 }}>TARGET</div>
            <div style={{
              fontSize: 28,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              color: phase.color,
            }}>{phase.target}</div>
          </div>
        </div>

        {/* Description */}
        <div style={{
          background: "#0D1117",
          border: "1px solid #1A1F26",
          borderLeft: `3px solid ${phase.color}`,
          borderRadius: 4,
          padding: "20px 24px",
          marginBottom: 36,
          fontSize: 13,
          color: "#AAA",
          lineHeight: 1.7,
        }}>
          {phase.description}
        </div>

        {/* Steps */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", marginBottom: 16 }}>EXECUTION STEPS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {phase.steps.map((step, idx) => {
              const key = `${phase.id}-${idx}`;
              const done = checkedSteps[key];
              return (
                <div
                  key={idx}
                  className="step-card"
                  onClick={() => toggleStep(phase.id, idx)}
                  style={{
                    background: done ? `${phase.color}08` : "#0D1117",
                    border: `1px solid ${done ? phase.color + "40" : "#1A1F26"}`,
                    borderRadius: 4,
                    padding: "18px 22px",
                    cursor: "pointer",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: 2,
                    border: `2px solid ${done ? phase.color : "#333"}`,
                    background: done ? phase.color : "transparent",
                    flexShrink: 0,
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#080B0F",
                    fontWeight: 700,
                  }}>{done ? "✓" : ""}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: done ? phase.color : "#E8E8E0",
                      marginBottom: 6,
                      textDecoration: done ? "line-through" : "none",
                      opacity: done ? 0.7 : 1,
                    }}>
                      <span style={{ color: phase.color, marginRight: 8, opacity: 0.6 }}>
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      {step.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>{step.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools + KPI */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }}>
          <div style={{
            background: "#0D1117",
            border: "1px solid #1A1F26",
            borderRadius: 4,
            padding: "20px 22px",
          }}>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", marginBottom: 14 }}>TOOLS NEEDED</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {phase.tools.map((t, i) => (
                <span key={i} style={{
                  fontSize: 11,
                  background: "#141A22",
                  border: "1px solid #222",
                  borderRadius: 3,
                  padding: "4px 10px",
                  color: "#AAA",
                  letterSpacing: "0.05em",
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{
            background: `${phase.color}08`,
            border: `1px solid ${phase.color}30`,
            borderRadius: 4,
            padding: "20px 22px",
          }}>
            <div style={{ fontSize: 10, color: phase.color, letterSpacing: "0.2em", marginBottom: 14 }}>KPI TARGET</div>
            <div style={{ fontSize: 13, color: "#CCC", lineHeight: 1.8 }}>{phase.kpi}</div>
          </div>
        </div>
      </div>

      {/* Iron Rules */}
      <div style={{
        borderTop: "1px solid #1A1F26",
        padding: "40px 32px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", marginBottom: 20 }}>
          IRON RULES — NON-NEGOTIABLE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {rules.map((r, i) => (
            <div key={i} className="rule-item" style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              padding: "12px 16px",
              borderRadius: 4,
            }}>
              <span style={{ color: "#00FF94", fontSize: 11, fontWeight: 700, marginTop: 1, flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1A1F26",
        padding: "20px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 10,
        color: "#333",
        letterSpacing: "0.1em",
      }}>
        <span>STEALTH ENGINE v1.0 // NO AUDIENCE. NO CAPITAL. NO EXCUSES.</span>
        <span>START: DAY 1 → END: DAY 45 → TARGET: $9,300/MO</span>
      </div>
    </div>
  );
}
