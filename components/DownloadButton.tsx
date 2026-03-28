'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';

export function DownloadButton({ className = '', text = 'Download Report' }: { className?: string, text?: string }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      
      // Title
      doc.setFontSize(24);
      doc.setTextColor(26, 54, 45); // #1A362D
      doc.text('Rayeva Pvt LMT', 20, 30);
      
      doc.setFontSize(16);
      doc.text('Website Analysis & Strategic Roadmap', 20, 40);
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Generated Report', 20, 50);

      // Section 1: Intro
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('1. Introduction', 20, 70);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const introText = "Rayeva is an emerging digital platform focused on promoting conscious consumerism by offering a curated range of eco-friendly and sustainable products. The platform aims to redefine everyday consumption by enabling users to make environmentally responsible choices through accessible and thoughtfully designed product offerings. The website positions itself as an all-access sustainability platform, integrating categories such as everyday essentials, recycling and upcycling solutions, plastic-free packaging, non-toxic products, and clean technology. Beyond commerce, Rayeva emphasizes measurable impact, highlighting its mission to create meaningful change for individuals, communities, and the planet.";
      doc.text(doc.splitTextToSize(introText, 170), 20, 80);

      // Section 2: UI/UX
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('2. UI/UX Analysis', 20, 130);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const uxText = "The current Rayeva website presents a strong vision around sustainability; however, the user experience and interface design do not effectively support trust-building, clarity, or conversion-driven behavior. Several inconsistencies across layout, visual hierarchy, and content structuring impact the overall usability of the platform.\n\n1. First Impression & Visual Clarity\nWhile the website communicates that it is focused on sustainable and eco-friendly products, this message is not conveyed clearly and immediately upon landing. The hero section creates confusion due to:\n- Use of a low-quality background video\n- Lack of a clear, concise headline\n- Weak visual contrast and hierarchy\n\n2. Trust & Credibility Issues\n- Inconsistent and unpolished UI elements\n- Overuse of decorative elements\n- Lack of strong trust indicators (Verified certifications, Customer reviews)";
      doc.text(doc.splitTextToSize(uxText, 170), 20, 140);

      doc.addPage();

      // Section 3: Product
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('3. Product & Category Analysis', 20, 30);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const productText = "The product discovery and categorization experience demonstrates intent toward structured browsing; however, the current implementation falls short in clarity, usability, and user trust.\n\n1. Category Structure & Discoverability\n- Categories are displayed using a mix of images, icons, and scrolling labels.\n- Absence of clear category descriptions or hierarchy.\n- Horizontal scrolling and crowded layout reduce scannability.\n\n2. Product Listing Experience\n- Inconsistent card layouts and spacing reduce visual clarity.\n- Product information appears stacked rather than structured.\n- Important elements like Pricing, Product benefits, and Sustainability tags are present but not visually prioritized.";
      doc.text(doc.splitTextToSize(productText, 170), 20, 40);

      // Section 4: Auth
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('4. Authentication (Login/Signup Analysis)', 20, 110);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const authText = "The authentication flow includes account creation, email verification via OTP, and login. While functional, it introduces unnecessary friction and cognitive load.\n\n- Forced Authentication Barrier: Users must log in before fully accessing or exploring products. This introduces unnecessary friction in the early exploration stage.\n- Role-Based User Experience: The platform differentiates users into Buyer, Seller, and Corporate. The execution creates confusion.\n- Seller/Corporate Onboarding: Users are immediately directed to a multi-step onboarding process requiring extensive business details upfront without prior value demonstration.";
      doc.text(doc.splitTextToSize(authText, 170), 20, 120);

      doc.addPage();

      // Section 5: SEO
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('5. SEO Analysis', 20, 30);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const seoText = "The platform has a basic technical foundation but lacks an active SEO strategy.\n\n- Content & Blog Presence: The blog currently displays a 'Coming Soon' message and contains no actual content. This results in no organic traffic generation through content.\n- Page Titles & Metadata: The page titles appear to be generic and repetitive, often showing only the brand name (e.g., 'Rayeva...').\n- Keyword Targeting: Keywords are not strongly reflected in content or structure. No visible keyword-driven pages or landing sections.";
      doc.text(doc.splitTextToSize(seoText, 170), 20, 40);

      // Section 6: Tech
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('6. Tech & Performance Analysis', 20, 100);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const techText = "Based on the platform behavior, the website demonstrates a partially functional architecture.\n\n- Functionality & Interaction Issues: Multiple product categories are displayed but remain unresponsive. Clickable items do not change the cursor from an arrow to a pointer.\n- Navigation & Redirection Errors: Privacy Policy, Terms of Service, Shipping & Returns, and FAQs redirect incorrectly to the homepage or contact page.\n- Mobile vs Desktop Experience: The platform appears to be more optimized for mobile devices than for desktop usage. Expandable sections do not function correctly on desktop.";
      doc.text(doc.splitTextToSize(techText, 170), 20, 110);

      doc.addPage();

      // Section 7: Roadmap
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 45);
      doc.text('7. Feature Roadmap', 20, 30);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const roadmapText = "To transform the Rayeva platform into a scalable, user-friendly, and growth-driven system, improvements should be implemented in phased stages.\n\nPhase 1: Foundation (MVP Fixes)\n- Redesign homepage (hero section, layout, visual hierarchy)\n- Fix broken links and non-functional elements\n- Enable guest browsing (remove forced login barrier)\n\nPhase 2: Growth & Engagement\n- Implement CRM system (email flows, onboarding, re-engagement)\n- Introduce advanced filters and improved product discovery\n- Add multiple authentication options (Google login, phone OTP)\n\nPhase 3: Advanced & Intelligent Features\n- AI-powered product recommendations\n- AI chatbot for product discovery\n- Sustainability scoring system for products";
      doc.text(doc.splitTextToSize(roadmapText, 170), 20, 40);

      doc.save('Rayeva_Analysis_Report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A362D] border border-[#1A362D]/10 rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105 shadow-sm disabled:opacity-70 disabled:hover:scale-100 ${className}`}
    >
      {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />} 
      {isDownloading ? 'Generating PDF...' : text}
    </button>
  );
}
