import { CardImage } from "../CardImage";
import { CardImageProps } from "../CardImage/CardImageProps";

export function References() {
  const cards: CardImageProps[] = [
    {
      title: "Elena",
      subtitle: "Montichiari",
      description:
        "Professionisti che sanno insegnare con metodi efficaci, e col sorriso, che non guasta mai.",
    },
    {
      title: "Nadia",
      subtitle: "Montichiari",
      description:
        "Chi dice che il tedesco e' una lingua ostica non ha conosciuto Giulia e Federica! L'approccio e per quel che mi riguarda la conversazione occupano ore piacevoli e costruttive. Non posso fare altro se non consigliarle a chi vuole avvicinarsi o approfondire questa lingua.",
    },
    {
      title: "Ale P.",
      subtitle: "Brescia",
      description:
        "La modalità di proporre le lezioni è divertente e coinvolgente e questo aiuta a superare quegli ostacoli dovuti alla timidezza e alla paura di sbagliare.",
    },
    {
      title: "Christine",
      subtitle: "Deggendorf",
      description:
        "Endlich eine Möglichkeit eine neue Sprache (Italienisch) auch sprechen zu lernen. Langweilig ist woanders. Es macht einfach richtig Spaß sich mit Giulia und Federica zu unterhalten. Sie sind intelligente, gebildete Frauen, die mir viel Geduld entgegenbringen, wenn meine Worte mal nicht so.",
    },
  ].map(({ title, subtitle, description }, id) => ({
    title,
    subtitle,
    imagePath: `/images/cards/card${id + 1}.png`,
    description,
  }));

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-3xl font-semibold text-center">
        Le nostre referenze
      </h3>

      <div className="flex justify-center items-center gap-16 container flex-wrap">
        {cards.map(card => (
          <CardImage key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
