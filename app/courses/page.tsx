import Link from "next/link";
import { Flags } from "@/components/Flags";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Download } from "lucide-react";
import { Course } from "@/components/Course";
import { CourseProps } from "@/components/Course/CourseProps";

export const metadata: Metadata = {
  title: "Corsi",
  alternates: {
    canonical: "/courses",
  },
};

function CoursesPage() {
  const courses: CourseProps[] = [
    {
      title: "Apprendimento Attivo",
      description:
        "Gli studenti sono coinvolti attivamente durante le lezioni attraverso attività interattive, discussioni di gruppo, simulazioni e giochi di ruolo. Questo aiuta a sviluppare le abilità di comunicazione in situazioni reali.",
      imagePath: "1.jpg",
    },
    {
      title: "Focus sulla Conversazione",
      description:
        "L'obiettivo principale è migliorare la capacità degli studenti di comunicare verbalmente. Ciò significa che gran parte del tempo verrà dedicato alla pratica di conversazioni autentiche, in modo da rendere gli studenti più sicuri nell'uso della lingua.",
      imagePath: "2.jpg",
    },
    {
      title: "Contesto Realistico",
      description:
        "Gli studenti imparano attraverso situazioni reali e contesti pratici. Gli argomenti trattati spaziano dalla vita quotidiana alle situazioni professionali, in modo da preparare gli studenti a comunicare in diverse circostanze.",
      imagePath: "3.jpg",
    },
    {
      title: "Abilità Multiple",
      description:
        "Oltre alla conversazione, vengono sviluppate anche altre abilità linguistiche come l'ascolto, la lettura e la scrittura. Questo aiuta a creare un quadro completo dell'uso della lingua.",
      imagePath: "4.jpg",
    },
    {
      title: "Materiali Autentici",
      description:
        "Vengono utilizzati materiali autentici, come video, podcast, articoli di giornale e materiali provenienti dalla vita reale, per esporre gli studenti a diversi stili di lingua e registri.",
      imagePath: "5.jpg",
    },
    {
      title: "Pratica Fuori dalle Lezioni",
      description:
        "Gli studenti vengono incoraggiati a praticare la lingua anche al di fuori delle lezioni, magari partecipando a eventi sociali o sfruttando risorse online.",
      imagePath: "6.jpg",
    },
    {
      title: "Piccoli Gruppi",
      description:
        "Le classi sono di dimensioni ridotte per permettere una maggiore interazione con l'insegnante e più opportunità di praticare la lingua.",
      imagePath: "7.jpg",
    },
    {
      title: "Approccio Progressivo:",
      description:
        "Gli studenti vengono guidati attraverso livelli di difficoltà crescente, consentendo loro di costruire una base solida prima di affrontare sfide più complesse.",
      imagePath: "8.jpg",
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
          lingua, un approccio pratico e orientato all&apos;uso effettivo della
          lingua. I corsi spesso si basano sui seguenti principi:
        </p>
      </div>

      <div className="flex justify-center items-center gap-16 flex-wrap p-8">
        {courses.map(course => (
          <Course key={course.title} {...course} />
        ))}
      </div>

      <div className="bg-muted rounded-xl shadow-xl p-8 max-w-xl text-justify">
        <p>
          In sintesi, una scuola di lingue orientata alla comunicazione pone
          l&apos;accento sull&apos;uso pratico della lingua attraverso attività
          interattive, conversazioni autentiche e contesti realistici, al fine
          di migliorare le abilità linguistiche degli studenti in modo efficace.
        </p>
      </div>
    </div>
  );
}

export default CoursesPage;
