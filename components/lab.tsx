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

const list_info = [
  { title: "Discover", caption: "Learn what it's about", thumbnail: "" },
  { title: "Try", caption: "Give it a go", thumbnail: "" },
  { title: "Use", caption: "Apply it in real life", thumbnail: "" },
  { title: "Share", caption: "Tell your friends", thumbnail: "" },
  { title: "Repeat", caption: "Keep exploring", thumbnail: "" },
]

export default function lab() {
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

  return (
    <div className="mx-auto max-w-sm space-y-4">
      <Carousel setApi={setApi} className="w-full max-w-sm">
        <CarouselContent>
          {list_info.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center space-y-2">
                  <span className="text-2xl font-bold">{item.title}</span>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex flex-wrap justify-center gap-2">
        {list_info.map((item, index) => (
          <Button
            key={index}
            size="sm"
            variant={current === index ? "default" : "outline"}
            onClick={() => handleSlideTo(index)}
          >
            {item.title || `Step ${index + 1}`}
          </Button>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Slide {current + 1} of {list_info.length}
      </div>
    </div>
  )
}
