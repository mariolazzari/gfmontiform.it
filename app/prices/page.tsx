import { Price } from "@/components/Price";
import { PriceProps } from "@/components/Price/PriceProps";

function PricesPage() {
  const prices: PriceProps[] = [
    {
      title: "CORSO DI GRUPPO, (a partire da due partecipanti)",
      imagePath: "1.jpg",
      options: [],
      prices: [],
    },
    {
      title: "CORSO DI GRUPPO, (a partire da due partecipanti)",
      imagePath: "2.jpg",
      options: [],
      prices: [],
    },
    {
      title: "CORSO DI GRUPPO, (a partire da due partecipanti)",
      imagePath: "3.jpg",
      options: [],
      prices: [],
    },
    {
      title: "CORSO DI GRUPPO, (a partire da due partecipanti)",
      imagePath: "4.jpg",
      options: [],
      prices: [],
    },
    {
      title: "CORSO DI GRUPPO, (a partire da due partecipanti)",
      imagePath: "5.jpg",
      options: [],
      prices: [],
    },
  ];

  return (
    <>
      <h2 className="text-4xl text-center font-semibold">Listino prezzi</h2>
      <h3 className="text-2xl text-center">Scegli la formula giusta per te</h3>

      <div className="flex justify-center items-center flex-wrap gap-16">
        {prices.map(price => (
          <Price key={price.title} {...price} />
        ))}
      </div>
    </>
  );
}

export default PricesPage;
