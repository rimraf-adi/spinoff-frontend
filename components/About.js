"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-[140px] px-12 border-t border-[rgba(0,0,0,0.05)] max-lg:px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Dynamic Inline Typographic Header */}
        <div className="reveal mb-24">
          <h2 className="text-[clamp(44px,6vw,92px)] font-heading font-extrabold tracking-[-0.035em] leading-[1.08] text-black max-w-[1200px]">
            Provide the best service
            <span className="inline-flex items-center justify-center align-middle mx-3 md:mx-6 w-[180px] h-[56px] md:w-[320px] md:h-[88px] bg-[#e9e9e5] rounded-full relative overflow-hidden group cursor-pointer border-[4px] border-white shadow-inner">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
               <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:bg-green transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-6 md:h-6 ml-1 transition-colors duration-300 group-hover:fill-white">
                    <path d="M8 5l11 7-11 7V5z" fill="currentColor" />
                  </svg>
               </div>
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-end pr-8 transition-opacity duration-300 hidden md:flex">
                 <span className="text-[11px] font-bold uppercase tracking-widest text-black">Play Reel</span>
               </div>
            </span>
            with out of the box ideas.
          </h2>
        </div>

        {/* Split Info Section */}
        <div className="reveal flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8">
          
          {/* Paragraph Context */}
          <div className="max-w-[500px] pt-4">
            <p className="text-[17px] leading-[1.7] text-gray-dark font-medium mb-10">
              We are a passionate team of digital marketing enthusiasts dedicated to
              helping businesses succeed in the digital world. With years of
              experience and a deep understanding of the ever-evolving online
              landscape, we stay at the forefront of industry trends and
              technologies to keep you ahead of the curve.
            </p>
            
            <div className="flex items-center gap-6">
               <button className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors group">
                 <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="group-hover:rotate-45 transition-transform duration-300">
                   <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </button>
               <span className="text-[14px] font-bold uppercase tracking-wider text-black">Learn More About Us</span>
            </div>
          </div>

          {/* Integrated Stats Area (replaces the dark card) */}
          <div className="flex-1 flex justify-start lg:justify-end w-full">
            <div className="relative flex items-center gap-10">
               
               {/* Decorative Ring */}
               <div className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2">
                 <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="animate-[spin_20s_linear_infinite] opacity-20">
                    <circle cx="60" cy="60" r="58" stroke="black" strokeWidth="2" strokeDasharray="12 12" />
                 </svg>
               </div>

               <div>
                 <div className="font-heading text-[120px] xl:text-[160px] font-extrabold text-black leading-none tracking-tighter mb-2 relative">
                   920<span className="text-green relative -top-4 md:-top-8 text-[80px] xl:text-[120px]">+</span>
                 </div>
                 
                 <div className="flex items-center gap-6 max-w-[320px]">
                    {/* Avatars */}
                    <div className="flex items-center shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#bfbfbb] border-2 border-white -mr-3 z-40"></div>
                      <div className="w-10 h-10 rounded-full bg-[#eae9e5] border-2 border-white -mr-3 z-30"></div>
                      <div className="w-10 h-10 rounded-full bg-[#c3c3bf] border-2 border-white -mr-3 z-20"></div>
                      <div className="w-10 h-10 rounded-full bg-[#f6f5f2] border-2 border-white flex items-center justify-center text-gray-dark text-xs font-bold z-10 shadow-sm">
                        +
                      </div>
                    </div>
                    <p className="text-[14px] text-gray-dark font-medium leading-[1.5]">
                      Projects finished with superbly executed campaigns.
                    </p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
