import React from "react";

export function Footer() {
  return (
    <div className="bg-[#6045A5] text-white py-16 px-6 lg:px-20">
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
      Let&apos;s Build Your Brand Together
    </h2>
    <div className="border-t border-white w-16 mx-auto mb-12" />
  
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      {/* Left Column */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact us</h3>
        <p className="mb-2">info@brandmaker.marketing</p>
        <p className="mb-2">+63 912 345 6789</p>
        <p className="mb-6">Based in Subic Bay, Philippines</p>
  
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="bg-white text-[#6045A5] rounded-full p-2 hover:bg-gray-200 transition"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.073C22 5.405 17.2 1 12 1S2 5.405 2 12.073c0 5.378 3.438 9.834 8 10.926v-7.725h-2.4V12h2.4V9.797c0-2.385 1.417-3.703 3.548-3.703.716 0 1.463.126 1.463.126v2.412h-.824c-.813 0-1.066.506-1.066 1.025V12h2.1l-.336 3.274H13.12v7.725c4.562-1.092 8-5.548 8-10.926z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="bg-white text-[#6045A5] rounded-full p-2 hover:bg-gray-200 transition"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.75 2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
            </svg>
          </a>
        </div>
      </div>
  
      {/* Right Column */}
      <div className="w-full lg:w-auto">
        <a
          href="#"
          className="bg-white text-[#6045A5] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  </div>
  
  );
}
