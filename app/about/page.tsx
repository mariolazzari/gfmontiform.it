import { TextContainer } from "@/components/TextContainer";
import { TextContainerProps } from "@/components/TextContainer/TextContainerProps";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo",
  alternates: {
    canonical: "/about",
  },
};

function AboutPage() {
  const mainSections: TextContainerProps[] = [
    {
      title: "GF Montiform",
      paragraphs: [
        "GF Montiform nasce nel 2019 da un’idea di Federica con un forte passione: le lingue straniere.",
        "Federica, classe 19-nonsidice, inizia a viaggiare a sei mesi, e da allora non si è mai fermata (salvo piccolo stop causa pandemia). Per lei con le lingue è stato “amore a prima vista”: si laurea in lingue e letterature straniere – specializzazione inglese e tedesco e si trasferisce anche in Germania per lavoro.",
        "Nasce così, dunque, l’idea di aprire a Montichiari un centro linguistico: corsi di lingue per aziende (Federica ha operato nel settore import export per oltre 15 anni e ha vissuto tutti gli ambiti di un'impresa che si rivolge all'estero), ripetizioni per ragazzi che vogliono migliorare il loro livello scolastico e corsi di inglese, spagnolo, russo, giapponese e tedesco per privati, che vogliono conoscere la lingua per i più diversi motivi: per lavorare, per viaggiare o anche semplicemente solo per divertirsi.",
        "Fiore all’occhiello di GF Montiform sono infatti le “powerful conversations”, incontri settimanali di gruppi di conversazione per “sciogliere la lingua ed allenare il sapere” con tavoli a tema, role playing, dibattiti e letture: insomma tutto quello che può servire per essere un vero cittadino del mondo!",
      ],
    },
    {
      title: "Federica",
      paragraphs: [
        "I miei viaggi sono partiti alla tenera età di 6 mesi, grazie alla mia famiglia e non si sono mai fermati. Con le lingue è stato 'amore a prima vista', per questo fin da giovane soggiorno spesso all’estero con lo scopo di perfezionarle.",
        "La scoperta del tedesco è avvenuta alle superiori e l’amore per questa lingua non è mai scemata, tanto che all’università lo continuo a studiare insieme alla lingua inglese e decido di trasferirmi in Germania per lavorare.",
        "Rientrando da questa esperienza, mi laureo e vengo assunta inizialmente come back office e poi export manager in un calzificio occupandomi della vendita in tutti i paesi di lingua tedesca (Austria, Germania e Svizzera), Sudafrica e Australia. Le tecniche di vendita diventano la mia passione, frequento numerosi corsi e approfondimenti e, curiosa di metterle in pratica, mi faccio strada in diverse realtà lavorative sempre come export manager.",
        "Senza mai dimenticare la mia forte passione, frequento corsi di francese e spagnolo. Decido così di tramandare questa mia passione agli altri. Nel 2020 la decisione di aprire la scuola, perché grazie alle esperienze passate, sono certe di poter offrire un servizio il più utile possibile per una migliore e più completa formazione.",
      ],
      imagePath: "/images/fede.png",
    },
  ];

  const mateSections: TextContainerProps[] = [
    {
      title: "Matteo",
      subtitle:
        "Matteo, braccio destro di Federica, si occupa dell’insegnamento della lingua spagnola, tedesca e inglese. Seguendo sempre la filosofia GF Montiform, la priorità e sempre la comunicazione!",
      paragraphs: [
        "Ciao a tutti! Mi chiamo Matteo Belloni! La mia storia d’amore per le lingue è cominciata già da piccolo, quando i miei genitori erano soliti portarmi all’estero per le vacanze estive.",
        "Dopo le medie, con grande stupore di tutti, ho deciso di iniziare il liceo linguistico a Montichiari, dove studiavo inglese come prima lingua, spagnolo e tedesco. Sopratutto per le ultime due è nata una vera e propria passione, che ho deciso di continuare all’ Università.",
        "Dopo un periodo vissuto in Germania come ragazzo alla pari, mi sono iscritto all’Universitá di Verona, dove mi sono laureato in triennale nel 2020. Dopo un’ulteriore esperienza nella capitale tedesca, ho completato i miei studi con la laurea magistrale in lingue e letterature comparate nel novembre 2022.",
        "L’interesse per le culture straniere e la passione per l’insegnamento mi hanno portato fino qui, pronto per dare il massimo in ogni esperienza!",
      ],
    },
    {
      title: "Manuel",
      subtitle: "Manuel, insegnante di Giapponese per anime e manga.",
      paragraphs: [
        "Mi chiamo Manuel. Dopo essermi diplomato al liceo Scientifico F.Gonzaga di Castiglione, inizio l’università studiando Archeologia a Padova, interrompendo però gli studi 2 anni dopo per motivi di lavoro.",
        "Attualmente sono impiegato come segretario in una scuola. Sono appassionato da sempre di Anime, Manga e Videogames, e già durante gli anni delle sscuole studio da autodidatta la lingua Giapponese. Passo poi a lezioni vere e proprie, ma non essendo presenti centri in cui si possa studiare questa affascinante lingua nelle zone limitrofe, mi rivolgo ad un centro fuori regione.",
        "Mi dedico alle lezioni di giapponese con una professoressa madrelingua e nel 2017 ottengo una certificazione internazionale di conoscenza della lingua, il JLPT N5, presso L’università Ca’ Foscari di Venezia.",
        "Continuo a mantenere attivo l’uso del giapponese grazie ai miei hobby e nel 2022 decido di contattare GF Montiform per iniziare un progetto innovativo: Insegnare le basi della lingua del Sol Levante a chi ha la mia stessa passione verso il mondo degli Anime/Manga e dei Videogames.",
      ],
    },
    {
      title: "Monica",
      subtitle: "Monica madrelingua inglese",
      paragraphs: [
        "Sono nata in Italia da padre statunitense e da madre italiana; sono bilingue dalla più tenera età. Fino al 2001 ho vissuto all’estero, quindi sono tornata in Italia dove ho frequentato il mio percorso scolastico e universitario. Ho acquisito il Diploma di maturità italiana frequentando il liceo socio-psicopedagogico a Montichiari e il Diploma di maturità statunitense affrontando una serie di test ed esami esclusivamente in lingua inglese.",
        "All'università ho approfondito lo studio della lingua e della letteratura italiana, laureandomi prima in Lettere Moderne e poi con laurea magistrale in Filologia Moderna presso l'Università Cattolica di Brescia. In seguito, in lingua inglese, ho acquisito un Diploma di Master post Laurea in Museologia presso l’Università IULM di Milano.",
        "Nonostante l’intenso percorso accademico, ho sempre mantenuto l’uso quotidiano della lingua inglese in famiglia, in viaggio e nei miei hobby, in particolare nella scrittura.",
        "Dopo diverse esperienze in scuole pubbliche e private, sono finalmente arrivata alla scuola Montiform, dove spero di poter continuare a condividere la mia passione per lo studio, la cura e il confronto tra le mie due culture d'origine.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl">Chi siamo</h2>

      <YouTubeEmbed
        videoid="ZLsUNCZD1jM"
        width={350}
        height={200}
        params="controls=0"
      />

      {mainSections.map(section => (
        <TextContainer key={section.title} {...section} />
      ))}

      <h3 className="text-3xl">Collaboratori</h3>

      {mateSections.map(section => (
        <TextContainer key={section.title} {...section} />
      ))}
    </div>
  );
}

export default AboutPage;
