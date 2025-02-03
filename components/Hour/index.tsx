import { Separator } from "../ui/separator";
import { HourProps } from "./HourProps";

export function Hour({ day, ranges = [] }: HourProps) {
  return (
    <div className="p-8 bg-linear-to-br from-background to-muted rounded-xl shadow-xl w-[350px] h-[350px] space-y-5 border hover:border-primary">
      <h6 className="text-center font-semibold text-3xl">{day}</h6>
      <Separator className="bg-primary" />

      <ul className="space-y-2">
        {ranges.map((range, id) => (
          <li key={`${day}_${range.from}_${id}`} className="hover:text-primary">
            <span className="font-semibold">
              {range.from} - {range.to}
            </span>
            : {range.event}
          </li>
        ))}
      </ul>
    </div>
  );
}
