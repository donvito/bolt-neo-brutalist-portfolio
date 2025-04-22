import React, { useState, useEffect } from 'react';
import { 
  Code, 
  User, 
  Briefcase, 
  Lightbulb, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin,
  ArrowRight,
  ExternalLink,
  FileText,
  Clock,
  Star,
  Quote,
  BookOpen,
  Zap,
  Palette

import Newsletter from './components/Newsletter';

} from 'lucide-react';

function NoiseBg() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]"></div>
    </div>
  );
}

// Animation hook for scroll reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
}

function Header() {
  return (
    <header className="px-4 pt-8 pb-4 md:pt-12 md:pb-8">
      <div className="font-mono text-xs tracking-wider mb-4 reveal">DEV PORTFOLIO</div>
      <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none animate-pulse-slow reveal">PURROGRAMMER</h1>
      <div className="w-full h-6 bg-yellow-400 transform -skew-x-12 reveal transition-transform hover:skew-x-0 duration-300"></div>
      <div className="mt-6 flex items-center gap-6 reveal">
        <div className="flex items-center bg-black text-white px-4 py-2 hover:translate-y-[-4px] transition-transform duration-300">
          <span className="font-mono text-sm">FULL-STACK DEV</span>
        </div>
        <div className="flex items-center bg-black text-white px-4 py-2 hover:translate-y-[-4px] transition-transform duration-300">
          <span className="font-mono text-sm">UI/UX DESIGNER</span>
        </div>
        <div className="flex items-center bg-black text-white px-4 py-2 hover:translate-y-[-4px] transition-transform duration-300">
          <span className="font-mono text-sm">CREATIVE CODER</span>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-4 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <User size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">ABOUT ME</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-pink-200 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] reveal hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <p className="text-lg mb-4">
            I'm a full-stack developer passionate about creating unique digital experiences. 
            With 5+ years of experience in web development, I specialize in React, TypeScript, 
            and modern web technologies.
          </p>
          <p className="text-lg mb-6">
            Previously worked at <span className="font-bold">Google</span>, <span className="font-bold">Meta</span>, and several funded startups. 
            I focus on building scalable, accessible, and performant applications with clean code and thoughtful UX.
          </p>
          <div className="flex">
            <a href="#contact" className="group flex items-center gap-2 font-bold hover:underline">
              GET IN TOUCH
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="relative reveal">
          <div className="absolute w-full h-full bg-blue-300 border-4 border-black -top-4 -left-4 -z-10 animate-pulse-slow"></div>
          <div className="w-full h-full border-4 border-black overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=500&h=500" 
              alt="Cat profile photo" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-lime-200 border-4 border-black p-3 z-10 hover:translate-y-[-4px] hover:translate-x-[-4px] transition-transform duration-300 animate-bounce-subtle">
            <div className="font-mono text-sm">BASED IN</div>
            <div className="font-bold">SAN FRANCISCO, CA</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="border-4 border-black p-4 bg-white reveal hover:-translate-y-1 transition-transform duration-300">
          <div className="font-mono mb-1 text-sm">LANGUAGES</div>
          <div className="font-bold">JavaScript / TypeScript, Python, SQL, Rust, Go</div>
        </div>
        <div className="border-4 border-black p-4 bg-white reveal hover:-translate-y-1 transition-transform duration-300 delay-75">
          <div className="font-mono mb-1 text-sm">EDUCATION</div>
          <div className="font-bold">B.S. Computer Science, Stanford University</div>
        </div>
        <div className="border-4 border-black p-4 bg-white reveal hover:-translate-y-1 transition-transform duration-300 delay-100">
          <div className="font-mono mb-1 text-sm">INTERESTS</div>
          <div className="font-bold">Design Systems, Web3, AI, Motion Graphics</div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <FileText size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">EXPERIENCE</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="border-4 border-black bg-white reveal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 lg:w-64 p-4 border-b-4 md:border-b-0 md:border-r-4 border-black bg-yellow-400">
              <div className="font-mono text-sm">2022 - PRESENT</div>
              <div className="font-bold text-xl">Senior Developer</div>
              <div>Acme Studios</div>
            </div>
            <div className="flex-1 p-4">
              <p className="mb-4">Led the frontend team to rebuild the company's flagship product with React and TypeScript. Improved performance by 60% and implemented a comprehensive component library and design system.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Architected and built scalable frontend systems</li>
                <li>Mentored junior developers and established best practices</li>
                <li>Implemented CI/CD pipelines and testing strategies</li>
                <li>Collaborated with design team to create UI components</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-4 border-black bg-white reveal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 delay-75">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 lg:w-64 p-4 border-b-4 md:border-b-0 md:border-r-4 border-black bg-blue-300">
              <div className="font-mono text-sm">2019 - 2022</div>
              <div className="font-bold text-xl">Frontend Developer</div>
              <div>Meta</div>
            </div>
            <div className="flex-1 p-4">
              <p className="mb-4">Worked on the Ads Manager platform, improving the user experience and implementing new features for advertisers. Contributed to the React component library used across various Meta products.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Built interactive data visualization tools</li>
                <li>Optimized rendering performance for complex UIs</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Contributed to open-source projects</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-4 border-black bg-white reveal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 delay-150">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 lg:w-64 p-4 border-b-4 md:border-b-0 md:border-r-4 border-black bg-pink-200">
              <div className="font-mono text-sm">2016 - 2019</div>
              <div className="font-bold text-xl">Full-Stack Developer</div>
              <div>TechStart Inc.</div>
            </div>
            <div className="flex-1 p-4">
              <p className="mb-4">Developed and maintained multiple web applications for clients across various industries. Worked on both frontend and backend systems using React, Node.js, and MongoDB.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Built RESTful APIs and real-time applications</li>
                <li>Implemented authentication and authorization systems</li>
                <li>Developed responsive UIs with modern frameworks</li>
                <li>Optimized database performance and queries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8 reveal">
        <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black transition-colors hover:scale-105 transform duration-300">
          <FileText size={18} />
          <span className="font-bold">DOWNLOAD FULL RESUME</span>
        </a>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a responsive e-commerce site with React, Node.js, and MongoDB. Implemented user authentication, payment processing, and order management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "AI Content Generator",
    description: "Developed a web app that generates creative content using AI. Integrated with OpenAI's API and built a user-friendly interface for customization.",
    tags: ["Next.js", "TypeScript", "AI"],
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=500&h=300" 
  },
  {
    title: "Health Tracking Dashboard",
    description: "Created a dashboard for visualizing health data from wearable devices. Includes data visualization, goal setting, and progress tracking.",
    tags: ["Vue.js", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Built a collaborative workspace for teams with real-time editing, document sharing, and integrated video conferencing.",
    tags: ["WebRTC", "Socket.io", "React"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "NFT Marketplace",
    description: "Designed and developed a marketplace for NFT artists to mint, list, and sell their digital creations with secure wallet integration.",
    tags: ["Ethereum", "Web3.js", "Next.js"],
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "Social Media Analytics",
    description: "Created an analytics platform for social media marketers to track campaign performance and audience engagement across platforms.",
    tags: ["React", "GraphQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500&h=300"
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'React', 'TypeScript', 'AI', 'Web3'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.includes(activeFilter))
      );
  
  return (
    <section id="projects" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <Briefcase size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">PROJECTS</h2>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8 reveal">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 border-2 border-black font-bold transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-black text-white scale-110' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`group border-4 border-black bg-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] reveal delay-${index * 100}`}
          >
            <div className="h-48 overflow-hidden border-b-4 border-black">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="inline-block px-2 py-1 text-xs font-mono bg-yellow-400 border-2 border-black hover:bg-white transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-1 font-bold hover:underline group"
              >
                View Project <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12 reveal">
        <a href="#" className="flex items-center gap-2 bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black transition-colors hover:scale-105 transform duration-300">
          <Briefcase size={18} />
          <span className="font-bold">VIEW ALL PROJECTS</span>
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and frameworks. From simple landing pages to complex web applications."
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creating user-centered digital experiences with intuitive interfaces, wireframing, prototyping, and comprehensive design systems."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Improving load times, reducing bundle sizes, and implementing best practices to make your web applications lightning fast."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Technical Consulting",
      description: "Providing expert advice on technology stack selection, architecture planning, and implementation strategies for your projects."
    }
  ];
  
  return (
    <section id="services" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <Zap size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">SERVICES</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`border-4 border-black bg-white p-6 reveal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 delay-${index * 100}`}>
            <div className="w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center mb-4 animate-spin-slow">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="relative mt-12 p-8 border-4 border-black bg-pink-200 reveal hover:bg-pink-300 transition-colors duration-300">
        <div className="absolute -top-6 -left-6 bg-white border-4 border-black p-3 z-10 animate-bounce-subtle">
          <div className="font-bold text-xl">NEED A CUSTOM SOLUTION?</div>
        </div>
        <p className="text-lg mb-6 mt-6">
          I offer customized development services tailored to your specific business needs. 
          Whether you're a startup looking to launch an MVP or an established company needing 
          to revamp your digital presence, I can help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-black text-white px-6 py-3 font-bold border-4 border-black hover:bg-white hover:text-black transition-colors text-center hover:scale-105 transform duration-300">
            CONTACT ME
          </a>
          <a href="#process" className="bg-white text-black px-6 py-3 font-bold border-4 border-black hover:bg-black hover:text-white transition-colors text-center hover:scale-105 transform duration-300">
            VIEW MY PROCESS
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "In-depth discussion about your project goals, target audience, requirements, and timeline. We'll identify key features and objectives."
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed roadmap with project milestones, technology stack decisions, architecture planning, and resource allocation."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Iterative design and development process with regular check-ins. Building the solution with clean code and following best practices."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing across devices and browsers, followed by deployment and launch. Ensuring everything works flawlessly."
    },
    {
      number: "05",
      title: "Support & Optimization",
      description: "Post-launch support, monitoring, and continuous improvements. Regular updates and optimizations to keep everything running smoothly."
    }
  ];
  
  return (
    <section id="process" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <Clock size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">MY PROCESS</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {processSteps.map((step, index) => (
          <div key={index} className={`border-4 border-black bg-white relative reveal hover:-translate-y-2 transition-transform duration-300 delay-${index * 100}`}>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center animate-spin-slow">
              <span className="font-mono font-bold">{step.number}</span>
            </div>
            <div className="pt-12 p-6">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 85 },
  { name: "UI/UX Design", level: 75 },
  { name: "DevOps", level: 65 },
];

function Skills() {
  return (
    <section id="skills" className="p-4 mb-16 bg-lime-200 border-y-4 border-black">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-2 mb-8 reveal">
          <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
            <Lightbulb size={18} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold">SKILLS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`mb-4 reveal delay-${index * 100}`}>
              <div className="flex justify-between mb-1">
                <span className="font-bold">{skill.name}</span>
                <span className="font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-6 border-2 border-black bg-white overflow-hidden">
                <div 
                  className="h-full bg-black animate-width-expand origin-left"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {['React Native', 'GraphQL', 'AWS', 'Docker', 'Next.js', 'Redux', 'SQL', 'Python', 'Figma', 'Git', 'MongoDB', 'CI/CD'].map((skill, index) => (
            <div key={index} className={`border-2 border-black p-3 bg-white text-center font-bold reveal hover:bg-yellow-400 transition-colors duration-300 hover:scale-105 transform delay-${(index % 4) * 100}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      content: "PURROGRAMMER completely transformed our outdated website into a modern, high-performing platform that's drastically improved our conversion rates. The attention to detail and technical expertise were outstanding.",
      author: "Sarah Johnson",
      role: "CEO, TechVision",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      content: "Working with PURROGRAMMER was a game-changer for our startup. The e-commerce platform developed exceeded our expectations in both functionality and design. Communication was clear throughout the project.",
      author: "Michael Chen",
      role: "Founder, EcoGoods",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      content: "PURROGRAMMER technical knowledge is truly impressive. They helped us optimize our web application, resulting in a 40% improvement in load time and a much better user experience for our customers.",
      author: "Jessica Miller",
      role: "Product Manager, DataFlow",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];
  
  return (
    <section id="testimonials" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <Star size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">TESTIMONIALS</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`border-4 border-black bg-white relative reveal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 delay-${index * 150}`}>
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-400 border-4 border-black flex items-center justify-center animate-pulse-slow">
              <Quote size={18} />
            </div>
            <div className="p-6 pt-10">
              <p className="mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="p-4 mb-16">
      <div className="flex items-center gap-2 mb-8 reveal">
        <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
          <Mail size={18} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">CONTACT</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="reveal">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="mb-6">
            Have a project in mind or want to chat? Feel free to send me a message 
            and I'll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:underline group">
              <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" /> hello@example.com
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="border-4 border-black p-6 bg-lime-200 hover:bg-lime-300 transition-colors duration-300">
            <h4 className="font-bold text-lg mb-2">Office Hours</h4>
            <p className="mb-4">Monday - Friday: 9AM - 5PM PST</p>
            <h4 className="font-bold text-lg mb-2">Project Inquiries</h4>
            <p>Please include your project details, timeline, and budget for faster response.</p>
          </div>
        </div>
        
        <form className="border-4 border-black p-6 bg-blue-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] reveal hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="mb-4">
            <label className="block mb-2 font-bold">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:border-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:border-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Project Type</label>
            <select className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:border-black">
              <option>Website Development</option>
              <option>Web Application</option>
              <option>UI/UX Design</option>
              <option>Consulting</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Message</label>
            <textarea 
              rows={4} 
              className="w-full p-3 border-2 border-black resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:border-black"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:scale-[1.02] transform"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

function Navigation() {
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "services", label: "SERVICES" },
    { id: "skills", label: "SKILLS" },
    { id: "testimonials", label: "TESTIMONIALS" },
    { id: "contact", label: "CONTACT" },
  ];
  
  return (
    <nav className="sticky top-0 bg-white border-b-4 border-black z-50 hidden md:block">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="py-3 font-bold text-xl hover:text-yellow-400 transition-colors duration-300">PURROGRAMMER</div>
          <div className="flex gap-6">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="py-3 font-bold hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="p-4 border-t-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="reveal">
            <h3 className="font-bold text-xl mb-4">PURROGRAMMER</h3>
            <p className="mb-4">Building digital experiences with code and creativity since 2016.</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-black hover:bg-white hover:text-black transition-colors hover:rotate-6 transform duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="reveal delay-100">
            <h3 className="font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline hover:text-yellow-400 transition-colors duration-300">About</a></li>
              <li><a href="#experience" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#projects" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#services" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div className="reveal delay-200">
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Web Development</a></li>
              <li><a href="#services" className="hover:underline hover:text-yellow-400 transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#services" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Performance Optimization</a></li>
              <li><a href="#services" className="hover:underline hover:text-yellow-400 transition-colors duration-300">Technical Consulting</a></li>
            </ul>
          </div>
          
          <div className="reveal delay-300">
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 group">
                <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" /> hello@example.com
              </li>
              <li>San Francisco, CA</li>
              <li>Available for freelance</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-black pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm">© {new Date().getFullYear()} PURROGRAMMER. All Rights Reserved</div>
          <div className="flex gap-2 items-center">
            <Code size={18} className="animate-pulse-slow" />
            <span>Made with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useScrollReveal();
  
  return (
    <div className="relative min-h-screen font-sans bg-white text-black">
      <NoiseBg />
      <Navigation />
      <div className="max-w-6xl mx-auto">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Process />
        <Skills />
        <Testimonials />
        <Contact />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;