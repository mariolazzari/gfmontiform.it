import Image from "next/image";
import { CourseProps } from "./CourseProps";

export function Course({ title, description, imagePath }: CourseProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-[350px] h-[450px] p-4 border hover:border-primary rounded-xl shadow-xl bg-gradient-to-br from-background to-muted">
      <h6 className="font-bold text-xl">{title}</h6>
      <Image
        src={`/images/courses/${imagePath}`}
        alt={title}
        width={350}
        height={250}
        priority
      />
      <p className="text-justify">{description}</p>
    </div>
  );
}
