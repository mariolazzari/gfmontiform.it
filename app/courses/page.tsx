import Link from "next/link";
import { Flags } from "@/components/Flags";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Download } from "lucide-react";
import { Course } from "@/components/Course";
import { courses } from "@/db/courses";

export const metadata: Metadata = {
  title: "Corsi",
  alternates: {
    canonical: "/courses",
  },
};

function CoursesPage() {
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

      <div className="bg-muted max-w-xl text-justify p-8 rounded-xl shadow-xl space-y-4">
        <h3 className="text-2xl font-bold text-center">
          Corso gratuito di Business English per Partite IVA aperte in Lombardia
        </h3>

        <p>
          Hai una Partita IVA aperta in Lombardia e lavori con clienti o partner
          internazionali? Con il nostro corso di Business English, puoi
          migliorare la tua comunicazione professionale in inglese… senza alcun
          costo!
        </p>

        <p>
          Grazie ai voucher formativi della Regione Lombardia, mettiamo a
          disposizione un percorso completo e 100% finanziato per liberi
          professionisti.
        </p>

        <p>
          16 ore di formazione online in diretta (Zoom). Lezioni pratiche su:
        </p>

        <ul className="list-disc ml-4">
          <li> email professionali</li>
          <li>presentazioni e riunioni</li>
          <li>linguaggio tecnico per il business</li>
        </ul>

        <p>Accesso a registrazioni e materiali didattici</p>
        <p>Attestato riconosciuto da Regione Lombardia</p>

        <p>A chi è rivolto?</p>
        <p>
          Titolari di Partita IVA individuale, con sede legale o operativa in
          Lombardia (NON è richiesto essere residenti nella regione)
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
