export default function PersonForm({
   handleSubmit,
   newName,
   newNumber,
   inputRef,
}) {
   return (
      <form onSubmit={handleSubmit}>
         <div>
            Name: <input type="text" name="name" ref={inputRef} />
         </div>
         <div>
            Number: <input type="text" name="number" />
         </div>
         <div>debug: {newName}</div>
         <div>debug: {newNumber}</div>
         <div>
            <button type="submit">Add</button>
         </div>
      </form>
   );
}
