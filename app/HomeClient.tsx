"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Play,
  ReceiptText,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Website Development",
    text: "Premium, responsive and conversion-focused websites for companies, startups, NGOs and local businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    text: "Secure online stores with products, payments, orders, offers, analytics and management dashboards.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Tailor-made software designed around your actual workflow, team, reports and growth plans.",
  },
  {
    icon: Layers3,
    title: "ERP, CRM & HRMS",
    text: "Connected systems for billing, inventory, accounting, customers, employees and business reporting.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Modern Android and cross-platform applications with reliable performance and clean user experience.",
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    text: "Logo design, brand identity, social creatives, presentations and complete visual systems.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    text: "AI chatbots, voice assistants, document automation and intelligent business workflows.",
  },
  {
    icon: Settings2,
    title: "Maintenance & Support",
    text: "Hosting, updates, monitoring, backups, optimisation and long-term technical support.",
  },
];

const process = [
  {
    icon: Lightbulb,
    title: "Discover",
    text: "We understand your idea, users, workflow and business goals.",
  },
  {
    icon: Target,
    title: "Plan",
    text: "We prepare scope, features, timeline and technology architecture.",
  },
  {
    icon: WandSparkles,
    title: "Design",
    text: "We create a premium, simple and user-friendly product experience.",
  },
  {
    icon: Code2,
    title: "Develop",
    text: "We build scalable features with clean and maintainable code.",
  },
  {
    icon: ShieldCheck,
    title: "Test",
    text: "We test responsiveness, performance, security and real workflows.",
  },
  {
    icon: Rocket,
    title: "Launch",
    text: "We deploy, train, monitor and support your product after launch.",
  },
];

const industries = [
  { icon: ShoppingCart, title: "Retail & E-commerce" },
  { icon: GraduationCap, title: "Education" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Building2, title: "Corporate & SMEs" },
  { icon: Users, title: "NGOs & Foundations" },
  { icon: Globe2, title: "Startups & Digital Brands" },
];

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide websites, e-commerce stores, custom software, ERP, CRM, HRMS, mobile apps, logo and branding, AI automation, hosting and maintenance.",
  },
  {
    question: "Can you build software according to my workflow?",
    answer:
      "Yes. We study your current process first and then create a customised solution around your users, permissions, reports and business rules.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. Support, bug fixing, updates, backups and maintenance can be included according to the selected package.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Share your requirement through WhatsApp or email. We will review the scope and provide an estimated timeline and price.",
  },
];

const stats = [
  { value: "10+", label: "Digital Services" },
  { value: "100%", label: "Project Commitment" },
  { value: "24×7", label: "Support Options" },
  { value: "360°", label: "Business Solutions" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [cursor, setCursor] = useState({ x: 50, y: 25 });
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const lightweightMotion = isMobile || Boolean(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px), (pointer: coarse)");
    const updateDeviceMode = () => setIsMobile(mediaQuery.matches);

    updateDeviceMode();
    mediaQuery.addEventListener("change", updateDeviceMode);

    return () => mediaQuery.removeEventListener("change", updateDeviceMode);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const updateCursor = (event: MouseEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [isMobile]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion={lightweightMotion ? "always" : "user"}>
    <main
      style={
        {
          "--cursor-x": `${cursor.x}%`,
          "--cursor-y": `${cursor.y}%`,
        } as React.CSSProperties
      }
    >
      {!isMobile && <div className="cursor-light" />}

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <Image
              src="/images/pratham-logo.jpeg"
              alt="Pratham Consultancy & Services"
              width={52}
              height={52}
              priority
            />
            <span>
              <strong>Pratham</strong>
              <small>Consultancy & Services</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta desktop-cta" href="#contact">
            Get Free Quote <ArrowRight size={17} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {["home", "services", "about", "products", "process", "contact"].map(
                (item) => (
                  <a key={item} href={`#${item}`} onClick={closeMenu}>
                    {item[0].toUpperCase() + item.slice(1)}
                  </a>
                ),
              )}
              <a className="nav-cta" href="#contact" onClick={closeMenu}>
                Get Free Quote <ArrowRight size={17} />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-noise" />
        <motion.div
          className="orb orb-one"
          animate={lightweightMotion ? undefined : { x: [0, 50, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="orb orb-two"
          animate={lightweightMotion ? undefined : { x: [0, -40, 0], y: [0, 45, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        <div className="container hero-layout">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
          >
            <div className="eyebrow">
              <Sparkles size={17} />
              Technology built for ambitious businesses
            </div>

            <h1>
              We build digital products that make your business{" "}
              <span>look premium and grow faster.</span>
            </h1>

            <p>
              Professional websites, custom software, ERP platforms, mobile
              applications, branding and AI automation—delivered through one
              reliable technology partner.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Start Your Project <ArrowRight size={19} />
              </a>
              <a className="button secondary" href="#products">
                <Play size={18} /> View Our Products
              </a>
            </div>

            <div className="hero-points">
              <span>
                <CheckCircle2 size={18} /> Premium UI/UX
              </span>
              <span>
                <CheckCircle2 size={18} /> Mobile friendly
              </span>
              <span>
                <CheckCircle2 size={18} /> Long-term support
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.82, rotateY: -12 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.95, delay: 0.12 }}
          >
            <div className="visual-glow" />

            <motion.div
              className="main-dashboard"
              animate={lightweightMotion ? undefined : { y: [0, -12, 0], rotateX: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="dashboard-top">
                <div className="dashboard-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>Business Intelligence Dashboard</span>
                <div className="dashboard-avatar">P</div>
              </div>

              <div className="dashboard-body">
                <aside className="dashboard-sidebar">
                  <Zap />
                  {[1, 2, 3, 4, 5].map((item) => (
                    <i key={item} />
                  ))}
                </aside>

                <div className="dashboard-content">
                  <div className="dashboard-heading">
                    <div>
                      <small>Welcome back</small>
                      <strong>Business Overview</strong>
                    </div>
                    <span>Live</span>
                  </div>

                  <div className="dashboard-metrics">
                    <article>
                      <small>Revenue</small>
                      <strong>₹8.4L</strong>
                      <em>+24%</em>
                    </article>
                    <article>
                      <small>Orders</small>
                      <strong>1,248</strong>
                      <em>+18%</em>
                    </article>
                    <article>
                      <small>Growth</small>
                      <strong>32%</strong>
                      <em>+9%</em>
                    </article>
                  </div>

                  <div className="dashboard-chart">
                    {[42, 58, 46, 71, 64, 88, 76, 92, 81].map(
                      (height, index) => (
                        <motion.i
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.6 + index * 0.08, duration: 0.7 }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="float-card float-a"
              animate={lightweightMotion ? undefined : { y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 3.8, repeat: Infinity }}
            >
              <Code2 size={21} />
              <span>
                <small>Development</small>
                <strong>Modern Solutions</strong>
              </span>
            </motion.div>

            <motion.div
              className="float-card float-b"
              animate={lightweightMotion ? undefined : { y: [0, 11, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 4.2, repeat: Infinity }}
            >
              <TrendingUp size={21} />
              <span>
                <small>Business Growth</small>
                <strong>Digital Strategy</strong>
              </span>
            </motion.div>

            <motion.div
              className="float-card float-c"
              animate={lightweightMotion ? undefined : { x: [0, 8, 0] }}
              transition={{ duration: 4.6, repeat: Infinity }}
            >
              <Bot size={21} />
              <span>
                <small>AI Ready</small>
                <strong>Smart Automation</strong>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="container stats-panel">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>Solutions powered by modern technology</span>
          <div>
            <b>
              <Globe2 size={19} /> Websites
            </b>
            <b>
              <Code2 size={19} /> Software
            </b>
            <b>
              <Layers3 size={19} /> ERP Systems
            </b>
            <b>
              <Palette size={19} /> Branding
            </b>
            <b>
              <Bot size={19} /> AI Automation
            </b>
          </div>
        </div>
      </section>

      <section className="section services premium-light-section" id="services">
        <div className="mesh mesh-one" />
        <div className="mesh mesh-two" />

        <div className="container">
          <div className="section-heading">
            <span>Our Expertise</span>
            <h2>Everything your business needs to grow digitally</h2>
            <p>
              From idea to launch, we handle strategy, design, development,
              deployment and support under one professional workflow.
            </p>
          </div>

          <div className="service-grid">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="service-card glass-light"
                  initial={{ opacity: 0, y: 38 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.055 }}
                  whileHover={{ y: -10, scale: 1.015 }}
                >
                  <div className="card-shine" />
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <small>0{index + 1}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#contact">
                    Discuss Service <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about dark-surface" id="about">
        <div className="dark-grid" />
        <div className="container about-layout">
          <motion.div
            className="about-graphic"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="orbit orbit-one"
              animate={lightweightMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <span>
                <Code2 />
              </span>
              <span>
                <Palette />
              </span>
              <span>
                <Bot />
              </span>
            </motion.div>

            <motion.div
              className="orbit orbit-two"
              animate={lightweightMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
            >
              <span>
                <Globe2 />
              </span>
              <span>
                <Layers3 />
              </span>
            </motion.div>

            <motion.div
              className="about-logo-card"
              animate={lightweightMotion ? undefined : { y: [0, -11, 0] }}
              transition={{ duration: 4.2, repeat: Infinity }}
            >
              <Image
                src="/images/pratham-logo.jpeg"
                alt="Pratham Consultancy logo"
                width={210}
                height={210}
              />
              <strong>We Build.</strong>
              <span>You Grow.</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow">
              <Sparkles size={17} /> About our company
            </div>
            <h2>
              Your technology partner for <span>digital growth</span>
            </h2>
            <p>
              Pratham Consultancy & Services helps businesses transform ideas
              into professional digital products. We combine technology, design
              and business understanding to deliver practical solutions—not just
              attractive screens.
            </p>
            <p>
              Our goal is to build long-term partnerships through transparent
              communication, scalable systems and dependable support.
            </p>

            <div className="benefits">
              <span>
                <BadgeCheck /> Business-focused development
              </span>
              <span>
                <BadgeCheck /> Modern and scalable technology
              </span>
              <span>
                <BadgeCheck /> Clear project communication
              </span>
              <span>
                <BadgeCheck /> Long-term technical support
              </span>
            </div>

            <a className="button primary" href="#contact">
              Work With Us <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section why premium-light-section">
        <div className="container">
          <div className="section-heading">
            <span>Why Choose Us</span>
            <h2>Premium design with business-first execution</h2>
          </div>

          <div className="why-bento">
            <motion.article
              className="bento-large blue-bento"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <span>Premium UI/UX</span>
                <h3>Designs that make your business look more trustworthy.</h3>
                <p>
                  Clean structure, polished details, responsive layouts and
                  purposeful interactions across every screen.
                </p>
              </div>

              <div className="mini-ui">
                <i />
                <div>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </motion.article>

            {[
              {
                icon: Zap,
                title: "Fast Performance",
                text: "Optimised experiences across desktop, tablet and mobile.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Architecture",
                text: "Permissions, validation and reliable data handling.",
              },
              {
                icon: TrendingUp,
                title: "Built to Scale",
                text: "Prepared for more users, features and business data.",
              },
              {
                icon: Bot,
                title: "AI Ready",
                text: "Automation and AI capabilities can grow with you.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bento-card"
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -7 }}
                >
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section products dark-surface" id="products">
        <div className="dark-grid" />

        <div className="container">
          <div className="section-heading dark-heading">
            <span>Our Products</span>
            <h2>Software products created for real business operations</h2>
            <p>
              Every product gets its own detailed showcase inside this section,
              while the main navigation stays clean.
            </p>
          </div>

          <div className="product-showcase">
            <div className="product-copy">
              <div className="live-label">
                <i /> Live Product
              </div>
              <h3>VertexERP</h3>
              <p>
                Cloud-based billing, inventory, accounting, GST and business
                management software built for growing Indian businesses.
              </p>

              <div className="feature-list">
                <span>
                  <ReceiptText /> GST Billing
                </span>
                <span>
                  <Boxes /> Inventory
                </span>
                <span>
                  <BarChart3 /> Reports
                </span>
                <span>
                  <Database /> Accounting
                </span>
                <span>
                  <Users /> Parties
                </span>
                <span>
                  <ShieldCheck /> Role Permissions
                </span>
              </div>

              <div className="product-actions">
                <a
                  className="button primary"
                  href="https://vertexerp-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore VertexERP <ExternalLink size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  Request Demo <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <motion.div
              className="browser-mockup"
              initial={{ opacity: 0, rotateY: -10, x: 35 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="browser-top">
                <i />
                <i />
                <i />
                <span>vertexerp-eight.vercel.app</span>
              </div>

              <div className="erp-dashboard">
                <aside>
                  <Zap />
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <i key={item} />
                  ))}
                </aside>

                <div className="erp-main">
                  <div className="erp-title">
                    <span>
                      <small>Business Overview</small>
                      <b>Dashboard</b>
                    </span>
                    <em>P</em>
                  </div>

                  <div className="erp-cards">
                    <div>
                      <small>Total Sales</small>
                      <strong>₹4.8L</strong>
                    </div>
                    <div>
                      <small>Purchases</small>
                      <strong>₹2.1L</strong>
                    </div>
                    <div>
                      <small>Profit</small>
                      <strong>₹1.7L</strong>
                    </div>
                  </div>

                  <div className="erp-chart">
                    {[38, 55, 45, 68, 61, 84, 74, 92].map((height, index) => (
                      <motion.span
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="future-grid">
            {[
              {
                icon: Users,
                status: "Coming Soon",
                title: "AttendPro",
                text: "Attendance, leave and workforce management.",
              },
              {
                icon: Palette,
                status: "Coming Soon",
                title: "Logo Studio",
                text: "Logo creation and complete brand identity tools.",
              },
              {
                icon: Bot,
                status: "In Development",
                title: "AI Business Assistant",
                text: "Voice and chat-based business automation.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                >
                  <Icon />
                  <div>
                    <small>{item.status}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section process premium-light-section" id="process">
        <div className="mesh mesh-three" />

        <div className="container">
          <div className="section-heading">
            <span>How We Work</span>
            <h2>A clear process from idea to successful launch</h2>
          </div>

          <div className="process-timeline">
            <div className="timeline-line" />

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="process-number">0{index + 1}</div>
                  <div className="process-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section industries dark-surface">
        <div className="dark-grid" />

        <div className="container industries-layout">
          <motion.div
            className="industries-copy"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>Industries We Serve</span>
            <h2>Solutions created around real business workflows</h2>
            <p>
              We customise every system according to the users, operations,
              reports and challenges of your industry.
            </p>
            <a className="button primary" href="#contact">
              Discuss Your Industry <ArrowRight size={18} />
            </a>
          </motion.div>

          <div className="industry-grid">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8, rotateX: 3 }}
                >
                  <div>
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section faq premium-light-section">
        <div className="container faq-layout">
          <motion.div
            className="faq-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>Frequently Asked Questions</span>
            <h2>Everything you may want to know before starting</h2>
            <p>
              For a detailed discussion, share your requirements directly on
              WhatsApp.
            </p>
            <a
              className="button primary"
              href="https://wa.me/918737072778"
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp <MessageCircle size={18} />
            </a>
          </motion.div>

          <div className="faq-list">
            {faqs.map((item, index) => {
              const isActive = activeFaq === index;

              return (
                <motion.article
                  key={item.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={isActive ? "active" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isActive ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown />
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-card">
          <div className="contact-glow" />

          <div>
            <span>Let&apos;s Build Something Great</span>
            <h2>Have a business idea or software requirement?</h2>
            <p>
              Share your requirement and receive a clear project discussion,
              estimated timeline and quotation.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button white"
              href="https://wa.me/918737072778"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> WhatsApp Us
            </a>
            <a
              className="button outline-white"
              href="mailto:prathamgaur2005@gmail.com"
            >
              <Mail /> Send Email
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-orb" />

        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <Image
                src="/images/pratham-logo.jpeg"
                alt="Pratham Consultancy & Services"
                width={58}
                height={58}
              />
              <span>
                <strong>Pratham</strong>
                <small>Consultancy & Services</small>
              </span>
            </div>

            <p>
              Premium websites, custom software, ERP, branding, mobile apps and
              AI automation for modern businesses.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#services">Website Development</a>
            <a href="#services">Custom Software</a>
            <a href="#services">ERP Solutions</a>
            <a href="#services">Logo & Branding</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="tel:+918737072778">
              <Phone size={16} /> +91 87370 72778
            </a>
            <a href="mailto:prathamgaur2005@gmail.com">
              <Mail size={16} /> prathamgaur2005@gmail.com
            </a>
            <span>
              <MapPin size={16} /> Lucknow, India
            </span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Pratham Consultancy & Services. All rights reserved.</span>
          <span>We Build. You Grow.</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/918737072778"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
    </main>
    </MotionConfig>
  );
}