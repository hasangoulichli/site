// ============================================================================
// MAIN APPLICATION ROUTER & PAGE RENDERERS
// Merges static data/*.js with optional localStorage drafts from admin.html
// ============================================================================

(function () {
  const { useState, useCallback, useMemo } = React;
  const { playTone, SocialIcon, ProfileAvatar, FrameWrapper } = window.SiteComponents;

  function loadMergedState() {
    let config = JSON.parse(JSON.stringify(window.SITE_CONFIG || {}));
    let profile = JSON.parse(JSON.stringify(window.SITE_PROFILE || {}));
    let research = JSON.parse(JSON.stringify(window.SITE_RESEARCH || {}));

    try {
      const draftConfig = localStorage.getItem("HG_SITE_CONFIG_DRAFT");
      const draftProfile = localStorage.getItem("HG_SITE_PROFILE_DRAFT");
      const draftResearch = localStorage.getItem("HG_SITE_RESEARCH_DRAFT");
      if (draftConfig) config = JSON.parse(draftConfig);
      if (draftProfile) profile = JSON.parse(draftProfile);
      if (draftResearch) research = JSON.parse(draftResearch);
    } catch (_) {}

    return { config, profile, research };
  }

  function App() {
    const { config, profile, research } = useMemo(() => loadMergedState(), []);
    const theme = config.theme || {};

    const [lang, setLang] = useState(theme.defaultLang || "en");
    const [activeTab, setActiveTab] = useState("home");
    const [focusMode, setFocusMode] = useState(Boolean(theme.defaultFocusMode));
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [fontScale, setFontScale] = useState(theme.defaultFontScale || 105);

    if (!profile.en || !research.en) {
      return (
        <div className="max-w-2xl mx-auto mt-20 p-6 rounded-2xl border border-red-500/40 bg-[#121620] text-center">
          <h1 className="font-mono text-lg text-red-400 font-bold mb-2">Site data files not loaded</h1>
          <p className="text-sm text-gray-300">
            Verify that <code>data/config.js</code>, <code>data/profile_teaching.js</code>, and <code>data/research_outputs.js</code> exist in your repository without Markdown backticks.
          </p>
        </div>
      );
    }

    const pData = profile[lang] || profile.en;
    const rData = research[lang] || research.en;
    const tabs = config.tabs || [];
    const currentMeta = tabs.find((t) => t.id === activeTab) || tabs[0];
    const accent = currentMeta.color;

    const btnRadius = theme.buttonRadius || "0.5rem";
    const cardRadius = theme.cardRadius || "0.75rem";
    const frameRadius = theme.frameRadius || "1.5rem";
    const buttonStyle = theme.buttonStyle || "outlined";
    const bgSurface = focusMode
      ? "#0B0E14"
      : theme.surfaceMode === "slate"
      ? "#0D1117"
      : "#090B10";

    const getButtonPresentation = (color, isActive) => {
      if (buttonStyle === "solid") {
        return {
          backgroundColor: isActive ? color : `${color}CC`,
          color: "#090B10",
          border: `1.5px solid ${color}`,
          borderRadius: btnRadius,
          "--tw-ring-color": color
        };
      }
      if (buttonStyle === "tinted") {
        return {
          backgroundColor: isActive ? `${color}33` : `${color}16`,
          color: color,
          border: `1.5px solid ${color}`,
          borderRadius: btnRadius,
          "--tw-ring-color": color
        };
      }
      // Default: outlined
      return {
        backgroundColor: isActive ? `${color}22` : "#121620E6",
        color: color,
        border: `1.5px solid ${color}`,
        borderRadius: btnRadius,
        "--tw-ring-color": color
      };
    };

    const handleTabClick = useCallback((id, idx) => {
      setActiveTab(id);
      if (soundEnabled) playTone(440 + idx * 35, 0.06);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [soundEnabled]);

    const toggleLang = () => {
      setLang((prev) => (prev === "en" ? "tr" : "en"));
      if (soundEnabled) playTone(680, 0.07);
    };

    const toggleFocus = () => {
      setFocusMode((prev) => !prev);
      if (soundEnabled) playTone(380, 0.07);
    };

    const toggleSound = () => {
      setSoundEnabled((prev) => {
        const next = !prev;
        if (next) playTone(620, 0.07);
        return next;
      });
    };

    return (
      <div className="min-h-screen text-gray-200 pb-16 transition-colors duration-300" style={{ backgroundColor: bgSurface }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5">
          {/* TOP HEADER & NAVIGATION */}
          <header className="mb-6 space-y-3">
            {/* Row 1: Dynamic Brand Pill (syncs with active section color) + Utility Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => handleTabClick("home", 0)}
                className={`px-3 py-1.5 font-mono text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "home" ? "ring-2 ring-offset-2 ring-offset-[#090B10]" : "hover:brightness-125"
                }`}
                style={getButtonPresentation(accent, activeTab === "home")}
              >
                {pData.brandName}
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={toggleFocus}
                  className="px-3 py-1.5 font-mono text-xs font-semibold bg-[#121620] border transition-colors cursor-pointer"
                  style={{
                    borderRadius: btnRadius,
                    borderColor: focusMode ? accent : "#374151",
                    color: focusMode ? accent : "#E5E7EB"
                  }}
                >
                  {focusMode ? pData.controls.focusOn : pData.controls.focusOff}
                </button>
                <button
                  onClick={toggleSound}
                  className="px-3 py-1.5 font-mono text-xs font-semibold bg-[#121620] border border-gray-700 hover:border-gray-500 text-gray-200 transition-colors cursor-pointer"
                  style={{ borderRadius: btnRadius }}
                >
                  {soundEnabled ? pData.controls.soundOn : pData.controls.soundOff}
                </button>
                <button
                  onClick={toggleLang}
                  className="px-3 py-1.5 font-mono text-xs font-bold bg-[#121620] transition-colors cursor-pointer"
                  style={{ borderRadius: btnRadius, border: `1.5px solid ${accent}`, color: accent }}
                >
                  {pData.controls.langLabel}
                </button>
              </div>
            </div>

            {/* Row 2: All 9 Distinctly Colored Navigation Tabs */}
            <nav aria-label="Primary Navigation" className="flex flex-wrap items-center gap-2 pt-1">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id, idx)}
                    className={`px-3 py-1.5 font-mono text-xs md:text-sm font-bold transition-all cursor-pointer ${
                      isActive ? "ring-2 ring-offset-2 ring-offset-[#090B10]" : "hover:brightness-125"
                    }`}
                    style={getButtonPresentation(tab.color, isActive)}
                  >
                    {pData.nav[tab.id]}
                  </button>
                );
              })}
            </nav>
          </header>

          {/* MAIN SINGLE-COLUMN CONTENT STAGE */}
          <main>
            <FrameWrapper
              focusMode={focusMode}
              accent={accent}
              frameRadius={frameRadius}
              fontScale={fontScale}
              onFontScaleChange={setFontScale}
              lang={lang}
            >
              {/* ================= HOME ================= */}
              {activeTab === "home" && (
                <div className="space-y-8">
                  <section className="flex flex-col items-center text-center space-y-4 pb-6 border-b border-gray-800/80">
                    <ProfileAvatar accent={accent} />
                    <div className="space-y-2 max-w-2xl">
                      <span
                        className="inline-block px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase"
                        style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}66` }}
                      >
                        {pData.home.badge}
                      </span>
                      <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {pData.brandName}
                      </h1>
                      <p className="text-sm sm:text-base font-medium text-gray-300">{pData.roleTitle}</p>
                      <p className="text-xs sm:text-sm font-mono text-gray-400">
                        {pData.affiliation} · {pData.location}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {(config.socialLinks || []).map((item) => (
                        <a
                          key={item.name}
                          href={item.url}
                          target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141926] border border-gray-800 hover:border-gray-600 text-xs font-mono text-gray-200 transition-colors"
                          style={{ borderRadius: btnRadius }}
                        >
                          <span style={{ color: item.color }}><SocialIcon iconKey={item.iconKey} /></span>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-bold font-mono tracking-tight" style={{ color: accent }}>
                      {pData.home.bioTitle}
                    </h2>
                    <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {pData.home.headline}
                    </p>
                    <div className={`space-y-4 ${focusMode ? "text-gray-100" : "text-gray-300 text-sm sm:text-base leading-relaxed"}`}>
                      {pData.home.bioParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h3 className="text-base font-bold font-mono uppercase tracking-wider" style={{ color: accent }}>
                      {pData.home.interestsTitle}
                    </h3>
                    <div className="space-y-2.5">
                      {pData.home.interests.map((item, i) => (
                        <div
                          key={i}
                          className="p-4 bg-[#131824] border border-gray-800/90"
                          style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                        >
                          <div className="font-semibold text-white">{item.label}</div>
                          <p className={`mt-1 ${focusMode ? "text-gray-200" : "text-sm text-gray-300"}`}>{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="p-4 bg-[#121622] border border-gray-800/80 space-y-1.5" style={{ borderRadius: cardRadius }}>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
                      {pData.home.personalNoteTitle}
                    </h3>
                    <p className={focusMode ? "text-gray-200" : "text-sm text-gray-300 leading-relaxed"}>{pData.home.personalNote}</p>
                  </section>
                </div>
              )}

              {/* ================= PUBLICATIONS ================= */}
              {activeTab === "publications" && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {rData.publications.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{rData.publications.subtitle}</p>
                  </div>

                  {rData.publications.sections.map((sec, sIdx) => (
                    <section key={sIdx} className="space-y-3">
                      <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-300 border-b border-gray-800 pb-2">
                        {sec.heading}
                      </h2>
                      <div className="space-y-4">
                        {sec.items.map((pub, pIdx) => (
                          <article
                            key={pIdx}
                            className="p-4 sm:p-5 bg-[#131824] border border-gray-800/90 space-y-2.5"
                            style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                          >
                            <span
                              className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold"
                              style={{ backgroundColor: `${accent}20`, color: accent }}
                            >
                              {pub.status}
                            </span>
                            <p className={focusMode ? "text-white" : "text-sm sm:text-base text-white leading-relaxed"}>{pub.citation}</p>
                            <p className="text-xs sm:text-sm text-gray-400">{pub.role}</p>
                            {pub.links && pub.links.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-1">
                                {pub.links.map((lnk, lIdx) => (
                                  <a
                                    key={lIdx}
                                    href={lnk.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 font-mono text-xs font-semibold transition-colors hover:brightness-125"
                                    style={{
                                      borderRadius: btnRadius,
                                      color: accent,
                                      border: `1px solid ${accent}88`,
                                      backgroundColor: `${accent}14`
                                    }}
                                  >
                                    {lnk.label} ↗
                                  </a>
                                ))}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}

              {/* ================= PROJECTS ================= */}
              {activeTab === "projects" && (
                <div className="space-y-7">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {rData.projects.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{rData.projects.subtitle}</p>
                  </div>

                  <div className="space-y-5">
                    {rData.projects.items.map((proj, idx) => (
                      <article
                        key={idx}
                        className="p-5 bg-[#131824] border border-gray-800/90 space-y-3"
                        style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold uppercase"
                            style={{ backgroundColor: `${accent}20`, color: accent }}
                          >
                            {proj.status}
                          </span>
                          <span className="font-mono text-xs text-gray-400">{proj.period}</span>
                        </div>
                        <h2 className="text-lg font-bold text-white">{proj.title}</h2>
                        <p className="font-mono text-xs text-gray-400">{proj.meta}</p>
                        <p className={focusMode ? "text-gray-100" : "text-sm sm:text-base text-gray-300 leading-relaxed"}>{proj.summary}</p>

                        {proj.imageUrl && (
                          <img src={proj.imageUrl} alt={proj.title} className="rounded-lg w-full max-h-72 object-cover border border-gray-800" />
                        )}
                        {proj.audioUrl && (
                          <audio controls className="w-full mt-2"><source src={proj.audioUrl} /></audio>
                        )}

                        {!focusMode && proj.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {proj.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-[#0E121B] border border-gray-800 font-mono text-[11px] text-gray-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {proj.links && proj.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {proj.links.map((lnk, lIdx) => (
                              <a
                                key={lIdx}
                                href={lnk.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 font-mono text-xs font-semibold"
                                style={{ borderRadius: btnRadius, color: accent, border: `1px solid ${accent}88`, backgroundColor: `${accent}14` }}
                              >
                                {lnk.label} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= BLOG ================= */}
              {activeTab === "blog" && (
                <div className="space-y-7">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {rData.blog.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{rData.blog.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    {rData.blog.posts.map((post, idx) => (
                      <article
                        key={idx}
                        className="p-5 bg-[#131824] border border-gray-800/90 space-y-2.5"
                        style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                      >
                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                          <span className="px-2 py-0.5 rounded" style={{ backgroundColor: `${accent}20`, color: accent }}>
                            {post.category}
                          </span>
                          <span className="text-gray-400">{post.date}</span>
                          <span className="text-gray-500">· {post.readTime}</span>
                        </div>
                        <h2 className="text-lg font-bold text-white">{post.title}</h2>
                        <p className={focusMode ? "text-gray-100" : "text-sm sm:text-base text-gray-300 leading-relaxed"}>{post.excerpt}</p>
                        {post.imageUrl && (
                          <img src={post.imageUrl} alt={post.title} className="rounded-lg w-full max-h-72 object-cover border border-gray-800" />
                        )}
                        {post.audioUrl && (
                          <audio controls className="w-full mt-2"><source src={post.audioUrl} /></audio>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= TEACHING ================= */}
              {activeTab === "teaching" && (
                <div className="space-y-7">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {pData.teaching.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{pData.teaching.subtitle}</p>
                  </div>

                  <section className="p-5 bg-[#131824] border border-gray-800/90 space-y-2" style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}>
                    <h2 className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
                      {pData.teaching.philosophyTitle}
                    </h2>
                    <p className={focusMode ? "text-gray-100" : "text-sm sm:text-base text-gray-300 leading-relaxed"}>{pData.teaching.philosophy}</p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-300 border-b border-gray-800 pb-2">
                      {pData.teaching.appointmentsTitle}
                    </h2>
                    <div className="space-y-4">
                      {pData.teaching.courses.map((c, idx) => (
                        <div key={idx} className="p-4 sm:p-5 bg-[#131824] border border-gray-800/90 space-y-1.5" style={{ borderRadius: cardRadius }}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${accent}20`, color: accent }}>
                              {c.code}
                            </span>
                            <span className="font-mono text-xs text-gray-400">{c.detail}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white">{c.name}</h3>
                          <p className={focusMode ? "text-gray-200" : "text-sm text-gray-300 leading-relaxed"}>{c.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="p-5 bg-[#131824] border border-gray-800/90 space-y-3" style={{ borderRadius: cardRadius }}>
                    <h2 className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
                      {pData.teaching.mentoringTitle}
                    </h2>
                    <p className="text-sm text-gray-300">{pData.teaching.mentoringSummary}</p>
                    <ul className="space-y-1.5 text-sm text-gray-300 list-disc list-inside">
                      {pData.teaching.mentoringCourses.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}

              {/* ================= TOOLS ================= */}
              {activeTab === "tools" && (
                <div className="space-y-7">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {rData.tools.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{rData.tools.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    {rData.tools.items.map((tool, idx) => (
                      <article
                        key={idx}
                        className="p-5 bg-[#131824] border border-gray-800/90 space-y-3"
                        style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h2 className="text-lg font-bold text-white">{tool.name}</h2>
                          <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>
                            {tool.status}
                          </span>
                        </div>
                        <p className={focusMode ? "text-gray-100" : "text-sm sm:text-base text-gray-300 leading-relaxed"}>{tool.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tool.stack.map((tech, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-[#0E121B] border border-gray-800 font-mono text-[11px] text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="pt-1">
                          <a
                            href={tool.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 font-mono text-xs font-semibold"
                            style={{ borderRadius: btnRadius, color: accent, border: `1px solid ${accent}88`, backgroundColor: `${accent}14` }}
                          >
                            {tool.repoLabel} ↗
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= BEYOND RESEARCH ================= */}
              {activeTab === "beyond" && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {pData.beyond.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{pData.beyond.subtitle}</p>
                  </div>

                  {pData.beyond.groups.map((group, gIdx) => (
                    <section key={gIdx} className="space-y-3">
                      <div className="border-b border-gray-800 pb-2 space-y-1">
                        <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider" style={{ color: accent }}>
                          {group.heading}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-400 italic">{group.transferable}</p>
                      </div>

                      <div className="space-y-3.5">
                        {group.items.map((item, iIdx) => (
                          <article
                            key={iIdx}
                            className="p-4 sm:p-5 bg-[#131824] border border-gray-800/90 space-y-1.5"
                            style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="text-base font-bold text-white">{item.role}</h3>
                              <span className="font-mono text-xs text-gray-400">{item.period}</span>
                            </div>
                            <p className="font-mono text-xs" style={{ color: accent }}>{item.org}</p>
                            <p className={focusMode ? "text-gray-200 pt-1" : "text-sm text-gray-300 leading-relaxed pt-1"}>{item.details}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}

              {/* ================= CV ================= */}
              {activeTab === "cv" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                        {pData.cv.title}
                      </h1>
                      <p className="text-sm sm:text-base text-gray-400">{pData.cv.subtitle}</p>
                    </div>
                    <a
                      href="./assets/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 font-mono text-xs sm:text-sm font-bold transition-all hover:brightness-125"
                      style={{ borderRadius: btnRadius, color: "#090B10", backgroundColor: accent }}
                    >
                      {pData.cv.downloadLabel} ↓
                    </a>
                  </div>

                  <section className="space-y-3">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-300 border-b border-gray-800 pb-2">
                      {pData.cv.educationTitle}
                    </h2>
                    <div className="space-y-3.5">
                      {pData.cv.education.map((edu, i) => (
                        <div key={i} className="p-4 bg-[#131824] border border-gray-800/90 space-y-1" style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-bold text-white text-sm sm:text-base">{edu.degree}</h3>
                            <span className="font-mono text-xs text-gray-400">{edu.period}</span>
                          </div>
                          <p className="font-mono text-xs" style={{ color: accent }}>{edu.institution}</p>
                          <p className="text-sm text-gray-300 pt-1">{edu.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-300 border-b border-gray-800 pb-2">
                      {pData.cv.awardsTitle}
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {pData.cv.awards.map((aw, i) => (
                        <li key={i} className="p-3 bg-[#131824] border border-gray-800/80" style={{ borderRadius: cardRadius }}>
                          {aw}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-300 border-b border-gray-800 pb-2">
                      {pData.cv.skillsTitle}
                    </h2>
                    <div className="space-y-2.5">
                      {pData.cv.skills.map((sk, i) => (
                        <div key={i} className="p-4 bg-[#131824] border border-gray-800/80" style={{ borderRadius: cardRadius }}>
                          <div className="font-mono text-xs font-bold uppercase mb-1" style={{ color: accent }}>
                            {sk.category}
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{sk.items}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {/* ================= CONTACT ================= */}
              {activeTab === "contact" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: accent }}>
                      {pData.contact.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400">{pData.contact.subtitle}</p>
                  </div>

                  <p className={focusMode ? "text-gray-100" : "text-sm sm:text-base text-gray-300 leading-relaxed"}>{pData.contact.note}</p>

                  <div className="space-y-3">
                    {pData.contact.emails.map((em, i) => (
                      <div
                        key={i}
                        className="p-4 bg-[#131824] border border-gray-800/90 flex flex-wrap items-center justify-between gap-2"
                        style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                      >
                        <span className="font-mono text-xs text-gray-400 uppercase">{em.label}</span>
                        <a href={`mailto:${em.value}`} className="font-mono text-sm font-bold hover:underline" style={{ color: accent }}>
                          {em.value}
                        </a>
                      </div>
                    ))}

                    <div
                      className="p-4 bg-[#131824] border border-gray-800/90 flex flex-wrap items-center justify-between gap-2"
                      style={{ borderRadius: cardRadius, borderLeft: `4px solid ${accent}` }}
                    >
                      <span className="font-mono text-xs text-gray-400 uppercase">{pData.contact.locationLabel}</span>
                      <span className="font-mono text-sm text-white">{pData.contact.locationValue}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {(config.socialLinks || []).map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141926] border border-gray-800 hover:border-gray-600 text-xs font-mono text-gray-200 transition-colors"
                        style={{ borderRadius: btnRadius }}
                      >
                        <span style={{ color: item.color }}><SocialIcon iconKey={item.iconKey} /></span>
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </FrameWrapper>
          </main>

          <footer className="mt-8 text-center font-mono text-xs text-gray-500">
            © {new Date().getFullYear()} {pData.brandName} · {pData.location}
          </footer>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
})();
