export default function Total({ content }) {
   return (
      <p>
         Number of exercises:
         {content.parts.reduce((accumulator, part) => {
            return accumulator + part.exercises;
         }, 0)}
      </p>
   );
}
