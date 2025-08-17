"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Palette,
  Brain,
  Monitor,
  BarChart3,
  Users,
  Calendar,
  Search,
  Mail,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion" // Import motion

export default function FullStackPortfolio() {
  const [selectedTech, setSelectedTech] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [projectSearchTerm, setProjectSearchTerm] = useState<string>("") // New state for project search

  const skills = [
    // Frontend Skills
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Next.js",  icon: Code, category: "Frontend" },
    { name: "Angular",  icon: Code, category: "Frontend" },
    { name: "TypeScript",  icon: Code, category: "Frontend" },
    { name: "Tailwind CSS",  icon: Palette, category: "Frontend" },

    // Backend Skills
    { name: "Java/Spring Boot",  icon: Server, category: "Backend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Python/FastAPI",  icon: Server, category: "Backend" },
    { name: "GraphQL",  icon: Database, category: "Backend" },

    // Database Skills
    { name: "PostgreSQL",icon: Database, category: "Database" },
    { name: "MongoDB",  icon: Database, category: "Database" },
    { name: "Redis",  icon: Database, category: "Database" },
    { name: "SQL",  icon: Database, category: "Database" },

    // UI/UX Skills
    { name: "Figma",icon: Palette, category: "UI/UX" },
    { name: "User Research",  icon: Users, category: "UI/UX" },
    { name: "Design Systems",  icon: Palette, category: "UI/UX" },

    // Data Science Skills
    { name: "Python/Pandas", icon: Brain, category: "Data Science" },
    { name: "Machine Learning", icon: Brain, category: "Data Science" },
    { name: "TensorFlow",  icon: Brain, category: "Data Science" },
    { name: "Data Visualization", icon: BarChart3, category: "Data Science" },
    { name: "R", icon: BarChart3, category: "Data Science" },
  ]

  const experience = [
    {
      title: "Bacharelado em Ciência da Computação",
      company: "USP - FFCLRP",
      period: "2023 - Presente",
      description:
        "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect scalable solutions.",
      technologies: ["C", "C++", "Java", "Prolog", "Python", "R", "PostgreSQL"],
    },

  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cientista da Computação</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Estudando para desenvolver minhas habilidades em múltiplas áreas da tecnologia
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Palette className="h-4 w-4 mr-1" />
              UI/UX 
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Monitor className="h-4 w-4 mr-1" />
              Frontend Development
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Server className="h-4 w-4 mr-1" />
              Backend Development
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Brain className="h-4 w-4 mr-1" />
              Data Science
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">Veja meu trabalho!</Link>
            </Button>

            <Button  variant="outline" size="lg" asChild>
              <Link href="#contact">Fale Comigo ♡</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
     
        <div id="about" className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Sou estudante de Ciência da Computação, apaixonada por tecnologia, dados e aprendizado contínuo. Tenho experiência com desenvolvimento front-end (Next.js, React, Tailwind, TypeScript) e interesse em Inteligência Artificial, ciência de dados e projetos que unam tecnologia com criatividade. Gosto de criar soluções educativas e práticas, explorando formas de aplicar conhecimento de maneira eficiente e acessível. Estou sempre em busca de desafios que me permitam crescer profissional e pessoalmente.
            </p>

           
          </div>
        </div>

      {/* Experience Section */}
    
        <div id="experience" className="container mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-12">Educação</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{job.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{job.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>





      {/* Skills Section */}
     
        <div id="skills" className="container mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

          {/* Skills by Category */}
          <div id="skills" className="space-y-12">
            {["Frontend", "Backend", "UI/UX", "Data Science", "Database"].map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              if (categorySkills.length === 0) return null

              return (
                <div key={category}>
                  <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill, index) => {
                      const IconComponent = skill.icon
                      return (
                        <Card key={index} className="text-center hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex justify-center mb-2">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            
                          </CardHeader>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      {/* Contact Section */}
    
        <div id="contact" className="container mx-auto text-center mt-8 mb-4">
          <h2 className="text-3xl font-bold mb-8">Entre em contato por aqui!</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            
          </p>
          <div className="max-w-xl mx-auto">
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              
              <a href="mailto:nataliapl@usp.br"><Mail />Mande um Email!</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/NataliaPLeone" target="_blank" rel="noopener noreferrer">
              <Github color="#ff00ae"/>
                GitHub
              </a>
            </Button>
          </div>
          </div>
        </div>

      {/* Footer */}
      <footer className="border-t py-8 px-4 ">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
