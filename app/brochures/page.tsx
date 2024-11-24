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
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center my-8">Conversazioni</h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {conversations.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-8">Halloween</h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {hallos.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>
    </div>
  );
}

export default BrochuresPage;