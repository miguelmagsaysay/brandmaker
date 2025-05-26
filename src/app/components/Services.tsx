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
    <section className="bg-[#6045A5] py-16 px-6 md:px-12">
  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-center text-white">
    What We Do Best
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-5xl mx-auto">
    {services.map((service, index) => (
     <div
     key={index}
     className="bg-white rounded-lg flex flex-col md:flex-row justify-between shadow-md hover:shadow-lg transition relative overflow-visible"
   >
     <div className="md:w-2/3 p-6">
       <h3 className="text-4xl font-semibold text-[#6045A5] mb-4 text-center">
         {service.title}
       </h3>
       <p className="text-gray-600 text-center">{service.description}</p>
     </div>
     <div className="md:w-1/3 flex justify-center -mr-8 relative z-10">
       <Image
         src={service.image}
         alt={service.title}
         width={300}
         height={250}
         className="object-contain scale-140 mb-5"
       />
     </div>
   </div>
   
    ))}
  </div>
</section>

  )
}
