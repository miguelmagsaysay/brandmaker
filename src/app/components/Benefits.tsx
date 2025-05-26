'use client'

import Image from 'next/image'

export default function BenefitSection() {
  return (
    <section className="bg-[#6045A5]">
      <div className="w-full text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Benefits of Having Your <br /> Marketing Outsourced to Us
        </h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 items-start">
        {/* Left Section */}
        <div className="w-full lg:flex-[4] text-center lg:text-left pl-20 pb-20">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <Image src={"/cost.png"} alt="Cost effective" width={120} height={120} />
              </div>
              <h4 className="text-3xl font-bold text-white dark:text-white">
                Cost effective
              </h4>
              <p className="text-xl mt-2 text-white text-center">
                You don't require additional employees for managing social media. It means fewer taxes and responsibilities.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3">
                <Image src={"/time.png"} alt="Time Saving" width={120} height={120} />
              </div>
              <h4 className="text-3xl font-bold text-white dark:text-white">
                Time Saving
              </h4>
              <p className="text-xl mt-2 text-white text-center">
                No more stress handling your accounts. You can focus more on your business, and we will take care of your social media presence.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3">
                <Image src={"/guranteed.png"} alt="Expertise" width={120} height={120} />
              </div>
              <h4 className="text-3xl font-bold text-white dark:text-white">
                Expertise
              </h4>
              <p className="text-xl mt-2 text-white text-center">
                As a team of experts accustomed to handling big clients, we ensure the same top-tier quality for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:flex-[1] bg-black text-white rounded-l-3xl p-8 pr-0.5 mt-12 lg:mt-0 flex justify-end">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h4 className="text-5xl font-bold">2X</h4>
              <p className="mt-2 text-lg">Reach and Engagement without using Paid Ads</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h4 className="text-5xl font-bold">95%</h4>
              <p className="mt-2 text-lg">of our clients see improved engagement in the first month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}