import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrochureProps } from "./BrochureProps";
import { LinkIcon } from "lucide-react";

function Brochure({
  title,
  subtitle,
  description,
  imagePath,
  href,
}: BrochureProps) {
  return (
    <Card className="bg-gradient-to-br from-background to-muted hover:border-primary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="w-[350px]">
        <Image
          src={`/images/brochures/${imagePath}`}
          alt={title}
          width={350}
          height={250}
          priority
        />
        <p className="text-justify text-sm my-4">{description}</p>
      </CardContent>

      <CardFooter>
        <Link href={`/pdf/brochures/${href}`} target="_blank">
          <LinkIcon />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Brochure;
