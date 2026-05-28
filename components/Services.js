"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    dot: "#4fba2a",
    num: "01",
    title: "Social Media Management",
    desc: "End-to-end ownership of social channels. We build, grow, and manage your community presence natively.",
    tags: ["Strategy", "Calendars", "Community"],
  },
  {
    dot: "#ff7043",
    num: "02",
    title: "Content & Reels",
    desc: "Native-first short-form content designed to stop the scroll.",
    tags: ["Reels", "Carousels", "Storytelling"],
  },
  {
    dot: "#9c27b0",
    num: "03",
    title: "Paid Advertising",
    desc: "Performance-focused campaigns engineered for maximum return.",
    tags: ["Full-funnel", "Paid Growth"],
  },
  {
    dot: "#e91e63",
    num: "04",
    title: "Brand Strategy & Identity",
    desc: "Scalable brand systems and visual identities designed specifically for modern algorithmic platforms.",
    tags: ["Positioning", "Tone & Voice", "Systems"],
  },
  {
    dot: "#00bcd4",
    num: "05",
    title: "LinkedIn Marketing",
    desc: "High-impact authority building and thought leadership for founders and executives.",
    tags: ["Ghostwriting", "Thought Leader", "Pages"],
  },
  {
    dot: "#ffeb3b",
    num: "06",
    title: "Influencer & Community",
    desc: "Community-led growth campaigns leveraging high-converting creator partnerships.",
    tags: ["Creator Collabs", "Audience", "Amplification"],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-[120px] px-12 max-lg:px-6 bg-[#f6f5f2]"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="reveal mb-20">
          <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-green mb-6">
            • 02 / Services •
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <h2 className="text-[clamp(42px,5vw,72px)] text-black font-extrabold tracking-[-0.03em] leading-[1.05] max-w-[800px]">
              Everything you need to go big on social.
            </h2>
            <div className="flex flex-col items-start lg:items-end gap-8 max-w-[440px]">
              <p className="text-[17px] leading-[1.65] text-gray-dark lg:text-right">
                We deploy full-service social systems for creators and modern brands
                looking to scale. Performance creative execution backed by strategic
                category-defining positioning.
              </p>
              <Link
                href="#cta"
                className="bg-black text-white px-8 py-4 rounded-pill font-body text-[15px] font-bold cursor-pointer transition-transform inline-flex items-center gap-3 no-underline hover:scale-[1.03] shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              >
                Scale My Brand
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h12M11 5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetric Bento Grid with Hover Reveal */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            // Determine column span for asymmetric layout
            // Sequence: 2, 1, 1, 2, 2, 1
            const isWide = i === 0 || i === 3 || i === 4;
            
            return (
              <div
                key={i}
                className={`group bg-white rounded-[24px] p-8 lg:p-10 border border-[rgba(0,0,0,0.06)] relative overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] flex flex-col justify-between min-h-[300px] ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Decorative background gradient that reveals on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle at bottom right, ${s.dot} 0%, transparent 70%)` }}
                ></div>

                {/* Top Section: Number and Dot */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="font-heading font-extrabold text-[20px] text-[rgba(0,0,0,0.15)] group-hover:text-black transition-colors duration-300">
                    {s.num}
                  </div>
                  <div 
                    className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-150" 
                    style={{ backgroundColor: s.dot }}
                  ></div>
                </div>

                {/* Bottom Section: Title and Reveal Content */}
                <div className="relative z-10 flex flex-col justify-end pt-12">
                  <h3 className="font-heading text-[28px] md:text-[36px] font-extrabold text-black leading-[1.1] tracking-tight">
                    {s.title}
                  </h3>
                  
                  {/* CSS Grid Accordion Trick for Smooth Slide Up */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="pt-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-[16px] text-gray-dark leading-[1.6]">
                          {s.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 bg-[#f6f5f2] group-hover:bg-white border border-[rgba(0,0,0,0.05)] text-gray-dark rounded-full transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
