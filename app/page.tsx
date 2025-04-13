"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import socail from "../images/socail.png";
import player from "../images/player.png";
import projectfair from "../images/projectfair.png";
import chat from "../images/chat.png";
import ecart from "../images/ecart.png";
import parallax from "../images/parallex.png";
import avatar from "../images/avatar.webp";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";
import { motion } from "framer-motion";

export default function Home() {


  const projects = [
    {
      title: "Photosam",
      description: "A Full-stack Social Media web application built with MERN stack",
      image: socail,
      link: "https://social-media-black-ten-20.vercel.app/"
    },
    {
      title: "Media Player",
      description: "Media player application with a sleek UI and advanced features",
      image: player,
      link: "https://media-player-nine-gray.vercel.app/"
    },
    {
      title: "Project Fair",
      description: "One Stop Destination for all Software Development Projects.",
      image: projectfair,
      link: "https://project-fair-mocha.vercel.app/"
    },
    {
      title: "Chat App",
      description: "Chat application with real-time messaging developed using React and Socket.io",
      image: chat,
      link: "https://chat-app-liart-beta.vercel.app/"
    },
    {
      title: "E-cart",
      description: "E-cart is a Full-stack e-commerce application built with React and Node.js",
      image: ecart,
      link: "https://e-cart-kappa-ivory.vercel.app/"
    },
    {
      title: "Parallax Website",
      description: "Simple Parallax website with smooth scrolling and animations",
      image: parallax,
      link: "https://parallax-website-22vy-93k2755iz-shamil-rahman-pks-projects.vercel.app/"
    }
  ];

  const skills = [
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "Next.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },,
    {
      name: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },,
    {
      name: "GitHub",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Linux",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
      name: "Angular",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
    },
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "Postman",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
      name: "Flutter",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    },
    {
      name: "Firebase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    }
  ];


  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: '"Share Tech Mono", monospace' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-tr from-sky-200 via-slate-900 to-black overflow-hidden">
          {/* Bubble Background */}
          <div className="bubble-container">
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`bubble bubble-${i + 1}`} />
            ))}
          </div>

          {/* Content */}
          <div className="container px-4 mx-auto text-center relative z-10">
            <AnimatedElement animation="fade-in">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Avatar className="w-48 h-48 mx-auto mb-8 ring-4 ring-blue-500/30 shadow-[0_0_20px_#3b82f6] overflow-hidden">
                  <Image
                    src={avatar}
                    alt="Profile"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-full"
                  />
                </Avatar>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white-400 shadow-glow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Shamil Rahman PK
              </motion.h1>
            </AnimatedElement>

            <AnimatedElement animation="slide-left">
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8 typing-effect"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Full Stack Developer & Web Developer
              </motion.p>
            </AnimatedElement>

            <div className="flex justify-center gap-4">
              <Link href="https://github.com/ShamilRahmanPK" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shamil-rahman-p-k-8b6a6131a/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:shamilrahman7994@gmail.com" passHref>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
            <p
              className="text-lg text-center text-muted-foreground leading-relaxed"
              style={{ fontFamily: '"Share Tech Mono", monospace' }}
            >
              I am a full-stack developer with hands-on experience in the MERN and MEAN stacks, as well as Flutter. I specialize in building scalable and performant web and mobile applications, focusing on delivering clean, responsive user interfaces. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through blog posts.
            </p>
            </div>
          </div>
        </section>
  
        {/* Skills Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
              {skills?.filter(Boolean).map((skill, index) => (
                <motion.div
                  key={skill?.name || index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 p-2 rounded-lg bg-background/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-[0_0_10px_#06b6d4] group-hover:animate-bounce">
                    <img
                      src={skill?.image}
                      alt={skill?.name || "Skill icon"}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-sm font-medium mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill?.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Education and Courses Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            {/* Education Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
              <div className="max-w-3xl mx-auto" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">BCA in Computer Science</h3>
                  <p className="text-lg text-muted-foreground">University of Calicut, 2024</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">High School</h3>
                  <p className="text-lg text-muted-foreground">GHSS Kunnakavu, 2021</p>
                </div>
              </div>
            </div>

            {/* Courses Section */}
            <div>
              <h2 className="text-3xl font-bold mb-12 text-center">Courses & Certifications</h2>
              <div className="max-w-3xl mx-auto" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">MERN/MEAN Stack</h3>
                  <p className="text-lg text-muted-foreground">Luminar Technoab, 2025</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Flutter</h3>
                  <p className="text-lg text-muted-foreground">Ralfiz Technologies, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden group shadow-[0_0_15px_#60a5fa]" data-scroll data-scroll-speed="1" data-scroll-direction="vertical">
                  <div className="relative">
                  <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        width={500}
                        height={200}
                      />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Tech Certificates Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">My Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Certificate 1 */}
              <div className="border-2 border-black p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">MERN/MEAN Stack Developer</h3>
                <p className="text-muted-foreground mb-4">Issued by Luminar Technolab, 2025</p>
                <Link href="https://drive.google.com/file/d/17zTTAh9vPdgd9mCGXlwVadGel5BY_qcW/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    View Certificate
                  </Button>
                </Link>
              </div>
              {/* Certificate 2 */}
              <div className="border-2 border-black p-6 rounded-lg hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary mb-4">Flutter Developer</h3>
                <p className="text-muted-foreground mb-4">Issued by Ralfiz Technologies, 2024</p>
                <Link href="https://drive.google.com/file/d/1_GIGXdhRaDavTqL5aQ9SjDClU9osSBgs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    View Certificate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-8 border-t border-primary/10">
          <div className="container px-4 mx-auto text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Shamil Rahman PK. All rights reserved.</p>
          </div>
        </footer>
      </main>
  );
}