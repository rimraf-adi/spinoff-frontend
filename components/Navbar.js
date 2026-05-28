import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-12 py-4.5 bg-[rgba(245,245,243,0.85)] backdrop-blur-[14px] border-b border-[rgba(0,0,0,0.06)]">
      <Link href="#" className="flex items-center gap-2.5 font-heading font-extrabold text-[22px] no-underline text-black">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <rect width="32" height="32" rx="7" fill="#5ECF32" />
          <path
            d="M21 11a3 3 0 00-3-3h-4a3 3 0 00-3 3v1a3 3 0 003 3h4a3 3 0 013 3v2a3 3 0 01-3 3h-4a3 3 0 01-3-3"
            stroke="#0b0b0b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Spinoff.Studio
      </Link>

      <ul className="hidden lg:flex items-center gap-2 list-none">
        <li>
          <Link href="#" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            Services
          </Link>
        </li>
        <li>
          <Link href="#casestudies" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            Work
          </Link>
        </li>
        <li>
          <Link href="#casestudies" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            Results
          </Link>
        </li>
        <li>
          <Link href="#cta" className="flex items-center gap-1 no-underline text-black font-body text-[14.5px] font-medium px-4 py-2 rounded-pill transition-colors hover:bg-[rgba(0,0,0,0.06)]">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <Link
          href="#cta"
          className="bg-transparent text-black border-[1.5px] border-black px-[26px] py-3 rounded-pill font-body text-[14.5px] font-medium cursor-pointer transition-all inline-flex items-center gap-2 no-underline hover:bg-black hover:text-white"
        >
          Book a Call
        </Link>
        <button className="w-11 h-11 rounded-full bg-black border-none cursor-pointer flex items-center justify-center relative transition-transform hover:scale-105">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-3 right-3 w-[7px] h-[7px] bg-green rounded-full border border-black"></span>
        </button>
      </div>
    </nav>
  );
}
