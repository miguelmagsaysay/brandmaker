'use client'

import Clients from "./components/Clients"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Image from "./components/Image"
import ServicesSection from "./components/Services"
import Benefits from "./components/Benefits"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />

    <Clients/>
    <ServicesSection />
<Image/>
<Benefits/>

<Footer/>
    </>
  )
}
