'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Social Media Management',
    description:
      'We create and manage content that builds engagement, grows your audience, and drives results.',
    image: '/graphic-3.png',
  },
  {
    title: 'Branding & Rebranding',
    description:
      'We craft logos, brand identity, and brand strategy that reflect who you are and what you stand for.',
    image: '/graphic-2.png',
  },
  {
    title: 'Content Creation',
    description:
      'Photos, reels, and video ads tailored for platforms like Instagram, TikTok, and Facebook.',
    image: '/graphic-4.png',
  },
  {
    title: 'Marketing Consultancy',
    description:
      'We help businesses identify gaps, refine strategies, and unlock growth through practical, data-driven marketing guidance.',
    image: '/graphic-5.png',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-center text-black">
        What We Do Best
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl p-6 shadow-[0_4px_15px_rgba(108,61,255,0.15)] flex flex-col md:flex-row items-center md:items-start"
          >
            {/* Accent shape behind content */}
            <div className="hidden md:block absolute top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-[#6C3DFF] to-[#A78BFA] opacity-20 blur-3xl -z-10 pointer-events-none"></div>

            <div className="md:w-2/3">
              <h3 className="text-3xl font-semibold text-black mb-4 text-center md:text-left">
                {service.title}
              </h3>
              <p className="text-black text-center md:text-left">{service.description}</p>
            </div>

            {/* Hide images on small screens */}
            <div className="hidden md:flex md:w-1/3 justify-center -mr-8 relative z-10">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={250}
                className="object-contain scale-[1.4] mb-5"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
