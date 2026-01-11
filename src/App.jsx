import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Download, ChevronDown, Code, Palette, Smartphone, Users, Award, Briefcase, GraduationCap, Send, Star, Rocket } from 'lucide-react';
import profileImg from "./assets/profile.jpg";


const PORTFOLIO_DATA = {
  name: "Shaswat Kumar",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "Python Developer",
    "Aspiring DevOps Engineer",
  ],
  tagline: "Building Digital Experiences That Matter",
  bio: "I am a passionate Full-Stack Developer with expertise in creating scalable and robust applications. I specialize in modern web technologies and have a keen eye for design. My focus is on delivering high-quality, user-friendly solutions that make a real impact.",
  email: "shaswatsinha356@gmail.com",
  phone: "+91 7004504120",
  location: "Ranchi-Jharkhand, India",
  birthday: "November 19, 2003",
  status: "Available for Work",
  github: "https://github.com/Shaswatkr19",
  linkedin: "https://www.linkedin.com/in/shaswatkr19",
  skills: {
    languages: ["JavaScript", "Python", "TypeScript", "Java", "C++"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman"]
  },
  services: [
    { icon: Code, title: "Web Development", description: "Build scalable web applications with modern frameworks and cutting-edge technologies." },
    { icon: Palette, title: "UI/UX Design", description: "Create beautiful, intuitive interfaces that provide exceptional user experiences." },
    { icon: Smartphone, title: "Mobile Development", description: "Develop cross-platform mobile applications with React Native and Flutter." },
    { icon: Users, title: "Team Leadership", description: "Lead development teams, review code, and ensure best practices are followed." }
  ],
  projects: [
    { name: "E-Commerce Platform", description: "A full-featured online shopping platform with payment integration, order management, and admin dashboard.", tech: ["React", "Node.js", "MongoDB", "Stripe"], category: "Web App", github: "https://github.com/yourusername/project1", demo: "https://demo-link.com" },
    { name: "Task Management App", description: "Real-time collaborative task management tool with team features and analytics dashboard.", tech: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"], category: "Web App", github: "https://github.com/yourusername/project2", demo: "https://demo-link.com" },
    { name: "Portfolio Website Builder", description: "Drag-and-drop portfolio builder allowing users to create stunning portfolios without coding.", tech: ["React", "Firebase", "Framer Motion"], category: "Web App", github: "https://github.com/yourusername/project3", demo: "https://demo-link.com" }
  ],
  experience: [
    { company: "Tech Company Inc.", position: "Senior Full Stack Developer", duration: "Jan 2023 - Present", description: "Leading development of enterprise applications and mentoring junior developers.", achievements: ["Improved application performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"] },
    { company: "Startup Solutions", position: "Full Stack Developer", duration: "Jun 2021 - Dec 2022", description: "Developed and maintained multiple client projects using MERN stack.", achievements: ["Built 10+ production applications", "Reduced load time by 50%", "Integrated payment systems"] }
  ],
  education: [{ degree: "Bachelor of Technology in Computer Science", institution: "University Name", year: "2018 - 2022", highlights: "CGPA: 8.5/10 | Dean's List" }]
};


function AnimatedRole({ roles }) {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <p className="text-2xl md:text-3xl font-light text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text h-10">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

// Space Background Component
const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.01
    }));

    // Shooting Stars
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

    // Particles
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3
    }));

    let shootingStarTimer = 0;
    
    // black bg
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; 
      // ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) star.twinkleSpeed *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 3);
        gradient.addColorStop(0, `rgba(220, 220, 220, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(220, 220, 220, 0)');
        // gradient.addColorStop(0, `rgba(100, 150, 255, ${particle.opacity})`);
        // gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Create shooting stars randomly
      shootingStarTimer++;
      if (shootingStarTimer > 100 && Math.random() > 0.98) {
        createShootingStar();
        shootingStarTimer = 0;
      }

      // Draw shooting stars
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

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0pointer-events-none" />;
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'projects', 'experience', 'contact'];
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

    setTimeout(() => {
      alert(`Message sent! (Demo)\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}`);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(flase);
    }, 1000);  
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a1e] via-[#0f0f2e] to-[#0a0a1e] text-white min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 mix-blend-screen transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(100, 150, 255, 0.15) 0%, rgba(100, 150, 255, 0) 70%)',
          
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050514]/95 backdrop-blur-2xl shadow-2xl border-b border-blue-500/30' : 'bg-transparent'}`}>
        <div className="w-full px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('about')} className="flex items-center gap-3 group hover:opacity-80 transition-all ml-0">
              <Rocket className="text-blue-400 group-hover:translate-y-[-3px] transition-transform duration-300" size={26} />
              <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, fontSize: '28px', letterSpacing: '-0.5px' }} className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase">
                {PORTFOLIO_DATA.name.split(' ')[0]}
              </span>
            </button>
            <div className="hidden md:flex space-x-1 items-center mr-0">
              {['home', 'about', 'services', 'projects', 'experience', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize relative px-4 py-2 rounded-lg transition-all duration-300 text-base ${activeSection === item ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'}`}>
                  {item}
                  {activeSection === item && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounde" />}
                </button>
              ))}
            </div>
            <button className="md:hidden text-blue-400 hover:scale-110 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
        {isMenuOpen && <div className="md:hidden bg-[#050514]/95 backdrop-blur-2xl"><div className="px-4 py-3 space-y-2">{['home', 'about', 'services', 'projects', 'experience', 'contact'].map((item) => <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left px-4 py-3 capitalize  rounded-lg transition-all ${activeSection === item ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-blue-500/10'}">{item}</button>)}</div></div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
          {/* Animated Profile Circle */}
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full ring-4 ring-green-400 shadow-[0_0_30px_rgba(34,197,94,0.6)] animate-pulse" />
            <div className="absolute inset-2 bg-[#0a0a1e] rounded-full" />
            <div className="absolute inset-1 rounded-full overflow-hidden">
              <img 
                src={profileImg}
                alt="Shaswat Kumar"
                classname="w-full h-full object-cover" 
              />  
              <span className="text-5xl font-bold">{PORTFOLIO_DATA.name.charAt(0)}</span>
            </div>
            <Star className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={15} />
          </div>

          <div className="space-y-6">
            <div className="text-sm text-blue-400 tracking-widest uppercase animate-pulse flex items-center justify-center gap-2">
              <Star size={12} className="animate-spin-slow" />
              Welcome to my universe
              <Star size={12} className="animate-spin-slow" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
            
            <div className="relative">
              <AnimatedRole roles={PORTFOLIO_DATA.roles} />
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
            <button onClick={() => scrollToSection('projects')} className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-2">
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              Explore Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border-2 border-blue-400/50 rounded-full font-semibold hover:bg-blue-400/10 hover:border-blue-400 transition-all hover:scale-110 backdrop-blur-sm">
              Contact Me
            </button>
            <button onClick={() => (window.location.href = "mailto:shaswatsinha356@gmail.com?subject=Hiring%20Inquiry")} className="px-8 py-4 border-2 border-blue-400/50 bg-gradient-to-r text-white rounded-full font-semibold hover:bg-green-400 transition-all hover:scale-110 shadow-lg shadow-green-500/30 flex items-center gap-2">
              <Mail size={20} />
              Hire Me
            </button>  
            <a href="/Shaswat_Kumar_Resume.pdf" download className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all hover:scale-110 flex items-center gap-2 backdrop-blur-sm">
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-6">
            {[
              { icon: Github, link: PORTFOLIO_DATA.github },
              { icon: Linkedin, link: PORTFOLIO_DATA.linkedin },
              { icon: Mail, link: `mailto:${PORTFOLIO_DATA.email}` }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-blue-400/30 flex items-center justify-center hover:bg-blue-400/20 hover:border-blue-400 hover:scale-125 transition-all backdrop-blur-sm group">
                <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
              aria-label="Scroll down"
            > 
              <ChevronDown size={36} className="text-blue-400 opacity-85 hover:opacity-100 transition-all  group-hover:scale-110 group-hover:text-blue-300" 
              />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all">
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
                    <Wrapper
                      key={idx}
                      {...(item.link && { href: item.link })}
                      className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-blue-500/20 
                                hover:border-blue-400/50 hover:bg-white/10 transition-all 
                                hover:scale-105 group cursor-pointer"
                    >
                      <item.icon
                        className="text-blue-400 mb-2 group-hover:scale-110 transition-transform"
                        size={24}
                      />
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium truncate">
                        {item.value}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-300 flex items-center gap-2">
                <Star className="animate-pulse" />
                Technical Skills
              </h3>
              
              {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => (
                <div key={category} className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all">
                  <div className="text-sm text-blue-300 uppercase tracking-wider mb-3 font-semibold">{category}</div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30 hover:border-blue-400 hover:scale-105 transition-all backdrop-blur-sm cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-blue-500/20">
                    <Icon className="text-blue-300" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-200">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className="backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                <div className="h-52 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-399" />
                  <Code size={72} className="text-blue-300/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-blue-200">{project.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link">
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link">
                      <ExternalLink size={16} className="gorup-hover/link:scale-110 transition-transform" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-300">
                <Briefcase />
                Work Experience
              </h3>
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/20 mb-6 hover:border-blue-400/50 hover:bg-white/10 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-blue-300">{exp.position}</h4>
                      <p className="text-gray-300 text-lg">{exp.company}</p>
                    </div>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Award className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-blue-300">
                <GraduationCap />
                Education
              </h3>
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 hover:bg-white/10 transition-all">
                  <h4 className="text-2xl font-bold text-blue-300">{edu.degree}</h4>
                  <p className="text-gray-300 text-lg mt-2">{edu.institution}</p>
                  <p className="text-sm text-purple-400 mt-3 bg-purple-500/20 px-4 py-2 rounded-full inline-block border border-purple-400/30">{edu.year}</p>
                  <p className="text-sm text-blue-400 mt-4">{edu.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <div className="backdrop-blur-sm bg-white/5 p-10 rounded-2xl border border-blue-500/20">
            <form OnSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={contactForm.name} 
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required 
                  className="w-full px-6 py-4 bg-white/5 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-500 backdrop-blur-sm transition-all" />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={contactForm.email} 
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})} 
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-500 backdrop-blur-sm transition-all" />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                value={contactForm.subject} 
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})} 
                required
                className="w-full px-6 py-4 bg-white/5 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder-gray-500 backdrop-blur-sm transition-all" />
              <textarea 
                placeholder="Your Message" 
                value={contactForm.message} 
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})} 
                required
                rows="6" 
                className="w-full px-6 py-4 bg-white/5 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 resize-none text-white placeholder-gray-500 backdrop-blur-sm transition-all"
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/20 relative z-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, link: PORTFOLIO_DATA.github },
              { icon: Linkedin, link: PORTFOLIO_DATA.linkedin },
              { icon: Mail, link: `mailto:${PORTFOLIO_DATA.email}` }
            ].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-blue-400/30 flex items-center justify-center hover:bg-blue-400/20 hover:border-blue-400 hover:scale-125 transition-all backdrop-blur-sm group">
                <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2026 <span className="text-blue-400 font-semibold">{PORTFOLIO_DATA.name}</span>. Crafted with ❤️ in the cosmos using React & Tailwind CSS
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-purple-400">
            <Rocket size={16} className="animate-bounce" />
            <span>Exploring the digital universe, one project at a time</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;