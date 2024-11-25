import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { PriceProps } from "./PriceProps";

export function Price({
  title = "",
  imagePath = "",
  options = [],
  prices = [],
}: PriceProps) {
  return (
    <Card className="w-[350px] h-[600px] bg-gradient-to-br from-background to-muted hover:border-primary ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <Image
          src={`/images/prices/${imagePath}`}
          alt={title}
          width={350}
          height={250}
          priority
        />

        <ul className="list-disc space-y-1">
          {options.map((opt, id) => (
            <li key={`${title}_opt_${id}`}>{opt}</li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <ul className="list-disc space-y-1">
          {prices.map((price, id) => (
            <li key={`${title}_pr_${id}`}>{price}</li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
