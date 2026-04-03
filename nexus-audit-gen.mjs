import { jsPDF } from "jspdf";
import fs from "fs";

const generateAudit = (lang = 'pl') => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // --- COLORS & STYLES ---
  const colors = {
    bg: "#050507",
    accent: "#6c5ce7",
    accentLight: "#a29bfe",
    textMain: "#ffffff",
    textSecondary: "#b2bec3",
    danger: "#e74c3c",
    success: "#00b894",
    warning: "#fdcb6e"
  };

  const content = {
    pl: {
      title: "RAPORT AUDYTU SEO",
      client: "KLIENT: NEXUS.DEV (WZORZEC)",
      date: "DATA: KWIECIEŃ 2026",
      summary: "ANALIZA POTENCJAŁU WROSTU",
      techTitle: "1. KONDYCJA TECHNICZNA",
      techDesc: "Wykryliśmy krytyczne opóźnienia w ładowaniu zasobów LCP (4.8s), co powoduje spadek konwersji o 32%.",
      keywordsTitle: "2. WIDOCZNOŚĆ & SŁOWA KLUCZOWE",
      keywordsDesc: "Brak pozycjonowania na frazy 'Automatyzacja procesów' i 'AI Consulting Poland'.",
      roadmap: "3. PLAN DZIAŁANIA 90 DNI",
      footer: "AGENCJA NEXUS — SYSTEMY, KTÓRE ZARABIAJĄ"
    },
    en: {
      title: "SEO AUDIT REPORT",
      client: "CLIENT: NEXUS.DEV (SPECIMEN)",
      date: "DATE: APRIL 2026",
      summary: "GROWTH POTENTIAL ANALYSIS",
      techTitle: "1. TECHNICAL HEALTH",
      techDesc: "We detected critical delays in LCP (4.8s) resource loading, causing a 32% drop in conversion.",
      keywordsTitle: "2. VISIBILITY & KEYWORDS",
      keywordsDesc: "Missing rankings for 'Process Automation' and 'AI Consulting Poland'.",
      roadmap: "3. 90-DAY ACTION PLAN",
      footer: "NEXUS AGENCY — SYSTEMS THAT EARN"
    }
  }[lang];

  // --- PAGE 1: COVER ---
  doc.setFillColor(colors.bg);
  doc.rect(0, 0, 210, 297, "F");

  // Indigo Glow Accents (Simulated)
  doc.setFillColor(colors.accent);
  // jspdf setGState for opacity
  doc.setGState(new doc.GState({ opacity: 0.15 }));
  doc.circle(210, 0, 100, "F");
  doc.circle(0, 297, 80, "F");
  doc.setGState(new doc.GState({ opacity: 1.0 }));

  // Logo Placeholder
  doc.setTextColor(colors.textMain);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("nexus", 20, 40);
  doc.setTextColor(colors.accent);
  doc.text(".dev", 65, 40);

  // Title
  doc.setTextColor(colors.textMain);
  doc.setFontSize(36);
  doc.text(content.title, 20, 100);
  
  doc.setDrawColor(colors.accent);
  doc.setLineWidth(2);
  doc.line(20, 110, 150, 110);

  doc.setFontSize(14);
  doc.setTextColor(colors.textSecondary);
  doc.text(content.client, 20, 130);
  doc.text(content.date, 20, 140);

  // Summary box
  doc.setDrawColor(colors.accent);
  doc.setFillColor(255, 255, 255, 0.05);
  doc.roundedRect(20, 200, 170, 40, 5, 5, "FD");
  doc.setTextColor(colors.accentLight);
  doc.setFontSize(18);
  doc.text(content.summary, 30, 215);
  doc.setTextColor(colors.textMain);
  doc.setFontSize(12);
  doc.text("Potencjal wzrostu ruchu organicznego: +250% w 6 miesiecy.", 30, 230); // Removed Polish characters to avoid font issues in base jspdf

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(colors.textSecondary);
  doc.text(content.footer, 105, 285, { align: "center" });

  // --- PAGE 2: TECHNICAL ---
  doc.addPage();
  doc.setFillColor(colors.bg);
  doc.rect(0, 0, 210, 297, "F");

  doc.setTextColor(colors.accent);
  doc.setFontSize(22);
  doc.text(content.techTitle, 20, 30);

  doc.setTextColor(colors.textMain);
  doc.setFontSize(12);
  doc.text(content.techDesc, 20, 45, { maxWidth: 170 });

  // Performance Simulation (Bars)
  const drawMetric = (label, value, color, y) => {
    doc.setTextColor(colors.textSecondary);
    doc.text(label, 20, y);
    doc.setFillColor(30, 30, 40);
    doc.roundedRect(50, y - 5, 120, 6, 2, 2, "F");
    doc.setFillColor(color);
    doc.roundedRect(50, y - 5, value * 1.2, 6, 2, 2, "F");
  };

  drawMetric("PageSpeed", 40, colors.danger, 70);
  drawMetric("SEO Health", 95, colors.success, 85);
  drawMetric("Structure", 65, colors.warning, 100);

  // Roadmap Section
  doc.setTextColor(colors.accent);
  doc.setFontSize(22);
  doc.text(content.roadmap, 20, 150);

  const steps = [
    { m: "Miesiac 1", d: "Optymalizacja techniczna (LCP, CLS), wdrozenie SSL, poprawa meta danych." },
    { m: "Miesiac 2", d: "Budowa tresci (Content SEO) pod kluczowe frazy biznesowe." },
    { m: "Miesiac 3", d: "Link Building i wzmacnianie autorytetu domeny." }
  ];

  let yPos = 165;
  steps.forEach(s => {
    doc.setTextColor(colors.accentLight);
    doc.setFont("helvetica", "bold");
    doc.text(s.m, 20, yPos);
    doc.setTextColor(colors.textMain);
    doc.setFont("helvetica", "normal");
    doc.text(s.d, 20, yPos + 7, { maxWidth: 170 });
    yPos += 25;
  });

  return doc;
};

// Generate and save
const plAudit = generateAudit('pl');
const plBuffer = Buffer.from(plAudit.output("arraybuffer"));
fs.writeFileSync('Nexus_SEO_Audit_Specimen_PL.pdf', plBuffer);

const enAudit = generateAudit('en');
const enBuffer = Buffer.from(enAudit.output("arraybuffer"));
fs.writeFileSync('Nexus_SEO_Audit_Specimen_EN.pdf', enBuffer);

console.log("SUKCES: Wygenerowano wzorce raportow SEO (PL & EN)!");
