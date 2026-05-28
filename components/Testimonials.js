"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      '\u201CSpinoff Studio completely transformed our organic growth. Their LinkedIn authority systems and native short-form content generated massive brand equity. Relentless execution!\u201D',
    name: "Shubhranshu Singh",
    role: "Founder & Thought Leader",
  },
  {
    quote:
      '\u201CThey engineered our brand to stand out rather than blend in. Their platform-native video reels and high-impact carousels stop the scroll every single time.\u201D',
    name: "Swati Paliwal",
    role: "Founder of ReSO",
  },
  {
    quote:
      '\u201CWe scaled our community presence by 3x organically in record time. Spinoff operates with high execution velocity and has no middle-layer account managers. Direct, elite execution.\u201D',
    name: "Ashutosh",
    role: "Head of Software Club",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
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

  const next = () => setIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-[100px] px-12 max-lg:px-6"
    >
      <div className="reveal max-w-[900px]">
        <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-green mb-6">
          • 06 / Client Love •
        </div>
        <h2 className="text-[clamp(32px,3.5vw,48px)] mb-12 font-extrabold tracking-[-0.03em]">
          Words from teams we&apos;ve spun off.
        </h2>
        <div className="font-heading text-[clamp(24px,2.8vw,40px)] font-bold tracking-[-0.02em] leading-[1.3] mb-13 text-black">
          {t.quote}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-6">
          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className="w-13 h-13 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #4fba2a 0%, #0c0c0c 100%)",
              }}
            ></div>
            <div>
              <div className="font-heading text-base font-bold">
                {t.name}
              </div>
              <div className="font-body text-sm text-gray-dark mt-[3px]">
                {t.role}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-13 h-13 rounded-full border-[1.5px] border-[rgba(0,0,0,0.15)] bg-transparent cursor-pointer flex items-center justify-center transition-all hover:bg-black hover:border-black group"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11 4L6 9l5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </button>
            <span className="font-heading text-sm font-bold">
              <span className="border-b-2 border-black">
                {String(idx + 1).padStart(2, "0")}
              </span>
              /{String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="w-13 h-13 rounded-full bg-black cursor-pointer flex items-center justify-center transition-all hover:bg-black border-none"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7 4l5 5-5 5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
