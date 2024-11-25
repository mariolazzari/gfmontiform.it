import Link from "next/link";
import { Flags } from "@/components/Flags";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Corsi",
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
        <h2 className="text-center">
          <span className="text-2xl font-bold">
            CORSI TRIMESTRALI di gruppo
          </span>
          , 24 ore:
        </h2>

        <ul className="list-disc">
          <li>
            <span className="font-bold">
              Gruppi dello stesso livello linguistico (A1 – A2
            </span>{" "}
            beginners, B1 – B2 intermediate, C1 – C2 advanced)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CoursesPage;
