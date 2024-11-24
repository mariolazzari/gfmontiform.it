import { Separator } from "@/components/ui/separator";
import { Address } from "./Address";
import { Socials } from "./Socials";

export function Footer() {
  return (
    <footer className="h-[75px] space-y-1">
      <Separator />
      <Socials />
      <Address />
    </footer>
  );
}
