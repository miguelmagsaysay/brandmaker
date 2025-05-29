'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-[#6045A5] text-white py-18 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Help Brands Stand Out and Sell More
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            As a business owner, you&apos;ve got enough on your plate. Managing your own marketing is like taking on another full-time job! Not every business needs a full-time marketing team—Let us handle it and save on costs while still getting expert results.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="/get-a-quote"
              className="bg-white text-[#6045A5] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Get a Quote
            </a>

            <a
              href="/contact"
              className="bg-transparent border border-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-[#6045A5] transition inline-flex items-center justify-center"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/hero-image.png"
            alt="Marketing illustration"
            width={600}
            height={400}
            className="w-full max-w-[500px] md:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  )
}
