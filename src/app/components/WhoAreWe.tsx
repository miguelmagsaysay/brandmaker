'use client'

import Image from 'next/image'

export default function WhoAreWe() {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Illustration - visible on the left on large screens */}
        <div className="hidden sm:flex justify-center md:justify-start order-1">
          <Image
            src="/graphic-2.png"
            alt="Marketing illustration"
            width={320}
            height={270}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
          />
        </div>

        {/* Text Content */}
        <div className="relative flex flex-col justify-center items-center text-center md:text-left px-4 sm:px-0 order-2">
          {/* Accent circle */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-[#6C3DFF] to-[#A78BFA] opacity-20 blur-3xl -z-10 pointer-events-none"></div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Who Are We
          </h1>
          <p className="text-lg mb-8 whitespace-pre-line relative z-10">
            We&apos;re Brand Maker, a digital marketing agency based in Subic Bay, Philippines. We help businesses grow through smart branding, engaging content, and results-driven social media.
            <br /><br />
            Founded in March 2024, we started small and quickly scaled by building strong partnerships. Within our first month, we landed clients like Xtremely Xpresso and Ayala Malls Harbor Point.
            <br /><br />
            Today, we&apos;re one of the leading agencies in Subic and now work with U.S. tech companies like Pomelo, Collective, Mindkeep AI, and more. With a scalable model and proven results, Brand Maker is ready to go global.
          </p>

          <div className="flex justify-center md:justify-start relative z-10">
            <a href="/get-a-quote">
              <button className="relative bg-[#6C3DFF] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#5733c8] transition overflow-hidden">
                <span className="z-10 relative">Meet the Team</span>
                <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#6C3DFF] via-[#A78BFA] to-[#6C3DFF] opacity-30 blur-lg"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
