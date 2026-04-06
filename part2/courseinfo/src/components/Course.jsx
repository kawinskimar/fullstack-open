import Header from "./Header";
import Part from "./Part";
import Total from "./Total";
export default function Course({ course }) {
   return (
      <>
         <Header content={course} />
         {course.parts.map((part) => (
            <Part content={part} />
         ))}
         <Total content={course} />
      </>
   );
}
