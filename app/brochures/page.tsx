import Brochure from "@/components/Brochure";
import {
  cits,
  conversations,
  cult,
  events,
  fridays,
  hallos,
} from "@/db/brochures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brochures",
  alternates: {
    canonical: "/brochures",
  },
};

function BrochuresPage() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-center my-12">Conversazioni</h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {conversations.map(conv => (
          <Brochure key={conv.title} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Halloween</h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {hallos.map(conv => (
          <Brochure key={conv.imagePath} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Eventi</h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {events.map(conv => (
          <Brochure key={conv.imagePath} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Citazioni motivazionali</h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {cits.map(conv => (
          <Brochure key={conv.imagePath} {...conv} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">
        Citazioni motivazionali per il venerdì
      </h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {fridays.map(f => (
          <Brochure key={f.imagePath} {...f} />
        ))}
      </div>

      <h2 className="text-4xl text-center my-12">Cultura</h2>
      <div className="flex justify-center items-start flex-wrap gap-16">
        {cult.map(c => (
          <Brochure key={c.imagePath} {...c} />
        ))}
      </div>
    </div>
  );
}

export default BrochuresPage;
