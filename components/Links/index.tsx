import { Home } from "lucide-react";
import { LinksProps } from "./LinksProps";

export function Links({ isVertical = false }: LinksProps) {
  const links = [
    {
      icon: <Home />,
      label: "Home",
      href: "/",
    },
  ];

  return (
    <ul className={isVertical ? "flex flex-col gap-4" : "flex gap-2"}>
      {links.map(link => (
        <li
          key={link.href}
          className="flex items-center gap-2 text-lg hover:text-xl cursor-pointer"
        >
          {link.icon} {link.label}
        </li>
      ))}
    </ul>
  );
}
