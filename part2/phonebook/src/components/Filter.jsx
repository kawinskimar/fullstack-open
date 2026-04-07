export default function Filter({ handleFilter }) {
   return (
      <div>
         Filter:
         <input type="text" onChange={handleFilter}></input>
      </div>
   );
}
