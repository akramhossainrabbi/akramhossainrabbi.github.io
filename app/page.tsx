"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe } from "lucide-react"
import Link from "next/link"

import { useEffect } from "react"

export default function Portfolio() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = ""
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-wrap h-auto min-h-[4rem] items-center justify-between py-2 gap-y-2">
          <div className="font-bold text-xl w-full sm:w-auto text-center sm:text-left">Akram Hossain</div>
          <div className="flex flex-wrap w-full sm:w-auto justify-center sm:justify-end gap-2 sm:gap-6 mt-2 sm:mt-0">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-10 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 px-2">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold tracking-tight">Senior Laravel Developer</h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting robust, scalable web applications with Laravel. Passionate about clean code, modern architecture,
              and delivering exceptional user experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 w-full">
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
              href="mailto:akramhossainrabbi@outlook.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-10 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm a senior software developer with over 4 years of experience specializing in Laravel development. I have
            a passion for building scalable, maintainable applications and leading development teams to success. My
            expertise spans the entire web development stack, with a particular focus on backend architecture, API
            design, and database optimization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-8">
            <div className="text-center space-y-2">
              <Code className="h-10 w-10 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Clean Code</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Writing maintainable, testable code following best practices
              </p>
            </div>
            <div className="text-center space-y-2">
              <Server className="h-10 w-10 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Architecture</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Designing scalable systems and robust backend solutions</p>
            </div>
            <div className="text-center space-y-2">
              <Database className="h-10 w-10 md:h-12 md:w-12 mx-auto text-primary" />
              <h3 className="font-semibold text-base md:text-lg">Performance</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Optimizing applications for speed and efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-10 md:py-24">
        <div className="container">
          <div className="text-center space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Code className="h-5 w-5" />
                      Backend Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Database className="h-5 w-5" />
                      Database & Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Globe className="h-5 w-5" />
                      Frontend & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                      <Server className="h-5 w-5" />
                      DevOps & Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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
      <section id="experience" className="container py-10 md:py-24">
        <div className="text-center space-y-8 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Senior Software Developer - Current Position */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-left gap-2 sm:gap-0">
                  <div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Senior Software Developer</CardTitle>
                    <CardDescription className="text-sm sm:text-base md:text-lg">
                      Next Page Technology Ltd.
                    </CardDescription>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">
                    Nov 2024 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground pl-5 text-left text-xs sm:text-sm md:text-base">
                  <li>• Leading development teams and mentoring junior developers in Laravel best practices</li>
                  <li>• Architecting scalable enterprise solutions and microservices architecture</li>
                  <li>• Implementing advanced performance optimization and database query optimization</li>
                  <li>• Designing and reviewing system architecture for complex business applications</li>
                  <li>• Managing project timelines and coordinating with stakeholders for requirement analysis</li>
                  <li>• Establishing coding standards and conducting technical code reviews</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 text-xs md:text-sm">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">System Architecture</Badge>
                  <Badge variant="outline">Git</Badge>
                </div>
              </CardContent>
            </Card>
            {/* Backend Developer - Previous Position */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-left gap-2 sm:gap-0">
                  <div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Back End Developer</CardTitle>
                    <CardDescription className="text-sm sm:text-base md:text-lg">Next Page Technology Ltd.</CardDescription>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">Jul 2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground pl-5 text-left text-xs sm:text-sm md:text-base">
                  <li>• Developed and maintained scalable web applications using Laravel and modern PHP practices</li>
                  <li>• Built responsive frontend interfaces with React.js, and Next.js frameworks</li>
                  <li>• Implemented RESTful APIs and integrated third-party services for enhanced functionality</li>
                  <li>• Collaborated with cross-functional teams using Git for version control and project management</li>
                  <li>• Optimized application performance and implemented best practices for code quality</li>
                  <li>• Worked with Python for data processing and automation tasks</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 text-xs md:text-sm">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
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
            {/* Experience Card 3 */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-left gap-2 sm:gap-0">
                  <div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Full Stack Developer</CardTitle>
                    <CardDescription className="text-sm sm:text-base md:text-lg">MH IT Bangladesh</CardDescription>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">Nov 2021 - Jul 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground pl-5 text-left text-xs sm:text-sm md:text-base">
                  <li>• Designed and developed full-stack web applications using PHP and Laravel framework</li>
                  <li>• Created dynamic user interfaces and implemented responsive design principles</li>
                  <li>• Built custom content management systems and e-commerce solutions</li>
                  <li>• Managed database design, optimization, and data migration processes</li>
                  <li>• Collaborated with team members using Git for efficient code management</li>
                  <li>• Maintained legacy CodeIgniter applications and performed system upgrades</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 text-xs md:text-sm">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">CodeIgniter</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
            {/* Experience Card 4 */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-left gap-2 sm:gap-0">
                  <div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">Web Application Developer</CardTitle>
                    <CardDescription className="text-sm sm:text-base md:text-lg">Online Network Engineering Limited</CardDescription>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Gazipur, Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">Jan 2019 - Dec 2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground pl-5 text-left text-xs sm:text-sm md:text-base">
                  <li>• Developed web applications using PHP and Laravel framework from ground up</li>
                  <li>• Implemented user authentication systems and role-based access control</li>
                  <li>• Created admin dashboards and reporting modules for business operations</li>
                  <li>• Worked on database design and implemented efficient data storage solutions</li>
                  <li>• Participated in code reviews and followed software development best practices</li>
                  <li>• Gained experience in version control systems and collaborative development workflows</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 text-xs md:text-sm">
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

      {/* Projects Section - Comprehensive Portfolio */}
      <section id="projects" className="bg-muted/50 py-10 md:py-24">
        <div className="container">
          <div className="text-center space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my backend development contributions across various tech stacks and industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {/* ERP System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 rounded-md mb-4 flex items-center justify-center">
                    <Database className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>ERP System</CardTitle>
                  <CardDescription>
                    Created an enterprise resource planning system for comprehensive business management with advanced
                    reporting and analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" asChild className="w-full">
                      <Link href="https://accounts.denim-destiny.com/" target="_blank">
                        <Globe className="h-4 w-4 mr-2" />
                        View ERP System
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Demo Login: admin@gmail.com / 12312345</p>
                  </div>
                </CardContent>
              </Card>

              {/* POS System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-md mb-4 flex items-center justify-center">
                    <Server className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>POS System</CardTitle>
                  <CardDescription>
                    Developed a comprehensive point-of-sale solution for streamlined transactions and inventory
                    management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" asChild className="w-full">
                      <Link href="https://ssp.nextpagetl.com/" target="_blank">
                        <Globe className="h-4 w-4 mr-2" />
                        View POS System
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Advanced point-of-sale solution</p>
                  </div>
                </CardContent>
              </Card>

              {/* Hotel Management System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-md mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Travel & Booking Management System</CardTitle>
                  <CardDescription>
                    Comprehensive travel management platform featuring hotel bookings, flight reservations, car rentals,
                    and integrated travel services for complete trip planning.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">API Integration</Badge>
                    <Badge variant="outline">Payment Gateway</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://booking360.nextpagetl.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      View Booking Platform
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Learning Management System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-md mb-4 flex items-center justify-center">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Learning Management System</CardTitle>
                  <CardDescription>
                    Built a modern LMS with Next.js frontend, managed backend with Node.js and MySQL for comprehensive
                    educational platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">React</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://thepolycube.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      View LMS Platform
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* E-commerce Platforms */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 rounded-md mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>E-commerce Platforms</CardTitle>
                  <CardDescription>
                    Developed multiple e-commerce sites focusing on scalability, performance, and seamless user
                    experience across various industries.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">API Development</Badge>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="grid grid-cols-2 xs:grid-cols-2 gap-1">
                      <Link href="https://durbiin.com/" target="_blank" className="text-blue-600 hover:underline">
                        Durbiin
                      </Link>
                      <Link href="https://alifaonline.com/" target="_blank" className="text-blue-600 hover:underline">
                        Alifa Online
                      </Link>
                      <Link href="https://mahmudmart.com.bd/" target="_blank" className="text-blue-600 hover:underline">
                        Mahmud Mart
                      </Link>
                      <Link
                        href="https://chowdhuryelectronics.com.bd/"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Chowdhury Electronics
                      </Link>
                      <Link href="https://autometica.net/" target="_blank" className="text-blue-600 hover:underline">
                        Autometica
                      </Link>
                      <Link href="https://abayaalsamir.com/" target="_blank" className="text-blue-600 hover:underline">
                        Abaya Al Samir
                      </Link>
                      <Link
                        href="https://babyblueorpinkbird.com/"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Baby Blue Bird
                      </Link>
                      <Link href="https://leafs.com.bd/" target="_blank" className="text-blue-600 hover:underline">
                        Leafs
                      </Link>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-2">8 Live E-commerce Platforms</p>
                  </div>
                </CardContent>
              </Card>

              {/* Corporate Websites */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md mb-4 flex items-center justify-center">
                    <Server className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Corporate Websites</CardTitle>
                  <CardDescription>
                    Built robust backend systems for corporate websites with content management, SEO optimization, and
                    business integration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <Link
                      href="https://polluxchemicalsltd.com/"
                      target="_blank"
                      className="block text-blue-600 hover:underline"
                    >
                      Pollux Chemicals Ltd →
                    </Link>
                    <Link href="https://sinaratex.com/" target="_blank" className="block text-blue-600 hover:underline">
                      Sinaratex →
                    </Link>
                    <Link
                      href="https://ecocolourchem.com/"
                      target="_blank"
                      className="block text-blue-600 hover:underline"
                    >
                      Eco Colour Chem →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* 2nd Hand Marketplace */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-teal-500 to-green-600 rounded-md mb-4 flex items-center justify-center">
                    <Database className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>2nd Hand Marketplace</CardTitle>
                  <CardDescription>
                    Designed and implemented a comprehensive marketplace for second-hand products with advanced search
                    and filtering capabilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://2ndhandmarketbd.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Marketplace
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Matrimony Platform */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-red-500 to-pink-600 rounded-md mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Matrimony Platform</CardTitle>
                  <CardDescription>
                    Developed a specialized matrimonial service with unique features like 'Most Match' compatibility
                    system and custom package services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://idealnikah.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Ideal Nikah
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* PMS System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md mb-4 flex items-center justify-center">
                    <Database className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Real Estate Management System</CardTitle>
                  <CardDescription>
                    Comprehensive real estate management solution for property listings, client management, sales
                    tracking, and property portfolio management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" asChild className="w-full">
                      <Link href="https://formonic.nextpagetl.com/" target="_blank">
                        <Globe className="h-4 w-4 mr-2" />
                        View Real Estate System
                      </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Built for real estate agencies and property developers with automated lead management and property
                      showcase features.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* VAT Software */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md mb-4 flex items-center justify-center">
                    <Server className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>VAT Management Software</CardTitle>
                  <CardDescription>
                    Specialized VAT calculation and compliance software for businesses to manage tax obligations and
                    generate reports.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Tax Compliance</Badge>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" asChild className="w-full">
                      <Link href="https://nexvat.com/" target="_blank">
                        <Globe className="h-4 w-4 mr-2" />
                        View VAT Software
                      </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Automated VAT calculations, compliance reporting, and integration with accounting systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Courier Service */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-violet-500 to-purple-600 rounded-md mb-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>Courier Management System</CardTitle>
                  <CardDescription>
                    Complete courier and delivery management solution with tracking, route optimization, and customer
                    notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">API Integration</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://ecommerce11.nextpagetl.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      View Courier System
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* School Management System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-600 rounded-md mb-4 flex items-center justify-center">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>School Management System</CardTitle>
                  <CardDescription>
                    Comprehensive educational institution management with student records, attendance tracking, and
                    grade management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">CodeIgniter</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>
                  <Button size="sm" asChild className="w-full">
                    <Link href="https://demo.nextpagetl.com/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      View School System
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-10 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Whether you need a Laravel expert for
              your team or want to discuss a project, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="mailto:akramhossainrabbi@outlook.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-sm text-muted-foreground text-center md:text-left w-full md:w-auto">
              © 2024 - {new Date().getFullYear()} Akram Hossain. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end w-full md:w-auto space-x-6">
              <Link
                href="https://github.com/akramhossainrabbi"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/akramhossainrabbi"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:akramhossainrabbi@outlook.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
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
