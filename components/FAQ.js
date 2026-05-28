"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const faqData = [
  {
    question: "What is Spinoff's brand philosophy?",
    answer:
      "We exist for ambitious founders and creators who refuse to look like everyone else in their category. We engineer brand systems to stand out natively, be recognized instantly, and be remembered consistently.",
  },
  {
    question: "How do you ensure high execution velocity?",
    answer:
      "We work in rapid, weekly iteration cycles with absolute direct access to our senior execution team. We have zero middle-layer account managers, meaning details aren't lost in translation and strategies ship instantly.",
  },
  {
    question: 'What does "platform-native" content mean?',
    answer:
      "It means no templates and no generic posts. Every Reels video, carousel graphic, and LinkedIn thread is custom-designed using the specific, scroll-stopping hooks and layout systems that the platform algorithms prioritize.",
  },
  {
    question: "Do you focus on conversions or vanity metrics?",
    answer:
      "We make data-led creative decisions focused entirely on brand authority and full-funnel paid social campaigns. Our metrics translate to organic page growth, direct inbound collaboration DMs, and high-impact conversions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
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

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-[90px] px-12 bg-[#fff] rounded-[40px] mx-6 mb-6 max-lg:px-6"
    >
      <div className="reveal grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[100px] items-start max-lg:gap-12">
        {/* Left */}
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-green mb-3">
            • 05 / Why Spinoff •
          </div>
          <h2 className="text-[clamp(34px,3vw,48px)] tracking-[-0.03em] mb-6 leading-[1.1]">
            Other agencies post.
            <br />
            We position.
          </h2>
          <p className="text-[15px] leading-[1.75] text-gray-dark mt-4 mb-8">
            We exist for founders who refuse to look like everyone else in their
            category. We engineer brands to be recognized — then remembered.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#cta"
              className="bg-transparent text-black border-[1.5px] border-black px-[26px] py-3 rounded-pill font-body text-[14.5px] font-medium cursor-pointer transition-all inline-flex items-center gap-2 no-underline hover:bg-black hover:text-white"
            >
              Work with Us
            </Link>
          </div>
        </div>

        {/* Right - FAQ items */}
        <div>
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq-item border-t border-[rgba(0,0,0,0.1)] ${
                i === faqData.length - 1
                  ? "border-b border-b-[rgba(0,0,0,0.1)]"
                  : ""
              } ${openIndex === i ? "open" : ""}`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full bg-none border-none py-7 text-left font-heading text-lg font-bold cursor-pointer flex justify-between items-start gap-5 tracking-[-0.01em] leading-[1.35]"
              >
                {item.question}
                <span className="min-w-[30px] h-[30px] rounded-full border-[1.5px] border-[rgba(0,0,0,0.2)] flex items-center justify-center text-xl leading-none text-black transition-all duration-[250ms] shrink-0 mt-0.5">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p className="text-[15px] leading-[1.75] text-gray-dark">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
