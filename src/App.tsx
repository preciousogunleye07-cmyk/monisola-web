import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUpRight, 
  Zap, 
  Layout, 
  Globe, 
  Plus, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  Flame, 
  Gamepad2, 
  Gift, 
  Code2, 
  Command,
  User,
  Clock,
  DollarSign,
  Send,
  CheckCircle2,
  MessageSquare,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

/**
 * BELLO MONISOLA - OFFICIAL GLASS BENTO PORTFOLIO v2.6
 * A high-end, glassmorphic bento-grid experience with motion.
 */

const App = () => {
  const [view, setView] = useState('home');
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const { scrollY, scrollYProgress } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: '01',
      title: 'Flashlearn',
      tags: ['JS', 'Education'],
      desc: 'Interactive flashcards site for efficient learning and retention.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
      url: 'https://moniiv2.github.io/flashcards-site/',
      icon: <Layers size={18} />
    },
    {
      id: '02',
      title: 'Xmas Gen',
      tags: ['DOM', 'Holiday'],
      desc: 'Customizable Christmas card generator for personalized greetings.',
      img: 'https://images.unsplash.com/photo-1543589077-47d816067f70?q=80&w=800',
      url: 'https://moniiv2.github.io/Christmas-Card-Generator/',
      icon: <Gift size={18} />
    },
    {
      id: '03',
      title: 'Rock Paper Scissors',
      tags: ['Logic', 'Game'],
      desc: 'Functional implementation of the classic hand game.',
      img: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=800',
      url: 'https://moniiv2.github.io/JavaScript-course-rep/',
      icon: <Gamepad2 size={18} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const HomeView = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
      className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-6 grid-rows-auto gap-3 md:gap-4 relative z-10 p-4 md:p-0"
    >
      
      {/* 1. HERO IDENTITY CARD - Glass Layered */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        className="col-span-2 md:col-span-4 row-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-700 group relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full group-hover:bg-orange-500/20 transition-colors"></div>
        
        <div className="flex justify-between items-start relative z-10">
          <div className="relative">
            <motion.div 
              whileHover={{ rotate: 3 }}
              className="w-32 h-32 md:w-44 md:h-44 rounded-[2.8rem] bg-gradient-to-tr from-orange-500 via-indigo-600 to-fuchsia-500 p-[3px] shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-transform duration-700"
            >
              <div className="w-full h-full bg-[#080808] rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                  <img 
                    src="https://fv5-3.files.fm/thumb_show.php?i=msjuqebxeg&view&v=1&PHPSESSID=88ec2ffae7f51047d27398848188f11e535e549e" 
                    alt="Bello Monisola" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== "/profile.jpg?v=3") {
                        target.src = "/profile.jpg?v=3";
                      } else {
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.avatar-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'avatar-fallback w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white text-4xl font-black';
                          fallback.innerText = 'BM';
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                  />
              </div>
            </motion.div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-orange-500 rounded-full border-[6px] border-[#0c0c0c] shadow-[0_0_20px_#f97316] animate-pulse"></div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 mb-2">System Core</span>
            <div className="px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
              <span className="text-[11px] uppercase font-black text-white tracking-widest">Active</span>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-10 bg-orange-500/50"></div>
             <span className="text-[10px] md:text-[11px] font-black text-orange-500 tracking-[0.4em] uppercase">Frontend Engineer</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-2 group-hover:tracking-normal transition-all duration-700 drop-shadow-lg leading-none">
            Bello Monisola
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl font-medium leading-tight max-w-lg">
            Clean code. <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">Beautiful interfaces.</span> Happy users.
          </p>
        </div>
      </motion.div>

      {/* 2. ZUKO IDENTITY BOX - Glass Flame */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="col-span-2 md:col-span-2 bg-gradient-to-br from-orange-600/80 to-rose-700/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-center items-center group relative overflow-hidden shadow-2xl border border-white/10"
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Flame size={48} className="text-white/20 absolute -right-4 -top-4 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700" />
        <span className="text-[10px] md:text-[11px] uppercase font-black text-orange-100/40 tracking-[0.6em] mb-4">Mantra</span>
        <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter text-center leading-none drop-shadow-2xl">
          “hello, <br/> Zuko here!”
        </h2>
      </motion.div>

      {/* 3. TIMEBOX - Glass Mini */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        className="col-span-1 md:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-center items-center transition-all group shadow-xl"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.4em] mb-2 font-black">Lagos</span>
        <div className="text-2xl font-mono font-bold text-white tracking-tighter group-hover:text-orange-400 transition-colors">{time}</div>
      </motion.div>

      {/* 4. GLOBEBOX - Glass Mini */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        className="col-span-1 md:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-center items-center transition-all group shadow-xl"
      >
        <Globe size={22} className="text-slate-500 group-hover:text-indigo-400 group-hover:animate-spin-slow transition-all mb-2" />
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">Nigeria</span>
      </motion.div>

      {/* 5. FEATURED PROJECT - Glass Preview */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        onClick={() => setView('projects')}
        className="col-span-2 md:col-span-4 row-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group cursor-pointer relative shadow-2xl"
      >
        <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
        <img 
          src={projects[0].img} 
          alt="Featured Project" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-20">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <span className="px-3 md:px-5 py-1.5 md:py-2.5 bg-orange-500/30 backdrop-blur-xl rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest text-orange-200 border border-white/10 shadow-lg">Primary System</span>
              <span className="px-3 md:px-5 py-1.5 md:py-2.5 bg-white/10 backdrop-blur-xl rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white border border-white/10 shadow-lg">v1.0</span>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur-md text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl"
            >
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          </div>
          <div>
            <span className="text-white/40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-2 block">Highlight</span>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2 md:mb-4 group-hover:translate-x-4 transition-transform duration-700 drop-shadow-2xl">{projects[0].title}</h2>
            <div className="h-0 group-hover:h-12 transition-all duration-700 overflow-hidden hidden md:block">
              <p className="text-slate-300 text-lg max-w-md drop-shadow-lg">{projects[0].desc}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. TOOLBOX - Glass Stack */}
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        className="col-span-2 md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between transition-all group shadow-xl"
      >
        <div className="flex justify-between items-center">
          <Code2 size={24} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Stack</span>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
          {['JS', 'CSS', 'React', 'Git'].map(s => (
            <span key={s} className="px-4 md:px-5 py-2 md:py-2.5 bg-white/5 border border-white/5 backdrop-blur-md rounded-xl md:rounded-2xl text-[11px] md:text-[13px] font-mono font-bold text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-all shadow-md">/{s}</span>
          ))}
        </div>
      </motion.div>

      {/* 7. SOCIAL HUB - Glass Icons */}
      <motion.div 
        variants={itemVariants}
        className="col-span-2 md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 flex items-center justify-around group shadow-xl"
      >
        {[
          { icon: <Instagram size={30} />, href: "https://www.instagram.com/moniiv2?igsh=bHNndnB4bXNoYTBq&utm_source=qr" },
          { icon: <Github size={30} />, href: "https://github.com/moniiv2" },
          { icon: <Linkedin size={30} />, href: "https://www.linkedin.com/in/monisola-bello-293b642bb/" }
        ].map((s, i) => (
          <motion.a 
            key={i} 
            href={s.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.25, color: "#fff", filter: "drop-shadow(0 0 15px rgba(255,255,255,0.4))" }}
            className="text-slate-500 transition-all duration-500"
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* 8. ACTION FOOTER - Glass CTA */}
      <motion.button 
        id="book-me-cta-button"
        type="button"
        onClick={() => setView('booking')}
        variants={itemVariants}
        whileHover={{ scale: 1.01, backgroundColor: "rgba(249, 115, 22, 0.15)", borderColor: "rgba(249, 115, 22, 0.4)" }}
        className="col-span-2 md:col-span-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex items-center justify-between group cursor-pointer transition-all duration-700 active:scale-[0.98] overflow-hidden relative shadow-2xl text-left w-full"
      >
        <div className="flex items-center gap-4 md:gap-8 relative z-10">
          <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-white/20 transition-all border border-white/10 shadow-lg">
            <Mail className="w-6 h-6 md:w-7 md:h-7 text-white animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.5em] text-slate-400 group-hover:text-orange-400 mb-1 block">Booking</span>
            <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter italic leading-none drop-shadow-xl select-none group-hover:text-orange-300 transition-colors">
              Book me now
            </h2>
          </div>
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-white/20 bg-white/10 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:shadow-[0_0_20px_#f97316] transition-all duration-500">
          <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-white transition-all duration-500" />
        </div>
      </motion.button>

    </motion.div>
  );

  const BookingView = () => {
    const [state, handleSubmit] = useForm('mljrwejb');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: 'Frontend Web Development',
      budget: '$1,000 – $3,000',
      timeline: '1 – 2 Months',
      message: '',
    });
    const [customReset, setCustomReset] = useState(false);

    const services = [
      'Frontend Web Development',
      'Full-Stack Web App',
      'UI/UX Design & Motion',
      'Landing Page & SEO',
      'Consultation & Review'
    ];

    const budgets = [
      '< $1,000',
      '$1,000 – $3,000',
      '$3,000 – $5,000',
      '$5,000+'
    ];

    const timelines = [
      'Urgent (< 2 weeks)',
      '1 – 2 Months',
      '3+ Months',
      'Flexible'
    ];

    const handleReset = () => {
      setFormData({
        name: '',
        email: '',
        service: 'Frontend Web Development',
        budget: '$1,000 – $3,000',
        timeline: '1 – 2 Months',
        message: '',
      });
      setCustomReset(true);
    };

    const isSuccess = state.succeeded && !customReset;

    return (
      <motion.div
        id="booking-view-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl w-full relative z-10 p-4 md:p-0"
      >
        {/* Navigation & Header */}
        <div className="flex justify-between items-end mb-8 md:mb-14">
          <div className="space-y-4">
            <motion.button
              id="back-to-home-from-booking"
              whileHover={{ x: -10 }}
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-slate-500 hover:text-orange-400 transition-all group cursor-pointer"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-3 transition-transform" />
              Home Directory
            </motion.button>
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter italic leading-none drop-shadow-2xl">
              Book a Project
            </h2>
            <p className="text-slate-400 text-base md:text-xl font-medium max-w-xl">
              Let's create something memorable together. Fill in your project specs below.
            </p>
          </div>
        </div>

        {isSuccess ? (
          <motion.div
            id="booking-success-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-2xl border border-emerald-500/30 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>

            <span className="text-[10px] md:text-[11px] uppercase font-black tracking-[0.4em] text-emerald-400 block mb-2">
              Inquiry Dispatched via Formspree
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
              Thank you{formData.name ? `, ${formData.name}` : ''}!
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Your project inquiry has been transmitted to my inbox. I will review the specs and get back to you {formData.email ? <>at <span className="text-orange-400 font-semibold">{formData.email}</span></> : 'promptly'} within 24 to 48 hours.
            </p>

            {/* Inquiry Summary Box */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Service</span>
                <span className="text-white text-sm font-semibold">{formData.service}</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Budget</span>
                <span className="text-white text-sm font-semibold">{formData.budget}</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Timeline</span>
                <span className="text-white text-sm font-semibold">{formData.timeline}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.button
                id="booking-return-home-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setView('home')}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                Return to Home
                <ArrowUpRight size={16} />
              </motion.button>
              <button
                id="booking-send-another-btn"
                onClick={handleReset}
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-white/10 transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            id="website-booking-form"
            onSubmit={(e) => {
              setCustomReset(false);
              handleSubmit(e);
            }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden space-y-8"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Hidden Formspree Metadata Fields */}
            <input type="hidden" name="service" value={formData.service} />
            <input type="hidden" name="budget" value={formData.budget} />
            <input type="hidden" name="timeline" value={formData.timeline} />
            <input type="hidden" name="_subject" value={`New Project Inquiry: ${formData.service} (${formData.name || 'Client'})`} />

            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-300 text-sm font-medium">
                <ValidationError errors={state.errors} />
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="booking-name" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <User size={14} className="text-orange-400" />
                  Your Name <span className="text-orange-400">*</span>
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white text-base placeholder:text-slate-600 focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-400 text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label htmlFor="booking-email" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <Mail size={14} className="text-orange-400" />
                  Email Address <span className="text-orange-400">*</span>
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white text-base placeholder:text-slate-600 focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-xs font-medium" />
              </div>
            </div>

            {/* Row 2: Service Selection */}
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Code2 size={14} className="text-indigo-400" />
                Service Required
              </label>
              <div className="flex flex-wrap gap-2.5">
                {services.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: svc })}
                    className={`px-4 py-2.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                      formData.service === svc
                        ? 'bg-orange-500 text-white border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.35)]'
                        : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <DollarSign size={14} className="text-emerald-400" />
                  Estimated Budget
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border text-center cursor-pointer ${
                        formData.budget === b
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                          : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <Clock size={14} className="text-amber-400" />
                  Project Timeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`px-3 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border text-center cursor-pointer ${
                        formData.timeline === t
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                          : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 4: Project Details */}
            <div className="space-y-2">
              <label htmlFor="booking-message" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <MessageSquare size={14} className="text-orange-400" />
                Project Details & Goals <span className="text-orange-400">*</span>
              </label>
              <textarea
                id="booking-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project goals, key features, target deadline, design inspirations or links..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-white text-base placeholder:text-slate-600 focus:outline-none focus:border-orange-500/80 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none leading-relaxed"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-xs font-medium" />
            </div>

            {/* Row 5: Submit Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
              <div className="text-xs text-slate-500">
                Direct Contact: <a href="mailto:bellomonisola867@gmail.com" className="text-slate-300 hover:text-orange-400 transition-colors font-medium">bellomonisola867@gmail.com</a>
              </div>

              <motion.button
                id="submit-booking-btn"
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    <span>Transmitting to Formspree...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    );
  };

  const ProjectsView = () => (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-5xl w-full relative z-10 p-4 md:p-0"
    >
      <div className="flex justify-between items-end mb-12 md:mb-24">
        <div className="space-y-6">
          <motion.button 
            whileHover={{ x: -10 }}
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-slate-500 hover:text-orange-400 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-3 transition-transform" />
            Home Directory
          </motion.button>
          <h2 className="text-5xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter italic leading-none drop-shadow-2xl">Archive</h2>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {projects.map((project, idx) => (
          <motion.a 
            key={project.id} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(99, 102, 241, 0.4)" }}
            className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 overflow-hidden transition-all duration-1000 block shadow-2xl"
          >
            <div className="relative h-64 md:h-96 w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-8 md:mb-12 shadow-2xl border border-white/5">
               <img src={project.img} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-6 md:bottom-10 left-6 md:left-10 p-4 md:p-6 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2rem] text-white border border-white/10 shadow-2xl"
               >
                  {project.icon}
               </motion.div>
            </div>
            
            <div className="flex justify-between items-start relative z-10">
               <div>
                  <div className="flex gap-4 mb-4 md:mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-slate-500 group-hover:text-orange-400 transition-colors">#{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2 md:mb-4 uppercase group-hover:translate-x-4 transition-transform duration-700 drop-shadow-xl">{project.title}</h3>
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-sm drop-shadow-md">{project.desc}</p>
               </div>
               <motion.div 
                whileHover={{ scale: 1.1, rotate: 45 }}
                className="w-14 h-14 md:w-20 md:h-20 bg-white/90 backdrop-blur-md text-black rounded-full flex items-center justify-center transform -rotate-45 transition-all duration-700 shadow-2xl"
               >
                  <ArrowUpRight className="w-7 h-7 md:w-10 md:h-10" />
               </motion.div>
            </div>
            
            <div className="absolute top-8 md:top-12 left-8 md:left-12 text-[8rem] md:text-[18rem] font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.03] transition-all">
              {project.id}
            </div>
          </motion.a>
        ))}
      </motion.div>
      
      <div className="mt-40 mb-20 flex flex-col items-center">
         <div className="w-1 h-20 bg-gradient-to-b from-white/10 to-transparent mb-10"></div>
         <div className="px-12 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[12px] font-black uppercase tracking-[0.6em] text-slate-600 shadow-xl">
            Systems Ready — v2.6.0
         </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-orange-500/30 flex flex-col items-center justify-center overflow-x-hidden relative py-12 md:py-32 pb-24 md:pb-32">
      
      {/* SCROLL PROGRESS BAR */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-indigo-600 to-fuchsia-500 origin-left z-50 shadow-[0_1px_8px_rgba(249,115,22,0.5)]"
      />
      
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(160px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
        }
        .animate-orbit { animation: orbit 60s linear infinite; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 35s linear infinite; }
        @keyframes glow-breathe {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }
        .animate-glow-breathe { animation: glow-breathe 15s ease-in-out infinite; }
      `}</style>

      {/* PRISMATIC ENVIRONMENT */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#030303] z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[100%] h-[100%] bg-indigo-600/5 blur-[300px] rounded-full animate-orbit opacity-50"
        ></motion.div>
        <motion.div 
          style={{ y: y2, animationDirection: 'reverse', animationDuration: '80s' }}
          className="absolute bottom-1/4 right-1/4 w-[90%] h-[90%] bg-orange-600/5 blur-[300px] rounded-full animate-orbit opacity-40"
        ></motion.div>
        <motion.div 
          style={{ y: y3 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_85%)]"
        ></motion.div>
        {/* Subtle Scanline Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(0,0,0,0),rgba(249,115,22,0.01))] bg-[length:100%_6px,8px_100%] pointer-events-none opacity-40"></div>
      </div>

      <div className="w-full flex justify-center pt-20 md:pt-0">
        <AnimatePresence mode="wait">
          {view === 'home' && <HomeView key="home" />}
          {view === 'projects' && <ProjectsView key="projects" />}
          {view === 'booking' && <BookingView key="booking" />}
        </AnimatePresence>
      </div>

      {/* CORE FOOTER */}
      <footer className="mt-20 md:mt-32 mb-10 flex flex-col md:flex-row items-center gap-6 md:gap-16 text-[10px] md:text-[11px] text-slate-700 uppercase tracking-[0.4em] md:tracking-[0.8em] font-black z-10 transition-all px-4 text-center">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 group cursor-default">
           <span className="group-hover:text-orange-500 transition-colors">Bello Monisola</span>
           <div className="hidden md:block w-2 h-2 bg-white/20 rounded-full group-hover:bg-orange-500 transition-colors animate-pulse"></div>
           <span className="group-hover:text-indigo-400 transition-colors italic">“hello, Zuko here!”</span>
        </div>
        <span className="opacity-20">v2.6.0 Stable Release</span>
      </footer>
    </div>
  );
};

export default App;
