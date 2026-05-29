import { Flags } from "@/components/Flags";
import { News } from "@/components/News";
import { References } from "@/components/References";
import { Hero } from "@/components/Hero";
import { Conversation } from "@/components/Conversaton";

function HomePage() {
  return (
    <section className="flex flex-col items-center gap-8">
      <Hero />
      <Flags />
      <News />
      <References />
      <Conversation />
    </section>
  );
}

export default HomePage;
