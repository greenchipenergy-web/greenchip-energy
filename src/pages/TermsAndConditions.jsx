import { useState } from "react";
import { Sparkles, Leaf, Scale, Copyright, AlertTriangle, Link2, Lock, ShieldCheck, ClipboardList, PenLine, CloudLightning, Ban, FileEdit, Landmark, Calendar } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    icon: Sparkles,
    title: "Acceptance of Terms",
    content: `By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you must immediately discontinue access to and use of the Website.

These Terms are intended to operate in accordance with applicable laws of India, including the Information Technology Act, 2000, the Indian Contract Act, 1872, and, where applicable, the Digital Personal Data Protection Act, 2023.`,
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability Commitment",
    content: `GreenChip Energy affirms its commitment to sustainability, innovation, and quality across all operations. All communications, representations, and services are intended to promote the adoption of renewable energy and to advance environmental responsibility in accordance with applicable law and industry standards.

This commitment extends to every interaction on our Website, every product we supply, and every installation we undertake.`,
  },
  {
    id: "conduct",
    icon: Scale,
    title: "User Conduct & Obligations",
    content: `Users shall at all times:

• Access and utilise the Website and Company resources solely for lawful purposes and in good faith.
• Refrain from engaging in any activity that may impair, disrupt, or misuse the Website, its content, or the Company's services.
• Ensure that all information provided to the Company is accurate, complete, and not misleading.
• Comply with all applicable laws and regulations while using the Website.

Any breach of these obligations may result in the suspension or termination of your access to the Website.`,
  },
  {
    id: "ip",
    icon: Copyright,
    title: "Intellectual Property",
    content: `All rights, title, and interest in and to the Website — including its text, graphics, designs, logos, trademarks, service marks, trade names, software, compilations, layouts, and other content — are owned by or licensed to the Company and are protected under applicable intellectual property laws of India.

Subject to these Terms, the Company grants a limited, non-exclusive, non-transferable, and revocable licence to access and use the Website for personal and lawful non-commercial purposes only.

No user shall copy, reproduce, republish, upload, transmit, adapt, translate, distribute, display, sell, license, reverse engineer, or create derivative works from any part of the Website without the Company's prior written consent.`,
  },
  {
    id: "disclaimers",
    icon: AlertTriangle,
    title: "Disclaimers",
    content: `The Website and all content, materials, and information made available through it are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, the Company disclaims all representations and warranties, whether express, implied, statutory, or otherwise, including any warranties of accuracy, completeness, reliability, merchantability, or fitness for a particular purpose.

Information on the Website is intended for general informational purposes only and does not constitute technical, financial, commercial, or legal advice. Users should obtain independent professional advice before acting on any information available through the Website.`,
  },
  {
    id: "third-party",
    icon: Link2,
    title: "Third-Party Links & Resources",
    content: `The Website may contain links to third-party websites, platforms, or other internet resources for user convenience or informational purposes. The inclusion of any such link does not constitute or imply the Company's endorsement, sponsorship, approval, or affiliation with such third-party resources.

The Company does not control and is not responsible for the availability, content, policies, security, or practices of any third-party websites or resources. Access to and use of such websites shall be entirely at the user's own risk.`,
  },
  {
    id: "data",
    icon: Lock,
    title: "Confidentiality & Data Protection",
    content: `The Company shall process personal information in accordance with its Privacy Policy and applicable data protection laws. Users acknowledge that data may be collected, stored, and processed for legitimate business purposes, including communication, service improvement, and compliance with legal obligations.

For full details on how we handle your personal data, please refer to our Privacy Policy available on the Website.`,
  },
  {
    id: "liability",
    icon: ShieldCheck,
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, the Company, its directors, officers, employees, agents, affiliates, licensors, and service providers shall not be liable for any indirect, incidental, special, punitive, exemplary, or consequential loss or damage — including loss of profits, revenue, goodwill, data, business opportunity, or anticipated savings — arising out of or in connection with access to or use of the Website, even if advised of the possibility of such loss.

Nothing in these Terms shall exclude or limit liability to the extent such exclusion or limitation is prohibited under applicable law.`,
  },
  {
    id: "indemnification",
    icon: ClipboardList,
    title: "Indemnification",
    content: `You agree to defend, indemnify, and hold harmless the Company, its promoters, directors, officers, employees, advisors, agents, affiliates, licensors, and service providers from and against any and all claims, actions, proceedings, liabilities, losses, damages, penalties, costs, and expenses — including reasonable legal fees — arising out of or relating to:

(a) your breach of these Terms;
(b) misuse of the Website or its content;
(c) violation of any applicable law, regulation, or third-party right; or
(d) any information or material submitted, transmitted, or shared by you through or in connection with the Website.`,
  },
  {
    id: "corrections",
    icon: PenLine,
    title: "Corrections",
    content: `The Company reserves the right, at any time and without prior notice, to correct any typographical, clerical, technical, pricing, descriptive, or other errors, inaccuracies, or omissions appearing on the Website or in any content or material made available through it.

The Company does not undertake any obligation to update, amend, or clarify information except as may be required under applicable law.`,
  },
  {
    id: "force-majeure",
    icon: CloudLightning,
    title: "Force Majeure",
    content: `The Company shall not be liable for any delay, interruption, or failure in performance resulting from causes beyond its reasonable control, including acts of God, natural disasters, war, civil disturbance, labour disputes, governmental actions, power failures, telecommunications failures, or cyber incidents.

In such circumstances, the Company's obligations shall be suspended for the duration of the event of force majeure.`,
  },
  {
    id: "termination",
    icon: Ban,
    title: "Termination",
    content: `The Company reserves the right to suspend, restrict, or terminate access to the Website — in whole or in part — at its sole discretion and without prior notice, where a user is found to be in breach of these Terms or where such action is considered necessary to protect the Company's lawful interests.

Termination shall not affect any rights or liabilities accrued prior to the date of termination.`,
  },
  {
    id: "amendments",
    icon: FileEdit,
    title: "Right to Revise or Amend",
    content: `The Company reserves the right, at its sole discretion, to amend, modify, or update these Terms from time to time. Any material changes may be notified through the Website or by other appropriate means.

Continued use of the Website following any such changes shall constitute your acceptance of the revised Terms. We recommend reviewing these Terms periodically.`,
  },
  {
    id: "governing-law",
    icon: Landmark,
    title: "Governing Law & Dispute Resolution",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Subject to the arbitration provisions below, the courts at Hyderabad, Telangana shall have jurisdiction in relation to matters arising out of these Terms.

Any dispute, controversy, or claim arising out of or in connection with these Terms shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Hyderabad, Telangana. The arbitration shall be conducted by a sole arbitrator appointed by the Company, in the English language. The arbitral award shall be final and binding on the parties.`,
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);
  const [allOpen, setAllOpen] = useState(false);

  const handleToggleAll = () => {
    if (allOpen) {
      setActiveSection(null);
      setAllOpen(false);
    } else {
      setAllOpen(true);
    }
  };

  const isOpen = (id) => allOpen || activeSection === id;

  return (
    <div style={{ background: "#f8f9f6", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #155a2e 60%, #1a7a3a 100%)",
        padding: "72px 24px 56px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(245,197,24,0.06) 0%, transparent 50%)",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 32, height: 3, background: "#f5c518", display: "block", borderRadius: 2 }} />
            <span style={{ color: "#f5c518", fontSize: 12, fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Legal &amp; Compliance
            </span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, margin: 0, fontFamily: "sans-serif", maxWidth: 580, lineHeight: 1.7 }}>
            These Terms form a legally binding agreement between GreenChip Emerging Projects Private Limited (operating as GreenChip Energy) and you regarding access to and use of our Website and services.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "sans-serif", display:'inline-flex', alignItems:'center', gap:6 }}>
              <Calendar size={13} strokeWidth={2}/>Effective: April 1, 2025
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "sans-serif", display:'inline-flex', alignItems:'center', gap:6 }}>
              <Landmark size={13} strokeWidth={2}/>Jurisdiction: Hyderabad, Telangana
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .legal-row:hover{transform:translateY(-2px);border-color:#b8d9c4!important}
        .legal-row:hover .legal-ico{transform:scale(1.12)}
        .legal-ico{transition:transform .3s cubic-bezier(.16,1,.3,1)}
      `}</style>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <p style={{ margin: 0, fontFamily: "sans-serif", fontSize: 14, color: "#5a6e5e" }}>
            {sections.length} sections · Last updated April 2025
          </p>
          <button
            onClick={handleToggleAll}
            style={{
              background: "#1a7a3a", color: "#fff",
              border: "none", padding: "9px 20px",
              borderRadius: 6, cursor: "pointer",
              fontFamily: "sans-serif", fontSize: 13, fontWeight: 600,
            }}
          >
            {allOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Sections Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sections.map((section, i) => {
            const open = isOpen(section.id);
            return (
              <div key={section.id} className="legal-row" style={{
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${open ? "#b8d9c4" : "#dce8d4"}`,
                overflow: "hidden",
                transition: "border-color .3s ease, box-shadow .3s ease, transform .3s cubic-bezier(.16,1,.3,1)",
                boxShadow: open ? "0 16px 32px -14px rgba(26,122,58,0.28)" : "0 1px 3px rgba(20,83,45,.05)",
              }}>
                <button
                  onClick={() => {
                    if (allOpen) { setAllOpen(false); setActiveSection(section.id === activeSection ? null : section.id); }
                    else { setActiveSection(open ? null : section.id); }
                  }}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "18px 24px", background: open ? "#f0f9f4" : "none",
                    border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                    transition: "background .25s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span className="legal-ico" style={{ width: 28, display:'flex', justifyContent:'center', flexShrink: 0 }}><section.icon size={18} strokeWidth={1.75} color="#1a7a3a"/></span>
                    <div>
                      <span style={{ fontSize: 11, color: "#8aaa8e", fontFamily: "sans-serif", letterSpacing: "0.08em" }}>
                        CLAUSE {String(i + 1).padStart(2, "0")}
                      </span>
                      <div style={{ fontSize: 15.5, fontWeight: 600, color: open ? "#1a7a3a" : "#1a2e1e", fontFamily: "sans-serif", marginTop: 1 }}>
                        {section.title}
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: 22, color: "#1a7a3a", lineHeight: 1,
                    transform: open ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .3s cubic-bezier(.16,1,.3,1)", flexShrink: 0,
                  }}>+</span>
                </button>
                {open && (
                  <div style={{
                    padding: "20px 24px 24px 66px",
                    fontFamily: "sans-serif",
                    fontSize: 14.5, color: "#3d4e42",
                    lineHeight: 1.85, whiteSpace: "pre-line",
                    borderTop: "1px solid #eaf5ee",
                  }}>
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact strip */}
        <div style={{
          marginTop: 56,
          background: "linear-gradient(135deg, #0a2e1a, #155a2e)",
          borderRadius: 12, padding: "36px 32px",
          color: "#fff", fontFamily: "sans-serif",
        }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600 }}>Questions About These Terms?</h3>
          <p style={{ margin: "0 0 24px", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>
            For any questions, concerns, or notices relating to these Terms, contact us at the details below.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href="mailto:info@greenchipenergy.com" style={{
              background: "#f5c518", color: "#0a2e1a",
              padding: "10px 22px", borderRadius: 6,
              textDecoration: "none", fontWeight: 700, fontSize: 14,
            }}>info@greenchipenergy.com</a>
            <a href="https://www.greenchipenergy.com" style={{
              background: "rgba(255,255,255,0.1)", color: "#fff",
              padding: "10px 22px", borderRadius: 6,
              textDecoration: "none", fontWeight: 600, fontSize: 14,
              border: "1px solid rgba(255,255,255,0.2)",
            }}>greenchipenergy.com</a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important;gap:12px!important}}`}</style>
    </div>
  );
}
