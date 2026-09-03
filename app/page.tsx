"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const FACTS = [
  { label: "Focus", value: "Laravel & PHP backend systems" },
  { label: "Experience", value: "6+ years" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Currently", value: "Lead Software Engineer, Blocknots" },
]

const SKILLS = [
  { category: "Backend & Frameworks", items: "Laravel, PHP, CodeIgniter, Django, Flask, Node.js" },
  { category: "Frontend", items: "JavaScript, React.js, HTML, CSS" },
  { category: "Languages", items: "PHP, Python, SQL, Bash" },
  { category: "Databases", items: "MySQL, PostgreSQL" },
  { category: "Tools & Cloud", items: "Git, Docker, Jenkins, AWS" },
  { category: "Data & Analytics", items: "Pandas, NumPy, SciPy, Matplotlib, Seaborn, Scikit-learn" },
]

const EXPERIENCE = [
  {
    role: "Lead Software Engineer",
    company: "Blocknots LTD.",
    location: "Dhaka, Bangladesh",
    date: "Jan 2025 — Present",
    bullets: [
      "Lead system architecture and backend development for the company's products, keeping applications scalable, secure, and maintainable as they grow.",
      "Guide the development team through code reviews, technical direction, and best-practice enforcement.",
      "Work directly with stakeholders to translate business requirements into technical solutions, and own deployments and CI/CD processes for reliable releases.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Next Page Technology Ltd.",
    location: "Dhaka, Bangladesh",
    date: "Nov 2023 — Dec 2024",
    bullets: [
      "Developed an enterprise resource planning (ERP) system in Laravel, covering business management workflows with advanced reporting and analytics.",
      "Architected RESTful APIs for third-party integrations, strengthening the platform's scalability and reliability.",
      "Mentored 5+ developers, establishing coding standards and CI/CD pipelines with Jenkins and Git.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Next Page Technology Ltd.",
    location: "Dhaka, Bangladesh",
    date: "Jul 2022 — Nov 2023",
    bullets: [
      "Built high-traffic Laravel applications, including a POS system for streamlined transactions, and optimized MySQL queries for better performance.",
      "Integrated third-party APIs and automated deployment pipelines using Docker and AWS.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "MH IT Bangladesh",
    location: "Dhaka, Bangladesh",
    date: "Nov 2021 — Jul 2022",
    bullets: [
      "Designed and developed full-stack web applications with PHP and Laravel, including custom CMS and e-commerce solutions.",
      "Managed database design and data migration, and maintained legacy CodeIgniter applications.",
    ],
  },
  {
    role: "Web Application Developer",
    company: "Online Network Engineering Limited",
    location: "Gazipur, Dhaka, Bangladesh",
    date: "Jan 2019 — Dec 2019",
    bullets: [
      "Contributed to Laravel-based web applications, collaborating with senior developers to deliver client solutions.",
      "Debugged and optimized PHP and SQL code, improving system performance.",
    ],
  },
]

type Project = {
  name: string
  tag?: string
  description: string
  stack: string[]
  status: string
  link?: { href: string; label: string }
  links?: { href: string; label: string }[]
}

const PROJECTS: Project[] = [
  {
    name: "Real Estate ERP Platform",
    tag: "Blocknots",
    description:
      "Leading backend architecture for an in-progress ERP platform for real estate businesses — property/listing management, transactions, and agent workflows.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "Ongoing, 2025",
  },
  {
    name: "Nexvat — VAT Management Software",
    tag: "NBR-enlisted",
    description:
      "VAT compliance platform with automated tax calculations, compliance reporting, and dynamic reports for business tax obligations.",
    stack: ["Laravel", "React.js", "MySQL"],
    status: "2025",
    link: { href: "https://nexvat.com/", label: "View site" },
  },
  {
    name: "ERP System — Fintrack360",
    description: "Financial management & ERP system with advanced reporting and analytics for business management.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL"],
    status: "2024",
    link: { href: "https://nextpagetl.com/products", label: "Product page" },
  },
  {
    name: "Real Estate Management System",
    description:
      "Property listings, client management, sales tracking, and portfolio management for real estate agencies and developers.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "2024",
    link: { href: "https://formonic.nextpagetl.com/", label: "View demo" },
  },
  {
    name: "Travel & Booking Management System",
    description: "Hotel bookings, flight reservations, car rentals, and integrated travel services for trip planning.",
    stack: ["Laravel", "PHP", "MySQL", "API Integration", "Payment Gateway"],
    status: "2023",
    link: { href: "https://booking360.nextpagetl.com/", label: "View demo" },
  },
  {
    name: "POS System",
    description: "Point-of-sale solution for streamlined transactions and inventory management.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL"],
    status: "2023",
    link: { href: "https://ssp.nextpagetl.com/", label: "View demo" },
  },
  {
    name: "Learning Management System",
    description: "Modern LMS with a Next.js frontend and a Node.js/MySQL backend for an educational platform.",
    stack: ["Next.js", "Node.js", "MySQL", "React"],
    status: "2022",
    link: { href: "https://thepolycube.com/", label: "View site" },
  },
  {
    name: "Courier Management System",
    description: "Courier and delivery management with tracking, route optimization, and customer notifications.",
    stack: ["Laravel", "PHP", "MySQL", "API Integration"],
    status: "2022",
    link: { href: "https://ecommerce11.nextpagetl.com/", label: "View demo" },
  },
  {
    name: "School Management System",
    description: "Educational institution management with student records, attendance, and grade management.",
    stack: ["CodeIgniter", "PHP", "MySQL"],
    status: "2022",
    link: { href: "https://demo.nextpagetl.com/", label: "View demo" },
  },
  {
    name: "Matrimony Platform",
    description: "Specialized matrimonial service featuring a 'Most Match' compatibility system and custom packages.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "2021",
    link: { href: "https://idealnikah.com/", label: "View site" },
  },
  {
    name: "2nd Hand Marketplace",
    description: "Marketplace for second-hand products with advanced search and filtering.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "2021",
    link: { href: "https://2ndhandmarketbd.com/", label: "View site" },
  },
  {
    name: "E-commerce Platforms",
    description: "Eight live e-commerce builds across different industries, focused on scalability and performance.",
    stack: ["Laravel", "PHP", "MySQL", "API Development"],
    status: "2020 — 2023",
    links: [
      { href: "https://durbiin.com/", label: "Durbiin" },
      { href: "https://alifaonline.com/", label: "Alifa Online" },
      { href: "https://mahmudmart.com.bd/", label: "Mahmud Mart" },
      { href: "https://chowdhuryelectronics.com.bd/", label: "Chowdhury Electronics" },
      { href: "https://autometica.net/", label: "Autometica" },
      { href: "https://abayaalsamir.com/", label: "Abaya Al Samir" },
      { href: "https://babyblueorpinkbird.com/", label: "Baby Blue Bird" },
      { href: "https://leafs.com.bd/", label: "Leafs" },
    ],
  },
  {
    name: "Corporate Websites",
    description: "Backend systems for corporate sites with content management, SEO, and business integrations.",
    stack: ["Laravel", "PHP", "MySQL"],
    status: "2020 — 2022",
    links: [
      { href: "https://polluxchemicalsltd.com/", label: "Pollux Chemicals" },
      { href: "https://sinaratex.com/", label: "Sinaratex" },
      { href: "https://ecocolourchem.com/", label: "Eco Colour Chem" },
    ],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="font-serif text-lg font-semibold tracking-tight">
            Akram Hossain
          </Link>
          <div className="hidden sm:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container border-b border-border py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Backend Engineer · Dhaka, Bangladesh</p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Akram Hossain
          </h1>
          <p className="mt-3 font-mono text-sm text-muted-foreground sm:text-base">
            Lead Software Engineer — Backend &amp; ERP Systems
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build backend systems that businesses actually run on — ERP platforms, VAT compliance
            software, and the APIs that hold them together. Six-plus years in Laravel and PHP, most of it
            spent owning architecture end to end and leading the teams who ship it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-1 border-b border-foreground pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View my work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <Link href="https://github.com/akramhossainrabbi" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-accent">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/akramhossainrabbi" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-accent">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:akramhossainrabbi@outlook.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-accent">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container grid gap-10 border-b border-border py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Backend-first, by choice.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I'm a lead software engineer specializing in Laravel development, with a particular focus on
            backend architecture, API design, and database optimization. I care about systems that stay
            legible as they grow — clear boundaries, sane data models, and code the next engineer can
            actually follow. Outside of shipping, I lead and mentor development teams and hold an MSc in
            Applied Statistics and Data Science, which still shapes how I think about the data layer.
          </p>
        </div>
        <dl className="divide-y divide-border border-t border-border md:border-t-0 md:self-center">
          {FACTS.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[120px_1fr] gap-4 py-4">
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{fact.label}</dt>
              <dd className="text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Skills */}
      <section id="skills" className="container border-b border-border py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">Technical skills</h2>
        <div className="mt-10 divide-y divide-border border-t border-border">
          {SKILLS.map((s) => (
            <div key={s.category} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-4 sm:py-5">
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{s.category}</div>
              <div className="text-sm sm:text-base">{s.items}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container border-b border-border py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">Professional experience</h2>
        <div className="mt-10 divide-y divide-border border-t border-border">
          {EXPERIENCE.map((job) => (
            <div key={`${job.company}-${job.date}`} className="grid gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
              <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">{job.date}</div>
              <div>
                <h3 className="font-serif text-xl font-medium">{job.role}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container border-b border-border py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Projects</p>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">Selected work</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Backend contributions across ERP, compliance, e-commerce, and platform builds.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="group flex flex-col bg-background p-6 transition-colors hover:bg-secondary/60 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{p.status}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-medium leading-snug">
                {p.name}
                {p.tag && <span className="ml-2 align-middle font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">· {p.tag}</span>}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">{p.stack.join(" · ")}</p>

              {p.link && (
                <Link
                  href={p.link.href}
                  target="_blank"
                  className="mt-5 inline-flex w-fit items-center gap-1 border-b border-foreground pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {p.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}

              {p.links && (
                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                  {p.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              )}

              {!p.link && !p.links && (
                <p className="mt-5 font-mono text-xs italic text-muted-foreground">In development</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16 md:py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Let's build something.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I'm open to new opportunities and interesting backend problems. If you need a Laravel expert
            on your team, or just want to talk through a project, reach out.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="mailto:akramhossainrabbi@outlook.com"
              className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-0.5 text-base font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              akramhossainrabbi@outlook.com
            </Link>
            <Link
              href="https://linkedin.com/in/akramhossainrabbi"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/akramhossainrabbi
            </Link>
            <Link
              href="https://github.com/akramhossainrabbi"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              github.com/akramhossainrabbi
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © 2024–{new Date().getFullYear()} Akram Hossain
          </p>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/akramhossainrabbi" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-accent">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com/in/akramhossainrabbi" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-accent">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:akramhossainrabbi@outlook.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-accent">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
