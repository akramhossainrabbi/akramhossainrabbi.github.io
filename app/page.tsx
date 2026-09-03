"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const NAV = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
]

const TERMINAL_LINES = [
  "$ whoami",
  "akram_hossain",
  "",
  "$ cat role.txt",
  "Lead Software Engineer — Backend & ERP Systems",
  "",
  "$ cat summary.txt",
  "6+ years building Laravel/PHP backend systems — ERP platforms,",
  "VAT compliance software, and the APIs that hold them together.",
  "Currently leading backend architecture at Blocknots.",
]
const FULL_TEXT = TERMINAL_LINES.join("\n")

function useTypewriter(text: string, speed = 14) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count >= text.length) return
    const t = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [count, text.length])
  return { revealed: text.slice(0, count), done: count >= text.length }
}

const SKILLS: [string, string[]][] = [
  ["backend", ["Laravel", "PHP", "CodeIgniter", "Django", "Flask", "Node.js"]],
  ["frontend", ["JavaScript", "React.js", "HTML", "CSS"]],
  ["languages", ["PHP", "Python", "SQL", "Bash"]],
  ["databases", ["MySQL", "PostgreSQL"]],
  ["tools_cloud", ["Git", "Docker", "Jenkins", "AWS"]],
  ["data_analytics", ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Scikit-learn"]],
]

const EXPERIENCE = [
  {
    branch: "role/lead-software-engineer",
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
    branch: "role/senior-software-developer",
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
    branch: "role/backend-developer",
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
    branch: "role/full-stack-developer",
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
    branch: "role/web-application-developer",
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
  file: string
  description: string[]
  stack: string
  status: string
  link?: { href: string; label: string }
  links?: { href: string; label: string }[]
}

const PROJECTS: Project[] = [
  {
    file: "real-estate-erp-platform.php",
    description: [
      "Leading backend architecture for an in-progress ERP",
      "platform for real estate businesses — property/listing",
      "management, transactions, and agent workflows.",
    ],
    stack: "Laravel, PHP, MySQL",
    status: "Ongoing, 2025 · Blocknots",
  },
  {
    file: "nexvat-vat-management.php",
    description: [
      "VAT compliance platform with automated tax calculations,",
      "compliance reporting, and dynamic reports for business",
      "tax obligations.",
    ],
    stack: "Laravel, React.js, MySQL",
    status: "2025 · NBR-enlisted",
    link: { href: "https://nexvat.com/", label: "nexvat.com" },
  },
  {
    file: "fintrack360-erp-system.php",
    description: ["Financial management & ERP system with advanced", "reporting and analytics for business management."],
    stack: "Laravel, PHP, JavaScript, MySQL",
    status: "2024",
    link: { href: "https://nextpagetl.com/products", label: "nextpagetl.com/products" },
  },
  {
    file: "real-estate-management-system.php",
    description: [
      "Property listings, client management, sales tracking,",
      "and portfolio management for real estate agencies.",
    ],
    stack: "Laravel, PHP, MySQL",
    status: "2024",
    link: { href: "https://formonic.nextpagetl.com/", label: "formonic.nextpagetl.com" },
  },
  {
    file: "booking360-travel-system.php",
    description: ["Hotel bookings, flight reservations, car rentals, and", "integrated travel services for trip planning."],
    stack: "Laravel, PHP, MySQL, API Integration",
    status: "2023",
    link: { href: "https://booking360.nextpagetl.com/", label: "booking360.nextpagetl.com" },
  },
  {
    file: "pos-system.php",
    description: ["Point-of-sale solution for streamlined transactions", "and inventory management."],
    stack: "Laravel, PHP, JavaScript, MySQL",
    status: "2023",
    link: { href: "https://ssp.nextpagetl.com/", label: "ssp.nextpagetl.com" },
  },
  {
    file: "lms-platform.ts",
    description: ["Modern LMS with a Next.js frontend and a Node.js/MySQL", "backend for an educational platform."],
    stack: "Next.js, Node.js, MySQL, React",
    status: "2022",
    link: { href: "https://thepolycube.com/", label: "thepolycube.com" },
  },
  {
    file: "courier-management.php",
    description: ["Courier and delivery management with tracking, route", "optimization, and customer notifications."],
    stack: "Laravel, PHP, MySQL, API Integration",
    status: "2022",
    link: { href: "https://ecommerce11.nextpagetl.com/", label: "view demo" },
  },
  {
    file: "school-management.php",
    description: ["Educational institution management with student", "records, attendance, and grade management."],
    stack: "CodeIgniter, PHP, MySQL",
    status: "2022",
    link: { href: "https://demo.nextpagetl.com/", label: "view demo" },
  },
  {
    file: "ideal-nikah-matrimony.php",
    description: ["Matrimonial service featuring a 'Most Match'", "compatibility system and custom packages."],
    stack: "Laravel, PHP, MySQL",
    status: "2021",
    link: { href: "https://idealnikah.com/", label: "idealnikah.com" },
  },
  {
    file: "2nd-hand-marketplace.php",
    description: ["Marketplace for second-hand products with advanced", "search and filtering."],
    stack: "Laravel, PHP, MySQL",
    status: "2021",
    link: { href: "https://2ndhandmarketbd.com/", label: "2ndhandmarketbd.com" },
  },
  {
    file: "ecommerce-platforms.php",
    description: ["Eight live e-commerce builds across different", "industries, focused on scalability and performance."],
    stack: "Laravel, PHP, MySQL, API Development",
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
    file: "corporate-websites.php",
    description: ["Backend systems for corporate sites with content", "management, SEO, and business integrations."],
    stack: "Laravel, PHP, MySQL",
    status: "2020 — 2022",
    links: [
      { href: "https://polluxchemicalsltd.com/", label: "Pollux Chemicals" },
      { href: "https://sinaratex.com/", label: "Sinaratex" },
      { href: "https://ecocolourchem.com/", label: "Eco Colour Chem" },
    ],
  },
]

function TerminalChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
      <span className="ml-3 text-xs text-muted-foreground">{title}</span>
    </div>
  )
}

export default function Portfolio() {
  const { revealed, done } = useTypewriter(FULL_TEXT, 14)
  const revealedLines = revealed.split("\n")

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95">
        <div className="container flex h-14 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">~/</span>
            <span className="font-medium">akram-hossain</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
              >
                <span className="text-accent/70">--</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-sm border border-border bg-card shadow-2xl shadow-black/40">
          <TerminalChrome title="akram@portfolio: ~" />
          <div className="min-h-[280px] p-5 sm:p-8">
            <pre className="whitespace-pre-wrap break-words text-[13px] leading-relaxed sm:text-sm">
              {revealedLines.map((line, i) => (
                <div
                  key={i}
                  className={line.startsWith("$ ") ? "font-medium text-accent" : "text-foreground/90"}
                >
                  {line || " "}
                  {!done && i === revealedLines.length - 1 && (
                    <span className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[2px] animate-pulse bg-accent align-middle" />
                  )}
                </div>
              ))}
              {done && (
                <span className="mt-1 inline-block h-[1em] w-[0.5em] animate-pulse bg-accent align-middle" />
              )}
            </pre>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-foreground"
          >
            <span className="text-muted-foreground">$</span> view --projects
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="text-muted-foreground">$</span> contact --me
          </Link>
        </div>
        <div className="mx-auto mt-6 flex max-w-2xl items-center gap-5">
          <Link href="https://github.com/akramhossainrabbi" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-accent">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/akramhossainrabbi" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-accent">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:akramhossainrabbi@outlook.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-accent">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="tel:+8801701061957" aria-label="Phone" className="text-muted-foreground transition-colors hover:text-accent">
            <Phone className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="container py-16 md:py-24">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent">$</span> cat about.md
          </p>
          <div className="mt-6 max-w-2xl border-l-2 border-border pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I'm a lead software engineer specializing in Laravel development, with a particular focus on
              backend architecture, API design, and database optimization. I care about systems that stay
              legible as they grow — clear boundaries, sane data models, and code the next engineer can
              actually follow.
            </p>
            <p className="mt-4">
              Outside of shipping, I lead and mentor development teams, and hold an MSc in Applied
              Statistics and Data Science — which still shapes how I think about the data layer underneath
              every ERP system I build.
            </p>
          </div>

          <div className="mt-8 max-w-md rounded-sm border border-border bg-card p-5 text-sm">
            <div className="text-muted-foreground"># config.yml</div>
            <div className="mt-3 space-y-1.5">
              <div>
                <span className="text-accent">focus</span>
                <span className="text-muted-foreground">:</span> Laravel &amp; PHP backend systems
              </div>
              <div>
                <span className="text-accent">experience</span>
                <span className="text-muted-foreground">:</span> 6+ years
              </div>
              <div>
                <span className="text-accent">based_in</span>
                <span className="text-muted-foreground">:</span> Dhaka, Bangladesh
              </div>
              <div>
                <span className="text-accent">currently</span>
                <span className="text-muted-foreground">:</span> Lead Software Engineer, Blocknots
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border">
        <div className="container py-16 md:py-24">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent">$</span> cat skills.json
          </p>
          <div className="mt-6 max-w-2xl overflow-x-auto rounded-sm border border-border bg-card p-5 text-[13px] leading-relaxed sm:p-6 sm:text-sm">
            <div className="text-muted-foreground">{"{"}</div>
            {SKILLS.map(([category, items], i) => (
              <div key={category} className="pl-4">
                <span className="text-accent">"{category}"</span>
                <span className="text-muted-foreground">: [</span>
                <span className="text-amber">{items.map((s) => `"${s}"`).join(", ")}</span>
                <span className="text-muted-foreground">]{i < SKILLS.length - 1 ? "," : ""}</span>
              </div>
            ))}
            <div className="text-muted-foreground">{"}"}</div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border">
        <div className="container py-16 md:py-24">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent">$</span> git log --all --stat
          </p>
          <div className="mt-6 max-w-2xl space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={job.branch} className="border-l-2 border-border pl-5">
                <p className="text-xs text-amber sm:text-sm">branch: {job.branch}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {job.company} · {job.location} ·{" "}
                  <span className="text-accent">{job.date}</span>
                </p>
                <h3 className="mt-3 text-lg font-medium sm:text-xl">{job.role}</h3>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="text-accent">+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border">
        <div className="container py-16 md:py-24">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent">$</span> ls --projects -la
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Backend contributions across ERP, compliance, e-commerce, and platform builds.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <div key={p.file} className="rounded-sm border border-border bg-card p-5 text-[13px] leading-relaxed sm:text-sm">
                <p className="text-muted-foreground"># {p.file}</p>
                <div className="mt-2 text-muted-foreground/80">
                  <div>{"/**"}</div>
                  {p.description.map((line, i) => (
                    <div key={i}> * {line}</div>
                  ))}
                  <div> *</div>
                  <div>
                    {" * "}
                    <span className="text-accent">@stack</span> {p.stack}
                  </div>
                  <div>
                    {" * "}
                    <span className="text-accent">@status</span>{" "}
                    <span className="text-amber">{p.status}</span>
                  </div>
                  {p.link && (
                    <div>
                      {" * "}
                      <span className="text-accent">@link</span>{" "}
                      <Link href={p.link.href} target="_blank" className="text-foreground underline decoration-border underline-offset-2 hover:text-accent hover:decoration-accent">
                        {p.link.label}
                      </Link>
                    </div>
                  )}
                  <div>{" */"}</div>
                </div>

                {p.links && (
                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-border pt-3">
                    {p.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-accent"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="container py-16 md:py-24">
          <p className="text-sm text-muted-foreground">
            <span className="text-accent">$</span> ./contact.sh
          </p>
          <h2 className="mt-6 text-3xl font-medium sm:text-4xl">Let's build something.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm open to new opportunities and interesting backend problems. If you need a Laravel expert
            on your team, or just want to talk through a project, reach out.
          </p>
          <div className="mt-8 max-w-md rounded-sm border border-border bg-card p-5 text-sm">
            <div className="space-y-2.5">
              <Link href="mailto:akramhossainrabbi@outlook.com" className="flex items-center gap-2.5 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                akramhossainrabbi@outlook.com
              </Link>
              <Link href="tel:+8801701061957" className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent">
                <Phone className="h-4 w-4 text-accent" />
                +880 1701-061957
              </Link>
              <Link href="https://linkedin.com/in/akramhossainrabbi" className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent">
                <Linkedin className="h-4 w-4 text-accent" />
                linkedin.com/in/akramhossainrabbi
              </Link>
              <Link href="https://github.com/akramhossainrabbi" className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-accent">
                <Github className="h-4 w-4 text-accent" />
                github.com/akramhossainrabbi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            <span className="text-accent">$</span> echo $? <span className="ml-2">0</span>
            <span className="ml-2">// © 2024–{new Date().getFullYear()} Akram Hossain</span>
          </p>
          <p className="text-muted-foreground/70">Built with Next.js &amp; Tailwind</p>
        </div>
      </footer>
    </div>
  )
}
