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
import Conversations from "@/public/images/brochures/conversazioni.png";
import LanguageCourses from "@/public/images/brochures/corsi_lingue.png";
import SchoolRestore from "@/public/images/brochures/recupero_scolastico.png";

import OpenDay from "@/public/images/brochures/open_day_20250915.png";
import Euro15 from "@/public/images/brochures/15_euro.png";
import Spanish from "@/public/images/brochures/spanish.png";
import Educamp from "@/public/images/brochures/educamp.png";
import Cult from "@/public/images/brochures/cult.png";
import Saturday from "@/public/images/brochures/saturday.png";
import Comics from "@/public/images/brochures/fumetto.jpg";
import Vale from "@/public/images/brochures/vale.jpg";

export function News() {
  const images = [
    Conversations,
    LanguageCourses,
    SchoolRestore,

    OpenDay,
    Vale,
    Euro15,
    Educamp,
    Spanish,
    Cult,
    Saturday,
    Comics,
  ];

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  );

  const onCardClick = (id: number) => {
    switch (id) {
      case 0:
        window.open("https://gf-montiform2.reservio.com/", "_blank");
        break;
      case 1:
        window.open("https://www.gfmontiform.it/courses", "_blank");
        break;
      case 2:
        const numero = "393312044244";
        const messaggio = encodeURIComponent(
          "Buongiorno, vorrei ricevere informazioni sui corsi di recupero scolastico e sulle lezioni individuali.",
        );
        window.open(`https://wa.me/${numero}?text=${messaggio}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-8">
      <h2 className="text-4xl text-center font-semibold">
        Novità e iniziative
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((img, id) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={img.src}>
              <Card onClick={() => onCardClick(id)}>
                <CardContent>
                  <Image
                    className="w-87.5 h-62.5 overflow-y-auto mt-6"
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
