"use client";

import { useState, useEffect, useRef } from "react";

const caseStudies = [
  {
    meta: "Shubhranshu Singh · LinkedIn",
    gradient: "linear-gradient(145deg, rgba(79,186,42,0.15) 0%, rgba(0,0,0,0) 100%)",
    accent: "#4fba2a",
    title: "+3.8% Average Engagement",
    desc: "Sustained above LinkedIn's 2% benchmark using custom systems. Consistent daily growth.",
  },
  {
    meta: "Swati Paliwal (ReSO) · AI/SaaS",
    gradient: "linear-gradient(145deg, rgba(77, 163, 255, 0.15) 0%, rgba(0,0,0,0) 100%)",
    accent: "#4da3ff",
    title: "6.8K+ Impressions / Post",
    desc: "Generated inbound collaboration DMs through thought leadership.",
  },
  {
    meta: "Ashutosh (Software Club) · Organic",
    gradient: "linear-gradient(145deg, rgba(156, 39, 176, 0.15) 0%, rgba(0,0,0,0) 100%)",
    accent: "#9c27b0",
    title: "11.4K Single Post Reach",
    desc: "Tripled page follower count organically via native storytelling.",
  },
];

const tabs = ["All Work", "Instagram", "LinkedIn", "Reels", "Posts"];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All Work");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="casestudies"
      ref={sectionRef}
      className="py-[120px] bg-[#0c0c0c] w-full relative overflow-hidden mt-12 mb-12"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(79,186,42,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-12 max-lg:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="reveal flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12 border-b border-[rgba(255,255,255,0.1)] pb-12">
          <div className="max-w-[640px]">
            <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-green mb-5">
              • 03 / Work & Results •
            </div>
            <h2 className="text-[clamp(42px,5vw,72px)] text-white font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
              Proof is in the performance.
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] text-[17px] leading-[1.6] max-w-[480px]">
              Real reels, real carousels, real LinkedIn campaigns — shipped and
              scaled for founders, creators, and brands.
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto w-full lg:w-auto pb-2 hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[15px] font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap pb-2 border-b-2 ${
                  activeTab === tab
                    ? "text-white border-green"
                    : "text-[rgba(255,255,255,0.3)] border-transparent hover:text-[rgba(255,255,255,0.7)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Case Study 1: Large Featured Card */}
          <div 
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-[#121311] border border-[rgba(255,255,255,0.06)] rounded-[24px] p-10 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] group cursor-pointer"
          >
            <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ background: caseStudies[0].gradient }}></div>
            <div className="relative z-10 flex justify-between items-start mb-24">
              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-white flex items-center gap-2 border border-[rgba(255,255,255,0.1)]">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: caseStudies[0].accent }}></div>
                {caseStudies[0].meta.split(' · ')[1]}
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-0.5 -translate-y-0.5">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.5)] mb-3">{caseStudies[0].meta.split(' · ')[0]}</div>
              <h3 className="font-heading text-[clamp(28px,3vw,42px)] font-bold text-white leading-[1.1] mb-4 group-hover:text-green transition-colors">{caseStudies[0].title}</h3>
              <p className="text-[16px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-[90%]">{caseStudies[0].desc}</p>
            </div>
          </div>

          {/* Case Study 2: Wide Card */}
          <div 
            className="md:col-span-2 lg:col-span-2 bg-[#121311] border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] group cursor-pointer"
          >
            <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ background: caseStudies[1].gradient }}></div>
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-white flex items-center gap-2 border border-[rgba(255,255,255,0.1)]">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: caseStudies[1].accent }}></div>
                {caseStudies[1].meta.split(' · ')[1]}
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-0.5 -translate-y-0.5">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-end">
              <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.5)]">{caseStudies[1].meta.split(' · ')[0]}</div>
              <div>
                <h3 className="font-heading text-[24px] font-bold text-white leading-[1.2] mb-2">{caseStudies[1].title}</h3>
                <p className="text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5]">{caseStudies[1].desc}</p>
              </div>
            </div>
          </div>

          {/* Case Study 3: Wide Card */}
          <div 
            className="md:col-span-2 lg:col-span-2 bg-[#121311] border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] group cursor-pointer"
          >
            <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ background: caseStudies[2].gradient }}></div>
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase text-white flex items-center gap-2 border border-[rgba(255,255,255,0.1)]">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: caseStudies[2].accent }}></div>
                {caseStudies[2].meta.split(' · ')[1]}
              </div>
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-x-0.5 -translate-y-0.5">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-end">
              <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.5)]">{caseStudies[2].meta.split(' · ')[0]}</div>
              <div>
                <h3 className="font-heading text-[24px] font-bold text-white leading-[1.2] mb-2">{caseStudies[2].title}</h3>
                <p className="text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5]">{caseStudies[2].desc}</p>
              </div>
            </div>
          </div>

          {/* Outcome Stat: Title block */}
          <div className="col-span-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px]">
             <h4 className="font-heading text-[20px] font-bold text-white mb-2">Impact</h4>
             <p className="text-[rgba(255,255,255,0.5)] text-[13px] leading-[1.6]">Aggregated metrics across this quarter's client portfolios.</p>
          </div>

          {/* Outcome Stat 1 */}
          <div className="col-span-1 bg-[#121311] border border-green/30 rounded-[24px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-[42px] font-heading font-extrabold text-green leading-none mb-2">+340</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.5)] font-bold uppercase tracking-[0.1em]">Follower Growth</div>
          </div>

          {/* Outcome Stat 2 */}
          <div className="col-span-1 bg-[#121311] border border-[#4da3ff]/30 rounded-[24px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#4da3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-[42px] font-heading font-extrabold text-[#4da3ff] leading-none mb-2">22K</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.5)] font-bold uppercase tracking-[0.1em]">Total Impressions</div>
          </div>

          {/* Outcome Stat 3 */}
          <div className="col-span-1 bg-[#121311] border border-[#9c27b0]/30 rounded-[24px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#9c27b0]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-[42px] font-heading font-extrabold text-[#9c27b0] leading-none mb-2">+18%</div>
            <div className="text-[11px] text-[rgba(255,255,255,0.5)] font-bold uppercase tracking-[0.1em]">Growth Campaigns</div>
          </div>

        </div>

      </div>
    </section>
  );
}
