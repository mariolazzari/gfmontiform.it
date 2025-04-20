import Logo from "../Logo";
import { Buttons } from "./Buttons";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-8">
      <Logo />

      <div>
        <h1 className="text-4xl text-center max-w-xl">
          Diventa anche tu un cittadino del mondo
        </h1>

        <h2 className="text-3xl text-center max-w-xl">
          Iscriviti ai nostri corsi
        </h2>
      </div>

      <Buttons />
    </section>
  );
}
