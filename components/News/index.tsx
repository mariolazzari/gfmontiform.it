"use client";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";
import Spanish from "@/public/images/brochures/spanish.png";
import Educamp from "@/public/images/brochures/educamp.png";

export function News() {
  const images = [Educamp, Spanish, Educamp, Spanish, Educamp];

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map(img => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={img.src}>
            <Card>
              <CardContent className="h-[290px] w-[350px] relative text-center">
                <Image
                  className="rounded-md"
                  src={img}
                  alt={img.src}
                  priority
                  width={300}
                  height={250}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
