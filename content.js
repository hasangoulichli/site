// ============================================================================
// HASAN GOULICHLI (GÜLİÇLİ) — BILINGUAL ACADEMIC PORTFOLIO DATA
// Edit this file to update text, publications, projects, blog posts, or tools
// without modifying index.html.
// ============================================================================

window.SITE_CONTENT = {
  en: {
    brandName: "Hasan Goulichli",
    roleTitle: "Psychology Lecturer & Applied Cognitive Psychology Researcher",
    affiliation: "Eastern Mediterranean University (EMU) · Utrecht University Alumni",
    location: "Kyrenia, Cyprus",
    controls: {
      focusOn: "Focus Mode: ON",
      focusOff: "Focus Mode: OFF",
      soundOn: "Audio: ON",
      soundOff: "Audio: OFF",
      langLabel: "TR"
    },
    nav: {
      home: "Home",
      publications: "Publications",
      projects: "Projects",
      blog: "Blog",
      teaching: "Teaching",
      tools: "Tools",
      beyond: "Beyond Research",
      cv: "CV",
      contact: "Contact"
    },
    home: {
      badge: "PREPARING FOR 2027 PHD INTAKE",
      headline: "Bridging Naturalistic Behavioral Observation & Computational Methods",
      bioTitle: "About Me",
      bioParagraphs: [
        "I am a research psychologist and part-time lecturer in the Department of Psychology at Eastern Mediterranean University (EMU), holding an M.Sc. in Applied Cognitive Psychology from Utrecht University (funded by the EU Postgraduate Scholarship).",
        "My research investigates how people navigate real-world social environments—combining large-scale naturalistic field observation, ELAN micro-behavioral video coding, virtual reality (VR) experimental paradigms, and automated Python time-series pipelines.",
        "Before transitioning into academia, I trained in electrical/electronic maintenance and worked for 12 years across hospitality operations and live casino tables (including 8 years as a croupier). Observing thousands of real-time human decisions under pressure shaped my focus on ecological validity, social mimicry, cognitive ergonomics, and human-AI epistemic trust."
      ],
      interestsTitle: "Core Research Interests",
      interests: [
        { label: "Social Cognition", detail: "Self-boundary elasticity, behavioral contagion, reflection-gazing, and social mimicry." },
        { label: "Behavioral & Computational Methods", detail: "Naturalistic field observation, gaze synchrony, proxemics, ELAN micro-coding, and Python log-parsing pipelines." },
        { label: "Applied & Human-AI Domains", detail: "Calibrated trust in AI & science communication, motivated deception, eyewitness memory, and VR paradigms." }
      ],
      personalNoteTitle: "Outside the Lab",
      personalNote: "Outside of teaching and coding data pipelines, I enjoy hands-on woodworking and concrete craft projects, coastal walks along the Kyrenia shoreline, tending Mediterranean plants, and designing high-contrast, low-friction software interfaces."
    },
    publications: {
      title: "Publications & Conference Presentations",
      subtitle: "Peer-reviewed journal articles, conference talks, thesis archive, and manuscripts currently in preparation.",
      sections: [
        {
          heading: "Peer-Reviewed Journal Articles",
          items: [
            {
              status: "Published · 2026",
              citation: "Gado, S., Kristianto, V., Goulichli, H., Pazhoohi, F., Hessels, R. S., Foulsham, T., & Kingstone, A. (2026). Attentional territories: The influence of gaze and interpersonal distance in the navigation of public space. British Journal of Psychology, 00, 1–14.",
              role: "Author & Researcher — Utrecht site naturalistic data collection (N = 1,052; multi-site N = 4,680) and ELAN micro-behavioral coding.",
              links: [
                { label: "DOI: 10.1111/bjop.70116", url: "https://doi.org/10.1111/bjop.70116" },
                { label: "OSF Open Data (XKJ5R)", url: "https://doi.org/10.17605/OSF.IO/XKJ5R" }
              ]
            }
          ]
        },
        {
          heading: "Conference Oral Presentations",
          items: [
            {
              status: "Presented · Aug 2025",
              citation: "Çelik, D., Kaya Kızılöz, B., Imran, A., Sarı, G., Adıgüzel, D., Goulichli, H., & Önder, A. (2025, August). The effectiveness and ecological validity of VR in eyewitness memory research [Oral presentation]. Annual Conference of the European Association of Psychology and Law (EAPL), Vilnius, Lithuania.",
              role: "Co-author — VR experimental data collection, protocol management, and behavioral coding.",
              links: []
            }
          ]
        },
        {
          heading: "Master's Thesis",
          items: [
            {
              status: "Archived · Jun 2025",
              citation: "Goulichli, H. (2025). The Influence of Virtual Body Ownership on the Extended Self: Presence as a Mediator and Empathy as a Covariate (Master's thesis, Utrecht University, Netherlands).",
              role: "Sole author — Experimental design, statistical mediation/covariate modeling, and interdisciplinary thesis execution.",
              links: [
                { label: "Utrecht University Repository", url: "https://studenttheses.uu.nl/handle/20.500.12932/49980" }
              ]
            }
          ]
        },
        {
          heading: "Manuscripts in Preparation",
          items: [
            {
              status: "In Preparation · First Author",
              citation: "Goulichli, H., Li, J., Yan, F., & Hessels, R. S. (in preparation). Our Reflection in the Shop Window: Spatial Geometry and Temporal Buffering in the Contagion of Public Self-Monitoring (Project: Reflection on the Road). Utrecht University.",
              role: "First Author & Methodological Lead — Naturalistic design (N = 4,710–5,035), Python 3–10s exposure-window extraction, Immortal Time Bias & Audience Effect controls.",
              links: []
            },
            {
              status: "In Preparation · Co-Author",
              citation: "Çelik, D., Karakuş Akalın, P., & Goulichli, H. (in preparation). The impact of harassment type and victim response on bystander intervention: Findings from a vignette experiment. Eastern Mediterranean University.",
              role: "Co-Investigator — Study conceptualization, ethics application, experimental vignette validation, and initial data collection (n = 400).",
              links: []
            }
          ]
        }
      ]
    },
    projects: {
      title: "Research Pipelines & Projects",
      subtitle: "Active and completed empirical investigations across naturalistic observation, VR eyewitness paradigms, and social cognition.",
      items: [
        {
          title: "Reflection on the Road (Our Reflection in the Shop Window)",
          status: "Ongoing",
          period: "Jul 2025 – Present · Utrecht University (Alumni Project)",
          meta: "Lead Researcher · Supervisor: Dr. Roy S. Hessels · N = 4,710–5,035",
          summary: "Large-scale naturalistic field study examining behavioral contagion and social mimicry in public reflection-gazing. Built custom Python time-series log parsers to isolate 3–10s mimicry reaction windows and statistically controlled for Immortal Time Bias and the Audience Effect.",
          tags: ["Naturalistic Observation", "Python", "Time-Series Parsing", "Logistic Regression"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Attentional Territories: Gaze & Proxemics in Public Space",
          status: "Published",
          period: "Oct 2024 – Feb 2025 · Utrecht University (Helmholtz Institute)",
          meta: "Research Intern · Supervisor: Dr. Roy S. Hessels · N = 1,052 (Multi-site N = 4,680)",
          summary: "Controlled field paradigm testing how direct, averted, and no-gaze cues interact with interpersonal distance to shape pedestrian trajectory adjustments and walking speed. Micro-coded video interactions in ELAN; published in British Journal of Psychology (2026).",
          tags: ["ELAN Micro-Coding", "Proxemics", "Gaze Synchrony", "Open Data"],
          links: [
            { label: "BJP Article", url: "https://doi.org/10.1111/bjop.70116" },
            { label: "OSF Dataset", url: "https://doi.org/10.17605/OSF.IO/XKJ5R" }
          ],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Motivational Drivers of Deception & VR Eyewitness Memory",
          status: "Presented",
          period: "Feb 2023 – Sep 2025 · EMU Applied Memory & Forensic Psychology Lab",
          meta: "Summer Research Intern (2025) & Research Assistant (2023–2024)",
          summary: "Evaluated ecological validity of VR eyewitness setups (presented at EAPL 2025 Vilnius) and subsequently designed experimental paradigms testing how protect vs. accuse motivational incentives shape deception cues, memory accuracy, and response latencies.",
          tags: ["Virtual Reality", "Forensic Psychology", "Deception Coding", "EAPL 2025"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Bystander Intervention in Transit Environments",
          status: "In Preparation",
          period: "Feb 2023 – Present · Eastern Mediterranean University",
          meta: "Co-Investigator · Multi-study factorial design (Target N = 1,400; Study 1 n = 400)",
          summary: "Co-designed a three-study vignette experiment investigating how harassment type (non-verbal, verbal, physical), victim response (freeze, flight, fight), and repeated exposure influence bystander intervention intentions and perceived seriousness.",
          tags: ["Factorial Vignettes", "Ethics Design", "ANCOVA", "Social Cognition"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Early Undergraduate Research & Departmental Assistantships",
          status: "Completed",
          period: "Jul 2022 – Jul 2025 · EMU Department of Psychology",
          meta: "Departmental Student Assistant & PIM Research Group Member",
          summary: "Supported Asst. Prof. Dr. Pelin Karakuş Akalın in departmental lab workflows and the Place, Identity and Memory (PIM) Research Group (cognitive mapping and brief initial visual-icon coding on a wedding invitations study before stepping back from that project). Also earned a Certificate of Appreciation (July 2022) for data collection support on 'The Parental and Individual Predictors of Sharenting Within a Turkish Speaking Sample.'",
          tags: ["Lab Operations", "Cognitive Mapping", "Survey Data Collection"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        }
      ]
    },
    blog: {
      title: "Field Notes & Writing",
      subtitle: "Reflections on ecological validity, behavioral micro-coding, cognitive ergonomics, and building reproducible workflows.",
      posts: [
        {
          date: "2026",
          category: "Methodology",
          title: "Why Naturalistic Observation Still Needs Computational Rigor",
          excerpt: "Real-world sidewalks are noisy—pedestrians cluster, occlude one another, and react within narrow time windows. Combining ELAN micro-coding with Python temporal filtering lets us keep ecological validity without surrendering statistical control.",
          readTime: "3 min note",
          imageUrl: "",
          audioUrl: ""
        },
        {
          date: "2026",
          category: "Cognitive Ergonomics",
          title: "Designing Academic Interfaces for Low Cognitive Load",
          excerpt: "Why this portfolio uses a single centered reading column, distinct color-coded functional zones, and a toggleable Focus Mode: reducing task-switching friction helps readers scan research outputs effortlessly.",
          readTime: "2 min note",
          imageUrl: "",
          audioUrl: ""
        }
      ]
    },
    teaching: {
      title: "Teaching & Academic Mentorship",
      subtitle: "Undergraduate instruction and peer mentoring in English and Turkish at Eastern Mediterranean University.",
      philosophyTitle: "Teaching Philosophy",
      philosophy: "I structure psychology courses around active recall, modular cognitive load management, and live classroom reenactments of classic empirical studies. Rather than treating introductory lectures as passive memorization, I pair structured visual frameworks and memory techniques with transparent, fair assessment standards.",
      appointmentsTitle: "Lecturer Appointments (EMU · Sep 2025 – Present)",
      courses: [
        {
          code: "PSKL100",
          name: "General Psychology (Psikolojiye Giriş)",
          detail: "Part-time Lecturer · 70–90 students · 3-hour weekly sessions",
          description: "Designed and delivered bilingual curricula covering learning, memory, perception, and social influence using topic-based workshops, interactive presentations, and classroom study reenactments. Authored and graded midterm and final examinations."
        },
        {
          code: "PSYC111",
          name: "Psychological Science",
          detail: "Part-time Lecturer · 60 students · 3-hour weekly modules",
          description: "Structured foundational modules using mini-lessons, guided empirical discussions, and interactive demonstrations to connect research methodology with everyday cognition."
        },
        {
          code: "PSYC497 / PSKL497",
          name: "Ethics in Psychology / Psikolojide Etik",
          detail: "Substitute Lecturer · English & Turkish sections",
          description: "Delivered core lectures and facilitated bilingual seminar discussions on ethical frameworks, research integrity, and professional dilemmas in psychological practice."
        }
      ],
      mentoringTitle: "Undergraduate Peer Mentoring (EMU · Sep 2022 – Jun 2024)",
      mentoringSummary: "Led weekly face-to-face and virtual study workshops, formative assessment preparation, and one-to-one academic support across four undergraduate courses:",
      mentoringCourses: [
        "PSKL109 — Introduction to Psychology II (Fall 2022–2023 · Certificate of Appreciation)",
        "FELS104 / FELS107 — Introduction to Philosophy (Spring 2022–2023 · Certificate of Appreciation)",
        "PSKL116 — Undergraduate Psychology Core Support (2023–2024)",
        "PSKL370 — Advanced Undergraduate Tutorial Leadership (2023–2024)"
      ]
    },
    tools: {
      title: "Software Tools & Code Pipelines",
      subtitle: "Custom Python analysis pipelines, research automation utilities, and full-stack web applications.",
      items: [
        {
          name: "ELAN + Python Behavioral Time-Series Pipeline",
          status: "Repository Packaging (Phase 3)",
          stack: ["Python", "Pandas", "SciPy", "statsmodels", "ELAN"],
          description: "Custom Python log-parsing algorithms designed for naturalistic observation datasets (N > 5,000) to extract 3–10 second social exposure windows, compute inter-rater metrics, and run ecological confound controls (Immortal Time Bias, Audience Effect).",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub Profile (Repo Coming Soon)"
        },
        {
          name: "Automated Academic Literature Assistant (Arastirma_Asistani)",
          status: "Active Utility",
          stack: ["Python", "CustomTkinter", "Pandas", "Excel Export"],
          description: "Desktop utility automating multi-database literature queries, structured screening metadata extraction, and reproducible spreadsheet exports for systematic reviews.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "View on GitHub"
        },
        {
          name: "Real-Time Restaurant Ordering & POS Web App",
          status: "Deployed in Production",
          stack: ["React", "Tailwind CSS", "Supabase", "Vercel"],
          description: "Architected and deployed a live, low-friction web ordering and point-of-sale application for high-paced hospitality workflows with real-time table synchronization.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "View on GitHub"
        },
        {
          name: "Computer Vision & Experimental Stimulus Toolkit",
          status: "Exploratory / Lab Stack",
          stack: ["Python", "YOLO", "GIMP", "Qualtrics", "Power Query"],
          description: "Workflows combining object/pose detection prototypes (YOLO), stimulus preparation, and automated survey data cleaning for behavioral experiments.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub Profile"
        }
      ]
    },
    beyond: {
      title: "Beyond Research",
      subtitle: "Civic engagement, student & NGO leadership, conference organizing, and cross-field operational experience outside core cognitive psychology.",
      groups: [
        {
          heading: "Civic Engagement & NGO Leadership",
          transferable: "Transferable strengths: NGO governance, interdisciplinary advocacy, crisis logistics, and public science communication.",
          items: [
            {
              role: "General Secretary & Academic Studies Team Co-Founder",
              org: "Queer Cyprus Association (Kuir Kıbrıs Derneği) · Nicosia",
              period: "Nov 2022 – Jun 2024",
              details: "Served on the executive board as General Secretary (from Aug 2023). Co-founded the Academic Studies Team to bridge civil rights advocacy with empirical social science, developed public health awareness resources, and managed organizational records."
            },
            {
              role: "Management Board Secretary & Commission Coordinator",
              org: "Turkish Psychological Association (TPD), Student Unit of Cyprus",
              period: "Dec 2022 – Dec 2023",
              details: "Served as Board Secretary, Vice Member, Representative Commission Coordinator, Social Media & Design Commission Coordinator, and Women & Gender Studies Student Commission Coordinator—organizing national student outreach campaigns and inter-university seminars."
            },
            {
              role: "Academic Event Team Leader",
              org: "Turkish Psychology Students Study Group (TPÖÇG) · Cyprus Unit",
              period: "Jul 2022 – Aug 2023",
              details: "Coordinated 10 academic psychology workshops and seminars across Cyprus and led logistical and transportation coordination for student earthquake relief initiatives involving 500+ students."
            },
            {
              role: "Founding Charter & Branding Contributor",
              org: "KAPSA (Inclusive Research & Psychosocial Health Network Association)",
              period: "Dec 2025 – Jan 2026",
              details: "Drafted the bilingual founding charter and designed visual branding for a regional psychosocial research and health network."
            }
          ]
        },
        {
          heading: "University Leadership & Conference Committees",
          transferable: "Transferable strengths: Event logistics, debate facilitation, cross-functional committee coordination, and student onboarding.",
          items: [
            {
              role: "Founding President",
              org: "Idea & Debate Club, Eastern Mediterranean University",
              period: "Jan 2022 – Jun 2024",
              details: "Founded and led the student debate club, expanding active membership by 300%. Organized 10 debate tournaments (including featured matches during the 16th EMU Psychology Days) and campus seminars on discrimination and presentation skills. Awarded Certificate of Success (July 2023)."
            },
            {
              role: "Symposium & Conference Organizing Committee Member",
              org: "EMU Department of Psychology",
              period: "2022 – 2024",
              details: "Served on organizing committees for the 7th Experimental Cognitive Psychology Symposium (Oct 2023) and the 14th, 15th, and 16th EMU Psychology Days. Attended the 21st National Psychology Congress (2022) workshops on VR & CBT, Sleep, and Neuropsychological Assessment."
            },
            {
              role: "Campus Support Roles (Library & Orientation)",
              org: "Eastern Mediterranean University",
              period: "Dec 2021 – Sep 2023",
              details: "Worked as Library Student Assistant at Özay Oral Library (Dec 2021 – Oct 2022) and served on the Registrar's Office Student Orientation Team (Aug–Sep 2022 & Sep 2023)."
            }
          ]
        },
        {
          heading: "Cross-Field Internships & Prior Industry Operations",
          transferable: "Transferable strengths: Real-time decision observation under pressure, team shift supervision, survey methodology revamping, and hardware troubleshooting.",
          items: [
            {
              role: "Research & Development Intern",
              org: "Civic Space · Nicosia, Cyprus",
              period: "Jul 2025 – Aug 2025",
              details: "Revamped organizational survey methodologies, managed a digital research library serving 500+ users, and supported logistics for the 200-participant international CiviCon conference."
            },
            {
              role: "Live Game Dealer (Casino Croupier) — 8 Years",
              org: "Merit Royal Hotel & Casino (2017–2021) · Liman Hotel & Casino (2014–2017) · Euro Casino (2013–2014)",
              period: "Nov 2013 – Aug 2021",
              details: "Operated fast-paced live table games (Roulette, Blackjack, and multiple Poker variants) while managing high-pressure human interactions, strict regulatory compliance, and split-second calculations."
            },
            {
              role: "Steward Foreman (Stewarding Supervisor)",
              org: "Rocks Hotel & Casino · Kyrenia, Cyprus",
              period: "Aug 2009 – Sep 2013",
              details: "Supervised daily stewarding operations, inventory/material control, work-tracking workflows, and staff shift scheduling."
            },
            {
              role: "Technical & Engineering Foundation",
              org: "Girne American University & Sedat Simavi Technical High School",
              period: "2006 – 2014",
              details: "Graduated in Electrical/Electronic Maintenance & Repair Technology (8.85/10) and completed undergraduate coursework in Electrical & Electronics Engineering—providing practical intuition for lab hardware, VR setups, and computational tooling."
            }
          ]
        }
      ]
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Academic qualifications, honors, fellowships, and technical competencies.",
      downloadLabel: "Download Full CV (PDF)",
      educationTitle: "Education & Qualifications",
      education: [
        {
          degree: "M.Sc. in Applied Cognitive Psychology",
          institution: "Utrecht University, Netherlands",
          period: "Sep 2024 – Sep 2025",
          details: "Grade: 7.27 / 10.00 · EU Postgraduate Scholarship · Selected for Graduate Honors Interdisciplinary Seminars (GHIS) under Prof. Dr. Bert Theunissen, Prof. Dr. Maarten Prak, and Prof. Dr. Frits van Oostrom."
        },
        {
          degree: "B.Sc. in Psychology (High Honors)",
          institution: "Eastern Mediterranean University, Cyprus",
          period: "Sep 2021 – Jun 2024",
          details: "GPA: 3.84 / 4.00 (96.26 / 100.00; completed 4-year degree in 3 years) · 50% Undergraduate Merit Scholarship · 5× High Honour Certificates & 1× Honour Certificate."
        },
        {
          degree: "Electrical & Electronics Engineering Coursework & Technical Diploma",
          institution: "Girne American University (2007–2008, 2013–2014) · Sedat Simavi Technical High School (2006–2009)",
          period: "2006 – 2014",
          details: "Diploma in Electrical/Electronic Maintenance & Repair Technology (8.85 / 10.00) and foundational engineering coursework."
        }
      ],
      awardsTitle: "Grants, Fellowships & Honors",
      awards: [
        "EU Postgraduate Scholarship (2024–2025) — Fully funded M.Sc. tuition waiver & living stipend at Utrecht University.",
        "EMU 50% Undergraduate Merit Scholarship (2021–2024) — Top academic standing across undergraduate studies.",
        "Academic Honour Certificates (2021–2024) — 5× Certificates of High Honour & 1× Certificate of Honour (EMU).",
        "Certificate of Success (Jul 2023) — Founding President of the EMU Idea & Debate Club.",
        "Certificates of Appreciation (3×, 2022–2023) — Sharenting research support and Peer Mentoring in PSKL109 & FELS107."
      ],
      skillsTitle: "Technical, Quantitative & Language Skills",
      skills: [
        { category: "Programming & Data Pipelines", items: "Python (Pandas, SciPy, statsmodels, YOLO, time-series log parsing), R, Power Query, React, Supabase, Vercel" },
        { category: "Statistical Software & Modeling", items: "SPSS, Jamovi, MPlus, G*Power · Logistic Regression, ANCOVA, SEM, Repeated-Measures & Multilevel Models, Confound Control (Immortal Time Bias, Audience Effect)" },
        { category: "Experimental & Behavioral Tools", items: "ELAN (video micro-coding), Virtual Reality (VR) experiment setups, Qualtrics, SurveyMonkey, GIMP, Canva" },
        { category: "Languages", items: "Turkish (Native) · English (Proficient / C1; IELTS Academic 7.0 — R: 8.0, L: 7.5, W: 6.0, S: 6.0) · Russian (Basic A1)" }
      ]
    },
    contact: {
      title: "Contact & Collaboration",
      subtitle: "Open to 2027 PhD supervision inquiries, naturalistic observation collaborations, and computational cognitive science projects.",
      note: "For doctoral admissions, research collaborations, or course-related inquiries, email is the fastest way to reach me.",
      emails: [
        { label: "Academic Email (EMU)", value: "hasan.goulichli@emu.edu.tr" },
        { label: "Personal Email", value: "hasangoulichli@gmail.com" }
      ],
      locationLabel: "Location",
      locationValue: "Kyrenia (Girne), Cyprus"
    }
  },

  tr: {
    brandName: "Hasan Güliçli",
    roleTitle: "Psikoloji Öğretim Görevlisi & Uygulamalı Bilişsel Psikoloji Araştırmacısı",
    affiliation: "Doğu Akdeniz Üniversitesi (DAÜ) · Utrecht Üniversitesi Mezunu",
    location: "Girne, Kıbrıs",
    controls: {
      focusOn: "Dikkat Modu: AÇIK",
      focusOff: "Dikkat Modu: KAPALI",
      soundOn: "Ses: AÇIK",
      soundOff: "Ses: KAPALI",
      langLabel: "ENG"
    },
    nav: {
      home: "Ana Sayfa",
      publications: "Yayınlar",
      projects: "Projeler",
      blog: "Blog",
      teaching: "Öğretim",
      tools: "Araçlar",
      beyond: "Araştırma Dışı",
      cv: "Özgeçmiş",
      contact: "İletişim"
    },
    home: {
      badge: "2027 DOKTORA BAŞVURU SÜRECİNDE",
      headline: "Doğal Davranış Gözlemi ile Hesaplamalı Yöntemleri Birleştirmek",
      bioTitle: "Hakkımda",
      bioParagraphs: [
        "Doğu Akdeniz Üniversitesi (DAÜ) Psikoloji Bölümü'nde yarı zamanlı öğretim görevlisi ve araştırmacıyım. Uygulamalı Bilişsel Psikoloji yüksek lisansımı AB Yüksek Lisans Bursu kapsamında Utrecht Üniversitesi'nde tamamladım.",
        "Araştırmalarım, insanların gerçek sosyal ortamlarda nasıl karar verdiğine ve yönlendiğine odaklanır; büyük ölçekli doğal saha gözlemini, ELAN mikro-davranış video kodlamasını, sanal gerçeklik (VR) deney düzeneklerini ve Python zaman-serisi analiz hatlarını bir araya getiriyorum.",
        "Akademiye geçmeden önce elektrik-elektronik bakım eğitimi aldım ve 12 yıl boyunca turizm/operasyon ile canlı oyun masalarında (8 yıl krupiye olarak) çalıştım. Baskı altında gerçekleşen binlerce anlık insan kararını gözlemlemek; ekolojik geçerlilik, sosyal taklit, bilişsel ergonomi ve insan-yapay zeka güveni konularına odaklanmamı şekillendirdi."
      ],
      interestsTitle: "Temel Araştırma Alanlarım",
      interests: [
        { label: "Sosyal Biliş", detail: "Benlik-sınır esnekliği, davranışsal bulaşıcılık, yansımaya bakma (reflection-gazing) ve sosyal taklit." },
        { label: "Davranışsal & Hesaplamalı Yöntemler", detail: "Doğal saha gözlemi, bakış senkronizasyonu, proksemik, ELAN mikro-kodlama ve Python veri işleme hatları." },
        { label: "Uygulamalı & İnsan-YZ Alanları", detail: "Yapay zeka ve bilimde kalibre edilmiş güven, güdülenmiş aldatma, görgü tanıklığı belleği ve VR paradigmaları." }
      ],
      personalNoteTitle: "Saha ve Laboratuvar Dışında",
      personalNote: "Ders anlatımı ve veri analizi dışında ahşap ve beton el işçiliği projeleri üretmekten, Girne kıyılarında yürüyüş yapıp Akdeniz bitkileri yetiştirmekten ve bilişsel yükü düşük, yüksek kontrastlı arayüzler tasarlamaktan keyif alıyorum."
    },
    publications: {
      title: "Yayınlar ve Konferans Sunumları",
      subtitle: "Hakemli dergi makaleleri, uluslararası konferans sunumları, yüksek lisans tezi ve hazırlık aşamasındaki çalışmalar.",
      sections: [
        {
          heading: "Hakemli Dergi Makaleleri",
          items: [
            {
              status: "Yayınlandı · 2026",
              citation: "Gado, S., Kristianto, V., Goulichli, H., Pazhoohi, F., Hessels, R. S., Foulsham, T., & Kingstone, A. (2026). Attentional territories: The influence of gaze and interpersonal distance in the navigation of public space. British Journal of Psychology, 00, 1–14.",
              role: "Yazar & Araştırmacı — Utrecht sahası doğal veri toplama (N = 1.052; çok merkezli N = 4.680) ve ELAN mikro-davranış kodlaması.",
              links: [
                { label: "DOI: 10.1111/bjop.70116", url: "https://doi.org/10.1111/bjop.70116" },
                { label: "OSF Açık Veri (XKJ5R)", url: "https://doi.org/10.17605/OSF.IO/XKJ5R" }
              ]
            }
          ]
        },
        {
          heading: "Uluslararası Konferans Sözlü Sunumları",
          items: [
            {
              status: "Sunuldu · Ağu 2025",
              citation: "Çelik, D., Kaya Kızılöz, B., Imran, A., Sarı, G., Adıgüzel, D., Goulichli, H., & Önder, A. (2025, Ağustos). The effectiveness and ecological validity of VR in eyewitness memory research [Sözlü sunum]. European Association of Psychology and Law (EAPL) Yıllık Konferansı, Vilnius, Litvanya.",
              role: "Ortak Yazar — VR deneysel veri toplama, protokol yürütme ve davranışsal kodlama.",
              links: []
            }
          ]
        },
        {
          heading: "Yüksek Lisans Tezi",
          items: [
            {
              status: "Arşivlendi · Haz 2025",
              citation: "Goulichli, H. (2025). The Influence of Virtual Body Ownership on the Extended Self: Presence as a Mediator and Empathy as a Covariate (Yüksek Lisans Tezi, Utrecht Üniversitesi, Hollanda).",
              role: "Tek Yazar — Deneysel tasarım, aracılık/ortak değişken istatistiksel modellemesi ve disiplinlerarası tez yürütmesi.",
              links: [
                { label: "Utrecht Üniversitesi Tez Arşivi", url: "https://studenttheses.uu.nl/handle/20.500.12932/49980" }
              ]
            }
          ]
        },
        {
          heading: "Hazırlık Aşamasındaki Makaleler",
          items: [
            {
              status: "Hazırlanıyor · İlk Yazar",
              citation: "Goulichli, H., Li, J., Yan, F., & Hessels, R. S. (hazırlık aşamasında). Our Reflection in the Shop Window: Spatial Geometry and Temporal Buffering in the Contagion of Public Self-Monitoring (Proje: Reflection on the Road). Utrecht Üniversitesi.",
              role: "İlk Yazar & Yöntem Lideri — Doğal gözlem tasarımı (N = 4.710–5.035), Python 3–10 sn tepki penceresi çıkarımı, Immortal Time Bias ve İzleyici Etkisi kontrolleri.",
              links: []
            },
            {
              status: "Hazırlanıyor · Ortak Yazar",
              citation: "Çelik, D., Karakuş Akalın, P., & Goulichli, H. (hazırlık aşamasında). The impact of harassment type and victim response on bystander intervention: Findings from a vignette experiment. Doğu Akdeniz Üniversitesi.",
              role: "Ortak Araştırmacı — Çalışma kurgusu, etik kurul başvurusu, vinyet doğrulama ve ilk aşama veri toplama (n = 400).",
              links: []
            }
          ]
        }
      ]
    },
    projects: {
      title: "Araştırma Hatları ve Projeler",
      subtitle: "Doğal gözlem, VR görgü tanıklığı ve sosyal biliş alanlarında devam eden ve tamamlanan ampirik çalışmalar.",
      items: [
        {
          title: "Reflection on the Road (Our Reflection in the Shop Window)",
          status: "Devam Ediyor",
          period: "Tem 2025 – Günümüz · Utrecht Üniversitesi (Mezun Projesi)",
          meta: "Baş Araştırmacı · Danışman: Dr. Roy S. Hessels · N = 4.710–5.035",
          summary: "Kamusal alanda vitrin yansımasına bakma davranışındaki sosyal taklit ve bulaşıcılığı inceleyen geniş ölçekli saha çalışması. 3–10 saniyelik tepki pencerelerini ayrıştırmak için özel Python zaman-serisi algoritmaları yazıldı; Immortal Time Bias ve İzleyici Etkisi istatistiksel olarak kontrol edildi.",
          tags: ["Doğal Gözlem", "Python", "Zaman-Serisi Analizi", "Lojistik Regresyon"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Attentional Territories: Kamusal Alanda Bakış ve Mesafe",
          status: "Yayınlandı",
          period: "Eki 2024 – Şub 2025 · Utrecht Üniversitesi (Helmholtz Enstitüsü)",
          meta: "Araştırma Stajyeri · Danışman: Dr. Roy S. Hessels · N = 1.052 (Toplam N = 4.680)",
          summary: "Doğrudan, kaçınılan ve nötr bakış koşullarının kişilerarası mesafeyle etkileşerek yaya yön değişimlerini nasıl etkilediğini ölçen saha çalışması. Mikro-davranışlar ELAN ile kodlandı ve British Journal of Psychology'de (2026) yayımlandı.",
          tags: ["ELAN Mikro-Kodlama", "Proksemik", "Bakış Senkronizasyonu", "Açık Veri"],
          links: [
            { label: "BJP Makalesi", url: "https://doi.org/10.1111/bjop.70116" },
            { label: "OSF Veri Seti", url: "https://doi.org/10.17605/OSF.IO/XKJ5R" }
          ],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Görgü Tanıklığında Güdülenmiş Aldatma & VR Belleği",
          status: "Sunuldu",
          period: "Şub 2023 – Eyl 2025 · DAÜ Uygulamalı Bellek ve Adli Psikoloji Lab",
          meta: "Yaz Araştırma Stajyeri (2025) & Araştırma Asistanı (2023–2024)",
          summary: "VR görgü tanıklığı düzeneklerinin ekolojik geçerliliği incelendi (EAPL 2025 Vilnius sunumu). Devamında koruma/suçlama motivasyonlarının tanık belleği, aldatma ipuçları ve tepki süreleri üzerindeki etkisini ölçen deneysel paradigmalar tasarlandı.",
          tags: ["Sanal Gerçeklik (VR)", "Adli Psikoloji", "Aldatma Kodlaması", "EAPL 2025"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Toplu Taşıma Ortamlarında Seyirci Müdahalesi",
          status: "Hazırlanıyor",
          period: "Şub 2023 – Günümüz · Doğu Akdeniz Üniversitesi",
          meta: "Ortak Araştırmacı · 3 çalışmalı faktöriyel tasarım (Hedef N = 1.400; Çalışma 1 n = 400)",
          summary: "Taciz türü (sözsüz, sözlü, fiziksel), mağdur tepkisi (donma, kaçma, karşı koyma) ve tekrarlı tanıklığın seyircilerin müdahale niyeti ile algılanan ciddiyet üzerindeki etkisini test eden deneysel vinyet projesi.",
          tags: ["Faktöriyel Vinyet", "Etik Kurul", "ANCOVA", "Sosyal Biliş"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        },
        {
          title: "Erken Dönem Lisans Araştırmaları & Bölüm Asistanlığı",
          status: "Tamamlandı",
          period: "Tem 2022 – Tem 2025 · DAÜ Psikoloji Bölümü",
          meta: "Bölüm Öğrenci Asistanı & PIM Araştırma Grubu Üyesi",
          summary: "Yrd. Doç. Dr. Pelin Karakuş Akalın'ın öğrenci asistanı olarak bölüm laboratuvar süreçlerine ve Place, Identity and Memory (PIM) Araştırma Grubu'na destek verdim (bilişsel haritalama ve projeden çekilmeden önce düğün davetiyeleri çalışmasında başlangıç düzeyi görsel ikon girişi). Ayrıca 'Sharenting' anket veri toplama desteği için Teşekkür Belgesi (Temmuz 2022) aldım.",
          tags: ["Laboratuvar Desteği", "Bilişsel Haritalama", "Veri Toplama"],
          links: [],
          imageUrl: "",
          audioUrl: ""
        }
      ]
    },
    blog: {
      title: "Saha Notları ve Yazılar",
      subtitle: "Ekolojik geçerlilik, davranışsal mikro-kodlama, bilişsel ergonomi ve tekrarlanabilir araştırma akışları üzerine notlar.",
      posts: [
        {
          date: "2026",
          category: "Metodoloji",
          title: "Doğal Gözlem Neden Hesaplamalı Disipline İhtiyaç Duyar?",
          excerpt: "Gerçek sokaklar gürültülüdür; yayalar kümelenir, birbirinin görüşünü kapatır ve dar zaman aralıklarında tepki verir. ELAN mikro-kodlamasını Python zaman-penceresi filtrelemesiyle birleştirmek, istatistiksel kontrolü kaybetmeden ekolojik geçerliliği korumamızı sağlar.",
          readTime: "3 dk okuma",
          imageUrl: "",
          audioUrl: ""
        },
        {
          date: "2026",
          category: "Bilişsel Ergonomi",
          title: "Düşük Bilişsel Yüklü Akademik Arayüz Tasarlamak",
          excerpt: "Bu portfolyonun tek sütunlu ortalanmış okuma alanı, renk kodlu işlevsel sekmeler ve açılıp kapanabilen Dikkat Modu kullanmasının nedeni: görev değiştirme sürtünmesini azaltarak araştırma çıktılarını zahmetsizce taranabilir kılmak.",
          readTime: "2 dk okuma",
          imageUrl: "",
          audioUrl: ""
        }
      ]
    },
    teaching: {
      title: "Öğretim ve Akademik Mentorluk",
      subtitle: "Doğu Akdeniz Üniversitesi'nde Türkçe ve İngilizce lisans dersleri ve akran mentorluğu deneyimi.",
      philosophyTitle: "Öğretim Yaklaşımım",
      philosophy: "Psikoloji derslerimi aktif hatırlama, modüler bilişsel yük yönetimi ve klasik deneylerin sınıf içi canlandırmaları üzerine kuruyorum. Giriş derslerini pasif ezbere bırakmak yerine, görsel bellek tekniklerini şeffaf ve adil değerlendirme standartlarıyla birleştiriyorum.",
      appointmentsTitle: "Öğretim Görevlisi Dersleri (DAÜ · Eyl 2025 – Günümüz)",
      courses: [
        {
          code: "PSKL100",
          name: "Psikolojiye Giriş (General Psychology)",
          detail: "Yarı Zamanlı Öğretim Görevlisi · 70–90 öğrenci · Haftalık 3 saat",
          description: "Öğrenme, bellek, algı ve sosyal etki konularında konu odaklı atölyeler, etkileşimli sunumlar ve klasik çalışma canlandırmalarıyla çift dilli müfredat yürütümü; vize ve final sınavlarının hazırlanması ve değerlendirilmesi."
        },
        {
          code: "PSYC111",
          name: "Psychological Science",
          detail: "Yarı Zamanlı Öğretim Görevlisi · 60 öğrenci · Haftalık 3 saat",
          description: "Mini dersler ve yapılandırılmış tartışmalar aracılığıyla araştırma yöntemlerini gündelik bilişsel süreçlerle ilişkilendiren lisans modülleri."
        },
        {
          code: "PSYC497 / PSKL497",
          name: "Psikolojide Etik / Ethics in Psychology",
          detail: "Vekil Öğretim Görevlisi · Türkçe ve İngilizce şubeler",
          description: "Psikoloji araştırmalarında ve mesleki uygulamada etik çerçeveler ile ikilemler üzerine çift dilli ders ve seminer yürütümü."
        }
      ],
      mentoringTitle: "Lisans Akran Mentorluğu (DAÜ · Eyl 2022 – Haz 2024)",
      mentoringSummary: "Haftalık yüz yüze ve çevrim içi çalışma atölyeleri, sınav hazırlık oturumları ve birebir akademik destek yürütülen dersler:",
      mentoringCourses: [
        "PSKL109 — Psikolojiye Giriş II (Güz 2022–2023 · Teşekkür Belgesi)",
        "FELS104 / FELS107 — Felsefeye Giriş (Bahar 2022–2023 · Teşekkür Belgesi)",
        "PSKL116 — Lisans Psikoloji Ders Desteği (2023–2024)",
        "PSKL370 — İleri Düzey Lisans Tutorial Liderliği (2023–2024)"
      ]
    },
    tools: {
      title: "Yazılım Araçları ve Kod Hatları",
      subtitle: "Özel Python analiz hatları, araştırma otomasyon araçları ve tam yığın web uygulamaları.",
      items: [
        {
          name: "ELAN + Python Davranışsal Zaman-Serisi Hattı",
          status: "Repo Paketleme Aşamasında (Faz 3)",
          stack: ["Python", "Pandas", "SciPy", "statsmodels", "ELAN"],
          description: "Doğal gözlem veri setlerinden (N > 5.000) 3–10 saniyelik sosyal maruziyet pencerelerini ayıklayan, kodlayıcılar arası güvenirlik hesaplayan ve ekolojik karıştırıcı kontrollerini (Immortal Time Bias, İzleyici Etkisi) yürüten Python hattı.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub Profili (Repo Yakında)"
        },
        {
          name: "Otomatik Literatür Tarama Asistanı (Arastirma_Asistani)",
          status: "Aktif Araç",
          stack: ["Python", "CustomTkinter", "Pandas", "Excel Dışa Aktarım"],
          description: "Çoklu akademik veri tabanı sorgularını, yapılandırılmış makale özetlemeyi ve tekrarlanabilir Excel çıktısı üretimini otomatikleştiren masaüstü Python uygulaması.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub'da İncele"
        },
        {
          name: "Gerçek Zamanlı Restoran Sipariş & POS Web Uygulaması",
          status: "Canlıda Kullanılıyor",
          stack: ["React", "Tailwind CSS", "Supabase", "Vercel"],
          description: "Yoğun restoran operasyonları için anlık masa senkronizasyonlu, düşük sürtünmeli sipariş ve kasa web uygulaması.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub'da İncele"
        },
        {
          name: "Bilgisayarlı Görü & Deneysel Uyaran Araç Seti",
          status: "Keşif / Laboratuvar Yığını",
          stack: ["Python", "YOLO", "GIMP", "Qualtrics", "Power Query"],
          description: "Nesne/hareket tespiti prototipleri (YOLO), görsel uyaran hazırlama ve anket veri temizliği otomasyon iş akışları.",
          repoUrl: "https://github.com/hasangoulichli",
          repoLabel: "GitHub Profili"
        }
      ]
    },
    beyond: {
      title: "Araştırma Dışı",
      subtitle: "Temel bilişsel psikoloji araştırmalarımın dışındaki sivil toplum gönüllülükleri, öğrenci/STK liderlikleri, kongre organizasyonları ve sektör deneyimleri.",
      groups: [
        {
          heading: "Sivil Toplum ve STK Liderliği",
          transferable: "Aktarılabilir yetkinlikler: STK yönetimi, disiplinlerarası savunuculuk, kriz lojistiği ve bilim iletişimi.",
          items: [
            {
              role: "Genel Sekreter & Akademik Çalışmalar Ekibi Kurucu Ortağı",
              org: "Kuir Kıbrıs Derneği · Lefkoşa",
              period: "Kas 2022 – Haz 2024",
              details: "Ağustos 2023 itibarıyla Yönetim Kurulu Genel Sekreterliği görevini üstlendim. İnsan hakları savunuculuğunu ampirik sosyal bilim araştırmalarıyla buluşturmak için Akademik Çalışmalar Ekibi'ni kurdum, halk sağlığı farkındalık materyalleri ve kurumsal kayıt süreçlerini yürüttüm."
            },
            {
              role: "Yönetim Kurulu Sekreteri & Komisyon Koordinatörü",
              org: "Türk Psikologlar Derneği (TPD), Kıbrıs Öğrenci Birimi",
              period: "Ara 2022 – Ara 2023",
              details: "Yönetim Kurulu Sekreterliği, Temsilciler Komisyonu, Sosyal Medya & Tasarım Komisyonu ve Kadın & Toplumsal Cinsiyet Komisyonu koordinatörlüklerini yürüterek üniversiteler arası seminerler ve tanıtım etkinlikleri organize ettim."
            },
            {
              role: "Akademik Etkinlik Ekip Lideri",
              org: "Türk Psikoloji Öğrencileri Çalışma Grubu (TPÖÇG) · Kıbrıs Yerel Birimi",
              period: "Tem 2022 – Ağu 2023",
              details: "Kıbrıs genelinde 10 akademik psikoloji atölyesi ve semineri koordine ettim; 500+ öğrencinin dahil olduğu deprem dayanışma lojistiği ve ulaşım organizasyonunu yönettim."
            },
            {
              role: "Kurucu Tüzük & Görsel Kimlik Katkısı",
              org: "KAPSA (Kapsayıcı Araştırma ve Psikososyal Sağlık Ağı Derneği)",
              period: "Ara 2025 – Oca 2026",
              details: "Derneğin çift dilli kuruluş tüzüğünü hazırladım ve logo/kurumsal görsel kimlik tasarımını oluşturdum."
            }
          ]
        },
        {
          heading: "Üniversite Liderliği ve Kongre Komiteleri",
          transferable: "Aktarılabilir yetkinlikler: Etkinlik lojistiği, münazara moderasyonu, komite koordinasyonu ve öğrenci oryantasyonu.",
          items: [
            {
              role: "Kurucu Başkan",
              org: "Fikir ve Münazara Kulübü, Doğu Akdeniz Üniversitesi",
              period: "Oca 2022 – Haz 2024",
              details: "Üniversite kulübünü kurup aktif üye sayısını %300 artırdım; 16. DAÜ Psikoloji Günleri kapsamındaki karşılaşma dahil 10 münazara turnuvası ve ayrımcılık/etkili sunum seminerleri düzenledim (Başarı Belgesi, Temmuz 2023)."
            },
            {
              role: "Sempozyum ve Kongre Organizasyon Komitesi Üyesi",
              org: "DAÜ Psikoloji Bölümü",
              period: "2022 – 2024",
              details: "7. Deneysel Bilişsel Psikoloji Sempozyumu (Ekim 2023) ile 14., 15. ve 16. DAÜ Psikoloji Günleri düzenleme komitelerinde görev aldım. 21. Ulusal Psikoloji Kongresi'nde (2022) VR & BDT, Uyku ve Nöropsikolojik Değerlendirme çalışma gruplarına katıldım."
            },
            {
              role: "Kampüs Destek Görevleri (Kütüphane & Oryantasyon)",
              org: "Doğu Akdeniz Üniversitesi",
              period: "Ara 2021 – Eyl 2023",
              details: "Özay Oral Kütüphanesi'nde Öğrenci Asistanı (Ara 2021 – Eki 2022) ve Öğrenci İşleri Oryantasyon Ekibi Üyesi (Ağu–Eyl 2022 & Eyl 2023) olarak görev yaptım."
            }
          ]
        },
        {
          heading: "Farklı Alan Stajları ve Önceki Sektör Deneyimi",
          transferable: "Aktarılabilir yetkinlikler: Yüksek stres altında gerçek zamanlı davranış gözlemi, vardiya ve ekip yönetimi, anket metodolojisi iyileştirme ve donanım bilgisi.",
          items: [
            {
              role: "Araştırma ve Geliştirme (Ar-Ge) Stajyeri",
              org: "Civic Space · Lefkoşa, Kıbrıs",
              period: "Tem 2025 – Ağu 2025",
              details: "Kurumsal anket metodolojisini yeniledim, 500+ kullanıcılı dijital araştırma kütüphanesini yönettim ve 200 katılımcılı uluslararası CiviCon konferansının lojistiğine destek verdim."
            },
            {
              role: "Canlı Oyun Krupiyesi (Casino Croupier) — 8 Yıl",
              org: "Merit Royal Hotel & Casino (2017–2021) · Liman Hotel & Casino (2014–2017) · Euro Casino (2013–2014)",
              period: "Kas 2013 – Ağu 2021",
              details: "Rulet, Blackjack ve çeşitli Poker masalarında yüksek baskı altında anlık hesaplama, kural uyumu ve karmaşık insan etkileşimi yönetimi deneyimi kazandım."
            },
            {
              role: "Stewarding Şefi (Operasyon Sorumlusu)",
              org: "Rocks Hotel & Casino · Girne, Kıbrıs",
              period: "Ağu 2009 – Eyl 2013",
              details: "Günlük operasyon denetimi, malzeme/envanter kontrolü, iş takip sistemleri ve personel vardiya planlamasını yönettim."
            },
            {
              role: "Teknik ve Mühendislik Altyapısı",
              org: "Girne Amerikan Üniversitesi & Sedat Simavi Endüstri Meslek Lisesi",
              period: "2006 – 2014",
              details: "Elektrik-Elektronik Bakım ve Onarım Teknolojisi diploması (8.85/10) ve Elektrik-Elektronik Mühendisliği lisans dersleri; bugünkü laboratuvar donanımı, VR kurulumları ve yazılım geliştirme süreçlerime pratik temel oluşturdu."
            }
          ]
        }
      ]
    },
    cv: {
      title: "Özgeçmiş (CV)",
      subtitle: "Akademik eğitim, burslar, ödüller ve teknik yetkinlik özeti.",
      downloadLabel: "Tam CV'yi İndir (PDF)",
      educationTitle: "Eğitim ve Akademik Dereceler",
      education: [
        {
          degree: "Uygulamalı Bilişsel Psikoloji Yüksek Lisansı (M.Sc.)",
          institution: "Utrecht Üniversitesi, Hollanda",
          period: "Eyl 2024 – Eyl 2025",
          details: "Not Ortalaması: 7.27 / 10.00 · AB Yüksek Lisans Bursu · Prof. Dr. Bert Theunissen, Prof. Dr. Maarten Prak ve Prof. Dr. Frits van Oostrom yürütücülüğünde Graduate Honors Interdisciplinary Seminars (GHIS) seçkisi."
        },
        {
          degree: "Psikoloji Lisansı (Yüksek Şeref)",
          institution: "Doğu Akdeniz Üniversitesi, Kıbrıs",
          period: "Eyl 2021 – Haz 2024",
          details: "GNO: 3.84 / 4.00 (96.26 / 100.00; 4 yıllık lisans 3 yılda tamamlandı) · %50 Başarı Bursu · 5× Yüksek Şeref & 1× Şeref Belgesi."
        },
        {
          degree: "Elektrik-Elektronik Mühendisliği Dersleri & Teknik Lise Diploması",
          institution: "Girne Amerikan Üniversitesi (2007–2008, 2013–2014) · Sedat Simavi EML (2006–2009)",
          period: "2006 – 2014",
          details: "Elektrik-Elektronik Bakım ve Onarım Teknolojisi Diploması (8.85 / 10.00) ve temel mühendislik dersleri."
        }
      ],
      awardsTitle: "Burslar ve Akademik Ödüller",
      awards: [
        "AB Yüksek Lisans Bursu (2024–2025) — Utrecht Üniversitesi tam eğitim ücreti ve yaşam bursu.",
        "DAÜ %50 Lisans Başarı Bursu (2021–2024) — Üstün akademik başarı bursu.",
        "Yüksek Şeref ve Şeref Belgeleri (2021–2024) — 5× Yüksek Şeref & 1× Şeref Belgesi (DAÜ).",
        "Başarı Belgesi (Tem 2023) — DAÜ Fikir ve Münazara Kulübü Kurucu Başkanlığı.",
        "Teşekkür Belgeleri (3×, 2022–2023) — Sharenting araştırması veri desteği ve PSKL109 & FELS107 akran mentorluğu."
      ],
      skillsTitle: "Teknik, İstatistiksel ve Dil Yetkinlikleri",
      skills: [
        { category: "Programlama ve Veri Hatları", items: "Python (Pandas, SciPy, statsmodels, YOLO, zaman-serisi ayrıştırma), R, Power Query, React, Supabase, Vercel" },
        { category: "İstatistik ve Modelleme", items: "SPSS, Jamovi, MPlus, G*Power · Lojistik Regresyon, ANCOVA, SEM, Tekrarlı Ölçümler & Çok Düzeyli Modeller, Karıştırıcı Kontrolü (Immortal Time Bias, İzleyici Etkisi)" },
        { category: "Deneysel ve Davranışsal Araçlar", items: "ELAN (video mikro-kodlama), Sanal Gerçeklik (VR) deney kurulumları, Qualtrics, SurveyMonkey, GIMP, Canva" },
        { category: "Diller", items: "Türkçe (Ana Dil) · İngilizce (İleri / C1; IELTS Academic 7.0 — Okuma: 8.0, Dinleme: 7.5, Yazma: 6.0, Konuşma: 6.0) · Rusça (Temel A1)" }
      ]
    },
    contact: {
      title: "İletişim ve İş Birliği",
      subtitle: "2027 doktora danışmanlık görüşmeleri, doğal gözlem çalışmaları ve hesaplamalı bilişsel bilim iş birliklerine açığım.",
      note: "Doktora başvuruları, araştırma iş birlikleri veya derslerle ilgili sorular için en hızlı iletişim yolu e-postadır.",
      emails: [
        { label: "Akademik E-posta (DAÜ)", value: "hasan.goulichli@emu.edu.tr" },
        { label: "Kişisel E-posta", value: "hasangoulichli@gmail.com" }
      ],
      locationLabel: "Konum",
      locationValue: "Girne, Kıbrıs"
    }
  }
};
