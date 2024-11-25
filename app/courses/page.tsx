import Link from "next/link";
import { Flags } from "@/components/Flags";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Download } from "lucide-react";
import { Course } from "@/components/Course";
import { CourseProps } from "@/components/Course/CourseProps";

export const metadata: Metadata = {
  title: "Corsi",
};

function CoursesPage() {
  const courses: CourseProps[] = [
    {
      title: "Apprendimento Attivo",
      description:
        "Gli studenti sono coinvolti attivamente durante le lezioni attraverso attività interattive, discussioni di gruppo, simulazioni e giochi di ruolo. Questo aiuta a sviluppare le abilità di comunicazione in situazioni reali.",
      imagePath: "1.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-4xl font-semibold text-center">I nostri corsi</h2>
      <Flags />

      <Link href="/pdf/corsi.pdf" target="_blank">
        <Button>
          <Download /> PDF Corsi
        </Button>
      </Link>

      <div className="bg-muted max-w-xl text-justify p-8 rounded-xl shadow-xl space-y-4">
        <h3 className="text-center">
          <span className="text-2xl font-bold">
            CORSI TRIMESTRALI di gruppo
          </span>
          , 24 ore:
        </h3>

        <ul className="list-disc">
          <li>
            <span className="font-bold">
              Gruppi dello stesso livello linguistico (A1 – A2
            </span>{" "}
            beginners, B1 – B2 intermediate, C1 – C2 advanced)
          </li>
          <li>Massimo 6 persone a gruppo</li>
        </ul>

        <h3 className="font-bold">
          QUOTA € 350 A TRIMESTRE - ISCRIZIONE ANNUALE € 60 incluso:
        </h3>

        <ul className="list-disc">
          <li>Materiale didattico</li>
        </ul>

        <p>
          GF Montiform vi offre un metodo innovativo di insegnamento della
          lingua, un approccio pratico e orientato all'uso effettivo della
          lingua. I corsi spesso si basano sui seguenti principi:
        </p>
      </div>

      <div className="flex justify-center items-center gap-16 flex-wrap p-8 max-w-3xl">
        {courses.map(course => (
          <Course key={course.title} {...course} />
        ))}
      </div>

      <div className="bg-muted rounded-xl shadow-xl p-8 max-w-xl text-justify">
        <p>
          In sintesi, una scuola di lingue orientata alla comunicazione pone
          l'accento sull'uso pratico della lingua attraverso attività
          interattive, conversazioni autentiche e contesti realistici, al fine
          di migliorare le abilità linguistiche degli studenti in modo efficace.
        </p>
      </div>
    </div>
  );
}

export default CoursesPage;
