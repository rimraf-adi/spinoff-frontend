import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-[90px] px-12 pb-10 max-lg:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[60px] mb-16 max-lg:grid-cols-2 max-lg:gap-10">
        {/* Brand */}
        <div>
          <Link href="#" className="flex items-center gap-2.5 font-heading font-extrabold text-[22px] no-underline text-black">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <rect width="32" height="32" rx="7" fill="#4FBA2A" />
              <path
                d="M21 11a3 3 0 00-3-3h-4a3 3 0 00-3 3v1a3 3 0 003 3h4a3 3 0 013 3v2a3 3 0 01-3 3h-4a3 3 0 01-3-3"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Spinoff.Studio
          </Link>
          <p className="text-sm leading-[1.75] text-gray-dark mt-6 mb-8 max-w-[340px]">
            Spinoff Studio is a growth-focused social media agency helping
            founders, creators, and modern brands scale through platform-native
            content, strategic positioning, and performance-driven creative
            execution.
          </p>
          <div className="flex gap-2.5">
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="w-10 h-10 rounded-full border-[1.5px] border-[rgba(0,0,0,0.15)] bg-transparent flex items-center justify-center cursor-pointer transition-all no-underline text-black hover:bg-black hover:border-black hover:text-white group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 3h4.5v10H2V3zm0 0a2.25 2.25 0 114.5 0M6.5 8H14m0 0v5H6.5V8M14 8a3.5 3.5 0 00-7 0"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {/* Instagram */}
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="w-10 h-10 rounded-full border-[1.5px] border-[rgba(0,0,0,0.15)] bg-transparent flex items-center justify-center cursor-pointer transition-all no-underline text-black hover:bg-black hover:border-black hover:text-white group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading text-[15px] font-bold mb-6 tracking-[-0.01em]">
            Navigation
          </h4>
          <ul className="list-none flex flex-col gap-3.5">
            <li>
              <Link href="#" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="#casestudies" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Work
              </Link>
            </li>
            <li>
              <Link href="#casestudies" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Results
              </Link>
            </li>
            <li>
              <Link href="#cta" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Licence */}
        <div>
          <h4 className="font-heading text-[15px] font-bold mb-6 tracking-[-0.01em]">
            Licence
          </h4>
          <ul className="list-none flex flex-col gap-3.5">
            <li>
              <Link href="#" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Copyright Details
              </Link>
            </li>
            <li>
              <Link href="#" className="no-underline text-gray-dark font-body text-[14.5px] transition-colors hover:text-black">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-[15px] font-bold mb-6 tracking-[-0.01em]">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 font-body text-sm text-gray-dark leading-[1.55]">
              <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm0 0l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              hello@spinoff.studio
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[rgba(0,0,0,0.08)] pt-7 flex justify-between items-center">
        <p className="font-body text-[13px] text-gray-dark">
          © 2026 Spinoff Studio. All rights reserved.
        </p>
        <p className="font-body text-[13px] text-gray-dark">
          Where Brands Get Built.
        </p>
      </div>
    </footer>
  );
}
