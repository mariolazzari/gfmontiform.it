import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Logo />
      <h1 className="text-4xl text-center max-w-xl">
        Diventa anche tu un cittadino del mondo
      </h1>
      <h2 className="text-3xl text-center max-w-xl">
        Iscriviti ai nostri corsi
      </h2>

      <div className="flex gap-4">
        <Button>Scrivici</Button>
        <Button>Brochure</Button>
      </div>
    </main>
  );
}

export default HomePage;
