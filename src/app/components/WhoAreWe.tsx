'use client'

import Image from 'next/image'

export default function WhoAreWe() {
  return (
    <section className="bg-[#6045A5] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Illustration */}
        <div className="flex justify-center mt-10 md:mt-0">
          <Image
            src="/graphic-2.png"
            alt="Marketing illustration"
            width={320}
            height={270}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
           Who Are We
          </h1>
          <p className="text-lg mb-8 px-4 sm:px-0">
  We&apos;re Brand Maker, a digital marketing agency based in Subic Bay, Philippines. We help businesses grow through smart branding, engaging content, and results-driven social media.<br /><br />

  Founded in March 2024, we started small and quickly scaled by building strong partnerships. Within our first month, we landed clients like Xtremely Xpresso and Ayala Malls Harbor Point.<br /><br />

  Today, we&apos;re one of the leading agencies in Subic and now work with U.S. tech companies like Pomelo, Collective, Mindkeep AI, and more.<br /><br />

  With a scalable model and proven results, Brand Maker is ready to go global.
</p>

          <div className="flex justify-center md:justify-start">
            <a href="/get-a-quote">
              <button className="relative bg-white text-[#6C3DFF] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition overflow-hidden">
                <span className="z-10 relative">Meet the Team</span>
                <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#6C3DFF] via-[#A78BFA] to-[#6C3DFF] opacity-20 blur-lg"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
