/**
 * ==========================================================================
 * K EXPLORE — EVENT MANAGEMENT & DISCOVERY PLATFORM
 * Main Application Script (Vanilla ES6+)
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. SAMPLE EVENTS DATA (8+ REALISTIC EVENTS ACROSS 8 CATEGORIES)
   ========================================================================== */
const EVENTS_DATA = [
  {
    id: 1,
    title: "Global AI & Web3 Innovators Summit 2026",
    category: "Technology",
    badgeClass: "badge-tech",
    date: "Nov 25, 2026",
    targetDate: "2026-11-25T09:00:00+05:30",
    time: "09:00 AM - 05:30 PM IST",
    venue: "Main Auditorium, Cyber City",
    city: "Bangalore",
    price: "₹1,499 (Student Free)",
    spotsLeft: 42,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Dive deep into groundbreaking breakthroughs in Generative AI, decentralized systems, and neural architectures with pioneer speakers.",
    fullDescription: "Join over 1,500 AI researchers, software architects, and Web3 visionaries for India's premier deep-tech gathering. Featuring keynotes on autonomous multi-agent frameworks, neural compute optimization, decentralized consensus, and hands-on developer breakouts led by industry leaders.",
    highlights: [
      "Keynote talks from global AI research leaders",
      "Live Hackathon showcase with ₹5,00,000 in bounties",
      "Exclusive closed-door VIP networking mixer",
      "Hands-on technical workshop tracks on local LLM deployment"
    ],
    agenda: [
      { time: "09:00 AM", title: "Registration & Welcome Breakfast", desc: "Badge collection, coffee networking, and welcome kit handout." },
      { time: "10:00 AM", title: "Opening Keynote: The Age of Agentic Systems", desc: "State of neural architectures and autonomous AI in 2026." },
      { time: "01:00 PM", title: "Gourmet Lunch & Partner Expo", desc: "Explore demo booths from 30+ leading AI startups." },
      { time: "02:30 PM", title: "Panel: Scaling Decentralized Infrastructure", desc: "Web3 consensus algorithms and sovereign AI compute." },
      { time: "04:45 PM", title: "Startup Showcase & Grand Awards", desc: "Pitch showdown and presentation of hackathon winners." }
    ],
    speaker: {
      name: "Dr. Arvind Raman",
      role: "VP of Research, NeuralSphere Labs"
    }
  },
  {
    id: 2,
    title: "Neon Horizon Indie & Electronic Music Fest",
    category: "Music",
    badgeClass: "badge-music",
    date: "Dec 05, 2026",
    targetDate: "2026-12-05T16:00:00+05:30",
    time: "04:00 PM - 11:30 PM IST",
    venue: "Oasis Open Air Amphitheatre, Whitefield",
    city: "Bangalore",
    price: "₹899 onwards",
    spotsLeft: 85,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    shortDescription: "An electrifying open-air evening celebrating indie singer-songwriters, synthesizer soundscapes, and cutting-edge visual projection art.",
    fullDescription: "Immerse yourself in a dynamic multi-stage sonic journey where indie melodies collide with analog synthwave and progressive electronic beats. Featuring 12 curated artists, interactive laser installations, a craft culinary village, and an unforgettable sunset acoustic session.",
    highlights: [
      "12 Live music acts across 2 dynamic outdoor stages",
      "Immersive 3D audio & spatial holographic light shows",
      "Artisan food truck court with 20+ craft culinary brands",
      "Dedicated chill-out acoustic garden with ambient seating"
    ],
    agenda: [
      { time: "04:00 PM", title: "Gates Open & Acoustic Sunset Session", desc: "Unplugged acoustic sets from rising indie songwriters." },
      { time: "06:15 PM", title: "Indie Rock Mainstage Showdown", desc: "High-energy indie pop-rock bands taking the stage." },
      { time: "08:30 PM", title: "Synthesizer & Audiovisual Spectacular", desc: "Immersive laser mapping paired with analog synth live sets." },
      { time: "10:00 PM", title: "Headline Electronic Act", desc: "Electrifying finale from international electronic music producers." }
    ],
    speaker: {
      name: "Mira Sen",
      role: "Festival Music Director & Producer"
    }
  },
  {
    id: 3,
    title: "Hands-on Masterclass: NextGen Design Systems",
    category: "Workshops",
    badgeClass: "badge-workshops",
    date: "Nov 18, 2026",
    targetDate: "2026-11-18T10:00:00+05:30",
    time: "10:00 AM - 04:00 PM IST",
    venue: "Design Hub Studio, 100 Feet Road, Indiranagar",
    city: "Bangalore",
    price: "₹1,200 (Materials Included)",
    spotsLeft: 18,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Learn to architect scalable design tokens, component libraries, and cross-platform Figma-to-code design systems from industry leads.",
    fullDescription: "An intensive, practical workshop designed for UI/UX designers, design engineers, and frontend architects. Master modern multi-brand design tokens, variables in Figma, component accessibility standards (WCAG 2.2), and automated CI/CD synchronization with code repositories.",
    highlights: [
      "Step-by-step token architecture and Figma variable mapping",
      "Bridge design and code with zero handoff friction",
      "1-on-1 portfolio & design system teardowns by mentors",
      "Official Masterclass Certificate & lifetime Figma asset kit"
    ],
    agenda: [
      { time: "10:00 AM", title: "Foundations of Modern Token Architecture", desc: "Semantic naming, color theory, and multi-tier tokens." },
      { time: "11:45 AM", title: "Building Resilient Figma Components", desc: "Variants, slot patterns, auto-layout 5.0, and states." },
      { time: "01:00 PM", title: "Networking Lunch & Critique Corner", desc: "Casual lunch and quick design problem reviews." },
      { time: "02:00 PM", title: "Figma to Code Pipeline", desc: "Exporting tokens to CSS variables and React/HTML component code." },
      { time: "03:30 PM", title: "QA Testing & Accessibility Audit", desc: "Color contrast testing and focus management patterns." }
    ],
    speaker: {
      name: "Rohan Kulkarni",
      role: "Staff Product Designer & Design System Architect"
    }
  },
  {
    id: 4,
    title: "NextGen Startup Pitch Gala & Venture Forum",
    category: "Business",
    badgeClass: "badge-business",
    date: "Dec 12, 2026",
    targetDate: "2026-12-12T14:00:00+05:30",
    time: "02:00 PM - 07:30 PM IST",
    venue: "The Grand Ballroom, Leela Palace, Old Airport Rd",
    city: "Bangalore",
    price: "₹2,499 (Investor / Founder)",
    spotsLeft: 28,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Connect with Tier-1 VCs, angel investors, and fast-scaling founders. Pitch your venture, discover syndicate deals, and forge partnerships.",
    fullDescription: "Bangalore's most anticipated venture networking event of the season. 30 handpicked Seed and Series-A startups pitch directly to partner-level investors from top VC funds. Featuring high-impact keynote sessions on the 2027 macroeconomic fundraising landscape.",
    highlights: [
      "30 Curated live startup pitches on the main ballroom stage",
      "Speed-dating roundtables with 25+ partner-level VC investors",
      "Deep-dive report release: 'Indian Tech Venture Outlook 2027'",
      "Closed-door executive cocktail dinner and mixer"
    ],
    agenda: [
      { time: "02:00 PM", title: "Registration & Investor Check-in", desc: "Coffee reception and executive badge verification." },
      { time: "02:45 PM", title: "Keynote: The New Paradigm of Tech Investing", desc: "Valuation discipline, profitability, and scalable unit economics." },
      { time: "03:45 PM", title: "The Pitch Arena: 30 Startups in 90 Minutes", desc: "Strict 3-minute pitches followed by live investor Q&A." },
      { time: "05:30 PM", title: "1-on-1 Curated Speed Networking", desc: "Pre-matched founder-investor private discussions." },
      { time: "06:30 PM", title: "Gala Dinner & Cocktail Reception", desc: "High-value informal discussions and deal signing." }
    ],
    speaker: {
      name: "Ananya Deshmukh",
      role: "Managing Partner, Horizon Edge Ventures"
    }
  },
  {
    id: 5,
    title: "Urban Night Marathon & Fitness Carnival",
    category: "Sports",
    badgeClass: "badge-sports",
    date: "Nov 28, 2026",
    targetDate: "2026-11-28T18:00:00+05:30",
    time: "06:00 PM - 10:30 PM IST",
    venue: "Cubbon Park Boulevard, MG Road",
    city: "Bangalore",
    price: "₹499 (Includes Kit)",
    spotsLeft: 120,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Lace up your running shoes for a lit-up 5K, 10K, and Half Marathon through the city's scenic heritage tree canopy under sparkling neon lamps.",
    fullDescription: "Experience the magic of running under starlight! The K Explore Urban Night Marathon brings together over 3,000 passionate runners, fitness enthusiasts, and families. Features illuminated tree-lined race corridors, live acoustic DJ cheer stations, professional chip timing, and a post-race wellness expo.",
    highlights: [
      "Certified RFID chip timing with instant SMS finish results",
      "Custom dry-fit running jersey, finisher medal, and goodie kit",
      "Hydration, energy gel, and on-track physiotherapist stations",
      "Post-race celebratory DJ concert and organic nutrition stalls"
    ],
    agenda: [
      { time: "06:00 PM", title: "Bib Collection & Zumba Warm-up", desc: "High-energy group cardio warm-up guided by fitness coaches." },
      { time: "07:00 PM", title: "Flag-off: 21K Half Marathon", desc: "Competitive half marathon start under neon arches." },
      { time: "07:30 PM", title: "Flag-off: 10K & 5K Fun Run", desc: "Open race for recreational runners and walking enthusiasts." },
      { time: "09:30 PM", title: "Podium Ceremony & Fitness Expo Party", desc: "Medal awards, sponsor giveaways, and celebratory music." }
    ],
    speaker: {
      name: "Captain Vikram Rathore",
      role: "Ultra-Marathoner & Head Race Director"
    }
  },
  {
    id: 6,
    title: "Contemporary Digital Art & Sculpture Biennale",
    category: "Art & Culture",
    badgeClass: "badge-art",
    date: "Dec 18, 2026",
    targetDate: "2026-12-18T11:00:00+05:30",
    time: "11:00 AM - 08:00 PM IST",
    venue: "National Modern Art Gallery, Palace Road",
    city: "Bangalore",
    price: "₹350 (Children Free)",
    spotsLeft: 60,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Experience breathtaking generative art installations, physical kinetic sculptures, immersive 3D projection rooms, and traditional folk fusion.",
    fullDescription: "A visual feast celebrating the boundary where computational creativity meets physical sculpture. Featuring over 40 international and Indian contemporary artists, this biennale showcases interactive sensor-driven art rooms, physical clay and bronze works, and live generative code performances.",
    highlights: [
      "40+ International & Indian digital artists and sculptors",
      "360-degree immersive dome projection and spatial sound",
      "Interactive stations: Generate your own algorithmic artwork",
      "Curated guided walkthroughs by art historians and critics"
    ],
    agenda: [
      { time: "11:00 AM", title: "Gallery Inauguration & Curatorial Tour", desc: "Welcome address by chief curators and preview walk." },
      { time: "02:00 PM", title: "Live Generative Code Art Demonstration", desc: "Real-time canvas coding using math and sensor inputs." },
      { time: "04:30 PM", title: "Panel: Heritage Aesthetics in the Age of Silicon", desc: "Discussion on preserving traditional craft through digital tools." },
      { time: "06:30 PM", title: "Evening Ambient Lighting & Acoustic Performance", desc: "Atmospheric harp and flute performance in the central courtyard." }
    ],
    speaker: {
      name: "Siddharth Nambiar",
      role: "Lead Curator, Contemporary Digital Arts Guild"
    }
  },
  {
    id: 7,
    title: "Future of EdTech & STEM Innovation Summit",
    category: "Education",
    badgeClass: "badge-education",
    date: "Nov 22, 2026",
    targetDate: "2026-11-22T09:30:00+05:30",
    time: "09:30 AM - 04:30 PM IST",
    venue: "Science City Auditorium, Outer Ring Road",
    city: "Bangalore",
    price: "Free (Student / Educator ID Required)",
    spotsLeft: 54,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Explore how adaptive AI learning, robotics laboratories, and experiential curriculum are transforming school and university education globally.",
    fullDescription: "A dynamic summit bringing together educators, researchers, university chancellors, and EdTech founders. Discover practical classroom AI tools, interactive STEM curriculum kits, robotics learning modules, and strategies to foster lifelong scientific curiosity in next-generation students.",
    highlights: [
      "Student STEM project showcase with 50+ working prototypes",
      "Hands-on robotics and coding arena for young learners",
      "Policy roundtable with education ministry thought leaders",
      "Complimentary educator resource kits and tool licenses"
    ],
    agenda: [
      { time: "09:30 AM", title: "Opening Address: The 2030 Classroom", desc: "How experiential learning bridges textbook theory and real skills." },
      { time: "11:00 AM", title: "STEM Innovation Fair & Prototype Judging", desc: "High school and college students presenting robotics projects." },
      { time: "01:30 PM", title: "Educators Workshop: AI Tools for Teachers", desc: "Automating lesson planning and individualized student tutoring." },
      { time: "03:30 PM", title: "National STEM Leadership Awards", desc: "Honoring pioneering schools, teachers, and student inventors." }
    ],
    speaker: {
      name: "Prof. Gayatri Sundaram",
      role: "Director of Educational Technologies, National Institute of Pedagogy"
    }
  },
  {
    id: 8,
    title: "Founders, Creators & Tech Executive Mixer",
    category: "Networking",
    badgeClass: "badge-networking",
    date: "Nov 30, 2026",
    targetDate: "2026-11-30T18:30:00+05:30",
    time: "06:30 PM - 09:30 PM IST",
    venue: "Sky Lounge & Terrace, Koramangala 4th Block",
    city: "Bangalore",
    price: "₹750 (Includes Welcome Drink & Tapas)",
    spotsLeft: 35,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    shortDescription: "An intimate, curated evening for entrepreneurs, tech leads, product designers, and creators to connect, collaborate, and exchange visionary ideas.",
    fullDescription: "Escape the noise of generic conferences. This high-value mixer brings together 150 select founders, engineering directors, product design heads, and content creators atop a scenic open-air terrace in Koramangala. Features structured speed-introductions, lightning elevator pitches, and meaningful conversation tables.",
    highlights: [
      "Structured icebreaker tables curated by industry interest",
      "1-minute open-mic elevator pitch slots for attendees",
      "Private digital attendee directory for post-event connections",
      "Artisan finger foods and non-alcoholic / craft beverages"
    ],
    agenda: [
      { time: "06:30 PM", title: "Check-in & Sunset Welcome Drinks", desc: "Receive color-coded industry badge and enjoy terrace views." },
      { time: "07:15 PM", title: "Speed Networking Rotations", desc: "5-minute focused peer conversations to discover synergies." },
      { time: "08:15 PM", title: "Lightning 60-Second Pitches", desc: "10 brave founders showcase their project to the entire terrace." },
      { time: "08:45 PM", title: "Freeflow Terrace Networking & Tapas", desc: "Unstructured social connection and collaborative discussions." }
    ],
    speaker: {
      name: "Karan Singhania",
      role: "Founder, Bangalore Tech Creators Circle"
    }
  }
];

/* ==========================================================================
   2. DOM ELEMENT REFERENCES
   ========================================================================== */
const DOM = {
  // Theme & Announcement
  html: document.documentElement,
  announcementBar: document.getElementById('announcementBar'),
  announcementClose: document.getElementById('announcementClose'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),

  // Navigation
  navbar: document.getElementById('navbar'),
  navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),
  hamburgerBtn: document.getElementById('hamburgerBtn'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  drawerOverlay: document.getElementById('drawerOverlay'),
  ticketCountBadge: document.getElementById('ticketCountBadge'),
  mobileTicketCount: document.getElementById('mobileTicketCount'),
  openMyTicketsBtn: document.getElementById('openMyTicketsBtn'),
  mobileOpenTicketsBtn: document.getElementById('mobileOpenTicketsBtn'),

  // Hero Quick Search
  heroSearchInput: document.getElementById('heroSearchInput'),
  heroSearchBtn: document.getElementById('heroSearchBtn'),
  quickTags: document.querySelectorAll('.quick-tag'),
  spotlightTimerText: document.getElementById('spotlightTimerText'),
  spotlightDetailsBtn: document.querySelector('.spotlight-details-btn'),
  spotlightRegisterBtn: document.querySelector('.spotlight-register-btn'),

  // Featured Events & Filters
  eventsGrid: document.getElementById('eventsGrid'),
  emptyState: document.getElementById('emptyState'),
  resetEmptyBtn: document.getElementById('resetEmptyBtn'),
  eventSearchInput: document.getElementById('eventSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  dateFilterSelect: document.getElementById('dateFilterSelect'),
  sortSelect: document.getElementById('sortSelect'),
  clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
  categoryTabs: document.getElementById('categoryTabs'),
  catTabs: document.querySelectorAll('.cat-tab'),
  resultsCount: document.getElementById('resultsCount'),
  activeTagsList: document.getElementById('activeTagsList'),

  // Category Showcase Cards
  categoryCards: document.querySelectorAll('.category-card'),
  footerCategoryLinks: document.querySelectorAll('#footerCategoryLinks [data-footer-category]'),

  // Registration Form
  registrationForm: document.getElementById('registrationForm'),
  regEvent: document.getElementById('regEvent'),
  regName: document.getElementById('regName'),
  regEmail: document.getElementById('regEmail'),
  regPhone: document.getElementById('regPhone'),
  regTerms: document.getElementById('regTerms'),
  submitRegBtn: document.getElementById('submitRegBtn'),

  // Event Details Modal
  eventDetailsModal: document.getElementById('eventDetailsModal'),
  closeEventModalBtn: document.getElementById('closeEventModalBtn'),
  modalDetailsContent: document.getElementById('modalDetailsContent'),

  // Success / Pass Modal
  registrationSuccessModal: document.getElementById('registrationSuccessModal'),
  closeSuccessModalBtn: document.getElementById('closeSuccessModalBtn'),
  successEventTitle: document.getElementById('successEventTitle'),
  printableTicket: document.getElementById('printableTicket'),
  printTicketBtn: document.getElementById('printTicketBtn'),
  registerAnotherBtn: document.getElementById('registerAnotherBtn'),
  viewAllTicketsFromSuccessBtn: document.getElementById('viewAllTicketsFromSuccessBtn'),

  // My Registrations Modal
  myRegistrationsModal: document.getElementById('myRegistrationsModal'),
  closeMyTicketsBtn: document.getElementById('closeMyTicketsBtn'),
  ticketsStoredList: document.getElementById('ticketsStoredList'),
  emptyTicketsView: document.getElementById('emptyTicketsView'),
  exploreFromEmptyTickets: document.getElementById('exploreFromEmptyTickets'),

  // Terms Modal
  termsModal: document.getElementById('termsModal'),
  openTermsLink: document.getElementById('openTermsLink'),
  closeTermsBtn: document.getElementById('closeTermsBtn'),
  acceptTermsModalBtn: document.getElementById('acceptTermsModalBtn'),
  footerTermsLink: document.getElementById('footerTermsLink'),
  footerPrivacyLink: document.getElementById('footerPrivacyLink'),

  // Contact & Newsletter
  contactForm: document.getElementById('contactForm'),
  newsletterForm: document.getElementById('newsletterForm'),
  newsletterEmail: document.getElementById('newsletterEmail'),
  newsletterFeedback: document.getElementById('newsletterFeedback'),

  // Back To Top & Toast
  backToTopBtn: document.getElementById('backToTopBtn'),
  toastContainer: document.getElementById('toastContainer'),
  currentYearSpan: document.getElementById('currentYear')
};

/* ==========================================================================
   3. APPLICATION STATE
   ========================================================================== */
const AppState = {
  currentCategory: 'all',
  searchQuery: '',
  dateFilter: 'all',
  sortBy: 'soonest',
  selectedEventId: null,
  activeTimers: [],
  registrations: []
};

// LocalStorage Keys
const STORAGE_KEYS = {
  THEME: 'kexplore_theme_pref',
  REGISTRATIONS: 'kexplore_user_registrations_v1',
  ANNOUNCEMENT: 'kexplore_announcement_hidden'
};

/* ==========================================================================
   4. TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'info', duration = 3500) {
  if (!DOM.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconHtml = '<i class="fa-solid fa-circle-info toast-icon"></i>';
  if (type === 'success') iconHtml = '<i class="fa-solid fa-circle-check toast-icon"></i>';
  if (type === 'error') iconHtml = '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';
  if (type === 'warning') iconHtml = '<i class="fa-solid fa-triangle-exclamation toast-icon"></i>';

  toast.innerHTML = `
    ${iconHtml}
    <span class="toast-message">${escapeHtml(message)}</span>
    <button class="toast-close" aria-label="Close Notification"><i class="fa-solid fa-xmark"></i></button>
  `;

  DOM.toastContainer.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const removeToast = () => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 280);
  };

  const closeBtn = toast.querySelector('.toast-close');
  if (closeBtn) closeBtn.addEventListener('click', removeToast);

  setTimeout(removeToast, duration);
}

// Utility: Escape HTML to avoid XSS
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   5. THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      this.setTheme(savedTheme, false);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light', false);
    }

    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Listen to OS theme changes if user has not set explicit preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
          this.setTheme(e.matches ? 'dark' : 'light', false);
        }
      });
    }
  },

  setTheme(theme, notify = true) {
    DOM.html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);

    if (notify) {
      const isDark = theme === 'dark';
      showToast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`, 'info', 2200);
    }
  },

  toggleTheme() {
    const currentTheme = DOM.html.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme, true);
  }
};

/* ==========================================================================
   6. COUNTDOWN ENGINE (LIVE SECOND-BY-SECOND UPDATES)
   ========================================================================== */
const CountdownEngine = {
  calculateTimeRemaining(targetIsoString) {
    const totalMs = new Date(targetIsoString).getTime() - new Date().getTime();

    if (totalMs <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const seconds = Math.floor((totalMs / 1000) % 60);
    const minutes = Math.floor((totalMs / 1000 / 60) % 60);
    const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));

    return { total: totalMs, days, hours, minutes, seconds, isPast: false };
  },

  formatTimer(rem) {
    if (rem.isPast) return "Event in progress!";
    if (rem.days > 0) {
      return `Starts in: ${rem.days}d ${rem.hours}h ${rem.minutes}m ${rem.seconds}s`;
    }
    return `Starts in: ${rem.hours}h ${rem.minutes}m ${rem.seconds}s`;
  },

  formatDetailedTimer(rem) {
    if (rem.isPast) return "Event in progress / Concluded";
    return `${rem.days} Days : ${String(rem.hours).padStart(2, '0')} Hours : ${String(rem.minutes).padStart(2, '0')} Mins : ${String(rem.seconds).padStart(2, '0')} Secs`;
  },

  init() {
    this.updateAllCountdowns();
    // Heartbeat ticker every second
    setInterval(() => {
      this.updateAllCountdowns();
    }, 1000);
  },

  updateAllCountdowns() {
    // 1. Hero Spotlight Event Timer (Event #1)
    const spotlightEvent = EVENTS_DATA[0];
    if (spotlightEvent && DOM.spotlightTimerText) {
      const rem = this.calculateTimeRemaining(spotlightEvent.targetDate);
      DOM.spotlightTimerText.textContent = this.formatTimer(rem);
    }

    // 2. Event Cards dynamic countdown tags
    const ribbons = document.querySelectorAll('[data-countdown-target]');
    ribbons.forEach((elem) => {
      const targetDate = elem.getAttribute('data-countdown-target');
      if (targetDate) {
        const rem = this.calculateTimeRemaining(targetDate);
        elem.textContent = this.formatTimer(rem);
      }
    });

    // 3. Modal countdown badge if modal is active
    const modalTimer = document.getElementById('modalDynamicCountdown');
    if (modalTimer) {
      const targetDate = modalTimer.getAttribute('data-modal-target');
      if (targetDate) {
        const rem = this.calculateTimeRemaining(targetDate);
        modalTimer.textContent = this.formatDetailedTimer(rem);
      }
    }
  }
};

/* ==========================================================================
   7. EVENTS CATALOG & FILTERING ENGINE
   ========================================================================== */
const EventCatalog = {
  init() {
    this.populateEventSelect();
    this.updateCategoryCounts();
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Search input (live filtering with debounce)
    if (DOM.eventSearchInput) {
      DOM.eventSearchInput.addEventListener('input', (e) => {
        AppState.searchQuery = e.target.value.trim().toLowerCase();
        if (DOM.clearSearchBtn) {
          DOM.clearSearchBtn.style.display = AppState.searchQuery ? 'block' : 'none';
        }
        this.render();
      });
    }

    // Clear search button
    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        DOM.eventSearchInput.value = '';
        AppState.searchQuery = '';
        DOM.clearSearchBtn.style.display = 'none';
        DOM.eventSearchInput.focus();
        this.render();
      });
    }

    // Hero quick search
    if (DOM.heroSearchBtn && DOM.heroSearchInput) {
      DOM.heroSearchBtn.addEventListener('click', () => {
        const q = DOM.heroSearchInput.value.trim();
        if (q) {
          AppState.searchQuery = q.toLowerCase();
          if (DOM.eventSearchInput) DOM.eventSearchInput.value = q;
          if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'block';
          this.render();
          this.scrollToEvents();
        }
      });

      DOM.heroSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          DOM.heroSearchBtn.click();
        }
      });
    }

    // Quick trending tags in hero
    DOM.quickTags.forEach((tag) => {
      tag.addEventListener('click', () => {
        const cat = tag.getAttribute('data-category');
        if (cat) {
          this.setCategory(cat);
          this.scrollToEvents();
        }
      });
    });

    // Category Tabs
    DOM.catTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const cat = tab.getAttribute('data-category');
        this.setCategory(cat);
      });
    });

    // Category Showcase Cards in #categories section
    DOM.categoryCards.forEach((card) => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category-target');
        if (cat) {
          this.setCategory(cat);
          this.scrollToEvents();
        }
      });
    });

    // Footer category links
    DOM.footerCategoryLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-footer-category');
        if (cat) {
          this.setCategory(cat);
          this.scrollToEvents();
        }
      });
    });

    // Date Filter select
    if (DOM.dateFilterSelect) {
      DOM.dateFilterSelect.addEventListener('change', (e) => {
        AppState.dateFilter = e.target.value;
        this.render();
      });
    }

    // Sort select
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        AppState.sortBy = e.target.value;
        this.render();
      });
    }

    // Clear all filters button
    if (DOM.clearAllFiltersBtn) {
      DOM.clearAllFiltersBtn.addEventListener('click', () => this.resetFilters());
    }

    // Reset button in empty state
    if (DOM.resetEmptyBtn) {
      DOM.resetEmptyBtn.addEventListener('click', () => this.resetFilters());
    }
  },

  scrollToEvents() {
    const eventsSec = document.getElementById('events');
    if (eventsSec) {
      eventsSec.scrollIntoView({ behavior: 'smooth' });
    }
  },

  setCategory(category) {
    AppState.currentCategory = category;

    // Update active state in tabs
    DOM.catTabs.forEach((tab) => {
      const tabCat = tab.getAttribute('data-category');
      const isSelected = tabCat.toLowerCase() === category.toLowerCase();
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    this.render();
  },

  resetFilters() {
    AppState.currentCategory = 'all';
    AppState.searchQuery = '';
    AppState.dateFilter = 'all';
    AppState.sortBy = 'soonest';

    if (DOM.eventSearchInput) DOM.eventSearchInput.value = '';
    if (DOM.heroSearchInput) DOM.heroSearchInput.value = '';
    if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'none';
    if (DOM.dateFilterSelect) DOM.dateFilterSelect.value = 'all';
    if (DOM.sortSelect) DOM.sortSelect.value = 'soonest';

    DOM.catTabs.forEach((tab) => {
      const isAll = tab.getAttribute('data-category') === 'all';
      tab.classList.toggle('active', isAll);
      tab.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    this.render();
    showToast('Filters cleared. Showing all upcoming events.', 'info', 2000);
  },

  updateCategoryCounts() {
    const counts = { all: EVENTS_DATA.length };

    EVENTS_DATA.forEach((ev) => {
      const catKey = ev.category.toLowerCase().replace(/[^a-z]/g, '');
      counts[catKey] = (counts[catKey] || 0) + 1;
    });

    const countAll = document.getElementById('count-all');
    if (countAll) countAll.textContent = counts.all;

    const countMap = [
      { id: 'count-technology', key: 'technology' },
      { id: 'count-music', key: 'music' },
      { id: 'count-workshops', key: 'workshops' },
      { id: 'count-business', key: 'business' },
      { id: 'count-sports', key: 'sports' },
      { id: 'count-art', key: 'artculture' },
      { id: 'count-education', key: 'education' },
      { id: 'count-networking', key: 'networking' }
    ];

    countMap.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) el.textContent = counts[m.key] || 0;
    });
  },

  populateEventSelect() {
    if (!DOM.regEvent) return;

    // Preserve first placeholder option
    DOM.regEvent.innerHTML = '<option value="">-- Choose an upcoming event --</option>';

    EVENTS_DATA.forEach((ev) => {
      const opt = document.createElement('option');
      opt.value = ev.id;
      opt.textContent = `${ev.title} (${ev.date})`;
      DOM.regEvent.appendChild(opt);
    });
  },

  filterAndSortEvents() {
    let list = [...EVENTS_DATA];

    // 1. Category Filter
    if (AppState.currentCategory !== 'all') {
      list = list.filter((ev) => ev.category.toLowerCase() === AppState.currentCategory.toLowerCase());
    }

    // 2. Search Filter (by title, category, venue, city, description, speaker)
    if (AppState.searchQuery) {
      const q = AppState.searchQuery;
      list = list.filter((ev) => {
        return (
          ev.title.toLowerCase().includes(q) ||
          ev.category.toLowerCase().includes(q) ||
          ev.venue.toLowerCase().includes(q) ||
          ev.city.toLowerCase().includes(q) ||
          ev.shortDescription.toLowerCase().includes(q) ||
          (ev.speaker && ev.speaker.name.toLowerCase().includes(q))
        );
      });
    }

    // 3. Date Filter
    if (AppState.dateFilter === 'upcoming') {
      // Future 30 days from now
      const now = new Date().getTime();
      const in30Days = now + (30 * 24 * 60 * 60 * 1000);
      list = list.filter((ev) => {
        const evTime = new Date(ev.targetDate).getTime();
        return evTime >= now && evTime <= in30Days;
      });
    } else if (AppState.dateFilter === 'november') {
      list = list.filter((ev) => ev.date.toLowerCase().includes('nov'));
    } else if (AppState.dateFilter === 'december') {
      list = list.filter((ev) => ev.date.toLowerCase().includes('dec'));
    }

    // 4. Sorting
    if (AppState.sortBy === 'soonest') {
      list.sort((a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime());
    } else if (AppState.sortBy === 'latest') {
      list.sort((a, b) => new Date(b.targetDate).getTime() - new Date(a.targetDate).getTime());
    } else if (AppState.sortBy === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (AppState.sortBy === 'title-desc') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  },

  render() {
    const filteredEvents = this.filterAndSortEvents();

    // Results count & active tags update
    if (DOM.resultsCount) {
      DOM.resultsCount.textContent = `Showing ${filteredEvents.length} of ${EVENTS_DATA.length} events`;
    }

    this.renderActiveFilterPills();

    if (!DOM.eventsGrid) return;

    if (filteredEvents.length === 0) {
      DOM.eventsGrid.innerHTML = '';
      if (DOM.emptyState) DOM.emptyState.style.display = 'block';
      return;
    }

    if (DOM.emptyState) DOM.emptyState.style.display = 'none';

    // Build event cards HTML
    DOM.eventsGrid.innerHTML = filteredEvents.map((ev) => {
      const rem = CountdownEngine.calculateTimeRemaining(ev.targetDate);
      const timerStr = CountdownEngine.formatTimer(rem);

      return `
        <article class="event-card" data-event-id="${ev.id}">
          <div class="event-card-media">
            <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="event-card-img" loading="lazy">
            <span class="event-category-badge ${ev.badgeClass}">
              <i class="fa-solid fa-tag"></i> ${escapeHtml(ev.category)}
            </span>
            <div class="event-countdown-ribbon">
              <i class="fa-regular fa-clock"></i>
              <span data-countdown-target="${ev.targetDate}">${timerStr}</span>
            </div>
            <span class="event-card-price">${escapeHtml(ev.price)}</span>
          </div>

          <div class="event-card-body">
            <h3 class="event-title" title="${escapeHtml(ev.title)}">${escapeHtml(ev.title)}</h3>

            <div class="event-meta-list">
              <div class="event-meta-item">
                <i class="fa-regular fa-calendar-days"></i>
                <span>${escapeHtml(ev.date)} • ${escapeHtml(ev.time)}</span>
              </div>
              <div class="event-meta-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>${escapeHtml(ev.venue)}, ${escapeHtml(ev.city)}</span>
              </div>
            </div>

            <p class="event-description">${escapeHtml(ev.shortDescription)}</p>

            <div class="event-card-actions">
              <button class="btn btn-outline btn-sm btn-view-details" data-id="${ev.id}" aria-label="View details for ${escapeHtml(ev.title)}">
                <i class="fa-solid fa-circle-info"></i>
                <span>View Details</span>
              </button>
              <button class="btn btn-primary btn-sm btn-register-card" data-id="${ev.id}" aria-label="Register for ${escapeHtml(ev.title)}">
                <i class="fa-solid fa-ticket"></i>
                <span>Register</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card action listeners
    DOM.eventsGrid.querySelectorAll('.btn-view-details').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        ModalManager.openEventDetails(id);
      });
    });

    DOM.eventsGrid.querySelectorAll('.btn-register-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        RegistrationManager.preSelectEventAndScroll(id);
      });
    });
  },

  renderActiveFilterPills() {
    if (!DOM.activeTagsList) return;

    let pillsHtml = '';

    if (AppState.currentCategory !== 'all') {
      pillsHtml += `
        <span class="active-filter-pill">
          <span>Category: ${escapeHtml(AppState.currentCategory)}</span>
          <button data-remove-filter="category" title="Remove category filter">&times;</button>
        </span>
      `;
    }

    if (AppState.searchQuery) {
      pillsHtml += `
        <span class="active-filter-pill">
          <span>Search: "${escapeHtml(AppState.searchQuery)}"</span>
          <button data-remove-filter="search" title="Remove search filter">&times;</button>
        </span>
      `;
    }

    if (AppState.dateFilter !== 'all') {
      pillsHtml += `
        <span class="active-filter-pill">
          <span>Date: ${escapeHtml(AppState.dateFilter)}</span>
          <button data-remove-filter="date" title="Remove date filter">&times;</button>
        </span>
      `;
    }

    DOM.activeTagsList.innerHTML = pillsHtml;

    // Attach pill remove handlers
    DOM.activeTagsList.querySelectorAll('[data-remove-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-remove-filter');
        if (type === 'category') this.setCategory('all');
        if (type === 'search') {
          AppState.searchQuery = '';
          if (DOM.eventSearchInput) DOM.eventSearchInput.value = '';
          if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'none';
          this.render();
        }
        if (type === 'date') {
          AppState.dateFilter = 'all';
          if (DOM.dateFilterSelect) DOM.dateFilterSelect.value = 'all';
          this.render();
        }
      });
    });
  }
};

/* ==========================================================================
   8. MODAL MANAGER (EVENT DETAILS, SUCCESS, TICKETS, TERMS)
   ========================================================================== */
const ModalManager = {
  activeModal: null,

  init() {
    // Backdrop click handlers
    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeActiveModal();
        }
      });
    });

    // Close buttons
    if (DOM.closeEventModalBtn) {
      DOM.closeEventModalBtn.addEventListener('click', () => this.closeModal(DOM.eventDetailsModal));
    }
    if (DOM.closeSuccessModalBtn) {
      DOM.closeSuccessModalBtn.addEventListener('click', () => this.closeModal(DOM.registrationSuccessModal));
    }
    if (DOM.closeMyTicketsBtn) {
      DOM.closeMyTicketsBtn.addEventListener('click', () => this.closeModal(DOM.myRegistrationsModal));
    }
    if (DOM.closeTermsBtn) {
      DOM.closeTermsBtn.addEventListener('click', () => this.closeModal(DOM.termsModal));
    }
    if (DOM.acceptTermsModalBtn) {
      DOM.acceptTermsModalBtn.addEventListener('click', () => {
        if (DOM.regTerms) DOM.regTerms.checked = true;
        this.closeModal(DOM.termsModal);
      });
    }

    // Terms modal triggers
    if (DOM.openTermsLink) {
      DOM.openTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal(DOM.termsModal);
      });
    }
    if (DOM.footerTermsLink) {
      DOM.footerTermsLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal(DOM.termsModal);
      });
    }
    if (DOM.footerPrivacyLink) {
      DOM.footerPrivacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal(DOM.termsModal);
      });
    }

    // My Tickets navbar triggers
    if (DOM.openMyTicketsBtn) {
      DOM.openMyTicketsBtn.addEventListener('click', () => this.openMyTickets());
    }
    if (DOM.mobileOpenTicketsBtn) {
      DOM.mobileOpenTicketsBtn.addEventListener('click', () => {
        MobileNav.closeDrawer();
        this.openMyTickets();
      });
    }
    if (DOM.viewAllTicketsFromSuccessBtn) {
      DOM.viewAllTicketsFromSuccessBtn.addEventListener('click', () => {
        this.closeModal(DOM.registrationSuccessModal);
        this.openMyTickets();
      });
    }
    if (DOM.exploreFromEmptyTickets) {
      DOM.exploreFromEmptyTickets.addEventListener('click', () => {
        this.closeModal(DOM.myRegistrationsModal);
      });
    }

    // Print pass button
    if (DOM.printTicketBtn) {
      DOM.printTicketBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Register another button
    if (DOM.registerAnotherBtn) {
      DOM.registerAnotherBtn.addEventListener('click', () => {
        this.closeModal(DOM.registrationSuccessModal);
        RegistrationManager.resetForm();
        const regSec = document.getElementById('register');
        if (regSec) regSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Hero spotlight action handlers
    if (DOM.spotlightDetailsBtn) {
      DOM.spotlightDetailsBtn.addEventListener('click', () => this.openEventDetails(1));
    }
    if (DOM.spotlightRegisterBtn) {
      DOM.spotlightRegisterBtn.addEventListener('click', () => RegistrationManager.preSelectEventAndScroll(1));
    }

    // Global ESC key listener to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeActiveModal();
      }
    });
  },

  openModal(modalElem) {
    if (!modalElem) return;
    this.closeActiveModal();
    modalElem.style.display = 'flex';
    requestAnimationFrame(() => {
      modalElem.classList.add('active');
    });
    this.activeModal = modalElem;
    document.body.style.overflow = 'hidden'; // Lock background scroll
  },

  closeModal(modalElem) {
    if (!modalElem) return;
    modalElem.classList.remove('active');
    setTimeout(() => {
      modalElem.style.display = 'none';
      if (this.activeModal === modalElem) {
        this.activeModal = null;
        document.body.style.overflow = '';
      }
    }, 280);
  },

  closeActiveModal() {
    if (this.activeModal) {
      this.closeModal(this.activeModal);
    }
  },

  openEventDetails(eventId) {
    const ev = EVENTS_DATA.find((e) => e.id === eventId);
    if (!ev || !DOM.modalDetailsContent) return;

    const rem = CountdownEngine.calculateTimeRemaining(ev.targetDate);
    const detailedTimer = CountdownEngine.formatDetailedTimer(rem);

    DOM.modalDetailsContent.innerHTML = `
      <div class="modal-banner-wrap">
        <img src="${ev.image}" alt="${escapeHtml(ev.title)}" class="modal-banner-img">
        <div class="modal-banner-overlay"></div>
        <div class="modal-countdown-badge">
          <i class="fa-solid fa-stopwatch"></i>
          <span id="modalDynamicCountdown" data-modal-target="${ev.targetDate}">${detailedTimer}</span>
        </div>
      </div>

      <div class="modal-category-badge-wrap" style="margin-bottom: 12px;">
        <span class="event-category-badge ${ev.badgeClass}">
          <i class="fa-solid fa-tag"></i> ${escapeHtml(ev.category)}
        </span>
      </div>

      <h2 class="modal-event-title" id="modalEventTitle">${escapeHtml(ev.title)}</h2>

      <div class="modal-meta-grid">
        <div class="modal-meta-box">
          <i class="fa-regular fa-calendar-days"></i>
          <div>
            <strong>Date & Time</strong>
            <span>${escapeHtml(ev.date)} • ${escapeHtml(ev.time)}</span>
          </div>
        </div>
        <div class="modal-meta-box">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>Venue</strong>
            <span>${escapeHtml(ev.venue)}, ${escapeHtml(ev.city)}</span>
          </div>
        </div>
        <div class="modal-meta-box">
          <i class="fa-solid fa-ticket"></i>
          <div>
            <strong>Pass Price & Seats</strong>
            <span>${escapeHtml(ev.price)} (${ev.spotsLeft} Left)</span>
          </div>
        </div>
      </div>

      <h3 class="modal-section-heading">About This Experience</h3>
      <p class="modal-desc-text">${escapeHtml(ev.fullDescription)}</p>

      <h3 class="modal-section-heading">Key Event Highlights</h3>
      <div class="modal-highlights-list">
        ${ev.highlights.map(h => `
          <div class="modal-highlight-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHtml(h)}</span>
          </div>
        `).join('')}
      </div>

      <h3 class="modal-section-heading">Schedule & Agenda</h3>
      <div class="agenda-timeline">
        ${ev.agenda.map(a => `
          <div class="agenda-item">
            <span class="agenda-time">${escapeHtml(a.time)}</span>
            <div class="agenda-content">
              <strong>${escapeHtml(a.title)}</strong>
              <p>${escapeHtml(a.desc)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      ${ev.speaker ? `
        <h3 class="modal-section-heading">Featured Speaker / Host</h3>
        <div class="modal-meta-box" style="margin-bottom: 24px; background: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-md);">
          <i class="fa-solid fa-user-tie" style="font-size: 1.5rem; color: var(--primary);"></i>
          <div>
            <strong>${escapeHtml(ev.speaker.name)}</strong>
            <span style="font-size: 0.86rem; color: var(--text-secondary);">${escapeHtml(ev.speaker.role)}</span>
          </div>
        </div>
      ` : ''}

      <div class="modal-footer-actions">
        <button class="btn btn-outline" id="modalCloseActionBtn">Close</button>
        <button class="btn btn-primary" id="modalRegisterActionBtn">
          <i class="fa-solid fa-ticket"></i>
          <span>Register Now For This Event</span>
        </button>
      </div>
    `;

    // Modal action buttons
    const closeBtn = document.getElementById('modalCloseActionBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal(DOM.eventDetailsModal));

    const regBtn = document.getElementById('modalRegisterActionBtn');
    if (regBtn) {
      regBtn.addEventListener('click', () => {
        this.closeModal(DOM.eventDetailsModal);
        RegistrationManager.preSelectEventAndScroll(ev.id);
      });
    }

    this.openModal(DOM.eventDetailsModal);
  },

  openMyTickets() {
    RegistrationManager.renderStoredTickets();
    this.openModal(DOM.myRegistrationsModal);
  }
};

/* ==========================================================================
   9. REGISTRATION MANAGER (PERSISTENCE, VALIDATION & DUPLICATE PREVENTION)
   ========================================================================== */
const RegistrationManager = {
  init() {
    this.loadRegistrations();
    this.bindForm();
    this.updateBadges();
  },

  loadRegistrations() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      AppState.registrations = stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse registrations from Local Storage', e);
      AppState.registrations = [];
    }
  },

  saveRegistrations() {
    try {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(AppState.registrations));
      this.updateBadges();
    } catch (e) {
      console.error('Failed to save registrations to Local Storage', e);
      showToast('Error saving pass to local storage.', 'error');
    }
  },

  updateBadges() {
    const count = AppState.registrations.length;
    if (DOM.ticketCountBadge) DOM.ticketCountBadge.textContent = count;
    if (DOM.mobileTicketCount) DOM.mobileTicketCount.textContent = count;
  },

  preSelectEventAndScroll(eventId) {
    if (DOM.regEvent) {
      DOM.regEvent.value = eventId;
      DOM.regEvent.focus();
    }
    const regSection = document.getElementById('register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Event selected in registration form.', 'info', 2000);
  },

  bindForm() {
    if (!DOM.registrationForm) return;

    // Real-time validation clears on input
    DOM.regName.addEventListener('input', () => this.validateField('regName'));
    DOM.regEmail.addEventListener('input', () => this.validateField('regEmail'));
    DOM.regPhone.addEventListener('input', (e) => {
      // Clean non-digits
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      this.validateField('regPhone');
    });
    DOM.regEvent.addEventListener('change', () => this.validateField('regEvent'));
    DOM.regTerms.addEventListener('change', () => this.validateField('regTerms'));

    // Form Submission
    DOM.registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleRegistrationSubmit();
    });
  },

  validateField(fieldName) {
    let isValid = true;
    const group = document.getElementById(`group-${fieldName}`);
    const errorEl = document.getElementById(`error-${fieldName}`);

    if (fieldName === 'regName') {
      const val = DOM.regName.value.trim();
      isValid = val.length >= 2 && /^[a-zA-Z\s.'-]+$/.test(val);
    } else if (fieldName === 'regEmail') {
      const val = DOM.regEmail.value.trim();
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
    } else if (fieldName === 'regPhone') {
      const val = DOM.regPhone.value.trim();
      // Indian mobile format: exactly 10 digits starting with 6, 7, 8, or 9
      isValid = /^[6-9]\d{9}$/.test(val);
    } else if (fieldName === 'regEvent') {
      isValid = DOM.regEvent.value !== '';
    } else if (fieldName === 'regTerms') {
      isValid = DOM.regTerms.checked;
    }

    if (group) {
      group.classList.toggle('has-error', !isValid);
      group.classList.toggle('has-success', isValid);
    }

    return isValid;
  },

  validateAll() {
    const isName = this.validateField('regName');
    const isEmail = this.validateField('regEmail');
    const isPhone = this.validateField('regPhone');
    const isEvent = this.validateField('regEvent');
    const isTerms = this.validateField('regTerms');

    return isName && isEmail && isPhone && isEvent && isTerms;
  },

  handleRegistrationSubmit() {
    if (!this.validateAll()) {
      showToast('Please fix the errors in the form before submitting.', 'error', 3000);
      return;
    }

    const eventId = parseInt(DOM.regEvent.value, 10);
    const event = EVENTS_DATA.find((e) => e.id === eventId);
    if (!event) {
      showToast('Selected event could not be found.', 'error');
      return;
    }

    const email = DOM.regEmail.value.trim().toLowerCase();
    const name = DOM.regName.value.trim();
    const phone = DOM.regPhone.value.trim();

    // Check Duplicate Registration: Same Email + Same Event
    const isDuplicate = AppState.registrations.some((reg) => {
      return reg.eventId === eventId && reg.email.toLowerCase() === email;
    });

    if (isDuplicate) {
      showToast(`You are already registered for "${event.title}" with this email!`, 'warning', 4500);
      const groupEmail = document.getElementById('group-regEmail');
      if (groupEmail) {
        groupEmail.classList.add('has-error');
        const err = document.getElementById('error-regEmail');
        if (err) err.textContent = 'This email is already registered for this event.';
      }
      return;
    }

    // Generate unique Ticket Pass Reference
    const randomTicketNumber = Math.floor(10000 + Math.random() * 90000);
    const ticketId = `KEX-2026-${randomTicketNumber}`;
    const barcodeNumber = `890124${Math.floor(100000 + Math.random() * 900000)}`;

    const newRegistration = {
      ticketId,
      barcodeNumber,
      eventId: event.id,
      eventTitle: event.title,
      eventCategory: event.category,
      eventDate: event.date,
      eventTime: event.time,
      eventVenue: `${event.venue}, ${event.city}`,
      name,
      email,
      phone: `+91 ${phone}`,
      registeredAt: new Date().toISOString()
    };

    // Save to Local Storage
    AppState.registrations.unshift(newRegistration);
    this.saveRegistrations();

    // Show Success Modal with Rendered Digital Ticket
    this.renderSuccessPass(newRegistration);
    ModalManager.openModal(DOM.registrationSuccessModal);

    showToast(`Pass confirmed for ${event.title}!`, 'success', 4000);
  },

  renderSuccessPass(reg) {
    if (DOM.successEventTitle) DOM.successEventTitle.textContent = reg.eventTitle;
    const catPill = document.getElementById('ticketCategoryPill');
    if (catPill) catPill.textContent = reg.eventCategory;
    const evName = document.getElementById('ticketEventName');
    if (evName) evName.textContent = reg.eventTitle;
    const attName = document.getElementById('ticketAttendeeName');
    if (attName) attName.textContent = reg.name;
    const tId = document.getElementById('ticketId');
    if (tId) tId.textContent = reg.ticketId;
    const dt = document.getElementById('ticketDateTime');
    if (dt) dt.textContent = `${reg.eventDate} • ${reg.eventTime}`;
    const ven = document.getElementById('ticketVenue');
    if (ven) ven.textContent = reg.eventVenue;
    const em = document.getElementById('ticketAttendeeEmail');
    if (em) em.textContent = reg.email;
    const ph = document.getElementById('ticketAttendeePhone');
    if (ph) ph.textContent = reg.phone;
    const bc = document.getElementById('ticketBarcodeNumber');
    if (bc) bc.textContent = reg.barcodeNumber;
  },

  resetForm() {
    if (!DOM.registrationForm) return;
    DOM.registrationForm.reset();
    document.querySelectorAll('.form-group').forEach((g) => {
      g.classList.remove('has-error', 'has-success');
    });
    const err = document.getElementById('error-regEmail');
    if (err) err.textContent = 'Please enter a valid email address.';
  },

  renderStoredTickets() {
    if (!DOM.ticketsStoredList || !DOM.emptyTicketsView) return;

    if (AppState.registrations.length === 0) {
      DOM.ticketsStoredList.innerHTML = '';
      DOM.emptyTicketsView.style.display = 'block';
      return;
    }

    DOM.emptyTicketsView.style.display = 'none';

    DOM.ticketsStoredList.innerHTML = AppState.registrations.map((reg) => `
      <div class="saved-ticket-item" data-ticket-id="${reg.ticketId}">
        <div class="saved-ticket-info">
          <h4>${escapeHtml(reg.eventTitle)}</h4>
          <div class="saved-ticket-meta">
            <span><i class="fa-solid fa-hashtag"></i> <strong>${escapeHtml(reg.ticketId)}</strong></span>
            <span><i class="fa-regular fa-calendar"></i> ${escapeHtml(reg.eventDate)}</span>
            <span><i class="fa-solid fa-user"></i> ${escapeHtml(reg.name)}</span>
            <span><i class="fa-solid fa-envelope"></i> ${escapeHtml(reg.email)}</span>
          </div>
        </div>
        <div class="saved-ticket-actions">
          <button class="btn btn-outline btn-sm btn-view-saved-pass" data-ticket="${reg.ticketId}">
            <i class="fa-solid fa-ticket"></i> View Pass
          </button>
          <button class="btn btn-secondary btn-sm btn-cancel-reg" data-ticket="${reg.ticketId}" title="Cancel Registration">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Attach View Pass handler
    DOM.ticketsStoredList.querySelectorAll('.btn-view-saved-pass').forEach((btn) => {
      btn.addEventListener('click', () => {
        const ticketId = btn.getAttribute('data-ticket');
        const reg = AppState.registrations.find((r) => r.ticketId === ticketId);
        if (reg) {
          ModalManager.closeModal(DOM.myRegistrationsModal);
          this.renderSuccessPass(reg);
          ModalManager.openModal(DOM.registrationSuccessModal);
        }
      });
    });

    // Attach Cancel Registration handler
    DOM.ticketsStoredList.querySelectorAll('.btn-cancel-reg').forEach((btn) => {
      btn.addEventListener('click', () => {
        const ticketId = btn.getAttribute('data-ticket');
        if (confirm(`Are you sure you want to cancel pass ${ticketId}?`)) {
          AppState.registrations = AppState.registrations.filter((r) => r.ticketId !== ticketId);
          this.saveRegistrations();
          this.renderStoredTickets();
          showToast(`Pass ${ticketId} has been cancelled.`, 'info');
        }
      });
    });
  }
};

/* ==========================================================================
   10. MOBILE NAVIGATION & DRAWER
   ========================================================================== */
const MobileNav = {
  isOpen: false,

  init() {
    if (DOM.hamburgerBtn) {
      DOM.hamburgerBtn.addEventListener('click', () => this.toggleDrawer());
    }
    if (DOM.drawerOverlay) {
      DOM.drawerOverlay.addEventListener('click', () => this.closeDrawer());
    }

    // Close on navigation link click
    DOM.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (this.isOpen) this.closeDrawer();
      });
    });
  },

  toggleDrawer() {
    if (this.isOpen) this.closeDrawer();
    else this.openDrawer();
  },

  openDrawer() {
    this.isOpen = true;
    if (DOM.hamburgerBtn) {
      DOM.hamburgerBtn.classList.add('active');
      DOM.hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    if (DOM.mobileDrawer) DOM.mobileDrawer.classList.add('open');
    if (DOM.drawerOverlay) DOM.drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    this.isOpen = false;
    if (DOM.hamburgerBtn) {
      DOM.hamburgerBtn.classList.remove('active');
      DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (DOM.mobileDrawer) DOM.mobileDrawer.classList.remove('open');
    if (DOM.drawerOverlay) DOM.drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   11. SCROLL SPY, STICKY NAVBAR & BACK-TO-TOP
   ========================================================================== */
const ScrollManager = {
  init() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    this.initIntersectionObserver();
    this.initScrollSpy();
  },

  handleScroll() {
    const scrollY = window.scrollY;

    // Sticky navbar shadow
    if (DOM.navbar) {
      DOM.navbar.classList.toggle('scrolled', scrollY > 20);
    }

    // Back to top button visibility
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.classList.toggle('visible', scrollY > 360);
    }
  },

  initIntersectionObserver() {
    // Scroll reveal animations for elements with .reveal-item
    const revealItems = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

      revealItems.forEach((item) => observer.observe(item));
    } else {
      // Fallback for older browsers
      revealItems.forEach((item) => item.classList.add('revealed'));
    }
  },

  initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window) {
      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            DOM.navLinks.forEach((link) => {
              const navTarget = link.getAttribute('data-nav');
              const isMatch = navTarget === id;
              link.classList.toggle('active', isMatch);
            });
          }
        });
      }, { rootMargin: '-20% 0px -60% 0px' });

      sections.forEach((sec) => spyObserver.observe(sec));
    }
  }
};

/* ==========================================================================
   12. CONTACT & NEWSLETTER VALIDATION
   ========================================================================== */
const ContactManager = {
  init() {
    // Announcement Close
    if (DOM.announcementClose && DOM.announcementBar) {
      if (localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENT) === 'hidden') {
        DOM.announcementBar.style.display = 'none';
      }
      DOM.announcementClose.addEventListener('click', () => {
        DOM.announcementBar.style.display = 'none';
        localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENT, 'hidden');
      });
    }

    // Dynamic Current Year in Footer
    if (DOM.currentYearSpan) {
      DOM.currentYearSpan.textContent = new Date().getFullYear();
    }

    // Contact Form
    if (DOM.contactForm) {
      DOM.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactSubmit();
      });
    }

    // Newsletter Form
    if (DOM.newsletterForm) {
      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleNewsletterSubmit();
      });
    }
  },

  handleContactSubmit() {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    // Name Validation
    const nameVal = nameInput.value.trim();
    const groupName = document.getElementById('group-contactName');
    if (nameVal.length < 2) {
      if (groupName) groupName.classList.add('has-error');
      isValid = false;
    } else {
      if (groupName) groupName.classList.remove('has-error');
    }

    // Email Validation
    const emailVal = emailInput.value.trim();
    const groupEmail = document.getElementById('group-contactEmail');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal)) {
      if (groupEmail) groupEmail.classList.add('has-error');
      isValid = false;
    } else {
      if (groupEmail) groupEmail.classList.remove('has-error');
    }

    // Subject Validation
    const subjectVal = subjectInput.value.trim();
    const groupSubject = document.getElementById('group-contactSubject');
    if (subjectVal.length < 3) {
      if (groupSubject) groupSubject.classList.add('has-error');
      isValid = false;
    } else {
      if (groupSubject) groupSubject.classList.remove('has-error');
    }

    // Message Validation
    const messageVal = messageInput.value.trim();
    const groupMessage = document.getElementById('group-contactMessage');
    if (messageVal.length < 10) {
      if (groupMessage) groupMessage.classList.add('has-error');
      isValid = false;
    } else {
      if (groupMessage) groupMessage.classList.remove('has-error');
    }

    if (!isValid) {
      showToast('Please correct the highlighted fields in the contact form.', 'error');
      return;
    }

    // Simulate successful submission
    const submitBtn = document.getElementById('submitContactBtn');
    if (submitBtn) {
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        DOM.contactForm.reset();
        showToast('Thank you! Your message has been sent to our concierge team.', 'success', 4000);
      }, 700);
    }
  },

  handleNewsletterSubmit() {
    if (!DOM.newsletterEmail) return;

    const email = DOM.newsletterEmail.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!isValid) {
      if (DOM.newsletterFeedback) {
        DOM.newsletterFeedback.textContent = 'Please enter a valid email address.';
        DOM.newsletterFeedback.className = 'newsletter-feedback error';
      }
      return;
    }

    if (DOM.newsletterFeedback) {
      DOM.newsletterFeedback.textContent = '🎉 Thank you for subscribing to weekly event drops!';
      DOM.newsletterFeedback.className = 'newsletter-feedback success';
    }

    DOM.newsletterEmail.value = '';
    showToast('Subscribed to K Explore newsletter!', 'success', 3000);

    setTimeout(() => {
      if (DOM.newsletterFeedback) DOM.newsletterFeedback.textContent = '';
    }, 4500);
  }
};

/* ==========================================================================
   13. APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  CountdownEngine.init();
  EventCatalog.init();
  ModalManager.init();
  RegistrationManager.init();
  MobileNav.init();
  ScrollManager.init();
  ContactManager.init();

  console.log('%c K EXPLORE — Event Management Platform initialized successfully. ', 'background: #4f46e5; color: #fff; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 4px;');
});
