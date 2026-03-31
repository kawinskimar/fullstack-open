import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

export default function App() {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   return (
      <>
         <Header title="Give Feedback" />
         <div className="flex-container">
            <Button text="Good" handleClick={() => setGood(good + 1)} />
            <Button
               text="Neutral"
               handleClick={() => setNeutral(neutral + 1)}
            />
            <Button text="Bad" handleClick={() => setBad(bad + 1)} />
         </div>
         <Header title="Statistics" />
         <Statistics good={good} neutral={neutral} bad={bad} />
      </>
   );
}
