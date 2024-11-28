import Image from "next/image";
import { FlagsProps } from "./FlagsProps";

export function Flags({ size = 64 }: FlagsProps) {
  const flags = ["it", "gb", "de", "fr", "es", "pt", "br", "ru", "cn", "jp"];

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 max-w-xl">
      {flags.map(flag => (
        <Image
          className="h-auto w-auto"
          key={flag}
          src={`/images/flags/${flag}.png`}
          alt={flag}
          width={size}
          height={size}
          priority
        />
      ))}
    </div>
  );
}
