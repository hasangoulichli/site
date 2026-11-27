// ============================================================================
// SITE DESIGN, THEME, TABS & FOCUS MODE CONFIGURATION
// Managed visually via admin.html or edited directly here.
// ============================================================================

window.SITE_CONFIG = {
  theme: {
    buttonRadius: "0.5rem",     // "0.25rem" (crisp), "0.5rem" (rounded), "9999px" (pill)
    buttonStyle: "outlined",    // "outlined" | "tinted" | "solid"
    cardRadius: "0.75rem",
    frameRadius: "1.5rem",
    surfaceMode: "obsidian",    // "obsidian" (#090B10) | "slate" (#0D1117)
    defaultLang: "en",
    defaultFocusMode: false,
    defaultFontScale: 100       // Percentage: 90 to 120
  },
  tabs: [
    { id: "home",         color: "#FF3B5C" },
    { id: "publications", color: "#10B981" },
    { id: "projects",     color: "#FF9F1C" },
    { id: "blog",         color: "#3B82F6" },
    { id: "teaching",     color: "#A855F7" },
    { id: "tools",        color: "#84CC16" },
    { id: "beyond",       color: "#EC4899" },
    { id: "cv",           color: "#06B6D4" },
    { id: "contact",      color: "#F97316" }
  ],
  socialLinks: [
    { name: "ORCID", url: "https://orcid.org/0009-0008-7005-6401", color: "#A6CE39", iconKey: "orcid" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=BttAEJcAAAAJ&hl=en", color: "#4285F4", iconKey: "scholar" },
    { name: "OSF", url: "https://osf.io/xm3gk/", color: "#38BDF8", iconKey: "osf" },
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Hasan-Goulichli?ev=hdr_xprf", color: "#00CCBB", iconKey: "rg" },
    { name: "GitHub", url: "https://github.com/hasangoulichli", color: "#E5E7EB", iconKey: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hasangoulichli/", color: "#0A66C2", iconKey: "linkedin" },
    { name: "Email", url: "mailto:hasan.goulichli@emu.edu.tr", color: "#F97316", iconKey: "email" }
  ]
};
