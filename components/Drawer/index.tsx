"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Links } from "../Links";
import Logo from "../Logo";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} />
      </SheetTrigger>

      <SheetContent className="w-64" side="right">
        <SheetHeader>
          <Logo isDrawer />
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Links isVertical />
      </SheetContent>
    </Sheet>
  );
}
