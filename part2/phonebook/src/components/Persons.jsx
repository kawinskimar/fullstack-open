export default function Persons({ personsToShow }) {
   return (
      <div style={{ listStyleType: "none" }}>
         {personsToShow.map((person) => (
            <li key={person.name}>
               {person.name} {person.number}
            </li>
         ))}
      </div>
   );
}
