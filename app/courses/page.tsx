import { Flags } from "@/components/Flags";

function CoursesPage() {
  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-4xl font-semibold text-center">I nostri corsi</h2>
      <Flags />
    </div>
  );
}

export default CoursesPage;
