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
import Euro15 from "@/public/images/brochures/15_euro.png";
import Image from "next/image";
import Spanish from "@/public/images/brochures/spanish.png";
import Educamp from "@/public/images/brochures/educamp.png";
import Cult from "@/public/images/brochures/cult.png";
import Saturday from "@/public/images/brochures/saturday.png";
import Comics from "@/public/images/brochures/fumetto.jpg";

export function News() {
  const images = [Euro15, Educamp, Spanish, Cult, Saturday, Comics];

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-8">
      <h2 className="text-4xl font-semibold">News</h2>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map(img => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={img.src}>
              <Card>
                <CardContent>
                  <Image
                    className="w-[350px] h-[250px] overflow-y-auto mt-6"
                    src={img}
                    alt={img.src}
                    priority
                    width={350}
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
    </div>
  );
}
