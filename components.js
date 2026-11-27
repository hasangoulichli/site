// ============================================================================
// UI COMPONENTS: ICONS, AUDIO, PROFILE AVATAR & DUAL-MODE FRAME WRAPPER
// ============================================================================

window.SiteComponents = (function () {
  const { useState } = React;

  function playTone(freq = 540, duration = 0.065) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.032, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (_) {}
  }

  function SocialIcon({ iconKey }) {
    switch (iconKey) {
      case "orcid":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
          </svg>
        );
      case "scholar":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
          </svg>
        );
      case "osf":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <circle cx="12" cy="4" r="2.2"/><circle cx="12" cy="20" r="2.2"/>
            <circle cx="4" cy="12" r="2.2"/><circle cx="20" cy="12" r="2.2"/>
            <circle cx="6.34" cy="6.34" r="2.2"/><circle cx="17.66" cy="17.66" r="2.2"/>
            <circle cx="17.66" cy="6.34" r="2.2"/><circle cx="6.34" cy="17.66" r="2.2"/>
            <circle cx="12" cy="12" r="2.5"/>
          </svg>
        );
      case "rg":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.678.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.366 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.401 0 0 1 .014-.938 15.821 15.821 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.695 0-3.036.085-4.298.085-.65 0-1.174-.055-1.56-.106v.621c.862.138 1.249.498 1.249 1.565v10.22c0 1.067-.387 1.427-1.249 1.565v.62c.65-.05 1.384-.084 2.266-.084.916 0 1.714.034 2.456.085v-.621c-.862-.138-1.248-.498-1.248-1.565V14.4h1.11c1.127 0 1.737.278 2.416 1.236l2.063 2.93c1.043 1.484 1.98 1.883 3.241 1.883.428 0 .805-.05 1.084-.126v-.58c-.616-.063-1.155-.423-1.766-1.268l-2.326-3.204c-.506-.698-.949-1.085-1.588-1.268v-.06c1.572-.35 2.741-1.454 2.741-3.153 0-2.467-1.84-3.954-4.781-3.954zm-.56 7.365H5.833V7.185c.445-.068 1.028-.102 1.637-.102 1.838 0 2.965.916 2.965 2.987 0 2.025-1.053 3.13-2.778 3.13z"/>
          </svg>
        );
      case "github":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
    }
  }

  function ProfileAvatar({ accent }) {
    const [imgFailed, setImgFailed] = useState(false);
    return (
      <div
        className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-[#121620] transition-all duration-300"
        style={{ border: `2px solid ${accent}`, boxShadow: `0 0 24px ${accent}25` }}
      >
        {!imgFailed ? (
          <img
            src="./assets/profile.jpg"
            alt="Hasan Goulichli"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-2">
            <span className="font-mono text-2xl font-bold tracking-wider" style={{ color: accent }}>HG</span>
            <span className="text-[10px] font-mono text-gray-400 mt-1">assets/profile.jpg</span>
          </div>
        )}
      </div>
    );
  }

  function FrameWrapper({ focusMode, accent, frameRadius, fontScale, onFontScaleChange, lang, children }) {
    if (focusMode) {
      // Focus Mode ON: Stepped / Bracketed Bays + Calm High-Legibility Reader Layout
      return (
        <div className="relative px-4 sm:px-10 py-9 my-4 rounded-2xl bg-[#101520]/95 transition-all duration-300">
          {/* Top-Left Stepped Bracket */}
          <div className="pointer-events-none absolute top-0 left-0 flex flex-col">
            <div className="flex items-start">
              <div className="w-12 sm:w-20 h-2 rounded-tl-md" style={{ backgroundColor: accent }} />
              <div className="w-6 sm:w-12 h-1 mt-0.5 ml-1 rounded-r-full opacity-70" style={{ backgroundColor: accent }} />
            </div>
            <div className="w-2 h-12 sm:h-16 rounded-bl-full" style={{ backgroundColor: accent }} />
          </div>

          {/* Bottom-Right Stepped Bracket */}
          <div className="pointer-events-none absolute bottom-0 right-0 flex flex-col items-end">
            <div className="w-2 h-12 sm:h-16 rounded-tr-full" style={{ backgroundColor: accent }} />
            <div className="flex items-end">
              <div className="w-6 sm:w-12 h-1 mb-0.5 mr-1 rounded-l-full opacity-70" style={{ backgroundColor: accent }} />
              <div className="w-12 sm:w-20 h-2 rounded-br-md" style={{ backgroundColor: accent }} />
            </div>
          </div>

          {/* Focus Reader Bar (Text Size Stepper) */}
          <div className="max-w-2xl mx-auto mb-6 pb-3 border-b border-gray-800/80 flex items-center justify-between gap-2 text-xs font-mono text-gray-400">
            <span style={{ color: accent }}>
              {lang === "tr" ? "OKUMA ODAĞI · GENİŞ SATIR ARALIĞI" : "READER FOCUS · OPTIMAL MEASURE (65ch)"}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onFontScaleChange(Math.max(90, fontScale - 5))}
                className="px-2 py-0.5 rounded bg-[#161D2C] border border-gray-700 hover:border-gray-500 text-gray-200 cursor-pointer"
                title="Decrease text size"
              >
                A-
              </button>
              <span className="px-1 text-[11px]">{fontScale}%</span>
              <button
                type="button"
                onClick={() => onFontScaleChange(Math.min(125, fontScale + 5))}
                className="px-2 py-0.5 rounded bg-[#161D2C] border border-gray-700 hover:border-gray-500 text-gray-200 cursor-pointer"
                title="Increase text size"
              >
                A+
              </button>
            </div>
          </div>

          {/* Narrower 65ch optimal reading column with relaxed line height */}
          <div
            className="max-w-2xl mx-auto focus-reader-content text-[#F3F4F6] leading-[1.8] tracking-[0.01em]"
            style={{ fontSize: `${fontScale}%` }}
          >
            {children}
          </div>
        </div>
      );
    }

    // Focus Mode OFF: PADD Tablet Frame (lower-decks-padd inspired)
    return (
      <div
        className="relative bg-[#0E121B]/95 p-5 sm:p-8 my-4 transition-all duration-300"
        style={{
          borderRadius: frameRadius || "1.5rem",
          border: `1.5px solid ${accent}66`,
          boxShadow: `0 0 36px ${accent}14`
        }}
      >
        {/* Top PADD Accent Bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-2.5 w-10 rounded-full" style={{ backgroundColor: accent }} />
          <div className="h-1.5 flex-1 rounded-full opacity-35" style={{ backgroundColor: accent }} />
          <div className="h-2.5 w-4 rounded-full opacity-80" style={{ backgroundColor: accent }} />
          <div className="h-2.5 w-16 rounded-full" style={{ backgroundColor: accent }} />
        </div>

        <div>{children}</div>

        {/* Bottom PADD Accent Bar */}
        <div className="flex items-center gap-2 mt-8">
          <div className="h-2 w-16 rounded-full" style={{ backgroundColor: accent }} />
          <div className="h-2 w-3 rounded-full opacity-75" style={{ backgroundColor: accent }} />
          <div className="h-1 flex-1 rounded-full opacity-30" style={{ backgroundColor: accent }} />
          <div className="h-2 w-8 rounded-full" style={{ backgroundColor: accent }} />
        </div>
      </div>
    );
  }

  return { playTone, SocialIcon, ProfileAvatar, FrameWrapper };
})();
