export type TextContainerProps = {
  title: string;
  paragraphs: string[];
} & Partial<{
  subtitle: string;
  imagePath: string;
}>;
