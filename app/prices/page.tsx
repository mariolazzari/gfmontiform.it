import { Price } from "@/components/Price";
import { PriceProps } from "@/components/Price/PriceProps";

function PricesPage() {
  const prices: PriceProps[] = [
    {
      title: "CORSO DI GRUPPO",
      imagePath: "1.jpg",
      options: [
        "A partire da due partecipanti",
        "Gruppi dello stesso livello linguistico (A1–A2 beginners, B1–B2 ",
        "Massimo 6 persone a gruppo",
      ],
      prices: [
        "Trimestrali due volte a settimana 350€",
        "Semestrale due volte a settimana 650€, incontri di conversation inclusi",
        "Annuale due volte a settimana 970€, incontri di conversation inclusi",
        "ISCRIZIONE ANNUALE € 60 incluso materiale didattico",
      ],
    },
    {
      title: "CONVERSATION",
      imagePath: "2.jpg",
      options: [
        "Suddivisa su due livelli",
        "Con madrelingua",
        "Incontri per migliorare la tua capacità di conversazione",
      ],
      prices: ["Lezione singola 15€", "Mensile 50€"],
    },
    {
      title: "RIPETIZIONE STUDENTI ",
      imagePath: "3.jpg",
      options: [
        "Incontri one to one per migliorare i risultati degli studenti a scuola",
        "Aiuto compiti",
        "Aiuto nello studio della lingua straniera",
      ],
      prices: ["250€ pacchetto da 10 ore"],
    },
    {
      title: "PERCORSO DI LINGUA",
      imagePath: "4.jpg",
      options: [
        "Percorso per adulti che vogliono imparare una lingua straniera",
        "Incontri one to one per l’insegnamento della lingua straniera o superamento di una certificazione",
        "Percorso “tailor made” cioè creato sulle esigenze dello studente",
      ],
      prices: ["300€ pacchetto da 10 ore"],
    },
    {
      title: "SPAGNOLO PER BAMBINI",
      imagePath: "5.jpg",
      options: [
        "Incontri di insegnamento della lingua spagnolo per bambini dagli 8 ai 14 anni",
        "Imparare la lingua attraverso giochi o attività quotidiane",
      ],
      prices: ["One to one 250€ pacchetto da 10 ore", "GRUPPO 50€ mensile"],
    },
  ];

  return (
    <>
      <h2 className="text-4xl text-center font-semibold">Listino prezzi</h2>
      <h3 className="text-2xl text-center">Scegli la formula giusta per te</h3>

      <div className="flex justify-center items-center flex-wrap gap-16 my-8">
        {prices.map(price => (
          <Price key={price.title} {...price} />
        ))}
      </div>

      <div className="max-w-xl mx-auto bg-muted p-8 rounded-xl shadow-xl my-4">
        <p className="text-justify">
          GF Montiform è un centro linguistico orientato alla comunicazione,
          ponendo l&apos;accento sull&apos;uso pratico della lingua attraverso
          attività interattive, conversazioni autentiche e contesti realistici,
          al fine di migliorare le abilità linguistiche degli studenti in modo
          efficace.
        </p>
      </div>

      <h4 className="text-3xl font-semibold text-center my-4">
        Impara una nuova lingua, scopri nuove culture!
      </h4>
    </>
  );
}

export default PricesPage;
