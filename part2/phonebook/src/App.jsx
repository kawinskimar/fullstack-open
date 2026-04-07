import { useState, useRef } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

export default function App() {
   const [persons, setPersons] = useState([
      { name: "Arto Hellas", number: "867-5309" },
   ]);
   const [filterText, setFilterText] = useState("");
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");

   const inputRef = useRef(null);
   const handleSubmit = (e) => {
      console.log(e);
      e.preventDefault();
      const formData = new FormData(e.target);
      const enteredName = formData.get("name");
      const enteredNumber = formData.get("number");
      setNewName(enteredName);
      setNewNumber(enteredNumber);
      const found = persons.find(
         (person) => person.name.toLowerCase() === enteredName.toLowerCase(),
      );

      if (found) window.alert(`${enteredName} is already in the phonebook`);
      else {
         setPersons([...persons, { name: enteredName, number: enteredNumber }]);
      }

      e.target.reset();
      inputRef.current.focus();
   };

   const handleFilter = (e) => {
      setFilterText(e.target.value);
   };

   const personsToShow =
      filterText === ""
         ? persons
         : persons.filter((p) =>
              p.name.toLowerCase().includes(filterText.toLowerCase()),
           );
   return (
      <div>
         <h2>Phonebook</h2>
         <Filter handleFilter={handleFilter} />
         <h3>Add New</h3>
         <PersonForm
            handleSubmit={handleSubmit}
            newName={newName}
            newNumber={newNumber}
            inputRef={inputRef}
         />
         <h3>Numbers</h3>
         <Persons personsToShow={personsToShow} />
      </div>
   );
}
