import Header from "./Header";
import Part from "./Part";
import Total from "./Total";
export default function App() {
   const content = {
      name: "Half Stack Application Development",
      parts: [
         {
            name: "Fundamentals of React",
            exercises: 10,
         },
         {
            name: "Using Props to Pass Data",
            exercises: 7,
         },
         {
            name: "State of a Component",
            exercises: 14,
         },
      ],
   };

   return (
      <div>
         <Header content={content} />
         <div>
            {content.parts.map((part) => {
               return <Part content={part} />;
            })}
         </div>
         <Total content={content} />
      </div>
   );
}
