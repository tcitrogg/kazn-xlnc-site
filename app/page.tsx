"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { metainfo } from "@/lib/config";
import Image from "next/image";
import Head from 'next/head'
import Script from 'next/script'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "sonner"
// import ThreeDCap from '@/components/ThreeDCap';
import HeaderBoard from "@/components/HeaderBoard";
// import HowItWorksCarousel from "@/components/HowItWorksCarousel";
// import JoinWaitlist from "@/components/JoinWaitlist";

export default function Home() {

  return (

    <>
      <Head>
        <meta name="robots" content="all" />
        <link rel="canonical" href={metainfo.url} key="canonical" />
        <meta name="description" content={metainfo.description} key="desc" />
        <meta property="og:title" content={metainfo.title} />
        <meta property="og:description" content={metainfo.description} />
        <meta property="og:image" content={`${metainfo.url}/og.png`} />
        {/* <meta name="google-site-verification" content="f80bboVVkBBgR-pRl_jZR6dnG7tuaYD4Fv4fSr3IhZE"/> */}
      </Head>
      {/* <Script type="application/ld+json" dangerouslySetInnerHTML={addJsonLd()} key={"jsonld"}/> */}
      {/* <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"></Script> */}

      <section className="flex flex-col gap-14">
        <section className="">
          <section className="w-full bg-neutral-100">
            <nav className="w-full h-full lg:w-9/12 mx-auto px-2 py-2 flex justify-center items-center gap-14 text-sm">
              <section className="h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                </svg>
              </section>

              <ul className="hidden lg:flex items-center gap-7 h-full">
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Home</a></li>
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Gallery</a></li>
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Support</a></li>
              </ul>

              <ul className="flex items-center gap-7">
                <li className="">
                  <a href="" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <header className="w-full h-[20vh] flex items-center mt-20">
            <section className="w-11/12 mx-auto flex flex-col items-center justify-center px-7 gap-1 relative -left-2">
              <section className="text-6xl font-bold flex">
                <motion.span initial={{ opacity: 0, translateX: 15 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.1 }} className="left- text-amber-500">*.</motion.span>
                <motion.h1 initial={{ opacity: 0, translateY: 15 }} whileInView={{ opacity: 1, translateY: 0 }} className="uppercase text-center relative left-">{metainfo.title}</motion.h1>
              </section>
              <motion.p initial={{ opacity: 0, scale: 0.5, translateY: -12 }} whileInView={{ opacity: 1, scale: 1, translateY: 0 }} transition={{ delay: 0.2 }} className="text-lg text-center font-semibold relative left-6">Designed with love.</motion.p>
            </section>
          </header>

          <HeaderBoard />
        </section>

        <section className="w-11/12 mx-auto h- p-14 flex flex-col gap-14">
          <motion.h2 initial={{ opacity: 0, translateY: 22 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }} className="text-5xl font-semibold">Check out the Swag.</motion.h2>

          <section className="flex h-full gap-5 relative">
            <section className="w-1/2 h-full flex flex-col gap-5">
              <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.15 }} style={{ transformOrigin: "bottom right", }} className="w-full h-96 bg-neutral-200 rounded-3xl overflow-hidden p-9 flex items-center justify-center group">
                <section className="relative w-1/2 h-2/3 -top-24">
                  <Image src="/images/cap-1.png" alt='' width={2000} height={2000} className='grayscale group-hover:grayscale-0' />
                </section>
              </motion.section>
              <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.12 }} style={{ transformOrigin: "top right", }} className="w-full h-96 bg-neutral-200 rounded-3xl overflow-hidden p-9 flex items-center justify-center group">
                <section className="relative w-full h-2/3 -top-10">
                  <Image src="/images/jacket.png" alt='' width={2000} height={2000} className='grayscale group-hover:grayscale-0' />
                </section>
              </motion.section>
            </section>

            <section className="w-96 h-auto absolute left-[33%] top-10 z-20">
              <Image src="/images/cap-1.png" alt='' width={2000} height={2000} />
            </section>

            <section className="w-1/2 h-full flex flex-col gap-5">
              <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.15 }} style={{ transformOrigin: "bottom left", }} className="w-full h-96 bg-neutral-200 rounded-3xl overflow-hidden p-9 flex items-center justify-center group">
                <section className="relative w-1/2 h-2/3 -top0">
                  <Image src="/images/beanie.png" alt='' width={2000} height={2000} className='grayscale group-hover:grayscale-0' />
                </section>
              </motion.section>
              <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.13 }} style={{ transformOrigin: "top left", }} className="w-full h-96 bg-neutral-200 rounded-3xl overflow-hidden p-9 flex items-center justify-center group">
                <section className="relative w-1/2 h-2/3 -top-20">
                  <Image src="/images/hoodie.png" alt='' width={2000} height={2000} className='grayscale group-hover:grayscale-0' />
                </section>
              </motion.section>
            </section>
          </section>

          {/* <ThreeDCap/> */}
          {/* <spline-viewer url="https://prod.spline.design/r6i8xH9XIlYbrLsJ/scene.splinecode"></spline-viewer> */}
        </section>



        <section className="w-11/12 mx-auto h- p-14 flex flex-col gap-14">
          <motion.h2 initial={{ opacity: 0, translateY: 22 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }} className="text-5xl font-semibold">Welcome to the {metainfo.title} District.</motion.h2>

          {/* should parallax */}
          <section className="w-full h-96 bg-neutral-200 rounded-3xl relative overflow-hidden">
            <Image src="/images/kazn-district.jpeg" alt='' width={2000} height={2000} className='sticky top-20 left-0 w-full h-full object-cover' />
          </section>
        </section>

        <section className="w-full bg-neutral-100">
          <footer className="w-full lg:w-9/12 lg:mx-auto h-[80vh] p-7 flex flex-col justify-">
            <section className="h-3/4 flex items-end justify-between">
              <section className="flex flex-col gap-2">
                <section className="text-3xl font-bold flex">
                  <motion.span initial={{ opacity: 0, translateX: 15 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.1 }} className="left- text-amber-500">*.</motion.span>
                  <motion.h1 initial={{ opacity: 0, translateY: 15 }} whileInView={{ opacity: 1, translateY: 0 }} className="uppercase text-center relative left-">{metainfo.title}</motion.h1>
                </section>

                <p className="text-sm">©2025 {metainfo.title} District ltd.</p>
              </section>

              <section className="flex gap-10">
                <ul className="flex flex-col gap-1">
                  <li className="text-sm font-semibold">SITE</li>
                  <li className="text-sm"><a href="#about" className="hover:underline">About</a></li>
                  <li className="text-sm"><a href="#gallery" className="hover:underline">Gallery</a></li>
                  <li className="text-sm"><a href="#care" className="hover:underline">Support</a></li>
                  <li className="text-sm"><a href="#bill" className="hover:underline">Sponsor</a></li>
                </ul>

                <ul className="flex flex-col gap-1">
                  <li className="text-sm font-semibold">SOCIAL</li>
                  <li className="text-sm"><a href={metainfo.contacts.x} className="hover:underline">X</a></li>
                  <li className="text-sm"><a href={metainfo.contacts.facebook} className="hover:underline">Facebook</a></li>
                  <li className="text-sm"><a href={metainfo.contacts.instagram} className="hover:underline">Instagram</a></li>
                </ul>
              </section>
            </section>
          </footer>
        </section>
      </section>

    </>
  )
}
