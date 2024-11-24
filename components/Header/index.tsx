import { Drawer } from "../Drawer";
import { Links } from "../Links";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Separator } from "../ui/separator";

export function Header() {
  return (
    <header>
      <nav className="h-[75px] flex justify-between items-center p-4">
        <ThemeToggle />
        <Links />
        <Drawer />
      </nav>
      <Separator />
    </header>
  );
}
