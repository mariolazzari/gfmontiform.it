import Image from "next/image";
import { CourseProps } from "./CourseProps";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Course({ title, description, imagePath }: CourseProps) {
  return (
    <Card className="bg-linear-to-br from-background to-muted hover:border-primary ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent className="w-[350px] h-[350px]">
        <Image
          src={`/images/courses/${imagePath}`}
          alt={title}
          width={350}
          height={250}
          priority
        />
        <p className="text-justify text-sm my-4">{description}</p>
      </CardContent>
    </Card>
  );
}
