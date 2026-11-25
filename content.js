// ============================================================================
// HASAN GOULICHLI (GÜLİÇLİ) — ACADEMIC PORTFOLIO CONTENT DATA
// Edit this file to add new blog posts, projects, publications, or tools.
// No HTML or React knowledge required—just add new objects { ... } to the lists!
// ============================================================================

window.SITE_CONTENT = {
en: {
bioTitle: "Lecturer & Cognitive Psychology Researcher",
bioSub: "Eastern Mediterranean University | Utrecht University Alumnus",
bioText: "Cognitive psychologist specializing in ecological validity, visual attention, virtual body ownership, and human-technology interaction. Combining 8 years of high-stakes live observational experience with quantitative experimental science.",
extendedStory: "My path to cognitive science began outside the laboratory. With an early academic foundation in Electrical & Electronics Engineering and eight years working as a live casino croupier, I developed a keen intuition for micro-behavioral observation, attention shifts, and social dynamics under real-time pressure. Today, after earning my MSc in Applied Cognitive Psychology at Utrecht University (GPA 7.27/10) and BSc with High Honors at EMU (GPA 3.84/4.00), I bridge naturalistic field observation with computational data pipelines (ELAN, Python, YOLO) and virtual reality paradigms. I am preparing for doctoral studies in 2027 focusing on cognitive ergonomics, human-AI trust, and social cognition.",
personalNoteTitle: "Beyond the Lab & Field",
personalNoteText: "Outside research and teaching, I served as General Secretary and co-founded the Academic Studies team at Queer Cyprus Association, held board and coordinator roles in the Turkish Psychological Association (TPD) Student Unit & TPÖÇG, and led the EMU Idea & Debate Club. I enjoy cognitive ergonomics interface design, coastal walks in Kyrenia, and evidence-based science communication.",

publicationsList: [
  {
    type: "Journal Article",
    year: "2026",
    status: "Published",
    citation: "Gado, S., Kristianto, V., Goulichli, H., Pazhoohi, F., Hessels, R. S., Foulsham, T., & Kingstone, A. (2026). Attentional territories: The influence of gaze and interpersonal distance in the navigation of public space. British Journal of Psychology, 00, 1–14.",
    doi: "https://doi.org/10.1111/bjop.70116",
    osf: "https://doi.org/10.17605/OSF.IO/XKJ5R",
    summary: "Naturalistic behavioral study (N = 1,052 at Utrecht site; N = 4,680 total across labs) mapping how direct vs. averted gaze and interpersonal proximity shape real-world pedestrian trajectory adjustments."
  },
  {
    type: "Conference Oral Presentation",
    year: "2025",
    status: "Presented",
    citation: "Çelik, D., Kaya Kızılöz, B., Imran, A., Sarı, G., Adıgüzel, D., Goulichli, H., & Önder, A. (2025, August). The effectiveness and ecological validity of VR in eyewitness memory research. Annual Conference of the European Association of Psychology and Law (EAPL), Vilnius, Lithuania.",
    doi: "",
    osf: "",
    summary: "Investigated whether immersive Virtual Reality scenarios preserve ecological memory fidelity compared to traditional video paradigms in forensic eyewitness settings."
  },
  {
    type: "Master's Thesis",
    year: "2025",
    status: "Published (UU Repository)",
    citation: "Goulichli, H. (2025). The Influence of Virtual Body Ownership on the Extended Self: Presence as a Mediator and Empathy as a Covariate. Master's Thesis, Utrecht University.",
    doi: "https://studenttheses.uu.nl/handle/20.500.12932/49980",
    osf: "",
    summary: "Examined how illusory ownership over virtual avatars shifts self-boundary elasticity, mediated by spatial presence and moderated by trait empathy."
  },
  {
    type: "Manuscript in Preparation",
    year: "2026",
    status: "First Author • In Prep",
    citation: "Goulichli, H., Li, J., Yan, F., & Hessels, R. S. (in preparation). Our Reflection in the Shop Window: Spatial Geometry and Temporal Buffering in the Contagion of Public Self-Monitoring. Utrecht University.",
    doi: "",
    osf: "",
    summary: "Naturalistic observation study (N = 5,035) modeling spatial geometry, temporal buffering, and behavioral contagion in public reflection-gazing."
  },
  {
    type: "Manuscript in Preparation",
    year: "2026",
    status: "In Preparation",
    citation: "Çelik, D., Karakuş Akalın, P., & Goulichli, H. (in preparation). The impact of harassment type and victim response on bystander intervention: Findings from a vignette experiment.",
    doi: "",
    osf: "",
    summary: "Multi-study experimental framework examining non-verbal, verbal, and physical harassment scenarios across transit environments (N = 1,400 target)."
  }
],

projectsList: [
  {
    id: 'reflection-road',
    title: "Our Reflection in the Shop Window (Reflection on the Road)",
    role: "First Author & Lead Researcher | Utrecht University (Supervised by Dr. Roy S. Hessels)",
    status: "Active / Manuscript",
    sample: "N = 5,035 Pedestrians",
    methods: ["Naturalistic Observation", "Python Time-Window Extraction", "Immortal Time Bias Control"],
    desc: "Investigating behavioral contagion and gaze-following in public environments. Engineered custom Python scripts to isolate 3–10 second exposure windows while controlling for ecological confounds and audience effects.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'attentional-territories',
    title: "Attentional Territories in Public Navigation",
    role: "Research Intern | Utrecht University (Helmholtz Institute)",
    status: "Completed & Published",
    sample: "N = 1,052 Utrecht (N = 4,680 Total)",
    methods: ["ELAN Video Micro-Coding", "Proxemics", "Gaze Manipulation"],
    desc: "Field experiment testing the joint impact of direct, averted, and no gaze alongside interpersonal distance on pedestrian spatial navigation.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'forensic-deception',
    title: "Motivational Drivers of Deception in Eyewitness Testimony",
    role: "Summer Research Intern | EMU Forensic Psychology Lab",
    status: "Ongoing Analysis",
    sample: "Experimental VR & Lab Cohort",
    methods: ["Behavioral Deception Coding", "Response Latency Modeling", "Incentive Paradigms"],
    desc: "Selected among 9 interns to design paradigms measuring how protective vs. accusatory motivational structures distort eyewitness recall.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'transit-bystander',
    title: "Bystander Intervention in Transit Environments",
    role: "Co-Investigator & Methodologist | EMU",
    status: "Data Analysis (Study 1: n = 400)",
    sample: "N = 1,400 Target (3 Studies)",
    methods: ["Vignette Construction", "Psychometric Adaptation", "ANCOVA / Repeated Measures"],
    desc: "Co-authored ethics protocol and experimental vignettes testing how harassment modality and victim response (freeze, flight, fight) shape intervention intentions.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'pim-sharenting',
    title: "Place, Identity & Memory (PIM) Group & Early Lab Contributions",
    role: "Student Research Assistant | EMU Department of Psychology (2022–2025)",
    status: "Completed Roles",
    sample: "Mixed-Methods & Survey Cohorts",
    methods: ["Cognitive Mapping", "Visual Icon Coding", "Survey Data Collection"],
    desc: "Assisted Asst. Prof. Dr. Pelin Karakuş Akalın within the PIM Research Group (including visual icon coding during early stages of the wedding invitations study) and supported data collection for 'The Parental and Individual Predictors of Sharenting Within a Turkish Speaking Sample' (Certificate of Appreciation, 2022).",
    imageUrl: "",
    audioUrl: ""
  }
],

blogPosts: [
  {
    id: 'croupier-to-cogsci',
    date: "2026-02-14",
    category: "Reflections",
    title: "From the Casino Floor to Cognitive Science: Reading Micro-Behaviors in the Wild",
    readTime: "4 min read",
    excerpt: "What eight years of watching hands, eyes, and posture at live gaming tables taught me about ecological validity before I ever opened ELAN.",
    content: "In controlled laboratory tasks, participants know they are being measured. On a live casino floor, attention is driven by real stakes, fatigue, social pressure, and rapid intuition. Transitioning into applied cognitive psychology felt less like starting over and more like acquiring the formal mathematical and methodological vocabulary—ELAN coding, Python time-series pipelines, and statistical controls—for patterns I had observed for years.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'immortal-time-bias',
    date: "2026-01-20",
    category: "Methodology",
    title: "Why Naturalistic Observation Needs Immortal Time Bias Controls",
    readTime: "5 min read",
    excerpt: "When measuring social mimicry on a busy street, naive exposure windows can create illusory correlations. Here is how we modeled around it.",
    content: "In observational field studies (such as our N = 5,035 pedestrian dataset), a pedestrian walking past a reflection point has a finite transit window. If you classify exposure without accounting for survival/transit duration, longer walkers artificially accumulate higher mimicry probabilities. Using custom Python segmentation scripts, we aligned exposure risk sets dynamically.",
    imageUrl: "",
    audioUrl: ""
  }
],

teachingCourses: [
  {
    code: "PSKL100",
    name: "General Psychology (Turkish Medium)",
    institution: "Eastern Mediterranean University",
    role: "Part-Time Lecturer | Sep 2025 – Present",
    desc: "Designed 3-hour weekly interactive workshops for ~70 students, integrating live classroom reenactments of classic cognitive and social experiments."
  },
  {
    code: "PSYC111",
    name: "Psychological Science (English Medium)",
    institution: "Eastern Mediterranean University",
    role: "Part-Time Lecturer | Sep 2025 – Present",
    desc: "Led weekly mini-lessons and guided empirical discussions for ~60 undergraduate students focusing on scientific reasoning, memory, and perception."
  },
  {
    code: "PSYC497 / PSKL497",
    name: "Ethics in Psychology (Bilingual)",
    institution: "Eastern Mediterranean University",
    role: "Substitute Lecturer",
    desc: "Delivered core lectures and moderated case-study debates on ethical dilemmas in clinical and experimental research across both English and Turkish sections."
  },
  {
    code: "PSKL109 • FELS104/107 • PSKL116 • PSKL370",
    name: "Undergraduate Peer Mentoring & Advanced Tutorials",
    institution: "Eastern Mediterranean University",
    role: "Peer Mentor & Student Assistant | 2022 – 2024",
    desc: "Facilitated small-group study sessions, philosophy discussion seminars, and advanced undergraduate tutorials across Introduction to Psychology II, Introduction to Philosophy, and upper-level psychology courses."
  }
],
teachingPhilosophy: "My teaching philosophy centers on active inquiry and ecological grounding. I translate abstract cognitive theories into tangible, real-world demonstrations—whether through live classroom micro-behavioral experiments or virtual reality demonstrations.",

toolsList: [
  {
    id: 'elan-python-pipeline',
    title: "ELAN + Python Behavioral Pipeline",
    category: "Python / Data Processing",
    status: "In Development",
    description: "Automated parsing and temporal window segmentation scripts (3s–10s mimicry windows) for .eaf video annotation files, engineered to control for Immortal Time Bias.",
    techStack: ["Python", "Pandas", "SciPy", "ELAN (.eaf)"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "Repository & reproducible walkthrough coming soon."
  },
  {
    id: 'lit-extraction-kit',
    title: "Automated Literature & Reproducibility Toolkit",
    category: "Open Science",
    status: "Active",
    description: "Custom Python scripts for systematic literature metadata extraction, effect-size aggregation, and OSF-compliant research reproducibility packaging.",
    techStack: ["Python", "JSON/CSV", "OSF Standards"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "Designed for open science workflow standardization."
  },
  {
    id: 'realtime-pos-app',
    title: "Real-Time Full-Stack Web & POS Application",
    category: "Full-Stack Web",
    status: "Deployed",
    description: "Low-latency ordering and state synchronization web application architected with modern frontend ergonomics and real-time database listeners.",
    techStack: ["React", "Tailwind CSS", "Supabase", "Vercel"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "Built for high-concurrency real-time interaction."
  }
],

cvEducation: [
  {
    period: "Sep 2024 – Sep 2025",
    degree: "MSc in Applied Cognitive Psychology (GPA: 7.27/10)",
    school: "Utrecht University, Netherlands",
    detail: "Selected for Graduate Honors Interdisciplinary Seminars under Prof. Dr. Bert Theunissen, Prof. Dr. Maarten Prak, and Prof. Dr. Frits van Oostrom."
  },
  {
    period: "Sep 2021 – Jun 2024",
    degree: "BSc in Psychology — High Honors (GPA: 3.84/4.00)",
    school: "Eastern Mediterranean University, Cyprus",
    detail: "Awarded 50% Merit Scholarship, 4x High Honor/Honor Certificates, and EU Postgraduate Scholarship. Organizing committee member for 7th Experimental Cognitive Psychology Symposium & 14th–16th Psychology Days."
  },
  {
    period: "Jul 2025 – Aug 2025 & 2022 – 2024",
    degree: "Civic Leadership, R&D & Academic Service",
    school: "Civic Space • Queer Cyprus Association • TPD Student Unit & TPÖÇG",
    detail: "R&D Intern at Civic Space (500+ user digital library, CiviCon 200-participant conference logistics); General Secretary & Academic Studies Co-founder at Queer Cyprus; Management Board Secretary & Commission Coordinator at TPD Student Unit Cyprus & TPÖÇG."
  }
],
cvSkills: [
  { group: "Behavioral & Lab Tools", items: "ELAN (Video Annotation), VR Experimental Setups, Qualtrics, GIMP, PsychoPy" },
  { group: "Data Science & Code", items: "Python (Pandas, NumPy, SciPy, YOLO), R, MPlus, SPSS, Jamovi, G*Power, React, Supabase" },
  { group: "Methods & Languages", items: "Naturalistic Observation, Micro-Coding, SEM, Cognitive Mapping, Vignette Design | Turkish (Native), English (IELTS 7.0)" }
]


},

tr: {
bioTitle: "Öğretim Görevlisi ve Bilişsel Psikoloji Araştırmacısı",
bioSub: "Doğu Akdeniz Üniversitesi | Utrecht Üniversitesi Mezunu",
bioText: "Ekolojik geçerlik, görsel dikkat, sanal beden sahiplenmesi ve insan-teknoloji etkileşimi üzerine uzmanlaşmış bilişsel psikolog. Yüksek riskli canlı gözlem alanındaki 8 yıllık saha deneyimini nicel deneysel bilimle birleştiriyor.",
extendedStory: "Bilişsel bilime uzanan yolculuğum laboratuvarın dışında başladı. Erken dönem Elektrik-Elektronik Mühendisliği altyapım ve sekiz yıl boyunca canlı oyun masalarında krupiye olarak çalışmam; gerçek zamanlı baskı altında mikro-davranış gözlemi, dikkat kaymaları ve sosyal dinamikler konusunda bana güçlü bir sezgi kazandırdı. Utrecht Üniversitesi Uygulamalı Bilişsel Psikoloji yüksek lisans (7.27/10) ve DAÜ Psikoloji Yüksek Şeref lisans (3.84/4.00) derecelerimin ardından doğal saha gözlemlerini hesaplamalı veri hatları (ELAN, Python, YOLO) ve sanal gerçeklik paradigmalarıyla birleştiriyorum. 2027 doktora başvurularıma bilişsel ergonomi, insan-yapay zeka güveni ve sosyal biliş odağında hazırlanıyorum.",
personalNoteTitle: "Laboratuvar & Saha Dışı",
personalNoteText: "Araştırma ve derslerin dışında Kuir Kıbrıs Derneği Genel Sekreterliği ve Akademik Çalışmalar Ekibi kurucu eş-liderliğini, Türk Psikologlar Derneği (TPD) Öğrenci Birimi Kıbrıs Yönetim Kurulu Sekreterliği ile TPÖÇG Akademik Etkinlik Ekip Liderliğini ve DAÜ Fikir ve Münazara Kulübü kurucu başkanlığını üstlendim. Bilişsel ergonomi arayüz tasarımları, Girne kıyılarında yürüyüşler ve kanıta dayalı bilim iletişimiyle ilgileniyorum.",

publicationsList: [
  {
    type: "Hakemli Dergi Makalesi",
    year: "2026",
    status: "Yayımlandı",
    citation: "Gado, S., Kristianto, V., Goulichli, H., Pazhoohi, F., Hessels, R. S., Foulsham, T., & Kingstone, A. (2026). Attentional territories: The influence of gaze and interpersonal distance in the navigation of public space. British Journal of Psychology, 00, 1–14.",
    doi: "https://doi.org/10.1111/bjop.70116",
    osf: "https://doi.org/10.17605/OSF.IO/XKJ5R",
    summary: "Doğrudan ve kaçınılan bakış yönü ile kişilerarası mesafenin kamusal alandaki yaya yönelim kararlarını nasıl şekillendirdiğini inceleyen doğal gözlem çalışması (Utrecht sahası N = 1.052; toplam çok-laboratuvarlı örneklem N = 4.680)."
  },
  {
    type: "Uluslararası Konferans Sözlü Bildirisi",
    year: "2025",
    status: "Sunuldu",
    citation: "Çelik, D., Kaya Kızılöz, B., Imran, A., Sarı, G., Adıgüzel, D., Goulichli, H., & Önder, A. (2025, Ağustos). The effectiveness and ecological validity of VR in eyewitness memory research. European Association of Psychology and Law (EAPL) Yıllık Konferansı, Vilnius, Litvanya.",
    doi: "",
    osf: "",
    summary: "Adli görgü tanığı belleği araştırmalarında sürükleyici Sanal Gerçeklik (VR) senaryolarının geleneksel video paradigmalarına kıyasla ekolojik geçerliğini test eden deneysel çalışma."
  },
  {
    type: "Yüksek Lisans Tezi",
    year: "2025",
    status: "Yayımlandı (UU Arşivi)",
    citation: "Goulichli, H. (2025). The Influence of Virtual Body Ownership on the Extended Self: Presence as a Mediator and Empathy as a Covariate. Yüksek Lisans Tezi, Utrecht Üniversitesi.",
    doi: "https://studenttheses.uu.nl/handle/20.500.12932/49980",
    osf: "",
    summary: "Sanal avatarlar üzerindeki beden sahiplenmesi yanılsamasının benlik sınırlarını nasıl genişlettiğini mekânsal bulunuşluk ve empati değişkenleriyle inceleyen tez çalışması."
  },
  {
    type: "Hazırlık Aşamasındaki Makale",
    year: "2026",
    status: "Birinci Yazar • Hazırlanıyor",
    citation: "Goulichli, H., Li, J., Yan, F., & Hessels, R. S. (hazırlanıyor). Our Reflection in the Shop Window: Spatial Geometry and Temporal Buffering in the Contagion of Public Self-Monitoring. Utrecht Üniversitesi.",
    doi: "",
    osf: "",
    summary: "Kamusal alanda yansımaya bakma davranışında mekânsal geometri, zamansal tamponlama ve davranışsal bulaşmayı modelleyen doğal gözlem çalışması (N = 5.035)."
  },
  {
    type: "Hazırlık Aşamasındaki Makale",
    year: "2026",
    status: "Hazırlanıyor",
    citation: "Çelik, D., Karakuş Akalın, P., & Goulichli, H. (hazırlanıyor). The impact of harassment type and victim response on bystander intervention: Findings from a vignette experiment.",
    doi: "",
    osf: "",
    summary: "Toplu taşıma ortamlarında taciz türü ve mağdur tepkisinin tanık müdahalesi niyetine etkisini inceleyen çok aşamalı deneysel çalışma (N = 1.400 hedef)."
  }
],

projectsList: [
  {
    id: 'reflection-road',
    title: "Vitrin Yansıması ve Kamusal Öz-İzleme Bulaşması (Reflection on the Road)",
    role: "Birinci Yazar & Baş Araştırmacı | Utrecht Üniversitesi (Danışman: Dr. Roy S. Hessels)",
    status: "Aktif / Makale Aşamasında",
    sample: "N = 5.035 Yaya",
    methods: ["Doğal Gözlem", "Python Zaman Penceresi Analizi", "Immortal Time Bias Kontrolü"],
    desc: "Kamusal alanlarda sosyal taklit ve bakış takibini inceleyen geniş örneklemli çalışma. Ekolojik karıştırıcıları ve izleyici etkisini kontrol etmek için 3–10 saniyelik maruziyet pencerelerini ayrıştıran özel Python betikleri geliştirildi.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'attentional-territories',
    title: "Kamusal Alanda Dikkat Bölgeleri ve Yaya Navigasyonu",
    role: "Araştırma Stajyeri | Utrecht Üniversitesi (Helmholtz Institute)",
    status: "Tamamlandı & Yayımlandı",
    sample: "N = 1.052 Utrecht (N = 4.680 Toplam)",
    methods: ["ELAN Video Mikro-Kodlama", "Proksemik", "Bakış Manipülasyonu"],
    desc: "Doğrudan ve kaçınılan bakış ile kişilerarası mesafenin yaya yörünge değişimleri üzerindeki ortak etkisini ölçen saha deneyi.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'forensic-deception',
    title: "Görgü Tanığı İfadelerinde Aldatmanın Güdüsel Dinamikleri",
    role: "Yaz Araştırma Stajyeri | DAÜ Uygulamalı Bellek ve Adli Psikoloji Lab.",
    status: "Analiz Aşamasında",
    sample: "Deneysel VR ve Lab Grubu",
    methods: ["Davranışsal Kodlama", "Tepki Süresi Modellemesi", "Güdü Manipülasyonu"],
    desc: "Seçilen 9 stajyerden biri olarak koruma veya suçlama motivasyonlarının görgü tanığı hatırlama doğruluğunu nasıl etkilediğini ölçen paradigmalar tasarlandı.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'transit-bystander',
    title: "Toplu Taşıma Ortamlarında Tanık Müdahalesi",
    role: "Eş-Araştırmacı & Metodolog | DAÜ",
    status: "Veri Analizi (Çalışma 1: n = 400)",
    sample: "N = 1.400 Hedef (3 Çalışma)",
    methods: ["Vinyet Tasarımı", "Ölçek Uyarlama", "ANCOVA / Tekrarlı Ölçümler"],
    desc: "Taciz biçimi ve mağdur tepkisinin (donma, kaçma, karşı koyma) tanık müdahalesi üzerindeki etkisini inceleyen etik kurul başvurusunun ve deneysel senaryoların hazırlanması.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'pim-sharenting',
    title: "Yer, Kimlik ve Bellek (PIM) Araştırma Grubu & Lisans Lab Katkıları",
    role: "Öğrenci Araştırma Asistanı | DAÜ Psikoloji Bölümü (2022–2025)",
    status: "Tamamlanan Görevler",
    sample: "Karma Yöntem & Anket Grupları",
    methods: ["Bilişsel Haritalama", "Görsel İkon Kodlama", "Anket Veri Toplama"],
    desc: "Yrd. Doç. Dr. Pelin Karakuş Akalın'ın öğrenci asistanı olarak PIM Araştırma Grubu'nda (düğün davetiyeleri çalışmasının erken aşamasındaki görsel ikon kodlaması dahil) görev alındı; ayrıca 'Türkçe Konuşan Örneklemde Sharenting'in Ebeveyn ve Bireysel Yordayıcıları' araştırmasında veri toplama desteği sağlandı (Teşekkür Belgesi, 2022).",
    imageUrl: "",
    audioUrl: ""
  }
],

blogPosts: [
  {
    id: 'croupier-to-cogsci',
    date: "2026-02-14",
    category: "Gözlemler",
    title: "Oyun Masasından Bilişsel Bilime: Doğal Ortamda Mikro-Davranış Okumak",
    readTime: "4 dk okuma",
    excerpt: "Sekiz yıl boyunca canlı oyun masalarında el, göz ve duruş değişimlerini izlemek bana ELAN açmadan önce ekolojik geçerlik hakkında neler öğretti?",
    content: "Kontrollü laboratuvar deneylerinde katılımcılar ölçüldüklerinin farkındadır. Canlı bir oyun masasında ise dikkati gerçek riskler, yorgunluk, sosyal baskı ve hızlı sezgiler yönetir. Uygulamalı bilişsel psikolojiye geçişim sıfırdan başlamaktan ziyade, yıllardır sahada gözlemlediğim örüntülere ELAN mikro-kodlama, Python zaman serisi hatları ve istatistiksel kontroller gibi biçimsel bir bilimsel dil kazandırmak oldu.",
    imageUrl: "",
    audioUrl: ""
  },
  {
    id: 'immortal-time-bias',
    date: "2026-01-20",
    category: "Metodoloji",
    title: "Doğal Gözlem Çalışmalarında Neden Immortal Time Bias Kontrolü Gerekir?",
    readTime: "5 dk okuma",
    excerpt: "İşlek bir caddede sosyal taklidi ölçerken sabit maruziyet pencereleri yanıltıcı korelasyonlar üretebilir. Bunu Python ile nasıl çözdük?",
    content: "Doğal saha gözlemlerinde (örneğin N = 5.035 yayalık veri setimizde) bir yayanın yansıma noktasından geçiş süresi sınırlıdır. Geçiş süresini hesaba katmadan maruziyet sınıflandırması yapıldığında, daha yavaş yürüyen yayalar yapay olarak daha yüksek taklit olasılığı biriktirir. Özel Python segmentasyon betikleriyle risk setlerini dinamik olarak hizaladık.",
    imageUrl: "",
    audioUrl: ""
  }
],

teachingCourses: [
  {
    code: "PSKL100",
    name: "Genel Psikoloji (Türkçe Program)",
    institution: "Doğu Akdeniz Üniversitesi",
    role: "Yarı Zamanlı Öğretim Görevlisi | Eyl 2025 – Devam",
    desc: "Yaklaşık 70 öğrenci için haftalık 3 saatlik etkileşimli atölyeler tasarlandı; klasik bilişsel ve sosyal psikoloji deneyleri sınıfta uygulamalı olarak canlandırıldı."
  },
  {
    code: "PSYC111",
    name: "Psychological Science (İngilizce Program)",
    institution: "Doğu Akdeniz Üniversitesi",
    role: "Yarı Zamanlı Öğretim Görevlisi | Eyl 2025 – Devam",
    desc: "Yaklaşık 60 lisans öğrencisiyle bilimsel akıl yürütme, bellek ve algı temelli haftalık mini dersler ve rehberli tartışmalar yürütüldü."
  },
  {
    code: "PSYC497 / PSKL497",
    name: "Psikolojide Etik (İngilizce & Türkçe)",
    institution: "Doğu Akdeniz Üniversitesi",
    role: "Misafir / Yedek Öğretim Görevlisi",
    desc: "Klinik ve deneysel araştırmalardaki etik ikilemler üzerine hem İngilizce hem Türkçe gruplarda temel dersler ve vaka tartışmaları yönetildi."
  },
  {
    code: "PSKL109 • FELS104/107 • PSKL116 • PSKL370",
    name: "Lisans Akran Mentorluğu & İleri Düzey Tutorial Liderliği",
    institution: "Doğu Akdeniz Üniversitesi",
    role: "Akran Mentoru & Öğrenci Asistanı | 2022 – 2024",
    desc: "Psikolojiye Giriş II, Felsefeye Giriş ve ileri düzey psikoloji derslerinde küçük grup çalışma oturumları, tartışma seminerleri ve birebir akademik destek yürütüldü."
  }
],
teachingPhilosophy: "Öğretim felsefem aktif sorgulama ve ekolojik temellendirmeye dayanır. Soyut bilişsel teorileri canlı sınıf içi mikro-davranış deneyleri ve sanal gerçeklik simülasyonları ile somutlaştırıyorum.",

toolsList: [
  {
    id: 'elan-python-pipeline',
    title: "ELAN + Python Davranışsal Analiz Hattı",
    category: "Python / Veri İşleme",
    status: "Geliştiriliyor",
    description: "Video kodlama (.eaf) dosyaları için otomatik ayrıştırma ve zaman penceresi segmentasyon (3s–10s taklit pencereleri) betikleri; Immortal Time Bias kontrolü için yapılandırılmıştır.",
    techStack: ["Python", "Pandas", "SciPy", "ELAN (.eaf)"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "GitHub deposu ve kod açıklamaları yakında eklenecek."
  },
  {
    id: 'lit-extraction-kit',
    title: "Otomatik Literatür & Tekrarlanabilirlik Paketi",
    category: "Açık Bilim",
    status: "Aktif",
    description: "Sistematik literatür veri çekme, istatistiksel özetleme ve OSF uyumlu açık bilim veri paketleme araçları.",
    techStack: ["Python", "JSON/CSV", "OSF Standartları"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "Açık bilim iş akışlarını standartlaştırmak için geliştirildi."
  },
  {
    id: 'realtime-pos-app',
    title: "Gerçek Zamanlı Full-Stack Web & Sipariş Uygulaması",
    category: "Full-Stack Web",
    status: "Yayında",
    description: "Düşük gecikmeli durum senkronizasyonu ve modern arayüz ergonomisi ile geliştirilmiş gerçek zamanlı web uygulaması.",
    techStack: ["React", "Tailwind CSS", "Supabase", "Vercel"],
    githubUrl: "https://github.com/hasangoulichli",
    docsNote: "Yüksek eşzamanlı kullanıcı etkileşimi için tasarlandı."
  }
],

cvEducation: [
  {
    period: "Eyl 2024 – Eyl 2025",
    degree: "Uygulamalı Bilişsel Psikoloji Yüksek Lisansı (Not Ort: 7.27/10)",
    school: "Utrecht Üniversitesi, Hollanda",
    detail: "Prof. Dr. Bert Theunissen, Prof. Dr. Maarten Prak ve Prof. Dr. Frits van Oostrom yönetimindeki Lisansüstü Onur Seminerlerine seçildi."
  },
  {
    period: "Eyl 2021 – Haz 2024",
    degree: "Psikoloji Lisansı — Yüksek Şeref (Not Ort: 3.84/4.00)",
    school: "Doğu Akdeniz Üniversitesi, Kıbrıs",
    detail: "%50 Başarı Bursu, 4 dönem Yüksek Şeref/Şeref Belgesi ve AB Lisansüstü Bursu kazandı. 7. Deneysel Bilişsel Psikoloji Sempozyumu ile 14.–16. Psikoloji Günleri düzenleme komitelerinde görev aldı."
  },
  {
    period: "Tem 2025 – Ağu 2025 & 2022 – 2024",
    degree: "Sivil Toplum Liderliği, Ar-Ge & Akademik Hizmet",
    school: "Civic Space • Kuir Kıbrıs Derneği • TPD Öğrenci Birimi & TPÖÇG",
    detail: "Civic Space Ar-Ge Stajyeri (500+ kullanıcılı dijital kütüphane ve 200 katılımcılı CiviCon konferans lojistiği); Kuir Kıbrıs Genel Sekreteri ve Akademik Çalışmalar Kurucu Eş-Lideri; TPD Öğrenci Birimi Kıbrıs Yönetim Kurulu Sekreteri ve Komisyon Koordinatörü."
  }
],
cvSkills: [
  { group: "Davranışsal & Lab Araçları", items: "ELAN (Video Kodlama), VR Deney Düzenekleri, Qualtrics, GIMP, PsychoPy" },
  { group: "Veri Bilimi & Kodlama", items: "Python (Pandas, NumPy, SciPy, YOLO), R, MPlus, SPSS, Jamovi, G*Power, React, Supabase" },
  { group: "Yöntem & Diller", items: "Doğal Gözlem, Mikro-Kodlama, SEM, Bilişsel Haritalama, Vinyet Tasarımı | Türkçe (Anadil), İngilizce (IELTS 7.0)" }
]


}
};
