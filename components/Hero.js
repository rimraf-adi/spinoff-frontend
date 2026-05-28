import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-40 pb-[100px] px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center min-h-screen max-lg:pt-[140px] max-lg:px-6 max-lg:pb-[60px]"
    >
      {/* Left text */}
      <div className="max-w-[640px]">
        <h1 className="text-[clamp(48px,5.2vw,76px)] leading-[1.07] tracking-[-0.025em] mb-7 animate-[fadeUp_0.75s_ease_both]">
          Stay ahead of the
          <br />
          curve with our
          <br />
          forward-thinking
        </h1>
        <p className="text-[17px] text-gray-dark leading-[1.7] max-w-[480px] mb-10 animate-[fadeUp_0.75s_0.15s_ease_both]">
          An award-winning SEO agency with disciplines in digital marketing,
          design, and website development. Focused on understanding you.
        </p>
        <div className="flex items-center gap-7 animate-[fadeUp_0.75s_0.2s_ease_both]">
          <Link
            href="#cta"
            className="bg-black text-white border-none px-8 py-4 rounded-pill font-body text-[15px] font-medium cursor-pointer transition-all inline-flex items-center gap-2 no-underline hover:scale-[1.03] hover:bg-[#222]"
          >
            Schedule Call
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
          <Link
            href="#casestudies"
            className="underline underline-offset-4 font-body font-medium text-black text-[15px] cursor-pointer transition-opacity hover:opacity-70 no-underline [text-decoration:underline]"
          >
            View Case Study
          </Link>
        </div>

        {/* Trust logos */}
        <div className="mt-16 flex items-center gap-6 animate-[fadeUp_0.75s_0.3s_ease_both]">
          <span className="font-body text-xs text-gray-dark font-semibold uppercase tracking-[0.05em] leading-[1.4] max-w-[140px]">
            Trusted by the world&apos;s biggest brands
          </span>
          <div className="flex items-center gap-8">
            {/* Afterpay */}
            <div className="flex items-center text-[#8c8c88] transition-colors hover:text-black">
              <svg width="85" height="18" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.4 14.8c-.8 0-1.4-.2-1.9-.7-.5-.5-.7-1.1-.7-1.9v-7.2h1.8v7.2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7v-7.2h1.8v7.2c0 .8-.2 1.4-.7 1.9s-1.1.7-1.9.7zm9.4 0c-1 0-1.7-.3-2.3-.9V18h-1.8v-10.4h1.8v1.1c.6-.7 1.3-1.1 2.3-1.1 1 0 1.8.4 2.4 1.1s.9 1.8.9 3c0 1.2-.3 2.1-.9 2.9-.6.8-1.4 1.2-2.4 1.2zm-.3-1.6c.6 0 1.1-.2 1.4-.7s.5-1.1.5-1.9c0-.8-.2-1.4-.5-1.9s-.8-.7-1.4-.7c-.6 0-1.1.2-1.4.7s-.5 1.1-.5 1.9c0 .8.2 1.4.5 1.9.3.5.8.7 1.4.7zm8 1.6c-.6 0-1.1-.1-1.6-.4-.5-.3-.8-.7-1.1-1.3-.3-.6-.4-1.2-.4-1.9V11.2c0-.7.1-1.3.4-1.9.3-.6.6-1 1.1-1.3s1-.4 1.6-.4c.7 0 1.2.1 1.6.4s.8.7 1 1.2c.2.5.3 1.1.3 1.8v.5h-5.9v.7c0 .5.2.9.5 1.2s.7.5 1.2.5c.5 0 .9-.1 1.2-.4.3-.3.5-.6.6-1.1h1.7c-.1.7-.4 1.3-.9 1.8-.5.5-1.2.8-2 .8zm1.5-4.8c-.1-.5-.2-.9-.5-1.1s-.6-.4-1-.4c-.4 0-.8.1-1 .4s-.4.6-.5 1.1h3zm6.3 4.8c-.8 0-1.4-.2-1.9-.7-.5-.5-.7-1.1-.7-1.9v-5.2h-1.2V7.6h1.2V5.5h1.8v2.1h2v1.6h-2v5.2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7V11h1.8v3.8h-1.8v-.6c-.3.4-.6.7-1 .9-.2.1-.6.1-.9.1zm9.3.3c-1 0-1.7-.3-2.3-.9V18h-1.8v-10.4h1.8v1.1c.6-.7 1.3-1.1 2.3-1.1 1 0 1.8.4 2.4 1.1s.9 1.8.9 3c0 1.2-.3 2.1-.9 2.9-.6.8-1.4 1.2-2.4 1.2zm-.3-1.6c.6 0 1.1-.2 1.4-.7s.5-1.1.5-1.9c0-.8-.2-1.4-.5-1.9s-.8-.7-1.4-.7c-.6 0-1.1.2-1.4.7s-.5 1.1-.5 1.9c0 .8.2 1.4.5 1.9.3.5.8.7 1.4.7z"
                  fill="currentColor"
                />
                <path d="M72.5 14L81.5 5h-7.8l-9 9 9 9h7.8L72.5 14z" fill="currentColor" />
                <path d="M83.5 14L74.5 5h7.8l9 9-9 9h-7.8l9-9z" fill="currentColor" />
              </svg>
            </div>
            {/* Basecamp */}
            <div className="flex items-center text-[#8c8c88] transition-colors hover:text-black">
              <svg width="105" height="20" viewBox="0 0 105 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 6a4.5 4.5 0 00-4 2.5 3 3 0 00-3.5 3c0 1.6 1.3 3 3 3h9c1.6 0 3-1.4 3-3a3 3 0 00-3-3 4.5 4.5 0 00-4.5-2.5z"
                  fill="currentColor"
                />
                <circle cx="10" cy="11.5" r="0.8" fill="#f4f4f2" />
                <circle cx="13" cy="11.5" r="0.8" fill="#f4f4f2" />
                <path d="M10.5 13.5c0 .3.5.7 1 .7s1-.4 1-.7" stroke="#f4f4f2" strokeWidth="1.2" strokeLinecap="round" />
                <text x="24" y="16.5" fontFamily="var(--font-heading)" fontWeight="700" fontSize="14.5" fill="currentColor" letterSpacing="-0.02em">
                  Basecamp
                </text>
              </svg>
            </div>
            {/* Maze */}
            <div className="flex items-center text-[#8c8c88] transition-colors hover:text-black">
              <svg width="68" height="20" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 12c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8c-2 0-3.8-.8-5.1-2.1L12.5 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="24" y="17.5" fontFamily="var(--font-heading)" fontWeight="800" fontSize="16.5" fill="currentColor" letterSpacing="-0.03em">
                  maze
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right bento grid */}
      <div className="grid grid-cols-2 gap-4 animate-[fadeUp_0.75s_0.1s_ease_both] ml-auto w-full max-lg:max-w-full">
        {/* Wide card */}
        <div className="col-span-2 bg-card-dark rounded-[18px] p-[36px_32px] flex items-center justify-between gap-6 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] max-lg:flex-col max-lg:items-start">
          <div>
            <div className="font-heading text-[64px] font-extrabold text-white leading-none tracking-[-0.04em]">
              500<span className="text-green">+</span>
            </div>
            <div className="font-body text-sm text-[rgba(255,255,255,0.5)] leading-[1.5] max-w-[180px]">
              Brands scaled through social-first strategy
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-14">
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "20px", background: "#44962a" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "28px", background: "#52b42e" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "22px", background: "#44962a" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "38px", background: "#5ecf32" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "32px", background: "#52b42e" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "50px", background: "#5ecf32" }}></div>
            <div className="w-2.5 rounded-t transition-transform hover:scale-y-[1.12]" style={{ height: "44px", background: "#76d94c" }}></div>
          </div>
        </div>

        {/* 10M+ card */}
        <div className="bg-[#fff] border border-[rgba(0,0,0,0.06)] rounded-[18px] p-[28px_24px] relative overflow-hidden transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]">
          <div className="font-heading text-[44px] font-extrabold text-black leading-none tracking-[-0.04em] mb-2">
            10M<span className="text-green">+</span>
          </div>
          <div className="font-body text-[13px] text-gray-dark leading-[1.5]">
            Monthly impressions generated across platforms
          </div>
        </div>

        {/* 98% card */}
        <div className="bento-green bg-green rounded-[18px] p-[28px_24px] relative overflow-hidden transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]">
          <svg className="absolute top-5 right-5 w-12 h-12" viewBox="0 0 48 48">
            <circle className="ring-bg" cx="24" cy="24" r="22" />
            <circle className="ring-fill" cx="24" cy="24" r="22" transform="rotate(-90 24 24)" />
          </svg>
          <div className="font-heading text-[44px] font-extrabold text-black leading-none tracking-[-0.04em] mb-2">
            98%
          </div>
          <div className="font-body text-[13px] text-[rgba(0,0,0,0.6)] leading-[1.5]">
            Client retention rate year-over-year
          </div>
        </div>

        {/* 3x card */}
        <div className="bg-card-dark rounded-[18px] p-[28px_24px] relative overflow-hidden transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]">
          <div className="font-heading text-[44px] font-extrabold text-white leading-none tracking-[-0.04em] mb-2">
            3x<span className="text-green"></span>
          </div>
          <div className="font-body text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.5]">
            Average ROI on paid social campaigns
          </div>
        </div>

        {/* 50+ card */}
        <div className="bg-[#fff] border border-[rgba(0,0,0,0.06)] rounded-[18px] p-[28px_24px] relative overflow-hidden transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]">
          <div className="font-heading text-[44px] font-extrabold text-black leading-none tracking-[-0.04em] mb-2">
            50<span className="text-green">+</span>
          </div>
          <div className="font-body text-[13px] text-gray-dark leading-[1.5]">
            In-house creators &amp; strategists on your side
          </div>
        </div>
      </div>
    </section>
  );
}
