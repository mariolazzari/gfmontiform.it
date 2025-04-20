import { Download, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export function Buttons() {
  const buttons = [
    {
      label: "Scrivici",
      href: "mailto:info@gfmontiform.it",
      icon: <Mail />,
      balnk: true,
    },
    {
      label: "Brochures",
      href: "/brochures",
      icon: <Download />,
    },
  ];

  return (
    <div className="flex gap-4">
      {buttons.map(btn => (
        <Link
          key={btn.href}
          href={btn.href}
          target={btn.balnk ? "_blank" : undefined}
        >
          <Button className="w-28">
            {btn.icon}
            {btn.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
