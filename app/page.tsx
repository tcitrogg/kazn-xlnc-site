"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { metainfo } from "@/lib/config";
import Image from "next/image";
import Head from 'next/head'
import Script from 'next/script'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
import HeaderBoard from "@/components/HeaderBoard";
// import ThreeDCap from '@/components/ThreeDCap';
// import HowItWorksCarousel from "@/components/HowItWorksCarousel";
// import JoinWaitlist from "@/components/JoinWaitlist";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Adjust the scroll range and speed factors as needed
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]); // slower
  const y2 = useTransform(scrollYProgress, [0, 1000], [0, -300]); // faster

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

      <section className="flex flex-col 'gap-14 relative overflow-hidden">
        <section className="">
          <section className="w-full bg-neutral-100">
            <nav className="w-full h-full lg:w-9/12 mx-auto px-2 py-2 flex justify-between md:justify-center items-center gap-14 text-sm">
              <section className="h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                </svg>
              </section>

              <ul className="hidden md:flex items-center gap-7 h-full">
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Home</a></li>
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Gallery</a></li>
                <li className="h-full"><a href="" className="h-full py-4 border-b border-b-transparent hover:border-b-neutral-400">Support</a></li>
              </ul>

              <ul className="flex items-center gap-7">
                <li className="">
                  <Drawer>
                    <DrawerTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </DrawerTrigger>
                    <DrawerContent className='bg-neutral-100 text-neutral-900 flex flex-col'>
                      <DrawerHeader>
                        <section className="flex gap-2">
                          <section className="text- font-bold flex">
                            <motion.span initial={{ opacity: 0, translateX: 15 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.1 }} className="left- text-amber-500">*.</motion.span>
                            <motion.h1 initial={{ opacity: 0, translateY: 15 }} whileInView={{ opacity: 1, translateY: 0 }} className="uppercase text-center relative left-">{metainfo.title}</motion.h1>
                          </section>
                          {/* <Separator orientation="vertical" className='red-500' /> */}
                          <h2 className='text-neutral-900 font-semibold opacity-90'>{">"} Shop</h2>
                        </section>
                        <DrawerDescription>Customize your Swag.</DrawerDescription>
                      </DrawerHeader>
                      <section className="h-">
                        <section className="w-44 md:w-96 h-auto relative flex items-center justify-center mx-auto">
                          <Image src="/images/cap-1.png" alt='' width={2000} height={2000} />
                        </section>
                      </section>
                      <section className="w-full flex gap-2 p-4">
                        <Button className='bg-transparent'>
                          {/* filled */}
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg> */}

                          {/* outline */}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-rose-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </Button>
                        <Button className='w-8/12'>Add to List</Button>

                        <DrawerClose className='w-2/12 bg-neutral-200 rounded-md flex items-center justify-center hover:bg-neutral-300'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </DrawerClose>
                      </section>
                    </DrawerContent>
                  </Drawer>
                </li>
                <li className="block md:hidden">
                  <Drawer>
                    <DrawerTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                      </svg>
                    </DrawerTrigger>
                    <DrawerContent className='bg-neutral-100 text-neutral-900'>
                      <DrawerHeader>
                        <section className="text-3xl font-bold flex">
                          <motion.span initial={{ opacity: 0, translateX: 15 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.1 }} className="left- text-amber-500">*.</motion.span>
                          <motion.h1 initial={{ opacity: 0, translateY: 15 }} whileInView={{ opacity: 1, translateY: 0 }} className="uppercase text-center relative left-">{metainfo.title}</motion.h1>
                        </section>
                        <DrawerTitle className='text-neutral-900'>With love.</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                      </DrawerHeader>
                      <Button>Submit</Button>
                      <DrawerFooter>
                        <DrawerClose>
                          Cancel
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

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

        <section className="w-full h-[80vh] md:h-screen flex justify-center item-">
          <section className="w-full md:w-11/12 lg:w-9/12 mx-auto h-[80vh] p-6 md:p-14 flex flex-col gap-5 md:gap-14 justify-around ">
            <motion.h2 initial={{ opacity: 0, translateY: 22 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }} className="text-4xl lg:text-5xl font-semibold">Check out the Swag.</motion.h2>

            <section className="flex h-full gap-2 md:gap-5 relative">
              <section className="w-full h-32 md:h-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-5">
                <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} style={{ transformOrigin: "bottom right", }} transition={{ delay: 0.2 }} className="w-full h-full bg-neutral-200 rounded-xl md:rounded-3xl overflow-hidden md:p-9 flex items-center justify-center group">
                  <section className="relative w-full md:w-1/2 h-full md:h-2/3 md:-top-24 flex items-center justify-center">
                    <Image src="/images/cap-1.png" alt='' width={2000} height={2000} className='md:grayscale md:group-hover:grayscale-0' />
                  </section>
                </motion.section>

                <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} style={{ transformOrigin: "top right", }} transition={{ delay: 0.3 }} className="w-full h-full bg-neutral-200 rounded-xl md:rounded-3xl overflow-hidden md:p-9 flex items-center justify-center group">
                  <section className="relative h-full md:h-2/3 md:-top-10 flex items-center justify-center">
                    <Image src="/images/jacket.png" alt='' width={2000} height={2000} className='md:grayscale md:group-hover:grayscale-0' />
                  </section>
                </motion.section>

                <section className="w-44 md:w-96 h-auto absolute left-1/4 md:left-[30%] bottom-0 md:-top-1/4 z-20 order-5">
                  <Image src="/images/cap-1.png" alt='' width={2000} height={2000} />
                </section>

                <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} style={{ transformOrigin: "bottom left", }} transition={{ delay: 0.4 }} className="w-full h-full bg-neutral-200 rounded-xl md:rounded-3xl overflow-hidden md:p-9 flex items-center justify-center group">
                  <section className="relative w-full md:w-1/2 h-full md:h-2/3 -top0 flex items-center justify-center">
                    <Image src="/images/beanie.png" alt='' width={2000} height={2000} className='md:grayscale md:group-hover:grayscale-0' />
                  </section>
                </motion.section>

                <motion.section initial={{ scale: 0 }} whileInView={{ scale: 1 }} style={{ transformOrigin: "top left", }} transition={{ delay: 0.5 }} className="w-full h-full bg-neutral-200 rounded-xl md:rounded-3xl overflow-hidden md:p-9 flex items-center justify-center group">
                  <section className="relative w-full md:w-1/2 h-full md:h-2/3 md:-top-20 flex items-center justify-center">
                    <Image src="/images/hoodie.png" alt='' width={2000} height={2000} className='md:grayscale md:group-hover:grayscale-0 ' />
                  </section>

                  {/* <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel> */}

                </motion.section>
              </section>
            </section>

            {/* <ThreeDCap/> */}
            {/* <spline-viewer url="https://prod.spline.design/r6i8xH9XIlYbrLsJ/scene.splinecode"></spline-viewer> */}
          </section>
        </section>


        <section className="w-full relative z-10 backdrop-blur-">
          <section className="w-full h-[80vh] absolute bottom-0 bg-gradient-to-tl from-neutral-100 via-transparent to-neutral-50" />
          <section className="w-full h-[80vh] absolute bottom-0 bg-gradient-to-t from-transparent to-neutral-50" />
          <section className="w-full md:w-11/12 mx-auto h- p-6 md:p-14 flex flex-col gap-5 md:gap-14 relative z-10">
            <motion.h2 initial={{ opacity: 0, translateY: 22 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }} className="text-4xl lg:text-5xl font-semibold">Welcome to the {metainfo.title} District.</motion.h2>

            {/* should parallax */}
            <section className="w-full h-[50vh] bg-amber-300 relative overflow-hidden rounded-3xl">
              <motion.section style={{ y: y1 }} className="w-full h-[150vh] bg-neutral-200 relative overflow-hidden top-0">
                <Image src="/images/kazn-district.jpeg" alt='' width={2000} height={2000} className='sticky top-20 left-0 w-full h-full object-cover' />
              </motion.section>
            </section>
          </section>
        </section>

        <Image src="/geometric-patterns.png" alt='' width={3000} height={2000} className='absolute -bottom-[40rem] opacity-30 rotate-90' />
        <section className="w-full h-[80vh] absolute bottom-0 bg-gradient-to-br from-transparent via-neutral-100 to-neutral-100/40" />

        <section className="w-full bg-neutral-100/ relative overflow-hidden">
          <footer className="w-full lg:w-9/12 lg:mx-auto h-[80vh] p-7 flex flex-col justify- relative z-10">
            <section className="h-3/4 flex flex-col md:flex-row md:items-end justify-between">
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
