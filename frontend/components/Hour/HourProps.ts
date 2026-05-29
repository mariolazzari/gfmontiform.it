type Range = {
  from: string;
  to: string;
  event: string;
};

export type HourProps = {
  day: string;
  ranges: Range[];
};
