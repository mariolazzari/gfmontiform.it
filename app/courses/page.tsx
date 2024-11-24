import { Course } from "@/components/Course";
import { CourseProps } from "@/components/Course/CourseProps";

function CoursesPage() {
  const cards: CourseProps[] = [
    {
      title: "Aziende",
      subtitle: "Corsi aziendali",
      description: "Clicca qui per consultare i corsi dedicati alle aziende.",
      imagePath: "companies.jpg",
      href: "/courses/companies",
    },
    {
      title: "Studenti",
      subtitle: "Corsi per studenti",
      description: "Clicca qui per consultare i corsi dedicati agli studenti.",
      imagePath: "students.jpg",
      href: "/courses/students",
    },
    {
      title: "Orari",
      subtitle: "Orari GF Montiform",
      description:
        "Clicca qui per consultare gli orari della nostra struttura.",
      imagePath: "hours.jpg",
      href: "/courses/hours",
    },
    {
      title: "Prezzi",
      subtitle: "Listino prezzi",
      description: "Clicca qui per consultare il nostro listino prezzi.",
      imagePath: "prices.jpg",
      href: "/courses/prices",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <h2 className="text-4xl font-semibold text-center">I nostri corsi</h2>
      <h3 className="text-2xl text-center mb-8">
        Seleziona la sezione più adatta alle tue esigenze
      </h3>

      <div className="flex justify-center items-center gap-16 flex-wrap">
        {cards.map(card => (
          <Course key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
