'use client'

import Image from 'next/image'

const brands = [
  { src: '/brands/rb.png', alt: 'RB Logo' },
  { src: '/brands/fusion.png', alt: 'Fusion Logo' },
  { src: '/brands/HP.png', alt: 'Harbor Point Logo' },
  { src: '/brands/SS.png', alt: 'Sunset Swing Logo' },
  { src: '/brands/echowin.png', alt: 'EchoWin Logo' },
  { src: '/brands/rotonda.png', alt: 'Rotonda Logo' },
  { src: '/brands/LVT.png', alt: 'LVT Logo' },
  { src: '/brands/sast.png', alt: 'SAST Logo' },
  { src: '/brands/bb.png', alt: 'BB Logo' },
]

export default function Clients() {
  return (
    <section className="bg-[#6045A5] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Trusted by <span className="text-[#6C3DFF]">20+</span> clients worldwide
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-10 md:justify-around">
          {brands.map((brand, index) => (
            <div key={index} className="opacity-80 hover:opacity-100 transition">
              <Image src={brand.src} alt={brand.alt} width={108} height={29} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
