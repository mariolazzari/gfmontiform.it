import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Download } from "lucide-react";
import Image from "next/image";
import { Flags } from "@/components/Flags";
import { News } from "@/components/News";
import { References } from "@/components/References";

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
      <News />
      <References />

      <div className="flex flex-col items-center mt-8">
        <h3 className="text-2xl">3,2,1 …GO!</h3>
        <h4 className="text-xl text-center">
          La tua conoscenza della lingua inizia con il prossimo click
        </h4>
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
