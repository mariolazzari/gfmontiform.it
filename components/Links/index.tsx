import { Home, Info, ScrollText } from "lucide-react";
import { LinksProps } from "./LinksProps";
import Link from "next/link";

export function Links({ isVertical = false }: LinksProps) {
  const links = [
    {
      icon: <Home />,
      label: "Home",
      href: "/",
    },
    {
      icon: <Info />,
      label: "Chi siamo",
      href: "/about",
    },
    {
      icon: <ScrollText />,
      label: "Brochures",
      href: "/brochures",
    },
  ];

  return (
    <ul className={isVertical ? "flex flex-col gap-4" : "hidden md:flex gap-2"}>
      {links.map(link => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="flex items-center gap-2 text-lg hover:text-xl cursor-pointer"
          >
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
