"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTA() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="mx-6 bg-card-dark rounded-[32px] p-[80px_72px] flex flex-wrap items-start justify-between gap-12 relative overflow-hidden max-lg:flex-col max-lg:text-center max-lg:p-[60px_32px]"
    >
      {/* Green glow */}
      <div className="absolute -top-20 left-[30%] w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_top_left,rgba(79,186,42,0.2)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Left */}
      <div className="reveal flex-[1.2] min-w-[280px]">
        <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-green mb-4">
          • 07 / Contact •
        </div>
        <h2 className="text-[clamp(34px,4vw,56px)] text-white font-extrabold tracking-[-0.03em] leading-[1.1] mb-6">
          Ready to spin things up?
        </h2>
        <p className="text-[rgba(255,255,255,0.6)] mb-8 max-w-[480px] text-base leading-[1.7]">
          Let&apos;s talk about your brand, your goals, and how we scale you.
        </p>
        <Link
          href="https://calendly.com/"
          target="_blank"
          className="bg-green text-black font-bold px-8 py-4 rounded-pill font-body text-[14.5px] cursor-pointer transition-all inline-flex items-center gap-2 no-underline hover:scale-[1.03]"
        >
          Book a Discovery Call
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

      {/* Right - Form */}
      <div className="reveal flex-1 min-w-[280px] max-w-[520px] w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="flex-1 min-w-[130px] p-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-body text-sm outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 min-w-[130px] p-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-body text-sm outline-none transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Brand / Company"
            required
            className="p-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-body text-sm outline-none transition-colors"
          />
          <select
            required
            defaultValue=""
            className="p-4 rounded-xl bg-[rgba(25,25,25,0.95)] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] font-body text-sm outline-none cursor-pointer transition-colors"
          >
            <option value="" disabled>
              Service Interested In
            </option>
            <option value="social-media">Social Media Management</option>
            <option value="content-creation">Content Creation & Reels</option>
            <option value="paid-social">Paid Social Advertising</option>
            <option value="brand-strategy">Brand Strategy & Identity</option>
            <option value="linkedin">LinkedIn Marketing</option>
            <option value="influencer">Influencer & Community</option>
          </select>
          <textarea
            placeholder="Message"
            rows="3"
            required
            className="p-4 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-body text-sm outline-none resize-none transition-colors"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black font-bold p-4 rounded-pill font-body text-[14.5px] cursor-pointer transition-transform border-none inline-flex items-center justify-center gap-2 hover:scale-[1.03]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
