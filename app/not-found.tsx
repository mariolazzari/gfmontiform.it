import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <h2 className="bg-destructive p-8 text-4xl rounded-xl">404</h2>
      <p className="text-2xl text-center">
        La risorsa richiesta non è stata trovata
      </p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
