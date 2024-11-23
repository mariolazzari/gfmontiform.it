import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardImageProps } from "./CardImageProps";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import Image from "next/image";

export function CardImage({
  title,
  subtitle,
  description,
  imagePath,
  href,
}: CardImageProps) {
  return (
    <Card className="bg-gradient-to-br from-background to-muted hover:border-primary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="w-[350px]">
        <Image src={imagePath} alt={title} width={350} height={250} priority />

        <p className="text-justify my-4 text-sm h-[110px]">{description}</p>
      </CardContent>

      {href && (
        <CardFooter>
          <Link href={href}>
            <LinkIcon />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
