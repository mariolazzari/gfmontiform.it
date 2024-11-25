"use client";

import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const items = [
    { label: "Chiaro", theme: "light", icon: <Sun aria-label="light" /> },
    { label: "Scuro", theme: "dark", icon: <Moon aria-label="dark" /> },
    {
      label: "Sistema",
      theme: "system",
      icon: <Settings aria-label="system" />,
    },
  ];

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={32} aria-label="light" />;

      case "dark":
        return <Moon size={32} aria-label="dark" />;

      default:
        return <Settings size={32} aria-label="systeem" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{renderIcon()}</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {items.map(({ label, theme, icon }) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {icon} {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
