import { TextContainer } from "@/components/TextContainer";
import { mainSections, mateSections } from "@/db/about";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo",
  alternates: {
    canonical: "/about",
  },
};

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl">Chi siamo</h2>

      <YouTubeEmbed
        videoid="ZLsUNCZD1jM"
        width={350}
        height={200}
        params="controls=0"
      />

      {mainSections.map(section => (
        <TextContainer key={section.title} {...section} />
      ))}

      <h3 className="text-3xl my-4">Collaboratori</h3>

      <div className="flex gap-8 flex-wrap justify-center">
        {mateSections.map(section => (
          <TextContainer key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
