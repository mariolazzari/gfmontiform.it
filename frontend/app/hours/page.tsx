import Link from "next/link";
import { Hour } from "@/components/Hour";
import { HourProps } from "@/components/Hour/HourProps";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orari",
  alternates: {
    canonical: "/hours",
  },
};

function HoursPage() {
  const hours: HourProps[] = [
    {
      day: "Lunedì",
      ranges: [
        {
          from: "09:00",
          to: "10:00",
          event: "inglese base con Monica",
        },
        {
          from: "18:00",
          to: "19:00",
          event: "inglese base con Monica",
        },
        {
          from: "19:30",
          to: "20:30",
          event: "inglese intermedio con Matteo",
        },
        {
          from: "19:00",
          to: "20:30",
          event: "conversazione inglese con Monica",
        },
        {
          from: "20:00",
          to: "21:00",
          event: "inglese base con Federica",
        },
      ],
    },
    {
      day: "Martedì",
      ranges: [
        {
          from: "18:30",
          to: "19:30",
          event: "inglese intermedio con Monica",
        },
        {
          from: "18:30",
          to: "20:00",
          event: "conversazione spagnola con Matteo",
        },
      ],
    },
    {
      day: "Mercoledì",
      ranges: [
        {
          from: "09:00",
          to: "10:00",
          event: "inglese intermedio con Monica",
        },
        {
          from: "18:00",
          to: "19:00",
          event: "inglese base con Monica",
        },
        {
          from: "20:00",
          to: "21:00",
          event: "inglese base con Federica",
        },
      ],
    },
    {
      day: "Giovedì",
      ranges: [
        {
          from: "18:30",
          to: "19:30",
          event: "inglese intermedio con Monica",
        },
        {
          from: "19:30",
          to: "20:30",
          event: "inglese intermedio con Matteo",
        },
      ],
    },
    {
      day: "Venerdì",
      ranges: [
        {
          from: "15:00",
          to: "16:00",
          event: "spagnolo per giovanissimi",
        },
        {
          from: "16:00",
          to: "17:00",
          event: "conversazione inglese con Matteo (ragazzi superiori)",
        },
      ],
    },
    {
      day: "Sabato",
      ranges: [
        {
          from: "10:00",
          to: "11:30",
          event: "apeconversazione inglese con Matteo / Monica",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl font-semibold text-center mx-auto my-4">
        Orario settimanale
      </h2>

      <Link href="/images/orari.jpg" target="_blank">
        <Button>
          <Download />
          Orario Pdf
        </Button>
      </Link>

      <div className="flex justify-center items-center flex-wrap gap-16 my-4">
        {hours.map(hour => (
          <Hour key={hour.day} {...hour} />
        ))}
      </div>
    </div>
  );
}

export default HoursPage;
