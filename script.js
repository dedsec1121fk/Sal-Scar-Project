/* Theme + Language switching (English + Bahamian Creole style copy)
   Black & white only. No images. No backend. */

const i18n = {
  en: {
    brand: "SAL SCAR",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    menu: "Menu",

    theme_dark: "Dark",
    theme_light: "Light",

    eyebrow: "CYBEROPS CONSULTANT",
    hero_h1_a: "Offensive security",
    hero_h1_b: "that is clear, practical, and report-ready.",
    hero_lead:
      "Web, Mobile (Android & iOS), Network and API penetration testing & vulnerability assessment—plus mobile static analysis and detailed technical reporting.",
    cta_contact: "Contact",
    cta_viewwork: "View work",

    m_years_label: "Experience",
    m_years_value: "2019 — Present",
    m_focus_label: "Focus",
    m_focus_value: "Offensive Security",
    m_reports_label: "Deliverable",
    m_reports_value: "Actionable Reports",

    card_title: "Profile",
    card_subtitle: "CyberOps Consultant — Offensive Work",
    profile_text:
      "I’m a CyberOps Consultant with a background in Information Technology security, specializing in offensive work experience.",
    contact_label: "How to reach me",
    signature_label: "Signature",
    no_images_note:
      "No images. No logos. Just black & white — built for speed, clarity, and credibility.",

    about_title: "About",
    about_subtitle:
      "What I do, how I work, and what you can expect when we collaborate.",
    about_h3_1: "Engagements",
    about_p_1:
      "I perform penetration testing and vulnerability assessments across web applications, APIs, mobile apps (Android & iOS), and networks. I also perform static analysis on mobile devices when needed.",
    about_h3_2: "Reporting & communication",
    about_p_2:
      "I prepare detailed technical reports and present findings clearly—so teams can prioritize fixes, validate remediation, and reduce risk without guesswork.",
    callout_title: "Approach",
    callout_text:
      "I focus on real-world impact, reproducible steps, and evidence-backed severity—so every finding is useful, not noisy.",

    skills_title: "Skills & tools",
    skills_subtitle:
      "A focused toolkit for testing, validation, and client-ready delivery.",
    skills_h3_1: "Web & API",
    skills_li_1: "Manual testing with targeted validation",
    skills_li_2: "Authentication & authorization review",
    skills_li_3: "Request/response analysis and evidence capture",
    skills_h3_2: "Mobile",
    skills_li_4: "Android & iOS penetration testing",
    skills_li_5: "Static analysis and security review",
    skills_li_6: "Runtime instrumentation when required",
    skills_h3_3: "Delivery",
    skills_li_7: "Clear severity and remediation guidance",
    skills_li_8: "Executive summary + technical detail",
    skills_li_9: "Stakeholder-ready presentations",

    exp_title: "Experience",
    exp_subtitle:
      "A track record of offensive security work with client-facing communication.",
    exp_role_1: "CyberOps Consultant",
    exp_time_1: "Oct 2021 — Present",
    exp1_li_1:
      "Perform Web, Mobile (Android & iOS), Network and API penetration testing and VA.",
    exp1_li_2: "Perform static analysis on mobile devices.",
    exp1_li_3: "Prepare detailed technical reports based on results.",
    exp1_li_4: "Communicate and present findings to clients.",
    exp_role_2: "IT Security Engineer",
    exp_time_2: "Jun 2020 — Sep 2021",
    exp2_li_1:
      "Perform Web and Mobile penetration testing and vulnerability assessment.",
    exp2_li_2:
      "Monitor source code to identify and safeguard sensitive information.",
    exp2_li_3: "Compile monthly reports on security incidents.",
    exp2_li_4: "Validate bug bounty submissions.",
    exp_role_3: "Cyber Security Analyst Intern",
    exp_time_3: "Feb 2019 — Feb 2020",
    exp3_li_1: "Investigate digital cases using digital forensic tools.",
    exp3_li_2:
      "Assist with vulnerability assessments and penetration tests.",
    exp3_li_3:
      "Research collaboration strategies between Blue Team and Red Team.",
    exp_note:
      "Want this section tailored to a specific role? You can swap bullets for measurable outcomes in minutes.",

    certs_title: "Certifications",
    certs_subtitle: "Recognized credentials that back up the work.",
    cert_oscp: "Offensive Security Certified Professional — OFFSEC",
    issued_jul_2024: "Issued July 2024",
    cert_crto: "Certified Red Team Operator — Zero-Point Security Ltd",
    issued_dec_2024: "Issued December 2024",
    cert_iso: "Certified ISO/IEC 27001:2013 Lead Auditor — IRCA",
    issued_jul_2022: "Issued July 2022",
    cert_ceh: "Certified Ethical Hacker — EC-COUNCIL",
    issued_jul_2020: "Issued July 2020",

    contact_title: "Contact",
    contact_subtitle:
      "Tell me what you’re building, what you want to test, and your timeline.",
    contact_h3: "Email",
    contact_p: "The fastest way to reach me:",
    contact_what_label: "What helps in the first message",
    contact_li_1: "Scope (web / API / mobile / network)",
    contact_li_2: "Environment (prod, staging, test accounts)",
    contact_li_3: "Desired output (report, retest, workshop)",

    form_title: "Quick message",
    form_hint:
      "This form opens your mail app (no backend). Nothing is stored.",
    form_name: "Name",
    form_subject: "Subject",
    form_message: "Message",
    form_send: "Create email",

    footer_text: "©",
    footer_name: "Sal Scar",
    back_to_top: "Back to top",

    status_empty: "Add a subject and message first.",
    status_opening: "Opening your mail app…",
cta_email: "Email me",
    availability_title: "Availability",
    availability_text: "I can usually start within 1–2 weeks depending on scope. Fast-turn retests are available when fixes are ready.",
    deliverables_title: "Deliverables",
    deliv_li_1: "Executive summary + technical details",
    deliv_li_2: "Reproduction steps and evidence",
    deliv_li_3: "Remediation guidance and retest notes",

  },

  // “Bahama language” — commonly refers to Bahamian Creole / Bahamian Dialect.
  // This is a respectful, readable approximation aimed for a portfolio site.
  // If you want it in a different exact variant, you can adjust the strings below.
  bs: {
    brand: "SAL SCAR",
    nav_about: "’Bout me",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_certs: "Certifications",
    nav_contact: "Contact",
    menu: "Menu",

    theme_dark: "Dark",
    theme_light: "Light",

    eyebrow: "CYBEROPS CONSULTANT",
    hero_h1_a: "Offensive security",
    hero_h1_b: "weh clear, practical, an’ ready fi report.",
    hero_lead:
      "Web, Mobile (Android & iOS), Network an’ API penetration testing & vulnerability assessment—plus mobile static analysis an’ detailed technical reports.",
    cta_contact: "Contact",
    cta_viewwork: "See di work",

    m_years_label: "Experience",
    m_years_value: "2019 — Present",
    m_focus_label: "Focus",
    m_focus_value: "Offensive Security",
    m_reports_label: "Deliverable",
    m_reports_value: "Actionable Reports",

    card_title: "Profile",
    card_subtitle: "CyberOps Consultant — Offensive Work",
    profile_text:
      "I is a CyberOps Consultant wit’ background in IT security, focusin’ on offensive work.",
    contact_label: "How ya reach me",
    signature_label: "Signature",
    no_images_note:
      "No images. No logos. Jus’ black an’ white — built fi speed, clarity, an’ credibility.",

    about_title: "’Bout me",
    about_subtitle:
      "Wha’ I do, how I work, an’ wha’ ya can expect when we link up.",
    about_h3_1: "Engagements",
    about_p_1:
      "I does penetration testing an’ vulnerability assessments across web apps, APIs, mobile apps (Android & iOS), an’ networks. I does static analysis on mobile too when needed.",
    about_h3_2: "Reporting & talkin’ it through",
    about_p_2:
      "I write detailed technical reports an’ present findin’s clear—so teams can fix fast, verify remediation, an’ reduce risk wit’ no guessin’.",
    callout_title: "Approach",
    callout_text:
      "I focus on real-world impact, reproducible steps, an’ evidence-backed severity—so every findin’ useful, not noisy.",

    skills_title: "Skills & tools",
    skills_subtitle:
      "A focused toolkit fi testin’, validatin’, an’ client-ready delivery.",
    skills_h3_1: "Web & API",
    skills_li_1: "Manual testin’ wit’ targeted validation",
    skills_li_2: "Auth an’ authorization review",
    skills_li_3: "Request/response analysis an’ evidence capture",
    skills_h3_2: "Mobile",
    skills_li_4: "Android & iOS penetration testing",
    skills_li_5: "Static analysis an’ security review",
    skills_li_6: "Runtime instrumentation when required",
    skills_h3_3: "Delivery",
    skills_li_7: "Clear severity an’ remediation guidance",
    skills_li_8: "Exec summary plus technical detail",
    skills_li_9: "Stakeholder-ready presentations",

    exp_title: "Experience",
    exp_subtitle:
      "Offensive security work wit’ client-facing communication.",
    exp_role_1: "CyberOps Consultant",
    exp_time_1: "Oct 2021 — Present",
    exp1_li_1:
      "Do Web, Mobile (Android & iOS), Network an’ API penetration testing an’ VA.",
    exp1_li_2: "Do static analysis on mobile devices.",
    exp1_li_3: "Write detailed technical reports based on results.",
    exp1_li_4: "Explain an’ present findin’s to clients.",
    exp_role_2: "IT Security Engineer",
    exp_time_2: "Jun 2020 — Sep 2021",
    exp2_li_1:
      "Do Web an’ Mobile penetration testing an’ vulnerability assessment.",
    exp2_li_2:
      "Monitor source code fi spot an’ protect sensitive info.",
    exp2_li_3: "Compile monthly reports on security incidents.",
    exp2_li_4: "Validate bug bounty submissions.",
    exp_role_3: "Cyber Security Analyst Intern",
    exp_time_3: "Feb 2019 — Feb 2020",
    exp3_li_1: "Investigate digital cases using forensic tools.",
    exp3_li_2:
      "Help wit’ vulnerability assessments an’ penetration tests.",
    exp3_li_3:
      "Research ways Blue Team an’ Red Team can work better together.",
    exp_note:
      "Ya want dis tailored to a specific role? Ya can swap bullets fi measurable outcomes quick.",

    certs_title: "Certifications",
    certs_subtitle: "Credentials weh back up di work.",
    cert_oscp: "Offensive Security Certified Professional — OFFSEC",
    issued_jul_2024: "Issued July 2024",
    cert_crto: "Certified Red Team Operator — Zero-Point Security Ltd",
    issued_dec_2024: "Issued December 2024",
    cert_iso: "Certified ISO/IEC 27001:2013 Lead Auditor — IRCA",
    issued_jul_2022: "Issued July 2022",
    cert_ceh: "Certified Ethical Hacker — EC-COUNCIL",
    issued_jul_2020: "Issued July 2020",

    contact_title: "Contact",
    contact_subtitle:
      "Tell me wha’ ya buildin’, wha’ ya want test, an’ ya timeline.",
    contact_h3: "Email",
    contact_p: "Fastest way fi reach me:",
    contact_what_label: "Wha’ helps in di first message",
    contact_li_1: "Scope (web / API / mobile / network)",
    contact_li_2: "Environment (prod, staging, test accounts)",
    contact_li_3: "Desired output (report, retest, workshop)",

    form_title: "Quick message",
    form_hint:
      "Dis form open ya mail app (no backend). Nothin’ stored.",
    form_name: "Name",
    form_subject: "Subject",
    form_message: "Message",
    form_send: "Create email",

    footer_text: "©",
    footer_name: "Sal Scar",
    back_to_top: "Back to top",

    status_empty: "Put subject an’ message first.",
    status_opening: "Openin’ ya mail app…",
cta_email: "Email me",
    availability_title: "Availability",
    availability_text: "I can usually start in 1–2 weeks dependin’ on scope. Fast retests available when fixes ready.",
    deliverables_title: "Deliverables",
    deliv_li_1: "Exec summary plus technical details",
    deliv_li_2: "Steps fi reproduce an’ evidence",
    deliv_li_3: "Fix guidance an’ retest notes",

  }
};

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const themeLabel = qs("#themeLabel");
  const themeIcon = qs("#themeIcon");
  const lang = getLang();

  const themeBtn = qs("#themeToggle");
  if(theme === "light"){
    themeIcon.textContent = "☀";
    themeLabel.textContent = i18n[lang].theme_light;
    if(themeBtn) themeBtn.setAttribute("aria-label", "Switch to dark theme");
  } else {
    themeIcon.textContent = "☾";
    themeLabel.textContent = i18n[lang].theme_dark;
    if(themeBtn) themeBtn.setAttribute("aria-label", "Switch to light theme");
  }
}

function getTheme(){
  return localStorage.getItem("theme") || "dark";
}

function setLang(lang){
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("lang", lang);
  applyI18n(lang);

  // Update toggle label to show the *other* language
  const langLabel = qs("#langLabel");
  const langBtn = qs("#langToggle");
  const nextLabel = (lang === "en") ? "Bahamas" : "English";
  langLabel.textContent = nextLabel;
  if(langBtn) langBtn.setAttribute("aria-label", `Switch language to ${nextLabel}`);

  // Refresh theme label text in the chosen language
  setTheme(getTheme());
}

function getLang(){
  return localStorage.getItem("lang") || "en";
}

function applyI18n(lang){
  qsa("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : (i18n.en[key] || "");
    el.textContent = value;
  });
  // Update document language
  document.documentElement.lang = (lang === "en") ? "en" : "en-BS";
}

  btn.addEventListener("click", ()=>{
    const expanded = btn.getAttribute("aria-expanded") === "true";
    expanded ? close() : open();
  });

  qsa('a[href^="#"]', menu).forEach(a=>{
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") close();
  });
}

    if(status) status.textContent = i18n[lang].status_opening;

    const body = `${name ? (name + "\n\n") : ""}${message}`;
    const mailto = `mailto:tsalscar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(()=>{ if(status) status.textContent = ""; }, 2500);
  });
}

function init(){
  const savedTheme = getTheme();
  const savedLang = getLang();

  setLang(savedLang);
  setTheme(savedTheme);

  qs("#themeToggle")?.addEventListener("click", ()=>{
    const next = (getTheme() === "dark") ? "light" : "dark";
    setTheme(next);
  });

  qs("#langToggle")?.addEventListener("click", ()=>{
    const next = (getLang() === "en") ? "bs" : "en";
    setLang(next);
  });

}

document.addEventListener("DOMContentLoaded", init);
