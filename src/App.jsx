import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Download, ChevronDown, Code, Palette, Smartphone, Users, Award, Briefcase, GraduationCap, Send, Star, Rocket, Sun, Moon } from 'lucide-react';
import profileImg from "./assets/profile.jpg";
import certificateImg from "./assets/udemy-certificate.jpg";
import studymateImg from "./assets/studymate.png";
import megacartImg from "./assets/megacart.png";
import tourcraftImg from "./assets/tourcraft.png";
import einsteinaiImg from "./assets/einsteinai.png";
import pyroiqbotImg from "./assets/pyroiqbot.png";
import pingmeImg from "./assets/pingme.png";


const PORTFOLIO_DATA = {
  name: "Shaswat Kumar", 
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer", 
    "Python Developer",
    "Aspiring DevOps Engineer",
  ],
  tagline: "Learning, building, and crafting better digital experiences every day",
  bio: "I'm a growing Full Stack Developer who loves learning, building, and improving every day. I focus on creating practical, user friendly web solutions while constantly sharpening my skills with modern technologies.",
  email: "shaswatsinha356@gmail.com",
  phone: "+91 7004504120",
  location: "Ranchi-Jharkhand, India",
  birthday: "November 19, 2003",
  status: "Available for Work",
  github: "https://github.com/Shaswatkr19",
  linkedin: "https://www.linkedin.com/in/shaswatkr19",
  skills: {
    languages: [
      "Python",
      "JavaScript"
    ],
  
    backend: [
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
      "Auth & CRUD"
    ],
  
    frontend: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "API Integration"
    ],
  
    databases: [
      "PostgreSQL",
      "MongoDB",
      "ORM (Django / SQLAlchemy)",
      "Database Design"
    ],
  
    devops_and_tools: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Cursor IDE"
    ],
  
    deployment: [
      "Render",
      "Railway",
      "Netlify",
      "Vercel"
    ],
  
    learning: [
      "Docker",
      "CI/CD",
      "Kubernetes",
      "Linux",
      "Cloud (AWS / Azure)",
      "Nginx"
    ]
  },
  services: [
    { icon: Rocket, title: "Web Development", description: "Build scalable web applications with modern frameworks and cutting-edge technologies." },
    { icon: Users, title: "Database Design", description: "Designing and implementing efficient database schemas using PostgreSQL, MongoDB, and ORMs." },
    { icon: Star, title: "Deployment & DevOps", description: "Deploying applications on cloud platforms like Render, Railway, Vercel, and managing CI/CD pipelines." },
    { icon: GraduationCap, title: "Team Leadership", description: "Lead development teams, review code, and ensure best practices are followed." },
    { icon: Palette, title: "API Development", description: "Creating robust REST APIs with authentication, CRUD operations, and comprehensive documentation." },
    { icon: Code, title: "Python Automation", description: "Creating Python scripts and tools to automate repetitive tasks, data processing, and workflow optimization." },
    { icon: Award, title: "Learning & Experimentation", description: "Constantly exploring new technologies, frameworks, and best practices to stay updated with the evolving tech landscape." },
    { icon: Briefcase, title: "Problem Solving", description: "Tackling real-world challenges through code, debugging complex issues, and finding efficient solutions to technical problems." }
  ],
  projects: [
    { 
      name: "StudyMate-AI", 
      description: "Full-stack AI-powered study assistant that allows users to upload study materials (PDFs and YouTube videos), ask contextual questions, and receive AI-generated explanations and summaries.", 
      tech: ["Python", "Django REST Framework", "React.js", "Gemini AI", "PostgreSQL"], 
      category: "AI Web App", 
      github: "https://github.com/Shaswatkr19/StudyMate-AI", 
      demo: "https://studymate-ai-shaswat.netlify.app/",
      image: studymateImg
    },
    { 
      name: "MegaCart", 
      description: "Full-stack e-commerce application with product browsing, filtering, cart management, and complete checkout workflows through a clean and user-friendly interface.", 
      tech: ["FastAPI", "Python", "MongoDB", "JWT Auth", "Tailwind CSS"], 
      category: "Web App", 
      github: "https://github.com/Shaswatkr19/MegaCart", 
      demo: "https://68c1e053a811e70693c97ba2--kaleidoscopic-kitsune-d0d5df.netlify.app/",
      image: megacartImg
    },
    { 
      name: "TourCraft", 
      description: "Web-based platform for creating interactive product tours and step-by-step guides with screen recordings, highlights, annotations, and smooth transitions.", 
      tech: ["Django REST Framework", "PostgreSQL", "HTML5", "JavaScript", "CSS3"], 
      category: "Web App", 
      github: "https://github.com/Shaswatkr19/TourCraft", 
      demo: "https://tourcraft-c5bw.onrender.com/",
      image: tourcraftImg
    },
    { 
      name: "EinsteinAI", 
      description: "AI-powered chatbot using LangChain and Gemini AI that simulates conversations inspired by Albert Einstein for educational discussions and scientific exploration.", 
      tech: ["Python", "LangChain", "Gemini AI", "Gradio"], 
      category: "AI App", 
      github: "https://github.com/Shaswatkr19/EinsteinAI", 
      demo: "https://einsteinai-x8l5.onrender.com",
      image: einsteinaiImg
    },
    { 
      name: "PyroIQBot", 
      description: "AI-powered Telegram bot integrating Google Gemini AI and NewsData API to deliver intelligent conversations and real-time tech news updates with async architecture. This bot is live and actively running on Telegram.",
      tech: ["Python", "Telegram Bot API", "Gemini AI", "NewsData API"], 
      category: "Bot", 
      github: "https://github.com/Shaswatkr19/PyroIQBot", 
      // demo: "#",
      image: pyroiqbotImg
    },
    {
      name: "PingMe",
      description: "PingMe is a chat application. Backend built using Django, Django REST Framework, and Django Channels. The project focuses on implementing 1-to-1 messaging with JWT-based authentication over WebSockets, similar to modern chat applications. Currently in development — features and improvements in progress.",
      tech: ["Python", "Django", "DRF", "JWT Authentication", "Redis", "SQLite",  "Daphne Server", "WebSockets", "HTTP Protocol"],
      category: "Web App",
      github: "https://github.com/Shaswatkr19/PingMe",
      // demo: "In progress",
      image: pingmeImg
    }, 
    
  ],
  highlights: [
    { 
      title: "Python Mega Course: Build 20 Real-World Apps and AI Agents", 
      issuer: "Udemy",
      date: "Nov 2025",
      icon: Award,
      link: "https://www.udemy.com/certificate/UC-77ea6be7-8bd8-44d1-9f7a-5aa92cd31c6a/",
      certificateImage: certificateImg, 
      hasImage: true 
    },
    { 
      title: "Python Programming - Beginner to Intermediate", 
      issuer: "CodeWithHarry (YouTube)",
      date: "Apr 2025 - Jun 2025",
      icon: GraduationCap,
      link: "https://www.youtube.com/@CodeWithHarry"
    },
    { 
      title: "5+ Full Stack Projects Completed", 
      issuer: "Self-Built Portfolio",
      date: "2025",
      icon: Rocket,
      link: "#projects"
    },
    { 
      title: "AI Integration Specialist", 
      issuer: "Gemini AI & LangChain Projects",
      date: "2025",
      icon: Star,
      link: "#projects"
    }
  ],
  experience: [
    { 
      company: "Self-Learning & Personal Projects", 
      position: "Aspiring DevOps Engineer", 
      duration: "2025 - Present", 
      description: "Building real world projects to master full stack development, focusing on Python backends, React frontends, and modern deployment practices.", 
      achievements: [
        "Built 5+ production ready full stack applications",
        "Integrated AI APIs (OpenAI, Gemini, LangChain) in multiple projects", 
        "Deployed applications on cloud platforms (Render, Railway, Vercel)"
      ] 
    }
  ],  
  education: [{ degree: "Bachelor of Commerce (B.Com)", institution: "Ranchi University", year: "2021 - 2024", highlights: "Self taught Full Stack Developer | Transitioned from Commerce to Tech" }]
};

// Dark Mode Color Themes
const DARK_THEMES = {
  blue: {
    primary: 'rgb(59, 130, 246)',
    secondary: 'rgb(147, 51, 234)',
    gradient: 'from-blue-400 via-purple-400 to-pink-400',
    glow: 'rgba(59, 130, 246, 0.15)',
    text: 'text-blue-400',
    bg: 'bg-blue-400',
    border: 'border-blue-400',
    ring: 'ring-blue-400'
  },
  pink: {
    primary: 'rgb(236, 72, 153)',
    secondary: 'rgb(251, 113, 133)',
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    glow: 'rgba(236, 72, 153, 0.15)',
    text: 'text-pink-400',
    bg: 'bg-pink-400',
    border: 'border-pink-400',
    ring: 'ring-pink-400'
  },
  cyan: {
    primary: 'rgb(34, 211, 238)',
    secondary: 'rgb(6, 182, 212)',
    gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
    glow: 'rgba(34, 211, 238, 0.15)',
    text: 'text-cyan-400',
    bg: 'bg-cyan-400',
    border: 'border-cyan-400',
    ring: 'ring-cyan-400'
  },
  purple: {
    primary: 'rgb(168, 85, 247)',
    secondary: 'rgb(236, 72, 153)',
    gradient: 'from-purple-400 via-pink-400 to-blue-400',
    glow: 'rgba(168, 85, 247, 0.15)',
    text: 'text-purple-400',
    bg: 'bg-purple-400',
    border: 'border-purple-400',
    ring: 'ring-purple-400'
  },
  ocean: {
    primary: 'rgb(56, 189, 248)',
    secondary: 'rgb(14, 165, 233)',
    gradient: 'from-sky-400 via-cyan-400 to-blue-500',
    glow: 'rgba(56, 189, 248, 0.18)',
  
    text: 'text-sky-400',
    border: 'border-sky-400',
    ring: 'ring-sky-400',
    bgGradient: 'from-sky-600 to-blue-700'
  },
  neonViolet: {
    primary: 'rgb(192, 132, 252)',
    secondary: 'rgb(167, 139, 250)',
    gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
    glow: 'rgba(192, 132, 252, 0.25)',
  
    text: 'text-violet-400',
    border: 'border-violet-400',
    ring: 'ring-violet-400',
    bgGradient: 'from-violet-700 to-fuchsia-700'
  },
  iceMint: {
    primary: 'rgb(45, 212, 191)',
    secondary: 'rgb(20, 184, 166)',
    gradient: 'from-teal-300 via-emerald-400 to-cyan-400',
    glow: 'rgba(45, 212, 191, 0.18)',
  
    text: 'text-teal-400',
    border: 'border-teal-400',
    ring: 'ring-teal-400',
    bgGradient: 'from-teal-600 to-emerald-600'
  },
  midnight: {
    primary: 'rgb(99, 102, 241)',
    secondary: 'rgb(79, 70, 229)',
    gradient: 'from-indigo-400 via-blue-500 to-violet-500',
    glow: 'rgba(99, 102, 241, 0.2)',
  
    text: 'text-indigo-400',
    border: 'border-indigo-400',
    ring: 'ring-indigo-400',
    bgGradient: 'from-indigo-700 to-blue-800'
  },
  crimsonGold: {
    primary: 'rgb(244, 63, 94)',
    secondary: 'rgb(234, 179, 8)',
    gradient: 'from-rose-400 via-red-500 to-amber-400',
    glow: 'rgba(244, 63, 94, 0.22)',
  
    text: 'text-rose-400',
    border: 'border-rose-400',
    ring: 'ring-rose-400',
    bgGradient: 'from-rose-700 to-amber-700'
  },
  cyberLime: {
    primary: 'rgb(163, 230, 53)',
    secondary: 'rgb(34, 197, 94)',
    gradient: 'from-lime-400 via-green-400 to-emerald-400',
    glow: 'rgba(163, 230, 53, 0.25)',
  
    text: 'text-lime-400',
    border: 'border-lime-400',
    ring: 'ring-lime-400',
    bgGradient: 'from-lime-700 to-emerald-700'
  },
  green: {
    primary: 'rgb(34, 197, 94)',
    secondary: 'rgb(16, 185, 129)',
    accent: 'rgb(59, 130, 246)',
    gradient: 'from-green-400 via-emerald-400 to-cyan-400',
    glow: 'rgba(34, 197, 94, 0.15)',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-400/50',
    text: 'text-green-400',
    bgGradient: 'from-green-600 to-emerald-600'
  },
  orange: {
    primary: 'rgb(249, 115, 22)',
    secondary: 'rgb(251, 146, 60)',
    accent: 'rgb(234, 179, 8)',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    glow: 'rgba(249, 115, 22, 0.15)',
    border: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-400/50',
    text: 'text-orange-400',
    bgGradient: 'from-orange-600 to-amber-600'
  }
};

const LIGHT_BACKGROUNDS = {
  cream: {
    name: 'Cream',
    gradient: 'from-orange-50 via-amber-50 to-yellow-50',
    primary: 'rgb(234, 88, 12)',
    secondary: 'rgb(217, 119, 6)',
    text: 'text-orange-700',
    border: 'border-orange-300',
    hoverBorder: 'hover:border-orange-400',
    bgStyle: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fefce8 100%)'
  },
  cyan: {
    name: 'Cyan',
    gradient: 'from-cyan-50 via-sky-50 to-blue-50',
    primary: 'rgb(8, 145, 178)',
    secondary: 'rgb(3, 105, 161)',
    text: 'text-cyan-700',
    border: 'border-cyan-300',
    hoverBorder: 'hover:border-cyan-400',
    bgStyle: 'linear-gradient(135deg, #ecfeff 0%, #f0f9ff 50%, #eff6ff 100%)'
  },
  lavender: {
    name: 'Lavender',
    gradient: 'from-purple-50 via-violet-50 to-indigo-50',
    primary: 'rgb(109, 40, 217)',
    secondary: 'rgb(79, 70, 229)',
    text: 'text-purple-700',
    border: 'border-purple-300',
    hoverBorder: 'hover:border-purple-400',
    bgStyle: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 50%, #eef2ff 100%)'
  },
  peach: {
    name: 'Peach',
    gradient: 'from-orange-50 via-amber-50 to-yellow-50',
    primary: 'rgb(234, 88, 12)',
    secondary: 'rgb(202, 138, 4)',
    text: 'text-orange-700',
    border: 'border-orange-300',
    hoverBorder: 'hover:border-orange-400',
    bgStyle: 'linear-gradient(135deg, #ffedd5 0%, #fef3c7 50%, #fef9c3 100%)'
  },
  mint: {
    name: 'Mint',
    gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    primary: 'rgb(5, 150, 105)',
    secondary: 'rgb(13, 148, 136)',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
    hoverBorder: 'hover:border-emerald-400',
    bgStyle: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 50%, #ecfeff 100%)'
  },
  sky: {
    name: 'Sky',
    gradient: 'from-sky-50 via-blue-50 to-indigo-50',
    primary: 'rgb(2, 132, 199)',
    secondary: 'rgb(67, 56, 202)',
    text: 'text-sky-700',
    border: 'border-sky-300',
    hoverBorder: 'hover:border-sky-400',
    bgStyle: 'linear-gradient(135deg, #f0f9ff 0%, #eff6ff 50%, #eef2ff 100%)'
  },
  rose: {
    name: 'Rose',
    gradient: 'from-pink-50 via-rose-50 to-red-50',
    primary: 'rgb(190, 18, 60)',
    secondary: 'rgb(225, 29, 72)',
    text: 'text-pink-700',
    border: 'border-pink-300',
    hoverBorder: 'hover:border-pink-400',
    bgStyle: 'linear-gradient(135deg, #fdf2f8 0%, #fff1f2 50%, #fef2f2 100%)'
  }
};

function AnimatedRole({ roles, isDarkMode, themeColor }) {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {

      setIsTyping(false);

      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <p 
      className="text-2xl md:text-3xl font-light h-10"
      style={{ 
        color: isDarkMode ? undefined : themeColor,
        background: isDarkMode ? 'linear-gradient(to right, rgb(191, 219, 254), rgb(233, 213, 255))' : undefined,
        WebkitBackgroundClip: isDarkMode ? 'text' : undefined,
        WebkitTextFillColor: isDarkMode ? 'transparent' : undefined,
        backgroundClip: isDarkMode ? 'text' : undefined
      }}
    >
      {text}
      {isTyping && <span className="animate-pulse">|</span>}
    </p>
  );
}

const SpaceBackground = ({ isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.01
    }));

    const shootingStars = [];
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: 1
      });
    };

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3
    }));

    let shootingStarTimer = 0;
    
    const animate = () => {
      if (isDarkMode) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) star.twinkleSpeed *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode 
          ? `rgba(255, 255, 255, ${star.opacity})` 
          : `rgba(100, 100, 150, ${star.opacity * 0.5})`;
        ctx.fill();
      });

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 3);
        
        if (isDarkMode) {
          gradient.addColorStop(0, `rgba(220, 220, 220, ${particle.opacity})`);
          gradient.addColorStop(1, 'rgba(220, 220, 220, 0)');
        } else {
          gradient.addColorStop(0, `rgba(100, 100, 200, ${particle.opacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(100, 100, 200, 0)');
        }
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      if (isDarkMode) {
        shootingStarTimer++;
        if (shootingStarTimer > 100 && Math.random() > 0.98) {
          createShootingStar();
          shootingStarTimer = 0;
        }

        shootingStars.forEach((star, index) => {
          star.x += star.speed;
          star.y += star.speed * 0.5;
          star.opacity -= 0.015;

          if (star.opacity <= 0) {
            shootingStars.splice(index, 1);
            return;
          }

          const gradient = ctx.createLinearGradient(star.x, star.y, star.x - star.length, star.y - star.length * 0.5);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
          ctx.stroke();
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('darkTheme') || 'blue';
  });
  const [lightBg, setLightBg] = useState(() => {
    return localStorage.getItem('lightBg') || 'cream';
  });
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme]);
  
  useEffect(() => {
    localStorage.setItem('lightBg', lightBg);
  }, [lightBg]);

  const theme = isDarkMode ? DARK_THEMES[darkTheme] : LIGHT_BACKGROUNDS[lightBg];

  useEffect(() => {
    const handleScroll = () => { 
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'projects', 'experience', 'highlights', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    }; 

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using mailto link for direct email
      const subject = encodeURIComponent(contactForm.subject);
      const body = encodeURIComponent(
        `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
      );
      
      window.location.href = `mailto:shaswatsinha356@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success modal after a brief delay
      setTimeout(() => {
        setShowSuccessModal(true);
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  //   setTimeout(() => {
  //     alert(`Message sent! (Demo)\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}`);
  //     setContactForm({ name: '', email: '', subject: '', message: '' });
  //     setIsSubmitting(false);
  //   }, 1000);  
  // };

  const bgClass = isDarkMode 
    ? 'bg-gradient-to-b from-[#0a0a1e] via-[#0f0f2e] to-[#0a0a1e]' 
    : `bg-gradient-to-b ${theme.gradient}`;
  
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`${textClass} min-h-screen relative transition-all duration-500`}
      style={{
        background: isDarkMode
          ? 'linear-gradient(to bottom, #0a0a1e, #0f0f2e, #0a0a1e)'
          : (LIGHT_BACKGROUNDS[lightBg]?.bgStyle || LIGHT_BACKGROUNDS['cream'].bgStyle)
      }}
    >
      
    {isDarkMode && (
      <div className="fixed inset-0 z-0 overflow-hidden">
        <SpaceBackground isDarkMode={isDarkMode} />
      </div>
    )}    

      {/* Enhanced Cursor Effects */}
      <div 
        className="fixed pointer-events-none z-10 transition-all duration-75 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: `2px solid ${theme.primary}`,
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)',
          boxShadow: `0 0 20px ${theme.glow || 'rgba(59, 130, 246, 0.3)'}`
        }}
      />
      <div 
        className="fixed pointer-events-none z-9 mix-blend-screen transition-all duration-200 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.glow || 'rgba(59, 130, 246, 0.15)'} 0%, transparent 70%)`,
          opacity: 0.5
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-[#050514]/95' : 'bg-white/95') + ' backdrop-blur-2xl shadow-2xl border-b ' + (theme.border || 'border-gray-200') : 'bg-transparent'}`}>
        <div className="w-full px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('about')} className="flex items-center gap-3 group hover:opacity-80 transition-all ml-0">
              <Rocket className={`${theme.text || 'text-blue-600'} group-hover:translate-y-[-3px] transition-transform duration-300`} size={26} />
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, fontSize: '28px', letterSpacing: '-0.5px', color: isDarkMode ? undefined : theme.primary }} className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent uppercase` : 'uppercase'}>
                {PORTFOLIO_DATA.name.split(' ')[0]}
              </span>
            </button>
            
            <div className="hidden md:flex space-x-1 items-center">
              {['home', 'about', 'services', 'projects', 'experience','highlights', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize relative px-4 py-2 rounded-lg transition-all duration-300 text-base ${activeSection === item ? (theme.text || 'text-blue-600') + ' font-semibold' : (isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900')}`}>
                  {item}
                  {activeSection === item && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                      style={{
                        background: isDarkMode
                          ? `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`
                          : theme.primary,
                        boxShadow: isDarkMode
                          ? `0 0 8px ${theme.primary}80`
                          : 'none'
                      }}
                    />
                  )}
                </button>
              ))}
              
              {/* Theme Controls */}
              <div className="flex items-center gap-2 ml-4 border-l pl-4" style={{ borderColor: theme.primary + '40' }}>
                <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark and light mode" className={`p-2 rounded-lg ${theme.border || 'border-gray-300'} ${theme.hoverBorder || 'hover:border-gray-400'} transition-all hover:scale-110 border`}>
                  {isDarkMode ? <Sun size={20} className={theme.text || 'text-blue-600'} /> : <Moon size={20} className={theme.text || 'text-blue-600'} />}
                </button>
                
                <div className="relative">
                  <button onClick={() => setShowThemeMenu(!showThemeMenu)} aria-label="Change color theme" className={`p-2 rounded-lg ${theme.border || 'border-gray-300'} ${theme.hoverBorder || 'hover:border-gray-400'} transition-all hover:scale-110 border`}>
                    <Palette size={20} className={theme.text || 'text-blue-600'} />
                  </button>
                  
                  {showThemeMenu && (
                    <div className={`absolute right-0 mt-2 p-3 rounded-xl ${isDarkMode ? 'bg-[#1a1a2e]/95' : 'bg-white/95'} backdrop-blur-xl border ${theme.border || 'border-gray-200'} shadow-2xl min-w-[200px]`}>
                      <div className="text-xs font-semibold mb-2 opacity-60">
                        {isDarkMode ? 'COLOR THEME' : 'BACKGROUND'}
                      </div>
                      <div className="flex flex-col gap-2">
                        {isDarkMode ? (
                          Object.entries(DARK_THEMES).map(([key, t]) => (
                            <button
                              key={key}
                              onClick={() => { setDarkTheme(key); setShowThemeMenu(false); }}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:scale-105 ${darkTheme === key ? 'ring-2 ring-offset-2' : ''}`}
                              style={{ 
                                background: darkTheme === key ? `${t.primary}20` : 'transparent',
                                ringColor: t.primary
                              }}
                            >
                              <div 
                                className="w-6 h-6 rounded-full"
                                style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})` }}
                              />
                              <span className="text-sm capitalize">{key}</span>
                            </button>
                          ))
                        ) : (
                          Object.entries(LIGHT_BACKGROUNDS).map(([key, bg]) => (
                            <button
                              key={key}
                              onClick={() => { setLightBg(key); setShowThemeMenu(false); }}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:scale-105 ${lightBg === key ? 'ring-2 ring-offset-2' : ''}`}
                              style={{ 
                                background: lightBg === key ? `${bg.primary}20` : 'transparent',
                                ringColor: bg.primary
                              }}
                            >
                              <div 
                                className="w-6 h-6 rounded-full"
                                style={{ background: `linear-gradient(135deg, ${bg.primary}, ${bg.secondary})` }}
                              />
                              <span className="text-sm">{bg.name}</span>
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <button className={`md:hidden ${theme.text || 'text-blue-600'} hover:scale-110 transition-transform`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-[#050514]/95' : 'bg-white/95'} backdrop-blur-2xl`}>
            <div className="px-4 py-3 space-y-2">
              {['home', 'about', 'services', 'projects', 'experience','highlights', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`block w-full text-left px-4 py-3 capitalize rounded-lg transition-all ${activeSection === item ? (isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100') + ' ' + (theme.text || 'text-blue-600') : isDarkMode ? 'hover:bg-blue-500/10' : 'hover:bg-gray-100'}`}>
                  {item}
                </button>
              ))}
              
              <div className="pt-4 border-t" style={{ borderColor: theme.primary + '30' }}>
                <div className="flex gap-2 mb-3">
                  <button onClick={() => setIsDarkMode(!isDarkMode)} className={`flex-1 p-3 rounded-lg ${theme.border || 'border-gray-300'} ${theme.hoverBorder || 'hover:border-gray-400'} transition-all border flex items-center justify-center gap-2`}>
                    {isDarkMode ? <><Sun size={18} /> Light</> : <><Moon size={18} /> Dark</>}
                  </button>
                </div>
                
                <div className="text-xs font-semibold mb-2 opacity-60 px-2">
                  {isDarkMode ? 'COLOR THEME' : 'BACKGROUND'}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {isDarkMode ? (
                    Object.entries(DARK_THEMES).map(([key, t]) => (
                      <button
                        key={key}
                        onClick={() => setDarkTheme(key)}
                        className={`p-3 rounded-lg transition-all flex items-center gap-2 ${darkTheme === key ? 'ring-2 ring-offset-2' : ''}`}
                        style={{ 
                          background: `${t.primary}20`,
                          ringColor: t.primary
                        }}
                      >
                        <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})` }} />
                        <span className="text-sm capitalize">{key}</span>
                      </button>
                    ))
                  ) : (
                    Object.entries(LIGHT_BACKGROUNDS).map(([key, bg]) => (
                      <button
                        key={key}
                        onClick={() => setLightBg(key)}
                        className={`p-3 rounded-lg transition-all ${lightBg === key ? 'ring-2 ring-offset-2' : ''}`}
                        style={{ 
                          background: `${bg.primary}20`,
                          ringColor: bg.primary
                        }}
                      >
                        <div className="w-5 h-5 rounded-full mx-auto mb-1" style={{ background: `linear-gradient(135deg, ${bg.primary}, ${bg.secondary})` }} />
                        <span className="text-xs">{bg.name}</span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col justify-center px-4 pt-20 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
          <div className="relative w-40 h-40 mx-auto cursor-pointer group" onClick={() => setShowImageModal(true)}>
            <div className="absolute inset-0 rounded-full ring-4 ring-green-400 shadow-[0_0_30px_rgba(34,197,94,0.6)] animate-pulse" />
            <div className={`absolute inset-2 ${isDarkMode ? 'bg-[#0a0a1e]' : 'bg-white'} rounded-full`} />
            <div className="absolute inset-1 rounded-full overflow-hidden">
              <img src={profileImg} alt="Shaswat Kumar" className="w-full h-full object-cover object-top" />
            </div>
            <Star className="absolute -top-2 -right-2 animate-pulse" size={15} style={{ color: theme.primary }} />
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <ExternalLink className="opacity-0 group-hover:opacity-100 text-white" size={24} />
            </div>
          </div>

          <div className="space-y-6">
            <div className={`text-sm ${theme.text || 'text-blue-600'} tracking-widest uppercase animate-pulse flex items-center justify-center gap-2`}>
              <Star size={12} className="animate-spin-slow" />
              Welcome to my universe
              <Star size={12} className="animate-spin-slow" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold">
              <span
                style={{ color: isDarkMode ? undefined : theme.primary }} 
                className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent animate-gradient` : 'animate-gradient'}>
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
            
            <div className="relative">
              <AnimatedRole roles={PORTFOLIO_DATA.roles} isDarkMode={isDarkMode} themeColor={theme.primary} />
            </div>
            
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto leading-relaxed`}>
              {PORTFOLIO_DATA.tagline}
            </p>
            
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-green-300 font-medium">{PORTFOLIO_DATA.status}</span>
            </div>
          </div>  

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button onClick={() => scrollToSection('projects')} className={`group px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 text-white`} style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}>
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              Explore Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className={`px-8 py-4 border-2 rounded-full font-semibold transition-all hover:scale-110 backdrop-blur-sm`} style={{ borderColor: theme.primary + '80', color: theme.primary }}>
              Contact Me
            </button>
            <button 
              onClick={() => (window.location.href = "mailto:shaswatsinha356@gmail.com?subject=Hiring%20Inquiry")} 
              className="px-8 py-4 border-2 rounded-full font-semibold transition-all hover:scale-110 shadow-lg flex items-center gap-2"
              style={{
                borderColor: isDarkMode ? 'rgba(34, 197, 94, 0.5)' : 'rgb(34, 197, 94)',
                backgroundColor: isDarkMode ? 'transparent' : 'rgb(34, 197, 94)',
                color: isDarkMode ? 'rgb(74, 222, 128)' : 'white',
                boxShadow: isDarkMode ? '0 10px 15px -3px rgba(34, 197, 94, 0.3)' : '0 10px 15px -3px rgba(34, 197, 94, 0.5)'
              }}
            >
              <Mail size={20} />
              Hire Me
            </button>  
            <a href="/Shaswat_Kumar_Resume.pdf" download className={`px-8 py-4 border-2 rounded-full font-semibold transition-all hover:scale-110 flex items-center gap-2 backdrop-blur-sm`} style={{ borderColor: theme.secondary + '80', color: theme.secondary }}>
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-6 relative z-10">
            {[
              { icon: Github, link: PORTFOLIO_DATA.github },
              { icon: Linkedin, link: PORTFOLIO_DATA.linkedin },
              { icon: Mail, link: `mailto:${PORTFOLIO_DATA.email}` }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${social.icon.name}`} className="relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm group hover:scale-125" style={{ borderColor: theme.primary, boxShadow: `0 0 20px ${theme.glow || 'rgba(0,0,0,0.1)'}` }}>
                <social.icon size={20} className="transition-transform duration-300 group-hover:rotate-12" style={{ color: theme.primary }} />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 18px ${theme.primary}80`}}/>
              </a>
            ))}
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
            <button onClick={() => scrollToSection("about")} className="cursor-pointer" aria-label="Scroll down"> 
              <ChevronDown size={36} className={`${theme.text || 'text-blue-600'} opacity-85 hover:opacity-100 transition-all`} />
            </button>
          </div>
        </div>
      </section>

      {showImageModal && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={() => setShowImageModal(false)}
      >
        <div
          className="relative animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:scale-110 transition"
          >
            <X size={18} />
          </button>

          {/* PREVIEW IMAGE */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: '280px',   
              height: '290px',
              border: `4px solid ${theme.primary}`
            }}
          >
            <img
              src={profileImg}
              alt="Shaswat Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    )}
      
      {/* About, Services, Projects, Experience, Contact Sections - Abbreviated for space */}
      <section id="about" className="pt-32 pb-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent` : ''}>About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-6 rounded-2xl border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} transition-all`}>
                {PORTFOLIO_DATA.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mail, label: 'Email', value: PORTFOLIO_DATA.email, link: `mailto:${PORTFOLIO_DATA.email}` },
                  { icon: Phone, label: 'Phone', value: PORTFOLIO_DATA.phone, link: `tel:${PORTFOLIO_DATA.phone}` },
                  { icon: Calendar, label: 'Birthday', value: PORTFOLIO_DATA.birthday },
                  { icon: MapPin, label: 'Location', value: PORTFOLIO_DATA.location }
                ].map((item, idx) => {
                  const Wrapper = item.link ? 'a' : 'div';
                  return (
                    <Wrapper key={idx} {...(item.link && { href: item.link })} className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-5 rounded-xl border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/70'} transition-all hover:scale-105 group cursor-pointer`}>
                      <item.icon className={`${theme.text || 'text-blue-600'} mb-2 group-hover:scale-110 transition-transform`} size={24} />
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>{item.label}</div>
                      <div className="text-sm font-medium truncate">{item.value}</div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className={`text-2xl font-bold ${theme.text || 'text-blue-600'} flex items-center gap-2 mb-6`}>
                <Star className="animate-pulse" size={20} />
                Technical Skills
              </h3>

              <div className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} rounded-xl border ${theme.border || 'border-gray-200'} overflow-hidden`}>
                <table className="w-full">
                  <tbody>
                    {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills], idx) => (
                      <tr 
                        key={category} 
                        className={`${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-white/70'} transition-all ${idx !== Object.entries(PORTFOLIO_DATA.skills).length - 1 ? 'border-b' : ''}`}
                        style={{ borderColor: theme.primary + '20' }}
                      >
                        <td className="p-4 align-top w-1/4">
                          <div className={`text-xs ${theme.text || 'text-blue-600'} uppercase tracking-wider font-bold`}>
                            {category.replace(/_/g, ' ')}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <span 
                                key={skill} 
                                className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all hover:scale-105 cursor-default"
                                style={{ 
                                  background: `${theme.primary}15`, 
                                  borderColor: theme.primary + '40', 
                                  color: theme.primary 
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent` : ''}>What I Do</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-8 rounded-2xl border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/70'} transition-all duration-300 hover:scale-105 hover:-translate-y-2 group`}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg" style={{ background: `linear-gradient(135deg, ${theme.primary}50, ${theme.secondary}50)` }}>
                    <Icon className={theme.text || 'text-blue-600'} size={36} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme.text || 'text-blue-600'}`}>{service.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent` : ''}>Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} rounded-2xl overflow-hidden border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/70'} transition-all duration-300 hover:scale-105 hover:-translate-y-2 group`}>
                <div className="h-56 flex items-center justify-center relative overflow-hidden rounded-t-2xl" style={{ background: `linear-gradient(135deg, ${theme.primary}30, ${theme.secondary}30)` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}20)` }} />
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (     
                    <Code size={72} className={`${theme.text || 'text-blue-600'} opacity-50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                  )}  
                </div>
                <div className="p-6 space-y-4">
                  <h3 className={`text-xl font-bold ${theme.text || 'text-blue-600'}`}>{project.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs border" style={{ background: `${theme.primary}20`, color: theme.primary, borderColor: `${theme.primary}50` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm hover:opacity-70 transition-colors group/link`} style={{ color: theme.primary }}>
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:opacity-70 transition-colors group/link" style={{ color: theme.secondary }}>
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent` : ''}>Experience & Education</span>
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${theme.text || 'text-blue-600'}`}>
                <Briefcase />Work Experience
              </h3>
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-8 rounded-2xl border ${theme.border || 'border-gray-200'} mb-6 ${theme.hoverBorder || 'hover:border-gray-300'} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/70'} transition-all`}>
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h4 className={`text-2xl font-bold ${theme.text || 'text-blue-600'}`}>{exp.position}</h4>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{exp.company}</p>
                    </div>
                    <span className="text-sm px-4 py-2 rounded-full border" style={{ color: theme.secondary, background: `${theme.secondary}20`, borderColor: `${theme.secondary}50` }}>{exp.duration}</span>
                  </div>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
                  <div className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Award className={theme.text || 'text-blue-600'} size={18} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${theme.text || 'text-blue-600'}`}>
                <GraduationCap />Education
              </h3>
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-8 rounded-2xl border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/70'} transition-all`}>
                  <h4 className={`text-2xl font-bold ${theme.text || 'text-blue-600'}`}>{edu.degree}</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mt-2`}>{edu.institution}</p>
                  <p className="text-sm mt-3 px-4 py-2 rounded-full inline-block border" style={{ color: theme.secondary, background: `${theme.secondary}20`, borderColor: `${theme.secondary}50` }}>{edu.year}</p>
                  <p className={`text-sm ${theme.text || 'text-blue-600'} mt-4`}>{edu.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="highlights" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent` : ''}>
              Achievements & Certificates
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a 
                  key={idx}
                  onClick={(e) => {
                    if (item.hasImage) {
                      e.preventDefault();
                      setSelectedCertificate(item);
                      setShowCertificateModal(true);
                    } else if (item.link) {
                      window.open(item.link, "_blank");
                    }
                  }}
                  className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} rounded-2xl border ${theme.border || 'border-gray-200'} ${theme.hoverBorder || 'hover:border-gray-300'} transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden`}
                  style={{
                    boxShadow: isDarkMode ? `0 4px 20px ${theme.glow || 'rgba(0,0,0,0.2)'}` : '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Hover Glow Effect */}
                {isDarkMode && (  
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${theme.primary}15 0%, transparent 70%)`
                    }}
                  />
                )}  

                  {/* Top Badge - Only show for certificates with images */}
                  {item.hasImage && (
                    <div 
                      className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl text-xs font-bold flex items-center gap-1.5 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                        color: 'white'
                      }}
                    >
                      <Award size={14} />
                      VERIFIED
                    </div>
                  )}

                  {/* Certificate Preview - Larger and Better Positioned */}
                  {item.hasImage && item.certificateImage && (
                    <div 
                      className="relative h-40 rounded-t-2xl overflow-hidden border-b"
                      style={{ 
                        borderColor: `${theme.primary}30`,
                        background: isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.8)'
                      }}
                    >
                      <img
                        src={item.certificateImage}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      {/* Overlay Icon */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <ExternalLink 
                          className="opacity-0 group-hover:opacity-100 text-white transform scale-0 group-hover:scale-100 transition-all duration-300" 
                          size={32} 
                        />
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    {/* For non-certificate items - Enhanced version */}
                    {!item.hasImage && (
                      <>
                        {/* Larger Icon Container with Animation */}
                        <div className="relative mb-6">
                          {isDarkMode && (
                            <div 
                              className="absolute inset-0 blur-md opacity-15"
                              style={{ background: theme.primary }}
                            />
                          )}

                          <div 
                            className="relative flex items-center justify-center w-20 h-20 rounded-2xl mx-auto 
                                      group-hover:scale-105 transition-all"
                            style={{ 
                              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                              boxShadow: isDarkMode
                                ? `0 0 18px ${theme.primary}55`
                                : 'none'
                            }}
                          >
                            <Icon className="text-white" size={36} />
                          </div>
                        </div>

                        {/* Achievement Stats */}
                        <div className="flex justify-center gap-2 mb-4">
                          {idx === 1 && (
                            <>
                              <div 
                                className="px-3 py-1 rounded-lg text-xs font-bold border"
                                style={{
                                  background: `${theme.primary}15`,
                                  borderColor: `${theme.primary}40`,
                                  color: theme.primary
                                }}
                              >
                                📚 100+ Hours
                              </div>
                            </>
                          )}
                          {idx === 2 && (
                            <>
                              <div 
                                className="px-3 py-1 rounded-lg text-xs font-bold border"
                                style={{
                                  background: `${theme.primary}15`,
                                  borderColor: `${theme.primary}40`,
                                  color: theme.primary
                                }}
                              >
                                🚀 Live Projects
                              </div>
                            </>
                          )}
                          {idx === 3 && (
                            <>
                              <div 
                                className="px-3 py-1 rounded-lg text-xs font-bold border"
                                style={{
                                  background: `${theme.primary}15`,
                                  borderColor: `${theme.primary}40`,
                                  color: theme.primary
                                }}
                              >
                                🤖 AI Powered
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}

                    {/* Title */}
                    <h3 className={`text-base font-bold mb-3 text-center leading-tight min-h-[40px] flex items-center justify-center ${theme.text || 'text-blue-600'}`}>
                      {item.title}
                    </h3>

                    {/* Issuer */}
                    <p className={`text-sm text-center font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.issuer}
                    </p>

                    {/* Decorative Divider */}
                    {!item.hasImage && (
                      <div className="flex items-center justify-center gap-2 my-4">
                        <div className="w-8 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, transparent, ${theme.primary}, transparent)` }} />
                        <Star size={12} style={{ color: theme.primary }} className="animate-pulse" />
                        <div className="w-8 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, transparent, ${theme.primary}, transparent)` }} />
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="flex justify-center mt-3">
                      <span 
                        className="px-4 py-2 rounded-full text-xs font-semibold border shadow-lg"
                        style={{
                          background: `${theme.primary}20`,
                          borderColor: `${theme.primary}50`,
                          color: theme.primary
                        }}
                      >
                        {item.date}
                      </span>
                    </div>

                    {/* View Link - Only for items with hasImage */}
                    {item.hasImage && (
                      <div className="mt-4 pt-4 border-t" style={{ borderColor: `${theme.primary}20` }}>
                        <div 
                          className="text-center text-sm font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all"
                          style={{ color: theme.primary }}
                        >
                          Click to View Certificate
                          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}

                    {/* External Link for non-certificate items */}
                    {!item.hasImage && item.link && item.link !== '#projects' && (
                      <div className="mt-4">
                        <div 
                          className="text-center text-xs font-semibold flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-all"
                          style={{ color: theme.primary }}
                        >
                          View More
                          <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Available for Freelancing */}
      <section className="relative py-32 px-4 overflow-hidden z-20 my-24 mx-4 md:mx-8 rounded-3xl">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80)',
          }}
        />
        
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.95) 100%)'
          }}
        />

        {/* Accent Glow Effects - NO VISIBLE SHAPES */}
        <div 
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
          style={{ background: theme.primary }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
          style={{ background: theme.secondary }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">I'm </span>
            <span 
              className="inline-block animate-pulse"
              style={{ 
                color: theme.primary,
                textShadow: `0 0 40px ${theme.primary}60, 0 0 80px ${theme.primary}30`
              }}
            >
              Available
            </span>
            <span className="text-white"> for freelancing</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            I am available for freelancing opportunities and new projects. If you have any questions or inquiries, feel free to reach out!
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={() => (window.location.href = "mailto:shaswatsinha356@gmail.com?subject=Freelance%20Opportunity")}
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg sm:text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                boxShadow: `0 20px 40px ${theme.primary}40`
              }}
            >
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                HIRE ME
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-white/30" />
            <Star className="text-white/40 animate-pulse" size={16} />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-24 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span
              style={{ color: isDarkMode ? undefined : theme.primary }} 
              className={isDarkMode ? `bg-gradient-to-r ${theme.gradient || 'from-blue-400 to-purple-400'} bg-clip-text text-transparent`:''}>Let's Work Together</span>
          </h2>
          
          <div className={`backdrop-blur-sm ${isDarkMode ? 'bg-white/5' : 'bg-white/50'} p-10 rounded-2xl border ${theme.border || 'border-gray-200'}`}>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={contactForm.name} 
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required 
                  className={`w-full px-6 py-4 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} border rounded-xl focus:outline-none focus:ring-2 ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} backdrop-blur-sm transition-all`}
                  style={{ borderColor: `${theme.primary}50` }}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={contactForm.email} 
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})} 
                  required
                  className={`w-full px-6 py-4 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} border rounded-xl focus:outline-none focus:ring-2 ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} backdrop-blur-sm transition-all`}
                  style={{ borderColor: `${theme.primary}50` }}
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                value={contactForm.subject} 
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})} 
                required
                className={`w-full px-6 py-4 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} border rounded-xl focus:outline-none focus:ring-2 ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} backdrop-blur-sm transition-all`}
                style={{ borderColor: `${theme.primary}50` }}
              />
              <textarea 
                placeholder="Your Message" 
                value={contactForm.message} 
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})} 
                required
                rows="6" 
                className={`w-full px-6 py-4 ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} border rounded-xl focus:outline-none focus:ring-2 resize-none ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'} backdrop-blur-sm transition-all`}
                style={{ borderColor: `${theme.primary}50` }}
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-white`}
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>    
                    <Send size={20} />
                    Send Message
                  </>
                )}    
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={`py-12 px-4 border-t ${theme.border || 'border-gray-200'} relative z-20 backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, link: PORTFOLIO_DATA.github },
              { icon: Linkedin, link: PORTFOLIO_DATA.linkedin },
              { icon: Mail, link: `mailto:${PORTFOLIO_DATA.email}` }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${social.icon.name}`} className="relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm group hover:scale-125" style={{ borderColor: theme.primary, boxShadow: `0 0 20px ${theme.glow || 'rgba(0,0,0,0.1)'}` }}>
                <social.icon size={20} className="transition-transform duration-300 group-hover:rotate-12" style={{ color: theme.primary }} />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 18px ${theme.primary}80`}}/>
              </a>
            ))}
          </div>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={`${theme.text || 'text-blue-600'} font-semibold hover:underline hover:opacity-80 transition-all`}>{PORTFOLIO_DATA.name}</a>. Learning. Growing. Improving. 😎
          </p>
          <div className={`flex items-center justify-center gap-2 text-sm ${theme.text || 'text-blue-600'}`}>
            <Rocket size={16} className="animate-bounce" />
            <span>Exploring the digital universe, one project at a time</span>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {showCertificateModal && selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowCertificateModal(false)}
        >
          <div
            className="relative max-w-5xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute -top-12 right-0 text-white hover:scale-110 transition-transform flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              <X size={20} />
              Close
            </button>

            {/* Certificate Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedCertificate.certificateImage}
                alt={selectedCertificate.title}
                className="w-full h-auto"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-4 text-center">
              
              <a href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm"
                style={{ color: theme.primary }}
              >
                <ExternalLink size={18} />
                View on Udemy
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="relative max-w-md w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`backdrop-blur-xl ${
                isDarkMode ? 'bg-white/10' : 'bg-white/90'
              } p-8 rounded-3xl border-2 shadow-2xl`}
              style={{ borderColor: theme.primary }}
            >
              <div className="text-center space-y-6">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center animate-bounce"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  <Send className="text-white" size={36} />
                </div>

                <div>
                  <h3 className={`text-3xl font-bold mb-3 ${theme.text || 'text-blue-600'}`}>
                    Message Sent! 🚀
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Your email client should open shortly
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                    Thank you for reaching out! I'll get back to you soon.
                  </p>
                </div>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  }}
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Slow rotation (icons, stars) */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Gradient text animation */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Fade in animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Modal scale */
        @keyframes scaleIn {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>    
        
    </div>
  );
};

export default Portfolio;