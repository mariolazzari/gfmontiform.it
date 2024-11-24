import Brochure from "@/components/Brochure";
import { BrochureProps } from "@/components/Brochure/BrochureProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochures",
};

function BrochuresPage() {
  const conversations: BrochureProps[] = [
    {
      title: "English conversation",
      subtitle: "Conversazione sabato mattina",
      description: "Migliora il tuo inglese in un'atmosfera rilassata",
      imagePath: "saturday.png",
      href: "saturday.pdf",
    },
    {
      title: "Conversasione spagnola",
      subtitle: "Ogni martedì sera",
      description: "Dalle ore 18:30 alle ore 20:00",
      imagePath: "spanish.png",
      href: "spanish.pdf",
    },
    {
      title: "Nuova lingua",
      subtitle: "Hai voglia di imparare una nuva lingua",
      description: "Le meraviglie di una nuova lingua",
      imagePath: "new.png",
      href: "new.pdf",
    },
  ];

  const hallos: BrochureProps[] = [
    {
      title: "Halloween vs Ognissanti",
      subtitle: "Primo episodio",
      description: "Significati diversi",
      imagePath: "halloween1.png",
      href: "halloween.pdf",
    },
    {
      title: "Halloween vs Ognissanti",
      subtitle: "Secondo episodio",
      description: "Origine anglosassone",
      imagePath: "halloween2.png",
      href: "halloween.pdf",
    },
    {
      title: "Halloween vs Ognissanti",
      subtitle: "Terzo episodio",
      description: "Radici cattoliche",
      imagePath: "halloween3.png",
      href: "halloween.pdf",
    },
    {
      title: "Halloween VS Lo dias de los muertos",
      subtitle: "Quarto episodio",
      description: "Halloween in spagnolo",
      imagePath: "halloween4.png",
      href: "halloweenSpa.pdf",
    },
  ];

  const events: BrochureProps[] = [
    {
      title: "Open day",
      subtitle: "Mercoledì 11 settembre 2024 ore 18:00",
      description: "Via Trieste 77L, Montichiari",
      imagePath: "openday1.png",
      href: "openday1.png",
    },
    {
      title: "Open day",
      subtitle: "Mercoledì 11 settembre 2024 ore 18:00",
      description: "Via Trieste 77L, Montichiari",
      imagePath: "openday2.png",
      href: "openday2.png",
    },
    {
      title: "Serata fumetto",
      subtitle: "Con il fumettista Marco Galli",
      description: "Il manga giapponese incotra il fumetto occidentale",
      imagePath: "comics.png",
      href: "comics.pdf",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center my-12">Conversazioni</h2>
      <div className="flex justify-center items-center flex-wrap gap-16">
        {conversations.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Halloween</h2>
      <div className="flex justify-center items-center flex-wrap gap-16">
        {hallos.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Eventi</h2>
      <div className="flex justify-center items-center flex-wrap gap-16">
        {events.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>
    </div>
  );
}

export default BrochuresPage;
