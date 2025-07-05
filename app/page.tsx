"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Akram Hossain</div>
          <div className="flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Senior Laravel Developer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Crafting robust, scalable web applications with Laravel. Passionate about clean code, modern architecture,
              and delivering exceptional user experiences.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/akramhossainrabbi"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/akramhossainrabbi"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:akram@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a senior software developer with over 4 years of experience specializing in Laravel development. I have
            a passion for building scalable, maintainable applications and leading development teams to success. My
            expertise spans the entire web development stack, with a particular focus on backend architecture, API
            design, and database optimization.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <Code className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-semibold">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, testable code following best practices
              </p>
            </div>
            <div className="text-center space-y-2">
              <Server className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-semibold">Architecture</h3>
              <p className="text-sm text-muted-foreground">Designing scalable systems and robust backend solutions</p>
            </div>
            <div className="text-center space-y-2">
              <Database className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">Optimizing applications for speed and efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-24">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Backend Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Laravel</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">CodeIgniter</Badge>
                      <Badge variant="secondary">RESTful APIs</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                      <Badge variant="secondary">Microservices</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Database & Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Elasticsearch</Badge>
                      <Badge variant="secondary">AWS S3</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Frontend & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Alpine.js</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">Bootstrap</Badge>
                      <Badge variant="secondary">Livewire</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5" />
                      DevOps & Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">DigitalOcean</Badge>
                      <Badge variant="secondary">Nginx</Badge>
                      <Badge variant="secondary">CI/CD</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Back End Developer</CardTitle>
                    <CardDescription className="text-lg">Next Page Technology Ltd.</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary">Jul 2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed and maintained scalable web applications using Laravel and modern PHP practices</li>
                  <li>• Built responsive frontend interfaces with Vue.js, React.js, and Next.js frameworks</li>
                  <li>• Implemented RESTful APIs and integrated third-party services for enhanced functionality</li>
                  <li>
                    • Collaborated with cross-functional teams using Git for version control and project management
                  </li>
                  <li>• Optimized application performance and implemented best practices for code quality</li>
                  <li>• Worked with Python for data processing and automation tasks</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">CodeIgniter</Badge>
                  <Badge variant="outline">Git</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Full Stack Developer</CardTitle>
                    <CardDescription className="text-lg">MH IT Bangladesh</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary">Nov 2021 - Jul 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Designed and developed full-stack web applications using PHP and Laravel framework</li>
                  <li>• Created dynamic user interfaces and implemented responsive design principles</li>
                  <li>• Built custom content management systems and e-commerce solutions</li>
                  <li>• Managed database design, optimization, and data migration processes</li>
                  <li>• Collaborated with team members using Git for efficient code management</li>
                  <li>• Maintained legacy CodeIgniter applications and performed system upgrades</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">CodeIgniter</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Web Application Developer</CardTitle>
                    <CardDescription className="text-lg">Online Network Engineering Limited</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">Gazipur, Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary">Jan 2019 - Dec 2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed web applications using PHP and Laravel framework from ground up</li>
                  <li>• Implemented user authentication systems and role-based access control</li>
                  <li>• Created admin dashboards and reporting modules for business operations</li>
                  <li>• Worked on database design and implemented efficient data storage solutions</li>
                  <li>• Participated in code reviews and followed software development best practices</li>
                  <li>• Gained experience in version control systems and collaborative development workflows</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="E-commerce Platform"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  Full-featured e-commerce solution built with Laravel, featuring payment integration, inventory
                  management, and admin dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/akramhossainrabbi/ecommerce">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://demo-ecommerce.example.com">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Task Management API"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <CardTitle>Task Management API</CardTitle>
                <CardDescription>
                  RESTful API for task management with team collaboration features, real-time notifications, and
                  comprehensive reporting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">WebSockets</Badge>
                  <Badge variant="outline">JWT</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/akramhossainrabbi/task-api">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://api-docs.example.com">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Docs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="CMS Platform"
                    width={300}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <CardTitle>Content Management System</CardTitle>
                <CardDescription>
                  Flexible CMS with multi-tenancy support, custom field types, and advanced user role management for
                  enterprise clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Livewire</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/akramhossainrabbi/cms">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://cms-demo.example.com">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Whether you need a Laravel expert for
              your team or want to discuss a project, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:akram@example.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com/in/akramhossainrabbi">
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 - {new Date().getFullYear()} Akram Hossain. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/akramhossainrabbi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/akramhossainrabbi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:akram@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
