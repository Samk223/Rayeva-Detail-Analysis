'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Slide } from '@/components/Slide';
import { RadarAnalysis } from '@/components/charts/RadarAnalysis';
import { BarAnalysis } from '@/components/charts/BarAnalysis';
import { HeroIllustration } from '@/components/illustrations/HeroIllustration';
import { UXIllustration } from '@/components/illustrations/UXIllustration';
import { ProductIllustration } from '@/components/illustrations/ProductIllustration';
import { AIIllustration } from '@/components/illustrations/AIIllustration';
import { CRMIllustration } from '@/components/illustrations/CRMIllustration';
import { SEOIllustration } from '@/components/illustrations/SEOIllustration';
import { HealthIllustration } from '@/components/illustrations/HealthIllustration';
import { AuditIllustration } from '@/components/illustrations/AuditIllustration';
import { AuthIllustration } from '@/components/illustrations/AuthIllustration';
import { TechIllustration } from '@/components/illustrations/TechIllustration';
import { DesignIllustration } from '@/components/illustrations/DesignIllustration';
import { RoadmapIllustration } from '@/components/illustrations/RoadmapIllustration';
import { VisionIllustration } from '@/components/illustrations/VisionIllustration';
import { NavigationDots } from '@/components/NavigationDots';
import { Counter } from '@/components/Counter';
import { ArrowRight, Search, ShieldCheck, Zap, BarChart3, Users, Sparkles, LayoutDashboard, Download, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

const SECTIONS = [
  'intro',
  'score',
  'ux-assessment',
  'product-experience',
  'login-signup',
  'seo-readiness',
  'tech-assessment',
  'ux-improvements',
  'crm-strategy',
  'ai-integration',
  'roadmap',
  'conclusion'
];

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // Force scroll to top on initial load
    main.scrollTop = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (isScrollingRef.current) return;

        const currentScroll = main.scrollTop;
        
        // Find which section we are currently in
        let currentIndex = 0;
        let minDiff = Infinity;
        
        SECTIONS.forEach((id, index) => {
          const element = document.getElementById(id);
          if (element) {
            const diff = Math.abs(element.offsetTop - currentScroll);
            if (diff < minDiff) {
              minDiff = diff;
              currentIndex = index;
            }
          }
        });
        
        let nextIndex = currentIndex;
        if (e.key === 'ArrowDown' && currentIndex < SECTIONS.length - 1) {
          nextIndex = currentIndex + 1;
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          nextIndex = currentIndex - 1;
        }

        if (nextIndex !== currentIndex) {
          const targetId = SECTIONS[nextIndex];
          const element = document.getElementById(targetId);
          if (element) {
            isScrollingRef.current = true;
            main.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
            
            // Reset scrolling flag after animation completes
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000); // Increased timeout to ensure animation finishes
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main ref={mainRef} className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#F5F5F0] overscroll-behavior-y-contain">
      <NavigationDots sections={SECTIONS} />
      
      {/* 1. Introduction */}
      <Slide id="intro" className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-[1.05] text-[#1A362D]">
              Rayeva <br/><span className="text-[#E67E22]">Pvt Ltd</span>
            </h1>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-[#1A362D]/90 max-w-2xl font-light leading-relaxed">
                Redefining everyday consumption through <strong className="font-bold text-[#E67E22]">conscious consumerism</strong> and sustainable product curation.
              </p>
              <p className="text-lg text-[#1A362D]/60 max-w-xl leading-relaxed">
                Rayeva is an emerging digital platform focused on promoting eco-friendly living. The platform aims to redefine everyday consumption by enabling users to make environmentally responsible choices through accessible and thoughtfully designed product offerings.
              </p>
              <p className="text-lg text-[#1A362D]/60 max-w-xl leading-relaxed">
                Positioning itself as an <strong className="text-[#1A362D]">all-access sustainability platform</strong>, Rayeva integrates categories such as everyday essentials, recycling solutions, plastic-free packaging, and clean technology.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-5">
              <a href="#score" className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A362D] text-white rounded-full font-semibold hover:bg-[#2C5244] transition-all hover:scale-105 shadow-xl shadow-[#1A362D]/20">
                Explore Strategy <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, type: "spring" }}
            className="h-full min-h-[450px] relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Slide>

      {/* 2. Current Platform Score Overview */}
      <Slide id="score" dark bgClass="bg-[#1A362D] text-[#F5F5F0]">
        <div className="max-w-7xl mx-auto space-y-16 w-full">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#E67E22] text-xs font-bold tracking-[0.2em] uppercase"
            >
              Performance Audit
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#E0E7E1]">
              Platform Health Index
            </h2>
            <p className="text-xl text-[#F5F5F0]/70 font-light max-w-3xl mx-auto leading-relaxed">
              A comprehensive analysis of the current Rayeva website, focusing on key areas including UI/UX design, product architecture, authentication systems, CRM capabilities, AI integration, and SEO performance.
            </p>
            <p className="text-lg text-[#F5F5F0]/50 font-light max-w-2xl mx-auto leading-relaxed">
              The objective is to identify existing gaps and propose scalable, user-centric, and technology-driven improvements that can enhance user engagement and support long-term platform growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 bg-white/5 p-8 rounded-[40px] border border-white/5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <HealthIllustration />
              </div>
              <div className="relative z-10">
                <RadarAnalysis />
              </div>
            </motion.div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-5">
              {[
                { label: 'UI/UX Design', value: 30, color: 'from-red-500 to-orange-500', icon: LayoutDashboard },
                { label: 'Product Exp', value: 40, color: 'from-orange-500 to-yellow-500', icon: Search },
                { label: 'Auth & CRM', value: 25, color: 'from-red-600 to-red-400', icon: Users },
                { label: 'SEO Health', value: 20, color: 'from-red-700 to-red-500', icon: TrendingUp },
                { label: 'Architecture', value: 50, color: 'from-yellow-500 to-green-500', icon: ShieldCheck },
                { label: 'AI Readiness', value: 10, color: 'from-gray-600 to-gray-400', icon: Sparkles },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-5 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-500"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${stat.color} opacity-50`} />
                  <div className="flex justify-between items-start mb-3">
                    <stat.icon className="w-5 h-5 text-white/40 group-hover:text-[#E67E22] transition-colors" />
                    <div className="text-2xl font-bold tracking-tighter">
                      <Counter value={stat.value} suffix="%" />
                    </div>
                  </div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.15em] leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 3. UI/UX Analysis */}
      <Slide id="ux-assessment">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 text-[#E67E22] font-semibold tracking-widest uppercase text-xs bg-[#E67E22]/10 px-4 py-2 rounded-full">
              <LayoutDashboard className="w-4 h-4" />
              UI/UX Audit
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A362D] leading-tight">
              Experience <br/><span className="text-[#E67E22]">& Interface</span>
            </h2>
            <p className="text-xl text-[#1A362D]/70 font-light leading-relaxed max-w-xl">
              The current UI/UX implementation falls short in delivering a seamless, trustworthy, and conversion-oriented experience despite a strong conceptual foundation.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: 'First Impression & Visual Clarity', 
                  desc: 'The message is not conveyed clearly upon landing. Issues include low-quality background assets, lack of a concise headline, and weak visual contrast making text less impactful.',
                  points: ['Low-quality background video', 'Lack of clear headline', 'Weak visual contrast']
                },
                { 
                  title: 'Trust & Credibility Issues', 
                  desc: 'The website currently does not establish sufficient trust signals. Key issues include inconsistent UI elements, overuse of decorative elements, and lack of verified certifications or customer reviews.',
                  points: ['Inconsistent UI elements', 'Lack of verified certifications', 'No strategic customer reviews']
                },
                { 
                  title: 'Layout & Information Architecture', 
                  desc: 'The homepage suffers from content overload and poor information prioritization. Sections such as "impact", "mission", and "categories" are not strategically ordered.',
                  points: ['Content overload', 'Poor information prioritization', 'Non-strategic section ordering']
                }
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 rounded-3xl bg-white shadow-sm border border-[#1A362D]/5">
                  <div className="flex gap-4 items-center">
                    <CheckCircle2 className="w-6 h-6 text-[#E67E22] shrink-0" />
                    <h4 className="font-bold text-[#1A362D] text-xl">{item.title}</h4>
                  </div>
                  <p className="text-sm text-[#1A362D]/60 leading-relaxed">{item.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {item.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-xs text-[#1A362D]/40">
                        <div className="w-1 h-1 rounded-full bg-[#E67E22]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="h-full min-h-[450px] relative"
            >
              <UXIllustration />
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Navigation Experience', desc: 'Menu options do not guide user intent effectively. No clear prioritization between shopping journey and informational content.' },
                { title: 'Visual Design Consistency', desc: 'Uneven spacing, inconsistent card styles, and mixed visual styles lead to a lack of professional polish.' },
                { title: 'User Engagement & Flow', desc: 'No clear funnel (Discover → Explore → Trust → Purchase). CTAs are present but not strategically placed or emphasized.' }
              ].map((issue, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  className="p-6 rounded-3xl bg-white shadow-md border border-white flex gap-4 items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1A362D]/5 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A362D]">{issue.title}</h3>
                    <p className="text-sm text-[#1A362D]/60">{issue.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 5. Product & Category Analysis */}
      <Slide id="product-experience">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="order-2 lg:order-1 h-full min-h-[450px]"
          >
            <ProductIllustration />
          </motion.div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="inline-flex items-center gap-2 text-[#2ECC71] font-semibold tracking-widest uppercase text-xs bg-[#2ECC71]/10 px-4 py-2 rounded-full">
              <Search className="w-4 h-4" />
              Product Audit
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A362D] leading-tight">
              Discovery <br/><span className="text-[#2ECC71]">& Trust</span>
            </h2>
            <p className="text-xl text-[#1A362D]/70 font-light leading-relaxed">
              The product discovery experience demonstrates intent toward structured browsing but falls short in clarity, usability, and user trust.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: 'Category Structure & Discoverability', 
                  desc: 'Categories are displayed using a mix of images, icons, and scrolling labels, creating visual distraction. Absence of clear descriptions makes it difficult to understand category differences.',
                  points: ['Visual distraction from mixed media', 'Lack of category hierarchy', 'Poor scannability from horizontal scrolling']
                },
                { 
                  title: 'Product Listing Experience', 
                  desc: 'Product listing sections lack strong structural design. Information appears stacked rather than structured, making it harder to scan for key details.',
                  points: ['Inconsistent card layouts', 'Non-prioritized pricing & tags', 'Information overload']
                },
                { 
                  title: 'Filtering & Search Functionality', 
                  desc: 'Filters are relevant (Material, Eco-impact, Price) but not immediately prominent or intuitive in the browsing flow.',
                  points: ['Non-intuitive filter flow', 'Fragmented discovery experience']
                },
                { 
                  title: 'Forced Authentication Barrier', 
                  desc: 'Requirement to log in before fully accessing products introduces unnecessary friction in the early exploration stage.',
                  points: ['High drop-off rates for first-time visitors', 'Restricted browse/compare options']
                }
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 rounded-3xl bg-white shadow-sm border border-[#1A362D]/5">
                  <div className="flex gap-4 items-center">
                    <CheckCircle2 className="w-6 h-6 text-[#2ECC71] shrink-0" />
                    <h4 className="font-bold text-[#1A362D] text-xl">{item.title}</h4>
                  </div>
                  <p className="text-sm text-[#1A362D]/60 leading-relaxed">{item.desc}</p>
                  <ul className="grid grid-cols-1 gap-1 pt-2">
                    {item.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-xs text-[#1A362D]/40">
                        <div className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 6. Authentication Analysis */}
      <Slide id="login-signup" dark bgClass="bg-[#1A362D] text-[#F5F5F0]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 text-[#E67E22] font-semibold tracking-widest uppercase text-xs bg-white/10 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                Auth Flow Audit
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#E0E7E1] leading-tight">
                Access <br/><span className="text-[#E67E22]">Barriers</span>
              </h2>
              <p className="text-xl text-[#F5F5F0]/70 font-light leading-relaxed">
                The authentication flow is technically functional but introduces unnecessary friction and cognitive load for first-time users.
              </p>
              <div className="space-y-6">
                {[
                  { 
                    title: 'Role-Based User Experience', 
                    desc: 'Differentiation between Buyer, Seller, and Corporate roles creates confusion and friction in execution.',
                    points: ['Buyer: Lack of onboarding guidance', 'Seller: Overwhelming 6-step process', 'Corporate: Time-consuming application forms']
                  },
                  { 
                    title: 'Flexibility in Authentication', 
                    desc: 'The current system relies primarily on email-based authentication with OTP verification, lacking modern quick-access options.',
                    points: ['No Google Sign-In', 'No Phone number login', 'Reduced accessibility']
                  },
                  { 
                    title: 'Security & Trust Perception', 
                    desc: 'While OTP adds security, the overall UI and workflow reduce perceived professionalism and trust.',
                    points: ['Subconscious signal of unreliability', 'Incomplete product feel']
                  }
                ].map((box, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#E67E22]/20 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-[#E67E22]" />
                      </div>
                      <h3 className="font-bold text-white text-lg">{box.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{box.desc}</p>
                    <ul className="grid grid-cols-1 gap-1">
                      {box.points.map((p, pi) => (
                        <li key={pi} className="flex items-center gap-2 text-xs text-white/30">
                          <div className="w-1 h-1 rounded-full bg-[#E67E22]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="h-full min-h-[450px]"
            >
              <AuthIllustration />
            </motion.div>
          </div>
        </div>
      </Slide>

      {/* 7. Search Engine Readiness */}
      <Slide id="seo-readiness">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 text-[#3498DB] font-semibold tracking-widest uppercase text-xs bg-[#3498DB]/10 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4" />
              SEO Audit
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A362D] leading-tight">
              Growth <br/><span className="text-[#3498DB]">Bottlenecks</span>
            </h2>
            <p className="text-xl text-[#1A362D]/70 font-light leading-relaxed">
              Although the website has a good foundation (fast performance), its SEO readiness is very low due to lack of content and poor optimization practices.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: 'Content & Blog Presence', 
                  desc: 'The blog currently displays a "Coming Soon" message and contains no actual content, leading to zero organic traffic generation.',
                  points: ['No organic traffic from content', 'Missed sustainability keywords', 'Weak educational engagement']
                },
                { 
                  title: 'Page Titles & Metadata', 
                  desc: 'Page titles appear generic and repetitive, often showing only the brand name (e.g., "Rayeva...").',
                  points: ['Lack of keyword-specific titles', 'No differentiation between pages', 'Reduced visibility in SERPs']
                },
                { 
                  title: 'Keyword Targeting', 
                  desc: 'Keywords are not strongly reflected in content or structure. No visible keyword-driven pages or landing sections.',
                  points: ['Weak keyword integration', 'Limited indexable content', 'No visible content strategy']
                }
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 rounded-3xl bg-white shadow-sm border border-[#1A362D]/5">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#3498DB]/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-[#3498DB]" />
                    </div>
                    <h4 className="font-bold text-[#1A362D] text-lg">{item.title}</h4>
                  </div>
                  <p className="text-sm text-[#1A362D]/60 leading-relaxed">{item.desc}</p>
                  <ul className="grid grid-cols-1 gap-1">
                    {item.points.map((p, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-xs text-[#1A362D]/40">
                        <div className="w-1 h-1 rounded-full bg-[#3498DB]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="order-first lg:order-last h-full min-h-[450px] flex flex-col justify-center gap-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
              <SEOIllustration />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }}>
              <BarAnalysis />
            </motion.div>
          </div>
        </div>
      </Slide>

      {/* 8. Technical Assessment */}
      <Slide id="tech-assessment" bgClass="bg-[#E0E7E1] text-[#1A362D]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">Technical Audit</h2>
              <p className="text-xl opacity-70 font-light leading-relaxed">The platform demonstrates a partially functional technical foundation but lacks refinement and completeness.</p>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { 
                    title: 'Functionality & Interaction', 
                    desc: 'Multiple functional inconsistencies in user interaction elements. Shop page categories are unresponsive and clickable items lack proper affordance (cursor changes).',
                    points: ['Unresponsive shop categories', 'Missing cursor affordance', 'Inconsistent hover feedback']
                  },
                  { 
                    title: 'Navigation & Redirection', 
                    desc: 'Several redirection issues within the footer section negatively affect reliability and trust.',
                    points: ['Broken Privacy/Terms links', 'Shipping/Returns redirect to Hero', 'FAQ redirects to Contact']
                  },
                  { 
                    title: 'Mobile vs Desktop Experience', 
                    desc: 'Platform is more optimized for mobile. Desktop suffers from rendering issues, prominent layout inconsistencies, and non-functional expandable sections.',
                    points: ['Poor desktop optimization', 'Broken expandable sections', 'Layout inconsistencies']
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false }} 
                    className="p-6 rounded-3xl bg-white shadow-md border border-white space-y-3"
                  >
                    <h3 className="text-lg font-bold flex items-center gap-3 text-[#1A362D]">
                      <AlertTriangle className="w-5 h-5 text-[#E67E22]" /> {item.title}
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
                    <ul className="grid grid-cols-1 gap-1">
                      {item.points.map((p, pi) => (
                        <li key={pi} className="flex items-center gap-2 text-xs text-[#1A362D]/40">
                          <div className="w-1 h-1 rounded-full bg-[#E67E22]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="h-full min-h-[400px]"
              >
                <TechIllustration />
              </motion.div>
              <div className="p-8 rounded-[32px] bg-white shadow-xl shadow-[#1A362D]/5 border border-white">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-[#2ECC71]"><CheckCircle2 className="w-6 h-6" /> Core Strengths</h3>
                <p className="text-sm opacity-70">The platform performs relatively well in terms of loading speed, with pages loading quickly and without noticeable delays. Core features like the cart and basic navigation are functional.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 9. UX/UI Improvements */}
      <Slide id="ux-improvements">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="h-full min-h-[450px]"
            >
              <DesignIllustration />
            </motion.div>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 text-[#E67E22] font-semibold tracking-widest uppercase text-xs bg-[#E67E22]/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Strategic Redesign
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A362D] tracking-tight">Design <br/><span className="text-[#E67E22]">Evolution</span></h2>
              <p className="text-xl text-[#1A362D]/70 font-light leading-relaxed">
                Shifting from a feature-heavy but unrefined interface to a user-centered, clean, and intentional design approach focused on conversion and trust.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { 
                    title: 'Homepage Redesign', 
                    desc: 'Transitioning to a cleaner, minimal background with high-quality custom illustrations that communicate sustainability without visual clutter.',
                    points: ['High-impact hero section', 'Clear value proposition', 'Strategic CTA placement']
                  },
                  { 
                    title: 'Visual Identity', 
                    desc: 'Refining the color palette to include more sophisticated earth tones and high-contrast accent colors for better accessibility.',
                    points: ['Eco-professional palette', 'Modern typography', 'Consistent branding']
                  },
                  { 
                    title: 'Layout & Hierarchy', 
                    desc: 'Restructuring pages to prioritize high-impact content and guide users through a logical discovery funnel.',
                    points: ['Reduced cognitive load', 'Logical content flow', 'Mobile & Desktop consistency']
                  },
                  { 
                    title: 'Trust-Oriented Design', 
                    desc: 'Integrating verified trust badges, real-time social proof, and transparent sustainability scoring for every product.',
                    points: ['Verified certifications', 'Customer testimonials', 'Brand storytelling']
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-3xl bg-white shadow-lg shadow-[#1A362D]/5 border border-[#1A362D]/10 hover:border-[#E67E22]/50 transition-all duration-500 space-y-3"
                  >
                    <h4 className="font-bold text-[#1A362D] text-lg">{item.title}</h4>
                    <p className="text-xs text-[#1A362D]/70 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-1">
                      {item.points.map((p, pi) => (
                        <li key={pi} className="flex items-center gap-2 text-[10px] text-[#1A362D]/40">
                          <div className="w-1 h-1 rounded-full bg-[#E67E22]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* 10. CRM Strategy */}
      <Slide id="crm-strategy" dark bgClass="bg-[#1A362D] text-[#F5F5F0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 text-[#2ECC71] font-semibold tracking-widest uppercase text-xs bg-white/10 px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              Retention Engine
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#F5F5F0] leading-tight">
              CRM <br/><span className="text-[#2ECC71]">Ecosystem</span>
            </h2>
            <p className="text-xl text-[#F5F5F0]/70 font-light leading-relaxed">
              Transforming Rayeva from a transactional platform into a relationship-driven community through automated engagement and personalization.
            </p>
            <div className="space-y-6">
              {[
                { 
                  title: 'Email Marketing & Automation', 
                  desc: 'Implementing a full lifecycle series: Welcome sequences, Cart abandonment recovery, Re-engagement loops, and Post-purchase updates.',
                  points: ['Welcome series', 'Abandonment recovery', 'Loyalty rewards']
                },
                { 
                  title: 'User Data Capture Strategy', 
                  desc: 'Implement non-intrusive data capture points to build rich user profiles and understand individual sustainability preferences.',
                  points: ['Preference centers', 'Behavioral tracking', 'Progressive profiling']
                },
                { 
                  title: 'Personalized Account Experience', 
                  desc: 'Wishlist optimization, "Recently Viewed" dynamic sections, and smart recommendations based on browsing history.',
                  points: ['Dynamic content', 'Segmented campaigns', 'Tailored offers']
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  className="p-8 rounded-[32px] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all space-y-3"
                >
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                  <p className="text-base text-white/60 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.points.map((p, pi) => (
                      <span key={pi} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-white/30 border border-white/5">{p}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="h-full min-h-[450px]"
          >
            <CRMIllustration />
          </motion.div>
        </div>
      </Slide>

      {/* 11. AI Integration Opportunities */}
      <Slide id="ai-integration">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 h-full min-h-[450px]">
            <AIIllustration />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="inline-flex items-center gap-2 text-[#9B59B6] font-semibold tracking-widest uppercase text-xs bg-[#9B59B6]/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              Future-Proofing
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A362D] leading-tight">
              AI-Powered <br/><span className="text-[#9B59B6]">Experience</span>
            </h2>
            <p className="text-xl text-[#1A362D]/70 font-light leading-relaxed">
              Integrating AI is no longer a luxury but a necessity for modern e-commerce. We propose three key AI implementations to drive efficiency and user satisfaction.
            </p>
            <div className="space-y-6">
              {[
                { 
                  title: 'Recommendation Engine', 
                  desc: 'AI-driven product suggestions based on browsing history, purchase behavior, and eco-preferences.',
                  points: ['Cross-sell optimization', 'Predictive shopping', 'Personalized feeds']
                },
                { 
                  title: 'Sustainability Scoring', 
                  desc: 'Automated analysis of product data to generate transparent sustainability scores for every item.',
                  points: ['Impact quantification', 'Transparency reports', 'Comparative metrics']
                },
                { 
                  title: 'Smart Search & Chat', 
                  desc: 'Natural language processing to help users find products through conversational queries and intelligent filters.',
                  points: ['Conversational commerce', 'Intent recognition', 'Semantic search']
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-[32px] bg-white shadow-xl shadow-[#1A362D]/5 border border-[#1A362D]/5 space-y-3"
                >
                  <h4 className="font-bold text-[#1A362D] text-xl flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#9B59B6]" />
                    {item.title}
                  </h4>
                  <p className="text-base text-[#1A362D]/60 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.points.map((p, pi) => (
                      <span key={pi} className="px-2 py-1 rounded-full bg-[#9B59B6]/5 text-[10px] text-[#9B59B6] font-medium">{p}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 12. Implementation Roadmap */}
      <Slide id="roadmap" dark bgClass="bg-[#1A362D] text-[#F5F5F0]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-10">
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#F5F5F0] tracking-tight">
                Execution <br/><span className="text-[#E67E22]">Roadmap</span>
              </h2>
              <p className="text-xl text-[#F5F5F0]/70 font-light leading-relaxed">
                A phased approach to transforming Rayeva into a market leader through strategic foundation, growth, and intelligence.
              </p>
              <div className="h-[300px]">
                <RoadmapIllustration />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                { 
                  phase: '1', 
                  title: 'Foundation', 
                  desc: 'Focus on the foundation: Homepage redesign, fixing all critical broken links, implementing basic SEO metadata, and optimizing the mobile checkout flow.', 
                  color: 'bg-[#E67E22]',
                  tasks: ['UI/UX Redesign', 'Technical bug fixes', 'Core SEO setup']
                },
                { 
                  phase: '2', 
                  title: 'Growth', 
                  desc: 'Driving growth through CRM automation, advanced product filters, a dedicated SEO-optimized blog, and a revamped seller onboarding experience.', 
                  color: 'bg-[#2ECC71]',
                  tasks: ['Blog launch', 'CRM automation', 'Advanced filtering']
                },
                { 
                  phase: '3', 
                  title: 'Intelligence', 
                  desc: 'Leveraging intelligence: AI-driven product recommendations, dynamic sustainability scoring, and an intelligent support assistant for global scale.', 
                  color: 'bg-[#3498DB]',
                  tasks: ['AI recommendations', 'Impact scoring', 'Predictive analytics']
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex gap-8 items-center group hover:bg-white/10 transition-all"
                >
                  <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg`}>
                    {item.phase}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tasks.map((t, ti) => (
                        <span key={ti} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-white/30 border border-white/5">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 13. Conclusion */}
      <Slide id="conclusion" dark bgClass="bg-[#1A362D] text-[#F5F5F0]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="w-24 h-24 bg-[#E67E22] rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-[#E67E22]/20"
          >
            <Lightbulb className="w-12 h-12 text-white" />
          </motion.div>
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-8xl font-bold leading-tight">
              Ready for <br/><span className="text-[#E67E22]">Impact.</span>
            </h2>
            <p className="text-2xl text-[#F5F5F0]/70 font-light leading-relaxed">
              Rayeva has the potential to become the definitive platform for conscious living. By addressing current gaps and embracing a technology-first approach, we can create a sustainable future together.
            </p>
            <p className="text-lg text-[#F5F5F0]/40 font-light leading-relaxed max-w-2xl mx-auto">
              Our mission is to create meaningful change through everyday choices, integrating recycling, upcycling, and clean technology into a seamless digital experience.
            </p>
          </div>
          <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#intro"
              className="px-12 py-6 bg-[#E67E22] text-white rounded-full font-bold text-xl hover:bg-[#D35400] transition-all hover:scale-105 shadow-2xl shadow-[#E67E22]/20 flex items-center justify-center"
            >
              Start Over
            </a>
          </div>
          <div className="pt-20 opacity-30">
            <p className="text-sm tracking-[0.3em] uppercase">© 2026 Rayeva Pvt Ltd • Strategy & Growth Analysis</p>
          </div>
        </div>
      </Slide>

    </main>
  );
}
