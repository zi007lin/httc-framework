import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "rules", label: "House Rules" },
  { id: "queue", label: "Queue System" },
  { id: "stewards", label: "Stewards" },
  { id: "escalation", label: "Escalation" },
  { id: "sign", label: "Posted Sign" },
];

export default function HTTCFinal() {
  const [tab, setTab] = useState("overview");

  const G = "#1B6B4A";
  const GLight = "#E8F5EE";
  const R = "#C23B22";
  const RLight = "#FDF0EE";
  const Y = "#A68B1B";
  const YLight = "#FFF9E6";
  const Slate = "#2D3142";
  const Sub = "#5A5F72";

  const Card = ({ children, border, bg, style }) => (
    <div style={{
      background: bg || "#FFF", borderRadius: "10px",
      border: border ? `2px solid ${border}` : "1px solid #E6E8ED",
      padding: "20px 22px", ...style,
    }}>{children}</div>
  );

  const Badge = ({ children, color = G }) => (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: "20px",
      background: color + "14", color, fontSize: "11px", fontWeight: 700,
      letterSpacing: "0.03em",
    }}>{children}</span>
  );

  const Do = ({ children }) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
      <span style={{ color: G, fontWeight: 800, fontSize: "15px", lineHeight: "22px", flexShrink: 0 }}>✓</span>
      <span style={{ fontSize: "14px", color: "#333", lineHeight: "22px" }}>{children}</span>
    </div>
  );

  const Dont = ({ children }) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
      <span style={{ color: R, fontWeight: 800, fontSize: "15px", lineHeight: "22px", flexShrink: 0 }}>✕</span>
      <span style={{ fontSize: "14px", color: "#333", lineHeight: "22px" }}>{children}</span>
    </div>
  );

  return (
    <div style={{
      fontFamily: "'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#F4F5F7", minHeight: "100vh", color: Slate,
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${Slate} 0%, #3D4260 100%)`,
        padding: "28px 28px 22px", position: "relative",
      }}>
        {/* Subtle ping pong ball decoration */}
        <div style={{
          position: "absolute", top: "16px", right: "24px", width: "44px", height: "44px",
          borderRadius: "50%", border: "2px solid #FFFFFF18",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", opacity: 0.6,
        }}>🏓</div>

        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
            color: "#8B92AB", marginBottom: "6px", textTransform: "uppercase",
          }}>HESTER TABLE TENNIS CLUB</div>
          <h1 style={{
            fontSize: "24px", fontWeight: 800, color: "#FFF",
            margin: "0 0 6px", lineHeight: 1.25, letterSpacing: "-0.01em",
          }}>Governance, Stewardship &<br />Fair-Play Framework</h1>
          <div style={{ fontSize: "13px", color: "#8B92AB", marginTop: "8px" }}>
            100 Hester Street, NY 10002 · Inside MS 131 · Beacon Program
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        background: "#FFF", borderBottom: "1px solid #E6E8ED",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{
          maxWidth: "680px", margin: "0 auto", padding: "0 28px",
          display: "flex", gap: "0", overflowX: "auto",
        }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "13px 16px", border: "none", cursor: "pointer",
              background: "transparent", fontSize: "13px", fontWeight: 600,
              color: tab === t.id ? Slate : "#999",
              borderBottom: tab === t.id ? `2px solid ${G}` : "2px solid transparent",
              whiteSpace: "nowrap", transition: "all 0.15s",
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "24px 28px 64px" }}>

        {/* ===== OVERVIEW ===== */}
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>What This Is</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: Sub, margin: 0 }}>
              A clear, practical framework for how table tennis operates at HTTC. Designed to work <strong>as-is</strong> within our free, public, Beacon-operated space.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { icon: "⚖️", title: "Fair Access", desc: "No one monopolizes a table when others are waiting" },
                { icon: "👁", title: "Transparency", desc: "Queues and rotations are visible and simple" },
                { icon: "🤝", title: "Low Friction", desc: "No apps, accounts, or bureaucracy required" },
                { icon: "🏫", title: "Public First", desc: "Rules help more people play, not exclude" },
              ].map((p, i) => (
                <Card key={i} style={{ padding: "16px 18px" }}>
                  <div style={{ fontSize: "18px", marginBottom: "6px" }}>{p.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: Slate, marginBottom: "3px" }}>{p.title}</div>
                  <div style={{ fontSize: "13px", color: Sub, lineHeight: 1.5 }}>{p.desc}</div>
                </Card>
              ))}
            </div>

            <Card bg={GLight} border={G + "30"}>
              <div style={{ fontWeight: 700, fontSize: "14px", color: G, marginBottom: "6px" }}>
                Our Role: Stewardship
              </div>
              <p style={{ fontSize: "14px", color: "#2D5A3F", margin: 0, lineHeight: 1.7 }}>
                HTTC operates inside a public school building during Beacon hours. The program is <strong>free and open to the public</strong>. Access is provided through the Chinatown YMCA Beacon Program. HTTC does not charge fees, issue memberships, or control entry. Our role is helping organize play so <strong>everyone gets a turn</strong>.
              </p>
            </Card>
          </div>
        )}

        {/* ===== HOUSE RULES ===== */}
        {tab === "rules" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>House Rules</h2>
            <p style={{ fontSize: "14px", color: Sub, margin: 0, lineHeight: 1.6 }}>
              Apply to all tables during Beacon hours. Simple, visible, and designed to keep play fair.
            </p>

            {[
              {
                title: "⏱ Time & Rotation",
                rules: [
                  "When others are waiting, a 20-minute rotation applies",
                  "Players rotate off the table after the time limit or by mutual agreement",
                ],
              },
              {
                title: "🪑 Equipment Care",
                rules: [
                  "No sitting, leaning, or storing items on tables",
                  "Do not move tables without staff approval",
                ],
              },
              {
                title: "🤝 Conduct",
                rules: [
                  "No gambling, fighting, or threatening behavior",
                  "Keep noise appropriate for a school setting",
                  "No amplified sound without permission",
                ],
              },
            ].map((group, i) => (
              <Card key={i}>
                <div style={{ fontWeight: 700, fontSize: "15px", color: Slate, marginBottom: "12px" }}>{group.title}</div>
                {group.rules.map((r, j) => (
                  <div key={j} style={{
                    display: "flex", gap: "10px", alignItems: "flex-start",
                    marginBottom: j < group.rules.length - 1 ? "8px" : 0,
                  }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: G, marginTop: "8px", flexShrink: 0,
                    }} />
                    <span style={{ fontSize: "14px", color: "#333", lineHeight: "22px" }}>{r}</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        )}

        {/* ===== QUEUE SYSTEM ===== */}
        {tab === "queue" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>Queue System</h2>
            <p style={{ fontSize: "14px", color: Sub, margin: 0, lineHeight: 1.6 }}>
              Physical, simple, no-tech. A visible queue determines who plays next.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <Card border={G + "40"} bg={GLight}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: G, marginBottom: "8px" }}>
                  Option A: Paddle Under Table
                </div>
                <p style={{ fontSize: "13px", color: "#2D5A3F", margin: 0, lineHeight: 1.6 }}>
                  Place your paddle under the table to claim your spot in line. Order of paddles = order of play.
                </p>
              </Card>
              <Card border={G + "40"} bg={GLight}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: G, marginBottom: "8px" }}>
                  Option B: Name Magnets ✨
                </div>
                <p style={{ fontSize: "13px", color: "#2D5A3F", margin: 0, lineHeight: 1.6 }}>
                  Dry-erase magnetic labels on the table edge. Write your name = your position in line. Wiped clean each night.
                </p>
              </Card>
            </div>

            <Card bg={YLight} border={Y + "30"}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>💡</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: Y, marginBottom: "4px" }}>
                    Magnetic Labels (Wayne's Idea)
                  </div>
                  <p style={{ fontSize: "13px", color: "#6B5D1F", margin: 0, lineHeight: 1.6 }}>
                    Colored border magnetic dry-erase labels (e.g., Availey 48-pack, 3.2 × 1.2 in). Place them on the table edge in order of who's next. People write their names for the night; they get wiped down for the next session. Fast, nimble, and reusable.
                  </p>
                  <div style={{
                    marginTop: "10px", padding: "8px 12px", background: "#FFF",
                    borderRadius: "6px", border: "1px solid #E8E0B0",
                    fontSize: "12px", color: Sub,
                  }}>
                    <strong>Product:</strong> Availey 48-Piece Magnetic Dry Erase Labels — ~$10 on Amazon
                  </div>
                </div>
              </div>
            </Card>

            {/* Visual mockup of how magnets work on a table */}
            <Card>
              <div style={{ fontWeight: 700, fontSize: "14px", color: Slate, marginBottom: "12px" }}>How It Looks in Practice</div>
              <div style={{
                background: "#1B5E3B", borderRadius: "8px", padding: "16px",
                position: "relative", minHeight: "90px",
              }}>
                {/* Table surface */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  width: "2px", height: "70%", background: "#FFF", opacity: 0.6,
                }} />
                <div style={{ fontSize: "10px", color: "#FFFFFF80", textAlign: "center", marginBottom: "10px", letterSpacing: "0.05em" }}>
                  TABLE EDGE (magnets placed here →)
                </div>
                {/* Magnets on edge */}
                <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                  {["Wayne", "Joshua", "Liza", "Mitch"].map((name, i) => (
                    <div key={i} style={{
                      background: "#FFF", borderRadius: "4px", padding: "6px 14px",
                      border: `2px solid ${["#E74C3C", "#3498DB", "#F39C12", "#2ECC71"][i]}`,
                      fontSize: "13px", fontWeight: 700, color: Slate,
                      fontFamily: "'Marker Felt', 'Comic Sans MS', cursive",
                      boxShadow: "0 2px 4px #00000030",
                      transform: `rotate(${[-1, 0.5, -0.5, 1][i]}deg)`,
                    }}>
                      {i + 1}. {name}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "10px", color: "#FFFFFF60", textAlign: "center", marginTop: "10px" }}>
                  ← Next up plays when current game ends →
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ===== STEWARDS ===== */}
        {tab === "stewards" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>What Stewards Do (and Don't Do)</h2>
            <p style={{ fontSize: "14px", color: Sub, margin: 0, lineHeight: 1.6 }}>
              Stewards facilitate play — they do not police people.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <Card bg={GLight} border={G + "30"}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: G, marginBottom: "12px" }}>
                  Stewards DO ✓
                </div>
                <Do>Help explain the rotation and queue</Do>
                <Do>Encourage fair sharing of tables</Do>
                <Do>Reset a table if rules aren't followed</Do>
                <Do>Ask YMCA staff for help when needed</Do>
              </Card>
              <Card bg={RLight} border={R + "30"}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: R, marginBottom: "12px" }}>
                  Stewards DO NOT ✕
                </div>
                <Dont>Ban or suspend players</Dont>
                <Dont>Charge fees</Dont>
                <Dont>Claim ownership of tables</Dont>
                <Dont>Argue or escalate conflicts</Dont>
              </Card>
            </div>

            <Card>
              <div style={{ fontWeight: 700, fontSize: "15px", color: Slate, marginBottom: "14px" }}>
                💬 Steward Script
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ fontWeight: 700, fontSize: "12px", color: G, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Helpful Phrases
                </div>
                {[
                  '"We\'re using a 20-minute rotation so everyone gets a turn."',
                  '"The queue is shown here — you\'re next after this game."',
                  '"Let\'s reset the table and keep it moving."',
                  '"If there\'s an issue, I can ask YMCA staff to help."',
                ].map((phrase, i) => (
                  <div key={i} style={{
                    padding: "8px 12px", background: GLight, borderRadius: "6px",
                    fontSize: "13px", color: "#2D5A3F", marginBottom: "6px",
                    lineHeight: 1.5, fontStyle: "italic",
                  }}>{phrase}</div>
                ))}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "12px", color: R, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Avoid Saying
                </div>
                {[
                  '"You\'re not allowed here."',
                  '"This is members-only."',
                  '"I\'m in charge — you have to leave."',
                  '"You\'re banned."',
                ].map((phrase, i) => (
                  <div key={i} style={{
                    padding: "8px 12px", background: RLight, borderRadius: "6px",
                    fontSize: "13px", color: "#8B2E1E", marginBottom: "6px",
                    lineHeight: 1.5, fontStyle: "italic",
                    textDecoration: "line-through", textDecorationColor: R + "50",
                  }}>{phrase}</div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* ===== ESCALATION ===== */}
        {tab === "escalation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>Quiet Escalation Path</h2>
            <p style={{ fontSize: "14px", color: Sub, margin: 0, lineHeight: 1.6 }}>
              Four steps. Stay calm, stay helpful. Safety or aggressive behavior → skip to Step 4 immediately.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  step: "1", title: "Reminder",
                  desc: "Point to the posted rules or queue. Friendly, factual, brief.",
                  color: G, bg: GLight,
                },
                {
                  step: "2", title: "Reset",
                  desc: "Dissolve the game and rotate players. Keep it matter-of-fact.",
                  color: Y, bg: YLight,
                },
                {
                  step: "3", title: "Step Back",
                  desc: "Do not argue if disagreement continues. Disengage politely.",
                  color: "#D97706", bg: "#FFF7ED",
                },
                {
                  step: "4", title: "Escalate",
                  desc: "Contact on-site YMCA staff for assistance. Let them handle it.",
                  color: R, bg: RLight,
                },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "0" }}>
                  {/* Step number + connector */}
                  <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    width: "48px", flexShrink: 0,
                  }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: s.color, color: "#FFF", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      fontSize: "15px", fontWeight: 800,
                    }}>{s.step}</div>
                    {i < 3 && (
                      <div style={{ width: "2px", height: "20px", background: "#DDD" }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{
                    flex: 1, background: s.bg, borderRadius: "8px",
                    padding: "12px 16px", marginBottom: i < 3 ? "8px" : 0,
                    border: `1px solid ${s.color}20`,
                  }}>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: s.color, marginBottom: "2px" }}>{s.title}</div>
                    <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Card bg={RLight} border={R + "30"}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "16px" }}>⚠️</span>
                <p style={{ fontSize: "14px", color: "#8B2E1E", margin: 0, lineHeight: 1.6 }}>
                  <strong>Safety or aggressive behavior should be escalated immediately</strong> — go straight to Step 4. Do not attempt to manage threatening situations yourself.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* ===== POSTED SIGN ===== */}
        {tab === "sign" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, margin: 0, color: Slate }}>One-Page Rules of Conduct</h2>
            <p style={{ fontSize: "14px", color: Sub, margin: 0, lineHeight: 1.6 }}>
              For printing and posting at the tables. Clean, readable, authoritative.
            </p>

            {/* The printable sign */}
            <div style={{
              background: "#FFFFFF", border: "3px solid " + Slate,
              borderRadius: "12px", padding: "36px 40px",
              maxWidth: "520px", margin: "0 auto", width: "100%",
              boxShadow: "0 4px 20px #00000012",
            }}>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div style={{ fontSize: "28px", marginBottom: "4px" }}>🏓</div>
                <h3 style={{
                  fontSize: "22px", fontWeight: 800, color: Slate,
                  margin: "0 0 4px", letterSpacing: "-0.01em",
                }}>Hester Table Tennis</h3>
                <div style={{ fontSize: "14px", fontWeight: 700, color: G }}>
                  Rules of Conduct
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "2px", background: Slate, marginBottom: "20px" }} />

              {/* Rules */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: "🌐", text: "Free and open to the public during Beacon hours" },
                  { icon: "⏱", text: "20-minute rotation when others are waiting" },
                  { icon: "🧲", text: "Use visible queue (paddle or name magnet)" },
                  { icon: "🚫", text: "No sitting or leaning on tables" },
                  { icon: "⚖️", text: "No gambling, fighting, or disorderly conduct" },
                  { icon: "🔇", text: "Keep noise appropriate for a school environment" },
                ].map((rule, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "12px", alignItems: "center",
                    fontSize: "15px", color: Slate, lineHeight: 1.4,
                  }}>
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>{rule.icon}</span>
                    <span style={{ fontWeight: 500 }}>{rule.text}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                marginTop: "24px", paddingTop: "16px",
                borderTop: "1px solid #E0E0E0",
                textAlign: "center",
              }}>
                <p style={{
                  fontSize: "12px", color: "#999", margin: "0 0 6px", lineHeight: 1.5,
                }}>
                  Failure to follow these rules may result in table reset or staff involvement.
                </p>
                <p style={{
                  fontSize: "12px", color: Sub, margin: 0, fontWeight: 600,
                }}>
                  Operated with support from the<br />Chinatown YMCA Beacon Program
                </p>
              </div>
            </div>

            <div style={{
              textAlign: "center", fontSize: "12px", color: "#999",
              fontStyle: "italic", marginTop: "4px",
            }}>
              Recommended: Print on 8.5 × 11" card stock. Laminate. Post at each table.
            </div>
          </div>
        )}

        {/* Closing — always visible at bottom */}
        <div style={{
          marginTop: "32px", padding: "20px 24px",
          background: `linear-gradient(135deg, ${Slate} 0%, #3D4260 100%)`,
          borderRadius: "10px", textAlign: "center",
        }}>
          <p style={{
            fontSize: "15px", color: "#CCD0DE",
            margin: "0 0 4px", lineHeight: 1.6,
          }}>
            HTTC exists to bring people together through table tennis.
          </p>
          <p style={{
            fontSize: "14px", color: "#8B92AB", margin: 0, lineHeight: 1.6,
          }}>
            Keep rules simple, visible, and respectful. Focus on stewardship, not authority.
          </p>
          <p style={{
            fontSize: "16px", margin: "10px 0 0", color: "#FFF", fontWeight: 700,
          }}>
            Happy playing. 🏓
          </p>
        </div>
      </div>
    </div>
  );
}
