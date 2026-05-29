import Image from "next/image";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { TextContainerProps } from "./TextContainerProps";

export function TextContainer({
  title,
  subtitle,
  paragraphs,
  imagePath,
}: TextContainerProps) {
  return (
    <div className="max-w-xl p-4 rounded-md space-y-4 text-justify bg-muted">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Separator className="bg-primary h-[1px]" />

      {subtitle && <h3 className="text-justify italic">{subtitle}</h3>}

      {imagePath && (
        <Image
          className="mx-auto"
          src={imagePath}
          alt={title}
          width={300}
          height={400}
          priority
        />
      )}

      {paragraphs.map((paragraph, key) => (
        <p key={`${title}_${key}`} className="text-justify">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
