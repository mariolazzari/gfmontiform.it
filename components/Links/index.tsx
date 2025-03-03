import {
  Home,
  Info,
  ScrollText,
  GraduationCap,
  Clock9,
  Euro,
  Play,
} from "lucide-react";
import { LinksProps } from "./LinksProps";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

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
    {
      icon: <GraduationCap />,
      label: "Corsi",
      href: "/courses",
    },
    {
      icon: <Clock9 />,
      label: "Orari",
      href: "/hours",
    },
    {
      icon: <Euro />,
      label: "Prezzi",
      href: "/prices",
    },
    {
      icon: <Play />,
      label: "Video",
      href: "/videos",
    },
  ];

  const renderItem = (child: ReactNode) => {
    if (isVertical) {
      return <DialogClose asChild>{child}</DialogClose>;
    }

    return child;
  };

  return (
    <ul className={isVertical ? "flex flex-col gap-4" : "hidden md:flex gap-2"}>
      {links.map(link => (
        <li key={link.href}>
          {renderItem(
            <Link href={link.href} className="flex items-center gap-2 text-lg">
              {isVertical && link.icon} {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
