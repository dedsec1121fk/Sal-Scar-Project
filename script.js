/* Portfolio interactions (static) */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (persist)
  const themeBtn = $("#themeBtn");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") document.body.classList.add("light-theme");

  function updateThemeBtn() {
    const isLight = document.body.classList.contains("light-theme");
    if (themeBtn) themeBtn.textContent = isLight ? "☀️" : "🌙";
  }
  updateThemeBtn();

  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    updateThemeBtn();
  });
// Toast
  const toast = $("#toast");
  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
  }

  // Copy email buttons
  const email = ($("#emailText")?.textContent || "tsalscar@gmail.com").trim();
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      showToast(t("toast_email_copied"));
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(t("toast_email_copied"));
    }
  }

  $("#copyEmailBtn")?.addEventListener("click", copyEmail);
  $("#copyEmailBtn2")?.addEventListener("click", copyEmail);
// Language toggle (English <-> Bahasa)
  const langBtn = $("#langBtn");
  const I18N = {
    en: {
      brand_role: "CyberOps Consultant",
      btn_view_cv: "View CV",
      hero_title: "Offensive security work with clean reporting and real-world impact.",
      hero_desc: "I perform Web, Mobile (Android & iOS), Network, and API penetration testing and vulnerability assessment,
                plus mobile static analysis. I deliver detailed technical reports and present findings to clients.",
      btn_get_in_touch: "Get in touch",
      btn_copy_email: "Copy email",
      btn_see_experience: "See experience",
      tip_static: "Tip: this site is fully static (HTML/CSS/JS) and works offline.",

      nav_about: "About",
      nav_experience: "Experience",
      nav_certs: "Certifications",
      nav_skills: "Skills",
      nav_contact: "Contact",

      h_about: "About",
      about_note: "You can replace the name, role, and content with your own details in <b>index.html</b>.",
      h_experience: "Experience",
      exp1_title: "CyberOps Consultant",
      exp1_time: "Oct 2021 — Present",
      exp1_desc: "Perform Web, Mobile (Android & iOS), Network and API penetration testing and vulnerability assessment.
              Perform static analysis on mobile devices. Prepare detailed technical reports and communicate findings to clients.",
      exp2_title: "IT Security Engineer",
      exp2_time: "Jun 2020 — Sep 2021",
      exp2_desc: "Performed Web and Mobile penetration testing and vulnerability assessments. Conducted source code monitoring
              to identify sensitive information, compiled monthly incident reports, and validated bug bounty submissions.",
      exp3_title: "Cyber Security Analyst Intern",
      exp3_time: "Feb 2019 — Feb 2020",
      exp3_desc: "Investigated digital cases using forensic tools and supported vulnerability assessments and pentests.
              Researched collaboration strategies between Blue Team and Red Team.",

      h_certs: "Certifications",
      cert_oscp_desc: "Offensive Security Certified Professional.",
      cert_crto_desc: "Certified Red Team Operator.",
      cert_iso_desc: "Certified ISO/IEC 27001:2013 Lead Auditor (ISO27001).",
      cert_ceh_desc: "Certified Ethical Hacker.",
      cert_cv_title: "Download the full CV",
      cert_cv_meta: "PDF included in the ZIP",
      btn_open_cv: "Open CV",

      h_skills: "Skills",
      skills_tooling: "Tooling",
      skills_deliver_title: "What I deliver",
      skills_deliver_desc: "Clear issues, evidence, impact, and remediation steps — optimized for engineers and stakeholders.",

      h_contact: "Contact",
      contact_reach_me: "Reach me",
      contact_email_label: "Email",
      contact_quick_msg: "Quick message (local)",
      contact_form_note: "This form does not send email (static site). It just opens your email app.",
      btn_open_email_draft: "Open email draft",

      ph_name: "Your name",
      ph_subject: "Subject",
      ph_message: "Message",

      footer_note: "Built with the DedSec palette • Static HTML/CSS/JS",
      skills_areas_title: "Core capabilities",
      pill_static: "Mobile Static Analysis",
      pill_reporting: "Technical Reporting",
      pill_webapi: "Web & API Penetration Testing",
      pill_mobile: "Mobile PT (Android/iOS)",
      pill_network: "Network Penetration Testing",
      pill_va: "Vulnerability Assessment",
      pill_code: "Source Code Review / Monitoring",
      pill_bug_bounty: "Bug Bounty Validation",
      pill_forensics: "Digital Forensics (basic)",
      pill_client: "Client Communication",
      skip_to_content: "Skip to content",
      profile_meta: "CyberOps Consultant • Offensive Security",
      badge_webapi: "Web / API PT",
      badge_mobile: "Mobile PT (Android/iOS)",
      badge_network: "Network VA/PT",
      badge_reporting: "Reporting",
      quick_links: "Quick links",
      contact_label: "Contact",
      about_body: "CyberOps Consultant with a background in Information Technology security, specializing in offensive work. I focus on practical testing, reproducible findings, and clear remediation guidance.",
      pill_about_web: "Web Pentesting",
      pill_about_mobile: "Mobile (Android/iOS)",
      pill_about_network: "Network Pentesting",
      pill_about_api: "API Security",
      pill_about_static: "Static Analysis",
      pill_about_reporting: "Client Reporting",
      pill_tool_burp: "Burp Suite",
      pill_tool_postman: "Postman",
      pill_tool_nessus: "Nessus",
      pill_tool_frida: "Frida",
      pill_tool_objection: "Objection",
      cert_oscp_meta: "OffSec • Issued Jul 2024",
      cert_crto_meta: "Zero-Point Security • Issued Dec 2024",
      cert_iso_meta: "IRCA • Issued Jul 2022",
      cert_ceh_meta: "EC-Council • Issued Jul 2020",
      toast_email_copied: "Email copied",
      toast_lang_en: "English active",
      toast_lang_id: "Bahasa aktif"
    },
    id: {
      brand_role: "Konsultan CyberOps",
      btn_view_cv: "Lihat CV",
      hero_title: "Keamanan ofensif dengan laporan rapi dan dampak nyata.",
      hero_desc: "Saya melakukan pengujian penetrasi dan asesmen kerentanan untuk Web, Mobile (Android & iOS), Network, dan API,
                serta analisis statis pada mobile. Saya menyiapkan laporan teknis detail dan mempresentasikan temuan kepada klien.",
      btn_get_in_touch: "Hubungi saya",
      btn_copy_email: "Salin email",
      btn_see_experience: "Lihat pengalaman",
      tip_static: "Tips: situs ini sepenuhnya statis (HTML/CSS/JS) dan bisa berjalan offline.",

      nav_about: "Tentang",
      nav_experience: "Pengalaman",
      nav_certs: "Sertifikasi",
      nav_skills: "Keahlian",
      nav_contact: "Kontak",

      h_about: "Tentang",
      about_note: "Kamu bisa mengganti nama, peran, dan konten dengan detailmu sendiri di <b>index.html</b>.",
      h_experience: "Pengalaman",
      exp1_title: "Konsultan CyberOps",
      exp1_time: "Okt 2021 — Sekarang",
      exp1_desc: "Melakukan pengujian penetrasi dan asesmen kerentanan untuk Web, Mobile (Android & iOS), Network dan API.
              Melakukan analisis statis pada perangkat mobile. Menyusun laporan teknis rinci dan menyampaikan temuan kepada klien.",
      exp2_title: "Engineer Keamanan TI",
      exp2_time: "Jun 2020 — Sep 2021",
      exp2_desc: "Melakukan pengujian penetrasi dan asesmen kerentanan untuk Web dan Mobile. Melakukan pemantauan source code
              untuk menemukan informasi sensitif, menyusun laporan insiden bulanan, dan memvalidasi submission bug bounty.",
      exp3_title: "Magang Analis Keamanan Siber",
      exp3_time: "Feb 2019 — Feb 2020",
      exp3_desc: "Menyelidiki kasus digital menggunakan tools forensik dan mendukung asesmen kerentanan serta pentest.
              Meneliti strategi kolaborasi antara Blue Team dan Red Team.",

      h_certs: "Sertifikasi",
      cert_oscp_desc: "Offensive Security Certified Professional.",
      cert_crto_desc: "Certified Red Team Operator.",
      cert_iso_desc: "Auditor Utama ISO/IEC 27001:2013 (ISO27001).",
      cert_ceh_desc: "Certified Ethical Hacker.",
      cert_cv_title: "Unduh CV lengkap",
      cert_cv_meta: "PDF termasuk di ZIP",
      btn_open_cv: "Buka CV",

      h_skills: "Keahlian",
      skills_tooling: "Peralatan",
      skills_deliver_title: "Yang saya hasilkan",
      skills_deliver_desc: "Isu yang jelas, bukti, dampak, dan langkah perbaikan — dioptimalkan untuk engineer dan stakeholder.",

      h_contact: "Kontak",
      contact_reach_me: "Hubungi",
      contact_email_label: "Email",
      contact_quick_msg: "Pesan cepat (lokal)",
      contact_form_note: "Form ini tidak mengirim email (situs statis). Ini hanya membuka aplikasi email kamu.",
      btn_open_email_draft: "Buka draf email",

      ph_name: "Nama kamu",
      ph_subject: "Subjek",
      ph_message: "Pesan",

      footer_note: "Dibuat dengan palet DedSec • HTML/CSS/JS statis",
      skills_areas_title: "Kemampuan inti",
      pill_static: "Analisis Statis Mobile",
      pill_reporting: "Laporan Teknis",
      pill_webapi: "Pentest Web & API",
      pill_mobile: "Pentest Mobile (Android/iOS)",
      pill_network: "Pentest Jaringan",
      pill_va: "Asesmen Kerentanan",
      pill_code: "Review / Monitoring Source Code",
      pill_bug_bounty: "Validasi Bug Bounty",
      pill_forensics: "Forensik Digital (dasar)",
      pill_client: "Komunikasi dengan Klien",
      skip_to_content: "Lewati ke konten",
      profile_meta: "Konsultan CyberOps • Keamanan Ofensif",
      badge_webapi: "Pentest Web / API",
      badge_mobile: "Pentest Mobile (Android/iOS)",
      badge_network: "VA/PT Jaringan",
      badge_reporting: "Pelaporan",
      quick_links: "Tautan cepat",
      contact_label: "Kontak",
      about_body: "Konsultan CyberOps dengan latar belakang keamanan TI, berfokus pada pekerjaan ofensif. Saya menekankan pengujian yang praktis, temuan yang bisa direproduksi, dan panduan perbaikan yang jelas.",
      pill_about_web: "Pentest Web",
      pill_about_mobile: "Mobile (Android/iOS)",
      pill_about_network: "Pentest Jaringan",
      pill_about_api: "Keamanan API",
      pill_about_static: "Analisis Statis",
      pill_about_reporting: "Pelaporan Klien",
      pill_tool_burp: "Burp Suite",
      pill_tool_postman: "Postman",
      pill_tool_nessus: "Nessus",
      pill_tool_frida: "Frida",
      pill_tool_objection: "Objection",
      cert_oscp_meta: "OffSec • Terbit Jul 2024",
      cert_crto_meta: "Zero-Point Security • Terbit Des 2024",
      cert_iso_meta: "IRCA • Terbit Jul 2022",
      cert_ceh_meta: "EC-Council • Terbit Jul 2020",
      toast_email_copied: "Email disalin",
      toast_lang_en: "English active",
      toast_lang_id: "Bahasa aktif"
    }
  };

  function getLang() {
    const stored = localStorage.getItem("lang");
    return stored === "id" ? "id" : "en";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyLang(lang);
  }

  function t(key){ const lang=getLang(); const dict=I18N[lang]||I18N.en; return (dict && dict[key]) ? dict[key] : (I18N.en[key]||key); }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;

    // text nodes
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.innerHTML = String(dict[key]);
    });

    // placeholders
    $$("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("placeholder", String(dict[key]));
    });

    // Button label rule: show the OTHER language name
    // - If current is English -> button says "Bahasa"
    // - If current is Bahasa -> button says "English"
    if (langBtn) langBtn.textContent = (lang === "en") ? "Bahasa" : "English";

    // Update document lang attribute
    document.documentElement.setAttribute("lang", lang === "id" ? "id" : "en");
  }

  // Init language
  applyLang(getLang());

  langBtn?.addEventListener("click", () => {
    const next = getLang() === "en" ? "id" : "en";
    setLang(next);
    showToast(next === "id" ? t("toast_lang_id") : t("toast_lang_en"));
  });

})();
