import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Download } from "lucide-react";
import { CardImageProps } from "@/components/CardImage/CardImageProps";
import { CardImage } from "@/components/CardImage";
import Image from "next/image";
import { Flags } from "@/components/Flags";

function HomePage() {
  const buttons = [
    {
      label: "Scrivici",
      href: "mailto:info@gfmontiform.it",
      icon: <Mail />,
      balnk: true,
    },
    {
      label: "Brochures",
      href: "/brochures",
      icon: <Download />,
    },
  ];

  const cards: CardImageProps[] = [
    {
      title: "Elena",
      subtitle: "Montichiari",
      description:
        "Professionisti che sanno insegnare con metodi efficaci, e col sorriso, che non guasta mai.",
    },
    {
      title: "Nadia",
      subtitle: "Montichiari",
      description:
        "Chi dice che il tedesco e' una lingua ostica non ha conosciuto Giulia e Federica! L'approccio e per quel che mi riguarda la conversazione occupano ore piacevoli e costruttive. Non posso fare altro se non consigliarle a chi vuole avvicinarsi o approfondire questa lingua.",
    },
    {
      title: "Ale P.",
      subtitle: "Brescia",
      description:
        "La modalità di proporre le lezioni è divertente e coinvolgente e questo aiuta a superare quegli ostacoli dovuti alla timidezza e alla paura di sbagliare.",
    },
    {
      title: "Christine",
      subtitle: "Deggendorf",
      description:
        "Endlich eine Möglichkeit eine neue Sprache (Italienisch) auch sprechen zu lernen. Langweilig ist woanders. Es macht einfach richtig Spaß sich mit Giulia und Federica zu unterhalten. Sie sind intelligente, gebildete Frauen, die mir viel Geduld entgegenbringen, wenn meine Worte mal nicht so.",
    },
  ].map(({ title, subtitle, description }, id) => ({
    title,
    subtitle,
    imagePath: `/images/cards/card${id + 1}.png`,
    description,
  }));

  return (
    <main className="flex flex-col items-center gap-8">
      <Logo />

      <div>
        <h1 className="text-4xl text-center max-w-xl">
          Diventa anche tu un cittadino del mondo
        </h1>

        <h2 className="text-3xl text-center max-w-xl">
          Iscriviti ai nostri corsi
        </h2>
      </div>

      <div className="flex gap-4">
        {buttons.map(btn => (
          <Link
            key={btn.href}
            href={btn.href}
            target={btn.balnk ? "_blank" : undefined}
          >
            <Button className="w-28">
              {btn.icon}
              {btn.label}
            </Button>
          </Link>
        ))}
      </div>

      <Flags />

      <div className="flex justify-center items-center gap-16 container flex-wrap">
        {cards.map(card => (
          <CardImage key={card.title} {...card} />
        ))}
      </div>

      <div className="flex flex-col items-center mt-8">
        <h4 className="text-2xl">3,2,1 …GO!</h4>
        <h5 className="text-xl text-center">
          La tua conoscenza della lingua inizia con il prossimo click
        </h5>
        <Image
          className="my-8"
          src="/images/conv.png"
          alt="conversation"
          width={350}
          height={300}
          priority
        />
      </div>
    </main>
  );
}

export default HomePage;
