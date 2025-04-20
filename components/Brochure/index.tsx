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
    <Link href={`/pdf/brochures/${href}`} target="_blank">
      <Card className="bg-linear-to-br from-background to-muted hover:border-primary">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="w-[350px] h-[300px]">
          <div className="relative w-[300px] h-[250px] overflow-y-auto">
            <Image
              src={`/images/brochures/${imagePath}`}
              alt={title}
              width={350}
              height={250}
              priority
            />
          </div>
          <p className="text-justify text-sm my-4">{description}</p>
        </CardContent>

        <CardFooter>
          <LinkIcon />
        </CardFooter>
      </Card>
    </Link>
  );
}

export default Brochure;
