import Image from "next/image";
import { FlagsProps } from "./FlagsProps";
import It from "@/public/images/flags/it.png";
import Gb from "@/public/images/flags/gb.png";
import De from "@/public/images/flags/de.png";
import Fr from "@/public/images/flags/fr.png";
import Es from "@/public/images/flags/es.png";
import Pt from "@/public/images/flags/pt.png";
import Br from "@/public/images/flags/br.png";
import Ru from "@/public/images/flags/ru.png";
import Cn from "@/public/images/flags/cn.png";
import Jp from "@/public/images/flags/jp.png";

export function Flags({ size = 64 }: FlagsProps) {
  const flags = [
    { code: "it", flag: It },
    { code: "gb", flag: Gb },
    { code: "de", flag: De },
    { code: "fr", flag: Fr },
    { code: "es", flag: Es },
    { code: "pt", flag: Pt },
    { code: "br", flag: Br },
    { code: "ru", flag: Ru },
    { code: "cn", flag: Cn },
    { code: "jp", flag: Jp },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 max-w-xl">
      {flags.map(({ code, flag }) => (
        <Image key={code} src={flag} alt={code} width={size} priority />
      ))}
    </div>
  );
}
