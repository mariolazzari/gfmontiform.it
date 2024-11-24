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
import { CourseProps } from "./CourseProps";
import { LinkIcon } from "lucide-react";

export function Course({
  title,
  subtitle,
  description,
  imagePath,
  href,
}: CourseProps) {
  return (
    <Link href={`/courses/${href}`}>
      <Card className="bg-gradient-to-br from-background to-muted hover:border-primary">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="w-[350px]">
          <Image
            src={`/images/courses/${imagePath}`}
            alt={title}
            width={350}
            height={250}
            priority
          />
          <p className="text-justify text-sm mt-2">{description}</p>
        </CardContent>

        <CardFooter>
          <LinkIcon />
        </CardFooter>
      </Card>
    </Link>
  );
}
