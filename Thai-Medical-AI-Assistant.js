const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'Thai Medical AI Assistant';
pres.author = 'AIoTx Tech';
pres.company = 'มหาวิทยาลัยทักษิณ';

const C = {
  bg: "0D1B2A",
  bgLight: "F8FAFB",
  teal: "0D9488",
  tealLight: "CCFBF1",
  tealMid: "14B8A6",
  gold: "F59E0B",
  red: "EF4444",
  gray: "64748B",
  grayLight: "E2E8F0",
  white: "FFFFFF",
  text: "1E293B",
  textLight: "475569",
  accent: "10B981",
  purple: "8B5CF6",
  orange: "F97316",
  blue: "3B82F6",
  yellow: "FBBF24",
};

// ============ SLIDE 1 - TITLE ============
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  
  // Background accents
  s.addShape(pres.shapes.OVAL, { x: -1, y: -1, w: 4, h: 4, fill: { color: "0D9488", transparency: 88 }, line: { color: "0D9488", transparency: 88 } });
  s.addShape(pres.shapes.OVAL, { x: 8, y: 3, w: 3, h: 3, fill: { color: "14B8A6", transparency: 88 }, line: { color: "14B8A6", transparency: 88 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: C.teal }, line: { color: C.teal } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 0.3, w: 2.8, h: 0.38, fill: { color: C.teal }, line: { color: C.teal } });
  s.addText("AI Preneur Hackathon — ภาคใต้", { x: 0.35, y: 0.3, w: 2.8, h: 0.38, fontSize: 10, color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  
  // Main title
  s.addText("Thai Medical AI Assistant", { x: 0.4, y: 1.0, w: 9.2, h: 1.1, fontSize: 44, color: C.white, bold: true, fontFace: "Calibri" });
  s.addText("ระบบผู้ช่วยทางการแพทย์ภาษาไทยด้วยปัญญาประดิษฐ์", { x: 0.4, y: 2.0, w: 9.2, h: 0.5, fontSize: 18, color: "CCFBF1", fontFace: "Calibri" });
  
  // Tech tags
  const tags = ["Fine-tuned LLM", "Hybrid RAG", "Chain-of-Thought", "PDPA Compliant", "Multimodal"];
  tags.forEach((tag, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4 + i * 1.9, y: 2.7, w: 1.7, h: 0.35, fill: { color: "134E4A" }, line: { color: C.tealMid, width: 1 } });
    s.addText(tag, { x: 0.4 + i * 1.9, y: 2.7, w: 1.7, h: 0.35, fontSize: 9, color: C.tealLight, align: "center", valign: "middle", margin: 0 });
  });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 3.25, w: 9.2, h: 0.02, fill: { color: "1E3A5F" }, line: { color: "1E3A5F" } });
  s.addText("AIoTx Tech  ·  มหาวิทยาลัยทักษิณ", { x: 0.4, y: 3.4, w: 5, h: 0.35, fontSize: 13, color: C.gray, fontFace: "Calibri" });
  
  // Performance badge
  s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 3.3, w: 2.6, h: 0.7, fill: { color: "134E4A" }, line: { color: C.teal } });
  s.addText([
    { text: "BERTScore F1 = ", options: { fontSize: 12, color: "CCFBF1" } },
    { text: "0.6768", options: { fontSize: 18, color: C.teal, bold: true } },
  ], { x: 7.0, y: 3.3, w: 2.6, h: 0.7, align: "center", valign: "middle" });
  
  // Team names
  s.addText("พิษณุ ทองศรี  ·  อภิษฐ์น มะสมัน  ·  ชัชวาล ดำชุม  ·  นันท์นภัส รอดบุตร", { x: 0.4, y: 3.85, w: 9.2, h: 0.35, fontSize: 11, color: C.gray });
  s.addText("TRL 4 → 6", { x: 0.4, y: 4.4, w: 1.5, h: 0.38, fontSize: 13, color: C.gold, bold: true });
  s.addText("iapp/chinda-qwen3-4b  ·  Apache 2.0  ·  4B Parameters", { x: 2.0, y: 4.42, w: 7.5, h: 0.35, fontSize: 11, color: C.gray });
}

// ============ SLIDE 2 - PROBLEM & MARKET GAP ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("ปัญหาและช่องว่างตลาด", { x: 0.4, y: 0, w: 7, h: 0.72, fontSize: 26, color: C.white, bold: true, valign: "middle" });
  s.addText("Problem & Market Gap", { x: 7.5, y: 0, w: 2.1, h: 0.72, fontSize: 11, color: C.tealLight, valign: "middle", align: "right" });
  
  const problems = [
    { icon: "👨‍⚕️", title: "ขาดแคลนแพทย์", sub: "อัตราส่วนต่ำกว่า\nเกณฑ์ WHO", color: "991B1B", bg: "FEF2F2", accent: "EF4444" },
    { icon: "📍", title: "เข้าถึงยาก", sub: "พื้นที่ห่างไกล\nต้นทุนสูง", color: "92400E", bg: "FFFBEB", accent: "F59E0B" },
    { icon: "🏥", title: "โรงพยาบาลแออัด", sub: "ไม่มีระบบ Triage\nรอนาน ล่าช้า", color: "1E3A5F", bg: "EFF6FF", accent: "3B82F6" },
  ];
  
  problems.forEach((p, i) => {
    const x = 0.35 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.9, w: 2.95, h: 2.0, fill: { color: p.bg }, line: { color: p.accent, width: 1.5 }, shadow: { type: "outer", blur: 8, offset: 2, angle: 135, color: "000000", opacity: 0.08 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.9, w: 2.95, h: 0.08, fill: { color: p.accent }, line: { color: p.accent } });
    s.addText(p.icon, { x, y: 1.0, w: 2.95, h: 0.55, fontSize: 28, align: "center" });
    s.addText(p.title, { x, y: 1.55, w: 2.95, h: 0.45, fontSize: 16, bold: true, color: p.color, align: "center" });
    s.addText(p.sub, { x, y: 2.0, w: 2.95, h: 0.7, fontSize: 12, color: C.textLight, align: "center" });
  });
  
  s.addText("▼", { x: 4.75, y: 3.05, w: 0.5, h: 0.3, fontSize: 16, color: C.gray, align: "center" });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 3.45, w: 9.3, h: 0.65, fill: { color: "1E293B" }, line: { color: "1E293B" } });
  s.addText([
    { text: "LLM ทั่วไปออกแบบสำหรับภาษาอังกฤษ/จีน  ", options: { bold: true, color: "FEF2F2" } },
    { text: "ไม่เข้าใจบริบทวัฒนธรรม โรค ไทย  ·  ไม่รองรับ PDPA", options: { color: "94A3B8" } }
  ], { x: 0.35, y: 3.45, w: 9.3, h: 0.65, fontSize: 13, valign: "middle", margin: 12 });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.2, w: 9.3, h: 0.72, fill: { color: C.teal }, line: { color: C.teal } });
  s.addText("🎯  โอกาส: Thai Medical AI สำหรับคนไทยโดยเฉพาะ  ·  Fine-tuned · RAG · CoT · PDPA · Multimodal · Edge-deployable", { x: 0.35, y: 4.2, w: 9.3, h: 0.72, fontSize: 13, color: C.white, bold: true, valign: "middle", margin: 12 });
}

// ============ SLIDE 3 - MARKET OPPORTUNITY (with chart) ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("โอกาสทางตลาด", { x: 0.4, y: 0, w: 7, h: 0.72, fontSize: 26, color: C.white, bold: true, valign: "middle" });
  s.addText("Market Opportunity", { x: 7.2, y: 0, w: 2.4, h: 0.72, fontSize: 11, color: C.tealLight, valign: "middle", align: "right" });
  
  const stats = [
    { num: "$178B", label: "ตลาด AI Healthcare ทั่วโลก\nในปี 2573", color: C.teal, bg: "F0FDFA" },
    { num: "$352M", label: "ตลาด AI Healthcare ไทย\nในปี 2577", color: "7C3AED", bg: "F5F3FF" },
    { num: "44%", label: "ผู้บริโภคเชื่อมั่น AI\nใน Healthcare (KPMG)", color: C.orange, bg: "FFF7ED" },
  ];
  
  stats.forEach((st, i) => {
    const x = 0.35 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.9, w: 2.9, h: 1.7, fill: { color: st.bg }, line: { color: st.color, width: 1.5 }, shadow: { type: "outer", blur: 8, offset: 2, angle: 135, color: "000000", opacity: 0.07 } });
    s.addText(st.num, { x, y: 0.95, w: 2.9, h: 0.9, fontSize: 36, bold: true, color: st.color, align: "center" });
    s.addText(st.label, { x, y: 1.85, w: 2.9, h: 0.6, fontSize: 12, color: C.textLight, align: "center" });
  });
  
  // Growth chart
  s.addChart(pres.charts.BAR, [{
    name: "มูลค่าตลาด AI Healthcare ไทย (ล้าน USD)",
    labels: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
    values: [42, 68, 105, 148, 205, 272, 352],
  }], {
    x: 0.35, y: 2.78, w: 9.3, h: 2.55,
    barDir: "col",
    chartColors: ["0D9488"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelColor: "0D9488",
    showLegend: true, legendPos: "b", legendColor: "475569",
    showTitle: true, title: "การเติบโตตลาด AI Healthcare ไทย (ล้าน USD) — Projection",
    titleColor: "1E293B", titleFontSize: 13,
  });
}

// ============ SLIDE 4 - SYSTEM ARCHITECTURE ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("สถาปัตยกรรมระบบ", { x: 0.4, y: 0, w: 7, h: 0.72, fontSize: 26, color: C.white, bold: true, valign: "middle" });
  s.addText("System Architecture", { x: 7.0, y: 0, w: 2.6, h: 0.72, fontSize: 11, color: C.tealLight, valign: "middle", align: "right" });
  
  const nodes = [
    { label: "ผู้ใช้งาน\nInput", sub: "ข้อความ/เสียง/ภาพ", bg: "E0F2FE", border: "0EA5E9", text: "075985" },
    { label: "PDPA Module", sub: "Consent · AES-256", bg: "EDE9FE", border: "8B5CF6", text: "5B21B6" },
    { label: "Multimodal\nProcessing", sub: "Whisper · ViT+BLIP", bg: "FEF3C7", border: "F59E0B", text: "92400E" },
    { label: "Hybrid RAG\nEngine", sub: "FAISS+BM25 · RRF\n200+ docs", bg: "CCFBF1", border: "0D9488", text: "134E4A" },
    { label: "CoT Engine", sub: "LINEAR·ToT·PAL\nQwen3 <think>", bg: "D1FAE5", border: "10B981", text: "065F46" },
    { label: "Fine-tuned\nModel", sub: "chinda-qwen3-4b\nDoRA+RSLoRA+NF4", bg: "FEE2E2", border: "EF4444", text: "991B1B" },
  ];
  
  nodes.forEach((n, i) => {
    const x = 0.2 + i * 1.62;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.0, w: 1.45, h: 1.55, fill: { color: n.bg }, line: { color: n.border, width: 1.5 }, shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.08 } });
    s.addText(n.label, { x, y: 1.0, w: 1.45, h: 0.62, fontSize: 10, bold: true, color: n.text, align: "center", valign: "bottom" });
    s.addText(n.sub, { x, y: 1.63, w: 1.45, h: 0.82, fontSize: 8, color: C.textLight, align: "center" });
    if (i < nodes.length - 1) {
      s.addText("→", { x: x + 1.45, y: 1.55, w: 0.17, h: 0.4, fontSize: 14, color: C.teal, align: "center", margin: 0 });
    }
  });
  
  // Urgency levels
  const outputs = [
    { icon: "🔴", label: "CRITICAL", color: "EF4444" },
    { icon: "🟠", label: "HIGH", color: "F97316" },
    { icon: "🟡", label: "MEDIUM", color: "F59E0B" },
    { icon: "🟢", label: "LOW", color: "10B981" },
  ];
  
  s.addText("UrgencyLevel Output:", { x: 0.4, y: 2.78, w: 2.2, h: 0.38, fontSize: 12, bold: true, color: C.text });
  outputs.forEach((o, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 2.65 + i * 1.82, y: 2.75, w: 1.6, h: 0.38, fill: { color: "F8FAFC" }, line: { color: o.color, width: 1.5 } });
    s.addText(o.icon + "  " + o.label, { x: 2.65 + i * 1.82, y: 2.75, w: 1.6, h: 0.38, fontSize: 11, bold: true, color: o.color, align: "center", valign: "middle", margin: 0 });
  });
  
  // Knowledge base info
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 3.3, w: 9.3, h: 0.55, fill: { color: "F0FDF4" }, line: { color: C.accent, width: 1 } });
  s.addText([
    { text: "Knowledge Base: ", options: { bold: true, color: C.text } },
    { text: "800 training records  ·  200+ docs (healthcare · medical_qa · mental_health · pubmed · audio · image)", options: { color: C.textLight } }
  ], { x: 0.35, y: 3.3, w: 9.3, h: 0.55, fontSize: 12, valign: "middle", margin: 10 });
  
  const techs = ["DoRA+RSLoRA", "4-bit NF4 Quant", "FAISS IVF Dense", "Thai BM25 Sparse", "Cross-Encoder", "Gradio Web UI"];
  techs.forEach((t, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + i * 1.57, y: 4.05, w: 1.45, h: 0.32, fill: { color: "134E4A" }, line: { color: "0D9488" } });
    s.addText(t, { x: 0.35 + i * 1.57, y: 4.05, w: 1.45, h: 0.32, fontSize: 9, color: C.tealLight, align: "center", valign: "middle", margin: 0 });
  });
  
  s.addText("Base model: typhoon-ai/typhoon2.5-qwen3-4b  ·  Fine-tuned: iapp/chinda-qwen3-4b  ·  Apache 2.0", { x: 0.35, y: 4.5, w: 9.3, h: 0.35, fontSize: 10, color: C.gray, align: "center" });
}

// ============ SLIDE 5 - MODEL PERFORMANCE (with comparison chart) ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("ผลการทดสอบโมเดล", { x: 0.4, y: 0, w: 7, h: 0.72, fontSize: 26, color: C.white, bold: true, valign: "middle" });
  s.addText("Model Evaluation Results", { x: 6.5, y: 0, w: 3.1, h: 0.72, fontSize: 11, color: C.tealLight, valign: "middle", align: "right" });
  
  // BERTScore F1 Chart
  s.addChart(pres.charts.BAR, [{
    name: "BERTScore F1",
    labels: ["chinda-4b ✓", "THaLLE-8B", "typhoon2.5"],
    values: [0.6768, 0.6275, 0.6620],
  }], {
    x: 0.3, y: 0.85, w: 4.6, h: 3.2, barDir: "col",
    chartColors: ["0D9488", "8B5CF6", "F97316"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelColor: "1E293B",
    showLegend: false,
    showTitle: true, title: "BERTScore F1 — ความสอดคล้องเชิงความหมาย",
    titleColor: "1E293B", titleFontSize: 12,
    valAxisMinVal: 0.58, valAxisMaxVal: 0.70,
  });
  
  // ROUGE-L Chart
  s.addChart(pres.charts.BAR, [{
    name: "ROUGE-L",
    labels: ["chinda-4b", "THaLLE-8B", "typhoon2.5"],
    values: [0.098, 0.250, 0.005],
  }], {
    x: 5.1, y: 0.85, w: 4.6, h: 3.2, barDir: "col",
    chartColors: ["0D9488", "8B5CF6", "F97316"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
    catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
    valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
    showValue: true, dataLabelColor: "1E293B",
    showLegend: false,
    showTitle: true, title: "ROUGE-L — ความแม่นยำของคำ",
    titleColor: "1E293B", titleFontSize: 12,
  });
  
  // Metric cards
  const metrics = [
    { label: "Best BERTScore F1", value: "0.6768", sub: "chinda-qwen3-4b (Fine-tuned)", color: C.teal },
    { label: "Best ROUGE-L", value: "0.2500", sub: "THaLLE-0.2-8B", color: "7C3AED" },
    { label: "Perplexity", value: "10,000", sub: "ต้องพัฒนาเพิ่มเติม", color: C.orange },
  ];
  
  metrics.forEach((m, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3 + i * 3.23, y: 4.2, w: 2.98, h: 1.1, fill: { color: C.white }, line: { color: m.color, width: 1.5 }, shadow: { type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.07 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3 + i * 3.23, y: 4.2, w: 2.98, h: 0.07, fill: { color: m.color }, line: { color: m.color } });
    s.addText(m.value, { x: 0.3 + i * 3.23, y: 4.27, w: 2.98, h: 0.55, fontSize: 26, bold: true, color: m.color, align: "center" });
    s.addText(m.label, { x: 0.3 + i * 3.23, y: 4.82, w: 2.98, h: 0.28, fontSize: 10, bold: true, color: C.text, align: "center" });
    s.addText(m.sub, { x: 0.3 + i * 3.23, y: 5.1, w: 2.98, h: 0.22, fontSize: 9, color: C.gray, align: "center" });
  });
}

// ============ SLIDE 6 - BUSINESS MODEL CANVAS ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.65, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("Business Model Canvas", { x: 0.4, y: 0, w: 9.2, h: 0.65, fontSize: 24, color: C.white, bold: true, valign: "middle" });
  
  const cells = [
    { x: 0.12, y: 0.75, w: 2.35, h: 1.6, title: "KEY PARTNERS", color: "1D4ED8", bg: "EFF6FF",
      items: ["🏥 โรงพยาบาลนำร่อง", "🎓 ม.ทักษิณ", "☁️ Google Colab Pro+", "🏛️ สำนักงานสาธารณสุข"] },
    { x: 2.57, y: 0.75, w: 2.35, h: 1.6, title: "KEY ACTIVITIES", color: "7C3AED", bg: "F5F3FF",
      items: ["⚙️ Fine-tune LLM ภาษาไทย", "📚 RAG Knowledge Base", "🔒 PDPA Compliance", "📊 RAGAS Evaluation"] },
    { x: 4.8, y: 0.75, w: 2.35, h: 1.6, title: "VALUE PROPOSITION", color: "065F46", bg: "F0FDF4",
      items: ["✅ คำปรึกษาแพทย์ 24/7", "✅ Triage 4 ระดับ", "✅ Multimodal Input", "✅ PDPA-compliant"] },
    { x: 7.03, y: 0.75, w: 2.85, h: 1.6, title: "CUSTOMER SEGMENTS", color: "92400E", bg: "FFFBEB",
      items: ["👥 ประชาชนห่างไกล", "👴 ผู้สูงอายุ", "🏥 โรงพยาบาล/คลินิก", "💼 Health Tech SaaS"] },
    { x: 0.12, y: 2.45, w: 2.35, h: 1.65, title: "CHANNELS", color: "1D4ED8", bg: "EFF6FF",
      items: ["🖥️ Gradio Web App", "🔌 API / SaaS Integration", "🤝 Pilot Hospital", "📦 Edge Deploy (GGUF)"] },
    { x: 2.57, y: 2.45, w: 2.35, h: 1.65, title: "KEY RESOURCES", color: "7C3AED", bg: "F5F3FF",
      items: ["🖥️ GPU A100-SXM4 40GB", "📊 800+ Training Records", "📝 Thai Medical Corpus", "👨‍💻 ML Team 4 คน"] },
    { x: 4.8, y: 2.45, w: 2.1, h: 1.65, title: "COST STRUCTURE", color: "991B1B", bg: "FEF2F2",
      items: ["💻 GPU Training", "☁️ Colab Pro+", "🔬 R&D · Dataset", "🛡️ Safety Audit"] },
    { x: 7.0, y: 2.45, w: 2.88, h: 1.65, title: "REVENUE STREAMS", color: "065F46", bg: "F0FDF4",
      items: ["💰 SaaS Subscription", "🔌 API Usage Fee", "🏛️ Government Grant", "📊 UHC Integration"] },
  ];
  
  cells.forEach(cell => {
    s.addShape(pres.shapes.RECTANGLE, { x: cell.x, y: cell.y, w: cell.w, h: cell.h, fill: { color: cell.bg }, line: { color: cell.color, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: cell.x, y: cell.y, w: cell.w, h: 0.3, fill: { color: cell.color }, line: { color: cell.color } });
    s.addText(cell.title, { x: cell.x, y: cell.y, w: cell.w, h: 0.3, fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(cell.items.join("\n"), { x: cell.x + 0.08, y: cell.y + 0.32, w: cell.w - 0.16, h: cell.h - 0.38, fontSize: 9, color: C.text, valign: "top" });
  });
  
  s.addText("ที่มา: Krungthai COMPASS · KPMG Global Healthcare AI Survey", { x: 0.12, y: 4.22, w: 9.78, h: 0.28, fontSize: 8, color: C.gray, align: "right" });
}

// ============ SLIDE 7 - MARKET SEGMENTS & ROADMAP ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("กลุ่มตลาดเป้าหมาย & Go-to-Market Roadmap", { x: 0.4, y: 0, w: 9.2, h: 0.72, fontSize: 22, color: C.white, bold: true, valign: "middle" });
  
  // Market segments bar chart
  s.addChart(pres.charts.BAR, [{
    name: "ขนาดตลาด (สัมพัทธ์)",
    labels: ["ประชาชนห่างไกล", "ภาครัฐ UHC", "นศ/แพทย์", "รพ./คลินิก", "ประกัน/SaaS"],
    values: [100, 80, 45, 60, 70],
  }], {
    x: 0.3, y: 0.85, w: 4.8, h: 3.3,
    barDir: "bar",
    chartColors: ["0D9488", "8B5CF6", "F97316", "3B82F6", "10B981"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
    catAxisLabelColor: "475569", valAxisLabelColor: "64748B",
    catGridLine: { style: "none" }, valGridLine: { color: "E2E8F0", size: 0.5 },
    showValue: true, showLegend: false,
    showTitle: true, title: "ขนาดตลาดแต่ละกลุ่ม (สัมพัทธ์)",
    titleColor: "1E293B", titleFontSize: 12,
  });
  
  s.addText("Roadmap & TRL Path", { x: 5.3, y: 0.85, w: 4.5, h: 0.4, fontSize: 14, bold: true, color: C.text });
  
  const phases = [
    { phase: "Phase 1 — ปัจจุบัน", trl: "TRL 4", desc: "Lab Validation\n• Prototype บน Colab\n• ROUGE / BERTScore eval", color: "065F46", bg: "F0FDF4", border: "10B981" },
    { phase: "Phase 2 — 6-12 เดือน", trl: "TRL 5", desc: "Pilot Hospital\n• ทดสอบกับผู้ใช้จริง\n• Safety audit ผู้เชี่ยวชาญ", color: "92400E", bg: "FFFBEB", border: "F59E0B" },
    { phase: "Phase 3 — 12-24 เดือน", trl: "TRL 6", desc: "Commercial Launch\n• SaaS / API Product\n• Stable API · IP filing", color: "991B1B", bg: "FEF2F2", border: "EF4444" },
  ];
  
  phases.forEach((p, i) => {
    const y = 1.35 + i * 1.08;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.4, h: 0.9, fill: { color: p.bg }, line: { color: p.border, width: 1.2 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 0.85, h: 0.9, fill: { color: p.border }, line: { color: p.border } });
    s.addText(p.trl, { x: 5.3, y, w: 0.85, h: 0.9, fontSize: 12, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(p.phase, { x: 6.22, y: y + 0.05, w: 3.4, h: 0.3, fontSize: 11, bold: true, color: p.color });
    s.addText(p.desc, { x: 6.22, y: y + 0.33, w: 3.4, h: 0.5, fontSize: 9, color: C.textLight });
    if (i < 2) { s.addText("↓", { x: 5.65, y: y + 0.9, w: 0.3, h: 0.2, fontSize: 10, color: C.gray, align: "center", margin: 0 }); }
  });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.35, w: 9.4, h: 0.9, fill: { color: "F0FDF4" }, line: { color: C.teal, width: 1.5 } });
  s.addText("Competitive Advantage vs Sensely.com:", { x: 0.5, y: 4.38, w: 3.2, h: 0.35, fontSize: 11, bold: true, color: C.teal });
  s.addText("ภาษาไทย 100%  ·  RAG Dynamic  ·  Multimodal  ·  PDPA  ·  Edge 4B params (vs Cloud-only)  ·  Open-source", { x: 0.5, y: 4.72, w: 9.1, h: 0.45, fontSize: 11, color: C.text });
}

// ============ SLIDE 8 - IMPACT & SDGs ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("ผลกระทบ & ความสอดคล้องกับ SDGs", { x: 0.4, y: 0, w: 9.2, h: 0.72, fontSize: 22, color: C.white, bold: true, valign: "middle" });
  
  const sdgs = [
    { icon: "🌍", label: "SDG 3", desc: "Good Health &\nWell-Being", color: "22C55E", bg: "F0FDF4" },
    { icon: "⚖️", label: "SDG 10", desc: "Reduced\nInequalities", color: "C026D3", bg: "FDF4FF" },
    { icon: "💚", label: "BCG Economy", desc: "Digital Health AI", color: "0D9488", bg: "F0FDFA" },
    { icon: "🔵", label: "PDPA 2562", desc: "Privacy-first AI", color: "2563EB", bg: "EFF6FF" },
  ];
  
  sdgs.forEach((g, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3 + i * 2.38, y: 0.82, w: 2.15, h: 1.0, fill: { color: g.bg }, line: { color: g.color, width: 1.5 } });
    s.addText(g.icon, { x: 0.3 + i * 2.38, y: 0.85, w: 2.15, h: 0.45, fontSize: 24, align: "center" });
    s.addText(g.label, { x: 0.3 + i * 2.38, y: 1.28, w: 2.15, h: 0.3, fontSize: 11, bold: true, color: g.color, align: "center" });
    s.addText(g.desc, { x: 0.3 + i * 2.38, y: 1.56, w: 2.15, h: 0.28, fontSize: 9, color: C.textLight, align: "center" });
  });
  
  const impacts = [
    { title: "ประชาชน", items: ["• คำปรึกษา 24/7 ไม่ต้องเดินทาง", "• Triage ลดแออัดโรงพยาบาล", "• ลดค่าใช้จ่ายที่ไม่จำเป็น"], color: "065F46", bg: "F0FDF4" },
    { title: "ระบบสาธารณสุข", items: ["• ลดภาระแพทย์/พยาบาล", "• ข้อมูลสุขภาพประชากร", "• สนับสนุน Universal Health Coverage"], color: "1D4ED8", bg: "EFF6FF" },
    { title: "วิชาการ & เทคโนโลยี", items: ["• Open-source Thai Medical LLM", "• ต้นแบบ Domain-specific SLM ไทย", "• DoRA+RSLoRA+RAG Research"], color: "7C3AED", bg: "F5F3FF" },
    { title: "เศรษฐกิจ", items: ["• SaaS สำหรับโรงพยาบาล/คลินิก", "• ลดต้นทุนค่ารักษาในระบบ", "• AI Innovation ส่งออกเชิงพาณิชย์"], color: "92400E", bg: "FFFBEB" },
  ];
  
  impacts.forEach((imp, i) => {
    const x = 0.3 + (i % 2) * 4.7;
    const y = 2.0 + Math.floor(i / 2) * 1.3;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.15, fill: { color: imp.bg }, line: { color: imp.color, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 0.32, fill: { color: imp.color }, line: { color: imp.color } });
    s.addText(imp.title, { x, y, w: 4.5, h: 0.32, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(imp.items.join("\n"), { x: x + 0.1, y: y + 0.34, w: 4.3, h: 0.78, fontSize: 10, color: C.text, valign: "top" });
  });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 4.72, w: 9.4, h: 0.62, fill: { color: "FFF7ED" }, line: { color: C.orange, width: 1 } });
  s.addText([
    { text: "⚠️ Honest Assessment: ", options: { bold: true, color: C.orange } },
    { text: "Perplexity = 10,000 → ยังไม่พร้อมเชิงพาณิชย์ · ต้องเพิ่ม training data · ทดสอบกับ clinician จริง · SRL 3→5", options: { color: C.text } }
  ], { x: 0.3, y: 4.72, w: 9.4, h: 0.62, fontSize: 10.5, valign: "middle", margin: 8 });
}

// ============ SLIDE 9 - DEMO & FEATURES ============
{
  const s = pres.addSlide();
  s.background = { color: C.bgLight };
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.72, fill: { color: C.bg }, line: { color: C.bg } });
  s.addText("ฟีเจอร์เด่น & ตัวอย่างการใช้งาน", { x: 0.4, y: 0, w: 9.2, h: 0.72, fontSize: 24, color: C.white, bold: true, valign: "middle" });
  s.addText("Key Features & Demo", { x: 7.2, y: 0, w: 2.4, h: 0.72, fontSize: 11, color: C.tealLight, valign: "middle", align: "right" });
  
  const features = [
    { icon: "📸", title: "AI Photo Analysis", desc: "อัปโหลดรูปผื่น/แผล → AI วิเคราะห์ + แนะนำ treatment", color: "0D9488" },
    { icon: "🎙️", title: "Voice Input", desc: "บันทึกเสียงไอ/หายใจ → Whisper transcribe + วิเคราะห์อาการ", color: "8B5CF6" },
    { icon: "💬", title: "Multi-turn Chat", desc: "สนทนาแบบโต้ตอบ พร้อมประวัติการรักษา", color: "3B82F6" },
    { icon: "🔒", title: "PDPA Compliance", desc: "เข้ารหัสข้อมูล AES-256 + Consent Management", color: "10B981" },
    { icon: "📊", title: "Triage System", desc: "ประเมินความเร่งด่วน 4 ระดับ CRITICAL → LOW", color: "F59E0B" },
    { icon: "🩺", title: "Medical Knowledge", desc: "ฐานข้อมูลการแพทย์ 200+ docs + 800 training records", color: "EF4444" },
  ];
  
  features.forEach((f, i) => {
    const x = 0.35 + (i % 2) * 4.75;
    const y = 0.95 + Math.floor(i / 2) * 1.25;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.1, fill: { color: C.white }, line: { color: f.color, width: 1.2 }, shadow: { type: "outer", blur: 5, offset: 1, angle: 135, color: "000000", opacity: 0.05 } });
    s.addText(f.icon, { x, y: y + 0.05, w: 0.8, h: 0.9, fontSize: 28, align: "center", valign: "middle" });
    s.addText(f.title, { x: x + 0.85, y: y + 0.15, w: 3.5, h: 0.35, fontSize: 12, bold: true, color: f.color });
    s.addText(f.desc, { x: x + 0.85, y: y + 0.55, w: 3.5, h: 0.45, fontSize: 9, color: C.textLight });
  });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.45, w: 9.3, h: 0.9, fill: { color: "EFF6FF" }, line: { color: C.blue, width: 1 } });
  s.addText("📱 Demo Live: https://cac759ef7bff4d16e7.gradio.live", { x: 0.35, y: 4.45, w: 9.3, h: 0.45, fontSize: 12, bold: true, color: C.blue, align: "center", valign: "middle" });
  s.addText("Gradio Web UI | รองรับ EN/TH | Cloudflare Edge-ready", { x: 0.35, y: 4.85, w: 9.3, h: 0.4, fontSize: 10, color: C.gray, align: "center" });
}

// ============ SLIDE 10 - CLOSING ============
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -1, w: 4, h: 4, fill: { color: "0D9488", transparency: 90 }, line: { color: "0D9488", transparency: 90 } });
  s.addShape(pres.shapes.OVAL, { x: -0.5, y: 3, w: 3, h: 3, fill: { color: "8B5CF6", transparency: 90 }, line: { color: "8B5CF6", transparency: 90 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.06, h: 5.625, fill: { color: C.teal }, line: { color: C.teal } });
  
  s.addText("ขอบคุณ", { x: 0.5, y: 0.7, w: 9, h: 1.1, fontSize: 52, bold: true, color: C.white, align: "center" });
  s.addText("Thank You", { x: 0.5, y: 1.6, w: 9, h: 0.6, fontSize: 24, color: C.tealLight, align: "center" });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 2.4, w: 7, h: 0.02, fill: { color: C.tealMid }, line: { color: C.tealMid } });
  
  const team = [
    { name: "พิษณุ ทองศรี", role: "Lead Developer" },
    { name: "อภิษฐ์น มะสมัน", role: "AI Engineer" },
    { name: "ชัชวาล ดำชุม", role: "Backend Developer" },
    { name: "นันท์นภัส รอดบุตร", role: "UX/UI & Data" },
  ];
  
  s.addText("ทีมพัฒนา", { x: 0.5, y: 2.65, w: 9, h: 0.4, fontSize: 14, bold: true, color: C.white, align: "center" });
  
  team.forEach((m, i) => {
    const x = 1.2 + i * 2.2;
    s.addText(m.name, { x, y: 3.05, w: 2, h: 0.35, fontSize: 11, bold: true, color: C.tealLight, align: "center" });
    s.addText(m.role, { x, y: 3.4, w: 2, h: 0.3, fontSize: 9, color: C.gray, align: "center" });
  });
  
  s.addText([
    { text: "อาจารย์ที่ปรึกษา: ", options: { bold: true, color: C.tealLight } },
    { text: "ผศ. สุดา เธียรมนตรี", options: { color: C.white } }
  ], { x: 0.5, y: 3.85, w: 9, h: 0.35, fontSize: 12, align: "center" });
  
  s.addShape(pres.shapes.RECTANGLE, { x: 1.5, y: 4.4, w: 7, h: 0.02, fill: { color: C.tealMid }, line: { color: C.tealMid } });
  
  s.addText("AIoTx Tech · มหาวิทยาลัยทักษิณ", { x: 0.5, y: 4.55, w: 9, h: 0.35, fontSize: 11, color: C.gray, align: "center" });
  s.addText("© 2026 | Apache 2.0 Open Source | PDPA Compliant", { x: 0.5, y: 4.9, w: 9, h: 0.3, fontSize: 9, color: C.grayLight, align: "center" });
}

// Save presentation
pres.writeFile({ fileName: "Thai_Medical_AI_Assistant_Presentation.pptx" })
  .then(() => console.log("✅ Presentation created successfully!"))
  .catch(err => console.error("Error:", err));