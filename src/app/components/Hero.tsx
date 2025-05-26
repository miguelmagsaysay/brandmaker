'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-[#6045A5] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            We Help Brands Stand Out and Sell More
          </h1>
          <p className="text-lg mb-8 px-4 sm:px-0">
            As a business owner, you’ve got enough on your plate. Managing your own marketing is like taking on another full-time job! Not every business needs a full-time marketing team—Let us handle it and save on costs while still getting expert results.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="/get-a-quote">
              <button className="relative bg-white text-[#6C3DFF] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition overflow-hidden">
                <span className="z-10 relative">Get a quote</span>
                <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#6C3DFF] via-[#A78BFA] to-[#6C3DFF] opacity-20 blur-lg"></span>
              </button>
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-10 md:mt-0">
          <Image
            src="/hero-image.png"
            alt="Marketing illustration"
            width={320}
            height={270}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  )
}
