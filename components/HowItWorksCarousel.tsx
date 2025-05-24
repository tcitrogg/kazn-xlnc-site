"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
// import Autoplay from "embla-carousel-autoplay"

const rantertab_list_info = [
  { title: "Vent Freely", caption: `Type, speak, or upload screenshots of your issue.→ AI analyzes your emotion and suggests the best course of action.`, thumbnail: "/images/rant-hiw-rantertab-1.png" },
  { title: "AI Crafts Your Complaint", caption: "Instantly generates professional emails, social posts, or regulatory reports→ Edit the tone (sassy/empathic/professional) and hit send.", thumbnail: "/images/rant-hiw-rantertab-2.png" },
  { title: "Track & Earn", caption: "Monitor responses in your dashboard.→ Get rewarded with $RANT tokens and NFT badges for active participation.", thumbnail: "/images/rant-hiw-rantertab-3.png" }
]

const businessestab_list_info = [
  { title: "AI instantly organises incoming complaints ", caption: `By urgency and issue type, delivering them straight to your dashboard or existing tools like Zendesk and Salesforce.`, thumbnail: "/images/rant-hiw-businessestab-1.png" },
  { title: "Smart reply suggestions", caption: "Generate on-brand responses in seconds—complete with actionable fixes like discounts or bug alerts—ready for your team to approve, edit, or escalate.", thumbnail: "/images/rant-hiw-businessestab-2.png" },
  { title: "Real-time tracking", caption: "Monitors resolution speed and customer satisfaction, while viral-risk alerts help you stop PR fires before they spread.", thumbnail: "/images/rant-hiw-businessestab-3.png" }
]

export default function HowItWorksCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", updateCurrent)
    updateCurrent()

    return () => {
      api.off("select", updateCurrent)
    }
  }, [api])

  const handleSlideTo = (index: number) => {
    api?.scrollTo(index)
  }

  // autoplay
  React.useEffect(() => {
    if (!api) return
  
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0) // Loop to beginning
      }
    }, 3000)
  
    return () => clearInterval(autoplay)
  }, [api])

  return (
    <>
      <section id="how" className="h-auto lg:h-[90vh] flex flex-col items-center gap-6 mb-20 lg:mb-0">
        <motion.section initial={{ opacity: 0, translateY: -12 }} whileInView={{ opacity: 1, translateY: 0}}>
          <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">How it Works</h4>
        </motion.section>

        <section className="w-full flex justify-center items-center">
          <Tabs defaultValue="ranter" className="gap-9 flex justify-center items-center">
            <motion.section initial={{ opacity: 0, scaleX: 0.8 }} whileInView={{ opacity: 1, scaleX: 1 }}>
              <TabsList className="bg-[#180134] p-2 h-[60px] w-[270px] md:h-[62px] md:w-[340px] rounded-xl text-lg">
                <TabsTrigger value="ranter" className="data-[state=active]:bg-secondary data-[state=active]:font-semibold data-[state=inactive]:text-primary rounded-lg py-[1px] px-[1px]">Ranters</TabsTrigger>
                <TabsTrigger value="business" className="data-[state=active]:bg-secondary data-[state=active]:font-semibold data-[state=inactive]:text-primary rounded-lg py-[1px] px-[1px]">Businesses</TabsTrigger>
              </TabsList>
            </motion.section>
            <TabsContent value="ranter" className="w-full md:w-5/12 min-h-80">
              <section className="w-full flex flex-col lg:flex-row justify-around h-full">
                <section className="w-full lg:w-7/12 flex flex-col gap-4 p-7 lg:p-0">
                  <motion.section initial={{ opacity: 0, translateX: -15 }} whileInView={{ opacity: 1, translateX: 0}}>
                    <section className="rant-mascot-block w-16 h-16 relative">
                      <Image
                        src={"/images/rant-mascot-sad.svg"}
                        alt=""
                        fill={true}
                        className="w-full h-full"
                      />
                    </section>
                  </motion.section>
                  <section className="w-full pr-4 flex flex-col h-full">
                    {rantertab_list_info.map((item, index) => (
                      <motion.section key={index} initial={{ opacity: 0, translateY: -15 }} whileInView={{ opacity: 1, translateY: 0}}>
                        <section
                          key={index}
                          // variant={current === index ? "default" : "outline"}
                          onClick={() => handleSlideTo(index)}
                          className={`flex flex-col gap-1.5 border-l-4 pl-5 pt-1 pb-3 ${current === index ? "border-primary" : "opacity-60 border-[#171717]"} `}
                        >
                          <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                          <p className="text-sm leading-tight">{item.caption}</p>
                        </section>
                      </motion.section>
                    ))}
                  </section>
                </section>
                <Carousel setApi={setApi} className="w-8/12 md:w-6/12 lg:w-4/12 mx-auto min-h-96 relative">
                  <CarouselContent className="h-full">
                    {rantertab_list_info.map((item, index) => (
                      <CarouselItem key={index} className={`h-full flex relative pr-0 mr-0 left-0 ${current !== 0 ? "left-0" : ""}`}>
                        <motion.section key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1}}>
                          <section className="h-full relative -0">
                            <Image src={item.thumbnail} alt="" width={5000} height={5000} />
                          </section>
                        </motion.section>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* <CarouselPrevious />
                  <CarouselNext /> */}
                </Carousel>
              </section>
            </TabsContent>
            <TabsContent value="business" className="w-full md:w-5/12 min-h-80">
              <section className="w-full flex flex-col lg:flex-row justify-around h-full">
                <section className="w-full lg:w-7/12 flex flex-col gap-4 p-7 lg:p-0">
                  <motion.section initial={{ opacity: 0, translateX: 15 }} whileInView={{ opacity: 1, translateX: 0}}>
                    <section className="rant-mascot-block w-16 h-16 relative">
                      <Image
                        src={"/images/rant-mascot-sad.svg"}
                        alt=""
                        fill={true}
                        className="w-full h-full"
                      />
                    </section>
                  </motion.section>
                  <section className="w-full pr-4 flex flex-col h-full">
                    {businessestab_list_info.map((item, index) => (
                      <motion.section initial={{ opacity: 0, translateY: -15 }} whileInView={{ opacity: 1, translateY: 0}}>
                        <section
                          key={index}
                          // variant={current === index ? "default" : "outline"}
                          onClick={() => handleSlideTo(index)}
                          className={`flex flex-col gap-1.5 border-l-4 pl-5 pt-1 pb-3 ${current === index ? "border-primary" : "opacity-60 border-[#171717]"} `}
                        >
                          <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                          <p className="text-sm leading-tight">{item.caption}</p>
                        </section>
                      </motion.section>
                    ))}
                  </section>
                </section>
                <Carousel setApi={setApi} className="w-8/12 md:w-6/12 lg:w-4/12 mx-auto min-h-96 relative">
                  <CarouselContent className="h-full">
                    {businessestab_list_info.map((item, index) => (
                      <CarouselItem key={index} className={`h-full flex relative pr-0 mr-0 left-0 ${current !== 0 ? "left-0" : ""}`}>
                        <motion.section key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1}}>
                          <section className="h-full relative">
                            <Image src={item.thumbnail} alt="" width={2000} height={2000} />
                          </section>
                        </motion.section>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* <CarouselPrevious />
                  <CarouselNext /> */}
                </Carousel>
              </section>
            </TabsContent>
          </Tabs>
        </section>
      </section>
    </>
  )
}
