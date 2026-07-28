import { useState } from "react";
import { Home, Factory, Landmark, Hospital, AlertTriangle, Clock, FileText, CheckCircle2, Check } from "lucide-react";

const customerTypes = [
  {
    id: "residential",
    label: "Residential",
    icon: Home,
    components: [
      { name: "Solar PV Modules", standard: "10 yrs product / 25 yrs performance (≥80% output)", extended: "N/A", type: "Product & Performance" },
      { name: "Inverter", standard: "5 years", extended: "8–10 years", type: "Product" },
      { name: "Module Mounting Structure", standard: "5 years", extended: "10 years (HDG)", type: "Structural" },
      { name: "DC Cables", standard: "1 year", extended: "3 years", type: "Product" },
      { name: "AC Cables", standard: "1 year", extended: "3 years", type: "Product" },
      { name: "Lightning Protection", standard: "1 year", extended: "N/A", type: "Product" },
      { name: "Monitoring System (App)", standard: "1 year", extended: "3 years", type: "Software Support" },
    ],
  },
  {
    id: "commercial",
    label: "Commercial & Industrial",
    icon: Factory,
    components: [
      { name: "Solar PV Modules", standard: "10 yrs product / 25 yrs performance", extended: "N/A", type: "Product & Performance" },
      { name: "Inverter (String/Central)", standard: "5 years", extended: "10 years", type: "Product" },
      { name: "Module Mounting Structure", standard: "5 years", extended: "10 years (HDG)", type: "Structural" },
      { name: "SCADA / Monitoring System", standard: "1 year", extended: "3 years", type: "Hardware & Software" },
      { name: "DC/AC Cables", standard: "1 year", extended: "5 years", type: "Product" },
      { name: "Lightning/Earthing System", standard: "1 year", extended: "N/A", type: "Product" },
      { name: "Control Panel / MCB/DBs", standard: "1 year", extended: "3 years", type: "Product" },
      { name: "Battery Bank (if used)", standard: "3 years", extended: "5 years", type: "Product" },
    ],
  },
  {
    id: "government",
    label: "Government",
    icon: Landmark,
    components: [
      { name: "Solar PV Modules", standard: "10 yrs product / 25 yrs performance (MNRE compliant)", extended: "As per tender norms", type: "Product & Performance" },
      { name: "Inverter", standard: "5 years (min. as per MNRE)", extended: "As per project", type: "Product" },
      { name: "Mounting Structure", standard: "5 years HDG (MNRE compliant)", extended: "N/A", type: "Structural" },
      { name: "SCADA / Remote Monitoring", standard: "1 year", extended: "3 years", type: "Hardware & Communication" },
      { name: "Cables (DC/AC)", standard: "1 year", extended: "N/A", type: "Product" },
      { name: "LT Panels / PCC", standard: "1 year", extended: "3 years", type: "Product" },
      { name: "Earthing & Lightning", standard: "1 year", extended: "N/A", type: "Product" },
      { name: "Battery / Hybrid System", standard: "3 years", extended: "As per project", type: "Product" },
    ],
  },
  {
    id: "institutional",
    label: "Institutional",
    icon: Hospital,
    components: [
      { name: "Solar PV Modules", standard: "10 yrs product / 25 yrs performance", extended: "N/A", type: "Product & Performance" },
      { name: "Inverter", standard: "5 years", extended: "8 years", type: "Product" },
      { name: "Mounting Structure", standard: "5 years", extended: "10 years", type: "Structural" },
      { name: "SCADA / Monitoring", standard: "1 year", extended: "2–3 years", type: "Hardware & Software" },
      { name: "DC/AC Cables", standard: "1 year", extended: "3 years", type: "Product" },
      { name: "Civil Foundation", standard: "1 year", extended: "—", type: "Workmanship" },
    ],
  },
];

const claimSteps = [
  {
    step: "01",
    title: "Raise a Service Request",
    desc: "Contact us by email at info@greenchipenergy.com, through our support portal at greenchipenergy.com/support, or via your authorised channel partner. Include your name, address, invoice, commissioning date, issue description, photos/videos, and component serial numbers.",
    time: "Acknowledgment within 24 hours",
  },
  {
    step: "02",
    title: "Inspection & Technical Verification",
    desc: "A GreenChip Energy technician or authorised engineer will be assigned within 24–48 hours. An on-site or remote inspection will be scheduled based on the issue type. The technician will evaluate component faults, installation integrity, and warranty validity.",
    time: "Site visit within 3–5 working days",
  },
  {
    step: "03",
    title: "Resolution",
    desc: "Repair: Minor faults or replaceable parts will be fixed on-site. Replacement: Defective components under warranty will be replaced with equivalent or better-rated products. Refund: In rare cases where repair or replacement is not feasible, a partial or full refund will be processed.",
    time: "Resolution within 3–7 working days",
  },
];

const exclusions = [
  { title: "Force Majeure / Acts of Nature", desc: "Damage from natural disasters including lightning, floods, earthquakes, storms, fire, riots, war, or civil commotion is not covered." },
  { title: "Unauthorised Modifications", desc: "Alterations, repairs, or adjustments by persons not authorised by the Company, or installation of incompatible parts, will void warranty protection." },
  { title: "Negligence or Lack of Maintenance", desc: "Physical damage from improper use, failure to undertake routine cleaning, pest or insect intrusion, rust or corrosion due to water stagnation, or other neglect." },
  { title: "Vandalism or Accidental Damage", desc: "Human-induced damage including panel breakage, inverter tampering, cable cuts, or damage caused by vehicles, falling objects, or similar external factors." },
  { title: "Serial Number Tampering", desc: "Where serial numbers on modules, inverters, or other components are absent, altered, or illegible, or where warranty seals have been removed or compromised." },
];

export default function WarrantyPolicy() {
  const [activeTab, setActiveTab] = useState("residential");
  const [openSection, setOpenSection] = useState("coverage");

  const activeCustomer = customerTypes.find((c) => c.id === activeTab);

  return (
    <div style={{ background: "#f8f9f6", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a2e1a 0%, #155a2e 60%, #1a7a3a 100%)",
        padding: "72px 24px 56px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245,197,24,0.08) 0%, transparent 50%)",
        }} />
        <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 32, height: 3, background: "#f5c518", display: "block", borderRadius: 2 }} />
            <span style={{ color: "#f5c518", fontSize: 12, fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              After-Sales Support
            </span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
            Warranty Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, margin: 0, fontFamily: "sans-serif", maxWidth: 600, lineHeight: 1.7 }}>
            GreenChip Energy offers comprehensive warranties on solar systems supplied and/or installed by us or our authorised partners. Transparency and compliance with the Consumer Protection Act, 2019 are central to this policy.
          </p>
          {/* Stats */}
          <div style={{ marginTop: 36, display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[["25 Years", "Module Performance"], ["10 Years", "Inverter (Extended)"], ["4 Segments", "Customer Types Covered"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ color: "#f5c518", fontSize: 22, fontWeight: 700, fontFamily: "sans-serif" }}>{val}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontFamily: "sans-serif", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* ── WARRANTY PERIODS ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="01" title="Warranty Periods by Customer Type" />

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {customerTypes.map((ct) => (
              <button
                key={ct.id}
                onClick={() => setActiveTab(ct.id)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 6,
                  border: activeTab === ct.id ? "none" : "1px solid #c8ddc0",
                  background: activeTab === ct.id ? "#1a7a3a" : "#fff",
                  color: activeTab === ct.id ? "#fff" : "#3a5a3e",
                  fontFamily: "sans-serif", fontSize: 14, fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                <ct.icon size={15} strokeWidth={2} style={{display:'inline',verticalAlign:'-3px',marginRight:6}}/>{ct.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #dce8d4", overflow: "hidden" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "2fr 2fr 1.5fr 1.2fr",
              background: "#0a2e1a", padding: "12px 20px",
              gap: 8,
            }}>
              {["Component", "Standard Warranty", "Extended Warranty", "Type"].map((h) => (
                <div key={h} style={{ color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {activeCustomer.components.map((comp, i) => (
              <div key={comp.name} style={{
                display: "grid", gridTemplateColumns: "2fr 2fr 1.5fr 1.2fr",
                padding: "14px 20px", gap: 8,
                background: i % 2 === 0 ? "#fff" : "#f5faf6",
                borderTop: "1px solid #edf5eb",
              }}>
                <div style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 600, color: "#1a2e1e" }}>{comp.name}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 13.5, color: "#2d5e38" }}>{comp.standard}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 13.5, color: comp.extended === "N/A" || comp.extended === "—" ? "#aaa" : "#1a7a3a", fontWeight: comp.extended !== "N/A" && comp.extended !== "—" ? 600 : 400 }}>{comp.extended}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 12, color: "#6a8a6e", background: "#edf5eb", borderRadius: 4, padding: "2px 8px", display: "inline-flex", alignItems: "center", height: 22 }}>{comp.type}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "sans-serif", fontSize: 13, color: "#7a907e", marginTop: 12, margin: "12px 0 0" }}>
            * Warranties commence on the system commissioning date. Extended warranties must be purchased at the time of installation.
          </p>
        </div>

        {/* ── WARRANTY TERMS ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="02" title="Warranty Terms & Conditions" />

          {[
            {
              id: "coverage",
              title: "A. What's Covered",
              content: (
                <ul style={{ margin: 0, paddingLeft: 20, fontFamily: "sans-serif", fontSize: 14.5, color: "#3d4e42", lineHeight: 2 }}>
                  {["Manufacturing defects in materials or workmanship.", "Performance guarantee — modules ≥80% output after 25 years.", "Installation defects (where installed by GreenChip Energy or authorised partners).", "System functionality including monitoring connectivity.", "Hardware failures under normal use conditions."].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            },
            {
              id: "eligibility",
              title: "B. Warranty Eligibility",
              content: (
                <div style={{ fontFamily: "sans-serif", fontSize: 14.5, color: "#3d4e42", lineHeight: 1.85 }}>
                  <p style={{ margin: "0 0 12px" }}>To invoke warranty coverage, all of the following conditions must be satisfied:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                    <li><strong>System Supply and Installation:</strong> The product must have been supplied and/or installed by GreenChip Energy or its duly authorised channel partner, using Company-approved components.</li>
                    <li><strong>Design, Safety, and Commissioning:</strong> The system must have been installed per original design specifications. Commissioning must be documented including installation photographs and commissioning reports.</li>
                    <li><strong>Maintenance and Service Records:</strong> The system must be subject to AMC or O&M agreements. Complete maintenance logs must be available for Company review upon request.</li>
                  </ol>
                </div>
              ),
            },
            {
              id: "exclusions",
              title: "C. Exclusions — What is NOT Covered",
              content: (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {exclusions.map((exc) => (
                    <div key={exc.title} style={{
                      background: "#fff8f0", border: "1px solid #f5ddb8",
                      borderLeft: "3px solid #e8900a",
                      borderRadius: 6, padding: "12px 16px",
                    }}>
                      <div style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 700, color: "#7a3a00", marginBottom: 4, display:'flex', alignItems:'center', gap:7 }}><AlertTriangle size={15} strokeWidth={2}/>{exc.title}</div>
                      <div style={{ fontFamily: "sans-serif", fontSize: 13.5, color: "#5a4030", lineHeight: 1.7 }}>{exc.desc}</div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              id: "obligations",
              title: "D. Customer Obligations",
              content: (
                <ul style={{ margin: 0, paddingLeft: 20, fontFamily: "sans-serif", fontSize: 14.5, color: "#3d4e42", lineHeight: 2 }}>
                  {[
                    "Maintain basic cleanliness and safety in and around the solar system.",
                    "Ensure no physical, mechanical, or undue stress is applied to any component.",
                    "Permit and facilitate inspection, servicing, and maintenance access to authorised service personnel.",
                    "Notify GreenChip Energy of any observed fault or defect within seven (7) working days of detection.",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            },
          ].map((sec) => {
            const open = openSection === sec.id;
            return (
              <div key={sec.id} style={{
                background: "#fff", borderRadius: 10,
                border: `1px solid ${open ? "#b8d9c4" : "#dce8d4"}`,
                overflow: "hidden", marginBottom: 10,
                boxShadow: open ? "0 4px 20px rgba(26,122,58,0.08)" : "none",
              }}>
                <button
                  onClick={() => setOpenSection(open ? null : sec.id)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "18px 24px",
                    background: open ? "#f0f9f4" : "none",
                    border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: open ? "#1a7a3a" : "#1a2e1e", fontFamily: "sans-serif" }}>{sec.title}</span>
                  <span style={{ fontSize: 22, color: "#1a7a3a", transform: open ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}>+</span>
                </button>
                {open && (
                  <div style={{ padding: "4px 24px 24px", borderTop: "1px solid #eaf5ee" }}>
                    {sec.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── CLAIM PROCESS ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="03" title="Claim Process" />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {claimSteps.map((step, i) => (
              <div key={step.step} style={{ display: "flex", gap: 0, position: "relative" }}>
                {/* Line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "#1a7a3a", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "sans-serif", fontWeight: 800, fontSize: 14,
                    flexShrink: 0, zIndex: 1,
                  }}>{step.step}</div>
                  {i < claimSteps.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: "#c8e0cc", minHeight: 32, margin: "4px 0" }} />
                  )}
                </div>
                <div style={{
                  background: "#fff", borderRadius: 10,
                  border: "1px solid #dce8d4",
                  padding: "20px 24px",
                  marginBottom: i < claimSteps.length - 1 ? 8 : 0,
                  flex: 1,
                }}>
                  <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 16, color: "#1a2e1e", marginBottom: 8 }}>{step.title}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 14, color: "#4a5e4e", lineHeight: 1.8, marginBottom: 12 }}>{step.desc}</div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "#e8f4ec", borderRadius: 20,
                    padding: "4px 14px", fontFamily: "sans-serif", fontSize: 12.5,
                    color: "#1a7a3a", fontWeight: 600,
                  }}><Clock size={13} strokeWidth={2}/>{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REQUIRED DOCUMENTS ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="04" title="Required Documents for Warranty Claim" />
          <div style={{
            background: "#fff", borderRadius: 10,
            border: "1px solid #dce8d4", overflow: "hidden",
          }}>
            {[
              ["Invoice or Purchase Order Copy", "Proof of purchase and verification of warranty eligibility"],
              ["System Commissioning Report", "Confirms installation and operational date for determining warranty period"],
              ["Photos / Videos of the Issue", "Helps in initial remote diagnosis and saves time during site inspection"],
              ["Serial Numbers of Affected Components", "Enables tracking and validation against supplied records"],
              ["Ownership Details (if not original customer)", "Required in case of warranty transfer or third-party claim"],
            ].map(([doc, purpose], i) => (
              <div key={doc} style={{
                display: "grid", gridTemplateColumns: "1fr 1.5fr",
                padding: "14px 20px", gap: 16,
                background: i % 2 === 0 ? "#fff" : "#f5faf6",
                borderTop: i > 0 ? "1px solid #edf5eb" : "none",
              }}>
                <div style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 600, color: "#1a2e1e", display: "flex", alignItems: "center", gap: 8 }}>
                  <FileText size={15} strokeWidth={2} color="#1a7a3a"/> {doc}
                </div>
                <div style={{ fontFamily: "sans-serif", fontSize: 13.5, color: "#4a5e4e", lineHeight: 1.6 }}>{purpose}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WARRANTY TRANSFER ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="05" title="Warranty Transfer Policy" />
          <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #dce8d4", padding: 28 }}>
            <p style={{ fontFamily: "sans-serif", fontSize: 14.5, color: "#3d4e42", lineHeight: 1.85, margin: "0 0 20px" }}>
              GreenChip Energy permits the transfer of warranty coverage upon a change in ownership of the property or solar system. The new owner must notify GreenChip Energy in writing <strong>within 30 days</strong> of the change in ownership.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "#f0f9f4", borderRadius: 8, padding: "16px 20px", border: "1px solid #c8ddc8" }}>
                <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 14, color: "#1a7a3a", marginBottom: 10, display:'flex', alignItems:'center', gap:8 }}><CheckCircle2 size={16} strokeWidth={2}/>Required Documents</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "sans-serif", fontSize: 13.5, color: "#3d4e42", lineHeight: 2 }}>
                  <li>Original purchase invoice or commissioning certificate</li>
                  <li>Property sale deed or ownership transfer document</li>
                  <li>Completed Warranty Transfer Request Form</li>
                </ul>
              </div>
              <div style={{ background: "#fff8f0", borderRadius: 8, padding: "16px 20px", border: "1px solid #f5ddb8" }}>
                <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 14, color: "#9a5000", marginBottom: 10, display:'flex', alignItems:'center', gap:8 }}><AlertTriangle size={16} strokeWidth={2}/>Important Notes</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "sans-serif", fontSize: 13.5, color: "#5a4030", lineHeight: 2 }}>
                  <li>Not transferable if components are relocated without GreenChip Energy's consent</li>
                  <li>Warranty validity based on original commissioning date</li>
                  <li>Requests after 30 days may incur an administrative fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── POST-WARRANTY / AMC ── */}
        <div style={{ marginBottom: 56 }}>
          <SectionHeading number="06" title="Post-Warranty Support & AMC" />
          <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #dce8d4", overflow: "hidden" }}>
            <div style={{ background: "#0a2e1a", padding: "12px 20px", display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr" }}>
              {["Service Component", "Frequency", "Inclusions"].map((h) => (
                <div key={h} style={{ color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</div>
              ))}
            </div>
            {[
              ["Inverter Health Check", "Bi-Annual / Annual", "Firmware updates, error log analysis, performance review"],
              ["System Cleaning & Inspection", "Quarterly / Half-Yearly", "Panel cleaning, structure check, cable condition, junction boxes"],
              ["Preventive Maintenance", "Annual", "Electrical and mechanical checks, tightening of terminals"],
              ["SCADA / Monitoring Support", "Monthly / Quarterly", "Connectivity check, data log review, troubleshooting alerts"],
            ].map(([comp, freq, inc], i) => (
              <div key={comp} style={{
                display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr",
                padding: "14px 20px", background: i % 2 === 0 ? "#fff" : "#f5faf6",
                borderTop: "1px solid #edf5eb",
              }}>
                <div style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 600, color: "#1a2e1e" }}>{comp}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#1a7a3a", fontWeight: 600 }}>{freq}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#4a5e4e" }}>{inc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, background: "#f0f9f4", borderRadius: 8, padding: "16px 20px", border: "1px solid #c8ddc8" }}>
            <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 14, color: "#1a7a3a", marginBottom: 8 }}>AMC Benefits</div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Priority response time", "Discounted spares & upgrades", "Regular performance reports", "Free remote support & diagnostics"].map((b) => (
                <span key={b} style={{ fontFamily: "sans-serif", fontSize: 13, color: "#2d5e38", display: "flex", alignItems: "center", gap: 6 }}>
                  <Check size={14} strokeWidth={2.5} color="#1a7a3a"/> {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          background: "linear-gradient(135deg, #0a2e1a, #155a2e)",
          borderRadius: 12, padding: "36px 32px",
          color: "#fff", fontFamily: "sans-serif",
        }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600 }}>Need to File a Warranty Claim?</h3>
          <p style={{ margin: "0 0 24px", color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>
            Contact us through any of the channels below. Our team will acknowledge your request within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:info@greenchipenergy.com" style={{
              background: "#f5c518", color: "#0a2e1a",
              padding: "10px 22px", borderRadius: 6,
              textDecoration: "none", fontWeight: 700, fontSize: 14,
            }}>info@greenchipenergy.com</a>
            <a href="tel:+918464884642" style={{
              background: "rgba(255,255,255,0.1)", color: "#fff",
              padding: "10px 22px", borderRadius: 6,
              textDecoration: "none", fontWeight: 600, fontSize: 14,
              border: "1px solid rgba(255,255,255,0.2)",
            }}>+91-8464884642 / 9010434455</a>
            <a href="https://www.greenchipenergy.com/contact.html" style={{
              background: "rgba(255,255,255,0.1)", color: "#fff",
              padding: "10px 22px", borderRadius: 6,
              textDecoration: "none", fontWeight: 600, fontSize: 14,
              border: "1px solid rgba(255,255,255,0.2)",
            }}>Support Portal</a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important;gap:12px!important} div[style*="grid-template-columns: 1.5fr 1fr 2fr"]{grid-template-columns:1fr!important;gap:8px!important}}`}</style>
    </div>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
      <span style={{
        background: "#1a7a3a", color: "#fff",
        width: 36, height: 36, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "sans-serif", fontWeight: 800, fontSize: 13, flexShrink: 0,
      }}>{number}</span>
      <h2 style={{ margin: 0, fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: 700, color: "#0a2e1a" }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: "#d0e8d4" }} />
    </div>
  );
}
