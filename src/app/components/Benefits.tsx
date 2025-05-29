'use client'

import Image from 'next/image'

export default function BenefitSection() {
  return (
    <section className="bg-white pt-12 pb-12">
      <div className="w-full text-center mb-5">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          Benefits of Having Your <br /> Marketing Outsourced to Us
        </h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 items-start">
        {/* Left Section */}
        <div className="w-full lg:flex-[4] text-center lg:text-left p-4 lg:pl-20">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="mb-3">
                {/* Icon: smaller on mobile, original size on desktop */}
                <div className="hidden md:block">
                  <Image src={"/cost.png"} alt="Cost effective" width={120} height={120} />
                </div>
                <div className="block md:hidden">
                  <Image src={"/cost.png"} alt="Cost effective" width={60} height={60} />
                </div>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-black">
                Cost effective
              </h4>
              <p className="text-base md:text-xl mt-2 text-black text-center">
                You don’t require additional employees for managing social media. It means fewer taxes and responsibilities.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3">
                <div className="hidden md:block">
                  <Image src={"/time.png"} alt="Time Saving" width={120} height={120} />
                </div>
                <div className="block md:hidden">
                  <Image src={"/time.png"} alt="Time Saving" width={60} height={60} />
                </div>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-black">
                Time Saving
              </h4>
              <p className="text-base md:text-xl mt-2 text-black text-center">
                No more stress handling your accounts. You can focus more on your business, and we will take care of your social media presence.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3">
                <div className="hidden md:block">
                  <Image src={"/guranteed.png"} alt="Expertise" width={120} height={120} />
                </div>
                <div className="block md:hidden">
                  <Image src={"/guranteed.png"} alt="Expertise" width={60} height={60} />
                </div>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-black">
                Expertise
              </h4>
              <p className="text-base md:text-xl mt-2 text-black text-center">
                As a team of experts accustomed to handling big clients, we ensure the same top-tier quality for your business.
              </p>
            </div>
          </div>
        </div>
        {/* bg-[#6045A5] */}

        {/* Right Section */}
        <div className="w-full lg:flex-[1] bg-[#6045A5] text-white rounded-3xl lg:rounded-l-3xl lg:rounded-r-none p-8 lg:mt-0 flex justify-center md:justify-center lg:justify-end">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl font-bold">2X</h4>
              <p className="mt-2 text-base md:text-lg">Reach and Engagement without using Paid Ads</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl font-bold">95%</h4>
              <p className="mt-2 text-base md:text-lg">of our clients see improved engagement in the first month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
