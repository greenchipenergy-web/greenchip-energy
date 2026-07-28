import { useState } from "react";
import { Calendar, Landmark } from "lucide-react";

const sections = [
  {
    id: "definitions",
    title: "Definitions & Interpretation",
    content: `In this Privacy Policy, unless the context otherwise requires, the following terms carry the meanings assigned below.

"Data Fiduciary" refers to the Company, which determines the purpose and means of processing your Personal Data. "Data Principal" refers to the individual to whom the Personal Data relates — in this case, you, the User. "Personal Data" refers to any data about an individual who is identifiable by or in relation to such data. "Personal Data Breach" means any unauthorised processing or accidental disclosure, acquisition, alteration, or destruction of Personal Data. "Processing" refers to an automated operation or set of operations performed on Personal Data, such as collection, recording, organisation, storage, retrieval, use, disclosure, or erasure. "Sensitive Personal Data" refers to categories of data requiring a higher degree of protection under applicable Indian law.

Words importing the singular shall include the plural and vice versa. References to any statute or rule shall include any amendments or subsequent regulations, including the DPDP Act and DPDP Rules, 2025.`,
  },
  {
    id: "scope",
    title: "Commitment to Privacy & Scope",
    content: `GreenChip Energy safeguards the privacy and security of information provided by individuals who access or use our website as a Data Fiduciary under the Digital Personal Data Protection Act, 2023 ("DPDP Act"). This Policy governs our processing of Personal Data collected from Indian residents.

By using the Website, you consent to this Policy after reviewing it. We process Personal Data only for lawful purposes with your consent where required, adhering to data minimisation, purpose limitation, accuracy, storage limitation, and security principles under the DPDP Act and Rules.`,
  },
  {
    id: "collection",
    title: "Personal Data We Collect",
    content: `We collect only the personal data necessary to provide services, improve experiences, and comply with the law. This includes:

• Personal Data: Name, email address, phone number, and postal address.
• Technical Data: IP address, browser type, operating system, and device identifiers.
• Usage Data: Pages visited, visit duration, and interactions.
• Communication Data: Information from contact forms, support requests, or emails.
• Account Data: Username and password for registered accounts.
• Device and Geolocation Data: Device details and location via GPS, IP, or cell towers.

We do not collect Sensitive Personal Data such as financial details without explicit consent. Some data is mandatory for registration or services; others are optional. We disclose the visibility and use of all collected data at the time of collection.`,
  },
  {
    id: "how-collect",
    title: "How We Collect Personal Data",
    content: `We collect Personal Data through the following channels in accordance with the DPDP Act, 2023, and the Information Technology Act, 2000:

Direct Collection: Mandatory registration data is collected to verify identity, facilitate account access, and prevent fraudulent activity. Additional information is collected only upon the User's express, informed consent.

Automated Collection: We use web server logs and tracking technologies such as cookies to collect technical data including IP addresses and device identifiers. This data is processed in a de-identified format.

Third-Party Integration: With your authorisation, we may access information from third-party platforms in accordance with your privacy settings on those platforms.

Location and Device Analytics: We may collect and analyse geolocation data and device-level usage metrics only where such processing is necessary and consented to.`,
  },
  {
    id: "use",
    title: "How We Use Personal Data",
    content: `We process Personal Data for the following lawful purposes in accordance with the DPDP Act, 2023:

Service Provision and Improvement: To facilitate delivery of our products and services, fulfil user requests, and develop new offerings through internal research and data analytics.

Customer Support and Communication: To manage enquiries, disputes, and complaints, and to provide administrative updates or promotional content consistent with User preferences.

Security and Integrity: To safeguard the Website and our Users, conduct technical debugging, and ensure compliance with security protocols.

Personalisation: To enhance User experience by recognising repeat visitors, retaining personal preferences, and delivering interest-based content.

Legal and Regulatory Compliance: To defend against legal claims, respond to investigations, and fulfil statutory obligations.

Aggregated Data: The Company may aggregate or de-identify Personal Data for lawful business purposes including product development and industry analysis.`,
  },
  {
    id: "sharing",
    title: "Sharing of Personal Data",
    content: `We do not rent, sell, or share your Personal Data except in the following circumstances:

• With group companies and associates of the Company for service delivery purposes.
• With authorised Service Providers such as analysis firms, payment processors, customer support providers, IT and SMS vendors, and web hosting companies — strictly to the extent necessary.
• In the event of a business sale or transfer, User information may be transferred to the purchaser.
• In response to authorised requests from governmental authorities, valid judicial orders, or as required under applicable law.
• Where necessary to investigate or prevent unlawful activities, fraud, or threats to safety.

All Service Providers are contractually required to maintain the confidentiality of User Personal Data and use it solely to perform functions for the Company.`,
  },
  {
    id: "cookies",
    title: "Cookies & Other Tools",
    content: `We use cookies, tracking pixels, web beacons, and similar technologies to collect information that enhances your experience and customises our services.

Strictly Necessary Cookies: Essential for the website to function — enabling page navigation, secure access, and system security. These do not require consent as they are necessary for requested services.

Functional Cookies: Remember your preferences such as language and display settings to provide a personalised experience.

Performance / Analytics Cookies: Collect data on how visitors use our website — pages visited, visit duration, and errors — to improve usability.

Targeting / Advertising Cookies: Deliver relevant advertisements and measure the effectiveness of advertising campaigns.

You may control cookie acceptance through your browser settings. Rejecting cookies may impair certain website features.`,
  },
  {
    id: "rights",
    title: "Your Rights as a Data Principal",
    content: `As a Data Principal under the DPDP Act, you have the following rights:

• Access, correction, or erasure of your Personal Data.
• Withdrawal of consent: You may withdraw consent at any time by clicking the "Withdraw Consent" link in your account settings or by sending a written request to our Grievance Officer. Withdrawal does not affect the lawfulness of prior processing.
• Opt-out of marketing communications at any time via the unsubscribe link in any communication or by emailing us.

Please note that withdrawal of consent to mandatory data processing may limit our ability to provide certain services. Upon withdrawal, we will cease processing your Personal Data for the relevant purpose except where required by law.`,
  },
  {
    id: "retention",
    title: "Data Retention",
    content: `We retain Personal Data only for the duration necessary to fulfil the specific purposes for which it was collected, or to satisfy applicable legal, regulatory, accounting, or reporting requirements.

To determine the appropriate retention period, we consider the volume, nature, and sensitivity of the Personal Data; the potential risk of harm from unauthorised use; the purposes of processing; and whether those purposes can be achieved through other means.

In accordance with the DPDP Act and DPDP Rules, 2025, we implement measures to securely delete, anonymise, or de-identify Personal Data once the retention period has expired. Certain information may be retained longer if required for defence of legal claims, fraud investigation, or statutory compliance.`,
  },
  {
    id: "security",
    title: "Security of Information",
    content: `We take reasonable measures to protect your Personal Data during transmission and while in our possession. Our security practices include:

• Secure Socket Layer (SSL) encryption for data transmission.
• Role-based access controls and firewalls.
• Regular security audits, software updates, and monitoring protocols.

Despite these efforts, no system is 100% secure, and the confidentiality of information transmitted over the internet cannot be guaranteed. We report data breaches to the Indian Computer Emergency Response Team (CERT-In) as required by applicable law.`,
  },
  {
    id: "minors",
    title: "Website Not Intended for Minors",
    content: `Our Website is intended for legally competent adults. We do not knowingly collect Personal Data from individuals under the age of 18. If we inadvertently collect such data, we shall process it only upon obtaining Verifiable Parental Consent as required by the DPDP Act, 2023.

We employ age-gating mechanisms to identify users under 18. Where a child is identified, we seek verifiable consent from a parent or legal guardian using authorised digital authentication methods. We strictly refrain from behavioural monitoring, targeted advertising, or profiling that may harm a child.

Parents or guardians may review, correct, or request erasure of their child's data, or withdraw consent, by contacting our Grievance Officer.`,
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: `We reserve the right to amend, update, or modify this Privacy Policy at any time without prior notice. Any such amendment shall become effective immediately upon posting on the Website. We have no obligation to separately notify Users of such changes.

We encourage you to review this Policy periodically to remain informed of how we protect your Personal Data.`,
  },
  {
    id: "grievance",
    title: "Grievance Redressal",
    content: `If you have any questions, concerns, complaints, or requests relating to your Personal Data, you may contact our Grievance Officer. We will acknowledge your grievance and endeavour to resolve it within a reasonable period in accordance with applicable law.

Grievance Officer: GreenChip Energy
Address: #103, Plot No. 64, Pavani Suits, Nandagiri Hills Rear Rd, HUDA Enclave, Journalist Colony, Road No. 70, Jubilee Hills, Hyderabad, Telangana 500033
Tel: +91-8464884642 / +91-9010434455
Email: info@greenchipenergy.com

For general enquiries, you may also use the "Contact Us" link on the Website or visit www.greenchipenergy.com.`,
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

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
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,210,0,0.07) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 32, height: 3, background: "#f5c518", display: "block", borderRadius: 2 }} />
            <span style={{ color: "#f5c518", fontSize: 12, fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Legal &amp; Compliance
            </span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, margin: 0, fontFamily: "sans-serif", maxWidth: 560, lineHeight: 1.7 }}>
            GreenChip Emerging Projects Private Limited, operating as GreenChip Energy, is committed to protecting your privacy in accordance with the Digital Personal Data Protection Act, 2023.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "sans-serif", display:'inline-flex', alignItems:'center', gap:6 }}>
              <Calendar size={13} strokeWidth={2}/>Effective: April 1, 2025
            </span>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "sans-serif", display:'inline-flex', alignItems:'center', gap:6 }}>
              <Landmark size={13} strokeWidth={2}/>Governed by Indian Law
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Intro card */}
        <div style={{
          background: "#fff",
          border: "1px solid #d8e8d0",
          borderLeft: "4px solid #1a7a3a",
          borderRadius: 8,
          padding: "24px 28px",
          marginBottom: 40,
          fontFamily: "sans-serif",
          fontSize: 15,
          color: "#3a4a3e",
          lineHeight: 1.8,
        }}>
          GreenChip Emerging Projects Private Limited, operating as <strong>GreenChip Energy</strong>, is committed to protecting your privacy and processing personal data in compliance with the <strong>Digital Personal Data Protection Act, 2023</strong> ("DPDP Act"), the Information Technology Act, 2000, and other applicable Indian laws.
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {sections.map((section, i) => {
            const isOpen = activeSection === section.id;
            return (
              <div key={section.id} style={{
                background: "#fff",
                borderRadius: 10,
                border: "1px solid #dce8d4",
                overflow: "hidden",
                boxShadow: isOpen ? "0 4px 20px rgba(26,122,58,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.2s",
              }}>
                <button
                  onClick={() => setActiveSection(isOpen ? null : section.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 28px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      width: 28, height: 28,
                      background: isOpen ? "#1a7a3a" : "#e8f4ec",
                      color: isOpen ? "#fff" : "#1a7a3a",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontFamily: "sans-serif", fontWeight: 700,
                      flexShrink: 0, transition: "all 0.2s",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontSize: 16, fontWeight: 600,
                      color: isOpen ? "#1a7a3a" : "#1a2e1e",
                      fontFamily: "sans-serif",
                    }}>
                      {section.title}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 20, color: "#1a7a3a", fontWeight: 300,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s", flexShrink: 0,
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: "0 28px 28px 72px",
                    fontFamily: "sans-serif",
                    fontSize: 14.5,
                    color: "#3d4e42",
                    lineHeight: 1.85,
                    whiteSpace: "pre-line",
                    borderTop: "1px solid #eef5eb",
                    paddingTop: 20,
                  }}>
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer contact */}
        <div style={{
          marginTop: 56,
          background: "linear-gradient(135deg, #0a2e1a, #155a2e)",
          borderRadius: 12,
          padding: "36px 32px",
          color: "#fff",
          fontFamily: "sans-serif",
        }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600 }}>Have Questions About Your Privacy?</h3>
          <p style={{ margin: "0 0 24px", color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
            Reach out to our Grievance Officer for any privacy-related concerns.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
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
            }}>+91-8464884642</a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important;gap:12px!important}}`}</style>
    </div>
  );
}
