import { ThemeToggle } from "../Theme/ThemeToggle";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <header>
      <nav className="h-[50px] flex justify-between items-center p-4">
        heade
        <ThemeToggle />
      </nav>
      <Separator />
    </header>
  );
}
