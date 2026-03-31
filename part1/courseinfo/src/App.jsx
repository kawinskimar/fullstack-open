import Header from "./Header";
import Part from "./Part";
import Total from "./Total";
export default function App() {
   const course = "Half Stack Application Development";
   const part1 = {
      name: "Fundamentals of React",
      exercises: 10,
   };
   const part2 = {
      name: "Using Props to Pass Data",
      exercises: 7,
   };
   const part3 = {
      name: "State of a Component",
      exercises: 14,
   };

   return (
      <div>
         <Header course={course} />
         <Part content={part1} />
         <Part content={part2} />
         <Part content={part3} />
         <Total total={part1.exercises + part2.exercises + part3.exercises} />
      </div>
   );
}
